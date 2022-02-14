
import Page from './page';


class CompletePage extends Page {
 
    
    get btnFinish(){
        return $('#finish')
    }

    async completeOrder(){
        await this.btnFinish.click(); 
    }


}

export default new CompletePage();