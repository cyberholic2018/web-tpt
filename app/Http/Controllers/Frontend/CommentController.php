<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Comment;

class CommentController extends Controller
{
    /**
     * Add comment
     */
    public function addComment($guid, Request $request)
    {
        $data = $request->all();

        $this->validate($request, [
            'comment-name' => 'required|string|max:255',
            'comment-rate' => 'required',
            'comment-content' => 'required|string|max:255',
            'g-recaptcha-response' => 'required|captcha',
        ]);

        Comment::create([
            'guid' => str_random(42),
            'source' => $guid,
            'commentFrom' => $data['comment-name'],
            'rate' => $data['comment-rate'],
            'content' => $data['comment-content'],
        ]);

        return Redirect::back();
    }

    /**
     * Delete comment
     */
    public function deleteComment($guid)
    {
        Comment::where('guid', $guid)->delete();

        return Redirect::back();
    }
}
