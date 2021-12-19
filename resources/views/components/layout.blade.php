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
                    <i class="fas fa-shopping-cart fa-2x"></i>
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
                <p><a href=
                    {{-- " {{route('posts.signup') }}" --}}
                    >新規登録</a></p>
                <p><a href=
                    {{-- "{{route('posts.login') }}" --}}
                    >ログイン</a></p>
                <h3>お買い物</h3>
                <p><a>ジャンルで探す</a></p>
                <p><a>値段で探す</a></p>
        </section>
              {{ $slot }}
        <script src="{{ url('js/top.js')}}"></script>
    </body>
</html>
