<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\transaction;
use App\Models\account;

class TransactionsController extends Controller
{

    private function transactionsub($account_from_id, $amount){
        $account = account::find($account_from_id);
        $account->current_amount = $account->current_amount - $amount;
        $account->save();
    }

    private function transactionadd($account_to_id, $amount){
        $account = account::find($account_to_id);
        $account->current_amount = $account->current_amount + $amount;
        $account->save();
    }

    private function transactionmove($account_from_id, $account_to_id, $amount){

        $account = account::find($account_from_id);
        $account->current_amount = $account->current_amount - $amount;
        $account->save();

        $account = account::find($account_to_id);
        $account->current_amount = $account->current_amount + $amount;
        $account->save();

    }



    public function index(){
        $transactions = transaction::with('account_from', 'account_to')->get();
        return response()->json($transactions, 200);
    }

    public function store(Request $request){
        $type =$request->input('type');
        if ($type == "sub") {
            $this->transactionsub($request->input('account_from_id'), $request->input('amount'));
        }
        else if ($type == "add") {
            $this->transactionadd($request->input('account_to_id'), $request->input('amount'));
        }
        else if ($type == "move") {
            $this->transactionmove($request->input('account_from_id'), $request->input('account_to_id') , $request->input('amount'));
        }


        $transaction = transaction::create($request->all());
        return response($transaction, 201);
    }

    public function show($id){
        $transaction = transaction::find($id);
        return response()->json($transaction, 200);
    }

    public function update(Request $request, $id){
        // TODO
    }


    public function destroy($id){
        $transaction = transaction::find($id);
        $transaction->delete();
        return response()->json($transaction, 200);

    }
}
