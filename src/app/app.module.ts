import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { ViewAuthorComponent } from './view-author/view-author.component';

const appRoutes: Routes = [
  {path:'',component: AddBookComponent},
  {path:'viewBook',component: ViewBookComponent},
  {path:'addAuthor',component: AddAuthorComponent},
  {path:'viewAuthor',component: ViewAuthorComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddBookComponent,
    ViewBookComponent,
    AddAuthorComponent,
    ViewAuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
