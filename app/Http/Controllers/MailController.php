<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class MailController extends Controller
{
    /**
     * test
     */
    public function mailTest()
    {
        $dummyData = array(
            'name' => '李茗浤',
            'email' => 'vincent7697@gmail.com',
            'company' => 'Penpower',
            'phone' => '0980412900',
            'content' => '歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉'
        );

        $this->sendForm($dummyData);
    }

    public function sendForm($data)
    {
        // $data = $request->all();

        Mail::send('mail.contact', [
            'name' => $data['name'],
            'email' => $data['email'],
            'company' => $data['company'],
            'phone' => $data['phone'],
            'content' => $data['content']
        ], function($message) use ($data) {
            $message->to([ $data['email'], env('MAIL_USERNAME') ])->subject('信件確認');
            $message->from(env('MAIL_USERNAME'), $name = "台灣帕太");
        });
    }
}
