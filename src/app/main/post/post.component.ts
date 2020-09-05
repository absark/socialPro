import { Component, OnInit } from '@angular/core';
import { JoinService } from 'src/app/service/join.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  url = environment.ENDPOINT;
  user:any;
  posts:any;
  userId;
   form:FormGroup;
   selected = false;
   isLoading= false;
   submitted = false;
  constructor(
    private service:JoinService,
    private fb:FormBuilder,
    private http:HttpClient) {
      this.userId = localStorage.getItem('user');
     }

  ngOnInit(): void {
   
    this.http.get<any>(`${this.url}/api/v1/users/${this.userId}`).subscribe(res=>{
      this.user = res.user;
    },
    err=> console.log(err.error.message));
  
    this.form= this.fb.group({
      message:['',[Validators.required]],
      img:[''],
      userid:[this.userId]
    });
    this.getpost();
  }

  onFileChanged(event){
    this.selected = true;
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({img:file});
    this.form.get('img').updateValueAndValidity();
  }

  onSignup(data){
    this.submitted = true;
    this.isLoading = true;
    const userData = new FormData();
    userData.append("img",this.form.value.img);
    userData.append("message",this.form.value.message);
    userData.append("userid",this.form.value.userid);
   

  this.http.post<any>(`${this.url}/api/v1/users/posts`, userData).subscribe(res=>{
    
    this.getpost();
   },
   err=>{
     alert(err.error.message);
   })
  }

  getpost(){
    this.http.get<any>(`${this.url}/api/v1/users/posts/${this.userId}`).subscribe(res=>{
      this.isLoading = false;
      this.posts = res.posts;
    },
    err=> console.log(err.error.message));
  }
}
