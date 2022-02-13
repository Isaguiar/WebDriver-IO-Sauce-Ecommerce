
import Page from './page';


class HomePage extends Page {
 
    
    get firstAddButton(){
        return  $$('.btn_primary')[0];     
    }

    get secondAddButton(){
        return  $$('.btn_primary')[1];    
    }


    async firstPrice() {
       const price = await this.firstAddButton.previousElement().getText();
       return parseFloat(price.replace('$',''));
     }

    async secondPrice() {
       const price = await this.secondAddButton.previousElement().getText();
       return parseFloat(price.replace('$',''));
     }
    
    async totalPrice(){
        const firstPrice = await this.firstPrice();
        const secondPrice = await this.secondPrice();
        const total= firstPrice + secondPrice;
        return '$'+total.toFixed(2);
    }
    
     
    async addToCart(){
        await this.firstAddButton.click();
        await this.secondAddButton.click();
    }

    async firstId(){
        const id = await this.firstAddButton.getAttribute('id');
        return id;
    }

}

export default new HomePage();
