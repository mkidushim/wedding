import { Component,Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public renderer:Renderer2){
    renderer.listen('window','beforeinstallprompt', (event) => {
      event.preventDefault();
      event.prompt();
     // Do something with 'event'
   });
  }
  onDeactivate() {
    document.body.scrollTop = 0;
    
    window.scrollTo(0, 0);

  }

  status = false;

  clickEvent(){
    
    this.status = !this.status;       

  }
}
