const LAYERS = [
  {
    id: "sheet-layer",
    name: "Opportunity Sites",
    type: "sheet",

    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOmFRs9WqWbsV18n0Ulujr-yNGiyEfFmiDzKQEXBuDBh-Cak-ZQdhczddXWLnRQcDk_1dmAawjtqb6/pub?output=csv",

    latField: "Latitude",
    lngField: "Longitude",

    paint: {
      radius: 6,
      color: "#2563eb"
    }
  },

  {
    id: "rest-layer",
    name: "Counties",
    type: "rest",

    url: "https://services6.arcgis.com/EbVsqZ18sv1kVJ3k/arcgis/rest/services/NYS_Civil_Boundaries/FeatureServer/2/query?where=NAME='Westchester' OR NAME='Rockland' OR NAME='Sullivan' OR NAME='Putnam' OR NAME='Ulster' OR NAME='Orange' OR NAME='Dutchess' &outFields=*&f=geojson",

    paint: {
      fill: "#f59e0b",
      opacity: 0.3,
      outline: "#b45309"
    }
  }
];
