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
        return this.http.get<Employee[]>(this.BASE_URL + `/employees`);
      }

      //Create employee
      CreateEmployee(employee: Employee): Observable<Object>{
        return this.http.post(`${this.BASE_URL}` + `/employees/create`, employee);
      }

      //get one employee
      getEmployeeById(id: number): Observable<Employee>{
        return this.http.get<Employee>(`${this.BASE_URL}` + `/employees/${id}`);
      }

      // Update employee
      updateEmployee(id: number, employee: Employee): Observable<Object>{
        return this.http.put(`${this.BASE_URL}` + `/employees/update/${id}`, employee);
      }

      // Delete employee
      deleteEmployee(id: number): Observable<Object>{
        return this.http.delete(`${this.BASE_URL}` + `/employees/delete/${id}`);
      }
}
