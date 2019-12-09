import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  

  
  ngOnInit() {
  this.jquery_code();
  }


  jquery_code(){
    $(document).ready(function(){
      $('.parallax').parallax();
      $('.carousel').carousel();
      $('.modal').modal();
      $('.sidenav').sidenav();
    });
  }
}
