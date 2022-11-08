<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="light">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{ asset('assets/img/logo-bidar-blog.png') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>BidarBlog</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>

<body class=" antialiased">
    @inertia
    <script>
        global = globalThis //<- this should be enough
    </script>
</body>

</html>
