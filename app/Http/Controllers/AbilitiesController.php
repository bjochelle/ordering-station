<?php

namespace App\Http\Controllers;

class AbilitiesController extends Controller
{
    public function index()
    {
        $roles = auth()->user()->getRoleNames();
        $permissions = auth()->user()->getAllPermissions()
            ->pluck('name');

        $abilities['roles'] = $roles;
        $abilities['permissions'] = $permissions;
        $abilities['user'] = auth()->user();
        return response()->json($abilities);

    }
}
