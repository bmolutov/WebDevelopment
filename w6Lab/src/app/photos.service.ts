import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photos} from "./models";

@Injectable({
  providedIn: 'root',
})

export class PhotosService {

  BASE_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos';

  constructor(private client: HttpClient) {
  }

  // CRUD mechanism implementation:

  getPhotos(): Observable<Photos[]> {
    return this.client.get<Photos[]>(`${this.BASE_URL}`);
  }

}
