<?php

namespace App\Http\Middleware;

use Closure;
use App\SiteMeta;

class GetMeta
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $siteMeta = SiteMeta::all()->first();

        return $next($request);
    }
}
