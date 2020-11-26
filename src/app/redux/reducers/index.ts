import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromUsuario from './usuario.reducer';


export interface State {
  [fromUsuario.usuarioFeatureKey]: fromUsuario.UsuarioState;
}

export const reducers: ActionReducerMap<State> = {
  [fromUsuario.usuarioFeatureKey]: fromUsuario.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
