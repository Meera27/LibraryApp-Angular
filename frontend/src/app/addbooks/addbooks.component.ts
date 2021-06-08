import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import {BookModel} from '../books/book.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  title : String ="Add Books";


  constructor(private dataService : DatasService,private router :Router) { }
  bookdetails = new BookModel('','','','','');
  ngOnInit(): void {
  }
  addBook(){
    this.dataService.newBook(this.bookdetails);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/books']);
  }

}
