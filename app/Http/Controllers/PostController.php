<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
class PostController extends Controller
{
    // public function index()
    // {
    //     $posts = Post::all();
    //     return response()->json($posts, 200);
    // }
    public function test()
    {
        return view('posts.test');
    }
    public function userCreate(Request $request) {
    }


}
