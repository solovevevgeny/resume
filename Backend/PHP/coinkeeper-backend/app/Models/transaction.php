<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\account;

class transaction extends Model
{
    use HasFactory;
    protected $fillable = ['type', 'account_from_id', 'account_to_id', 'amount', 'comment'];

    public function account_from() {
        return $this->hasOne(account::class, 'id', 'account_from_id');
    }

    public function account_to() {
        return $this->hasOne(account::class, 'id', 'account_to_id');
    }

}
