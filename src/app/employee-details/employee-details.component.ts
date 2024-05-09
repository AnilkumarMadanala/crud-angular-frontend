import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee;
  constructor(private route:ActivatedRoute,private employeeServive: EmployeeService){}
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.employee=new Employee();
    this.employeeServive.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
    });
  }

  

}
