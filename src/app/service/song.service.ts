import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Song } from '../models/song'
import { HttpErrorService } from '../service/http-error.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient, private httpError: HttpErrorService) { }

  /**
   * Get 100 latest songs
   * 
   * @return Observable
   */
  latest(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/latest', {}).pipe(
      retry(2),
      catchError(this.httpError.error)
    )
  }

  /**
   * Get 100 most liked songs
   * 
   * @return Observable
   */
  mostLiked(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/most-liked', {}).pipe(
      retry(2),
      catchError(this.httpError.error)
    )
  }

  /**
   * Get 100 most download songs
   * 
   * @return Observable
   */
  mostDownloaded(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/most-downloaded', {}).pipe(
      retry(2),
      catchError(this.httpError.error)
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
