<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('guid');
            $table->string('owner');
            $table->longtext('content');
            $table->integer('amount');
            $table->string('merchantID');
            $table->integer('pointUsage');
            $table->string('orderStatus')->default('undisposed');
            $table->string('status')->default('Y');
            $table->string('paymentStatus')->default('unpaid');
            $table->string('paymentMethod');
            $table->string('shippingMethod');
            $table->string('Temperature')->default('room');
            $table->string('ExpireDate')->nullable();
            $table->string('BankCode')->nullable();
            $table->string('PaymentType')->nullable();
            $table->string('vAccount')->nullable();
            $table->string('receipt')->nullable();
            $table->string('taxId')->nullable();
            $table->string('isSimulate')->default('0');
            $table->longtext('shippingTarget');
            $table->longtext('remarks');
            $table->string('orderFlag');
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
        Schema::dropIfExists('orders');
    }
}
