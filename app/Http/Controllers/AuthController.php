<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use DateTimeZone;
use DateTime;
// use Illuminate\Support\Facades\Redis;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function listUser()
    {
        $data = User::all();

        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    public function getById($id)
    {
        $data = User::find($id);
        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    public function updateUser($id)
    {
        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $id,
            'password' => 'sometimes|required|min:6',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation Error',
                'errors' => $validator->errors(),
            ], 422);
        }
    
        $data = User::find($id);
    
        if (!$data) {
            return response()->json([
                'message' => 'User not found',
            ], 404);
        }
    
        $data->name = request('name');
        $data->email = request('email');
    
        // Check if the password is provided and not empty before updating
        if (request()->filled('password')) {
            $data->password = bcrypt(request('password'));
        }
    
        $data->save();
    
        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }
    

    public function deleteUser($id)
    {
        $data = User::find($id);
        $data->delete();
        return response()->json([
            'message' => 'success'
        ]);
    }

    public function register()
    {
        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 400);
        }

        $user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => bcrypt(request('password')),
        ]);

        if ($user) {
            return response()->json(['message' => 'Registration successful']);
        } else {
            return response()->json(['message' => 'Registration failed'], 500);
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // Debug statement
        // echo "Token: $token";
        $user = User::where('email', request('email'))->first();

        return $this->respondWithToken($token, $user->role);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $role)
    {
        $expirationTime = auth()->factory()->getTTL() * 60;
        $expiresInTimestamp = time() + $expirationTime;
    
        $dateTimeZone = new DateTimeZone('Asia/Jakarta');
        $dateTime = new DateTime('@' . $expiresInTimestamp);
        $dateTime->setTimezone($dateTimeZone);
        $expiresIn = $dateTime->format('Y-m-d H:i:s');
    
        return response()->json([
            'access_token' => $token,
            'role' => $role,
            'token_type' => 'bearer',
            'expires_in' => $expiresIn
        ]);
    }
    
    

}