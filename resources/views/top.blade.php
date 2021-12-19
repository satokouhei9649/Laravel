
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
                    <li class="foodIcon tab1"><a><img src="{{ asset('img/steak.png')}}" ></a></li>
                    <li class="foodIcon tab2"><a><i class="fas fa-fish fa-4x "></i></a></li>
                    <li class="foodIcon tab3"><a><i class="fas fa-carrot fa-4x "></i></a></li>
                    <li class="foodIcon tab4"><a><i class="fas fa-egg fa-4x"></i></a></li>
                    <li class="foodIcon tab5"><a><i class="fas fa-apple-alt fa-4x "></i></a></li>
                    <li class="foodIcon tab6"><a><i class="fas fa-wine-bottle fa-4x "></i></a></li>
                    <li class="foodIcon tab7"><a><i class="fas fa-bread-slice fa-4x "></i></a></li>
                </ul>
        </main>
        <footer style="text-align: center">
            <p>お問合わせ</p>
            <p>新規登録 / ログイン</p>
            <p></p>
            <p></p>
        </footer>
    </x-layout>



