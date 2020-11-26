import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';
import { Respuesta } from '../../models/respuesta.model';

export const registrarUsuarios = createAction(
  '[Usuarios] Registrar Usuarios',
  props<{ usuario: Usuario }>()
);

export const registrarUsuariosSuccess = createAction(
  '[Usuarios] Registrar Usuarios Success',
  props<{ data: Respuesta }>()
);

export const loadUsuarioss = createAction('[Usuarios] Load Usuarioss');

export const loadUsuariosSuccess = createAction(
  '[Usuarios] Load Usuarioss Success',
  props<{ data: Array<Usuario> }>()
);

export const UsuariosFailure = createAction(
  '[Usuarios] Usuarioss Failure',
  props<{ error: Respuesta }>()
);
