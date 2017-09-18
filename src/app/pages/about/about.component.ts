import { Component } from '@angular/core';
import { ConfigurePiwikTracker, UsePiwikTracker } from 'Angular2Piwik';
import { AuthService } from '../auth/auth.service';


declare const $: any;
declare const jQuery: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers:[ConfigurePiwikTracker,UsePiwikTracker]
})

export class AboutComponent {
  constructor(
    private configurePiwikTracker: ConfigurePiwikTracker,
    private usePiwikTracker: UsePiwikTracker,
    private authService: AuthService
    ){
      
    }
    ngAfterViewInit() {
      $(window).load(() => {
        this.configurePiwikTracker.setDocumentTitle();
      if(this.authService.authenticated){
        console.log(this.authService.currentUser.email);
        this.configurePiwikTracker.setUserId(`"${this.authService.currentUser.email}"`);
        this.usePiwikTracker.trackPageView();
      }else {console.log("Not authenticated");
      this.usePiwikTracker.trackPageView();}
    });
  }
    }
