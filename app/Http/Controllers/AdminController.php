<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        if (!Auth()->user()->role) {
            return redirect('/');
        }
        return Inertia::render('AdminBlogs', [
            'blogs' =>       Blog::with(['user', 'category'])->where('is_pending', true)->get()
        ]);
    }

    public function approve(Blog $blog)
    {
        $blog->update(['is_pending' => false]);
        return redirect('/admin/blogs');
    }
}
