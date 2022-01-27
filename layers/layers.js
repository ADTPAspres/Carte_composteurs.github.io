var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Composteurs_1 = new ol.format.GeoJSON();
var features_Composteurs_1 = format_Composteurs_1.readFeatures(json_Composteurs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Composteurs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Composteurs_1.addFeatures(features_Composteurs_1);
var lyr_Composteurs_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Composteurs_1, 
                style: style_Composteurs_1,
                interactive: true,
                title: '<img src="styles/legend/Composteurs_1.png" /> Composteurs'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Composteurs_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Composteurs_1];
lyr_Composteurs_1.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Composteurs_1.set('fieldImages', {'Nom': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Composteurs_1.set('fieldLabels', {'Nom': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Composteurs_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});