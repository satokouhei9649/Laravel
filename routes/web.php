<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
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
// root
Route::get('{any}', function () {
    return view('app');
})->where('any','.*');
// Route::get('/', [PostController::class, 'top'])
//     ->name('posts.top');

// Route::get('posts/test', [PostController::class, 'test'])
//     ->name('posts.test');
//     // login
// Route::get('/login', [PostController::class, 'login'])
//     ->name('users.login');
// // signup
// Route::post('/signup', [PostController::class, 'signup'])
//     ->name('posts.signup');

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
