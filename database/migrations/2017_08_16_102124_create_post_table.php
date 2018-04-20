<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('guid');
            $table->string('locale');
            $table->string('author');
            $table->string('authorName');
            $table->string('title');
            $table->string('category')->nullable();
            $table->longText('content');
            $table->string('featureImage')->nullable();
            $table->string('seoTitle')->nullable();
            $table->longText('seoKeyword')->nullable();
            $table->string('socialImage')->nullable();
            $table->longText('seoDescription')->nullable();
            $table->boolean('isPublish')->default(false);
            $table->dateTime('schedulePost')->nullable();
            $table->dateTime('scheduleDelete')->nullable();
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
        Schema::dropIfExists('posts');
    }
}
