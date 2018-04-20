<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PublicServiceProvider;
use App\User;
use Auth;
use Cart;

class HomeController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return redirect('cyberholic-system/page/managment');
    }

    public function createAdmin($value='')
    {
        if (count(User::all())) {
            return redirect('/');
        } else {
            return User::create([
                'guid' => PublicServiceProvider::generateGuid(),
                'name' => 'Admin',
                'email' => 'admin@admin.com',
                'password' => bcrypt('admin123'),
                'point' => 9999,
                'role' => 'ADMIN',
                'level' => 'VIP'
            ]);
        }

    }

    public function getCurrentUser()
    {
        $user = array(
            'name' => Auth::user()->name,
            'email' => Auth::user()->email,
            'guid' => Auth::user()->guid,
            'isSocialUser' => Auth::user()->socialUser,
            'status' => Auth::user()->status,
            'level' => Auth::user()->level,
            'point' => Auth::user()->point
        );
        return $user;
    }

    public function test() {
        $cartArray = array();

        foreach(Cart::content() as $row) {
            array_push($cartArray, [
                'id' => $row->name,
                'rowId' => $row->rowId,
                'qty' => $row->qty,
                'price' => $row->price,
                'total' => $row->total
            ]);
        }
        return $cartArray;
    }
}
