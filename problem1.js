import fs from 'fs';
import path from 'path';


//Create a directory of random JSON files

export function createDirectory() {

    const dirPath = path.join(process.cwd(), 'jsonFiles');

    return new Promise((resolve, reject) => {

        fs.mkdir(dirPath, { recursive: true }, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};


export function createFiles() {

    let path = '';

    return new Promise((resolve, reject) => {

        for (let i = 1; i <= 3; i++) {

            path = `jsonFiles/file${i}.json`;

            fs.writeFile(path, 'This is a json file', (err) => {

                if (err) {
                    reject(err);
                } else {

                    if (i == 3) {
                        resolve();
                    }
                }
            });
        }
    });
}


export function deleteFiles(cb) {

    let path = '';

    return new Promise((resolve, reject) => {


        for (let i = 1; i <= 3; i++) {

            path = `jsonFiles/file${i}.json`;

            fs.unlink(path, (err) => {
                if (err) {
                    reject(err);
                } else {
                    if(i==3){
                        resolve();
                    } 
                }
            });
        }
    });
}
