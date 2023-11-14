<?php

namespace App\Http\Controllers;

use App\Models\WriteModel;
use Illuminate\Http\Request;

class WriterControler extends Controller
{
    public function index(){
        return WriteModel::all();
    }
    public function store(Request $request){
        $writer = new WriteModel();
        $writer->nev= $request->nev;
        $writer->szul= $request->szul;
        $writer->save();
    }
    public function delete($id) {
        WriteModel::Find($id)->delete();
    }
}
