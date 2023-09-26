<?php

namespace App\Http\Controllers\UserManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    public function dataTable(Request $request): \Illuminate\Http\JsonResponse
    {

        abort_if(Gate::denies('users_management_users_list'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $searchValue = $request->search;
        $columnOrder = $request->sortby;
        $orderDirection = $request->sortdir;
        $perPage = intVal($request->currentpage);
        $disabled_user = $request->disableduser;

        $query = User::with(['roles', 'permissions'])->when($disabled_user == 'true', function ($q) {
                $q->onlyTrashed();
            })->where(function ($q) use ($searchValue) {
                $q->where('name', 'LIKE', "%$searchValue%")
                    ->orwhere('username', 'LIKE', "%$searchValue%")
                    ->orwhere('email', 'LIKE', "%$searchValue%");
            })->orderBy($columnOrder, $orderDirection)->paginate($perPage);


        return response()->json($query);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreUserRequest $request)
    {
        $data = DB::transaction(function () use ($request) {

            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => $request->password,
            ]);

            $roles = $request->input('roles') ? $request->input('roles') : [];
            $direct_permissions = $request->input('direct_permissions') ? $request->input('direct_permissions') : [];
            $user->syncRoles($roles);
            $user->syncPermissions($direct_permissions);

            return true;
        });

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
        abort_if(Gate::denies('users_management_users_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $data = User::UserWithRoles($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateUserRequest $request, $id)
    {

        $data = DB::transaction(function () use ($request, $id) {
            $user = User::withTrashed()->findOrFail($id);
            $user->name = $request->name;
            $user->username = $request->username;
            $user->email = $request->email;
            $user->password = $request->password;
            $user->save();

            $roles = $request->input('roles') ? $request->input('roles') : [];
            $direct_permissions = $request->input('direct_permissions') ? $request->input('direct_permissions') : [];
            $user->syncRoles($roles);
            $user->syncPermissions($direct_permissions);

            return true;
        });

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        abort_if(Gate::denies('users_management_users_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $user = User::withTrashed()->findorfail($id);


        if ($user->trashed()) {

            $user->restore();

        } else {

            $user->delete();
        }


        return response()->json($user);
    }
}
