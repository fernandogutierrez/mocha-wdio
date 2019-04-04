import alertSelectors from '../../selectors/audit/alerts';
import { ASIN_ADDED } from '../audit/audit_const';


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

    asinAddedIsDisplayed(){
        this.description = ASIN_ADDED;
        return this.alertMessageControl.isDisplayedWithin(10000);
    }
}

export default new AlertMessage();
