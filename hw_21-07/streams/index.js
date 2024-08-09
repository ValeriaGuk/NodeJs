const fs = require("fs");

// const writableStream = fs.createWriteStream("data.pdf");
// let i = 0;
// while (i < 1000) {
//     writableStream.write("Hello, world!\n");
//     writableStream.write(i.toString());
//     i++;
// }

// writableStream.on("error", (err) => {
//     console.error(err);
// });
// writableStream.on("finish", () => {
//     console.log("Данны записаны в файл");
// });

const gzip = zlib.createGzip();
const input = fs.createReadStream('data.pdf');
const output = fs.createWriteStream('output.gz');

input.pipe(gzip).pipe(output);

input.on('error', (err) => {
    console.error('Ошибка во время чтения файла:', err);
});

gzip.on('error', (err) => {
    console.error('Ошибка во время чтения файла:', err);
});

output.on('error', (err) => {
    console.error('Ошибка во время чтения файла:', err);
});

output.on('finish', () => {
    console.log('Сжатие файлов завершена');
});