//1//
//1.setDefaultEncoding используется для установки кодировки по умолчанию для всех будущих операций записи на поток. 
//Применяется для writable streams (потоков записи).

//2.writableLength возвращает количество байтов в буфере, которые ожидают записи в поток. 
//Это полезно для мониторинга состояния потока и управления его производительностью.

//3.writableCorked показывает, сколько раз был вызван метод cork без соответствующего вызова uncork. 
//Если это значение больше нуля, то поток "закупорен" и данные временно буферизуются.

//4.writableEnded указывает, был ли вызван метод end для потока записи. Оно становится true, когда поток завершен.

//5.destroyed указывает, был ли поток уничтожен. Оно становится true, когда поток был уничтожен, что обычно означает, 
//что дальнейшие операции записи или чтения невозможны.


//2//

const path = require("path");
const fs = require("fs");
const { exit } = require("process");
const path_to_dir = path.resolve(__dirname, "logs");
const name_dir = "logs";
const path_to_file = path.resolve(__dirname, name_dir, "data.pdf")


//Проверили что существует файл, и если не существует то создаст//
// fs.exists(path.join(name_dir), (exists) => {
//     if (exists) {
//         console.log(`Папка ${name_dir} существует`);
//     } else {
//         console.log(`Папка ${name_dir} не существует`);
//         fs.mkdir(path.join(name_dir), (err) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log("Папка создана");
//             }
//         });
//     }
//     fs.writeFile(path_to_file, "This is my data", (err) => {
//         console.log(err);
//     })
// });


//Читает файл
fs.readFile(path_to_file, "utf8", (data, err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


