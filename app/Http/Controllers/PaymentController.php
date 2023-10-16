<?php

namespace App\Http\Controllers;

use App\Models\SysApiLog;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Illuminate\Validation\ValidationData;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Token\Parser;

class PaymentController extends Controller
{

    public function payment2c2p(Request $request)
    {


   
        // $payurl = env('PAY_URL');
        $payurl = "https://dev-payment.chugo.sg/api";



        $paymentData = array(
            "amount" => 100000,
            "hostname" => "dev-web.lexiscard.asia",
            "invoiceno" => 'MOS00001',
            "payurl" => $payurl,
            "logourl" => "",
            "expiredDate" =>  Carbon::now()->addMinutes(15)->format('Y-m-d H:i:s'),
            "FRONT_END_RETURN_URL" => env('APP_URL')."/payment-complete-frontend",
            "BACK_END_RETURN_URL" => env('APP_URL')."/payment-complete",
            "REDIRECT_ERROR_URL" => env('APP_URL')."/fail-payment"
        );


        return response()->json([
            'result' =>array("paymentLink" => $this->base64url_encode(json_encode($paymentData))),
            'message' => "success",
            'code' => 1,
        ], 200);

    }

    private function base64url_encode($data)
    {
        return str_replace(array('+', '/'), array('-', '_'), base64_encode($data));
    }

    public function mosPaymentFailed(Request $request){
        $payload = $request;
        $data = json_decode(base64_decode($payload), true);

        $key = "MOSPAYMENTSTATUS#".$data['invoiceno'];

        if (Redis::set($key, 'failed')) {
            Redis::expire($key, 3600); // 1 hour

            $log_data = [
                "api_description" => "MOS_FAILED_".$data['invoiceno'],
                "request_body" => $payload,
                "response_body" => "",
                "created_on" => date('Y-m-d H:i:s')
            ];

            //SysApiLog::create($log_data);
            return $log_data;
        }
    }

    public function mosPaymentComplete(Request $request){
        $paymentPayload = $request->payload;

        $jwt_response = $this->verifyJwt($paymentPayload);
        $respCode = $jwt_response['respCode']->getValue();
        $invoice_no = $jwt_response['invoiceNo']->getValue();

        $paymentStatusKey = "MOSPAYMENTSTATUS#".$invoice_no;
        $key = "MOSPAYMENT#" . trim($invoice_no);
        $data = Redis::get($paymentStatusKey);

        if (!$data) {
            echo "Token has Expired.";
            die();
        }

        if($respCode == '0000'){
          /*STORE Payment in MOS_table*/
//            if($mbr_signup == 'success'){
//                if (Redis::set($paymentStatusKey, 'success')) {
//                    Redis::expire($key, 3600); // 1 hour
//                }
//            }else{
//                if (Redis::set($paymentStatusKey, 'failed')) {
//                    Redis::expire($key, 3600); // 1 hour
//                }
//            }
        }else{

            $log_data = [
                "api_description" => "MOS_PAYMENTFAILED_" . $invoice_no,
                "request_body" => $paymentPayload,
                "response_body" => "",
                "created_on" => date('Y-m-d H:i:s')
            ];
           // SysApiLog::create($log_data);

            if (Redis::set($paymentStatusKey, 'failed')) {
                Redis::expire($key, 3600); // 1 hour
            }
        }
    }

    public function mosPaymentCompleteFrontend(Request $request){

    }


    public function verifyJwt($data){
        $jwtParser = new Parser();
        $jwt = $jwtParser->parse($data);

        $validationData = new ValidationData();
        $validationData->setCurrentTime(time()); // Adjust to your requirements

        $secretKey = env('JWT_SECRET', '');
        $signer = new Sha256();

        if ($jwt->validate($validationData) && $jwt->verify($signer, $secretKey)) {
            // JWT is valid, you can use the payload
            $decodedData = $jwt->claims();
            return $decodedData->all();
            // $decodedData now contains the decoded JWT payload
            // You can use $decodedData as needed
        } else {
            // Handle JWT verification failure here
            return 'jwt_error';
        }

    }
}
