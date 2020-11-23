var name="";
var imageData="";
var type="";
var descriptionList=[];
var namedetail="";

function detailIngredientFood(namedetail){
this.namedetail=namedetail;
}


function ingredientMainFood(name, imageData, type,[descriptionList]){
    this.name=name;
    this.imageData=imageData;
    this.type=type;
    this.descriptionList=[descriptionList];
    this.detailIngredientFood=detailIngredientFood;
}

