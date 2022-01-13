import { Component, OnInit } from '@angular/core';
import {GifServiceService} from "../gif-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-specific-gif',
  templateUrl: './specific-gif.component.html',
  styleUrls: ['./specific-gif.component.css']
})
export class SpecificGifComponent implements OnInit {
myURL:any;
  constructor(private activatedRoute:ActivatedRoute, private gifServiceService:GifServiceService) { }

  ngOnInit(): void {
let id=this.activatedRoute.snapshot.paramMap.get('id')
    this.myURL=id
  }

}
