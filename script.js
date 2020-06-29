let body =  document.getElementsByTagName('body')[0],
header_menu = document.getElementsByClassName('header_menu')[0],
header_menu_slide = document.getElementsByClassName('header_menu_slide')[0],
line = document.querySelector('.line');

function menu(){
        if(line.classList.contains('is-active')){
            body.style.overflow = 'initial';
            body.style.position = 'static';
            document.getElementById('header').style.transform = 'translate(0%)';
            document.getElementById('menu').style.transform = 'translate(0%)';
            header_menu_slide.style.transform = 'translate(100%)';
            header_menu.style.transform = 'translate(0%)';
        }else{
            if (window.matchMedia("(max-width: 500px)").matches) {
            }else{
                header_menu.style.transform = 'translate(50%)';
                document.getElementById('header').style.transform = 'translate(-50%)';
                document.getElementById('menu').style.transform = 'translate(-50%)';
            }
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            header_menu_slide.style.transform = 'translate(0%)';
        }
        line.classList.toggle('is-active');
        header_menu.classList.toggle('is-active');
};

//menu
header_menu.addEventListener('click', menu);
document.getElementsByClassName('header_menu')[1].addEventListener('click', menu);
