import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { UsuariosService } from '../../services/usuarios.service';
import { Respuesta } from '../../models/respuesta.model';
import {
  UsuariosFailure,
  registrarUsuarios,
  registrarUsuariosSuccess,
} from '../actions/usuarios.actions';

@Injectable()
export class UsuarioEffects {
  constructor(private actions$: Actions, 
    private _usuario: UsuariosService) {}

  registrar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registrarUsuarios),
      exhaustMap((action) =>
        this._usuario.registrar(action.usuario).pipe(
          map((respuesta) => {
            let resp: Respuesta = {
              ok: respuesta.ok,
              data: respuesta.usuario,
              message: 'Se realizo el registro',
              error: null
            };
            return registrarUsuariosSuccess({ data: resp });
          }),
          catchError((error) => {
            let _error : Respuesta = {
              ok: error.ok,
              error: error.errors,
              message : error.message,
              data: null,
            }
            return of(UsuariosFailure({ error: _error }));
          })
        )
      )
    )
  );
}
