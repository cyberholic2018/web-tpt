<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Content;
use Auth;

class ContentController extends Controller
{
    /**
     * 取得內容
     */
    public function get()
    {
        if (Auth::user()->role == 'ADMIN') {
            return $content = Content::paginate(15);
        }
    }

    /**
     * 取得單筆
     */
    public function getOne($id = '')
    {
        if (Auth::user()->role == 'ADMIN') {
            return $content = Content::where('id', $id)->first();
        }
    }

    /**
     * 新增內容
     */
    public function add(Request $request)
    {
        $data = $request->all();

        try {
            Content::create([
                'title' => $data['title'],
                'locale' => 'zh-TW',
                'content' => $data['featureImage'],
                'customField1' => $data['link'],
            ]);

            $status = 200;
            $message = 'Create Page success.';
        } catch (\Exception $e) {
            $status = 500;
            $message = $e;
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);
    }

    /**
     * 編輯內容
     */
    public function edit($id = '', Request $request)
    {
        $data = $request->all();

        try {
            Content::where('id', $id)->update([
                'title' => $data['title'],
                'locale' => 'zh-TW',
                'content' => $data['featureImage'],
                'customField1' => $data['link'],
            ]);

            $status = 200;
            $message = 'Create Page success.';
        } catch (\Exception $e) {
            $status = 500;
            $message = $e;
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);
    }

    /**
     * 刪除內容
     */
    public function delete(Request $request)
    {
        $data = $request->all()['data'];

        for ($i=0; $i < count($data); $i++) {
            Content::where('id', $data[$i])->delete();
        }

        return response()->json([ 'status' => 200, 'message' => '內容刪除成功' ], 200);
    }
}
