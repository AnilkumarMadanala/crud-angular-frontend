import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// Define an interface representing an employee
interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
}

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // Declare employees as an array of objects of type Employee
  employees: Employee[] = [];
id: number=1;
  httpClient: any;



  constructor(private employeeService:EmployeeService, private router:Router) {}

  ngOnInit(): void {
    // Assign an array of employee objects to employees
    this.getEmployees();
  } 
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees = data ;
    });
  } 
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
     console.log(data);
      this.getEmployees();
    })
  }
   
}   
    
  
