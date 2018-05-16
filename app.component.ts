import { Component,OnInit } from '@angular/core';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'My app';
  data:UserResponse;

  constructor(private http: HttpClient) {
    
  }
   
  // Http Service call to Rest API to 
  ngOnInit(): void {

   this.http.get<UserResponse>('https://5ad8d1c9dc1baa0014c60c51.mockapi.io/api/br/v1/magic/12').subscribe(data => {
    console.log('Details :',data );
    this.data=data;
   }),
   (err : HttpErrorResponse) => {
     if(err.error instanceof Error) {
      console.log(' Client Error Occurred...');
     }else {
      console.log(' Server side  Occurred...');
     }
    
   }
  }
  
}
interface UserResponse {
  id:number,
  createdAt:string,
  name:string,
  imageUrl:string
}