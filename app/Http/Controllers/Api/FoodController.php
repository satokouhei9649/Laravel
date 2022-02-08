<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Food;
class FoodController extends Controller
{
 function CategorySearch(Request $request) {
     dd($request);
     $keyword_name = $request->name;
     $query = Food::query();
     $results = $query->where('name','like',$keyword_name)->get();
    return response()->json($results, 200);
 }
}
