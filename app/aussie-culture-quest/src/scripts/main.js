$(function () {
    $("#generate-list-btn").on("click", function (event) {
        $.ajax({
            url: "GoldCoastAnimals.json",
            success: function(result) {
                console.log("The result is: " + result);
                $("#culture-list").append("<li>Added an item</li>");
            }
        });        
    });
});