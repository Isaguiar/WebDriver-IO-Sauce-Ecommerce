

import Page from './page';


class SecurePage extends Page {
   
    get flashAlert() {
        return $('h3');
    }
}

export default new SecurePage();
