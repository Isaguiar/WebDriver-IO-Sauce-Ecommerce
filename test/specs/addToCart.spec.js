import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import HomePage from '../pageobjects/home.page';


 
describe('Adding two items to cart', () => {

     it.skip(' "My cart" should have two items', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(SecurePage.flashAlert).not.toBeExisting();
        await HomePage.addToCart();
        await expect($('.shopping_cart_badge')).toHaveText('2');
           
       });
});

