import { Action, createReducer, on } from '@ngrx/store';

import { Usuario } from '../../models/usuario.model';
import { Respuesta } from '../../models/respuesta.model';
import {
  UsuariosFailure,
  registrarUsuariosSuccess,
  registrarUsuarios,
} from '../actions/usuarios.actions';

export const usuarioFeatureKey = 'usuario';

export interface UsuarioState {
  usuario: Usuario;
  usuarios: Array<Usuario>;
  respuesta: Respuesta;
  loading: boolean;
}

export const initialState: UsuarioState = {
  usuario: null,
  usuarios: [],
  respuesta: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(registrarUsuarios, (state) => ({
    ...state,
    respuesta: null,
    loading: true,
    error: null,
  })),
  on(registrarUsuariosSuccess, (state, action) => ({
    ...state,
    respuesta: action.data,
    loading: false,
    error: null,
  })),
  on(UsuariosFailure, (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  }))
);
