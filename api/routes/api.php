<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
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

// Route::middleware( 'auth:sanctum' )->get( '/user', function ( Request $request ) {
//   return $request->user();
// } );

Route::post( 'register', [AuthController::class, 'register'] );
Route::post( 'login', [AuthController::class, 'login'] );

Route::group( ['middleware' => 'auth:sanctum'], function () {
  Route::post( 'logout', [AuthController::class, 'logout'] );

  Route::post( 'me', function ( Request $request ) {
    return $request->user();
  } );

  Route::get( 'users', [UserController::class, 'list'] );
  Route::post( 'user/create', [UserController::class, 'create'] );
  Route::get( 'user/list', [UserController::class, 'list'] );
  Route::delete( 'user/delete/{id}', [UserController::class, 'delete'] );
  Route::get( 'user/{id}', [UserController::class, 'get'] );
  Route::post( 'user/update', [UserController::class, 'update'] );
  Route::post( 'user/login', [UserController::class, 'get_by_email_password'] );
} );
