import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Song, UploadSong, UploadSongResponse } from '../models/song'
import { HttpErrorService } from '../service/http-error.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient, private httpError: HttpErrorService) { }

  /**
   * Get 100 latest songs
   * 
   * @return {Observable<Array<Song>>}
   */
  latest(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/latest', {}).pipe(
      retry(2), catchError(this.httpError.getError)
    )
  }

  /**
   * Get 100 most liked songs
   * 
   * @return {Observable<Array<Song>>}
   */
  mostLiked(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/most-liked', {}).pipe(
      retry(2), catchError(this.httpError.getError)
    )
  }

  /**
   * Get 100 most download songs
   * 
   * @return {Observable<Array<Song>>}
   */
  mostDownloaded(): Observable<Array<Song>>{
    return this.http.post<Array<Song>>('songs/most-downloaded', {}).pipe(
      retry(2), catchError(this.httpError.getError)
    )
  }

  /**
   * Upload song to databse
   * 
   * @return {Observable<Array<Song>>}
   */
  upload(song:UploadSong):Observable<UploadSongResponse>{
    return this.http.post<UploadSongResponse>('upload/song', song).pipe(
      retry(2), catchError(this.httpError.getError)
    )
  }

  /**
   * Update song details
   * 
   * @return {Observable<Array<Song>>}
   */
  update(){

  }

  /**
   * Delete song from database
   * 
   * @return {Observable<Array<Song>>}
   */
  delete(songId = {song_id:Number}){

  }

}
