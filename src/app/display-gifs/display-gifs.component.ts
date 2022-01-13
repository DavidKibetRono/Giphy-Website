import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GifServiceService } from '../gif-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-display-gifs',
  templateUrl: './display-gifs.component.html',
  styleUrls: ['./display-gifs.component.css']
})
export class DisplayGifsComponent implements OnInit,OnDestroy {
allDatas:any;
subsription!:Subscription;
  constructor(private gifServiceService:GifServiceService,private routers:Router) { }

  ngOnInit(): void {
    this.gifServiceService.getGif()
   this.subsription= this.gifServiceService.AllTheGifs().subscribe((dataResponse:any)=>{
this.allDatas=dataResponse
    },error=>{
      console.log(error);

    })
  }
  specificGif(id:number){

    this.routers.navigate(["/gifs",id])

  }
  ngOnDestroy(): void {
    this.subsription.unsubscribe()
  }

}
