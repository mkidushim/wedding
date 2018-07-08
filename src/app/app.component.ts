import { Component,Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onDeactivate() {
    document.body.scrollTop = 0;
    // Alternatively, you can scroll to top by using this other call:
    window.scrollTo(0, 0)
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  deferredPrompt: any = {};
  constructor(public renderer:Renderer2){
    renderer.listen('window','beforeinstallprompt', (event) => {
      event.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = event;
      console.log(event);
     // Do something with 'event'
   });
  }
}
