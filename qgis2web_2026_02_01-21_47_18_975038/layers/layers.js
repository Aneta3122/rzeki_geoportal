var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            popuplayertitle: 'Raster',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_Historyczna1940_1 = new ol.format.GeoJSON();
var features_Historyczna1940_1 = format_Historyczna1940_1.readFeatures(json_Historyczna1940_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Historyczna1940_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Historyczna1940_1.addFeatures(features_Historyczna1940_1);
var lyr_Historyczna1940_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Historyczna1940_1, 
                style: style_Historyczna1940_1,
                popuplayertitle: 'Historyczna-1940',
                interactive: true,
                title: '<img src="styles/legend/Historyczna1940_1.png" /> Historyczna-1940'
            });
var format_VmapL2_2 = new ol.format.GeoJSON();
var features_VmapL2_2 = format_VmapL2_2.readFeatures(json_VmapL2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VmapL2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VmapL2_2.addFeatures(features_VmapL2_2);
var lyr_VmapL2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VmapL2_2, 
                style: style_VmapL2_2,
                popuplayertitle: 'VmapL2',
                interactive: false,
                title: '<img src="styles/legend/VmapL2_2.png" /> VmapL2'
            });
var format_Sentinel2_3 = new ol.format.GeoJSON();
var features_Sentinel2_3 = format_Sentinel2_3.readFeatures(json_Sentinel2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel2_3.addFeatures(features_Sentinel2_3);
var lyr_Sentinel2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel2_3, 
                style: style_Sentinel2_3,
                popuplayertitle: 'Sentinel-2',
                interactive: true,
                title: '<img src="styles/legend/Sentinel2_3.png" /> Sentinel-2'
            });
var format_kiedykolwiek_4 = new ol.format.GeoJSON();
var features_kiedykolwiek_4 = format_kiedykolwiek_4.readFeatures(json_kiedykolwiek_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kiedykolwiek_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kiedykolwiek_4.addFeatures(features_kiedykolwiek_4);
var lyr_kiedykolwiek_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kiedykolwiek_4, 
                style: style_kiedykolwiek_4,
                popuplayertitle: 'kiedykolwiek',
                interactive: true,
                title: '<img src="styles/legend/kiedykolwiek_4.png" /> kiedykolwiek'
            });
var format_zawsze_5 = new ol.format.GeoJSON();
var features_zawsze_5 = format_zawsze_5.readFeatures(json_zawsze_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zawsze_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zawsze_5.addFeatures(features_zawsze_5);
var lyr_zawsze_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zawsze_5, 
                style: style_zawsze_5,
                popuplayertitle: 'zawsze',
                interactive: true,
                title: '<img src="styles/legend/zawsze_5.png" /> zawsze'
            });

lyr_Raster_0.setVisible(true);lyr_Historyczna1940_1.setVisible(true);lyr_VmapL2_2.setVisible(true);lyr_Sentinel2_3.setVisible(true);lyr_kiedykolwiek_4.setVisible(true);lyr_zawsze_5.setVisible(true);
var layersList = [lyr_Raster_0,lyr_Historyczna1940_1,lyr_VmapL2_2,lyr_Sentinel2_3,lyr_kiedykolwiek_4,lyr_zawsze_5];
lyr_Historyczna1940_1.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_VmapL2_2.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Pow_km2': 'Pow_km2', 'obwod': 'obwod', });
lyr_Sentinel2_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Pow_km2': 'Pow_km2', 'obwod': 'obwod', 'Nazwa': 'Nazwa', });
lyr_kiedykolwiek_4.set('fieldAliases', {'FID_Bug_19': 'FID_Bug_19', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'FID_Bug_20': 'FID_Bug_20', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_Bug_vm': 'FID_Bug_vm', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_zawsze_5.set('fieldAliases', {'FID_Bug_19': 'FID_Bug_19', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'FID_Bug_vm': 'FID_Bug_vm', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'FID_Bug_20': 'FID_Bug_20', 'Id_12': 'Id_12', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Historyczna1940_1.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VmapL2_2.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Pow_km2': 'TextEdit', 'obwod': 'TextEdit', });
lyr_Sentinel2_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Pow_km2': 'TextEdit', 'obwod': 'TextEdit', 'Nazwa': 'TextEdit', });
lyr_kiedykolwiek_4.set('fieldImages', {'FID_Bug_19': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'FID_Bug_20': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_Bug_vm': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_zawsze_5.set('fieldImages', {'FID_Bug_19': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'FID_Bug_vm': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'FID_Bug_20': 'TextEdit', 'Id_12': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Historyczna1940_1.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_VmapL2_2.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Pow_km2': 'no label', 'obwod': 'no label', });
lyr_Sentinel2_3.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Pow_km2': 'no label', 'obwod': 'no label', 'Nazwa': 'no label', });
lyr_kiedykolwiek_4.set('fieldLabels', {'FID_Bug_19': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'FID_Bug_20': 'no label', 'Id_1': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_Bug_vm': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_zawsze_5.set('fieldLabels', {'FID_Bug_19': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'FID_Bug_vm': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'FID_Bug_20': 'no label', 'Id_12': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_zawsze_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});