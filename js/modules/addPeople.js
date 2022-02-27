import {paginationA as pagination} from './pagination';
import {search} from './search';
import {changed} from './viewDopData';
import {backgroundColorItem} from './getData';

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

                        changed();
                        Array.from(addPeopl.querySelectorAll('input[type="text"]')).forEach( item =>{
                            item.value = '';
                        })
                        //filtered(Array.from(document.querySelectorAll('.item')));
                        search();
                        document.querySelector('.indic').innerHTML='';
                        pagination (Array.from(document.querySelectorAll('.item'))); 
                        backgroundColorItem(Array.from(document.querySelectorAll('.item')));
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

export {addPeople};
