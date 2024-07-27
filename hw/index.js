//1 new URL(input[, base]) - Создает новый URLобъект путем анализа inputотносительно base
const myURL = new URL('/foo', 'https://example.org/');

//2 url.hash - Получает и задает фрагментную часть URL-адреса.
const myURL1 = new URL('https://example.org/foo#bar');
console.log(myURL1.hash);

//3 url.host - Получает и задает хостовую часть URL-адреса.
const myURL2 = new URL('https://example.org:81/foo');
console.log(myURL2.host);

//4 url.hostname - Получает и задает часть имени хоста URL. 
const myURL3 = new URL('https://example.org:81/foo');
console.log(myURL3.hostname);

//5 url.href - Получает и задает сериализованный URL.
const myURL4 = new URL('https://example.org/foo');
console.log(myURL4.href);

//6 url.origin - Получает сериализацию источника URL-адреса, доступную только для чтения.
const myURL5 = new URL('https://example.org/foo/bar?baz');
console.log(myURL5.origin);

//7 url.password - Получает и задает часть пароля URL-адреса.
const myURL6 = new URL('https://abc:xyz@example.com');
console.log(myURL6.password);

//8 url.pathname - Получает и задает часть пути URL-адреса.
const myURL7 = new URL('https://example.org/abc/xyz?123');
console.log(myURL7.pathname);

//9 url.port - Получает и задает часть порта URL-адреса.
const myURL8 = new URL('https://example.org:8888');
console.log(myURL8.port);

//10 url.protocol - Получает и задает протокольную часть URL-адреса.
const myURL9 = new URL('https://example.org');
console.log(myURL9.protocol);


/////////////////////////
console.log('///////////');
//////////////////////////

//1 path.basename(path[, suffix]) - Метод path.basename()возвращает последнюю часть a path, аналогично basenameкоманде Unix.
path.basename('/foo/bar/baz/asdf/quux.html');

//2 path.delimiter - Предоставляет разделитель пути, специфичный для платформы
console.log(process.env.PATH); 

//3 path.dirname(path) - Метод path.dirname()возвращает имя каталога path, аналогично dirnameкоманде Unix.
path.dirname('/foo/bar/baz/asdf/quux');

//4 path.extname(path) - Метод path.extname()возвращает расширение path, от последнего вхождения символа
path.extname('index.html');

//5 path.format(pathObject) - Метод path.format()возвращает строку пути из объекта. Это противоположно path.parse().
path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
});

//6 path.matchesGlob(path, pattern) - Метод path.matchesGlob()определяет, pathсоответствует ли pattern.
path.matchesGlob('/foo/bar', '/foo/*'); // true
path.matchesGlob('/foo/bar*', 'foo/bird'); // false 

//7 path.isAbsolute(path) - Метод path.isAbsolute()определяет, pathявляется ли путь абсолютным.
path.isAbsolute('/foo/bar'); // true
path.isAbsolute('/baz/..');  // true
path.isAbsolute('qux/');     // false
path.isAbsolute('.');        // false 

//8 path.join([...paths]) - Метод path.join()объединяет все заданные pathсегменты, используя в качестве разделителя специфичный для платформы разделитель,
// а затем нормализует полученный путь.
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');

//9 path.normalize(path) - Метод path.normalize()нормализует заданные path, разрешая '..'и '.'сегменты.
path.normalize('/foo/bar//baz/asdf/quux/..');

//10 path.parse(path) - Метод path.parse()возвращает объект, свойства которого представляют значимые элементы path.
path.parse('/home/user/dir/file.txt');