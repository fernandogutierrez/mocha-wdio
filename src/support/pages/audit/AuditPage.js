import auditSelector from '../../selectors/audit/audit'

class AuditPage {
    get addAsin() {
        return $(auditSelector.addASIN)
    }

    clickAddAsin() {
        this.addAsin.click();
    }


    getColumn(headerName) { //e.g : ASIN
        let headers = $$("//table[@class='datatable table datatable--select-all']/thead/tr/th");
        return headers.findIndex(currEl => { return currEl === headerName });
    }

    getRows(searchCriteria) { //{ asin: 123456789, date: 11/5/2018 }

    }

    getCells(searchCriteria){

    }
}

export default new AuditPage();
