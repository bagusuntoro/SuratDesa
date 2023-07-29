<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sktm extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_pemohon',
        'ttl_pemohon',
        'nik_pemohon',
        'pendidikan_pemohon',
        'jenis_kelamin_pemohon',
        'nama_orangtua',
        'ttl_orangtua',
        'jenis_kelamin_orangtua',
        'agama_orangtua',
        'status_pernikahan_orangtua',
        'warganegara_orangtua',
        'no_kk',
        'nik_orangtua',
        'pekerjaan_orangtua',
        'alamat_orangtua',
        'tujuan',
        'status_surat',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function surat()
    {
        return $this->hasOne(Surat::class, 'pengajuan_id');
    }
}
