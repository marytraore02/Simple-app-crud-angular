import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private BASE_URL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

       // List 
       liste(): Observable<any> {
        return this.http.get(`http://localhost:8080/api/v1/employees`);
      }

               //Liste 
   GetAllEployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.BASE_URL + `employees`);
  }

}
