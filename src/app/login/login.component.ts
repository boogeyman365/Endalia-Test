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

  private responseJSON = [
    {
      image: '../assets/images/users/user1.jpg',
      surname: 'Abad Jiménez',
      name: 'Ignacio',
      position: 'Responsable de Desarrollo de RRHH',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user2.jpg',
      surname: 'Aguirre León',
      name: 'Verónica',
      position: 'Operario Sección 1',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user3.jpg',
      surname: 'Aguirre Ribera',
      name: 'Miguel Ángel',
      position: 'Dirección Comercial',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user4.jpg',
      surname: 'Alcalá Herrera',
      name: 'Carlos',
      position: 'Auditor de Medioambiente / Encargado de Producción',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user5.jpg',
      surname: 'Alcalá Ordoñez',
      name: 'Ángela',
      position: 'Administrativo/a',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user6.jpg',
      surname: 'Álvarez Pineda',
      name: 'Laura',
      position: 'Auditor de Calidad',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user7.jpg',
      surname: 'Antón Teruel',
      name: 'Pedro',
      position: 'Operario Sección 2 Turno Tarde',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user8.jpg',
      surname: 'Aparicio Herrero',
      name: 'Vicente',
      position: 'Coordinador de Ventas Zona Norte',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user9.jpg',
      surname: 'Ariza Franco',
      name: 'Juan Pedro',
      position: 'Responsable de Proyecto',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user10.jpg',
      surname: 'Ariza Hidalgo',
      name: 'Ignacio',
      position: 'Auditor de Medioambiente',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user11.jpg',
      surname: 'Busing Redwine',
      name: 'Hannah',
      position: 'Operario Seccion 2 Turno Día',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user12.jpg',
      surname: 'Bradcof Ruiz',
      name: 'Brieda',
      position: 'Auditora de Proyectos',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user5.jpg',
      surname: 'Alcalá Ordoñez',
      name: 'Ángela',
      position: 'Administrativo/a',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
    {
      image: '../assets/images/users/user6.jpg',
      surname: 'Álvarez Pineda',
      name: 'Laura',
      position: 'Auditor de Calidad',
      phone: '648805252',
      email: 'prueba@endalia.com'
    },
  ]

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
      localStorage.setItem('employees',JSON.stringify(this.responseJSON));
      setTimeout(() => {
        this.router.navigate(['/employees']);
      }, 2500);
    }
    
    
    
    // this.router.navigate(['/employees']);
  }
}
