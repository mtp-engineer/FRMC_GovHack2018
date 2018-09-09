
function generateGuideSheet() {
    var features = getExtentFeatures();

    var wordArray = [];
    features = features.filter((value, index, origArray) => {
        if(wordArray.includes(value.properties.Yugambeh_Word)) {
            return false;
        }
        wordArray.push(value.properties.Yugambeh_Word);
        return true;
    });
    $("#culture-list li").remove();
    features.forEach(function (value, index, origArray) { 
        $("#culture-list").append(`<li class="culture-list-item">
        <img src="./assets/` + value.properties.Yugambeh_Word + `.png"> 
        <label>` + value.properties.Yugambeh_Word + 
        `<div class="animal-tick-box"></div></label></li>`);
    });      
}

function generateStudentSheet() {
    var features = getExtentFeatures();

    var wordArray = [];
    features = features.filter((value, index, origArray) => {
        if(wordArray.includes(value.properties.Yugambeh_Word)) {
            return false;
        }
        wordArray.push(value.properties.Yugambeh_Word);
        return true;
    });
    $("#culture-list li").remove();
    features.forEach(function (value, index, origArray) { 
        $("#culture-list").append(`<li class="culture-list-item">
        <img src="./assets/` + value.properties.Yugambeh_Word + `.png"> 
        <label>` + value.properties.Yugambeh_Word + 
        `<div class="animal-tick-box"></div></label></li>`);
    }); 
}

function printSheet() {
    let nonPrintable = $(".non-printable");
    nonPrintable.hide();
    window.print();
    nonPrintable.show();
}