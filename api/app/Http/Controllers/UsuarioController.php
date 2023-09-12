<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usuarios = Usuario::all();
        return response()->json($usuarios);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'usuario' => 'required|unique:usuarios,usuario',
            'clave' => 'required',
            'habilitado' => 'boolean',
            'idrol' => 'required|exists:roles,idrol',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $usuario = Usuario::create($request->all());

        return response()->json($usuario, 201);
    }


    public function show($id)
    {
        $usuario = Usuario::find($id);

        if (!$usuario) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        return response()->json($usuario);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [

            'usuario' => 'unique:usuarios,usuario,' . $id,

            'habilitado' => 'boolean',
            'idrol' => 'exists:roles,idrol',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $usuario = Usuario::findOrFail($id);
        $usuario->update($request->all());

        return response()->json($usuario, 200);
    }

    public function register(Request $request)
    {
        // Validación de los datos del usuario
        $validator = Validator::make($request->all(), [

            'usuario' => 'unique:usuarios,usuario',
            'clave' => 'required',
            'habilitado' => 'boolean',
            'idrol' => 'exists:roles,idrol',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Crear un nuevo usuario
        $usuario = new Usuario();
        $usuario->usuario = $request->input('usuario');
        $usuario->clave = $request->input('clave');
        $usuario->habilitado = $request->input('habilitado');
        $usuario->idrol = $request->input('idrol');
        $usuario->save();

        // Devolver una respuesta con los detalles del usuario registrado
        return response()->json(['message' => 'Usuario registrado con éxito', 'usuario' => $usuario], 201);
    }

    public function login(Request $request)
    {
        // Validación de los datos del inicio de sesión
        $auth = Usuario::where('usuario', $request->usuario)->where('clave', $request->clave)->first();

        if (!$auth) {
            return response()->json(['error' => 'Credenciales incorrectas'], 401);
        }

        // Si las credenciales son correctas, puedes devolver los detalles del usuario
        return response()->json([
            'success' => true,
            'message' => 'Inicio de sesión exitoso',
            'token' => 'el-token-de-autenticación',
            'idrol' => $auth->idrol,
            'usuario' => $auth, // Puedes devolver todos los detalles del usuario si es necesario
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();

        return response()->json(null, 204);
    }
}
