(function (global) {

    // mapa de carregamento do systemjs
    var map = {
        'app': 'app', // 'dist',
        'rxjs': 'libs/',
        'angular2-in-memory-web-api': 'libs/',
        '@angular': 'libs/'
    };

    // pacotes que o systemjs pode carregar
    //  caso não encontre o arquivo no mapa
    var packages = {
        'app': { main: 'boot.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade',
    ];

    // mapeia os pacotes do angular de acordo com o packageName acima
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    }

    if (global.filterSystemConfig) { global.filterSystemConfig(config); }
    System.config(config);

})(this);