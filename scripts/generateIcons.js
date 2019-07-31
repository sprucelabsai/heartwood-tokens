const fs = require('fs');
const path = require('path');

let icons = {
    asset: {
        icon: {}
    }
};
const iconDir = path.join(__dirname, '../assets/icons')
const destFile = path.join(__dirname, '../properties/asset/icon.json')

fs.readdir(iconDir, (err, files) => {
    if (err) {
        console.log(err)
    }

    files.forEach(file => {
        const fileKey = file.split('.').slice(0, -1).join('.').split('_').slice(1).join('-')
        const relPath = `assets/icons/${file}`;
        icons.asset.icon[fileKey] = {
            value: relPath
        }
    })

    fs.writeFile(destFile, JSON.stringify(icons, null, 2), err => {
        if (err) {
            throw err
        }
        console.log("Wrote to icons.json")
    })
})