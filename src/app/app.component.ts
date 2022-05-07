import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // count = 0;
  // getData(val: string) {
  //   val === "add" ? this.count++ : this.count--;

  // }
  UserData = '';

  getData(data: any) {
    console.log(data.value);
    this
  }
}
