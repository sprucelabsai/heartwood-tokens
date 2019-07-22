/**
 * Get all the icons in the assets/icons folder to generate the json for them
 */

const fs = require('fs');
const path = require('path');
const iconDir = '/assets/icons/';

const diretoryTreeToObj = (dir, done) => {
    const dirPath = path.join(__dirname, iconDir)
    let results = [];

    fs.readdir(dirPath, function(err, list) {
        if (err)
            return done(err);

        let pending = list.length;

        if (!pending)
            return done(null, {name: path.basename(dir), type: 'folder', children: results});

        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    diretoryTreeToObj(file, function(err, res) {
                        results.push({
                            name: path.basename(file),
                            type: 'folder',
                            children: res
                        });
                        if (!--pending)
                            done(null, results);
                    });
                }
                else {
                    results.push({
                        name: path.basename(file).split('.')[0]
                    });
                    if (!--pending)
                        done(null, results);
                }
            });
        });
    });
};

const arrayToJson = results => {
    let result = {
        "asset": {
            "icon": {}
        }
    }

    results.forEach(icon => {
        if (!result.asset.icon[icon.name]) {
            result.asset.icon[icon.name] = { "value": "assets/icons/" + icon.name + ".svg" }
        }
    })

    return JSON.stringify(result)
}

const iconArray = diretoryTreeToObj(iconDir, (err, res) => {
    if (err) {
        console.log(err)
    };

    const resultsObj = arrayToJson(res)
    console.log(resultsObj)
    fs.writeFileSync('./properties/assets/icons.json', resultsObj)
})