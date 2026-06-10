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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::GET("/transactions", "\App\Http\Controllers\TransactionsController@index");      
Route::GET("/transactions/{id}", "\App\Http\Controllers\TransactionsController@show");  
Route::POST("/transactions/", "\App\Http\Controllers\TransactionsController@store");    
Route::DELETE("/transactions/{id}", "\App\Http\Controllers\TransactionsController@destroy");
//todo: UPDATE


Route::GET("/accounts/total","\App\Http\Controllers\AccountsController@total");

Route::GET("/accounts", "\App\Http\Controllers\AccountsController@index");
Route::GET("/accounts", "\App\Http\Controllers\AccountsController@index");
Route::GET("/accounts/{id}", "\App\Http\Controllers\AccountsController@show");
Route::POST("/accounts/", "\App\Http\Controllers\AccountsController@store");
Route::DELETE("/accounts/{id}", "\App\Http\Controllers\AccountsController@destroy");
//todo: UPDATE