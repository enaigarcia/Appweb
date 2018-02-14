import { Component } from '@angular/core';
import { NavController,NavParams, LoadingController, Events } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //promoSliders: any[];
  products: any[];
  productRows:any;
  //promoImagesLoaded:boolean=false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private productService: ProductsProvider,
private loadingCtrl: LoadingController,
    private events: Events) {
  }
  ionViewWillEnter() {
    //this.loadPromo();
    this.loadProducts();
  }
 
  ionViewDidLeave() {
    this.events.unsubscribe('promoLoaded');
  }


  loadProducts() {
    this.productService.getProducts();
    this.events.subscribe('productsLoaded', () => {
      this.products = this.productService.products;
      this.productRows = Array.from(Array(Math.ceil(this.products.length/2)).keys())
      
    })
  }

}
