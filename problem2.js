

import fs from 'fs';

// 1. Read the given file lipsum.txt

export function getData() {

    return new Promise((resolve, reject) => {

        fs.readFile('lipsum.txt', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                //console.log(data);
                resolve(data);
            }
        });
    })
}

export function converttoUpperCase(data) {

    let modifiedData = data.toUpperCase();

    return new Promise((resolve, reject) => {

        toWrite('uppercase.txt', modifiedData)
            .then(() => {
                return toAppend('filenames.txt', 'uppercase.txt ');
            }).then(() => {
                return toRead('uppercase.txt');
            }).then((data) => {
                resolve(data);
            })
    })
}

export function converttoLowerCase(data, cb) {

    let lowercaseData = data.toLowerCase().split(' ');
    let newString = lowercaseData.join("\n");

    return new Promise((resolve, reject) => {

        toWrite('lowercase.txt', newString)
            .then(() => {
                return toAppend('filenames.txt', 'lowercase.txt ');
            }).then(() => {
                return toRead('lowercase.txt');
            }).then((data) => {
                resolve(data);
            })
    })
}


export function toSort(data, cb) {

    let sortedData = data.split('\n').sort().join('\n');

    return new Promise((resolve, reject) => {

        toWrite('sorteddata.txt', sortedData)
            .then(() => {
                return toAppend('filenames.txt', 'sorteddata.txt');
            }).then(() => {
                return toRead('filenames.txt');
            }).then((data) => {
                resolve(data);
            })
    })
}

export function deleteFiles(data) {

    const array = data.split(' ');
    
    return new Promise((resolve, reject) => {
        let count = 0;

        for (let x of array) {
            fs.unlink(x, (err) => {
                if (err) {
                    reject(err);
                } else {
                    count++;
                    if (count == array.length) {
                        resolve("Files deletion completed");
                    }
                }
            });
        }
    });
}


function toWrite(filename, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, content, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        })
    })
}

function toAppend(filename, content) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filename, content, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        })
    })
}

function toRead(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
