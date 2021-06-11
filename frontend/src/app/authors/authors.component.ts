import { Component, OnInit } from '@angular/core';
import {DatasService} from '../datas.service';
import {AuthorModel} from './author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title :String = "Authors";
  imageWidth : Number = 50;
  imageMargin :Number =3;

  adata : AuthorModel[] =[];

  constructor(public authorServiceObj : DatasService) { }

  ngOnInit(): void {
    this.authorServiceObj.getAuthorData()
    .subscribe((authors)=>{
      this.adata = JSON.parse(JSON.stringify(authors));
    })
  }
}
