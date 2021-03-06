System.register(['angular2/core', 'angular2/router', '../services/albums.service', '../info/album.info.component', '../pipes/album.filter.pipe'], function(exports_1, context_1) {
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
    var core_1, router_1, albums_service_1, album_info_component_1, album_filter_pipe_1;
    var AlbumsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (albums_service_1_1) {
                albums_service_1 = albums_service_1_1;
            },
            function (album_info_component_1_1) {
                album_info_component_1 = album_info_component_1_1;
            },
            function (album_filter_pipe_1_1) {
                album_filter_pipe_1 = album_filter_pipe_1_1;
            }],
        execute: function() {
            AlbumsListComponent = (function () {
                function AlbumsListComponent(_router, _albumsService) {
                    this._router = _router;
                    this._albumsService = _albumsService;
                    this.albumSearchFilter = "";
                    this.albumClicked = new core_1.EventEmitter();
                }
                AlbumsListComponent.prototype.ngOnInit = function () {
                    if (this.artist) {
                        this.getAlbumsByArtist();
                    }
                    else {
                        this.getAlbums();
                    }
                };
                AlbumsListComponent.prototype.getAlbums = function () {
                    var _this = this;
                    this._albumsService.getAlbums()
                        .subscribe(function (albums) { return _this.albums = albums; }, function (error) { return _this.errorMessage = error; });
                };
                AlbumsListComponent.prototype.getAlbumsByArtist = function () {
                    var _this = this;
                    this._albumsService.getAlbumsForArtist(this.artist.artist_id)
                        .subscribe(function (albums) { return _this.albums = albums; }, function (error) { return _this.errorMessage = error; });
                };
                AlbumsListComponent.prototype.onAlbumClicked = function (album) {
                    this.albumClicked.emit(album);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AlbumsListComponent.prototype, "artist", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AlbumsListComponent.prototype, "filter", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], AlbumsListComponent.prototype, "albumClicked", void 0);
                AlbumsListComponent = __decorate([
                    core_1.Component({
                        selector: 'albums-list',
                        templateUrl: 'app/albums/list/albums.list.component.html',
                        pipes: [album_filter_pipe_1.AlbumFilterPipe],
                        directives: [album_info_component_1.AlbumInfoComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, albums_service_1.AlbumsService])
                ], AlbumsListComponent);
                return AlbumsListComponent;
            }());
            exports_1("AlbumsListComponent", AlbumsListComponent);
        }
    }
});
//# sourceMappingURL=albums.list.component.js.map