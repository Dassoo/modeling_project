var MiradorList = [
"https://api.artic.edu/api/v1/artworks/4449/manifest.json",
"https://api.artic.edu/api/v1/artworks/77408/manifest.json",
"https://api.artic.edu/api/v1/artworks/77404/manifest.json",
"https://api.artic.edu/api/v1/artworks/77411/manifest.json",
"https://api.artic.edu/api/v1/artworks/77413/manifest.json",
"https://api.artic.edu/api/v1/artworks/77406/manifest.json",
"https://api.artic.edu/api/v1/artworks/77415/manifest.json",
];
    
for (i=1;i<8;i++){
var mirador = Mirador.viewer({
    "id": "mirador" + i,
    "windows": [
    {
        "loadedManifest": MiradorList[i-1],
        "canvasIndex": 1,
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
