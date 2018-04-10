<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCouponTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Coupons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('guid');
            $table->string('serialNumber');
            $table->string('content')->nullable();
            $table->boolean('isPublish')->default(false);
            $table->dateTime('schedulePost')->nullable();
            $table->dateTime('scheduleDelete')->nullable();
            $table->string('discountType')->default('percentage');
            $table->integer('couponAmount');
            $table->boolean('freeShipping')->default(false);
            $table->integer('minimumAmount')->nullable();
            $table->integer('maximumAmount')->nullable();
            $table->boolean('individualUse')->nullable();
            $table->integer('usageLimit')->default(false)->nullable();
            $table->integer('usageLimitPerUser')->default(false)->nullable();
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
        Schema::dropIfExists('Coupons');
    }
}
