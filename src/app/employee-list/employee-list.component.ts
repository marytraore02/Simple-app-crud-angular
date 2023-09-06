import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  title = 'simple-crud-app-angular';
  employees!: Employee[];
  totalEmployees: any;

  constructor(private employeeService: EmployeeService) {}
 
  ngOnInit(): void {
    this.lister();
  }

         // La liste des rendez-vous
         lister() {
          this.employeeService.GetAllEployee()
          .subscribe(
            res => {
              this.employees = res;
              console.log(this.employees)
              this.totalEmployees= this.employees.length
            },
            err => {
              // location.reload();
          }
          );
        }

}
