   
import Page from './page';


class OverviewPage extends Page {
 
    

    get taxValue(){
        // eslint-disable-next-line prettier/prettier
        $('.summary_tax_label');    
;   
     }

    get totalPrice(){
        $('.summary_total_label');    
    }
    
    async tax() {
        console.log(this.taxValue, 'tax');
       let price = await this.taxValue;
       price = await price.getText();
       return parseFloat(price.replace('Tax: $',''));
     }

    async total() {
       const price = await this.totalPrice.getText();
       return parseFloat(price.replace('Item total: $',''));
     }
    
    async netPrice(){
        const first = await this.tax();
        const second = await this.total();
        const net= second - first;
        return '$'+net.toFixed(2);
    } 


}

export default new OverviewPage();