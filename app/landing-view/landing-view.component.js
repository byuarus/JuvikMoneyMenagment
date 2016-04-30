System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var LandingViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // import { Hero } from './hero';
            // import { HeroDetailComponent } from './hero-detail.component';
            // import { HeroService } from './hero.service';
            LandingViewComponent = (function () {
                function LandingViewComponent(_router) {
                    this._router = _router;
                }
                // getHeroes() {
                //   this._heroService.getHeroes().then(heroes => this.heroes = heroes);
                // }
                LandingViewComponent.prototype.ngOnInit = function () {
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
                };
                LandingViewComponent.prototype.fb_login = function () {
                    FB.login(function (response) {
                        if (response.authResponse) {
                            var access_token = response.authResponse.accessToken; //get access token
                            var user_id = response.authResponse.userID; //get FB UID
                            console.log(response);
                        }
                        else {
                        }
                    }, {
                        scope: 'email'
                    });
                };
                LandingViewComponent = __decorate([
                    core_1.Component({
                        selector: 'landing-view',
                        templateUrl: 'app/landing-view/landing-view.component.html',
                        styleUrls: ['app/landing-view/landing-view.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], LandingViewComponent);
                return LandingViewComponent;
            }());
            exports_1("LandingViewComponent", LandingViewComponent);
        }
    }
});
//# sourceMappingURL=landing-view.component.js.map