<?php

namespace App\Http\Controllers\UserManagement;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Permission::orderBy('name', 'asc')->get();

        return response()->json($data);
    }

    public function dataTable(Request $request): \Illuminate\Http\JsonResponse
    {

        abort_if(Gate::denies('users_management_permissions_list'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $searchValue = $request->search;
        $columnOrder = $request->sortby;
        $orderDirection = $request->sortdir;
        $perPage = intVal($request->currentpage);

        $data = \App\Models\Permission::where('name', 'LIKE', "%$searchValue%")
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
        abort_if(Gate::denies('users_management_permissions_store'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $request->validate([
            'name' => 'required|unique:permissions,name|regex:/(^[A-Za-z0-9-_]+$)+/',
            'guard_name' => 'required|regex:/(^[A-Za-z0-9-_]+$)+/',
        ]);

        $data = Permission::create(['guard_name' => $request->guard_name, 'name' => $request->name]);

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
        abort_if(Gate::denies('users_management_permissions_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $data = Permission::findorFail($id);

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
        abort_if(Gate::denies('users_management_permissions_update'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $request->validate([
            'name' => 'required|unique:permissions,name,' . $request->permission . '|regex:/(^[A-Za-z0-9-_]+$)+/',
            'guard_name' => 'required|regex:/(^[A-Za-z0-9-_]+$)+/',
        ]);
        $data = Permission::find($id);
        $data->name = $request->name;
        $data->guard_name = $request->guard_name;
        $data->save();

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
        abort_if(Gate::denies('users_management_permissions_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $data = Permission::findOrFail($id);
        $data->delete();
        return response()->json($data);
    }
}
