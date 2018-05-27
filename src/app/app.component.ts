import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onDeactivate() {
    console.log('scroll');
    document.body.scrollTop = 0;
    // Alternatively, you can scroll to top by using this other call:
    window.scrollTo(0, 0)
  }
  title = 'app';
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
}
