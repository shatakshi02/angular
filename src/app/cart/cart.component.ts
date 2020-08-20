import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutform;

  constructor(
  private cartservice: CartService,
  private formBuilder: FormBuilder,
  ){ 
   this.checkoutform=this.formBuilder.group({
     name: '',
     address: ''
   }

   )
  }
  ngOnInit(){ 
     this.items= this.cartservice.getItemFromCart();
  }

  onSubmmit(data){
    this.items=this.cartservice.clearCart();
    this.checkoutform.reset();
    console.warn('Your order has been submitted', data);
  }

  
  
  }

