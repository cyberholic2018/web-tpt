<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\SiteMeta;

class MetaController extends Controller
{
    public function getMeta()
    {
        $meta = SiteMeta::all()->first();

        if ($meta) {
            $status = 200;
            $message = 'Get meta success';
        } else {
            $meta = null;
            $status = 404;
            $message = 'None setup';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $meta ], $status);
    }

    public function setMeta(Request $request)
    {
        $meta = SiteMeta::create($request->all());

        if ($meta) {
            $status = 200;
            $message = 'Set meta success';
        } else {
            $status = 425;
            $message = 'Set meta fail';
            $meta = null;
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $meta ], $status);
    }

    public function editMeta(Request $request)
    {
        // return $request->all()['other'];
        $meta = SiteMeta::first()->update($request->all());

        if ($meta) {
            $status = 200;
            $message = 'Edit meta success';
        } else {
            $status = 425;
            $message = 'Edit meta fail';
            $meta = null;
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $meta ], $status);
    }

    public function test()
    {
        return 'qwer';
    }
}
