import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('Login ', () => {
    it('input should be empty', async () =>{
        await LoginPage.open();
        await expect(LoginPage.inputUserName).toHaveValue('');
        await expect(LoginPage.inputPassword).toHaveValue('');
        await expect(LoginPage.btnSubmit).toBeClickable();
    });

    it('should not login with empty username', async () => {
        await LoginPage.open();
        await LoginPage.login('', 'testing');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Epic sadface: Username is required');
    });

     it('should not login with empty password', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', '');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Epic sadface: Password is required');
    });

    it('should not login with invalid username', async () => {
        await LoginPage.open();
        await LoginPage.login('standarduser', 'secret_sauce');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Epic sadface: Username and password do not match any user in this service');
    });

    it('should not login with invalid password', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Epic sadface: Username and password do not match any user in this service');
    });

    it('should not login with invalid credentials', async () => {
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
       
    });
});
