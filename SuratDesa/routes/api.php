<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PengajuanSuratController;
use App\Http\Controllers\SuratController;


Route::group([
    'prefix' => 'auth'
  ], function () {
    Route::post('register', [AuthController::class,'register']);
    Route::post('login', [AuthController::class,'login']);
    Route::group([
      'middleware' => 'auth:api'
    ], function(){
      Route::post('logout', [AuthController::class,'logout']);
      Route::post('refresh', [AuthController::class, 'refresh']);
      Route::get('me', [AuthController::class,'me']);
  
      // voting process
      Route::group([
        'middleware' => 'auth:api'
      ], function () {
        Route::get('list-user', [AuthController::class,'listUser']);
        Route::get('detail-user/{id}', [AuthController::class,'getById']);
        Route::put('update-user/{id}', [AuthController::class,'updateUser']);
        Route::delete('delete-user/{id}', [AuthController::class,'deleteUser']);

        Route::get('surat',[SuratController::class,'listSurat']);
        Route::post('surat',[SuratController::class,'createSurat']);
        Route::get('pengajuan/{id}',[PengajuanSuratController::class,'getById']);
        Route::post('pengajuan',[PengajuanSuratController::class,'createPengajuanSurat']);
        Route::get('pengajuan',[PengajuanSuratController::class,'listPengajuanSurat']);
        Route::put('pengajuan/{id}',[PengajuanSuratController::class,'updatePengajuanSurat']);
        Route::get('pengajuan-user/{id}',[PengajuanSuratController::class,'pengajuanByUser']);
      });
      
    });
  });

