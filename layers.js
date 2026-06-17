const LAYERS = [
  {
    id: "sheet-layer",
    name: "Opportunity Sites",
    type: "sheet",

    url: "YOUR_GOOGLE_SHEET_CSV_URL",

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

    url: "YOUR_REST_GEOJSON_URL",

    paint: {
      fill: "#f59e0b",
      opacity: 0.3,
      outline: "#b45309"
    }
  }
];
