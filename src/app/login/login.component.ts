import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  email: string = '';
  password: string = '';
  isDisabled: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  chekIsDisabled() {
    return this.loginForm.invalid && (this.loginForm.dirty || this.loginForm.touched) ? true : false;
  }

  login() {
    // Aquí iría el código para validar el inicio de sesión
    // Si la validación es correcta, redirigimos al usuario a la siguiente pantalla
    if (this.loginForm.invalid) {
      console.log('invalido');
      this.loginForm.invalid && this.loginForm.markAllAsTouched();
      this.isDisabled = true;
    } else {
      this.isLoading = true;
      setTimeout(() => {
        this.router.navigate(['/employees']);
      }, 2500);
      console.log('email: ', this.loginForm.get('email')?.invalid);
      console.log('password: ', this.loginForm.get('password'));
    }
    
    
    
    // this.router.navigate(['/employees']);
  }
}
