var MiradorList = [
"https://www.nga.gov/api/v1/iiif/presentation/manifest.json?cultObj:id=11838",
"https://www.nga.gov/api/v1/iiif/presentation/manifest.json?cultObj:id=11837",
"https://www.nga.gov/api/v1/iiif/presentation/manifest.json?cultObj:id=3530",
"https://api.artic.edu/api/v1/artworks/95545/manifest.json",
"https://api.artic.edu/api/v1/artworks/95546/manifest.json",
"https://api.artic.edu/api/v1/artworks/77400/manifest.json",
"https://api.artic.edu/api/v1/artworks/77402/manifest.json",
];

for (i=1;i<8;i++){
var mirador = Mirador.viewer({
    "id": "mirador" + i,
  "windows": [
    {
      "loadedManifest": MiradorList[i-1],
      "canvasIndex": i,
      "thumbnailNavigationPosition": 'far-bottom'
      }
    ],
  selectedTheme:'dark',
    themes: {
   dark: {
     palette: {
       type: 'dark',
       primary: {
         main: '#C79B23',
       },
       secondary: {
        main: '#C79B23',
      },
     },
   },
},
});
}
