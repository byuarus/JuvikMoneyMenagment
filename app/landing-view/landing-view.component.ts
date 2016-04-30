/// <reference path="../../typings/fbsdk.d.ts" />
import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

// import { Hero } from './hero';
// import { HeroDetailComponent } from './hero-detail.component';
// import { HeroService } from './hero.service';

@Component({
  selector: 'landing-view',
  templateUrl: 'app/landing-view/landing-view.component.html',
  styleUrls:  ['app/landing-view/landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  constructor(
        private _router: Router
    ) { }

  // getHeroes() {
  //   this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  // }

  ngOnInit() {
      FB.init({ 
        appId: '1621898574716044', 

        /* 
        Adding a Channel File improves the performance 
        of the javascript SDK, by addressing issues 
        with cross-domain communication in certain browsers. 
        */
        channelUrl: 'app/channel.html', 

        /* 
        Set if you want to check the authentication status
        at the start up of the app 
        */
        status: true, 

        /* 
        Enable cookies to allow the server to access 
        the session 
        */
        cookie: true, 

        /* Parse XFBML */
        xfbml: true 
      });
  }

  fb_login(){
	    FB.login(function(response:any) {
	        if (response.authResponse) {
	            var access_token = response.authResponse.accessToken; //get access token
	            var user_id = response.authResponse.userID; //get FB UID
				       console.log(response);
	        } else {
	            //user hit cancel button
	        }
	    }, {
	        scope: 'email'
	    });
	}
}