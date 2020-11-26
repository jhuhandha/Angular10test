import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL } from './../config';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private _http: HttpClient) {}

  registrar(usuario: Usuario) {
    return this._http.post<any>(`${URL}/usuario`, usuario);
  }
}
