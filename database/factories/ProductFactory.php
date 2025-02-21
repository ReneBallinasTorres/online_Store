<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=>fake()->name(),
            'description'=>fake()->sentence(),
            'category' => $this->faker->numberBetween(1, 10), // Asegúrate de que sea un número entero
            // 'category'=>fake()->sentence(),
            'count'=>fake()->numberBetween(1,100),
            'status'=>fake()->sentence(),
            'price'=>fake()->numberBetween(1.1,1000.99)
        ];
    }
}
