<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::post('user/create', [UserController::class, 'create']);
Route::get('user/list', [UserController::class, 'list']);
Route::delete('user/delete/{id}', [UserController::class, 'delete']);
Route::get('user/{id}', [UserController::class, 'get']);
Route::post('user/update', [UserController::class, 'update']);
