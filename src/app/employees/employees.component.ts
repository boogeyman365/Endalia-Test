import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  isLoggedIn: boolean = true;
  
  employees = JSON.parse(localStorage.getItem('employees')!);

  searchQuery: string = '';

  constructor(private router: Router) {}

  get filteredEmployees() {
    return this.employees.filter((employee: Employee) => {
      return (
        this.eliminarDiacriticosEs(employee.surname).toLowerCase().includes(this.eliminarDiacriticosEs(this.searchQuery).toLowerCase()) ||
        this.eliminarDiacriticosEs(employee.name).toLowerCase().includes(this.eliminarDiacriticosEs(this.searchQuery).toLowerCase()) ||
        this.eliminarDiacriticosEs(employee.position).toLowerCase().includes(this.eliminarDiacriticosEs(this.searchQuery).toLowerCase()) ||
        this.eliminarDiacriticosEs(employee.phone).toLowerCase().includes(this.eliminarDiacriticosEs(this.searchQuery).toLowerCase()) ||
        this.eliminarDiacriticosEs(employee.email).toLowerCase().includes(this.eliminarDiacriticosEs(this.searchQuery).toLowerCase())
      );
    });
  }

  eliminarDiacriticosEs(texto: string) {
    return texto
           .normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
