System.register(['angular2/core', 'angular2/router', 'rxjs/Rx', 'angular2/http', './home/home.component', './albums/index/albums.component', './artists/index/artists.component', './albums/services/albums.service', './artists/services/artists.service', './albums/details/album.details.component', './artists/details/artist.details.component'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, home_component_1, albums_component_1, artists_component_1, albums_service_1, artists_service_1, album_details_component_1, artist_details_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (albums_component_1_1) {
                albums_component_1 = albums_component_1_1;
            },
            function (artists_component_1_1) {
                artists_component_1 = artists_component_1_1;
            },
            function (albums_service_1_1) {
                albums_service_1 = albums_service_1_1;
            },
            function (artists_service_1_1) {
                artists_service_1 = artists_service_1_1;
            },
            function (album_details_component_1_1) {
                album_details_component_1 = album_details_component_1_1;
            },
            function (artist_details_component_1_1) {
                artist_details_component_1 = artist_details_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.pageTitle = function () {
                    return "Music Store";
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                            albums_service_1.AlbumsService,
                            artists_service_1.ArtistsService]
                    }),
                    router_1.RouteConfig([
                        { path: "/home", name: "Home", component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: "/artists", name: "Artists", component: artists_component_1.ArtistsComponent },
                        { path: "/arists/:id", name: "ArtistDetails", component: artist_details_component_1.ArtistDetailsComponent },
                        { path: "/albums", name: "Albums", component: albums_component_1.AlbumsComponent },
                        { path: "/albums/:id", name: "AlbumDetails", component: album_details_component_1.AlbumDetailsComponent }
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