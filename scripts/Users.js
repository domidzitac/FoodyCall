
'use strict';

/**
 * Initializes the Users app.
 */
function Users() {
  this.filters = {
    city: '',
    price: '',
    category: '',
    sort: 'Rating'
  };

  this.dialogs = {};

  firebase.firestore().settings({ timestampsInSnapshots: true });

  var that = this;
  firebase.auth().signInAnonymously().then(function() {
    that.initTemplates();
    that.initRouter();
    that.initReviewDialog();
    that.initFilterDialog();
  }).catch(function(err) {
    console.log(err);
  });
}

/**
 * Initializes the router for the Users app.
 */
Users.prototype.initRouter = function() {
  this.router = new Navigo();

  var that = this;
  console.log("debug --> Users.prototype.initRouter ")
  this.router
    .on({
      '/': function() {
        that.updateQuery(that.filters);
      }
    })
    .on({
      '/setup': function() {
        console.log("debug --> Users.prototype.initRouter /setup ")
        that.viewSetup();
      }
    })
    .on({
      '/Users/*': function() {
        console.log("debug --> Users.prototype.initRouter /Users ")
        var path = that.getCleanPath(document.location.pathname);
        console.log("path")
        console.log(path)
        var id = path.split('/')[2];
        console.log("id")
        console.log(id)
        that.viewUser(id);
      }
    })
    .resolve();

  firebase
    .firestore()
    .collection('Users')
    .limit(1)
    .onSnapshot(function(snapshot) {
      console.log(".onSnapshot")
      if (snapshot.empty) {
        console.log("snapshot.empty")
        that.router.navigate('/setup');
      }
      console.log("")
    });
};

Users.prototype.getCleanPath = function(dirtyPath) {
  if (dirtyPath.startsWith('/index.html')) {
    return dirtyPath.split('/').slice(1).join('/');
  } else {
    return dirtyPath;
  }
};

Users.prototype.getFirebaseConfig = function() {
  return firebase.app().options;
};

Users.prototype.getRandomItem = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

Users.prototype.data = {
  words: [
    'Bar',
    'Fire',
    'Grill',
    'Drive Thru',
    'Place',
    'Best',
    'Spot',
    'Prime',
    'Eatin\''
  ],
  cities: [
    'Albuquerque',
    'Arlington',
    'Atlanta',
    'Austin',
    'Baltimore',
    'Boston',
    'Charlotte',
    'Chicago',
    'Cleveland',
    'Colorado Springs',
    'Columbus',
    'Dallas',
    'Denver',
    'Detroit',
    'El Paso',
    'Fort Worth',
    'Fresno',
    'Houston',
    'Indianapolis',
    'Jacksonville',
    'Kansas City',
    'Las Vegas',
    'Long Island',
    'Los Angeles',
    'Louisville',
    'Memphis',
    'Mesa',
    'Miami',
    'Milwaukee',
    'Nashville',
    'New York',
    'Oakland',
    'Oklahoma',
    'Omaha',
    'Philadelphia',
    'Phoenix',
    'Portland',
    'Raleigh',
    'Sacramento',
    'San Antonio',
    'San Diego',
    'San Francisco',
    'San Jose',
    'Tucson',
    'Tulsa',
    'Virginia Beach',
    'Washington'
  ],
  categories: [
    'Brunch',
    'Burgers',
    'Coffee',
    'Deli',
    'Dim Sum',
    'Indian',
    'Italian',
    'Mediterranean',
    'Mexican',
    'Pizza',
    'Ramen',
    'Sushi'
  ],
  ratings: [
    {
      rating: 1,
      text: 'Would never eat here again!'
    },
    {
      rating: 2,
      text: 'Not my cup of tea.'
    },
    {
      rating: 3,
      text: 'Exactly okay :/'
    },
    {
      rating: 4,
      text: 'Actually pretty good, would recommend!'
    },
    {
      rating: 5,
      text: 'This is my favorite place. Literally.'
    }
  ]
};

window.onload = function() {
  console.log("window.onload")
  window.app = new Users();
};
