   
import Page from './page';


class OverviewPage extends Page {
 
    
    get btnFinish(){
        return $$('#finish')
    }


    async taxValue(){
        const price =  $('.summary_tax_label');   
    }

    async totalPrice(){
        const price =  $('.summary_total_label');    
    }
    
    async tax() {
       const price = await this.taxValue.getText();
       return parseFloat(price.replace('$',''));
     }

    async total() {
       const price = await this.totalPrice.getText();
       return parseFloat(price.replace('$',''));
     }
    
    async netPrice(){
        const first = await this.tax();
        const second = await this.total();
        const net= first + second;
        return '$'+net.toFixed(2);
    } 

    async completeOrder(){
        await this.btnFinish.click(); 
    }


}

export default new OverviewPage();