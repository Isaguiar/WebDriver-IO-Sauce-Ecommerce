import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('Login ', () => {
    it.skip('input should be empty', async () =>{
        await LoginPage.open();
        await expect(LoginPage.inputUserName).toHaveValue('');
        await expect(LoginPage.inputPassword).toHaveValue('');
        await expect(LoginPage.btnSubmit).toBeClickable();
    });

    it.skip('should not login with empty username', async () => {
        await LoginPage.open();
        await LoginPage.login('', 'testing');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Epic sadface: Username is required');
    });

     it.skip('should not login with empty password', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', '');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Epic sadface: Password is required');
    });

    it.skip('should not login with invalid username', async () => {
        await LoginPage.open();
        await LoginPage.login('standarduser', 'secret_sauce');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Epic sadface: Username and password do not match any user in this service');
    });

    it.skip('should not login with invalid password', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Epic sadface: Username and password do not match any user in this service');
    });

    it.skip('should not login with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard', 'secret');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Epic sadface: Username and password do not match any user in this service');
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(SecurePage.flashAlert).not.toBeExisting();
        await $('#add-to-cart-sauce-labs-bolt-t-shirt').click();
       // const ver = await $$('.inventory_item_name');
       // console.log(await ver[0].getText(), 'ver');
       // console.log(Object.values(ver),  ver);
        const refs = await $$('.btn_primary');
        console.log( await refs[0].getText());
        //console.log(await refs[0].selectByVisibleText('Add to cart'))
        const refId= await refs[0].getAttribute('id');
       console.log('ref', refId, typeof refId);
       //console.log('str', refId.replace('add-to-cart', ''))
       const price = await refs[0].previousElement().getText();
       console.log(parseFloat(price.replace('$','')));

    //await $('.row .entry:nth-child(2)').$('button*=Add').click()
        await $('.shopping_cart_badge').click();
        await expect($('.shopping_cart_badge')).toHaveText('1');
        await expect (browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect ($('.header_secondary_container .title')).toHaveText('YOUR CART');
        await $('#continue-shopping').click();

    });
});
//<a class="shopping_cart_link"><span class="shopping_cart_badge">2</span></a>

//#cart_contents_container > div > div.cart_list
//<span class="shopping_cart_badge">2</span>
//<button class="btn btn_primary btn_small btn_inventory" data-test="add-to-cart-sauce-labs-bolt-t-shirt" id="add-to-cart-sauce-labs-bolt-t-shirt" name="add-to-cart-sauce-labs-bolt-t-shirt">Add to cart</button>
//#add-to-cart-sauce-labs-fleece-jacket