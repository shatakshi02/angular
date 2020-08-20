import { Injectable } from '@angular/core';



@Injectable()
export class CartService {

  items=[];

  addToCart(product){
     this.items.push(product);
  }

  getItemFromCart(){
    console.log("into cart service");
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }



  constructor() { }

}