<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
}
