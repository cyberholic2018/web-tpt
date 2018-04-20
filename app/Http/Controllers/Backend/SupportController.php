<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Storage;
use Auth;
use Illuminate\Support\Facades\Redirect;
use App\Support;
use App\Content;

class SupportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::user()->role == 'ADMIN') {
            return $supports = Support::paginate(15);
        }
    }

    public function getSupport($id)
    {
        return Support::where('id', $id)->first();
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
        $filepath = $data['downloadLink'];
        $filesize = filesize(substr($filepath, 1));

        $support = Support::create([
            'fileName' => $data['fileName'],
            'fileSize' => $filesize,
            'osCondition' => $data['osCondition'],
            'description' => $data['description'],
            'type' => $data['type'],
            'locale' => $data['locale'],
            'downloadLink' => $data['downloadLink']
        ]);

        if ($support) {
            $status = 200;
            $message = 'Create support content success.';
        } else {
            $status = 423;
            $message = 'Create support content fail.';
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);
    }

    public function deleteSupports(Request $request)
    {
        $data = $request->all()['data'];

        for ($i=0; $i < count($data); $i++) {
            Support::where('id', $data[$i])->delete();
        }

        return response()->json([ 'status' => 200, 'message' => '文章刪除成功' ], 200);
        // return $request->all();
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
        $data = $request->all();
        $supportRow = Support::where('id', $id);

        // return $data;
        if (Auth::user()->role == 'ADMIN') {

            $updateSupport = $supportRow->update($data);

            if ($updateSupport) {
                $status = 200;
                $message = 'Update support success.';
            } else {
                $status = 423;
                $message = 'Update support fail.';
            }
        } else {
            $status = 425;
            $message = 'Permission denied.';
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);
    }

    public function contentEdit(Request $request)
    {
        $data = $request->all();

        $content = Content::where('locale', $data['locale'])->get();

        if (count($content)) {
            Content::where('locale', $data['locale'])->update([
                'title' => $data['title'],
                'content' => $data['content'],
            ]);
            return Redirect::back();
        } else {
            Content::create($data);
            return Redirect::back();
        }

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
