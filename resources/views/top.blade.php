<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>MylaravelApp</title>
    <link rel="stylesheet" href="{{ url('css/top.css') }}">
</head>
<body>
    <main>
        <h1>topページです</h1>
        <div class="searchForm">
            <div>logo</div>
            <form action="" method="" class="search">
                <input type="text" placeholder="ここに入力" class="searchWord">
                <input type="submit" value="検索" class="submit">
            </form>
        </div>
        <div>
            <ul>
                @forelse ($posts as $post)
                    <li>
                        <a href="{{ route('posts.show', $post) }}">{{ $post->title }}</a>
                    </li>
                @empty
                    <li>No posts yet!</li>
                @endforelse
            </ul>
            
        </div>
    </main>
    <footer style="text-align: center">
        <p>お問合わせ</p>
        <p>新規登録 / ログイン</p>
        <p></p>
        <p></p>
    </footer>


</body>
</html>
