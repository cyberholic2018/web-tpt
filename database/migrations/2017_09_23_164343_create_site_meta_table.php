<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSiteMetaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site_meta', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->nullable();
            $table->string('keyword')->nullable();
            $table->longtext('description')->nullable();
            $table->string('shortcut')->nullable();
            $table->longtext('pageTopContent')->nullable();
            $table->longtext('pageTopLink')->nullable();
            $table->longtext('pageTopButton')->nullable();
            $table->longtext('index_album')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('site_meta');
    }
}
