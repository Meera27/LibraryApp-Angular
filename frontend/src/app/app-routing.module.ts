import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { DeleteAuthorsComponent } from './delete-authors/delete-authors.component';
import { EditAuthorsComponent } from './edit-authors/edit-authors.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'author',component:AuthorComponent},
  {path:'edit-authors',component:EditAuthorsComponent},
  {path:'delete-authors',component:DeleteAuthorsComponent},
  {path:'books',component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
