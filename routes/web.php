<?php

use App\Http\Controllers\BlogController;
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
Route::get('/categories', function () {
    return Inertia::render('Categories');
})->name('categories');
Route::get('/blog/{blog}', [BlogController::class, 'show']);

Route::middleware(['auth'])->group(function () {

    Route::get('/create-blog', [BlogController::class, 'create']);
    Route::post('/upload-blog', [BlogController::class, 'store']);
    Route::get('/my-blog/{user}', [BlogController::class, 'userBlog']);
    Route::get('/edit-blog/{blog}', [BlogController::class, 'edit']);
    Route::post('/upload-image', function (Request $request) {
        dd($request->file('img'));
        $path = $request->file('img')->store('post-images');
        return  response()->json(['path' => "/storage/" . $path], 200);
    });
    Route::post('/edit-blog/{blog}', [BlogController::class, 'update']);
});

require __DIR__ . '/auth.php';
