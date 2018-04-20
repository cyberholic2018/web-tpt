<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Video;
use Auth;
use File;
use Storage;

class MediaController extends Controller
{
    /**
     * 新增影音
     */
    public function addVideo(Request $request)
    {
        $data = $request->all();

        try {
            Video::create([
                'guid' => str_random(40),
                'title' => $data['title'],
                'url' => $data['url'],
                'description' => $data['description']
            ]);

            $status = 200;
            $message = 'Create Video success.';
        } catch (Exception $e) {
            $status = 500;
            $message = $e;
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);

    }

    /**
     * 取得所有影音
     */
    public function getAllVideo()
    {
        if (Auth::user()->role == 'ADMIN') {
            return Video::paginate(15);
        }
    }

    /**
     * 取得一項影音
     */
    public function getVideo($id)
    {
        return Video::where('id', $id)->first();
    }

    /**
     * 更新影音
     */
     public function update(Request $request, $id)
     {
         $data = $request->all();
         $videoRow = Video::where('id', $id);

         // return $data;
         if (Auth::user()->role == 'ADMIN') {

             $updateVideo = $videoRow->update($data);

             if ($updateVideo) {
                 $status = 200;
                 $message = 'Update video success.';
             } else {
                 $status = 423;
                 $message = 'Update video fail.';
             }
         } else {
             $status = 425;
             $message = 'Permission denied.';
         }

         return response()->json([ 'status' => $status, 'message' => $message ], $status);
     }

    /**
     * 刪除影音
     */
    public function deleteVideos(Request $request)
    {
        $data = $request->all()['data'];

        for ($i=0; $i < count($data); $i++) {
            Video::where('id', $data[$i])->delete();
        }

        return response()->json([ 'status' => 200, 'message' => '文章刪除成功' ], 200);
    }
}
