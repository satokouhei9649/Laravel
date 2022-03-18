<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Food Loss</title>

    <!-- Scripts -->
    <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ url('css/header.css')}}">
    <link rel="stylesheet" href="{{ url('css/top.css')}}">
    <link rel="stylesheet" href="{{ url('css/total.css')}}">
    <link rel="stylesheet" href="{{ url('css/register.css')}}">
</head>
<body>
    <div id="app"></div>
    <script src="{{ mix('js/react.js') }}" defer></script>
</body>
</html>
