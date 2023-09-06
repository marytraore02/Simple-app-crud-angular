import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-emloyee',
  templateUrl: './update-emloyee.component.html',
  styleUrls: ['./update-emloyee.component.scss']
})
export class UpdateEmloyeeComponent implements OnInit{

  id!: number;
  employees!: Employee;
  constructor(private employeService: EmployeeService, 
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("Id en params "+this.id);
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employees = data;
      console.log(this.employees);
    }, error => console.log(error));
  }

  //Methode update
  UpdateEmployee() {
    this.employeService.updateEmployee(this.id, this.employees).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
      // this.employees = new Employee();
      // this.
    })
  }

  goToEmployeeList() {
    this.router.navigate((['/employees']));
  }

  onSubmit(){
    console.log(this.employees);
    this.UpdateEmployee();
  }

}
