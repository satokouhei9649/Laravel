<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Store;

class OrderController extends Controller
{
    //
    public function order(Request $request) {

        $order = new Order;

        // 注文者の情報入力
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
        $goods = $request->goods;
        foreach($goods as $good) {
            $store = new Store;
            $store->goods = $good;
            $store->InfoNumber = $InfoNumber;
            $store->save();
        }
        $results = $order->InfoNumber;
        return response()->json($results, 200);
    }
    // お問い合わせ検索
    public function InfoNumberSearch(Request $request) {
        $InfoNumber = $request->InfoNumber;
        $query = Store::query();
        $results = $query->where('infoNumber',$InfoNumber)->get();
        return response()->json($results, 200);
    }
}
