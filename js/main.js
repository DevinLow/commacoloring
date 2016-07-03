/* Main page dispatcher.
*/

data = {
  "labels": [
    "eraser",
    "sky",
    "road (drivable surfaces)",
    "lane lines (on road markings)",
    "undrivable (trees, curbs, etc.)",
    "movable (cars, people, etc.)",
    "signs and traffic lights",
    "my car"
  ],
  "imageURLs": [
    "data/driving/000.png",
    "data/driving/007.png",
    "data/driving/014.png"
  ]
};

require.config({
  urlArgs: "bust=" + (new Date()).getTime()
});

requirejs(['app/edit',
           'helper/colormap',
           'helper/util'],
function(editPage, colormap, util) {
  var params = util.getQueryParams();

  // Create a colormap for display. The following is an example.
  function createColormap(label, labels) {
    return (label) ?
      colormap.create("single", {
        size: labels.length,
        index: labels.indexOf(label)
      }) :
      [[255, 255, 255],
       [226, 196, 196],
       [64, 32, 32]].concat(colormap.create("hsv", {
        size: labels.length - 3
      }));
  }

  data.colormap = createColormap(params.label, data.labels);
  editPage(data, params);
});

