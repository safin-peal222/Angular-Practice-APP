import { Component, Input, OnInit, Pipe } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
  
  <h2>{{parentData}}</h2>
  <h2>{{todayDate|date:'shortDate'}}</h2>
  <h2>{{employee.name}}</h2>

  `,
  styles: [`
  .text-success {
    color : green;
  }
  
  `

  ]
})
export class TestComponent implements OnInit {
  @Input() public parentData;
  public todayDate = new Date();
  public employee = {
    "name": "safin mahmud",
    salary: 5000,
    designation: "general secretary"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
