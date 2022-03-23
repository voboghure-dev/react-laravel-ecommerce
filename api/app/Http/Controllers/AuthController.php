<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller {

  /**
   * Register user
   */
  function register( Request $request ) {
    $request->validate( [
      'name'     => ['required', 'string'],
      'email'    => ['required', 'string', 'unique:users,email'],
      'password' => ['required', 'string'],
    ] );

    $user = User::create( [
      'name'     => $request->name,
      'email'    => $request->email,
      'password' => bcrypt( $request->password ),
    ] );

    $token = $user->createToken( 'MyAppToken' )->plainTextToken;
    $response = ['user' => $user, 'token' => $token];

    return response( $response, 201 );
  }

  /**
   * Login user
   */
  function login( Request $request ) {
    $request->validate( [
      'email'    => ['required', 'string', 'email'],
      'password' => ['required', 'string'],
    ] );

    // Check if email exist
    $user = User::where( 'email', $request->email )->first();

    // Check if password match
    if ( ! $user || ! Hash::check( $request->password, $user->password ) ) {
      return response( [
        'message' => 'Credential does not match',
      ], 401 );
    }

    $token = $user->createToken( 'MyAppToken' )->plainTextToken;
    $response = ['user' => $user, 'token' => $token];

    return response( $response, 200 );
  }

  /**
   * Logout user
   */
  public function logout( Request $request ) {
    auth()->user()->tokens()->delete();

    return response( 'User logged out successfully', 200 );
  }

}
