import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import firebase from 'firebase';


@Injectable()
export class ProductsProvider {
  promoRef = firebase.database().ref("promotions");
  promos: Array<any> = [];
 
  productRef = firebase.database().ref("products");
  products:Array<any> =[];

  constructor(public events: Events) { }


  getPromoSlider() {
    this.promoRef.once('value', (snap) => {
      this.promos = [];
      if (snap.val()) {
        var tempPromo = snap.val();
        for (var key in tempPromo) {
          let singlePromo = {
            id: key,
            name: tempPromo[key].thumb
          };

          this.promos.push(singlePromo);
        }
      }
      this.events.publish('promoLoaded');
    });
  }

  getProducts() {
    this.productRef.once('value', (snap) => {
      this.products = [];
      if (snap.val()) {
        var tempProducts = snap.val();
        for (var key in tempProducts) {
          let singleProduct = {
            id:key,
            category_id: tempProducts[key].category_id,
            name: tempProducts[key].name,
            images:tempProducts[key].images,
            price:tempProducts[key].price,
            rating:tempProducts[key].rating,
            sale_price:tempProducts[key].sale_price,
            short_description:tempProducts[key].short_description,
            thumb:tempProducts[key].thumb
          };
 
          this.products.push(singleProduct);
        }
      }
      this.events.publish('productsLoaded');
    });
  }


}

