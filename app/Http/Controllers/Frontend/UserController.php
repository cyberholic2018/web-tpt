<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
use App\Services\PublicServiceProvider;
use App\Bonus;
use App\User;
use App\ResetPassword;
use Auth;
use Mail;
use Log;

class UserController extends Controller
{
    public function registerNormalUser(Request $request)
    {
        $data = $request->all();
        $bonus = Bonus::all()->first();

        try {
            $defaultPoint = Bonus::all()->first()['defaultPoint'];
        } catch (\Exception $e) {
            $defaultPoint = 25;
        }

        try {
            $subscriptable = $data['subscriptable'];
            $subscriptable = true;
        } catch (\Exception $e) {
            $subscriptable = false;
        }

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'g-recaptcha-response' => 'required|captcha',
        ]);

        try {
            event(new Registered($user = User::create([
                'guid' => PublicServiceProvider::generateGuid(),
                'name' => $data['name'],
                'email' => $data['email'],
                'role' => 'NORMAL',
                'point' => $defaultPoint,
                'password' => bcrypt($data['password']),
                'subscriptable' => $subscriptable,
            ])));

            Mail::send('mail.welcomeMail', [
                'name' => $data['name'],
                'account' => $data['email'],
                'point' => $bonus['defaultPoint'],
                'percentage' => $bonus['percentage']
            ], function($message) use ($data) {
                $message->to([ $data['email'], ])->subject('明谷生機線上購物加入會員通知');
                $message->from(env('MAIL_USERNAME'));
            });

            $this->guard()->login($user);

            return $this->registered($request, $user) ?: redirect('/');
        } catch (\Exception $e) {
            return Log::error($e);
        }
    }

    /**
     * Send reset password mail
     */
    public function sendResetPasswordMail(Request $request)
    {
        $data = $request->all();

        $this->validate($request, [
            'email' => 'required|string|email|max:255',
            // 'g-recaptcha-response' => 'required|captcha',
        ]);

        $resetValidate = array(
            'token' => PublicServiceProvider::generateGuid(),
            'expireTime' => time() + 1800,
        );

        if (User::where('email', '=', $data['email'])->count() > 0) {
            // return User::where('email', $data['email'])->count();
            if (ResetPassword::where('email', $data['email'])->count() == 0) {
                try {
                    ResetPassword::create([
                        'email' => $data['email'],
                        'token' => $resetValidate['token'],
                        'expireTime' => $resetValidate['expireTime'],
                    ]);

                    Mail::send('mail.resetPassword', [
                        'email' => $data['email'],
                        'token' => $resetValidate['token'],
                    ], function($message) use ($data) {
                        $message->to([ $data['email'], ])->subject('密碼重置信件');
                        $message->from(env('MAIL_USERNAME'));
                    });

                    return PublicServiceProvider::exception('密碼重置信件已寄送，請至您的註冊信箱查看。');
                } catch (\Exception $e) {
                    return $e;
                }
            } else {
                try {
                    ResetPassword::where('email', $data['email'])->update([
                        'token' => $resetValidate['token'],
                        'expireTime' => $resetValidate['expireTime'],
                    ]);

                    Mail::send('mail.resetPassword', [
                        'email' => $data['email'],
                        'token' => $resetValidate['token'],
                    ], function($message) use ($data) {
                        $message->to([ $data['email'], ])->subject('密碼重置信件');
                        $message->from(env('MAIL_USERNAME'));
                    });

                    return PublicServiceProvider::exception('密碼重置信件已寄送，請至您的註冊信箱查看。');
                } catch (\Exception $e) {
                    return $e;
                }
            }
        } else {
            return PublicServiceProvider::exception('該會員沒有註冊，請確認輸入的帳號是否正確。');
        }
    }

    public function resetPasswordPage($token)
    {
        try {
            if (ResetPassword::where('token', $token)->count() > 0) {
                $requestRecord = ResetPassword::where('token', $token)->first();

                if (($requestRecord['expireTime'] - time()) <= 0) {
                    return PublicServiceProvider::exception('權杖已過期，請重新申請重置信件。');
                } else {
                    # code...
                }
            } else {
                return PublicServiceProvider::exception('無效的權杖。');
            }

        } catch (\Exception $e) {
            return PublicServiceProvider::exception('未知錯誤，請聯絡網站管理員。');
        }

        return view('frontend.authentication.resetPassword', [
            'token' => $token,
            'isThumbShow' => false,
        ]);
    }

    public function resetPasswordFunction(Request $request)
    {
        $data = $request->all();

        $this->validate($request, [
            'email' => 'required|string|email|max:255|',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $requestRecord = ResetPassword::where('email', $data['email'])
                                        ->where('token', $data['token']);

        if ($requestRecord->count() > 0) {
            try {
                User::where('email', $data['email'])->update([
                    'password' => bcrypt($data['password']),
                ]);
                $requestRecord->delete();
            } catch (\Exception $e) {

            }

            return PublicServiceProvider::exception('密碼修改成功，請重新登入。');
        } else {
            return PublicServiceProvider::exception('無效的權杖。');
        }
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard();
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        //
    }
}
