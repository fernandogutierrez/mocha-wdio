import addAsinSelectors from '../../selectors/audit/add_asin_form'

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
        this.asin.setValue(nAsin);
        return this;
    }

    set longestSide(nLongS){
        this.longestSide.setValue(nLongS);
        return this;
    }

    set medianSide(nMedS){
        this.medianSide.setValue(nMedS);
        return this;
    }

    set shortestSide(nShorS){
        this.shortestSide.setValue(nShorS);
        return this;
    }

    set weight(nWeight){
        this.weight.setValue(nWeight);
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
        this.asin = data.asin;
        this.longestSide = data.longestSide;
        this.medianSide = data.medianSide;
        this.shortestSide = data.shortestSide;
        this.weight = data.weight;
        this.myProductIsDangerous = data.myProductIsDangerous;
        return this;
    }
}

export default new AddAsinFormPage();
