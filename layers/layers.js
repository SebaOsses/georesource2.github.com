var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_readeestudio_1 = new ol.format.GeoJSON();
var features_readeestudio_1 = format_readeestudio_1.readFeatures(json_readeestudio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeestudio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeestudio_1.addFeatures(features_readeestudio_1);
var lyr_readeestudio_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeestudio_1, 
                style: style_readeestudio_1,
                interactive: false,
                title: '<img src="styles/legend/readeestudio_1.png" /> Área de estudio.'
            });
var lyr_ZonasPotencialesdeAguasSubterrneas_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Zonas Potenciales de Aguas Subterráneas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ZonasPotencialesdeAguasSubterrneas_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8100473.190644, -5367447.479532, -8032490.054464, -5306717.490376]
                            })
                        });
var format_Potencial_3 = new ol.format.GeoJSON();
var features_Potencial_3 = format_Potencial_3.readFeatures(json_Potencial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potencial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potencial_3.addFeatures(features_Potencial_3);
var lyr_Potencial_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Potencial_3, 
                style: style_Potencial_3,
                interactive: false,
    title: 'Potencial<br />\
    <img src="styles/legend/Potencial_3_0.png" /> Muy bajo<br />\
    <img src="styles/legend/Potencial_3_1.png" /> Bajo<br />\
    <img src="styles/legend/Potencial_3_2.png" /> Medio<br />\
    <img src="styles/legend/Potencial_3_3.png" /> Alto<br />\
    <img src="styles/legend/Potencial_3_4.png" /> Muy alto<br />'
        });
var format_Favorabilidad_4 = new ol.format.GeoJSON();
var features_Favorabilidad_4 = format_Favorabilidad_4.readFeatures(json_Favorabilidad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Favorabilidad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Favorabilidad_4.addFeatures(features_Favorabilidad_4);
var lyr_Favorabilidad_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Favorabilidad_4, 
                style: style_Favorabilidad_4,
                interactive: false,
    title: 'Favorabilidad<br />\
    <img src="styles/legend/Favorabilidad_4_0.png" /> Muy baja<br />\
    <img src="styles/legend/Favorabilidad_4_1.png" /> Baja<br />\
    <img src="styles/legend/Favorabilidad_4_2.png" /> Media<br />\
    <img src="styles/legend/Favorabilidad_4_3.png" /> Alta<br />\
    <img src="styles/legend/Favorabilidad_4_4.png" /> Muy alta<br />'
        });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_readeestudio_1.setVisible(true);lyr_ZonasPotencialesdeAguasSubterrneas_2.setVisible(true);lyr_Potencial_3.setVisible(true);lyr_Favorabilidad_4.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_readeestudio_1,lyr_ZonasPotencialesdeAguasSubterrneas_2,lyr_Potencial_3,lyr_Favorabilidad_4];
lyr_readeestudio_1.set('fieldAliases', {'Id': 'Id', });
lyr_Potencial_3.set('fieldAliases', {'id': 'id', 'Valor': 'Valor', 'Potencial': 'Potencial', });
lyr_Favorabilidad_4.set('fieldAliases', {'id': 'id', 'A': 'A', });
lyr_readeestudio_1.set('fieldImages', {'Id': 'Range', });
lyr_Potencial_3.set('fieldImages', {'id': 'TextEdit', 'Valor': 'TextEdit', 'Potencial': 'TextEdit', });
lyr_Favorabilidad_4.set('fieldImages', {'id': 'TextEdit', 'A': 'TextEdit', });
lyr_readeestudio_1.set('fieldLabels', {'Id': 'no label', });
lyr_Potencial_3.set('fieldLabels', {'id': 'no label', 'Valor': 'no label', 'Potencial': 'no label', });
lyr_Favorabilidad_4.set('fieldLabels', {'id': 'no label', 'A': 'no label', });
lyr_Favorabilidad_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});