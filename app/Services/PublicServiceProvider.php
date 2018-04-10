<?php

namespace App\Services;

class PublicServiceProvider
{
    static function generateGuid()
    {
        $characters = '01234567890123456789012345678901234567890123456789abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef';
        $charactersLength = strlen($characters);
        $randomString0 = '';
        $randomString1 = '';
        $randomString2 = '';
        $randomString3 = '';
        $randomString4 = '';
        for ($i = 0; $i < 8; $i++) {
            $randomString0 .= $characters[rand(0, $charactersLength - 1)];
        }
        for ($i = 0; $i < 4; $i++) {
            $randomString1 .= $characters[rand(0, $charactersLength - 1)];
        }
        for ($i = 0; $i < 4; $i++) {
            $randomString2 .= $characters[rand(0, $charactersLength - 1)];
        }
        for ($i = 0; $i < 4; $i++) {
            $randomString3 .= $characters[rand(0, $charactersLength - 1)];
        }
        for ($i = 0; $i < 12; $i++) {
            $randomString4 .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString0 . '-' . $randomString1 . '-' . $randomString2 . '-' . $randomString3 . '-' . $randomString4;
    }

    static function exception($message)
    {
        return view('frontend.exception', [
            'isThumbShow' => false,
            'message' => $message,
        ]);
    }
}
