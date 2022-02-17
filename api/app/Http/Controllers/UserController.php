<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function register(Request $req)
    {
        $user = new User;
        $user->full_name = $req->input('fullName');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));
        $user->status = $req->input('status');

        if ($user->save()) {
            return response()->json([
                'success' => 'success'
            ], 200);
        } else {
            return response()->json([
                'error' => 'error'
            ], 401);
        }
    }

    function list()
    {
        return User::all();
    }

    function delete($id)
    {
        $result = User::where('id', $id)->delete();
        if ($result) {
            return response()->json([
                'success' => 'success'
            ], 200);
        } else {
            return response()->json([
                'error' => 'error'
            ], 401);
        }
    }

    function getUser($id)
    {
        $result = User::find($id);
        if ($result) {
            return response()->json([
                'success' => 'success'
            ], 200);
        } else {
            return response()->json([
                'error' => 'error'
            ], 401);
        }
    }
}
