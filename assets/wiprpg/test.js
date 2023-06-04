(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("test",
{ "compressionlevel":-1,
 "height":12,
 "infinite":false,
 "layers":[
        {
         "data":[71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 18, 19, 19, 19,
            71, 71, 71, 71, 71, 71, 71, 93, 71, 71, 71, 71, 19, 19, 19, 19,
            71, 71, 71, 79, 71, 71, 71, 71, 71, 71, 71, 71, 32, 19, 19, 19,
            71, 71, 71, 93, 71, 71, 97, 98, 71, 71, 71, 71, 79, 32, 33, 33,
            71, 71, 71, 71, 71, 71, 111, 112, 71, 71, 71, 71, 71, 71, 71, 71,
            71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71,
            71, 71, 71, 71, 71, 71, 71, 79, 71, 71, 71, 71, 71, 71, 71, 71,
            71, 47, 48, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71,
            47, 76, 76, 48, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71,
            61, 76, 76, 76, 48, 71, 71, 71, 71, 71, 71, 71, 71, 43, 73, 73,
            71, 61, 76, 76, 48, 71, 71, 71, 71, 71, 71, 71, 71, 73, 73, 73,
            71, 71, 61, 62, 71, 71, 71, 71, 71, 71, 71, 71, 71, 73, 73, 73],
         "height":12,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }],
 "nextlayerid":2,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.1",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "source":"FF1.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.10",
 "width":16
});