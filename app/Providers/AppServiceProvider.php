<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    // public function boot()
    // {
    //     Schema::defaultStringLength(191);
    // }

    public function boot(UrlGenerator $url)
    {
        Schema::defaultStringLength(191);
        // If(env('APP_ENV') !== 'local') { $url->forceScheme('https'); }
    }
}
