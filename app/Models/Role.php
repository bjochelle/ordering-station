<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends \Spatie\Permission\Models\Role
{
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime:M d, Y',
    ];

    public static function RoleWithPermissions($id)
    {
        $role = Role::with(array('permissions' => function ($query) {
            $query->select('name');
        }))->find($id);
        $map['id'] = $role->id;
        $map['name'] = $role->name;
        $map['guard_name'] = $role->guard_name;
        $map['permissions'] = $role->permissions->map(function ($permission) {
            return $permission->name;
        });

        return $map;
    }

}
