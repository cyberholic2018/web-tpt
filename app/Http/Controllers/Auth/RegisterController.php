<?php

namespace App\Http\Controllers\Auth;

use App\SocialProvider;
use App\User;
use App\Traits\CaptchaTrait;
use App\Http\Controllers\Controller;
use App\Services\PublicServiceProvider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Socialite;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';
    protected $publicServiceProvider;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PublicServiceProvider $publicServiceProvider)
    {
        $this->middleware('guest');
        $this->publicServiceProvider = $publicServiceProvider;
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'guid' => $this->publicServiceProvider->generateGuid(),
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'role' => $data['role'],
            'level' => 'VIP'
        ]);
    }

    /**
     * Redirect the user to the facebook authentication page.
     *
     * @return Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Obtain the user information from facebook.
     *
     * @return Response
     */
    public function handleProviderCallback()
    {
        try
        {
            $socialUser = Socialite::driver('facebook')->user();
        }
        catch(\Exception $e)
        {
            return redirect('/');
        }

        $socialProvider = SocialProvider::where('provider_id', $socialUser->getId())->first();

        if(!$socialProvider)
        {
            $user = User::Create([
                'guid' => $this->publicServiceProvider->generateGuid(),
                'email' => $socialUser->getEmail(),
                'name' => $socialUser->getName(),
                'socialUser' => true,
                'role' => 'ADMIN',
                'level' => 'NORMAL'
            ]);

            $user->socialProviders()->create([
                'provider_id' => $socialUser->getId(),
                'provider' => 'facebook'
            ]);
        }
        else
        {
            $user = $socialProvider->user;
        }

        auth()->login($user);

        return redirect('/');
    }
}
