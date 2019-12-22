import { Component } from '@angular/core';

import * as books from "books.json";
import { BuynowPage } from '../buynow/buynow.page';
import { RouterModule, Routes, Router } from '@angular/router';

import { setState, getState } from  'ts-state';


const booksAll= books.books ;
const uniqueAuthorNames = [...new Set(booksAll.map(book => book.author))]
const uniqueGenreNames = [...new Set(booksAll.map(book => book.genre))]

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
  
})


export class HomePage {
  
  value = booksAll;
  uniqueAuthorNames =uniqueAuthorNames;
  uniqueGenreNames =uniqueGenreNames;
  booksFiltered=booksAll;
  noOfBooksFiltered=this.value.length;
  bookChosen=null;

 
 

  constructor( private router:Router) {
    
  }
  public authorNameSelected:string;
  public uniqueNewGenreNames: string[];
 
  onAuthorNameChange(authorName:string) 
  {
       this.uniqueGenreNames=[];
       authorName=authorName.trim();
       this.authorNameSelected=authorName;
       this.value.forEach(element => {
      
       if (authorName===element.author) 
       {
       
        this.uniqueGenreNames.push(element.genre);
       }
     });
     this.uniqueGenreNames= [...new Set(this.uniqueGenreNames.map(book => book))]
     
   
   }

   onSearchBooks(authorName:string,genreName:string="")
   {
    authorName=authorName.trim();
    if(genreName!="")
    genreName=genreName.trim();

    this.booksFiltered=[];
    if(genreName!="")
    {
    this.value.forEach(element => {
      
      if (authorName===element.author && genreName ===element.genre) 
      {
      
       this.booksFiltered.push(element);
      }
    });
    this.noOfBooksFiltered=this.booksFiltered.length;
    console.log(this.booksFiltered);
   }
  else
  {
    this.value.forEach(element => {
      
      if (authorName===element.author) 
      {
      
       this.booksFiltered.push(element);
      }
    });
    this.noOfBooksFiltered=this.booksFiltered.length;
    console.log(this.booksFiltered);
  }
  
  
  }

   viewMore(bookid:string)
   {
    
    bookid=bookid.trim(); 
    this.value.forEach(element => {
      if(bookid===element.id)
      {
        this.bookChosen=element;
      }
   
    });
    //console.log(this.bookChosen);
    this.router.navigate(['/buynow']);
    
    setState({book: this.bookChosen,purchased:'no'});
    
    //console.log(getState());
   }
 
}


