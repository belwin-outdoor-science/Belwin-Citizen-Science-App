var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.post('/bur_oak', function (req, res) {
    var newBurOak = req.body;
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO bur_oak (class, breaking_leaf_buds, leaves, increasing_leaf_size, colored_leaves, falling_leaves, flowers_or_flower_buds, open_flowers, pollen_release, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);',
                [newBurOak.class, newBurOak.breaking_leaf_buds, newBurOak.leaves, newBurOak.increasing_leaf_size, newBurOak.colored_leaves, newBurOak.falling_leaves, newBurOak.flowers_or_flower_buds, newBurOak.open_flowers, newBurOak.pollen_release, newBurOak.fruits, newBurOak.ripe_fruits, newBurOak.recent_fruit_or_seed_drop, newBurOak.notes]);
            done();
            if (err) {
                console.log('Error making bur_oak post query: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    });
});

router.post('/common_buckthorn', function (req, res) {
    var newBuckthorn = req.body;
    console.log('common_buckthorn router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO common_buckthorn (class, breaking_leaf_buds, leaves, increasing_leaf_size, colored_leaves, falling_leaves, flowers_or_flower_buds, open_flowers, pollen_release, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);', [newBuckthorn.class, newBuckthorn.breaking_leaf_buds, newBuckthorn.leaves, newBuckthorn.increasing_leaf_size, newBuckthorn.colored_leaves, newBuckthorn.falling_leaves, newBuckthorn.flowers_or_flower_buds, newBuckthorn.open_flowers, newBuckthorn.pollen_release, newBuckthorn.fruits, newBuckthorn.ripe_fruits, newBuckthorn.recent_fruit_or_seed_drop, newBuckthorn.notes]);
            done();
            if (err) {
                console.log('Error making common_buckthorn post query: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    });
});

router.post('/common_milkweed', function (req, res) {
    var common_milkweed = req.body;
    console.log('common_milkweed router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO common_milkweed (class, initial_growth, leaves, flowers_or_flower_buds, open_flowers, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);',
                [common_milkweed.class, common_milkweed.initial_growth, common_milkweed.leaves, common_milkweed.flowers_or_flower_buds, common_milkweed.open_flowers, common_milkweed.fruits, common_milkweed.ripe_fruits, common_milkweed.recent_fruit_or_seed_drop, common_milkweed.notes]);
            done();
            if (err) {
                console.log('Error making common_milkweed post query: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    });
});

router.post('/eastern_bluebird', function (req, res) {
    var newBluebird = req.body;
    console.log('newBluebird student router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO eastern_bluebird (active_individuals, feeding, fruit_seed_consumption, insect_consumption, calls_or_song, singing_individuals, territorial_individuals, courtship, mating, nest_building, occupied_nest, nestlings, fledged_young, dead_individuals, dead_nestlings_or_fledlings, individuals_at_feeding_station, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18);',
                [newBluebird.active_individuals, newBluebird.feeding, newBluebird.fruit_seed_consumption, newBluebird.insect_consumption, newBluebird.calls_or_song, newBluebird.singing_individuals, newBluebird.territorial_individuals, newBluebird.courtship, newBluebird.mating, newBluebird.nest_building, newBluebird.occupied_nest, newBluebird.nestlings, newBluebird.fledged_young, newBluebird.dead_individuals, newBluebird.dead_nestlings_or_fledlings, newBluebird.individuals_at_feeding_station, newBluebird.notes]);
            done();
            if (err) {
                console.log('Error making eastern_bluebird post query: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    });
});

router.post('/ground_squirrel', function (req, res) {
    var newGroundSquirrel = req.body;
    console.log('ground_squirrel student router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO ground_squirrel (class, active_individuals, feeding, young_individuals, dead_individuals, notes) VALUES ($1, $2, $3, $4, $5, $6);',
                [ground_squirrel.class, ground_squirrel.active_individuals, ground_squirrel.feeding, ground_squirrel.young_individuals, ground_squirrel.dead_individuals, ground_squirrel.notes]);
            done();
            if (err) {
                console.log('Error making ground_squirrel post query: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    });
});

router.post('/dark_eyed_junco', function (req, res) {
    var newJunco = req.body;
    console.log('dark_eyed_junco student router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO dark_eyed_junco (class, active_individuals, feeding, fruit_seed_consumption, insect_consumption, calls_or_song, singing_individuals, territorial_individuals, courtship, mating, nest_building, occupied_nest, nestlings, fledged_young, dead_individuals, dead_nestlings_or_fledlings, individuals_at_feeding_station, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18);',
                [dark_eyed_junco.class, dark_eyed_junco.active_individuals, dark_eyed_junco.feeding, dark_eyed_junco.fruit_seed_consumption, dark_eyed_junco.insect_consumption, dark_eyed_junco.calls_or_song, dark_eyed_junco.singing_individuals, dark_eyed_junco.territorial_individuals, dark_eyed_junco.courtship, dark_eyed_junco.mating, dark_eyed_junco.nest_building, dark_eyed_junco.occupied_nest, dark_eyed_junco.nestlings, dark_eyed_junco.fledged_young, dark_eyed_junco.dead_individuals, dark_eyed_junco.dead_nestlings_or_fledlings, dark_eyed_junco.individuals_at_feeding_station, dark_eyed_junco.notes]);
            done();
            if (err) {
                console.log('Error making dark_eyed_junco post query: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    });
});

router.post('/paper_birch', function (req, res) {
    var paper_birch = req.body;
    console.log('paper_birch router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO paper_birch (class, breaking_leaf_buds, leaves, increasing_leaf_size, colored_leaves, falling_leaves, flowers_or_flower_buds, open_flowers, pollen_release, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);',
                [paper_birch.class, paper_birch.breaking_leaf_buds, paper_birch.leaves, paper_birch.increasing_leaf_size, paper_birch.colored_leaves, paper_birch.falling_leaves, paper_birch.flowers_or_flower_buds, paper_birch.open_flowers, paper_birch.pollen_release, paper_birch.fruits, paper_birch.ripe_fruits, paper_birch.recent_fruit_or_seed_drop, paper_birch.notes]);
            done();
            if (err) {
                console.log('Error making paper_birch post query: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    });
});

router.post('/quaking_aspen', function (req, res) {
    var quaking_aspen = req.body;
    console.log('quaking_aspen router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO quaking_aspen (class, breaking_leaf_buds,leaves, increasing_leaf_size, colored_leaves, falling_leaves, flowers_or_flower_buds, open_flowers, pollen_release, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);',
                [quaking_aspen.breaking_leaf_buds, quaking_aspen.leaves, quaking_aspen.increasing_leaf_size, quaking_aspen.colored_leaves, quaking_aspen.falling_leaves, quaking_aspen.flowers_or_flower_buds, quaking_aspen.open_flowers, quaking_aspen.pollen_release, quaking_aspen.fruits, quaking_aspen.ripe_fruits, quaking_aspen.recent_fruit_or_seed_drop, quaking_aspen.notes]);
            done();
            if (err) {
                console.log('Error making quaking_aspen post query: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    });
});


module.exports = router;