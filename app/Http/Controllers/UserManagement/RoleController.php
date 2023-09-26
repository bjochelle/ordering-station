<?php

namespace App\Http\Controllers\UserManagement;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $data = Role::all();
        return response()->json($data);
    }


    public function dataTable(Request $request): \Illuminate\Http\JsonResponse
    {
        abort_if(Gate::denies('users_management_roles_list'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $searchValue = $request->search;
        $columnOrder = $request->sortby;
        $orderDirection = $request->sortdir;
        $perPage = intVal($request->currentpage);

        $data = Role::with('permissions')
            ->where('name', 'LIKE', "%$searchValue%")
            ->orderBy($columnOrder, $orderDirection)->paginate($perPage);

        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {

        abort_if(Gate::denies('users_management_roles_store'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $request->validate([
            'name' => 'required|unique:roles,name|regex:/(^[A-Za-z0-9-_]+$)+/',
            'permissions' => 'required'
        ]);

        $data = Role::create(['guard_name' => $request->guard_name, 'name' => $request->name]);
        $permissions = $request->input('permissions') ? $request->input('permissions') : [];
        $data->givePermissionTo($permissions);

        return response()->json($data);
    }


    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        abort_if(Gate::denies('users_management_roles_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $data = Role::RoleWithPermissions($id);
        return response()->json($data);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        abort_if(Gate::denies('users_management_roles_update'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $request->validate([
            'name' => 'required|unique:roles,name,' . $request->role . '|regex:/(^[A-Za-z0-9-_]+$)+/',
            'permissions' => 'required',
            'guard_name' => 'required'
        ]);


        $data = Role::findOrFail($id);
        $data->update($request->except('permissions'));
        $permissions = $request->input('permissions') ? $request->input('permissions') : [];
        $data->syncPermissions($permissions);
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        abort_if(Gate::denies('users_management_roles_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $data = Role::findorFail($id);
        $data->delete();

        return response()->json($data);
    }
}
