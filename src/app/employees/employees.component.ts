import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  isLoggedIn = true;
  
  employees = [
    {
      image: '../assets/images/user1.jpg',
      fullName: 'Juan Pérez',
      position: 'Gerente',
      phone: '648805252',
      email: 'juan.perez@compania.com'
    },
    {
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },{
      image: '../assets/images/user1.jpg',
      fullName: 'María Gómez',
      position: 'Desarrollador web',
      phone: '648666666',
      email: 'maria.gomez@compania.com'
    },
    // Agregar más empleados aquí
  ];

  searchQuery = '';

  constructor(private router: Router) {}

  get filteredEmployees() {
    return this.employees.filter(employee => {
      return (
        employee.fullName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        employee.position.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        employee.phone.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        employee.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    });
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
