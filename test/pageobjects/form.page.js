

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

   
    async login (firstname, lastname, zipcode) {
        await this.inputFirstName.setValue(username);
        await this.inputLastName.setValue(lastname);
        await this.inputZipCode.setValue(zipcode);
        await this.btnSubmit.click();
    }

   
}

export default new FormPage();
