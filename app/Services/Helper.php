<?php

namespace App\Services;

class Helper
{
    public static function thumb($path)
    {
        $pieces = explode('/', $path);
        $thumbPath = '';

        for ($i=0; $i < count($pieces) ; $i++) {
            if ($i == 0) {
                $thumbPath = $pieces[$i];
            } elseif ($i == (count($pieces) - 1)) {
                $thumbPath = $thumbPath.'/thumbs/'.$pieces[$i];
            } else {
                $thumbPath = $thumbPath.'/'.$pieces[$i];
            }

        }

        return $thumbPath;
    }

    static function rc()
    {
        $colors = array('6C74FF', '5FF1FF', '579DE8', '8B51E8', 'E563FF');
        $colorsLength = count ($colors);

        return $colors[rand(0, $colorsLength - 1)];
    }
}
