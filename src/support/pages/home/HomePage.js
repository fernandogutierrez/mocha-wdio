import Page from '../Page'
import homeSelectors from '../../selectors/home/home'

class HomePage extends Page{
    open(){
        super.navigateTo('http://qa.goja.io/fba/#/home');
        return this;
    }

    get login(){
        return $(homeSelectors.logIn);
    }

    get audit(){
        return $(homeSelectors.audit)
    }

    get myAsins(){
        return $(homeSelectors.myAsins)
    }

    clickLogin(){
        this.login.click();
    }

    clickAudit(){
        this.audit.click();
        return this;
    }

    clickMyAsins(){
        this.myAsins.click();
    }
}

export default new HomePage();
