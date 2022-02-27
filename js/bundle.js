/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/addPeople.js":
/*!*********************************!*\
  !*** ./js/modules/addPeople.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPeople": () => (/* binding */ addPeople)
/* harmony export */ });
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ "./js/modules/pagination.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./js/modules/search.js");
/* harmony import */ var _viewDopData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewDopData */ "./js/modules/viewDopData.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getData */ "./js/modules/getData.js");





const  addBtn = document.querySelector('.btnAdd'),
       dannie = document.querySelector('.dannies');

       class PeopleDann{
            constructor (id,firstName,lastName,email,phone,streetAdress,city,state,zip,description,...classes){
                    this.id = id,
                    this.firstName = firstName,
                    this.lastName = lastName,
                    this.email = email,
                    this.phone = phone,
                    this.streetAdress = streetAdress,
                    this.city = city,
                    this.state = state,
                    this.zip = zip,
                    this.description = description,
                    this.classes = classes
            }
            render(){
                const item = document.createElement('div');
                if(this.classes.length === 0){
                    item.classList.add('item');
                }else{
                    this.classes.forEach(classNames => {item.classList.add(classNames)})
                }

                item.innerHTML = `
                            <div class="id">${this.id}</div>
                            <div class="firstName">${this.firstName}</div>
                            <div class="lastName">${this.lastName}</div>
                            <div class="email">${this.email}</div>
                            <div class="phone">${this.phone}</div>
                            
                            <div class="dopData">
                                <div class="dop">Выбран пользователь ${this.firstName} ${this.lastName}</div>
                                <div class="dop">Описание:
                                    <p>${this.description}</p>
                                </div>
                                <div class="dop"> Адресс проживания:${this.streetAdress}</div>
                                <div class="dop">Город: ${this.city}</div>
                                <div class="dop">Провинция/штат: ${this.state}</div>
                                <div class="dop">Индекс: ${this.zip}</div>
                            </div>

                `;       
                dannie.append(item);

        }

    }
