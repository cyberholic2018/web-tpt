<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
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

    public function __construct()
    {
        // $this->middleware('auth');
    }

    // 取得管理者帳號列表
    public function getAdminList()
    {
        if (Auth::user()->role == 'ADMIN') {
            return $users = DB::table('users')
                    ->where('role', 'ADMIN')->paginate(15);
        } else {
            return response()->json([ 'status' => 401, 'message' => 'Permission denied, you are not the administrator.' ], 401);
        }
    }

    // 取得一般使用者列表
    public function getNormalList()
    {
        if (Auth::user()->role == 'ADMIN') {
            return $users = DB::table('users')
                    ->where('role', 'NORMAL')->paginate(15);
        } else {
            return response()->json([ 'status' => 401, 'message' => 'Permission denied, you are not the administrator.' ], 401);
        }
    }

    // 建立後台使用者帳號
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
                'guid' => str_random(42)
            ]);
        } else {
            return response()->json([ 'status' => 401, 'message' => 'Permission denied, you are not the administrator.' ], 401);
        }
    }

    // 建立一般使用者帳號
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
                'guid' => str_random(42)
            ]);
        } else {
            return response()->json([ 'status' => 401, 'message' => 'Permission denied, you are not the administrator.' ], 401);
        }
    }

    // 重設管理者密碼
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

    // 刪除管理者
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

    // 產生測試資料 - 一般使用者
    public function generateDumyNormalUser()
    {
        for ( $i=0 ; $i<100 ; $i++ ) {
            User::create([
                'name' => 'dummyUser'.$i,
                'email' => 'dummyUser'.$i.'@gmail.com',
                'role' => 'NORMAL',
                'level' => 'NORMAL',
                'password' => bcrypt('111111'),
                'guid' => str_random(42)
            ]);
        }

        return $users = DB::table('users')
                ->where('role', 'NORMAL')
                ->get();
    }

    // 產生測試資料 - 後台使用者 (最高權限)
    public function generateDumyAdminUser()
    {
        for ( $i=0 ; $i<10 ; $i++ ) {
            User::create([
                'name' => 'dummyAdmin'.$i,
                'email' => 'dummyAdmin'.$i.'@gmail.com',
                'role' => 'ADMIN',
                'level' => 'NORMAL',
                'password' => bcrypt('111111'),
                'guid' => str_random(42)
            ]);
        }

        return $users = DB::table('users')
                ->where('role', 'ADMIN')
                ->get();
    }

    // 產生測試資料 - 文章
    public function generateDumyPost()
    {
        $author = Auth::user()->guid;
        $authorName = Auth::user()->name;

        for ( $i=0 ; $i<120 ; $i++ ) {
            Post::create([
                'author' => $author,
                'authorName' => $authorName,
                'guid' => str_random(42),
                'title' => 'this is dumy post'.$i,
                'content' => 'this is dumy content '.$i.'.<br>'.'this is dumy content '.$i.'.<br>'.'this is dumy content '.$i.'.<br>'.'this is dumy content '.$i.'.<br>'.'this is dumy content '.$i.'.<br>'.'this is dumy content '.$i.'.<br>'
            ]);
        }

        return $users = DB::table('posts')
                ->where('author', $author)
                ->get();
    }
}
