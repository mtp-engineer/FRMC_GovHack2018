$(function () {
    var currentLat = -27.848217; 
    var currentLong = 153.27;
    var aashMap = L.map('mapid').setView([currentLat, currentLong], 15)

    var wmsLayer = L.tileLayer.wms('https://gisservices.information.qld.gov.au/arcgis/services/Basemaps/QldBase_Pastel/MapServer/WMSServer?', 
    {
    layers: 'QldBase_Pastel'
    }).addTo(aashMap);
    
    var gcFaunaFlora = L.geoJSON([],{pointToLayer: 
    function(geoJsonPoint, latlng) {
        var icon = L.icon({
        iconUrl: "./assets/koala.svg",
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
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
        iconUrl: "./assets/koala.svg",
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
        });
        return L.marker(latlng,{icon:icon,title:geoJsonPoint.properties.COMMONNAME}).bindTooltip("my tooltip text").openTooltip();;
    }, 
    filter: function(feature){
        return feature.id == "ckan_48bc9574_e94b_419d_b4d4_2287aff69cb6.9088" ?  true :  false;
        
    }}).addTo(aashMap);

    $.getJSON("https://data.gov.au/geoserver/gold-coast-pathways/wfs?request=GetFeature&typeName=ckan_48bc9574_e94b_419d_b4d4_2287aff69cb6&outputFormat=json", function(data) {
    console.log(data);
    gcWalkingTracks.addData(data.features);
    });

    console.log(aashMap.getBounds());

});