function addPeople (){
    // добавление человека
        function addFormsPeople (){
            //pagination (Array.from(document.querySelectorAll('.item')));
            const addPeopl = document.createElement('div');
            addPeopl.classList.add('noactiv');

            addPeopl.innerHTML = `  
                                    <input type="text" class="firstName" placeholder="Введите имя">
                                    <input type="text" class="lastName" placeholder="Введите фамилию">
                                    <input type="text" class="email" placeholder="Введите email">
                                    <input type="text" class="phone" placeholder="Введите телефон">
                                    <input type="text" class="description" placeholder="Введите описание">
                                    <input type="text" class="adress" placeholder="Введите адресс">
                                    <input type="text" class="city" placeholder="Введите город">
                                    <input type="text" class="state" placeholder="Введите штат">
                                    <input type="text" class="index" placeholder="Введите почтовый индекс">
                                    `;
            document.querySelector('.header').before(addPeopl);

            let buttons = document.createElement('button');
            buttons.style.cssText = `width: 44.8%;`;
            buttons.classList.add('addPeoplenoActiv');
            buttons.textContent = `Добавить человека`;
            addPeopl.append(buttons);
            buttons.disabled = true;     
            
            // активность кнопки "Добавить"
            
            function validates(){   
                let inputs = [].slice.call(addPeopl.querySelectorAll('input[type="text"]'));
                
                inputs.forEach(el=>{
                    el.addEventListener('input',checkInputs);
                })
                function checkInputs(){
                    let empty = inputs.filter(el=>{
                        return  el.value.trim() === '';
                    }).length;
                    //buttons.disabled = empty !== 0;
                    if(empty == 0){
                        buttons.disabled = 0;
                        buttons.classList.remove('addPeoplenoActiv');
                        buttons.addEventListener('mouseover',()=>{
                            buttons.classList.add('hover');
                        });
                        buttons.addEventListener('mouseout',()=>{
                            buttons.classList.remove('hover');
                        });
                    }
                    
                }
            }
           validates();
            buttons.addEventListener('click',()=>{
                let items = Array.from(document.querySelectorAll('.item'));
                let lastIndex = 0;
                items.forEach(item=>{
                    item.childNodes.forEach(div=>{
                        if(div.className == "id"  ){
                            lastIndex = Math.max(lastIndex,+div.innerText);
                        }
                    })
                
                })  
                const id = lastIndex +1,
                    firstName = addPeopl.querySelector('.firstName').value,
                    lastName = addPeopl.querySelector('.lastName').value,
                    email = addPeopl.querySelector('.email').value,
                    phone = addPeopl.querySelector('.phone').value, 
                    description = addPeopl.querySelector('.description').value,
                    adress = addPeopl.querySelector('.adress').value,
                    city = addPeopl.querySelector('.city').value,
                    state = addPeopl.querySelector('.state').value,
                    index = addPeopl.querySelector('.index').value;
                
                    new PeopleDann(id,
                        firstName,
                        lastName,
                        email,
                        phone,
                        adress,
                        city,
                        state,
                        index,
                        description,
                        'item').render();

                        (0,_viewDopData__WEBPACK_IMPORTED_MODULE_2__.changed)();
                        Array.from(addPeopl.querySelectorAll('input[type="text"]')).forEach( item =>{
                            item.value = '';
                        })
                        //filtered(Array.from(document.querySelectorAll('.item')));
                        ;(0,_search__WEBPACK_IMPORTED_MODULE_1__.search)();
                        document.querySelector('.indic').innerHTML='';
                        (0,_pagination__WEBPACK_IMPORTED_MODULE_0__.paginationA) (Array.from(document.querySelectorAll('.item'))); 
                        (0,_getData__WEBPACK_IMPORTED_MODULE_3__.backgroundColorItem)(Array.from(document.querySelectorAll('.item')));
                        buttons.disabled = true;
                        if(buttons.classList.contains('hover')){
                            buttons.classList.remove('hover'); 
                            buttons.classList.add('addPeoplenoActiv');
                        }
            });
            
            addBtn.addEventListener('click',()=>{
                if(addPeopl.classList.contains('noactiv')){
                    addPeopl.classList.remove('noactiv');
                    addPeopl.classList.add('addforms');
                }else{
                    addPeopl.classList.remove('addforms');
                    addPeopl.classList.add('noactiv');
                }
            })

    }
    addFormsPeople ();
}




/***/ }),

/***/ "./js/modules/getData.js":
/*!*******************************!*\
  !*** ./js/modules/getData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateA": () => (/* binding */ getDateA),
/* harmony export */   "backgroundColorItem": () => (/* binding */ backgroundColorItem)
/* harmony export */ });
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ "./js/modules/pagination.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./js/modules/search.js");
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sorting */ "./js/modules/sorting.js");
/* harmony import */ var _addPeople__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addPeople */ "./js/modules/addPeople.js");
/* harmony import */ var _viewDopData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewDopData */ "./js/modules/viewDopData.js");






const  dannie = document.querySelector('.dannies'),
        wrap = document.querySelector('.wrap'),
        dop = document.querySelector('.dop');
function backgroundColorItem(item){
    item.forEach((elements,i)=>{
        if(i % 2 == 0){
            elements.style.background = `#87CEEB`;
        }else{
            elements.style.background = `#ADD8E6`;
        }
    })
} 

