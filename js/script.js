
 import {getDateA as getData} from './modules/getData';
 import {search} from './modules/search';

window.addEventListener('DOMContentLoaded',()=>{
    const  btnMinData = document.querySelector('.btn'),
          dannie = document.querySelector('.dannies'),
          wrap = document.querySelector('.wrap'),
          btnBigData = document.querySelector('.btnBigData');


    search();


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
      getData(type);
      disabled();
      if(btnMinData.classList.contains('hover')){
        btnMinData.classList.remove('hover');
      }
    });
    btnBigData.addEventListener('click',()=>{ 
      clearData();
      type = 'big';
      getData(type);
      disabled();
      if(btnBigData.classList.contains('hover')){
        btnBigData.classList.remove('hover');
      }
    });
})

