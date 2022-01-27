<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>MylaravelApp</title>
        <link rel="stylesheet" href="{{ url('css/components.css')}}">
        <link rel="stylesheet" href="{{ url('css/top.css')}}">
    </head>

<body>
    <div class="container"></div>
                <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
                {{-- <script src="{{ url('js/app.js')}}"></script> --}}
                <script src="{{ mix('js/all.js')}}"></script>
                {{-- <script src="{{ mix('js/top.js')}}"></script> --}}
                <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
    </body>
</html>
