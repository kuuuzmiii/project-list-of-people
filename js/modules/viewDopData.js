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
    
export{changed};