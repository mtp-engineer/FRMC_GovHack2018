
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
    $(".culture-list-item").remove();
    features.forEach(function (value, index, origArray) { 
        $("#culture-list").append(`<div class="culture-list-item">
        <img src="./assets/` + value.properties.Yugambeh_Word + `.png"> 
        ` + value.properties.Yugambeh_Word + 
        `<div class="animal-tick-box"></div></div>`);
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
    $(".culture-list-item").remove();
    features.forEach(function (value, index, origArray) { 
        $("#culture-list").append(`<div class="culture-list-item">
        <img src="./assets/` + value.properties.Yugambeh_Word + `.png"> 
        <div class="native-name">____________________________</div><div class="animal-tick-box"></div></div>`);
    }); 
}

function printSheet() {
    let nonPrintable = $(".non-printable");
    nonPrintable.hide();
    window.print();
    nonPrintable.show();
}