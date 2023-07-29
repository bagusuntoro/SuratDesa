<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Warga;

class WargaController extends Controller
{
    public function listWarga()
    {
        $data = Warga::all();
        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    public function getById($id)
    {
        $data = Warga::find($id);
        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    public function createWarga(Request $request)
    {
        $validateData = $request->validate([
            'nama' => 'required', 
            'nik' => 'required', 
            'jenis_kelamin' => 'required', 
            'status' => 'required', 
            'pekerjaan' => 'required', 
            'user_id' => 'required'
        ]);

        $warga = new Warga();
        $warga->nama = $request->nama; 
        $warga->nik = $request->nik; 
        $warga->jenis_kelamin = $request->jenis_kelamin; 
        $warga->status = $request->status; 
        $warga->pekerjaan = $request->pekerjaan; 
        $warga->user_id = $request->user_id;
        $warga->save();
        
        return response()->json([
            'message' => 'success',
            'statusCode' => 201
        ]);
    }

    public function updateWarga(Request $request, $id)
    {
        $warga = Warga::find($id);
        if (!$warga) {
            return response()->json([
                'message' => 'Warga not found',
                'statusCode' => 404
            ], 404);
        }

        $validateData = $request->validate([
            'nama' => 'required', 
            'nik' => 'required', 
            'jenis_kelamin' => 'required', 
            'status' => 'required', 
            'pekerjaan' => 'required', 
            'user_id' => 'required'
        ]);

        $warga->nama = $request->nama; 
        $warga->nik = $request->nik; 
        $warga->jenis_kelamin = $request->jenis_kelamin; 
        $warga->status = $request->status; 
        $warga->pekerjaan = $request->pekerjaan; 
        $warga->user_id = $request->user_id;
        $warga->save();

        return response()->json([
            'message' => 'success',
            'statusCode' => 200
        ]);
    }

    public function deleteWarga($id)
    {
        $warga = Warga::find($id);
        if (!$warga) {
            return response()->json([
                'message' => 'Warga not found',
                'statusCode' => 404
            ], 404);
        }

        $warga->delete();

        return response()->json([
            'message' => 'success',
            'statusCode' => 200
        ]);
    }
}
