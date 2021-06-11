import { Component, OnInit } from '@angular/core';
import { BookModel } from '../books/book.model';
import { DatasService } from '../datas.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {

  constructor(private bookServiceObj: DatasService, private _route:Router) { }
  bookItem = new BookModel('','','','','');

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookServiceObj.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  EditBook(){    
    this.bookServiceObj.editBook(this.bookItem);   
    alert("Success");
    this._route.navigate(['books']);
  }

}
