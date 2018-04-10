<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\PublicServiceProvider;
use App\Services\Cashflow;
use Mail;

class MailController extends Controller
{
    private function testFunction()
    {
        // Mail::send('mail.paymentSuccess', [], function($message) {
        //     $message->to([
        //         'vincent7697@gmail.com',
        //     ])->subject('付款成功');
        //     $message->from(env('MAIL_USERNAME'));
        // });

        return '1234';
    }
    public function sendMail()
    {
        $sender = env('MAIL_USERNAME');

        // echo PublicServiceProvider::generateGuid().'<br>';
        // echo Cashflow::test();

        // Mail::send('mail.paymentSuccess', [], function($message) {
        //     $message->to([
        //         'vincent7697@gmail.com',
        //     ])->subject('付款成功');
        //     $message->from(env('MAIL_USERNAME'));
        // });

        // return "1|OK";

        // $sendMail = Mail::send('mail.notice', [], function($message) use ($sender) {
        //     $message->to(['vincent7697@gmail.com', $sender])->subject('訂單成立通知信');
        //     $message->from($sender);
        // });

        // return env('MAIL_USERNAME');

        Mail::raw('測試使用 Laravel 5 的寄信服務', function($message)
        {
            $message->from(env('MAIL_USERNAME'));
            $message->to('vincent7697@gmail.com');
        });
    }
}
