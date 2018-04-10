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
Route::group(['prefix' => 'cyberholic-system', 'middleware' => 'auth', 'middleware' => 'role'], function()
{
    require_once "backend/view.php";
});

require_once "backend/api.php";

// frontend's route
require_once "frontend/view.php";
require_once "frontend/api.php";


Route::get('/create_admin', 'HomeController@createAdmin');
