import { Component, OnInit } from '@angular/core';
import {BookModel} from '../books/book.model';
import {DatasService} from '../datas.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title:String = "Book";

  sbook:BookModel[]=[];
  

  constructor(private bookServiceObj : DatasService) { }

  ngOnInit(): void {
  
  }

}
