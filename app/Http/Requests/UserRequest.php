<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
                'userName' => 'required',
                'userEmail' => 'required|distinct',
                'userPassword' => 'required|min:3',
        ];
    }
    protected function failedValidation(Validator $validator) {
        $error = response()->json([
            'status' => 400,
            'errors' => $validator->errors(),
        ],400);
        throw new HttpResponseException($error);
    }
}