function getDateA(types){
// создание класса для персонажа
    class PeopleDann{
        constructor (id,firstName,lastName,email,phone,streetAdress,city,state,zip,description,...classes){
                this.id = id,
                this.firstName = firstName,
                this.lastName = lastName,
                this.email = email,
                this.phone = phone,
                this.streetAdress = streetAdress,
                this.city = city,
                this.state = state,
                this.zip = zip,
                this.description = description,
                this.classes = classes
        }
        render(){
            const item = document.createElement('div');
            if(this.classes.length === 0){
                item.classList.add('item');
            }else{
                this.classes.forEach(classNames => {item.classList.add(classNames)})
            }

            item.innerHTML = `
                        <div class="id">${this.id}</div>
                        <div class="firstName">${this.firstName}</div>
                        <div class="lastName">${this.lastName}</div>
                        <div class="email">${this.email}</div>
                        <div class="phone">${this.phone}</div>
                        
                        <div class="dopData">
                            <div class="dop">Выбран пользователь: ${this.firstName} ${this.lastName}</div>
                            <p> <div class="dop">
                                <p> Описание: <br> ${this.description}</p>
                            </div>
                            </p>
                            <div class="dop"> Адресс проживания: ${this.streetAdress}</div>
                            <div class="dop">Город: ${this.city}</div>
                            <div class="dop">Провинция/штат: ${this.state}</div>
                            <div class="dop">Индекс: ${this.zip}</div>
                        </div>

            `;       
             dannie.append(item);

       }

    }


    // получение данных с сервера и добавление данных в таблицу
    const getData = async (type)=>{
        const miniDataSet =
			'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
		const bigDataSet =
			'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
		let url = '';

		if (type === 'min') {
			url = miniDataSet;
		} else if (type === 'big') {
			url = bigDataSet;
		}
        const getResourse = async (url) => {
            const res = await fetch(url);

            const reader = res.body.getReader();
            const contentLength =  +res.headers.get('Content-Length');

            let receivedLength = 0;   
            let chunks = [];
            let imgLoad = document.createElement('img');
            imgLoad.src = 'img/spinner.svg';
            imgLoad.style.cssText = `
                                    width:200px;
                                    height:200px;
                                    margin-top:10%;
                                    margin-left:40%;
                                    margin-right:40%;
                                    `
            dannie.prepend(imgLoad);

            while(true) {
                const {done, value} = await reader.read();
            
                if (done) {
                    dannie.removeChild(imgLoad);
                break;
                }
                
                chunks.push(value);
                receivedLength += value.length;
            }

            if(!res.ok){
                throw new Error(`Ошибка ${res.status}`)
            }
            let chunksAll = new Uint8Array(receivedLength);
                let position = 0;
                for(let chunk of chunks) {
                    chunksAll.set(chunk, position);
                    position += chunk.length;
                }
                let result = new TextDecoder("utf-8").decode(chunksAll);

            let commits = JSON.parse(result);
            return commits;
            
        }   
        const dannies = async (url) => {
            await getResourse(url)
                        .then(data => {
                            data.forEach(item=>{
                                new PeopleDann(item.id,
                                               item.firstName,
                                               item.lastName,
                                               item.email,
                                               item.phone,
                                               item.address.streetAddress,
                                               item.address.city,
                                               item.address.state,
                                               item.address.zip,
                                               item.description,
                                               'item').render();
                                })
                            return dannie;
                        })
                        .then(dannie => {
                            let item = Array.from(document.querySelectorAll('.item'));
                            backgroundColorItem(item);
                            (0,_pagination__WEBPACK_IMPORTED_MODULE_0__.paginationA)();
                            (0,_search__WEBPACK_IMPORTED_MODULE_1__.search)();
                            (0,_sorting__WEBPACK_IMPORTED_MODULE_2__.sortingaA)();
                            (0,_addPeople__WEBPACK_IMPORTED_MODULE_3__.addPeople)();  
                            (0,_viewDopData__WEBPACK_IMPORTED_MODULE_4__.changed)();
                        }); 
        }
    
        const header = document.createElement('div');
        header.innerHTML = `
                    <div class="items">
                        <div class="id">id</div>
                        <div class="firstName">Имя</div>
                        <div class="lastName">Фамилия</div>
                        <div class="email">email</div>
                        <div class="phone">телефон</div>
                    </div>
        `;
        header.classList.add('header');
        wrap.prepend(header);
        await dannies(url);

    }
    getData(types);
}



/***/ }),

