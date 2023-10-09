<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {

    Route::get('abilities', [\App\Http\Controllers\AbilitiesController::class,'index']);

    Route::get('users/datatable', [\App\Http\Controllers\UserManagement\UserController::class, 'dataTable']);
    Route::resource('users', \App\Http\Controllers\UserManagement\UserController::class);

    Route::get('permissions/datatable', [\App\Http\Controllers\UserManagement\PermissionController::class, 'dataTable']);
    Route::resource('permissions', \App\Http\Controllers\UserManagement\PermissionController::class);


    Route::get('roles/datatable', [\App\Http\Controllers\UserManagement\RoleController::class, 'dataTable']);
    Route::resource('roles', \App\Http\Controllers\UserManagement\RoleController::class);
});

Route::prefix('public')->group(function () {
    Route::get('/promo', [\App\Http\Controllers\PromoController::class, 'getPromoLocation']);
    Route::get('/item-details', [\App\Http\Controllers\PromoController::class, 'getItemDetails']);
});

