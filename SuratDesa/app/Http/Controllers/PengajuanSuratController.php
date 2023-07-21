<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PengajuanSurat;

class PengajuanSuratController extends Controller
{
    public function listPengajuanSurat()
    {
        $data = PengajuanSurat::all();
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
            'nama' => 'required', 
            'nik' => 'required', 
            'jenis_kelamin' => 'required', 
            'status' => 'required', 
            'pekerjaan' => 'required', 
            'jenis_surat' => 'required', 
            'user_id' => 'required'
        ]);

        $pengajuanSurat = new PengajuanSurat();
        $pengajuanSurat->nama = $request->nama; 
        $pengajuanSurat->nik = $request->nik; 
        $pengajuanSurat->jenis_kelamin = $request->jenis_kelamin; 
        $pengajuanSurat->status = $request->status; 
        $pengajuanSurat->pekerjaan = $request->pekerjaan; 
        $pengajuanSurat->jenis_surat = $request->jenis_surat; 
        $pengajuanSurat->user_id = $request->user_id;
        $pengajuanSurat->save();
        
        return response()->json([
            'message' => 'success',
            'statusCode' => 201
        ]);
    }

    public function updatePengajuanSurat(Request $request, $id)
    {
        $PengajuanSurat = PengajuanSurat::find($id);
        if (!$PengajuanSurat) {
            return response()->json([
                'message' => 'PengajuanSurat not found',
                'statusCode' => 404
            ], 404);
        }

        $validateData = $request->validate([
            'nama' => 'required', 
            'nik' => 'required', 
            'jenis_kelamin' => 'required', 
            'status' => 'required', 
            'pekerjaan' => 'required', 
            'jenis_surat' => 'required', 
            'user_id' => 'required'
        ]);

        $pengajuanSurat->nama = $request->nama; 
        $pengajuanSurat->nik = $request->nik; 
        $pengajuanSurat->jenis_kelamin = $request->jenis_kelamin; 
        $pengajuanSurat->status = $request->status; 
        $pengajuanSurat->pekerjaan = $request->pekerjaan; 
        $pengajuanSurat->jenis_surat = $request->jenis_surat; 
        $pengajuanSurat->user_id = $request->user_id;
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

