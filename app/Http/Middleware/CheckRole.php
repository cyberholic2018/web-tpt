<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class CheckRole
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
        if (Auth::guest()) {
            return redirect('/cyberholic-system/login');
        } else {
            if (Auth::user()->role != 'ADMIN') {
                return redirect('/');
            } else {
                return $next($request);
            }
        }


        return $next($request);
    }
}
