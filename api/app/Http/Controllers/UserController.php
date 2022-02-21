<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller {
    function create( Request $req ) {
        $user            = new User;
        $user->full_name = $req->input( 'fullName' );
        $user->email     = $req->input( 'email' );
        $user->password  = Hash::make( $req->input( 'password' ) );
        $user->status    = $req->input( 'status' );

        if ( $user->save() ) {
            return response()->json( [
                'success' => 'success',
            ], 200 );
        } else {
            return response()->json( [
                'error' => 'error',
            ], 401 );
        }
    }

    function list() {
        return User::all();
    }

    function get( $id ) {
        $result = User::find( $id );
        if ( $result ) {
            return response()->json( [
                'user' => $result,
            ], 200 );
        } else {
            return response()->json( [
                'error' => 'error',
            ], 401 );
        }
    }

    function update( Request $req ) {
        $user = User::find( $req->userId );
        if ( $user ) {
            $user->full_name = $req->input( 'fullName' );
            $user->email     = $req->input( 'email' );
            if ( $req->input( 'password' ) ) {
                $user->password = Hash::make( $req->input( 'password' ) );
            }
            $user->status = $req->input( 'status' ) ? 'active' : 'inactive';

            if ( $user->save() ) {
                return response()->json( [
                    'success' => 'success',
                ], 200 );
            } else {
                return response()->json( [
                    'error' => 'error',
                ], 401 );
            }
        } else {
            return response()->json( [
                'error' => 'error',
            ], 401 );
        }
    }

    function delete( $id ) {
        $result = User::where( 'id', $id )->delete();
        if ( $result ) {
            return response()->json( [
                'success' => 'success',
            ], 200 );
        } else {
            return response()->json( [
                'error' => 'error',
            ], 401 );
        }
    }

    function get_by_email_password( Request $req ) {
        $user = User::where( 'email', '=', $req->input( 'email' ) )->first();
        if ( ! $user ) {
            return response()->json( [
                'error' => 'error',
            ], 401 );
        }
        if ( ! Hash::check( $req->input( 'password' ), $user->password ) ) {
            return response()->json( [
                'error' => 'error',
            ], 401 );
        } else {
            return response()->json( [
                'user' => $user,
            ], 200 );
        }
    }
}
