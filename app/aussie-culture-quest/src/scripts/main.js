$(function () {
    $("#generate-list-btn").on("click", function (event) {
        var features = aashMap.getFeatures();
        features.forEach(element => {
            $("#culture-list").append("<li>" + element.Yugambeh_Word + "</li>");
        });
        
        // $("#culture-list").append("<li>Added an item</li>");        
    });
});