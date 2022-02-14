

import Page from './page';


class FormPage extends Page {
    
    get inputFirstName() {
        return $('#first-name');
    }

    get inputLastName() {
        return $('#last-name');
    }

    get inputZipCode() {
        return $('#postal-code');
    }

    get btnSubmit() {
        return $('#continue');
    }

    get btnCheckout(){
        return $('#checkout');
    }

   
    async sendData (firstname, lastname, zipcode) {
        await this.btnCheckout.click();
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputZipCode.setValue(zipcode);
        await this.btnSubmit.click();

    }

   
}

export default new FormPage();
