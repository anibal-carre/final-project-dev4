<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    use HasFactory;

    protected $table = 'roles';

    protected $primaryKey = 'idrol';

    protected $fillable = [

        'rol',
        'fechacreacion',
        'fechamodificacion',
        'usuariocreacion',
        'usuariomodificacion',
    ];

    // Definir relaciones
    public function usuarios()
    {
        return $this->hasMany(Usuario::class, 'idrol');
    }

    public function paginas()
    {
        return $this->belongsToMany(Pagina::class, 'enlaces', 'idrol', 'idpagina');
    }
}