import fs from 'fs';

import { getData, converttoUpperCase, converttoLowerCase, toSort, deleteFiles } from "../problem2.js";


let hii = "This is my first lipsum file";

fs.writeFile('lipsum.txt', hii, (err) => {
    if (err) {
        console.log(err);
    }
});

getData()

    .then((response) => {
        return converttoUpperCase(response)})

    .then((uppercaseData) => {
        return converttoLowerCase(uppercaseData)})

    .then((lowercaseData) =>{
    return toSort(lowercaseData)})

    .then((sortedData) => {
      return  deleteFiles(sortedData)})

    .then((message) => console.log(message))
    .catch((err) => { console.log('Error is : ' + err) })
