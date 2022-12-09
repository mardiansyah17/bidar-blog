<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia('Home');
})->name('guest');

Route::get('/all-blog', [BlogController::class, 'index'])->name('all-blog');
Route::get('/blog/{blog}', [BlogController::class, 'show']);
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [UserController::class, 'show']);
    Route::post('/update-profile', [UserController::class, 'update']);

    Route::get('/create-blog', [BlogController::class, 'create']);
    Route::post('/upload-blog', [BlogController::class, 'store']);
    Route::get('/my-blog/{user}', [BlogController::class, 'userBlog']);
    Route::get('/edit-blog/{blog}', [BlogController::class, 'edit']);
    Route::post('/edit-blog/{blog}', [BlogController::class, 'update']);
    Route::delete('/blog-delete/{blog}', [BlogController::class, 'destroy']);

    Route::post('/upload-image', function (Request $request) {
        // dd($request->all());
        $path = $request->file('img')->store('post-images');
        return  response()->json(['path' => "/storage/" . $path], 200);
    });
});

require __DIR__ . '/auth.php';
