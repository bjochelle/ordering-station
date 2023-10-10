<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Promo;
use Illuminate\Support\Facades\Http;
class PromoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }


    public function getPromoLocation(Request $request){
        $now = Carbon::now()->format('Y-m-d');

        $searchValue = $request->search;
        $columnOrder = $request->sortby;
        $orderDirection = $request->sortdir;
        $perPage = intVal($request->currentpage);

        return Promo::join('crm_promo_item as cpi',function ($join) {
            $join->on('cpi.item_id', '=', 'v_ims_live_promo.ref_id')
                 ->on('cpi.promo_id', '=', 'v_ims_live_promo.promo_id');
        })->join('v_ims_live_product as v','v.item_id','cpi.item_id')
        ->where(function ($q) use ($searchValue) {
            $q->where('v.item_desc', 'LIKE', "%$searchValue%")
                ->orwhere('model_id', 'LIKE', "%$searchValue%")
                ->orwhere('inv_dim1', 'LIKE', "%$searchValue%")
                ->orwhere('inv_dim2', 'LIKE', "%$searchValue%");
        })
            ->where('loc_id','like','TRS%')
            ->whereDate('eff_from', '<=', $now)
            ->whereDate('eff_to', '>=', $now)
            ->select('v.item_id','cpi.min_qty','loc_id','v.item_desc', 'inv_dim1','inv_dim2','model_id','regular_price','mbr_price','image_name')
            ->orderBy($columnOrder, $orderDirection)->paginate($perPage);
    }

    public function getItemDetails(Request $request)
    {
//        $response = Http::get('https://localhost-ctl.challenger.sg/product/'.$request->id.'/details');
        $response = Http::get('https://www.challenger.sg/product/'.$request->id.'/details');
        return $response->collect();
    }

    public function getItemDescription(Request $request)
    {
//        $response = Http::get('https://localhost-ctl.challenger.sg/product/'.$request->id.'/details');
        $response = Http::get('https://www.challenger.sg/product/'.$request->id.'/descriptions');
        return $response->collect();
    }
}
