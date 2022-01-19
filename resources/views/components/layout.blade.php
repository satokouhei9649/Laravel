<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>MylaravelApp</title>
        <link rel="stylesheet" href="{{ url('css/components.css')}}">
    </head>

<body>
    <div class="container"></div>
        {{-- header --}}
        <header>
            <div class="searchForm searchForm1">
                <form action="" method="" class="search topSearch">
                    <input type="text" placeholder="ここに入力" class="searchWord">
                    <input type="submit" value="検索" class="submit">
                </form>
            </div>
                <ul class="list">
                    <li class="icon">
                        <span id="shoppingCart"><i class="fas fa-shopping-cart fa-2x "></i></span>
                    </li>
                    <li class="icon">
                        <span id="menu"><i class="fas fa-bars fa-2x" ></i></span>
                    </li>
                </ul>
        </header>

        <!-- メニューmodal -->
        <section id="modal">
            <div id="close">✖️</div>
            <h3>新規登録・ログイン</h3>
            <p><a id="signupFormBtn">新規登録</a></p>
                <p><a href=
                    {{-- "{{route('posts.login') }}" --}}
                    >ログイン</a></p>
                    <h3>お買い物</h3>
                    <p><a href=".Food">ジャンルで探す</a></p>
                    <p><a>値段で探す</a></p>
                </section>

                {{-- お買い物カゴ --}}
                <div class="cartBox"></div>
                <div class="cart">
                    <h2>お買い物カゴにある商品<a href=# id="shopBack">✖️</a></h2>
                    <ul>
                        <li class="shoppingList"></li>
                        <li class="shoppingList"></li>
                        <li class="shoppingList"></li>
                        <li class="shoppingList"></li>
                        <li class="shoppingList"></li>
                        <li class="shoppingList"></li>
                        <li class="shoppingList"></li>
                        <li class="shoppingList"></li>
                        <li class="shoppingList"></li>
                        <li class="shoppingList"></li>
                        <li class="shoppingList"></li>
                        <li class="shoppingList"></li>
                    </ul>
                    <input type="submit" value="お支払いへ" class="buyBtn">
                    <button>戻る</button>
                </div>

                <div class="backGround"></div>
                {{-- 新規登録 --}}
                <div class="signup">
                    <a href=# id="Back">✖️</a>
                    <h2>新規登録</h2>
                        <p>名前</p>
                        <input type="text" class="name">
                        <p>メールアドレス</p>
                        <input type="text" class="email">
                        <p>住所</p>
                        <input type="text" class="email">
                        <p>電話番号</p>
                        <input type="text" class="email">
                        <button class="signBtn">新規登録</button>
                        <button class="loginBtn">ログイン画面</button>
                </div>
                {{ $slot }}

                <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
                <script src="{{ url('js/React.js')}}"></script>
                <script src="{{ url('js/top.js')}}"></script>
                <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>

    </body>
</html>
