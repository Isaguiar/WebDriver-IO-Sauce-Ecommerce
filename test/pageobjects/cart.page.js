   
import Page from './page';


class CartPage extends Page {
 
    
    async firstItemPrice(){
        const price =  $$('inventory_item_price')[0].getText();    
    }

    get secondItemPrice(){
        const price =  $$('inventory_item_price')[1].getText();    
    }

    async firstPrice() {
       return parseFloat(this.firstItemPrice.replace('$',''));
     }

    async secondPrice() {
       return parseFloat(this.secondItemPrice.replace('$',''));
     }
    
    async totalPrice(){
        const firstPrice = await this.firstPrice();
        const secondPrice = await this.secondPrice();
        const total= firstPrice + secondPrice;
        return '$'+total.toFixed(2);
    }
    
     
  

}

export default new CartPage();
