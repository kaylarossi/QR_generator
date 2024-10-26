
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

//Use the inquirer npm package to get user input.
inquirer
    .prompt([
        {"message": "Type in your URL: ",
        "name": "URL"
    }])
    .then((answers)=>{
        const url = answers.URL;
        //Use the qr-image npm package to turn the user entered URL into a QR code image.
        var qr_svg = qr.image(url, {type: 'png'});
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));
        //Create a txt file to save the user input using the native fs node module.
        fs.writeFile('URL.txt', url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })