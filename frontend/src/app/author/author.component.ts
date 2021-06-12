import { Component, OnInit } from '@angular/core';
import {DatasService} from '../datas.service';
import { Router } from '@angular/router';
import {AuthorModel} from '../authors/author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title:String="Books";
  author = new AuthorModel('','','','');
  constructor(private authorServiceObj : DatasService) { }

  ngOnInit(): void {
    let rauthorId = localStorage.getItem('readAuthorId');
    this.authorServiceObj.getAuthor(rauthorId).subscribe((data)=>{
      this.author = JSON.parse(JSON.stringify(data));
    })
  }

}
