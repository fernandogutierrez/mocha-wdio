import alertSelectors from '../../selectors/audit/alerts';
import messageCons from '../alertMessagesConstants';


class AlertMessage{
    constructor(){
        this._description = '';
    }

    set description(n_desc){
        this._description = n_desc;
    }

    get alertMessageControl(){
        return $(alertSelectors.alertMessage(this._description));
    }

    get asinAddedDesc(){
        return messageCons.ASINADDED;
    }

    asinAddedIsDisplayed(){
        this.description = this.asinAddedDesc;
        return this.alertMessageControl.isDisplayedWithin(10000);
    }
}

export default new AlertMessage();
