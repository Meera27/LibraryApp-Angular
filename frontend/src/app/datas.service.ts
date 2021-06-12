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
  getBook(id:any){
    return this.http.get("http://localhost:1514/book/"+id);
  }
  editBook(book:any)
  {
    return this.http.put("http://localhost:1514/editbook",book)
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any){
    return this.http.delete("http://localhost:1514/deletebook/"+id);
  }
  getAuthor(id:any){
    return this.http.get("http://localhost:1514/author/"+id);
  }
  getAuthors(){
    return this.http.get("http://localhost:1514/authors");
  }
  editAuthor(author:any)
  {
    return this.http.put("http://localhost:1514/editauthor",author)
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(author:any){
    return this.http.delete("http://localhost:1514/deleteauthor/"+author);
  }
  // return this.http.get(`api/leagues/${id}`).map(res => res.json());
}
