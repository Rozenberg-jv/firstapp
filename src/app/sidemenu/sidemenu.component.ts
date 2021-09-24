import {Component, OnInit} from '@angular/core';
import {SomeExampleService} from "../services/some-example.service";
import {LocalCounterService} from "../services/local-counter.service";

@Component({
  selector: 'sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
  providers: [LocalCounterService]
})
export class SidemenuComponent {

  constructor(public someExampleService: SomeExampleService,
              public localCounterService: LocalCounterService) {

  }
}
