<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Rol::all();
        return response()->json($roles);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'rol' => 'unique:roles,rol',
            'fechacreacion' => 'date',
            'fechamodificacion' => 'date',
            'usuariocreacion' => 'nullable',
            'usuariomodificacion' => 'nullable',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $rol = Rol::create($request->all());

        return response()->json($rol, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $rol = Rol::find($id);

        if (!$rol) {
            return response()->json(['error' => 'Rol no encontrado'], 404);
        }

        return response()->json($rol);
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
            'rol' => 'unique:roles,rol,' . $id,
            'fechamodificacion' => 'date',
            'usuariomodificacion' => 'nullable',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Aquí utilizamos 'idrol' en lugar de 'id'
        $rol = Rol::find($id);

        if (!$rol) {
            return response()->json(['error' => 'Rol no encontrado'], 404);
        }

        // Actualizamos el rol con los datos de la solicitud
        $rol->update($request->all());

        return response()->json($rol, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $rol = Rol::findOrFail($id);
        $rol->delete();

        return response()->json(null, 204);
    }
}
