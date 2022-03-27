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
        $request->validate([
            'userName' => 'required',
            'userEmail' => 'required',
            'userPassword' => 'required|min:3',
        ],[
            'userName.required' => '名前が入力されていません',
            'userEmail.required' => 'メールアドレスが必須です',
            'userPassword.min' => ':min 以上の英数字が必須です',
        ],);
        $user = new User;
        $user->userName = $request->userName;
        $user->userEmail = $request->userEmail;
        $user->userPassword = $request->userPassword;
        $user->save();
        $result = "success!!!";
        return response()->json($result, 200);
    }
    public function login(Request $request) {

        $user = User::where('userEmail','=',$request->userEmail)
                            ->where('userPassword','=',$request->userPassword)
                            ->get();
        if ($user) {
            return response()->json($user, 200);
        }else {
            $error = "error";
            return response()->json($error);
        }
    }
}
