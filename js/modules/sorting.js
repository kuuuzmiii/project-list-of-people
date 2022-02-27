import { backgroundColorItem} from './getData';
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
                                backgroundColorItem(mas);
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
                                backgroundColorItem(mas);
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

export {sortingaA};