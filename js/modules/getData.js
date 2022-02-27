import {paginationA as pagination} from './pagination';
import {search} from './search';
import {sortingaA as sorting} from './sorting';
import {addPeople as addFormPeople} from './addPeople';
import {changed} from './viewDopData';

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
                            pagination();
                            search();
                            sorting();
                            addFormPeople();  
                            changed();
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

export {getDateA, backgroundColorItem};