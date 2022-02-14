import Page from './page';


class ConfirmationPage extends Page {
   
    get flashAlert() {
        return $('h2');
    }
}

export default new ConfirmationPage();
