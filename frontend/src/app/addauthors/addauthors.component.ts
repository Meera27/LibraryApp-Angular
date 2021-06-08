import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-addauthors',
  templateUrl: './addauthors.component.html',
  styleUrls: ['./addauthors.component.css']
})
export class AddauthorsComponent implements OnInit {
title:String = "Add Authors";
  constructor(private authorService : DatasService,private router : Router) { }
  authordetails =  new AuthorModel('','','','');



  ngOnInit(): void {
  }
  addAuthor()
  {
    this.authorService.newAuthor(this.authordetails);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/authors']);
  }
}
