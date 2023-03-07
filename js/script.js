$(function() {


    /* открытие popup */
    $('.btn--popup').on('click', function(e){
        e.preventDefault
        var linkPopup = $(this).attr('href')
        $.fancybox.open({
            src: linkPopup,
		    type: 'inline',
            baseClass: 'popup',
            touch: false,
            smallBtn: false,
        });
    });

    let hovercont = document.querySelectorAll('.menu')
    
    hovercont.forEach(function(item){
        let hoverElem =   item.querySelectorAll('.menu__js-hover')
        
        hoverElem.forEach(function(item,index){
            item.onmouseover = function(){
                hoverImg = item.closest('.menu').querySelectorAll('.menu__tab')   
                for (i=0;i<hoverImg.length;i++) {
                    hoverImg[i].classList.remove('menu__tab-show')
                }
                hoverImg[index].classList.add('menu__tab-show')
            }
        })
    })
    

    $('#services-btn').hover(function(){
        $('.menu').addClass('menu-show')
    }, function(){
        $('.menu').removeClass('menu-show')
    })
    $('.menu').hover(function(){
        $('.menu').addClass('menu-show')
    }, function(){
        $('.menu').removeClass('menu-show')
    })


    /* slider */
    document.querySelectorAll('.slider').forEach(n => {
        const topSlider = new Swiper(n.querySelector('.swiper'), {
            slidesPerView: 1,
            loop:false,
            delay: 15000,
            speed: 1800,
            navigation: {
                nextEl: n.querySelector('.swiper-button-next'),
                prevEl: n.querySelector('.swiper-button-prev'),
            },
            

        });


    });

    /* acc on mob.menu */
    var accBtn = $('.acc-btn')
    
    accBtn.each(function(){
        var accBlock =$(this).closest('.acc-cont').find('.acc-text')
        accBlock.hide()
        $(this).on('click',function(){
            $(this).toggleClass('acc-btn--active')
            accBlock.toggle(100)
        })
    })

    /* burger */
    $('.burger').on('click', function(){
        $('.mobile-menu').addClass('mobile-menu--show')
        $('body').addClass('menu-open')
    })
    $('.mobile-menu__close').on('click', function(){
        $('.mobile-menu').removeClass('mobile-menu--show')
        $('body').removeClass('menu-open')
    })
});