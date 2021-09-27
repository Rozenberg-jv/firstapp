import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent {
  exampleForm;

  constructor(private http: HttpClient) {
    this.exampleForm = new FormGroup({
      input1: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        this.aContValidator,
      ]),
      input2: new FormControl(''),
    });
  }

  data = {
    value1: '',
    value2: '',
  };

  aContValidator(control: AbstractControl): { [s: string]: boolean } | null {
    if (control.value && !control.value.includes('A')) {
      return { acont: true };
    }

    return null;
  }

  getErrorList(list: any): string[] | null {
    console.log(list);

    return Object.keys(list ? list : {});
  }

  submitForm() {
    // console.log(this.exampleForm);

    console.log(
      this.exampleForm.controls.input1.value,
      this.exampleForm.controls.input2.value
    );

    this.data.value1 = this.exampleForm.controls.input1.value.trim();
    this.data.value2 = this.exampleForm.controls.input2.value.trim();

    this.exampleForm.reset();
  }

  /* http */

  download() {
    console.log('download');

    this.http
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .subscribe((response) => {
        console.log('response', response);
      });
  }
}
