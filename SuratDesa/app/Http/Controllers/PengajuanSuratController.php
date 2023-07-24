<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PengajuanSurat;

class PengajuanSuratController extends Controller
{
    public function listPengajuanSurat()
    {
        $data = PengajuanSurat::with('surat')->get();

        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    public function pengajuanByUser($id)
    {
        $data = PengajuanSurat::where('user_id', $id)->with('surat')->get();
        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    public function getById($id)
    {
        $data = PengajuanSurat::find($id);
        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    public function createPengajuanSurat(Request $request)
    {
        $validateData = $request->validate([
            'jenis_surat' => 'required',
            'nama' => 'required',
            'nik' => 'required',
            'ttl' => 'required',
            'jenis_kelamin' => 'required',
            'warganegara' => 'required',
            'agama' => 'required',
            'pekerjaan' => 'required',
            'alamat' => 'required',
            'status' => 'required',
            'bukti_diri' => 'required',
            'keperluan' => 'required',
            'tujuan' => 'required',
            'berlaku_mulai' => 'required',
            'keterangan' => 'required',
            'user_id' => 'required'
        ]);

        $pengajuanSurat = new PengajuanSurat();
        $pengajuanSurat->jenis_surat = $request->jenis_surat; 
        $pengajuanSurat->nama = $request->nama; 
        $pengajuanSurat->nik = $request->nik; 
        $pengajuanSurat->ttl = $request->ttl; 
        $pengajuanSurat->jenis_kelamin = $request->jenis_kelamin; 
        $pengajuanSurat->warganegara = $request->warganegara; 
        $pengajuanSurat->agama = $request->agama; 
        $pengajuanSurat->pekerjaan = $request->pekerjaan; 
        $pengajuanSurat->alamat = $request->alamat; 
        $pengajuanSurat->status = $request->status; 
        $pengajuanSurat->bukti_diri = $request->bukti_diri; 
        $pengajuanSurat->keperluan = $request->keperluan; 
        $pengajuanSurat->tujuan = $request->tujuan; 
        $pengajuanSurat->berlaku_mulai = $request->berlaku_mulai; 
        $pengajuanSurat->keterangan = $request->keterangan; 
        $pengajuanSurat->user_id = $request->user_id;
        $pengajuanSurat->save();
        
        return response()->json([
            'message' => 'success',
            'statusCode' => 201
        ]);
    }

    public function updatePengajuanSurat(Request $request, $id)
    {
        $pengajuanSurat = PengajuanSurat::find($id);
        if (!$pengajuanSurat) {
            return response()->json([
                'message' => 'PengajuanSurat not found',
                'statusCode' => 404
            ], 404);
        }

        $validateData = $request->validate([
            'status_surat' => 'required',
        ]);

        $pengajuanSurat->status_surat = $request->status_surat;
        $pengajuanSurat->save();

        return response()->json([
            'message' => 'success',
            'statusCode' => 200
        ]);
    }

    public function deletePengajuanSurat($id)
    {
        $PengajuanSurat = PengajuanSurat::find($id);
        if (!$PengajuanSurat) {
            return response()->json([
                'message' => 'PengajuanSurat not found',
                'statusCode' => 404
            ], 404);
        }

        $PengajuanSurat->delete();

        return response()->json([
            'message' => 'success',
            'statusCode' => 200
        ]);
    }
}