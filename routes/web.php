<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
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

Route::post('/upload-image', function (Request $request) {
    // dd($request->all());
    $path = $request->file('img')->store('images');
    return  response()->json(['path' => "/storage/" . $path], 200);
});



require __DIR__ . '/auth.php';
