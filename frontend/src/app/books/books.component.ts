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

  constructor(private dataServiceObj : DatasService,private router : Router) { }

  ngOnInit(): void {
    this.dataServiceObj.getBookData()
   .subscribe((book)=>{
      this.bdata = JSON.parse(JSON.stringify(book));
   })
  }

}
