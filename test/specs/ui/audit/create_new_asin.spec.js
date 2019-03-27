import homePage from '../../../../src/support/pages/home/HomePage';
import loginPage from '../../../../src/support/pages/login/LoginPage';
import auditPage from '../../../../src/support/pages/audit/AuditPage';
import addAsinForm from '../../../../src/support/pages/audit/AddAsinFormPage';
import alertMessage from '../../../../src/support/pages/audit/AlertMessage';
import messageCons from '../../../../src/support/pages/alertMessagesConstants';


describe('webdriver.io pages', () => {
    before(() => {
        homePage.open()
                .clickLogin();
        loginPage.loginWithCredentials('fernandogutierrez279@gmail.com','Control123');
    });

    it('should add a new asin', () => {
        homePage.clickAudit();
        auditPage.clickAddAsin();
        addAsinForm
            .fillAddAsinForm({
                asin: "B073RCMBCW",
                longestSide: "2.6",
                medianSide: "3",
                shortestSide: "4",
                weight: "5",
                myProductIsDangerous: true,
            })
            .clickAdd();

        expect(alertMessage.asinAddedIsDisplayed(),
            `The alert '${messageCons.ASINADDED}' message was not displayed`).to.be.true;
    });
});
