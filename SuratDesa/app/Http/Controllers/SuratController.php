<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Surat;

class SuratController extends Controller
{
    public function listSurat()
    {
        $data = Surat::all();
        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    public function createSurat(Request $request)
    {
        $validateData = $request->validate([
            'surat' => 'required',
            'user_id' => 'required'
        ]);

        $surat = new Surat();
        $surat->jenis_surat = $request->jenis_surat;
        // Tambahkan kolom-kolom lain yang dibutuhkan untuk surat
        $surat->save();

        return response()->json([
            'message' => 'success',
            'statusCode' => 201
        ]);
    }

    public function deleteSurat($id)
    {
        $surat = Surat::find($id);
        if (!$surat) {
            return response()->json([
                'message' => 'Surat not found',
                'statusCode' => 404
            ], 404);
        }

        $surat->delete();

        return response()->json([
            'message' => 'success',
            'statusCode' => 200
        ]);
    }
}