/***/ "./js/modules/pagination.js":
/*!**********************************!*\
  !*** ./js/modules/pagination.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paginationA": () => (/* binding */ paginationA)
/* harmony export */ });
function paginationA(){

    const dannie = document.querySelector('.dannies'),
          inner= document.querySelector('.inner_dans'),
          date = document.querySelector('.date');

        // пагинация для страничного режима
        function pagination (items){
                let n = 0;
                if(items.length < 50){
                    return;
                }else{
                    n = 50;
                }
            const quantityElemStr = n, // кол-во элементов на странице
                heightOne = +window.getComputedStyle(items[1]).height.match(/\d/g).join(''),  // ширина одного блока
                lenght = Math.ceil(items.length/quantityElemStr);   // сколько страниц  мы хотим видеть;  


                date.style.height =  `${(heightOne + 14) * quantityElemStr + 300}px`;
                inner.style.height = `${(heightOne + 15) * quantityElemStr}px`,
                dannie.style.height = 100 * lenght + '%';
                inner.style.overflow = 'hidden';

                let height= window.getComputedStyle(inner).height;

            let index = 1;
            let offset = 0;

            const indicators = document.createElement('ol');
            let square = [];

            items.forEach(itemElement=>{
                itemElement.style.height = `${heightOne}px`;
            })

            indicators.classList.add('indicators_carousel');
            indicators.style.cssText = `
                                        padding-inline-start: 0px;
                                        bottom:0%;
                                        left:0;
                                        z-index:15;
                                        display:flex;
                                        justify-content:left;
                                        margin-top:10px;
                                        list-style:none;
            `;
            document.querySelector('.indic').append(indicators);
            for(let i = 0; i < lenght; i++){
                const dot = document.createElement('li');
                dot.classList.add('dot');
                dot.setAttribute('data-slide-to',i+1);
                dot.style.cssText=`
                                    box-sizing:content-box;
                                    flex: 0 1 auto;
                                    width:30px;
                                    height:30px;
                                    margin: 0 3px;
                                    cursor:pointer;
                                    background-color:#000000;
                                    background-clip: padding-box;
                                    opacity: 0.5;
                                    color:#fff;
                                    text-align:center;
                                    
                `;
                if(i==0){
                    dot.style.opacity = 1;
                }               
                dot.innerHTML = `<div data-slide-to="${i+1}" class="textNumber">${i+1}</div>`
                indicators.append(dot);
                square.push(dot);

            }

            function dotActiv (){
                square.forEach(elem => {
                    elem.style.opacity = '0.5';
                    square[index-1].style.opacity = '1';
                    
                });
            }   

            square.forEach(elem =>{
                elem.addEventListener('click',(e)=>{
                    const slideTo = e.target.getAttribute('data-slide-to');
                    index=slideTo;
                    offset = +height.slice(0,height.length-2)*(slideTo-1);
                    dannie.style.transform = `translateY(-${offset}px)`;
                    dotActiv();
                })
            })
        }

        pagination(Array.from(document.querySelectorAll('.item')));
}



/***/ }),

