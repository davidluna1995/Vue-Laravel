<?php
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

use Illuminate\Http\Request;

Route::post('auth/login', 'ApiController@login');
Route::post('register', 'ApiController@register');
//Rutas para el reinicio de password
Route::post('sendEmail','ResetPasswordController@sendEmail');
Route::post('resetPassword','ResetPasswordController@process');

Route::group(['middleware' => 'auth.jwt'], function () {

    //login y user
    Route::get('auth/user', 'ApiController@user');
    Route::post('auth/logout', 'ApiController@logout');
    Route::get('allUser', 'ApiController@allUser');
    Route::post('modificar_perfil', 'ApiController@modificar_perfil');
    Route::post('cambiar_password', 'ApiController@cambiar_password');
    Route::post('crear_usuario', 'ApiController@crear_usuario');
    Route::get('traer_usuarios', 'ApiController@traer_usuarios');
    Route::post('delete_usuario', 'ApiController@delete_usuario');
    
});
