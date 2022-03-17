import { Component, OnInit } from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: Album | undefined;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService,
              private location: Location) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  updateAlbum() {
    this.loaded = false;
    this.albumsService.updateAlbum(this.album!).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    })
  }

  goBack() {
    this.location.back();
  }

}
