<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        abort_if(Gate::denies('users_management_users_update'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'username' => 'required|string|max:25|unique:users,username,' . $this->id . '|regex:/(^[A-Za-z0-9-_]+$)+/',
            'email' => 'email:rfc,dns|nullable',
            'roles' => 'nullable',
            'password' => 'sometimes|min:6|confirmed'
        ];
    }
}
