import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CartService {

  items=[];
  
  constructor(
    private http: HttpClient
  ) { }


  addToCart(product){
     this.items.push(product);
    // console.log(this.items);
  }

  getItemFromCart(){
    //console.log("into cart service");
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }

  getShipping(){
    console.log("shipping");
    return this.http.get('/assets/shipping.json');
  }

 
}