import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { DeleteBooksComponent } from './delete-books/delete-books.component';
import { DeleteAuthorsComponent } from './delete-authors/delete-authors.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    BookComponent,
    BooksComponent,
    AuthorComponent,
    AuthorsComponent,
    LoginComponent,
    SignupComponent,
    EditBooksComponent,
    DeleteBooksComponent,
    DeleteAuthorsComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
