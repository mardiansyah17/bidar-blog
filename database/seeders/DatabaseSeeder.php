<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Blog;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'name' => 'Muhammad Mardiansyah',
            'username' => 'mardi',
            'email' => 'mardi@gmail.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'role' => 1
        ]);
        \App\Models\User::factory(10)->create();
        Category::create(
            [
                'name' => 'berita',
            ]
        );
        Category::create(
            [
                'name' => 'tutorial',
            ]
        );
        Category::create(
            [
                'name' => 'hiburan',
            ]
        );
        Blog::factory(50)->create();
    }
}
