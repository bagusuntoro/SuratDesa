<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePengajuanSuratsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pengajuan_surats', function (Blueprint $table) {
            $table->id();
            $table->enum('jenis_surat',['Pengantar Umum','Pengantar SKCK']);
            $table->string('nama');
            $table->string('nik');
            $table->string('ttl');
            $table->enum('jenis_kelamin',['Laki-laki','Perempuan']);
            $table->string('warganegara');
            $table->string('agama');
            $table->string('pekerjaan');
            $table->string('alamat');
            $table->string('status');
            $table->string('bukti_diri');
            $table->string('keperluan');
            $table->string('tujuan');
            $table->date('berlaku_mulai');
            $table->string('keterangan');
            $table->enum('status_surat',['proses','selesai'])->default('proses');
            $table->unsignedBigInteger('user_id');
            // $table->unsignedBigInteger('surat_id');
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
        Schema::dropIfExists('pengajuan_surats');
    }
}
