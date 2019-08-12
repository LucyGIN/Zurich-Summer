mapboxgl.accessToken =
  'pk.eyJ1IjoibHVjaWFtYXBzIiwiYSI6ImNqeWU3NjViMDB6bnEzY28zanptM2o1MWsifQ.O8VkURAOTdEkTk7b1Y38iQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [8.541179, 47.3336596],
  zoom: 13.8,
  bearing: 18,
  pitch: 45,
});

const chapters = {
  baker: {
    bearing: 27,
    center: [8.541179, 47.3336596],
    zoom: 15.78,
    pitch: 30,
    speed: 0.6,
  },
  roteFabrik: {
    duration: 6000,
    center: [8.536891, 47.343344],
    bearing: 150,
    zoom: 15.6,
    pitch: 0,
  },
  saffaInsel: {
    bearing: 90,
    center: [8.536585, 47.34974],
    zoom: 15.21,
    speed: 0.6,
    pitch: 40,
  },
  forkBottle: {
    bearing: 90,
    center: [8.524542, 47.352209],
    zoom: 16.3,
  },
  mythenquai: {
    bearing: 45,
    center: [8.535747, 47.353612],
    zoom: 15.7,
    pitch: 20,
    speed: 0.5,
  },
  chinaGarden: {
    bearing: 180,
    center: [8.550401, 47.353669],
    zoom: 16.3,
  },
  samigo: {
    bearing: 90,
    center: [8.537113, 47.358893],
    zoom: 17.3,
    speed: 0.8,
    pitch: 40,
  },
  rietbergPark: {
    bearing: 90,
    center: [8.531409, 47.360507],
    zoom: 16.2,
    pitch: 20,
  },
  panorama: {
    bearing: 90,
    center: [8.502688, 47.357075],
    zoom: 15.3,
    pitch: 30,
  },
  ginetta: {
    bearing: 90,
    center: [8.525452, 47.361244],
    zoom: 17.21,
    pitch: 20,
  },
  hafenEnge: {
    bearing: 90,
    center: [8.535809, 47.360507],
    zoom: 17.3,
    pitch: 20,
  },
  seebadEnge: {
    bearing: 90,
    center: [8.536932, 47.361789],
    zoom: 17.3,
    pitch: 20,
  },
  rentenwiese: {
    bearing: 90,
    center: [8.536417, 47.362752],
    zoom: 16.3,
    pitch: 40,
  },
  rimini: {
    bearing: 90,
    center: [8.532945, 47.371538],
    zoom: 18.3,
    pitch: 40,
    speed: 0.5,
  },
  lindenhof: {
    bearing: 90,
    center: [8.541332, 47.372966],
    zoom: 18.3,
    pitch: 40,
  },
  henrici: {
    bearing: 90,
    center: [8.543686, 47.372654],
    zoom: 20.3,
    pitch: 40,
  },
  golosone: {
    bearing: 90,
    center: [8.536191, 47.374079],
    zoom: 20.3,
    pitch: 40,
  },
  rioBar: {
    bearing: 90,
    center: [8.535763, 47.376289],
    zoom: 20.3,
    pitch: 40,
  },
  kinoXenix: {
    bearing: 90,
    center: [8.526009, 47.375235],
    zoom: 18.3,
    pitch: 30,
  },
  backi: {
    bearing: 90,
    center: [8.523585, 47.377732],
    zoom: 18.3,
    pitch: 40,
  },
  theBite: {
    bearing: 90,
    center: [8.527867, 47.37732],
    zoom: 20.1,
    pitch: 40,
  },
  kokoro: {
    bearing: 90,
    center: [8.526452, 47.380736],
    zoom: 18.1,
    pitch: 30,
  },
  letzigraben: {
    bearing: 60,
    center: [8.499261, 47.379284],
    zoom: 16.1,
    pitch: 30,
  },
  bullingerplatz: {
    bearing: 60,
    center: [8.516155, 47.379727],
    zoom: 17.1,
    pitch: 30,
  },
  josefwiese: {
    bearing: 90,
    center: [8.523747, 47.385483],
    zoom: 16.5,
    pitch: 30,
  },
  obererLetten: {
    bearing: 0,
    center: [8.5343, 47.3857],
    zoom: 16.1,
    pitch: 30,
  },
  untererLetten: {
    bearing: 0,
    center: [8.529317, 47.389234],
    zoom: 18.1,
    pitch: 30,
  },
  beast: {
    bearing: 0,
    center: [8.505724, 47.392008],
    zoom: 17.64,
    pitch: 30,
  },
  nook1: {
    bearing: 90,
    center: [8.51342, 47.394616],
    zoom: 17.5,
    pitch: 30,
  },
  nook2: {
    bearing: 90,
    center: [8.496957, 47.39859],
    zoom: 17.4,
    pitch: 30,
  },
  werdInsel: {
    bearing: 90,
    center: [8.490456, 47.399058],
    zoom: 15.4,
    pitch: 30,
  },
  dynamo: {
    bearing: 90,
    center: [8.539565, 47.383117],
    zoom: 17.5,
    speed: 0.6,
    pitch: 30,
  },
  dolderTrail: {
    bearing: 90,
    center: [8.576748, 47.372392],
    zoom: 15.6,
    pitch: 30,
  },
  dolderBad: {
    bearing: 90,
    center: [8.574306, 47.375823],
    zoom: 17.1,
    pitch: 30,
  },
  sonenberg: {
    bearing: 120,
    center: [8.568023, 47.367045],
    zoom: 14.1,
    pitch: 30,
  },
  katzensee: {
    bearing: 90,
    center: [8.4912, 47.4323],
    zoom: 17.1,
    pitch: 30,
  },
};

//const chapterArray = [chapters]

// On every scroll event, check which element is on screen
window.onscroll = function() {
  const chapterNames = Object.keys(chapters);
  for (let i = 0; i < chapterNames.length; i++) {
    const chapterName = chapterNames[i];
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    }
  }
};

let activeChapterName = 'baker';
function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  const element = document.getElementById(id);
  const bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 100;
}
