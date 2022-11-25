<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Category;
use App\Models\User;
use Carbon\Carbon;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        dd(DB::table('users')->get());
        $blog = Blog::all();
        return Inertia::render('AllBlog', [
            'blogs' => $blog
        ]);
    }

    public function show(Blog $blog)
    {

        return Inertia::render('Blog', [
            'blog' => $blog,
            'route' => ["blog/{blog}"]
        ]);
    }

    public function create()
    {
        return Inertia::render('PostBlog', [
            'categories' =>
            Category::all()
        ]);
    }
    public function store(Request $request)
    {
        $blog =   $request->validate(
            [
                'title' => ['required', 'min:5', 'max:50'],
                'category_id' => ['required'],
                'content' => ['required'],
                'description' => ['required']
            ]
        );
        $slug = SlugService::createSlug(Blog::class, 'slug', $request->title);
        $blog['user_id'] = Auth()->id();
        $blog['slug'] = $slug;
        Blog::create($blog);

        return redirect("/blog/" .  $slug)->with('success', true);
    }

    public function userBlog($userId)
    {
        $blogs =     Blog::with('category')->where('user_id', $userId)->get();

        return Inertia::render('MyBlog', [
            'blogs' => $blogs
        ]);
    }

    public function edit(Blog $blog)
    {
        return Inertia::render('EditBlog', [
            'blog' => $blog,
            'categories' => Category::all()
        ]);
    }

    public function update(Blog $blog, Request $request)
    {

        $updateBlog =   $request->validate(
            [
                'title' => ['required', 'min:5', 'max:50'],
                'category_id' => ['required'],
                'content' => ['required'],
                'description' => ['required']
            ]
        );
        Blog::where('slug', $blog->slug)->update($updateBlog);
        return redirect('/blog/' . $blog->slug);
    }
}
