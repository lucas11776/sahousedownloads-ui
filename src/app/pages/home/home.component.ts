import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }        from 'rxjs';

import { Song } from '../../models/song';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  limitLatestSongs = 2;

  latestSongs    = new Observable<Array<Song>>();
  mostLikedSongs = new Observable<Array<Song>>();

  constructor(private songServ: SongService, private router: Router) {
    // navbar search control Observable
    
  }

  ngOnInit() {
    
    // get latest songs
    this.latestSongs = this.songServ.latest();


    // get most liked songs
    this.mostLikedSongs = this.songServ.mostLiked();

  }

}
