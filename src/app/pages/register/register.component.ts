import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { UsuarioState } from './../../redux/reducers/usuario.reducer';
import { registrarUsuarios } from 'src/app/redux/actions/usuarios.actions';
import { Usuario } from '../../models/usuario.model';
import { State } from './../../redux/reducers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = null;
  loading = false;
  respuesta = null;

  get nombre() {
    return this.registerForm.get('nombre');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  constructor(private _store: Store<State>) {}

  ngOnInit(): void {
    this._store.select('usuario').subscribe((data) => {
      this.loading = data.loading;
      console.log('respuesta', data.respuesta);
    });

    this.registerForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  guardar() {
    let usuario: Usuario = {
      ...this.registerForm.value,
      role: 'ADMIN_ROLE',
      img: null,
    };
    this._store.dispatch(registrarUsuarios({ usuario }));
  }
}
