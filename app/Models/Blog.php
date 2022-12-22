<?php

namespace App\Models;

use Carbon\Carbon;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    use Sluggable;
    protected $guarded = ['id'];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
    public  $appends = ['user', 'category', 'coments'];

    public function category()
    {
        return    $this->belongsTo(Category::class);
    }
    public function user()
    {
        return  $this->belongsTo(User::class);
    }
    public function getUserAttribute()
    {
        return $this->user()->get();
    }
    public function getCategoryAttribute()
    {
        return $this->category()->get();
    }
    public function getComentsAttribute()
    {
        return $this->coments()->latest()->get();
    }

    public function coments()
    {
        return $this->hasMany(Coment::class);
    }
}
