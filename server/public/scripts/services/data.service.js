myApp.service('DataService', ['$http', function ($http) {
  console.log('DataService is loaded');
  var self = this;
  // self.data = { info: {}   }

  self.bur = {data: []};
  self.buckthorn = {data: []};
  self.milkweed = {data: []};
  self.dark = {data: []};
  self.eastern = {data: []};
  self.ground = {data: []};
  self.northern = {data: []};
  self.paper= {data: []};
  self.quaking = {data: []};
  self.ruby = {data: []};
  // self.all = {data: []};
  self.allBur = {data: []};
  self.allBuckthorn = {data: []};
  self.allDark = {data: []};
  self.allEastern = {data: []};
  self.allGround = {data: []};
  self.allMilkweed = {data: []};
  self.allNorthern = {data: []};
  self.allPaper = {data: []};
  self.allQuaking = {data: []};
  self.allRuby = {data: []};

  self.getBur = function (classNum) {
    $http.get('/dashboard/bur/' + classNum).then(function (response) {
      self.bur.data = response.data;
     // console.log('get route bur_oak: ', self.bur);
    });
  }
  self.getBuckthorn = function (classNum) {
    $http.get('/dashboard/buckthorn/' + classNum).then(function (response) {
      self.buckthorn.data = response.data;
     // console.log('get route common_buckthorn: ', self.buckthorn);
    });
  }
  self.getMilkweed = function (classNum) {
    $http.get('/dashboard/milkweed/' + classNum).then(function (response) {
      self.milkweed.data = response.data;
      // console.log('get route common_milkweed: ', self.milkweed);
    });
  }
  self.getDark = function (classNum) {
    $http.get('/dashboard/dark/' + classNum).then(function (response) {
      self.dark.data = response.data;
      // console.log('get route dark_eyed_junco: ', self.dark);
    });
  }
  self.getEastern = function (classNum) {
    $http.get('/dashboard/eastern/' + classNum).then(function (response) {
      self.eastern.data = response.data;
      // console.log('get route eastern_bluebird: ', self.eastern);
    });
  }
  self.getGround = function (classNum) {
    $http.get('/dashboard/ground/' + classNum).then(function (response) {
      self.ground.data = response.data;
      // console.log('get route ground_squirrel: ', self.ground);
    });
  }
  self.getNorthern = function (classNum) {
    $http.get('/dashboard/northern/' + classNum).then(function (response) {
      self.northern.data = response.data;
      // console.log('get route northern_red_oak: ', self.northern);
    });
  }
  self.getPaper = function (classNum) {
    $http.get('/dashboard/paper/' + classNum).then(function (response) {
      self.paper.data = response.data;
      // console.log('get route paper_birch: ', self.paper);
    });
  }
  self.getQuaking = function (classNum) {
    $http.get('/dashboard/quaking/' + classNum).then(function (response) {
      self.quaking.data = response.data;
      // console.log('get route quaking_aspen: ', self.quaking);
    });
  }
  self.getRuby = function (classNum) {
    $http.get('/dashboard/ruby/' + classNum).then(function (response) {
      self.ruby.data = response.data;
      // console.log('get route ruby_throated_hummingbird: ', self.ruby);
    });
  }

  self.getAllBur = function () {
    $http.get('/dashboard/allBur').then(function (response) {
      self.allBur = response.data;
      // console.log('all bur: ', self.allBur); 
    })
  }
  self.getAllBuckthorn = function () {
    $http.get('/dashboard/allBuckthorn').then(function (response) {
      self.allBuckthorn = response.data;
      // console.log('all buckthorn: ', self.allBuckthorn); 
    })
  }
  self.getAllMilkweed = function () {
    $http.get('/dashboard/allMilkweed').then(function (response) {
      self.allMilkweed = response.data;
      // console.log('all milkweed: ', self.allMilkweed); 
    })
  }
  self.getAllDark = function () {
    $http.get('/dashboard/allDark').then(function (response) {
      self.allDark = response.data;
      // console.log('all dark: ', self.allDark); 
    })
  }
  self.getAllEastern = function () {
    $http.get('/dashboard/allEastern').then(function (response) {
      self.allEastern = response.data;
      // console.log('all eastern: ', self.allEastern); 
    })
  }
  self.getAllGround = function () {
    $http.get('/dashboard/allGround').then(function (response) {
      self.allGround = response.data;
      // console.log('all ground: ', self.allGround); 
    })
  }
  self.getAllNorthern = function () {
    $http.get('/dashboard/allNorthern').then(function (response) {
      self.allNorthern = response.data;
      // console.log('all northern: ', self.allNorthern); 
    })
  }
  self.getAllPaper = function () {
    $http.get('/dashboard/allPaper').then(function (response) {
      self.allPaper = response.data;
      // console.log('all paper: ', self.allPaper); 
    })
  }
  self.getAllQuaking = function () {
    $http.get('/dashboard/allQuaking').then(function (response) {
      self.allQuaking = response.data;
      // console.log('all quaking: ', self.allQuaking); 
    })
  }
  self.getAllRuby = function () {
    $http.get('/dashboard/allRuby').then(function (response) {
      self.allRuby = response.data;
      // console.log('all ruby: ', self.allRuby); 
    })
  }

}]);