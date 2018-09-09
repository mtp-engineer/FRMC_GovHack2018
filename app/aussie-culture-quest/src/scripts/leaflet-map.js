var aashMap;
var gcFaunaFlora;
$(function () {
    var currentLat = -27.848217; 
    var currentLong = 153.27;
    aashMap = L.map('mapid').setView([currentLat, currentLong], 15)

    var wmsLayer = L.tileLayer.wms('https://gisservices.information.qld.gov.au/arcgis/services/Basemaps/QldBase_Pastel/MapServer/WMSServer?', 
    {
    layers: 'QldBase_Pastel'
    }).addTo(aashMap);
    
    gcFaunaFlora = L.geoJSON([],{pointToLayer: 
    function(geoJsonPoint, latlng) {
        var rndIndex  = Math.floor((Math.random() * 10) + 1);
        var images = ["Baleirei.png","Geira.png","Chungarra.png","Golgorun.png","Guran.png","Jingeri.png","Kagaru.png","Kulamburum.png","Muni.png","Pigin.png","Taran.png","Wongari.png"];
        var icon = L.icon({
        iconUrl: "./assets/" + geoJsonPoint.properties.Yugambeh_Word + ".png",
        iconSize: [25, 25]
        });
        return L.marker(latlng,{icon:icon,title:geoJsonPoint.properties.COMMONNAME});
    }, 
    filter: function(feature){
        return true;//return feature.properties.commonname == "Scrub Bloodwood" ?  true :  false;
    }}).addTo(aashMap);

    $.getJSON("./assets/GoldCoastAnimals.json", function(data) {
    gcFaunaFlora.addData(data.features);
    });
    
    var gcWalkingTracks = L.geoJSON([],{pointToLayer: 
    function(geoJsonPoint, latlng) {
        var icon = L.icon({
        iconUrl: "./assets/Geira.png.svg",
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
        });
        return L.marker(latlng,{icon:icon,title:geoJsonPoint.properties.COMMONNAME}).bindTooltip("my tooltip text").openTooltip();;
    }, 
    filter: function(feature){
        return true;//return feature.id == "ckan_48bc9574_e94b_419d_b4d4_2287aff69cb6.9088" ?  true :  false;
        
    }}).addTo(aashMap);

    $.getJSON("https://data.gov.au/geoserver/gold-coast-pathways/wfs?request=GetFeature&typeName=ckan_48bc9574_e94b_419d_b4d4_2287aff69cb6&outputFormat=json", function(data) {
    console.log(data);
    gcWalkingTracks.addData(data.features);
    });

    var north = L.control({position: "bottomright"});
    north.onAdd = function(map) {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML = '<img style="width:50px" src="./src/assets/northArrow.svg">';
    return div;
    }
    north.addTo(aashMap);

});

function getExtentFeatures(){
    var mapBounds = aashMap.getBounds();
    var extentFeatures = new Array();
    //intersection testing
    //L.rectangle(mapBounds, {color: "#ff7800", weight: 1}).addTo(aashMap);
    gcFaunaFlora.eachLayer(function(e){
        var point = L.latLng(e.feature.geometry.coordinates[1], e.feature.geometry.coordinates[0]);
        mapBounds.contains(point) ? extentFeatures.push(e.feature) : null;
    });

    if(extentFeatures.count == 0)
    {
        alert("No features in the current extent.");
    }
    else
    {
        //alert("Please print features for current extent.");
        console.log(extentFeatures);
    }
    return extentFeatures;
}



