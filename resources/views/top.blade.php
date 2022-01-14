
<head>
    <meta charset="utf-8">
    <title>MylaravelApp</title>
    <link rel="stylesheet" href="{{ url('css/top.css') }}">
</head>
    <x-layout>
            <div style="width: 100% height: auto">topページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページです</div>
            <div class="searchForm">
                <form action="" method="" class="search">
                    <input type="text" placeholder="ここに入力" class="searchWord">
                    <input type="submit" value="検索" class="submit">
                </form>
            </div>

            <section class="Ad">
                <ul class="sellAd">
                    <li class="screen sp">クーポン</li>
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

        <section class="content active" id="meat" style="border: 20px solid rgb(238, 53, 53)">
            <h1>肉</h1>
            <ul class="foodUl">
                <li>牛肉</li>
                <li>豚肉</li>
                {{-- <img src="{{ asset('img/testbird.png')}}" style="width: 10%"> --}}
                <li>鳥肉</li>
            </ul>
        </section>
        <section class="content" id="fish" style="border: 20px solid rgb(34, 86, 230)">
            <h1>魚介類</h1>
            <ul class="foodUl">
                <li>魚</li>
                <li>貝</li>
                <li>海藻</li>
            </ul>
        </section>
        <section class="content" id="veg" style="border: 20px solid rgb(14, 204, 14)">
            <h1>野菜</h1>
            <ul class="foodUl">
                <li></li>
                <li>根菜類</li>
                <li>芋類</li>
                <li>果物</li>
            </ul>
        </section>
        <section class="content" id="egg" style="border: 20px solid rgb(250, 233, 3)">
            <h1> 卵</h1>
            <ul class="foodUl">
                <li>鶏卵</li>
                <li></li>
            </ul>
        </section>
        <section class="content" id='fruit' style="border: 20px solid orange">
            <h1>乳製品</h1>
            <ul class="foodUl">
                <li>チーズ</li>
                <li>ヨーグルト</li>
                <li>ヨーグルト</li>
            </ul>
        </section>
        <section class="content" id="drink" style="border: 20px solid pink">
            <h1>飲み物</h1>
            <ul class="foodUl">
                <li>お酒</li>
                <li>ジュース</li>
                <li>お茶・紅茶</li>
                <li>コーヒー</li>
            </ul>
        </section>
        <section class="content" id="others" style="border: 20px solid rgb(185, 26, 185)">
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
                <a><i class="fab fa-line fa-3x myline" data-fa-transform="grow-2" data-fa-mask="fas fa-circle fa-xs" style="border-radius: 50%;"></i></a>
                <a class="twitter"><i class="fab fa-twitter fa-2x"></i></a>
                <a class="facebook"><i class="fab fa-facebook-f fa-2x"></i></a>
                <a class="instagram"><i class="fab fa-instagram fa-2x"></i></a>
            </ul>
         <h2 id="help">Help & Guide</h2>
            <li><i class="fas fa-phone-alt fa-fw"></i> お問合わせ</li>
            <li><i class="fas fa-user fa-fw"></i> 新規登録 / ログイン</li>
            <li><i class="fas fa-hand-paper fa-fw"></i> ご利用方法</li>
            <li><i class="fas fa-box fa-fw"></i> 商品について</li>
            <li><i class="fas fa-truck-moving fa-fw"></i> 配送情報</li>
        </footer>
    </x-layout>



