import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  insertBook(data){
    return this.http.post("https://libraryapiangular.herokuapp.com/addBook",data);
  }

  viewBook(){
    return this.http.get("https://libraryapiangular.herokuapp.com/viewBooksApi");
  }

  insertAuthor(data) {
    return this.http.post("https://libraryapiangular.herokuapp.com/addAuthorApi",data);
  }

  viewAuthor() {
    return this.http.get("https://libraryapiangular.herokuapp.com/showAuthors");
  }

  registerUser(data) {
    return this.http.post("https://libraryapiangular.herokuapp.com/register",data);
  }

  loginUser(data) {
    return this.http.post("https://libraryapiangular.herokuapp.com/login",data);
  }

  findSingleBook(data){
    return this.http.post("https://libraryapiangular.herokuapp.com/singleViewBook",data);
  }

  findSingleAuthor(data){
    return this.http.post("https://libraryapiangular.herokuapp.com/singleViewAuthor",data);
  }

}
