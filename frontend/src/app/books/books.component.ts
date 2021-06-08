import { Component, OnInit } from '@angular/core';
import {BookModel} from './book.model';
import {DatasService} from '../datas.service';

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

  constructor(public dataServiceObj : DatasService) { }

  ngOnInit(): void {
    this.dataServiceObj.getBookData()
   .subscribe((book)=>{
      this.bdata = JSON.parse(JSON.stringify(book));
   })
  }

}
