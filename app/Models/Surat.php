<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Surat extends Model
{
    protected $fillable = ['surat', 'user_id', 'pengajuan_id', 'sktm_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pengajuanSurat()
    {
        return $this->belongsTo(PengajuanSurat::class, 'pengajuan_id');
    }
    public function sktm()
    {
        return $this->belongsTo(Sktm::class, 'sktm_id');
    }
}
