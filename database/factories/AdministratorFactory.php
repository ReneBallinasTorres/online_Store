<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Administrator>
 */
class AdministratorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'username'=>fake()->name(),
            'surname'=>fake()->lastName(),
            'email'=>fake()->safeEmail(),
            // 'email'=>fake()->unique()->safeEmail(),
            'password' => fake()->password(8, 16),
            // 'password' => static::$password ??= Hash::make('password'),
        ];
    }
}
