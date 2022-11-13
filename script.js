let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');
let logo = document.querySelector('.logo');
let icon = document.querySelector('.dropdown-icon');
let drop = document.querySelector('.dropdown');
let item = document.querySelector('.item');



menu.addEventListener('click', function(){
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
    logo.classList.toggle('active');
   
});

window.addEventListener('scroll', function(){
    menu.classList.remove('active');
    navbar.classList.remove('active');
    logo.classList.remove('active');
    drop.classList.remove('active');
    icon.classList.remove('.fa-caret-up');
});

   

     
        
   
let see_more = document.querySelectorAll('.see-more');
let text_hide = document.querySelectorAll('.text-hide');

for(let x = 0; x < see_more.length; x++){
    for(let i=0; i < text_hide.length; i++){
        see_more[x].addEventListener('click', ()=>{
            if(text_hide[i].classList.toggle('show')){
                see_more[x].innerHTML = 'Less';
            }
            else
            {
                see_more[x].innerHTML = 'See more..';
            }
        });
    }
}





// Gallery
const down_icon = document.querySelector('.down-icon');
const gallery_title = document.querySelector('.gallery-title');
const drop_list = document.querySelector('.drop-list');
const drop_item = document.querySelectorAll('.drop-item');

gallery_title.addEventListener('click', function(){
    if(gallery_title.classList.toggle('dropdown')){
        drop_list.style.display = 'block';
    }else{
        drop_list.style.display = 'none';
    }
});

for(let i= 0; i< drop_item.length; i++){
    drop_item[i].addEventListener('click', function(){
    menu.classList.remove('active');
    navbar.classList.remove('active');
    logo.classList.remove('active');
    drop.classList.remove('active');
    drop_list.style.display = 'none'
    });
};




// MODAL
let exit = document.querySelectorAll('.exit');
let modal = document.querySelectorAll('.modal');


for(let i = 0; i< exit.length; i++){
    for(let x = 0; x < modal.length; x++){
        exit[i].addEventListener('click', function(){
            modal[x].style.display = 'none';
        })
    }
}



let drop_naruto = document.querySelector('.drop-naruto');
let drop_dragon = document.querySelector('.drop-dragon');
let drop_slamdunk = document.querySelector('.drop-slamdunk');
let drop_onepiece = document.querySelector('.drop-onepiece');



let naruto_modal = document.querySelector('.naruto-modal');
let dragon_modal = document.querySelector('.dragon-modal');
let slamdunk_modal = document.querySelector('.slamdunk-modal');
let onepiece_modal = document.querySelector('.onepiece-modal');


drop_naruto.addEventListener('click', function(){
    naruto_modal.style.display = 'block';
});
drop_dragon.addEventListener('click', function(){
    dragon_modal.style.display = 'block';
});
drop_slamdunk.addEventListener('click', function(){
    slamdunk_modal.style.display = 'block';
});
drop_onepiece.addEventListener('click', function(){
    onepiece_modal.style.display = 'block';
});

