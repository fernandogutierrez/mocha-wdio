import loginSelectors from '../../selectors/login/login';
import Page from '../Page'

class LoginPage extends Page{
    get email(){
        return $(loginSelectors.email);
    }

    get password(){
        return $(loginSelectors.password);
    }

    get login(){
        return $(loginSelectors.logIn);
    }

    setEmail(nEmail){
        this.email.setValue(nEmail);
    }

    setPassword(nPassword){
        this.password.setValue(nPassword);
    }

    clickSubmit(){
        this.login.click();
    }

    loginWithCredentials(userEmail, password){
        this.setEmail(userEmail);
        this.setPassword(password);
        this.clickSubmit();
    }
}

export default new LoginPage();
