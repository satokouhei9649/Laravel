<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>MylaravelApp</title>
        <link rel="stylesheet" href="{{ url('css/components.css')}}">
        <link rel="stylesheet" href="{{ url('css/top.css')}}">
        <script src="{{ mix('js/test.js') }}" defer></script>
        <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
    </head>

<body>
    <div id="app">
        <h1>test</h1>
    </div>
</body>
</html>
