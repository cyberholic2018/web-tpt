<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Auth\Events\Registered;
use App\Http\Requests;
use Illuminate\Support\Facades\Redirect;
use App\Product;
use App\User;
use App\Bonus;
use App\Address;
use App\Services\PublicServiceProvider;
use Auth;
use Cart;
use Mail;
use Log;
use Artisan;

class HomeController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return redirect('dashboard/admin');
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

    public function test($value='')
    {

        return "Artisan::call('migrate')";
        $product = Product::where('isPublish', 1)
                    // ->where('schedulePost', '<', date('Y-m-d H:i:s'))
                    // ->where('scheduleDelete', '>', date('Y-m-d H:i:s'))
                    ->paginate(1);
        // return json_encode($product);

        return view('test', [
            'title' => '123',
            'shortcut' => '/',
            'isThumbShow' => false,
            'product' => $product,
        ]);
    }

    public function testPost(Request $request)
    {
        if (Input::hasFile('files')){
            $files = Input::file('files');
            foreach ($files as $file) {
                $file->move('uploads' , time().$file->getClientOriginalName());
            }
        } else {
            echo 'Not Uploaded';
        }
    }

    public function checkAuth()
    {
        $authStatus = array(
            'auth' => Auth::check()
        );
        return $authStatus;
    }

    public function getAddress($guid)
    {
        return Address::where('owner', $guid)->first();
    }
}
