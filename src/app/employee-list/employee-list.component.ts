import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  employees!: Employee[];
  totalEmployees: any;

  constructor(private employeeService: EmployeeService, private router: Router) {}
 
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

        //Update employee
        updateEmployee(id: number | undefined) {
          this.router.navigate(['update-employee', id]);
        }

        //DeleteEmployer
        deleteEmployee(id: any){
          this.employeeService.deleteEmployee(id).subscribe(data => {
            console.log(data);
            this.lister();
          })
        }

        // Detail employee
        detailEmployee(id: any) {
          this.router.navigate(['detail-employee', id]);
        }

}
