

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     * await $('.row .entry:nth-child(2)').$('button*=Add').click()
     */
    get elementItem1() {
        return $('.inventory_container .inventory_list .inventory_item .inventory_item_name:nth-child(1)');
    }

    get elementItem2() {
        return $('.inventory_container .inventory_list .inventory_item .inventory_item_name:nth-child(2)');
    }
    

    get btnAdd(){
        return $('button*=Add');
    }

   /* get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#login-button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addToChart (username, password) {
        await this.elementItem1.btnAdd.click();
        await this.elementItem1.btnAdd.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
   open() {
        return super.open('inventory.html');
    }
}

export default new LoginPage();
