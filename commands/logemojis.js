"use strict";
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const BaseCommand = require('../BaseCommand.js');

module.exports = class TestCommand extends BaseCommand {
    constructor(debug=false) {
        super(debug);
    }

    run(...args) {

    }

    logemojis(){
        let db = new sqlite3.Database(`./data/emojis.db`);
        db.all("SELECT * FROM emoji", (err, data) => {
            fs.writeFileSync("./data/emojilog.json", JSON.stringify(data));
            //console.log(data)
        });
    }

    backupemojis() {
        let db = new sqlite3.Database(`./data/emojis.db`);
        db.all("SELECT * FROM emoji", (err, data) => {
            fs.writeFileSync("./data/emojilog.json", JSON.stringify(data));
            //console.log(data)
        });
    }
}