<?php

namespace App\Http\Controllers;

use App\Models\Coment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ComentController extends Controller
{
    public function store(Request $request)
    {
        Coment::create([
            'user_id' => Auth()->id(),
            'blog_id' => $request->blog_id,
            'coment' => $request->coment
        ]);
        return redirect()->back();
    }
}
