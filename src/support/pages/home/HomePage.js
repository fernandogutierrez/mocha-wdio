import Page from '../Page'
import homeSelectors from '../../selectors/home/home'

class HomePage extends Page{
    open(){
        super.navigateTo('http://qa.goja.io/fba/#/home');
        return this;
    }

    static get login(){
        return $(homeSelectors.logIn);
    }

    static get audit(){
        return $(homeSelectors.audit)
    }

    clickLogin(){
        HomePage.login.click();
    }

    clickAudit(){
        HomePage.audit.click()
    }
}

export default new HomePage();
