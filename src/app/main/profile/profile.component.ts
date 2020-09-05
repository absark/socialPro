import { Component, OnInit } from '@angular/core';
import { JoinService } from 'src/app/service/join.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  url= environment.ENDPOINT;
  userId:any;
 user:any;
  constructor(private service:JoinService,private http:HttpClient) { 
  this.userId = localStorage.getItem('user');
  }

  ngOnInit(): void {
    this.http.get<any>(`${this.url}/api/v1/users/${this.userId}`).subscribe(res=>{
      this.user = res.user;
      console.log(res.user);
    },
    err=> console.log(err.error.message));
  }

}
