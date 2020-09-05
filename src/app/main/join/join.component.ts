import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JoinService } from 'src/app/service/join.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  url = environment.ENDPOINT;
  signup:FormGroup;
  submitted = false;
  selectedImg:string;
  constructor(
    private formBuilder: FormBuilder,
    private http:HttpClient,
    private service:JoinService,
    private router:Router) { }

  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      email:['',[Validators.email,Validators.required]],
      name:['',[Validators.required, Validators.minLength(3)]],
      profile:['']
    }
    );
  }



  onFileChanged(event:any){
    const file = (event.target as HTMLInputElement).files[0];
    this.signup.patchValue({profile:file});
    this.signup.get('profile').updateValueAndValidity();
}
onSignup(signup){
  console.log(this.signup.value.profile);
  this.submitted = true;
  const userData = new FormData();
  userData.append("name",this.signup.value.name);
  userData.append("email",this.signup.value.email);
  userData.append("profile",this.signup.value.profile);
  if (this.signup.invalid) {
    return;
}
 this.http.post<any>(`${this.url}/api/v1/users/join`, userData).subscribe(res=>{
  localStorage.setItem("user", res.user._id);
  this.router.navigate(['/','main','profile'])
 },
 err=>{
   alert(err.error.message);
 })
}
}