import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit{

  employees: Employee = new Employee();

  constructor(private employeeService: EmployeeService, 
              private router: Router) {}

  ngOnInit(): void {
    
  }

  saveEmployee() {
    this.employeeService.CreateEmployee(this.employees).subscribe( data => {
      console.log(data);
      this.goToEmployeeList();
    }, 
      error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate((['/employees']));
  }

  onSubmit(){
    console.log(this.employees);
    this.saveEmployee();
  }

}