/***/ "./js/modules/search.js":
/*!******************************!*\
  !*** ./js/modules/search.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ "./js/modules/pagination.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ "./js/modules/getData.js");
//const pagination = require('./pagination');



    function search(){      
            const dop = document.querySelector('.dop');

            //поиск по содержимому (фильтрация)
            function filtered (item){
                const tabl = document.querySelector('.dannies');
                const btn = document.querySelector('.btn2'),
                    inp = document.querySelector('.inp');
                let masSearch = [],
                    masAllItem = item;
                let func = ()=>{
                    let inpValue = inp.value;
                    let regexp = RegExp(inpValue, "gi");
                    masAllItem.forEach(item=>{
                                item.childNodes.forEach(divs=>{
                                    if(divs.nodeName !== "#text"){
                                        if(inpValue == divs.innerText.match(regexp)){
                                            masSearch.push(item); 
                                        }
                                        else{
                                            try{
                                            tabl.removeChild(item); 
                                            }
                                            catch(err){
                                            
                                            }
                                        }
                                    }
                                })
                            })
                        if(inpValue == '' || inpValue == null){

                            let promise = new Promise((resolve)=>{
                                masAllItem.sort((a,b)=>{
                                    let idA = a.querySelector('.id').innerText;
                                    let idB = b.querySelector('.id').innerText;
                                    return idA - idB;
                               })
                               resolve( masAllItem);
                            })
                            promise.then( masAllItem =>{
                                ;(0,_getData__WEBPACK_IMPORTED_MODULE_1__.backgroundColorItem)(masAllItem);
                                tabl.append(...masAllItem);
                            })  

                            tabl.append(...masAllItem);
                            try{
                                document.querySelector('.indic').innerHTML='';
                                (0,_pagination__WEBPACK_IMPORTED_MODULE_0__.paginationA) (masAllItem);
                            }catch{
                                (0,_pagination__WEBPACK_IMPORTED_MODULE_0__.paginationA) (masAllItem);
                            }
                        }
                        //удаляем повторяющиеся элементы в массиве т.к. элементы повторяются
                        // если есть несколько вхождений в строку несколько раз в разных блоках
                        masSearch = masSearch.filter((item, index) => {
                        return masSearch.indexOf(item) === index;
                        });
                        (0,_getData__WEBPACK_IMPORTED_MODULE_1__.backgroundColorItem)(masSearch);
                        tabl.append(...masSearch);

                    if(masSearch.length !==0 ){
                        try{
                            document.querySelector('.indic').innerHTML='';
                            (0,_pagination__WEBPACK_IMPORTED_MODULE_0__.paginationA) (Array.from(document.querySelectorAll('.item')));
                        }catch{
                            (0,_pagination__WEBPACK_IMPORTED_MODULE_0__.paginationA) (Array.from(document.querySelectorAll('.item')));
                        } 
                    }   
                }
                // btn.removeEventListener('click',func);
                btn.addEventListener('click',func);
            }    

        filtered (Array.from(document.querySelectorAll('.item')));     
    }



/***/ }),

/***/ "./js/modules/sorting.js":
/*!*******************************!*\
  !*** ./js/modules/sorting.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortingaA": () => (/* binding */ sortingaA)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./js/modules/getData.js");

function sortingaA(){

    const dannie = document.querySelector('.dannies');


// сортировка таблицы по значениям в столбцах с добавлением стрелок
    let sortingClass = 0;

    function sorting (){ 
            const header = document.querySelector('.items').childNodes;
            const head = [];
            header.forEach(item =>{
                if(item.nodeName !== "#text" ){
                    head.push(item);
                }
            })
            
                head.forEach(item => {
                        
                        item.addEventListener('click',(e)=>{
                        
                            const items =  Array.from(document.querySelectorAll('.item'));
                            const mas = [];
                            let parent = items[0].parentNode;
                            for(let i = 0; i< items.length; i++){
                                mas.push(parent.removeChild(items[i]));
                            }
                            removeclass(); 
                            let up = document.createElement('img');
                                up.classList.add('img');
                                up.style.cssText = `padding: 0px 2px;`
                                item.append(up);
                                up.setAttribute('src','img/0.gif');

                            if(sortingClass !== item.className){
                                
                                mas.sort(function(a,b){
                                    let textA = a.querySelector(`.${item.className}`).innerText;
                                    let textB = b.querySelector(`.${item.className}`).innerText;
                                    if(item.className === 'id'){
                                        return textA -textB; 
                                    }else{
                                        if(textA < textB){
                                            return -1;
                                        }
                                        if(textA > textB){
                                            return 1;
                                        }
                                        return 0;
                                    }
                                    
                                });

                                dannie.append(...mas);
                                (0,_getData__WEBPACK_IMPORTED_MODULE_0__.backgroundColorItem)(mas);
                                up.setAttribute('src','img/0.gif');
                                sortingClass = item.className;
                                
                            }else{

                                mas.sort(function(a,b){
                                    let textA = a.querySelector(`.${item.className}`).innerText;
                                    let textB = b.querySelector(`.${item.className}`).innerText;
                                    if(item.className === 'id'){
                                        return textB -textA; 
                                    }else{
                                        if(textB < textA){
                                            return -1;
                                        }
                                        if(textB > textA){
                                            return 1;
                                        }
                                        return 0;
                                    }
                                    
                                });
                                dannie.append(...mas);
                                (0,_getData__WEBPACK_IMPORTED_MODULE_0__.backgroundColorItem)(mas);
                                up.setAttribute('src','img/1.gif');
                                sortingClass = 0;   
                            }
                            
                                
                        })  
                }) 
            function removeclass(){
                head.forEach(item => {
                    if(item.childNodes[1] != null){
                        if(item.childNodes[1].nodeName === "IMG"){
                            item.removeChild(item.childNodes[1]);
                        }
                    }
                });
            }

    }
    sorting ();

}

