<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Bonus;

class BonusController extends Controller
{

    // 取得購物金設定
    public function index()
    {
        return Bonus::all()->first();
    }

    // 新增購物金設定
    public function store(Request $request)
    {
        Bonus::create($request->all());
    }

    // 更新購物金設定
    public function updatePara(Request $request)
    {
        $bonus = Bonus::all()->first();

        $bonus->update($request->all());
    }
}
