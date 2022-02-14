import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import HomePage from '../pageobjects/home.page';
import FormPage from '../pageobjects/form.page';


   describe('Fill in checkout', async() => {

     it(' should ckeckout form', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HomePage.addToCart();
        await FormPage.sendData('SomeoneName', 'SomeoneLastName', '2345' );
        await expect(SecurePage.flashAlert).not.toBeExisting();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
       });

    it.skip(' should not accept ckeckout form without first name', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HomePage.addToCart();
        await FormPage.sendData('', 'SomeoneLastName', '2345' );
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).not.toHaveTextContaining(' First Name is required');
       });

    it(' should not ckeckout form without last name', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HomePage.addToCart();
        await FormPage.sendData('SomeoneName', '', '2345' );
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(" Last Name is required");
        });


    it.skip(' should not ckeckout form without zip code', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HomePage.addToCart();
        await FormPage.sendData('SomeoneName', 'SomeoneLast', '' );
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('Postal Code is required');
       });

    
});

