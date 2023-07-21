<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PengajuanSurat extends Model
{
    use HasFactory;

    protected $fillable = ['nama', 'nik', 'jenis_kelamin', 'status', 'pekerjaan', 'jenis_surat', 'status_surat', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
