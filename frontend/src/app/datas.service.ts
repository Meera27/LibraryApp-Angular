import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(public http : HttpClient) { }
  getBookData(){
    return this.http.get('http://localhost:1514/books');
  }
  getAuthorData(){
    return this.http.get('http://localhost:1514/authors');
  }
  newAuthor(item:any){
    return this.http.post('http://localhost:1514/addauthor',{"author":item})
    .subscribe((data=>{
      console.log(data)}))
  }
  newBook(item:any){
    return this.http.post('http://localhost:1514/addbooks',{"book":item})
    .subscribe((data=>{
      console.log(data)}))
  }
}
