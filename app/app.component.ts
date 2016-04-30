// Every Angular app has at least one root component, conventionally named AppComponent, that hosts the client user experience.
// Components are the basic building blocks of Angular applications. A component controls a portion of the screen — a view — through its associated template.

import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { LandingViewComponent } from './landing-view/landing-view.component';

@Component({
    //The element for this component is named my-app. Angular creates and displays an instance of our AppComponent
    // wherever it encounters a my-app element in the host HTML
    selector: 'my-app',
    //A more advanced template could contain data bindings to component properties and might identify other application components
    // which have their own templates. These templates might identify yet other components. In this way an Angular application becomes a tree of components.
    template: `<router-outlet></router-outlet>`,
    //router will control all directives so we need to add only the router derivative here
    directives: [ROUTER_DIRECTIVES],
    //Services that we will use. We need to add it only one time in the app.component.ts
    providers: [
        ROUTER_PROVIDERS
    ]
})


// The @RouteConfig decorator simultaneously (a) assign a router to the component and (b) configure that router with routes.
// Routes tell the router which views to display when a user clicks a link or pastes a URL into the browser address bar.
@RouteConfig([
  {
    path: '/',
    name: 'Landing',
    component: LandingViewComponent,
    useAsDefault: true
  }
])

//We can expand this class with properties and application logic
//We export AppComponent so that we can import it elsewhere in our application
export class AppComponent { }
