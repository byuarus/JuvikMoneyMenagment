// Every Angular app has at least one root component, conventionally named AppComponent, that hosts the client user experience.
// Components are the basic building blocks of Angular applications. A component controls a portion of the screen — a view — through its associated template.
System.register(['angular2/core', 'angular2/router', './landing-view/landing-view.component'], function(exports_1, context_1) {
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
    var core_1, router_1, landing_view_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (landing_view_component_1_1) {
                landing_view_component_1 = landing_view_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        //The element for this component is named my-app. Angular creates and displays an instance of our AppComponent
                        // wherever it encounters a my-app element in the host HTML
                        selector: 'my-app',
                        //A more advanced template could contain data bindings to component properties and might identify other application components
                        // which have their own templates. These templates might identify yet other components. In this way an Angular application becomes a tree of components.
                        template: "<router-outlet></router-outlet>",
                        //router will control all directives so we need to add only the router derivative here
                        directives: [router_1.ROUTER_DIRECTIVES],
                        //Services that we will use. We need to add it only one time in the app.component.ts
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Landing',
                            component: landing_view_component_1.LandingViewComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map