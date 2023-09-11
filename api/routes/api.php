<?php

use App\Http\Controllers\BitacoraController;
use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\PaginaController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Rutas para la gestión de usuarios
Route::resource('usuarios', UsuarioController::class)->except(['create', 'edit']);
Route::post('register', [UsuarioController::class, 'register']); // Ruta para el registro de usuarios

// Rutas para la gestión de roles
Route::resource('roles', RoleController::class)->except(['create', 'edit']);

// Rutas para la gestión de enlaces
Route::resource('enlaces', EnlaceController::class)->except(['create', 'edit']);

// Rutas para la gestión de bitácoras
Route::resource('bitacoras', BitacoraController::class)->except(['create', 'edit']);

// Rutas para la gestión de personas
Route::resource('personas', PersonaController::class)->except(['create', 'edit']);

// Rutas para la gestión de páginas
Route::resource('paginas', PaginaController::class)->except(['create', 'edit']);
