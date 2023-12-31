<?php

use App\Http\Controllers\WriterControler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/writers',[WriterControler::class,'index']);
Route::post('/writers',[WriterControler::class,'store']);
Route::delete('/delete/{id}',[WriterControler::class,'delete']);
Route::put("/update/{id}",[WriterControler::class,'update']);