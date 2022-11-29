<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => 1,
            'category_id' => rand(1, 3),
            'title' => $this->faker->text(10),
            'content' => $this->faker->paragraph(5),
            'slug' => $this->faker->slug(),
            'description' => $this->faker->text(100),
            'cover_url' => '/storage/post-images/cE39VLZseYnXwwCOb2d2JoVlMEtaE93Jrue6YrIw.png'

        ];
    }
}
