import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import FormPage from '../pageobjects/form.page';
import OverviewPage from '../pageobjects/overview.page';
import ConfirmationPage from '../pageobjects/confirmation.page';
import CompletePage from '../pageobjects/complete.page';

 
describe('Check overview form', () => {

    it.skip(' sum of total price should be correct', async () => {
        

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        const sum = await HomePage.totalPrice();
        await HomePage.addToCart();
        await FormPage.sendData('SomeoneName', 'SomeoneLastName', '2345' );
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        const net= await OverviewPage.netPrice();
        await expect(sum).toBe(net);
        
       });

    it('complete order', async () =>{
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HomePage.addToCart();
        await FormPage.sendData('SomeoneName', 'SomeoneLastName', '2345' );
        await CompletePage.completeOrder();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await expect(ConfirmationPage.flashAlert).toHaveText('THANK YOU FOR YOUR ORDER');
        });
});

