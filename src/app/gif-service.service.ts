import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifServiceService {
myGifs=new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }

  getGif(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=50`)
.subscribe((dataresponse:any)=>{
this.myGifs.next(dataresponse.data)
  console.log("MyData",dataresponse)
})
  }
  searchGif(mySearchTerm:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${mySearchTerm}&api_key=${environment.giphyApiKey}&limit=50`)

    .subscribe((dataresponse:any)=>{
      this.myGifs.next(dataresponse.data)

      })
  }

  AllTheGifs(){
    return this.myGifs.asObservable();
  }

}
