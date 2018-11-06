<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="shortcut icon" href="{{ asset('img/favicon.ico') }}?v=1" type="image/x-icon">
        <link rel="icon" href="{{ asset('img/favicon.ico') }}?v=1" type="image/x-icon">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <title>Theo and Shy</title>
    </head>
    <body  data-spy="scroll" data-target=".navbar" data-offset="50">

        <!-- Navbar -->
        @include('common.navbar')

        <!-- Content -->
        @include('home')
        @include('aboutus')
        @include('gallery')
        @include('contact')
    
        <!-- Footer -->
        @include('common.footer')


        <script src="{{ asset('js/app.js') }}"></script>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
        <script>
            var OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
                OneSignal.init({
                appId: "93a979dd-2545-4793-9a19-dd7340f53010",
                });
            });
        </script>
    </body>
</html>
