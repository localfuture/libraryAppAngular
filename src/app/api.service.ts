import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  insertBook(data){
    return this.http.post("http://localhost:3000/addBook",data);
  }

  viewBook(){
    return this.http.get("http://localhost:3000/viewBooksApi");
  }

  insertAuthor(data) {
    return this.http.post("http://localhost:3000/addAuthorApi",data);
  }

  viewAuthor() {
    return this.http.get("http://localhost:3000/showAuthors");
  }

  registerUser(data) {
    return this.http.post("http://localhost:3000/register",data);
  }

  loginUser(data) {
    return this.http.post("http://localhost:3000/login",data);
  }

  findSingleBook(data){
    return this.http.post("http://localhost:3000/singleViewBook",data);
  }

  findSingleAuthor(data){
    return this.http.post("http://localhost:3000/singleViewAuthor",data);
  }

}
