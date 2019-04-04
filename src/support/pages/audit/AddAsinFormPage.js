import addAsinSelectors from '../../selectors/audit/add_asin_form';
import utility from '../../utils/common_utilities';

class AddAsinFormPage{
    get asin(){
        return $(addAsinSelectors.asin);
    }

    get longestSide(){
        return $(addAsinSelectors.longestSide);
    }

    get medianSide(){
        return $(addAsinSelectors.medianSide);
    }

    get shortestSide(){
        return $(addAsinSelectors.shortestSide);
    }

    get weight(){
        return $(addAsinSelectors.weight);
    }

    get myProductIsDangerous(){
        return $(addAsinSelectors.myProductIsDangerous);
    }

    get add(){
        return $(addAsinSelectors.add);
    }

    set asin(nAsin){
        this.asin.setValue(nAsin.toString());
        return this;
    }

    set longestSide(nLongS){
        this.longestSide.setValue(nLongS.toString());
        return this;
    }

    set medianSide(nMedS){
        this.medianSide.setValue(nMedS.toString());
        return this;
    }

    set shortestSide(nShorS){
        this.shortestSide.setValue(nShorS.toString());
        return this;
    }

    set weight(nWeight){
        this.weight.setValue(nWeight.toString());
        return this;
    }

    set myProductIsDangerous(enable){
        enable ? this.myProductIsDangerous.click() : console.log('Disable button');
        return this;
    }

    clickAdd(){
        this.add.click();
    }

    fillAddAsinForm(data){
        this.asin = data.asin || "Non valid asin";
        this.longestSide = data.longestSide || utility.getRndInt({ max: 100});
        this.medianSide = data.medianSide || utility.getRndInt({ max: 100});
        this.shortestSide = data.shortestSide || utility.getRndInt({ max: 100});
        this.weight = data.weight || utility.getRndInt({ max: 100});
        this.myProductIsDangerous = data.myProductIsDangerous || false;
        return this;
    }
}

export default new AddAsinFormPage();
