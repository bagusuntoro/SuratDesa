<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PengajuanSurat extends Model
{
    use HasFactory;

    protected $fillable = [
        'jenis_surat',
        'nama',
        'nik',
        'ttl',
        'jenis_kelamin',
        'warganegara',
        'agama',
        'pekerjaan',
        'alamat',
        'status',
        'bukti_diri',
        'keperluan',
        'tujuan',
        'berlaku_mulai',
        'keterangan',
        'status_surat',
        'user_id'
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



