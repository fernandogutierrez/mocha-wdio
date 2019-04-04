import homePage from '../../../../src/support/pages/home/HomePage';
import loginPage from '../../../../src/support/pages/login/LoginPage';
import auditPage from '../../../../src/support/pages/audit/AuditPage';
import addAsinForm from '../../../../src/support/pages/audit/AddAsinFormPage';
import alertMessage from '../../../../src/support/pages/audit/AlertMessage';
import { ASIN_ADDED } from '../../../../src/support/pages/audit/audit_const';
import asinActions from '../../../../src/actions/api/asin_actions';

describe('webdriver.io pages', () => {
    before(() => {
        homePage.open()
                .clickLogin();
        loginPage.loginWithCredentials('fernandogutierrez279@gmail.com','Control123');
    });

    it('An asin should be added after pressing on ADD button', () => {
        let data = { asin: "B0733FPPDG" };

        homePage.clickAudit()
                .clickMyAsins();

        auditPage.clickAddAsin();

        addAsinForm
            .fillAddAsinForm({ asin: data.asin})
            .clickAdd();

        expect(alertMessage.asinAddedIsDisplayed(),
            `The alert '${ASIN_ADDED}' message was not displayed`).to.be.true;

        expect(auditPage.rowIsVisible({ asin: data.asin }),
            `Row with ${data.asin} was not found in the table`).to.be.true;
    });

    it("Dimensions and Weight inserted at 'ADD ASIN' form should be displayed",  () => {
        let data = { asin: 'B00I1KW2FW', longestSide: '377', medianSide: '465', shortestSide: '555', weight: '142'};

        homePage.clickAudit()
                .clickMyAsins();

        auditPage.clickAddAsin();

        addAsinForm
            .fillAddAsinForm(data)
            .clickAdd();

        expect(auditPage.dimensionIsDisplayedAtRow(data),
            `Row with ${data.asin} not contains dimensions: ` +
            `${data.longestSide} - ${data.medianSide} - ${data.shortestSide} - ${data.weight}`).to.be.true;
    });
});
