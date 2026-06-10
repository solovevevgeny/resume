<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\account;


class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $account = new account();
        $account->title = "Сбербанк";
        $account->save();

        $account = new account();
        $account->title = "Альфабанк";
        $account->save();

        $account = new account();
        $account->title = "ВТБ";
        $account->save();

        $account = new account();
        $account->title = "Кошелек";
        $account->save();

    }
}
