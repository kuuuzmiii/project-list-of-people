//const pagination = require('./pagination');
import {paginationA as pagination} from './pagination';
import {backgroundColorItem} from './getData';

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
                                backgroundColorItem(masAllItem);
                                tabl.append(...masAllItem);
                            })  

                            tabl.append(...masAllItem);
                            try{
                                document.querySelector('.indic').innerHTML='';
                                pagination (masAllItem);
                            }catch{
                                pagination (masAllItem);
                            }
                        }
                        //удаляем повторяющиеся элементы в массиве т.к. элементы повторяются
                        // если есть несколько вхождений в строку несколько раз в разных блоках
                        masSearch = masSearch.filter((item, index) => {
                        return masSearch.indexOf(item) === index;
                        });
                        backgroundColorItem(masSearch);
                        tabl.append(...masSearch);

                    if(masSearch.length !==0 ){
                        try{
                            document.querySelector('.indic').innerHTML='';
                            pagination (Array.from(document.querySelectorAll('.item')));
                        }catch{
                            pagination (Array.from(document.querySelectorAll('.item')));
                        } 
                    }   
                }
                // btn.removeEventListener('click',func);
                btn.addEventListener('click',func);
            }    

        filtered (Array.from(document.querySelectorAll('.item')));     
    }

export {search};