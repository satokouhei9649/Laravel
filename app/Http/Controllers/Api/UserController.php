<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserRequest;
class UserController extends Controller
{
    public function index() {
        $users = User::all();
        return response()->json($users, 200);
    }
    public function create(UserRequest $request) {
        $user = new User;
        $user->userName = $request->userName;
        $user->userEmail = $request->userEmail;
        $user->userPassword = $request->userPassword;
        $user->save();
        return response()->json('suceese!!!!',200);
    }
    public function login(Request $request) {
        $user = User::where('userEmail','=',$request->userEmail)
                            ->where('userPassword','=',$request->userPassword)
                            ->get();
        if ($user) {
            return response()->json($user, 200);
        }else {
            $error = "ログインに失敗しました";
            return response()->json($error);
        }
    }
}
