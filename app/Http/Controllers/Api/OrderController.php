<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    //
    public function order(Request $request) {
        $order = new Order;
        $order->name = $request->name;
        $order->prefectures = $request->prefectures;
        $order->municipality = $request->municipality;
        $order->address = $request->address;
        $order->callNumber = $request->phoneNumber;
        $order->method = $request->method;
        // 問い合わせ番号作成
        $InfoNumber = mt_rand(10000000,99999999);
        $order->InfoNumber = $InfoNumber;
        $order->save();
        $results = $order->InfoNumber;
        return response()->json($results, 200);
    }
}
