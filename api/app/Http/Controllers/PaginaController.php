<?php

namespace App\Http\Controllers;

use App\Models\Pagina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaginaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paginas = Pagina::all();
        return response()->json($paginas);
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
            'fechacreacion' => 'required|date',
            'fechamodificacion' => 'date',
            'usuariocreacion' => 'required',
            'usuariomodificacion' => 'nullable',
            'url' => 'required',
            'estado' => 'required',
            'nombre' => 'required',
            'descripcion' => 'required',
            'icono' => 'required',
            'tipo' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $pagina = Pagina::create($request->all());

        return response()->json($pagina, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
            'fechacreacion' => 'required|date',
            'fechamodificacion' => 'date',
            'usuariocreacion' => 'required',
            'usuariomodificacion' => 'nullable',
            'url' => 'required',
            'estado' => 'required',
            'nombre' => 'required',
            'descripcion' => 'required',
            'icono' => 'required',
            'tipo' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $pagina = Pagina::findOrFail($id);
        $pagina->update($request->all());

        return response()->json($pagina, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pagina = Pagina::findOrFail($id);
        $pagina->delete();

        return response()->json(null, 204);
    }
}
