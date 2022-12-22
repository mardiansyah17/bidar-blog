<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{


    public function show()
    {

        return Inertia::render('ProfileSetting');
    }

    public function update(Request $request)
    {
        $user = [
            'email' => $request->user['email'],
            'name' => $request->user['name'],
            'username' => $request->user['username']
        ];
        User::find(Auth()->id())->update($user);
        return response()->json(['user' => $user], 200);
    }

    public function updatePassword(Request $request)
    {
        if ($request->new !== $request->confirm) {
            return response()->json(['message' => 'Kofirmasi password tidak sama'], 400);
        } else {
            $user = User::find(Auth()->id());
            if (Hash::check($request->old, $user->password)) {
                $user->update(['password' => Hash::make($request->new)]);
                return response()->json(['message' => 'Ganti password berhasil'], 200);
            } else {
                return response()->json(['message' => 'Password salah'], 400);
            }
        }
    }
}
