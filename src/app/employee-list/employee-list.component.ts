import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  
  </ul>
  
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  public employees = [
    { id: 1, name: "peal", salary: 1500, designation: "general" },
    { id: 1, name: "peal", salary: 1500, designation: "general" },
    { id: 1, name: "peal", salary: 1500, designation: "general" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
