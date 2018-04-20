<?php
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Auth::routes();
require_once "Auth.php";

// backend's route
Route::group(['middleware' => 'auth'], function()
{
    require_once "backend-route.php";
});

// frontend's route
require_once "frontend-route.php";

Route::get('/create_admin', 'HomeController@createAdmin');
