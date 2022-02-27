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

export {paginationA};