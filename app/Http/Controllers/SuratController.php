<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
            'surat' => 'required|file|mimes:pdf|max:10048', // Allow only PDF files up to 2MB
            'user_id' => 'required',
            'pengajuan_id' => 'required'
        ]);
    
        // Get the file from the request
        $file = $request->file('surat');
    
        // Generate a unique file name using the current timestamp and the original file name
        $fileName = time() . '_' . $file->getClientOriginalName();
    
        // Save the file to the 'public' disk
        Storage::disk('public')->putFileAs('', $file, $fileName);
    
        // Save the file name to the database
        $surat = new Surat();
        $surat->user_id = $request->user_id;
        $surat->pengajuan_id = $request->pengajuan_id;
        // Tambahkan kolom-kolom lain yang dibutuhkan untuk surat
        $surat->surat = $fileName; // Save the file name to the 'file_name' column in the database
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
