import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DatasService} from '../datas.service';
import {AuthorModel} from './author.model';
import { AuthService} from '../auth.service';

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

  constructor(public authorService : DatasService,public router :Router,public _auth: AuthService) { }

  ngOnInit(): void {
    this.authorService.getAuthorData()
    .subscribe((authors)=>{
      this.adata = JSON.parse(JSON.stringify(authors));
    })
  }
  DeleteAuthor(author: any){
    this.authorService.deleteAuthor(author._id.toString()).subscribe(res =>{
      this.authorService.getAuthors().subscribe((data)=>{
        this.adata=JSON.parse(JSON.stringify(data));
      })
    })
  }

  EditAuthor(author:any){
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['editauthor']);
  }

  ReadAuthor(author:any){
    localStorage.setItem("readAuthorId", author._id.toString());
    this.router.navigate(['author']);
  }
}
