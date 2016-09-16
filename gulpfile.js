var elixir = require('laravel-elixir');
var elixirTypescript = require('elixir-typescript');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

//elixir.config.appPath = '';
elixir(function(mix) {
    mix.sass('app.scss');
    mix.copy('node_modules/@angular', 'public/libs/@angular');
    mix.copy('node_modules/rxjs', 'public/libs/rxjs');
    mix.copy('node_modules/systemjs', 'public/libs/systemjs');
    mix.copy('node_modules/es6-promise', 'public/libs/es6-promise');
    mix.copy('node_modules/reflect-metadata', 'public/libs/reflect-metadata');
    //mix.copy('node_modules/es6-shim', 'public/es6-shim');
    mix.copy('node_modules/zone.js', 'public/libs/zone.js');

    mix.typescript(
        [
            'mock/*.ts'
        ],
        'public/js/mock',        
        {
            "target": "es6",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );
    mix.typescript(
        [
            'component/*.ts'
        ],
        'public/js/component',        
        {
            "target": "es6",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );    
    mix.typescript(
        [
            '*.ts',
        ],
        'public/js',        
        {
            "target": "es6",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );
    mix.typescript(
        [            
            'service/*.ts',            
        ],
        'public/js/service',        
        {
            "target": "es6",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );        

});
