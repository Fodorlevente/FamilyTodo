# Family Todo 


Tervünk egy a legmodernebb technológiákra épülő webes családi TODO alkalmazás lefejlesztése MVC architektúrában.
A megvalósítás több részből áll, React alapú frontend technológiát alkalmazunk a minél letisztultabb és felhasználóbarátabb reszponzív megjelenítés érdekében, maximalizálva a felhasználói élményt! A backenden történő üzleti logika egy Node.js szerveren kerül megvalósításra, hogy elkerüljük a különböző nyelvek közötti konverziós hibákat, és mind a front-end, mind a back-end JavaScript nyelven legyen interpretálva. A tárolt adatokat egy noSQL adatbázisban tárolja majd a rendszer (MongoDB, CouchDB, FireBaseDB stb..). Az elkészült megoldás terveink szerint Docker konténerben fog futni. A teljes fejlesztési ciklus visszakövethető és monitorozható lesz GitHub verziókezelő rendszerben, ahol minden egyes pull-requestnél code-review lesz, és a teljes csapatnak 'approve'-olnia kell a bejövő változtatást. Nem megfelelő kód esetén a pull-request 'needs-work' státuszba kerül. Ha bármilyen hiba keletkezik, arról készül egy 'Bugfix' branch, az adott hiba elhárítására. A csapatban meglesznek a különböző feladatkörök, van aki a front-end 'User-experience'-ért felelős, van aki az adatbázisért felelős, mindenkinek lesz egy bizonyos szerepköre, és a különböző feladatokat lehet párhuzamosítani, így nem blokkolják be egymást a fejlesztés időtartalma alatt.


Developers:
[Fodor Levente] 

[Bohnert Márton] 

[Sörös Csaba]

### Tech

The app uses a number of open source projects to work properly:

* [React.JS] - HTML enhanced for web apps!
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]



### Installation

App requires [Node.js](https://nodejs.org/) latest to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd familyTODO
$ npm install -d
```

### Todos

 - Write MORE Tests
 - Add multiply family use

License
----

MIT




[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   
   [Fodor Levente]: <https://github.com/Fodorlevente>
   [Bohnert Márton]: <https://github.com/n0b4d11>
   [Sörös Csaba]:<https://github.com/pikk7>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [React.JS]: <https://reactstrap.github.io/>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
