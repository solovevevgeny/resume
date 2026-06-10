<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\transaction;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $transaction = new transaction();
        $transaction->account_from_id = 1;
        $transaction->type = 'sub';
        $transaction->amount = 1000;
        $transaction->comment = 'Списание со счета (1) на 1000';
        $transaction->save();

        $transaction = new transaction();
        $transaction->account_from_id = 2;
        $transaction->type = 'sub';
        $transaction->amount = 1000;
        $transaction->comment = 'Списание со счета (2) на 1000';
        $transaction->save();

        $transaction = new transaction();
        $transaction->account_from_id = 1;
        $transaction->type = 'add';
        $transaction->amount = 2000;
        $transaction->comment = 'Пополнение (1) на 2000';
        $transaction->save();

        $transaction = new transaction();
        $transaction->account_from_id = 1;
        $transaction->account_to_id = 2;
        $transaction->type = 'move';
        $transaction->amount = 1500;
        $transaction->comment = 'Перемещение со счета (1) на счет (2) 1500';
        $transaction->save();


    }
}
