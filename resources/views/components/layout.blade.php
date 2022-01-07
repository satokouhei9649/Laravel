<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>MylaravelApp</title>
        <link rel="stylesheet" href="{{ url('css/components.css')}}">
        <script src="https://kit.fontawesome.com/19d6cf92e4.js" crossorigin="anonymous"></script>
    </head>

    <body>
        {{-- header --}}
        <header>
            <div class="searchForm searchForm1">
                <form action="" method="" class="search topSearch">
                    <input type="text" placeholder="ここに入力" class="searchWord">
                    <input type="submit" value="検索" class="submit">
                </form>
            </div>
            <div class="menuList">
                <ul class="list">
                    <li class="icon">
                        <i class="fas fa-shopping-cart fa-2x " id="shoppingCart"></i>
                    </li>
                    <li class="icon">
                        <i class="fas fa-bars fa-2x" id="menu"></i>
                    </li>
                </ul>
            </div>
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
                <script src="{{ url('js/top.js')}}"></script>
            </body>
            </html>
