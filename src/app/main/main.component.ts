import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls:['./main.component.scss']
})
export class MainComponent implements OnInit {

  isLogin =null ;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.isLogin =localStorage.getItem('user');
    if(this.isLogin !==null){
         this.router.navigate(['/','main','post']);
    }else{
      this.router.navigate(['/','main','join']);
    }
    $('.example-container').ready(function(){
      $(".menu").click(function(){
        $("aside ").toggleClass("toggle");
      });
     
      $("mat-list-item").click(function(){
        $("aside").removeClass("toggle");
      });
      $(".main-content").click(function(){
        $("aside").removeClass("toggle");
      });
    });
   }

   onLogout(){
    localStorage.removeItem("user");
    this.isLogin = null;
    this.router.navigate(['/','main','join']);
   }
}
