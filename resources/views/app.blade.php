<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#ffffff">
    <title>Mobile Ordering Station</title>

    <link rel="preconnect" href="https://fonts.gstatic.com">
    {{--    <link rel="icon" type="image/x-icon" href="{{Vite::asset('resources/images/favicon.ico')}}">--}}


    <link rel="apple-touch-icon" sizes="57x57" href="{{Vite::asset('resources/images/favicons/apple-icon-57x57.png')}}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{Vite::asset('resources/images/favicons/apple-icon-60x60.png')}}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{Vite::asset('resources/images/favicons/apple-icon-72x72.png')}}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{Vite::asset('resources/images/favicons/apple-icon-76x76.png')}}">
    <link rel="apple-touch-icon" sizes="114x114"
          href="{{Vite::asset('resources/images/favicons/apple-icon-114x114.png')}}">
    <link rel="apple-touch-icon" sizes="120x120"
          href="{{Vite::asset('resources/images/favicons/apple-icon-120x120.png')}}">
    <link rel="apple-touch-icon" sizes="144x144"
          href="{{Vite::asset('resources/images/favicons/apple-icon-144x144.png')}}">
    <link rel="apple-touch-icon" sizes="152x152"
          href="{{Vite::asset('resources/images/favicons/apple-icon-152x152.png')}}">
    <link rel="apple-touch-icon" sizes="180x180"
          href="{{Vite::asset('resources/images/favicons/apple-icon-180x180.png')}}">
    <link rel="icon" type="image/png" sizes="192x192"
          href="{{Vite::asset('resources/images/favicons/android-icon-192x192.png')}}">
    <link rel="icon" type="image/png" sizes="32x32"
          href="{{Vite::asset('resources/images/favicons/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="96x96"
          href="{{Vite::asset('resources/images/favicons/favicon-96x96.png')}}">
    <link rel="icon" type="image/png" sizes="16x16"
          href="{{Vite::asset('resources/images/favicons/favicon-16x16.png')}}">
    {{--    <link rel="manifest" href="{{Vite::asset('resources/images/favicons/manifest.json')}}">--}}
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{Vite::asset('resources/images/favicons/ms-icon-144x144.png')}}">
    <meta name="theme-color" content="#ffffff">


    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700%7cPoppins:300,400,500,600,700,800,900&amp;display=swap"
        rel="stylesheet">
    <link href="https://prium.github.io/falcon/v3.14.0/assets/css/user.min.css" rel="stylesheet"
          id="user-style-default">
    {{--    //@vite('resources/css/app.css')--}}
</head>
<body>
<script type="text/javascript" src="https://2c2p-uat-cloudfront.s3-ap-southeast-1.amazonaws.com/2C2PPGW/secureField/my2c2p-secureFields.1.0.0.min.js"></script>
<script type="text/javascript" src="https://demo2.2c2p.com/2C2PFrontEnd/SecurePayment/api/my2c2p-sandbox.1.7.3.min.js"></script>
<!-- 2C2P SecureField will automatically generate card input fields under form '2c2p-payment-form' -->

<main class="main" id="app">
</main>
@vite(['resources/js/app.js'])

</body>
</html>

