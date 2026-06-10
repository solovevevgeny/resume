<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\account;

class AccountsController extends Controller
{
    


    public function index(){
        $accounts = account::all();
        return response()->json($accounts, 200);
    }

    public function total() {
        $total = account::sum('current_amount');
        return response()->json($total, 200);
    }

    public function store(Request $request){
        $account= account::create($request->all());
        return response()->json($account, 201);
        
    }

    public function show($id){
        $account = account::find($id);
        return response()->json($account, 200);
    }

    public function update(Request $request, $id){
        // TODO
    }

    public function destroy($id){
        $account = account::find($id);
        $account->delete();
        return response()->json($account,200);
    }
}
