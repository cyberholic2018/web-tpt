<?php

namespace App\Services;

/**
 *
 */
class ithome
{
    function __construct()
    {
        # code...
    }

    private static function cacheItem($link)
    {
        $post = curl_init();

        curl_setopt($post, CURLOPT_URL, $link);
        curl_setopt($post, CURLOPT_RETURNTRANSFER, true);
        $post_output = curl_exec($post);
        curl_close($post);

        $doc = new \DOMDocument();
        @$doc->loadHTML($post_output);
        $metaTags = $doc->getElementsByTagName('meta');

        $postimg = '/images/ithome-logo.png';

        for ($i = 0; $i < $metaTags->length; $i++)
        {
            $metaTag = $metaTags->item($i);

            if ($metaTag->getAttribute('property') == 'og:image') {
                $postimg = $metaTag->getAttribute('content');
            } elseif ($metaTag->getAttribute('name') == 'twitter:image') {
                $postimg = $metaTag->getAttribute('content');
            }
        }

        return $postimg;
    }

    public static function get($value)
    {
        $ch = curl_init();
        $timeout = 5;
        curl_setopt ($ch, CURLOPT_URL, 'https://www.ithome.com.tw/rss');
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $xml_string = curl_exec($ch);
        curl_close($ch);

        $xml = simplexml_load_string($xml_string);
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);

        $ithome = $array["channel"]['item'];

        $ithomeData = array();

        for ($i=0; $i < $value; $i++) {
            $postimg = static::cacheItem($ithome[$i]['link']);
            array_push($ithomeData, [
                "title" => $ithome[$i]['title'],
                "featureImage" => $postimg,
                "description" => $ithome[$i]['description'],
                "link" => $ithome[$i]['link'],
                "pubDate" => $ithome[$i]['pubDate'],
            ]);
        }

        return $ithomeData;
    }
}
