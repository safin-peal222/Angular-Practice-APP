import { Component } from '@angular/core';
import { takeLast } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

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
  //   UserData = '';

  //   getData(data: any) {
  //     console.log(data.value);
  //     this
  //   }
  //   list: any[] = [];

  //   Onclick(item: string) {
  //     this.list.push({ id: this.list.length, name: item })
  //     console.log(this.list);
  //     item = '';


  //   }

  //   removeItem(id: number) {
  //     this.list = this.list.filter(item => item.id !== id)
  //   }

  // data = 10;
  // name = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  onSubmit() {
    console.log(this.profileForm.value)
  }
}
