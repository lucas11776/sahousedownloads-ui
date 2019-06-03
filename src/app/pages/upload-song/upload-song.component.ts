import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';

import { UploadSong, UploadSongResponse } from '../../models/song';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-upload-song',
  templateUrl: './upload-song.component.html',
  styleUrls: ['./upload-song.component.css']
})
export class UploadSongComponent implements OnInit {

  uploadSongForm:FormGroup;
  response: UploadSongResponse;
  error:string;

  constructor(private formBuilder: FormBuilder, private songServ: SongService) { }

  ngOnInit() {
    this.uploadSongForm = this.formBuilder.group({
      picture:     ['', [Validators.required]],
      audio:       ['', [Validators.required]],
      title:       ['', [Validators.required]],
      album:       ['', [Validators.required]],
      discription: ['', [Validators.required]]
    });
  }

  pictureValidation(control:FormControl){
    return null;
  }

  audioValidation(control:FormControl){
    return null;
  }

  upload(){
    this.songServ.upload(this.uploadSongForm.value).subscribe(
      response => this.response = response,
      error    => this.error    = error
    ).unsubscribe();
  }

}
