<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Food;
class FoodController extends Controller
{
 public function category(Request $request) {
     $keyword_name = $request->name;
     $query = Food::query();
     $results = $query->where('name','like' , '%'.$keyword_name.'%')->get();
    return response()->json($results, 200);
 }
 public function recommend() {
     $results = Food::all()->take(10);
     return response()->json($results, 200);
 }
 public function sell() {
     $results = Food::orderby('created_at','ASC')->take(10)->get();
     return response()->json($results, 200);
 }
 public function register(Request $request) {
    dd($request);
    // $food = new Food;
    // $food->name = $request->name;
    // $food->explain = $request->explain;
    // $food->praice = $request->praice;
    // $food->save();
    return response()->json($request->photo, 200);
 }
}
