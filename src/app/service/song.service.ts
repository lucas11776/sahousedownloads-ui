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

  /**
   * Get 100 latest songs
   * 
   * @return Observable
   */
  latest(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/latest', {}).pipe(
      retry(2)
    )
  }

  /**
   * Get 100 most liked songs
   * 
   * @return Observable
   */
  mostLiked(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/most-liked', {}).pipe(
      retry(2)
    )
  }

  /**
   * Get 100 most download songs
   * 
   * @return Observable
   */
  mostDownloaded(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/most-downloaded', {}).pipe(
      retry(2)
    )
  }

  /**
   * Upload song to databse
   * 
   * @return Observable
   */
  upload(){

  }

  /**
   * Update song details
   * 
   * @return Observable
   */
  update(){

  }

  /**
   * Delete song from database
   * 
   * @return Observable
   */
  delete(songId = {song_id:Number}){

  }

}
