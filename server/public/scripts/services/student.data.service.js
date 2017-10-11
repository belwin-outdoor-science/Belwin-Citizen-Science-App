myApp.service('StudentDataService', ['$http', function ($http) {
    console.log('StudentDataService loaded');

    var self = this;
    self.allData = {};
    var NUM_SITES = 3;
    self.questionsByOrganism = {
        questions: {}
    };
    //this array of images is sorted through in the student-view.html. Only one is displayed at a time.
    self.imageArray = [{
        organismName: 'bur_oak',
        file: 'assets/bur-oak.jpg'
    },
    {
        organismName: 'common_buckthorn',
        file: 'assets/common-buckthorn.jpg'
    },
    {
        organismName: 'common_milkweed',
        file: 'assets/common-milkweed.jpg'
    },
    {
        organismName: 'dark_eyed_junco',
        file: 'assets/dark-eyed-junco.jpg'
    },
    {
        organismName: 'eastern_bluebird',
        file: 'assets/eastern-bluebird.jpg'
    },
    {
        organismName: 'ground_squirrel',
        file: 'assets/ground-squirrel.jpg'
    },
    {
        organismName: 'paper_birch',
        file: 'assets/paper-birch.jpg'
    },
    {
        organismName: 'quaking_aspen',
        file: 'assets/quaking-aspen.jpg'
    },
    {
        organismName: 'northern_red_oak',
        file: 'assets/red-oak.jpg'
    },
    {
        organismName: 'ruby_throated_hummingbird',
        file: 'assets/ruby-throated-hummingbird.jpg'
    }
    ];

    function questionCreator() {
        for (var organism in self.allData) {
            questionArray = [];
            for (var question in self.allData[organism][0]) {
                var questionObj = {};
                if (question !== 'class' && question !== 'site') {
                    questionObj.property = question;
                    question = question.replace(/_/g, ' ');
                    question = question.charAt(0).toUpperCase() + question.slice(1);
                    questionObj.text = question;
                    questionArray.push(questionObj);
                }
            }
            self.questionsByOrganism.questions[organism] = questionArray;
        }
    }

    self.organismsArray = [];
    questionCreator();
    //self.representativeOrganisms = ['bur_oak', 'common_buckthorn', 'common_milkweed', 'ground_squirrel', 'eastern_bluebird', 'ruby_throated_hummingbird'];

    //getTableNames generates an array of table names for the organisms from the database.
    //self.getTableNames gets called when you click start
    function createOrganismsArray () {
        for (organism in self.allData) {
            self.organismsArray.push(organism);
        }
    }
self.useLocalStorageOrNewData = function (lastSession) {
    if (lastSession !== 'undefined') {
        self.allData = lastSession;
        console.log('self.allData in getTableNames function');
        console.log(self.allData);
        
    }
    
}

function createOrganismsArray() {

}



    self.getTableNames = function (lastSession) {
        $http.get('/data/table_names').then(function (response) {
            if (response.data) {
                response.data.forEach(function (tableNameObject) {
                    self.organismsArray.push(tableNameObject.table_name);
                    self.allData[tableNameObject.table_name] = [{}, {}, {}];
                });
                console.log('lastSession');
                console.log(lastSession);

                if (lastSession == 'undefined') {
                    self.getTableColumns();
                    console.log('getTableNames, lastSession = undefined');
                    
                } else {
                    self.allData = lastSession;
                    console.log('self.allData in getTableNames function');
                    console.log(self.allData);
                    questionCreator();
                }
            }
        }, function (err) {
            console.log('get table names error: ', err);
        });
    }
    //caled inside getTableNames because it uses the table names stored in self.organismsArray.
    self.getTableColumns = function () {
        $http.get('/data/columns').then(function (response) {
            if (response.data) {
                console.log('table columns get: ');
                console.log(response.data);

                processTableColumnsData(response.data);
            }
        }, function (err) {
            console.log('getTableColumns error: ', err);

        });
    }

    function processTableColumnsData(data) {
        //data = [{table_name: 'bur_oak', column_name = 'class'}, {table_name: 'bur_oak', column_name', 'breaking_leaf_buds'...]
        self.organismsArray.forEach(function (organism) { //organism = self.organismsArray[i]
            //{bur_oak: [{question: '' }, ]}
            data.forEach(function (tableColumnObject) { //object = data[i]
                //data = see comment on first line of this function
                if (tableColumnObject.table_name == organism) {
                    self.allData[organism].forEach(function (_, i) { // _ = self.allData[organism][i], i
                        //loops from i = 0 to i = 2 because there are three empty objects in each arrray.
                        //self.allData = { bur_oak: [{}, {}, {}], quaking_aspen: [{}, {}, {}] ... } three objects for three sites
                        if (tableColumnObject.column_name == 'site') {
                            //site: 1, 2, 3 for each
                            self.allData[organism][i].site = (i + 1).toString(10);
                        } else {
                            self.allData[organism][i][tableColumnObject.column_name] = '';
                        }
                    });
                }
            });
        });
        console.log('allData');
        console.log(self.allData);
        //
        questionCreator();
    }


    self.allData = {
        //plants
        bur_oak: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        common_buckthorn: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        northern_red_oak: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        common_milkweed: [{
            class: '',
            site: '1',
            initial_growth: '',
            leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            initial_growth: '',
            leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            initial_growth: '',
            leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        paper_birch: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        quaking_aspen: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        //mammals
        ground_squirrel: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            young_individuals: '',
            dead_individuals: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            young_individuals: '',
            dead_individuals: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            young_individuals: '',
            dead_individuals: '',
            notes: ''
        }
        ],
        eastern_bluebird: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        }
        ],
        dark_eyed_junco: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        }
        ],
        ruby_throated_hummingbird: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            insect_consumption: '',
            flower_visitation: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            insect_consumption: '',
            flower_visitation: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            insect_consumption: '',
            flower_visitation: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        }
        ]
    };
}]);