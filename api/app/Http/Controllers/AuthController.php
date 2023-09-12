<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('usuario', 'clave');

        if (Auth::attempt($credentials)) {
            // El inicio de sesión fue exitoso, puedes devolver una respuesta JSON con éxito.
            return response()->json(['message' => 'Inicio de sesión exitoso']);
        }

        // El inicio de sesión falló, devuelve una respuesta JSON con un error.
        return response()->json(['message' => 'Credenciales incorrectas'], 401);
    }
}
