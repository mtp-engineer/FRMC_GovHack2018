$(function () {
    var myNumber = 1;
    $("#generate-list-btn").on("click", function (event) {
        //var features = getFeatures();
        // features.forEach(element => {
          
        $("#culture-list").append(`<label class="container">` + myNumber +
            `<input type="checkbox" checked="checked">
            <span class="checkmark"></span>
            </label>`);
        // $("#culture-list").append("<li>" + element.Yugambeh_Word + "</li>");
            //$("#culture-list").append(mymap.features[0].Yugambeh_Word);
        // });
        myNumber++;
        // $("#culture-list").append("<li>Added an item</li>");        
    });
});