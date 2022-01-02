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
    public function show(Post $post)
    {
        return view('posts.show')
            ->with(['post' => $post]);
    }
    public function signup()
    {
    
    }
}
