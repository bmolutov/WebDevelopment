import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Album} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class AlbumsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) {
  }

  // CRUD mechanism implementation:

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.client.delete<Album>(`${this.BASE_URL}/albums/${id}`);
  }

}
