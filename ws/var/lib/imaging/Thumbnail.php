<?php

/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 05/05/2017
 * Time: 09:15
 * @property string Thumbnail
 */
class Thumbnail extends Imaging
{
    private $image;
    private $width;
    private $height;

    function __construct($image,$width,$height) {
        parent::set_img($image);
        parent::set_quality(99);
        parent::set_size($width,$height);
        $this->Thumbnail= pathinfo($image, PATHINFO_DIRNAME).pathinfo($image, PATHINFO_FILENAME).'_tn.'.pathinfo($image, PATHINFO_EXTENSION);
        parent::save_img($this->Thumbnail);
        parent::clear_cache();
    }
    function __toString() {
        return $this->Thumbnail;
    }
}