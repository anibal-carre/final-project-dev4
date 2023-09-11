<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $table = 'usuarios';

    protected $primaryKey = 'id';

    protected $fillable = [
        'idpersona',
        'usuario',
        'clave',
        'habilitado',
        'idrol',
    ];

    // Definir relaciones
    public function persona()
    {
        return $this->belongsTo(Persona::class, 'idpersona');
    }

    public function rol()
    {
        return $this->belongsTo(Rol::class, 'idrol');
    }
}
