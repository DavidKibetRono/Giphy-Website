import { Component, OnInit } from '@angular/core';
import { GifServiceService } from '../gif-service.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  constructor(private gifServiceService:GifServiceService) { }
  
  ngOnInit(): void {
  }
  searchData(myValue:string){
if(myValue!==""){  
  this.gifServiceService.searchGif(myValue)

}
  }
  

}
