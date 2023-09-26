<?php

namespace Database\Seeders;


use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()['cache']->forget('spatie.permission.cache');


        Permission::create(['name' => 'user_management_panel']);
        Permission::create(['name' => 'user_management_permissions']);
        Permission::create(['name' => 'user_management_roles']);
        Permission::create(['name' => 'user_management_users']);
        Permission::create(['name' => 'users_management_users_list']);
        Permission::create(['name' => 'users_management_users_show']);
        Permission::create(['name' => 'users_management_users_update']);
        Permission::create(['name' => 'users_management_users_delete']);
        Permission::create(['name' => 'users_management_users_store']);
        Permission::create(['name' => 'users_management_roles_list']);
        Permission::create(['name' => 'users_management_roles_show']);
        Permission::create(['name' => 'users_management_roles_update']);
        Permission::create(['name' => 'users_management_roles_delete']);
        Permission::create(['name' => 'users_management_roles_store']);
        Permission::create(['name' => 'users_management_permissions_list']);
        Permission::create(['name' => 'users_management_permissions_show']);
        Permission::create(['name' => 'users_management_permissions_update']);
        Permission::create(['name' => 'users_management_permissions_delete']);
        Permission::create(['name' => 'users_management_permissions_store']);
        Role::create(['name' => 'Super Administrator']);
        $role = Role::create(['name' => 'Administrator']);
        $role->givePermissionTo([
            'user_management_panel',
            'user_management_permissions',
            'user_management_roles',
            'user_management_users',
            'users_management_users_list',
            'users_management_users_show',
            'users_management_users_update',
            'users_management_users_delete',
            'users_management_users_store',
            'users_management_roles_list',
            'users_management_roles_show',
            'users_management_roles_update',
            'users_management_roles_delete',
            'users_management_roles_store',
            'users_management_permissions_list',
            'users_management_permissions_show',
            'users_management_permissions_update',
            'users_management_permissions_delete',
            'users_management_permissions_store',
        ]);
//        //Create Super admin
        User::create([
            'name' => 'superadmin',
            'username' => 'sa',
            'email' => 'sa@test.com',
            'password' => Hash::make('password'),
        ]);
//
//        //Create Admin
        User::create([
            'name' => 'admin',
            'username' => 'admin',
            'email' => 'admin@test.com',
            'password' => Hash::make('password'),
        ]);

        $user = User::where('username', 'sa')->first();
//
        $user->assignRole('Super Administrator');

        $user = User::where('username', 'admin')->first();

        $user->assignRole('Administrator');
    }
}
