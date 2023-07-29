<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sktm;

class SktmController extends Controller
{
    public function listSktm()
    {
        $data = Sktm::with('user')->get();

        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    public function pengajuanSktmByUser($id)
    {
        $data = Sktm::where('user_id', $id)->with('user')->get();
        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    public function getSktmById($id)
    {
        $data = Sktm::find($id);
        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    public function createSktm(Request $request)
    {
        $validateData = $request->validate([
            'nama_pemohon' => 'required',
            'ttl_pemohon' => 'required',
            'nik_pemohon' => 'required|unique:sktms,nik_pemohon',
            'pendidikan_pemohon' => 'required',
            'jenis_kelamin_pemohon' => 'required|in:laki,perempuan',
            'nama_orangtua' => 'required',
            'ttl_orangtua' => 'required',
            'jenis_kelamin_orangtua' => 'required|in:laki,perempuan',
            'agama_orangtua' => 'required',
            'status_pernikahan_orangtua' => 'required',
            'warganegara_orangtua' => 'required',
            'no_kk' => 'required|unique:sktms,no_kk',
            'nik_orangtua' => 'required|unique:sktms,nik_orangtua',
            'pekerjaan_orangtua' => 'required',
            'alamat_orangtua' => 'required',
            'tujuan' => 'required',
            'user_id' => 'required'
        ]);



        $sktm = Sktm::create($validateData);
        
        return response()->json([
            'message' => 'success',
            'statusCode' => 201
        ]);
    }

    public function updateSktm(Request $request, $id)
    {
        $sktm = Sktm::find($id);
        if (!$sktm) {
            return response()->json([
                'message' => 'Sktm not found',
                'statusCode' => 404
            ], 404);
        }

        $validateData = $request->validate([
            'status_surat' => 'required|in:proses,selesai',
        ]);

        $sktm->update($validateData);

        return response()->json([
            'message' => 'success',
            'statusCode' => 200
        ]);
    }

    public function deleteSktm($id)
    {
        $sktm = Sktm::find($id);
        if (!$sktm) {
            return response()->json([
                'message' => 'Sktm not found',
                'statusCode' => 404
            ], 404);
        }

        $sktm->delete();

        return response()->json([
            'message' => 'success',
            'statusCode' => 200
        ]);
    }
}
