<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function index() {
        $users = User::all();
        return response()->json($users, 200);
    }
    public function create(Request $request) {
        $user = new User;
        dd($request);
        $user->userName = $request->userName;
        $user->userEmail = $request->userEmail;
        $user->userPassword = $request->userPassword;
        $user->save();
        return response()->json($user, 200);
    }
}
