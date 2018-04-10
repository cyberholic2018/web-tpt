<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGiftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gifts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('guid');
            $table->string('title');
            $table->longtext('shortDescription');
            $table->longtext('description');
            $table->string('featureImage');
            $table->dateTime('scheduleUp')->nullable();
            $table->dateTime('scheduleDown')->nullable();
            $table->string('customField1')->nullable();
            $table->string('customField2')->nullable();
            $table->string('customField3')->nullable();
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
        Schema::dropIfExists('gifts');
    }
}
