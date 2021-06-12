import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
import { AddauthorsComponent } from './addauthors/addauthors.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { EditAuthorsComponent } from './edit-authors/edit-authors.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { BookComponent } from './book/book.component';


const routes: Routes = [
  {path:'',
  component:HomeComponent
},
  {path:'login',
  component:LoginComponent
},
  {path:'signup',
  component:SignupComponent
},
  {path:'authors',
  canActivate : [AuthGuard],
  component:AuthorsComponent
},
{
  path:'editbook',
  canActivate : [AuthGuard],
  component:EditBooksComponent
  },
  {path:'author',
  canActivate : [AuthGuard],
  component:AuthorComponent
},
  {path:'editauthor',
  canActivate : [AuthGuard],
  component:EditAuthorsComponent
},
//   {path:'delete-authors',
//   component:DeleteAuthorsComponent},
// 
{
  path:'books',
  canActivate : [AuthGuard],
  component:BooksComponent
},
{
  path:'book',
  component:BookComponent
},

  {path:'addbooks',
  canActivate : [AuthGuard],
  component:AddbooksComponent
},
  {path:'addauthor',
  canActivate : [AuthGuard],
  component:AddauthorsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