//module.exports = sortingaA;



/***/ }),

/***/ "./js/modules/viewDopData.js":
/*!***********************************!*\
  !*** ./js/modules/viewDopData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changed": () => (/* binding */ changed)
/* harmony export */ });
 const dop = document.querySelector('.dop');   
    // высвечивание доп данных строки таблицы
    function changed (){
        let ind = 0;
        let items = Array.from(document.querySelectorAll('.item'));
        items.forEach((item,index)=>{
            item.addEventListener('click',(e)=>{
                item.classList.remove("activPeople"); 
                let dopDate = item.querySelector('.dopData');
                dop.innerHTML = dopDate.innerHTML;
                if( ind != index){
                    items.forEach(item1=>{
                        item1.classList.remove("activPeople");
                        item.classList.add("activPeople"); 
                    });
                    ind = index;
                    if(!dop.classList.contains("activ")){
                        dop.classList.remove("noactiv");
                        dop.classList.add("activ");

                        item.classList.add("activPeople");
                    }
                }else{
                    if(dop.classList.contains("activ")){
                        dop.classList.remove("activ");
                        dop.classList.add("noactiv");

                        item.classList.remove("activPeople");
                    }else{
                        dop.classList.remove("noactiv");
                        dop.classList.add("activ");

                        item.classList.add("activPeople");
                    }
                }
                
            })
        })
    } 
    


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getData */ "./js/modules/getData.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ "./js/modules/search.js");

 
 

window.addEventListener('DOMContentLoaded',()=>{
    const  btnMinData = document.querySelector('.btn'),
          dannie = document.querySelector('.dannies'),
          wrap = document.querySelector('.wrap'),
          btnBigData = document.querySelector('.btnBigData');


    (0,_modules_search__WEBPACK_IMPORTED_MODULE_1__.search)();


    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
      
        element.addEventListener('mouseover',()=>{
          element.classList.add('hover');
        });
        element.addEventListener('mouseout',()=>{
          element.classList.remove('hover');
        });
    });


    function clearData(){
          wrap.innerHTML='';
          dannie.innerHTML='';
          document.querySelector('.indic').innerHTML='';
    }
    function disabled(){
      btnBigData.disabled = true;
      btnMinData.disabled = true;
      btnMinData.classList.add('noactivBtn');
      btnBigData.classList.add('noactivBtn');
    }
    let type = 0;
    btnMinData.addEventListener('click',()=>{
      clearData();
      type = 'min';
      (0,_modules_getData__WEBPACK_IMPORTED_MODULE_0__.getDateA)(type);
      disabled();
      if(btnMinData.classList.contains('hover')){
        btnMinData.classList.remove('hover');
      }
    });
    btnBigData.addEventListener('click',()=>{ 
      clearData();
      type = 'big';
      (0,_modules_getData__WEBPACK_IMPORTED_MODULE_0__.getDateA)(type);
      disabled();
      if(btnBigData.classList.contains('hover')){
        btnBigData.classList.remove('hover');
      }
    });
})


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map