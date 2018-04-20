<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('guid');
            $table->string('title');
            $table->string('locale');
            $table->string('serialNumber')->nullable();
            $table->string('author');
            $table->string('authorName');
            $table->integer('price')->nullable();
            $table->integer('discountedPrice')->nullable();
            $table->string('category')->nullable();
            $table->string('featureImage')->nullable();
            $table->longtext('album')->nullable();
            $table->longtext('description')->nullable();
            $table->longtext('shortDescription')->nullable();
            $table->string('status')->default('SALE');
            $table->boolean('reserveStatus')->default(false);
            $table->boolean('isPublish')->default(false);
            $table->integer('quantity')->nullable();
            $table->string('rule')->nullable();
            $table->string('rate')->nullable();
            $table->longtext('command')->nullable();
            $table->longtext('seoKeyword')->nullable();
            $table->string('seoTitle')->nullable();
            $table->string('productInformation')->nullable();
            $table->longtext('seoDescription')->nullable();
            $table->longtext('socialImage')->nullable();
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
        Schema::dropIfExists('products');
    }
}
