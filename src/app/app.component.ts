import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Firstapp';
  value = '12341151412312412';

  constructor() {
    setTimeout(() => {
      this.value = 'asdbaegfbawefab';
    }, 3000);
  }
}
