import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Observable }        from 'rxjs';

import { Song } from '../../models/song';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterTerm:string;

  latestSongLimit:number;
  LikedSongLimit:number;

  latestSongs    = new Observable<Array<Song>>();
  mostLikedSongs = new Observable<Array<Song>>();

  constructor(private songServ: SongService, private router: Router) {
    this.router.events.subscribe((event:RouterEvent) => {
      console.log(event);
    })
  }

  ngOnInit() {
    this.latestSongs = this.songServ.latest();
    this.mostLikedSongs = this.songServ.mostLiked();
  }

}
