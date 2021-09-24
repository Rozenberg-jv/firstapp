import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent {
  exampleForm = new FormGroup({
    input1: new FormControl(''),
    input2: new FormControl(''),
  });

  submitForm() {
    console.log(this.exampleForm);

    console.log(
      this.exampleForm.controls.input1.value,
      this.exampleForm.controls.input2.value
    );
  }
}
