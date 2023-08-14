<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSktmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sktms', function (Blueprint $table) {
            $table->id();
            $table->string('nama_pemohon');
            $table->string('ttl_pemohon');
            $table->string('nik_pemohon');
            $table->string('pendidikan_pemohon');
            $table->enum('jenis_kelamin_pemohon',['laki','perempuan']);
            
            $table->string('nama_orangtua');
            $table->string('ttl_orangtua');
            $table->enum('jenis_kelamin_orangtua',['laki','perempuan']);
            $table->string('agama_orangtua');
            $table->string('status_pernikahan_orangtua');
            $table->string('warganegara_orangtua');
            $table->string('no_kk');
            $table->string('nik_orangtua')->unique();
            $table->string('pekerjaan_orangtua');
            $table->string('alamat_orangtua');

            $table->string('tujuan');
            $table->enum('status_surat',['proses','selesai'])->default('proses');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sktms');
    }
}
