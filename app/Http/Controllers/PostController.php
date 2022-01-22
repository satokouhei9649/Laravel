<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
class PostController extends Controller
{
    public function top()
    {
        $posts = Post::all();
        return view('top')
        ->with(['posts' => $posts]);
    }
    public function test()
    {
        return view('posts.test');
    }
    public function signup()
    {

    }
}
