
<head>
    <meta charset="utf-8">
    <title>MylaravelApp</title>
    <link rel="stylesheet" href="{{ url('css/top.css') }}">
</head>
    <x-layout>
        <main>
            <h1>topページです</h1>
            <div class="searchForm">
                <form action="" method="" class="search">
                    <input type="text" placeholder="ここに入力" class="searchWord">
                    <input type="submit" value="検索" class="submit">
                </form>
            </div>

            <h2>オススメ商品 ・ セール</h2>
            <div class="container">
                <section>
                    <ul class="sellAd">
                        <li class="screen sp">オススメ</li>
                        <li class="screen">セールス</li>
                        <li class="screen">オスメめ</li>
                        <li class="screen">セール</li>
                    </ul>
                    <button class="prev">&laquo;</button>
                    <button class="next">&raquo;</button>
                <nav class="nav1"></nav>
                </section>
                <section>
                    <ul class="sellAd">
                        <li class="screen sp">オススメ</li>
                        <li class="screen">セールス</li>
                        <li class="screen">オスメめ</li>
                        <li class="screen">セール</li>
                    </ul>
                    <button class="prev">&laquo;</button>
                    <button class="next">&raquo;</button>
                    <nav class="nav1">
                    </nav>
                </section>
            </div>



            <h2 class="Food">ジャンルで探す</h2>
        <ul class="foodmenu">
            <li><a href="#" class="foodIcon tab1" data-id="meat"><img src="{{ asset('img/steak.png')}}" ></a></li>
            <li><a href="#" class="foodIcon tab2" data-id="fish"><i class="fas fa-fish fa-4x"></i></a></li>
            <li><a href="#" class="foodIcon tab3" data-id="veg"><i class="fas fa-carrot fa-4x"></i></a></li>
            <li><a href="#" class="foodIcon tab4" data-id="egg"><i class="fas fa-egg fa-4x"></i></a></li>
            <li><a href="#" class="foodIcon tab5" data-id="fruit"><i class="fas fa-apple-alt fa-4x"></i></a></li>
            <li><a href="#" class="foodIcon tab6" data-id="drink"><i class="fas fa-wine-bottle fa-4x"></i></a></li>
            <li><a href="#" class="foodIcon tab7" data-id="others"><i class="fas fa-bread-slice fa-4x"></i></a></li>
        </ul>

        <section class="content active" id="meat" style="border: 20px solid rgb(238, 53, 53)">
            <h1>肉</h1>
            <ul>
                <li></li>
            </ul>
        </section>
        <section class="content" id="fish" style="border: 20px solid rgb(34, 86, 230)">
            <h1>魚</h1>
            <ul>
                <li></li>
            </ul>
        </section>
        <section class="content" id="veg" style="border: 20px solid rgb(14, 204, 14)">
            <h1>野菜</h1>
            <ul>
                <li></li>
            </ul>
        </section>
        <section class="content" id="egg" style="border: 20px solid rgb(250, 233, 3)">
            <h1> 卵</h1>
            <ul>
                <li></li>
            </ul>
        </section>
        <section class="content" id='fruit' style="border: 20px solid orange">
            <h1>果物</h1>
            <ul>
                <li></li>
            </ul>
        </section>
        <section class="content" id="drink" style="border: 20px solid pink">
            <h1>飲み物</h1>
            <ul>
                <li></li>
            </ul>
        </section>
        <section class="content" id="others" style="border: 20px solid rgb(185, 26, 185)">
            <h1>その他</h1>
            <ul>
                <li></li>
            </ul>
        </section>


        </main>

        <footer>
            <p>お問合わせ</p>
            <p>新規登録 / ログイン</p>
            <p></p>
            <p></p>
        </footer>
    </x-layout>



