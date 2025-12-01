// document.activeElement("")

const tabs = document.querySelectorAll('.tabheader__item')
const tabContnts = document.querySelectorAll('.tab_content')
const tabParent = Document.querySelector('.tabheader__items')


function tabsHeaden(){
    tabContnts.forEach((item)=>{
           item.style.display = 'none'
    })
    tabs.forEach((item)=>{
               item.classList.remove(' tabheader__item_active')
    })
} 
tabsHeaden()

function show(index ){
     tabContnts[index].style.display='flex'
       tabs[index].classList.add('tabheader__item_active')
       tabContnts[index].classList.add('anime')
}

show(1)


tabParent.addEventListener('click', (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((tab, index) => {
            if (event.target === tab) {
                hideTabs();
                showTab(index);
            }
        });
    }
});





