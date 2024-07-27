import { log } from "console";
import fs from "fs";

try{
    const data = fs.readFileSync("HW.txt", "utf8");

    const numLetters = (data.match(/[a-zA-Z]/g) || []).length;

    const numSpaces = (data.match(/ /g) || []).length;

    const numLines = (data.match(/\n/g) || []).length + 1;

    const reversedContent = data.split('').reverse().join('');

    const words = data.split(/\s+/);
    const everySecondWord = words.filter((_, index) => index % 2 !== 0);


    
    console.log(`Колтчество букв: ${numLetters}`);
    console.log(`Колтчество пробелов: ${numSpaces}`);
    console.log(`Колтчество рядков: ${numLines}`);
    console.log(`Перевернутый текст: ${reversedContent}`);
    console.log(`${everySecondWord}`);

} catch (err) {
    console.error(err);
}