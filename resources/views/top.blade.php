
<<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>MylaravelApp</title>
        <link rel="stylesheet" href="{{ url('css/components.css')}}">
        <link rel="stylesheet" href="{{ url('css/top.css')}}">
    </head>

<body>
    <div class="container"></div>
                <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
                <script src="{{ url('js/React.js')}}"></script>
                <script src="{{ url('js/top.js')}}"></script>
                <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
    </body>
</html>
{{-- topページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページです</div> --}}
    {{-- <div class="searchForm">
        <form action="" method="" class="search">
            <input type="text" placeholder="ここに入力" class="searchWord">
            <input type="submit" value="検索" class="submit">
        </form>
    </div>
    <section id="test"></section>
    <section class="Ad">
        <ul class="sellAd">
            <a  href="/" class="screen"><li>クーポン</li></a>
            <li class="screen">送料￥</li>
            <li class="screen">オスメメ</li>
            <li class="screen">セール</li>
        </ul>
        <button class="prev">&laquo;</button>
        <button class="next">&raquo;</button>
        <nav class="nav1"></nav>
    </section>
    <h2>オススメ商品 ・ 売れ筋</h2>
    <ul class="recommends">
        <li class="recommend"><div class="rank">1</div>オススメ</li>
        <li class="recommend"><div class="rank">2</div>オススメ</li>
        <li class="recommend"><div class="rank">3</div>オススメ</li>
        <li class="recommend"><div class="rank">4</div>オススメ</li>
        <li class="recommend">セールス</li>
        <li class="recommend">セールス</li>
        <li class="recommend">セールス</li>
        <li class="recommend">セールス</li>
        <li class="recommend">セールス</li>
        <li class="recommend">セールス</li>
        <li class="recommend">セールス</li>
    </ul>

    <h2>セール</h2>
    <ul class="Sells">
        <li class="sell"><div class="rank">1</div>オススメ</li>
        <li class="sell"><div class="rank">2</div>オススメ</li>
        <li class="sell"><div class="rank">3</div>オススメ</li>
        <li class="sell"><div class="rank">4</div>オススメ</li>
        <li class="sell">セールス</li>
        <li class="sell">セールス</li>
        <li class="sell">セールス</li>
        <li class="sell">セールス</li>
        <li class="sell">セールス</li>
    </ul>

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

    {{-- <section class="content active" id="meat" style="border: 20px solid rgb(255, 103, 103)">
        <h1>肉</h1>
        <ul class="foodUl">
            <li>牛肉</li>
            <li>豚肉</li> --}}
            {{-- <img src="{{ asset('img/testbird.png')}}" style="width: 10%"> --}}
            {{-- <li>鳥肉</li>
        </ul>
    </section>
    <section class="content" id="fish" style="border: 20px solid rgb(48, 103, 255)">
        <h1>魚介類</h1>
        <ul class="foodUl">
            <li>魚</li>
            <li>貝</li>
            <li>海藻</li>
        </ul>
    </section>
    <section class="content" id="veg" style="border: 20px solid rgb(95, 200, 95)">
        <h1>野菜</h1>
        <ul class="foodUl">
            <li></li>
            <li>根菜類</li>
            <li>芋類</li>
            <li>果物</li>
        </ul>
    </section>
    <section class="content" id="egg" style="border: 20px solid rgb(255, 245, 103)">
        <h1> 卵</h1>
        <ul class="foodUl">
            <li>鶏卵</li>
            <li></li>
        </ul>
    </section>
    <section class="content" id='fruit' style="border: 20px solid rgb(255, 202, 103)">
        <h1>乳製品</h1>
        <ul class="foodUl">
            <li>チーズ</li>
            <li>ヨーグルト</li>
            <li>ヨーグルト</li>
        </ul>
    </section>
    <section class="content" id="drink" style="border: 20px solid rgb(228, 103, 103)">
        <h1>飲み物</h1>
        <ul class="foodUl">
            <li>お酒</li>
            <li>ジュース</li>
            <li>お茶・紅茶</li>
            <li>コーヒー</li>
        </ul>
    </section>
    <section class="content" id="others" style="border: 20px solid rgb(255, 98, 255)">
        <h1>その他</h1>
        <ul class="foodUl">
            <li>お菓子・和菓子</li>
            <li>冷凍食品</li>
            <li></li>
        </ul>
    </section>
    <footer>
        <h2 id="sns">公式SNS</h2>
        <ul>
            <a href="/" class="FooterIcon"><i class="fab fa-line fa-3x myline" data-fa-transform="grow-2" data-fa-mask="fas fa-circle fa-xs" style="border-radius: 50%;"></i></a>
            <a href="/" class="twitter FooterIcon"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="/" class="facebook FooterIcon"><i class="fab fa-facebook-f fa-2x"></i></a>
            <a href="/" class="instagram FooterIcon"><i class="fab fa-instagram fa-2x"></i></a>
        </ul>
        <h2 id="help">Help & Guide</h2>
        <li><i class="fas fa-phone-alt fa-fw"></i> お問合わせ</li>
        <li><i class="fas fa-user fa-fw"></i> 新規登録 / ログイン</li>
        <li><i class="fas fa-hand-paper fa-fw"></i> ご利用方法</li>
        <li><i class="fas fa-box fa-fw"></i> 商品について</li>
        <li><i class="fas fa-truck-moving fa-fw"></i> 配送情報</li>
    </footer>
</x-layout>
 --}}
