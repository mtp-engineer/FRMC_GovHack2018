$(function () {
    $("#generate-list-btn").on("click", function (event) {

        var features = getExtentFeatures();

        var wordArray = [];
        features = features.filter((value, index, origArray) => {
            if(wordArray.includes(value.properties.Yugambeh_Word)) {
                return false;
            }
            wordArray.push(value.properties.Yugambeh_Word);
            return true;
        });

        features.forEach(function (value, index, origArray) { 
            $("#culture-list").append(`<label class="container">` + value.properties.Yugambeh_Word +
                `<input type="checkbox">
                <span class="checkmark"></span>
                </label>`);
        });      
    });
});