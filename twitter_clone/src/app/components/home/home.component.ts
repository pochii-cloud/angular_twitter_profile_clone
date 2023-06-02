import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterService } from 'src/app/services/twitter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  user!: any;
  userposts!:any;
  constructor(private twitterservice:TwitterService ){}

  ngOnInit():void{
    this.user=this.twitterservice.getuser().subscribe((response:any)=>{
      this.user=response
      console.log(this.user)
    })

    this.userposts=this.twitterservice.getuserposts().subscribe((response:any)=>{
      this.userposts=response.slice(1,5)
      console.log(this.userposts)
    })
  
  }
   


}
