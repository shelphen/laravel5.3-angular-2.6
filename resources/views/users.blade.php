<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <!-- Angular Libs -->
    <script src="libs/core-js/client/shim.min.js"></script>
    <script src="libs/zone.js/dist/zone.js"></script>
    <script src="libs/reflect-metadata/Reflect.js"></script>
    <script src="libs/systemjs/dist/system.src.js"></script>

    <!-- Configure SystemJS -->
    <script src="systemjs.config.js"></script>
    <script>
        System.import('app').catch(function(err){ console.error(err); });
    </script>
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="content">
        <my-app>Loading...</my-app>
    </div>
</div>
</body>
</html>