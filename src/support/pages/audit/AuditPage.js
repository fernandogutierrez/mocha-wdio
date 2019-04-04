import auditSelector from '../../selectors/audit/audit';
import { headerName, asinsTable } from './audit_const';

class AuditPage {

    get addAsin() {
        return $(auditSelector.addASIN)
    }

    clickAddAsin() {
        this.addAsin.click();
    }

    getRowIndex(headerName) {
        return $$(auditSelector.headers).findIndex(currHead => { return currHead.getText().includes(headerName) });
    }

    searchRow(asin){
        return $(`//tbody/tr[@class='${asinsTable.rowClass}']` +                  // getting all rows
            `/td[contains(@class, '${asinsTable.columnClass}')][${this.getRowIndex(headerName.asin)}]` + // selecting the column to search
            `/descendant::div[contains(text(), '${asin}')]/ancestor::tr`);  // Matching the cells in the given column e.g. asin=B005D3YMKI
    }

    rowIsVisible(searchCriteria){
        return this.searchRow(searchCriteria.asin).isDisplayed();
    }

    dimensionIsDisplayedAtRow(data){
        let cellData = this.searchCell(headerName.dimensions, this.searchRow(data.asin));
        return cellData.split(/\r?\n/)[0] === `${data.longestSide} x ${data.medianSide} x ${data.shortestSide} in`;
    }

    weightIsDisplayedAtRow(data){
        let cellData = this.searchCell(headerName.weight, this.searchRow(data.asin));
        return cellData.split(/\r?\n/)[0] === `${data.weight} lb`;
    }

    searchCell(header, row){
        return row.$$('./td')[this.getRowIndex(header)].getText();
    }

}

export default new AuditPage();
