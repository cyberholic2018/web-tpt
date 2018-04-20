<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Services\PublicServiceProvider;
use App\User;
use App\Post;
use Auth;
use Hash;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    protected $publicServiceProvider;

    public function __construct(PublicServiceProvider $publicServiceProvider)
    {
        $this->middleware('auth');
        $this->publicServiceProvider = $publicServiceProvider;
    }


    public function index()
    {

    }

    public function getAdminList()
    {
        if (Auth::user()->role == 'ADMIN') {
            return $users = DB::table('users')
                    ->where('role', 'ADMIN')->paginate(15);
        } else {
            # code...
        }

    }

    public function getNormalList()
    {
        if (Auth::user()->role == 'ADMIN') {
            return $users = DB::table('users')
                    ->where('role', 'NORMAL')->paginate(15);
        } else {
            # code...
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ])->validate();

        if (Auth::user()->role == 'ADMIN') {
            return User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'role' => 'ADMIN',
                'level' => 'NORMAL',
                'password' => bcrypt($data['password']),
                'guid' => $this->publicServiceProvider->generateGuid()
            ]);
        } else {
            abort(401);
        }
    }

    public function createNormalUser(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ])->validate();

        if (Auth::user()->role == 'ADMIN') {
            return User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'role' => 'ADMIN',
                'level' => 'NORMAL',
                'password' => bcrypt($data['password']),
                'guid' => $this->publicServiceProvider->generateGuid()
            ]);
        } else {
            abort(401);
        }
    }

    public function resetPassword(Request $request)
    {
        $data = $request->all();
        $oldPassword = $data['oldPassword'];
        $newPassword = $data['newPassword'];
        $confirmedPassword = $data['confirmedPassword'];
        $callback = [];

        $validator = Validator::make($data, [
            'newPassword' => 'required|string|min:6|max:32',
            'confirmedPassword' => 'required|string|min:6|max:32',
        ])->validate();

        if (Hash::check($oldPassword, Auth::user()->password)) {
            if ($newPassword == $confirmedPassword) {
                if ($newPassword != $oldPassword) {
                    DB::table('users')
                        ->where('guid', Auth::user()->guid)
                        ->update(['password' => bcrypt($newPassword)]);
                    $message = '密碼重設成功';
                    $status = 200;
                } else {
                    $message = '新密碼不可與舊密碼一致';
                    $status = 423;
                }
            } else {
                $message = '密碼不一致，請確認';
                $status = 423;
            }
        } else {
            $message = '舊密碼錯誤';
            $status = 423;
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);
    }

    public function deleteAdmin(Request $request)
    {
        $guid = $request->all();

        if (Auth::user()->guid == $guid['adminUser']) {
            $message = '你不可以刪除自己的帳號';
            $status = 423;
        } else {
            DB::table('users')
                ->where('guid', $guid['adminUser'])
                ->delete();
            $message = '刪除成功';
            $status = 200;
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);
    }

    public function generateDumyNormalUser()
    {
        for ( $i=0 ; $i<100 ; $i++ ) {
            User::create([
                'name' => 'dummyUser'.$i,
                'email' => 'dummyUser'.$i.'@gmail.com',
                'role' => 'NORMAL',
                'level' => 'NORMAL',
                'password' => bcrypt('111111'),
                'guid' => $this->publicServiceProvider->generateGuid()
            ]);
        }

        return $users = DB::table('users')
                ->where('role', 'NORMAL')
                ->get();
    }

    public function generateDumyAdminUser()
    {
        for ( $i=0 ; $i<10 ; $i++ ) {
            User::create([
                'name' => 'dummyAdmin'.$i,
                'email' => 'dummyAdmin'.$i.'@gmail.com',
                'role' => 'ADMIN',
                'level' => 'NORMAL',
                'password' => bcrypt('111111'),
                'guid' => $this->publicServiceProvider->generateGuid()
            ]);
        }

        return $users = DB::table('users')
                ->where('role', 'ADMIN')
                ->get();
    }

    public function generateDumyPost()
    {
        $author = Auth::user()->guid;
        $authorName = Auth::user()->name;

        for ( $i=0 ; $i<120 ; $i++ ) {
            Post::create([
                'author' => $author,
                'authorName' => $authorName,
                'guid' => $this->publicServiceProvider->generateGuid(),
                'title' => 'this is dumy post'.$i,
                'content' => 'this is dumy content '.$i.'.<br>'.'this is dumy content '.$i.'.<br>'.'this is dumy content '.$i.'.<br>'.'this is dumy content '.$i.'.<br>'.'this is dumy content '.$i.'.<br>'.'this is dumy content '.$i.'.<br>'
            ]);
        }

        return $users = DB::table('posts')
                ->where('author', $author)
                ->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
