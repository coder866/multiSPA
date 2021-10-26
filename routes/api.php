<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SecretsController;

Route::get('/secrets',[SecretsController::class,'index']);