<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class FoodTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('foods')->insert([
        [
            'name' =>'豚肉A',
            'explain' => '産地A 内容量  １５００g',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'豚肉B',
            'explain' => '産地B 内容量  １５００g',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'豚肉C',
            'explain' => '産地C 内容量  １５００g',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'牛肉A',
            'explain' => '産地A 内容量  １５００g',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'牛肉B',
            'explain' => '産地B 内容量  １５００g',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'牛肉C',
            'explain' => '産地C 内容量  １５００g',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'鶏肉A',
            'explain' => '産地A 内容量  １５００g',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'鶏肉B',
            'explain' => '産地B 内容量  １５００g',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'鶏肉C',
            'explain' => '産地C 内容量  １５００g',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'魚A',
            'explain' => '産地A 内容量  １０００g',
            'praice' => '1500',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'魚B',
            'explain' => '産地B 内容量  １０００g',
            'praice' => '1500',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'魚C',
            'explain' => '産地C 内容量  １０００g',
            'praice' => '1500',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'貝A',
            'explain' => '産地A 内容量  ２０００g',
            'praice' => '3000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'貝B',
            'explain' => '産地B 内容量  ２０００g',
            'praice' => '3000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'葉物A',
            'explain' => '産地A 内容量  1kg',
            'praice' => '800',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'葉物B',
            'explain' => '産地B 内容量  ８００g',
            'praice' => '700',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'葉物C',
            'explain' => '産地C 内容量  １５００g',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'大豆食品A',
            'explain' => '産地A 内容量  ５００g',
            'praice' => '450',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'根野菜A',
            'explain' => '産地A 内容量  ５００g',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'根野菜B',
            'explain' => '産地B 内容量  ５００g',
            'praice' => '800',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'鶏卵A',
            'explain' => '産地A 内容量  ５０個',
            'praice' => '500',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'鶏卵B',
            'explain' => '産地B 内容量  １５０個',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'魚卵A',
            'explain' => '産地A 内容量  １５００g',
            'praice' => '2000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'チーズ',
            'explain' => '産地A 内容量  １５００g',
            'praice' => '400',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'ヨーグルト',
            'explain' => '産地A 内容量  ２０００g',
            'praice' => '500',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'酒A',
            'explain' => '産地A 内容量  １L',
            'praice' => '500',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'酒B',
            'explain' => '産地B 内容量  ２L',
            'praice' => '1000',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'酒C',
            'explain' => '産地C 内容量  １L',
            'praice' => '500',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'ジュース',
            'explain' => '産地A 内容量  １L ✖️１０本',
            'praice' => '700',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'お茶A',
            'explain' => '産地A 内容量  ５L',
            'praice' => '300',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'お茶B',
            'explain' => '産地B 内容量  １L',
            'praice' => '500',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'お菓子A',
            'explain' => '産地A 内容量  １００種類詰め合わせ',
            'praice' => '500',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'お菓子B',
            'explain' => '産地B 内容量  ２０００g',
            'praice' => '500',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'調理料A',
            'explain' => '産地A 内容量  ２０００g',
            'praice' => '800',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        [
            'name' =>'調理料B',
            'explain' => '産地B 内容量  １５００g',
            'praice' => '600',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ],
        ]);
    }
}
