
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

                <ul class="foodmenu">
                    <li><a href="#" class="foodIcon tab1" data-id="meat"><img src="{{ asset('img/steak.png')}}" ></a></li>
                    <li><a href="#" class="foodIcon tab2" data-id="fish"><i class="fas fa-fish fa-4x"></i></a></li>
                    <li><a href="#" class="foodIcon tab3" data-id="veg"><i class="fas fa-carrot fa-4x"></i></a></li>
                    <li><a href="#" class="foodIcon tab4" data-id="egg"><i class="fas fa-egg fa-4x"></i></a></li>
                    <li><a href="#" class="foodIcon tab5" data-id="fruit"><i class="fas fa-apple-alt fa-4x"></i></a></li>
                    <li><a href="#" class="foodIcon tab6" data-id="drink"><i class="fas fa-wine-bottle fa-4x"></i></a></li>
                    <li><a href="#" class="foodIcon tab7" data-id="others"><i class="fas fa-bread-slice fa-4x"></i></a></li>
                </ul>
                <section class="content active" id="meat" style="border: 10px solid red">
                    肉
                </section>
                <section class="content" id="fish">
                    魚
                </section>
                <section class="content" id="veg">
                    野菜
                </section>
                <section class="content" id="egg">
                    卵
                </section>
                <section class="content" id='fruit'>
                    果物
                </section>
                <section class="content" id="drink">
                    飲み物
                </section>
                <section class="content" id="others">
                    その他
                </section>
        </main>
        <footer style="text-align: center">
            <p>お問合わせ</p>
            <p>新規登録 / ログイン</p>
            <p></p>
            <p></p>
        </footer>
    </x-layout>



