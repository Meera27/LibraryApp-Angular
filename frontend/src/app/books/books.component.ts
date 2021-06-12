import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BookModel} from './book.model';
import {DatasService} from '../datas.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:String="Books";
  imageWidth:Number = 70;
  imageMargin:Number = 3;

  bdata : BookModel[] = [];

  constructor(private dataService : DatasService,private router : Router) { }

  ngOnInit(): void {
    this.dataService.getBookData()
   .subscribe((book)=>{
      this.bdata = JSON.parse(JSON.stringify(book));
   })
  }
  DeleteBook(book: any){
    this.dataService.deleteBook(book._id.toString()).subscribe(res =>{
      this.dataService.getBookData().subscribe((data)=>{
        this.bdata=JSON.parse(JSON.stringify(data));
      })
    })
  }

  EditBook(book:any){
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['editbook']);
  }

  ReadBook(book:any){
    localStorage.setItem("readBookId", book._id.toString());
    this.router.navigate(['book']);
  }

}
