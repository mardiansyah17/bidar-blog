<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coment extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public  $appends = ['user'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function getUserAttribute()
    {
        return $this->user()->get();
    }
    public function blog()
    {
        return $this->belongsTo(Blog::class);
    }
}
