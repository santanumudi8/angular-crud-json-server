import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http : HttpClient) { }
  //Now Add Get, Post, Put and Delete methods here
  //Add Property using Post Method
  addListing(data:any){
    return this.http.post('http://localhost:3000/properties', data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get all property using Get method
  getAllProp(){
    return this.http.get('http://localhost:3000/properties').pipe(map((res:any)=>{
      return res;
    }))
  }

  //Update property using Put method
  updateProp(data:any, id:number){
    return this.http.put('http://localhost:3000/properties/' + id, data).pipe(map
    ((res:any)=>{
      return res;
    }))
  }

  //delete property using delete method
  deleteProp(id:number){
    return this.http.delete('http://localhost:3000/properties/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}
