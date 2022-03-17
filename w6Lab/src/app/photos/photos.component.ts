import { Component, OnInit } from '@angular/core';
import {Photos} from "../models";
import {PhotosService} from "../photos.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photos[] = [];
  loaded: boolean = false;

  currentPhotoID = 1;

  constructor(private route: ActivatedRoute,
              private photosService: PhotosService,
              private location: Location) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.route.paramMap.subscribe((params) => {

      // const albumID = +params.get('id')!;
      // console.log(albumID);

      this.loaded = false;
      this.photosService.getPhotos().subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      })
    })
  }

  goBack() {
    this.location.back();
  }

  decID() {
    if (this.currentPhotoID >= 2) {
      this.currentPhotoID = (this.currentPhotoID - 1) % 51;
    }
  }

  incID() {
    if (this.currentPhotoID <= 49) {
      this.currentPhotoID = (this.currentPhotoID + 1) % 51;
    }
  }

}
