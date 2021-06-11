import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// import {FormBuider} from '@angular/forms'
import{ AuthService} from './auth.service';
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
import { EditAuthorsComponent } from './edit-authors/edit-authors.component';

import { DeleteBooksComponent } from './delete-books/delete-books.component';
import { DeleteAuthorsComponent } from './delete-authors/delete-authors.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AddauthorsComponent } from './addauthors/addauthors.component';
import { DatasService } from './datas.service';
import {TokenInterceptorService} from'./token-interceptor.service';
import { from } from 'rxjs';
import { importType } from '@angular/compiler/src/output/output_ast';


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
    EditAuthorsComponent,
    DeleteBooksComponent,
    DeleteAuthorsComponent,
    HeaderComponent,
    AddbooksComponent,
    AddauthorsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // FormBuilder,
    ReactiveFormsModule
  ],
  
  providers: [DatasService,AuthService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
