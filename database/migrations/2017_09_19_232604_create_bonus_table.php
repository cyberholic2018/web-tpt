<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBonusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bonus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('guid');
            $table->integer('defaultPoint');
            $table->integer('percentage');
            $table->integer('maxUsage')->nullable();
            $table->integer('minUsage')->nullable();
            $table->boolean('bonusUseLimitSetup')->default(false);
            $table->integer('recommendUserSharePoint');
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
        Schema::dropIfExists('bonus');
    }
}
