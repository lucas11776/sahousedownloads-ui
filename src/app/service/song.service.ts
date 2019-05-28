import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Song } from '../models/song'

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  latest(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/latest', {}).pipe(
      retry(2)
    )
  }

  mostLiked(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/most-liked', {}).pipe(
      retry(2)
    )
  }

  mostDownloaded(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/most-downloaded', {}).pipe(
      retry(2)
    )
  }

  upload(){

  }

  update(){

  }

  delete(songId = {song_id:Number}){

  }

}
