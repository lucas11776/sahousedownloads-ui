import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';

import { UploadBlogResponse } from '../../models/blog';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-upload-blog',
  templateUrl: './upload-blog.component.html',
  styleUrls: ['./upload-blog.component.css']
})
export class UploadBlogComponent implements OnInit {

  uploadBlogForm:FormGroup;
  response:UploadBlogResponse;
  error:string;

  constructor(private formBuilder: FormBuilder, private blogServ: BlogService) { }

  ngOnInit() {
    this.uploadBlogForm = this.formBuilder.group({
      'picture':     ['', [ Validators.required ]],
      'title':       ['', [ Validators.required ]],
      'tag':         ['', [ Validators.required ]],
      'text':        ['', [ Validators.required ]],
      'description': ['', [  Validators.required ]]
    });
  }

  pictureValidation(control:FormControl){
    return null;
  }

  tagAsyncValidation(){
    return false;
  }

  upload(){
    this.blogServ.upload(this.uploadBlogForm.value).subscribe(
      response => this.response = response,
      error    => this.error    = error
    )
  }

}
