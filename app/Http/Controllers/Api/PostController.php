<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
class PostController extends Controller
{
      public function index()
    {
        $posts = Post::all();
        return response()->json($posts, 200);
    }
    public function create(Request $request)
    {
        $post = new Post;
        $post->title = $request->title;
        $post->body = $request->body;
        $post->save();
        return response()->json($post, 200);
    }
}
