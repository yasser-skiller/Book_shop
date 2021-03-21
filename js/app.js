//slider
if(document.querySelector('.swiper-container')){
  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });

  var swiper = new Swiper('.future .swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

}

//rate General
if(document.querySelector('.rate_block')){
  let rate_block = document.querySelectorAll('.rate_block');
  let arr_rate_block = Array.from(rate_block);
  arr_rate_block.forEach(element => {
    element.children[0].textContent = '('+element.children[4].children[0].value+')';
    $(element.children[3]).rateYo({
      rating: element.children[4].children[0].value,
      starWidth: '12px',
      numStars: 5,
      minValue: 0,
      maxValue: 5,
      spacing: "5px",
      readOnly: true,
      normalFill: '#b3b3b3',
      ratedFill: '#e9b300',
  
    }) 
    
  });
        
}

//rate comment
if(document.querySelector('.rate_comment')){
  let rate_comment = document.querySelectorAll('.rate_comment');
  let arr_rate_comment = Array.from(rate_comment);
  arr_rate_comment.forEach(ele => {
    $(ele.children[2]).rateYo({
      rating: ele.children[1].children[0].value,
      starWidth: '12px',
      numStars: 5,
      minValue: 0,
      maxValue: 5,
      spacing: "5px",
      readOnly: true,
      normalFill: '#b3b3b3',
      ratedFill: '#e9b300',
  
    }) 
    
  });    
}
if(document.querySelector('.rate_comment_post')){
  let rate_comment_post = document.querySelector('.rate_comment_post');
  let rate_comment_post_value = document.querySelector('.rate_comment_post_value');
  let ratevalue_chosssen = document.querySelector('.ratevalue_chosssen')

    $(rate_comment_post).rateYo({
      rating: 0,
      starWidth: '15px',
      numStars: 5,
      minValue: 0,
      maxValue: 5,
      spacing: "5px",
      normalFill: '#b3b3b3',
      ratedFill: '#e9b300',
      onSet: function (rating, rateYolnstance) {
        ratevalue_chosssen.textContent = `(${rating})`;
      }
  
    }) 
    rate_comment_post.addEventListener('click',function () {
      rate_comment_post_value.value = ratevalue_chosssen.textContent;
    })
}

//feuture section rate
if(document.querySelector('.Big_rateYo')){
  let Big_rateYo_value = document.querySelector('#Big_rateYo_value');
  document.querySelector('#Big_rateYo_value_show').textContent = '('+Big_rateYo_value.value+')';

  $(".Big_rateYo").rateYo({
    rating: Big_rateYo_value.value,
    starWidth: '25px',
    numStars: 5,
    minValue: 0,
    maxValue: 5,
    spacing: "7px",
    readOnly: true,
    normalFill: '#b3b3b3',
    ratedFill: '#e9b300',

  }) 
    
  
        
}

//timer
if(document.querySelector('.timerdown')){

  let countDownDate = new Date("Dec 5, 2021 15:37:25").getTime();

  let x = setInterval(function() {

    
    let now = new Date().getTime();
      
    let distance = countDownDate - now;
      
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    document.querySelector('.day_time').innerHTML = days;
    document.querySelector('.hr_time').innerHTML = hours;
    document.querySelector('.min_time').innerHTML = minutes
    document.querySelector('.sec_time').innerHTML = seconds;

    
    if (distance < 0) {
      clearInterval(x);
      document.querySelector('.day_time').innerHTML = 00;
      document.querySelector('.hr_time').innerHTML = 00;
      document.querySelector('.min_time').innerHTML = 00
      document.querySelector('.sec_time').innerHTML = 00;
    }
  }, 1000);
}

//footer position
if(document.querySelector('.up_footer')){
  document.querySelector('.main_footer').classList.add('class_po_c');
  document.querySelector('.up_footer').classList.add('class_po_b');
  document.querySelector('.mina_footee_countant').classList.add('class_po_a');
}

//Happy_client_img
if(document.querySelector('.Happy_client_img')){
  let Happy_client_img = document.querySelectorAll('.Happy_client_img');
  let arr_Happy_client_img = Array.from(Happy_client_img);
  arr_Happy_client_img.forEach(element => {
    element.addEventListener('click',function(){
      arr_Happy_client_img.forEach(ele => {
        ele.classList.remove('active_border');
      });
      element.classList.add('active_border');
    })

  });
}

//nav_Global
if(document.querySelector('#navbarNav .navbar-nav .nav-item .nav-link')){
  let active_nav_link = document.querySelectorAll('#navbarNav .navbar-nav .nav-item .nav-link');
  let arr_active_nav_link = Array.from(active_nav_link);
  arr_active_nav_link.forEach(element => {
    element.addEventListener('click',function(){
      arr_active_nav_link.forEach(ele => {
        ele.classList.remove('active_nav_link');
      });
      element.classList.add('active_nav_link');
    })

  });
}

//nav_writer_local
if(document.querySelector('.writer_page')){
  let active_local_link = document.querySelectorAll('.writer_page ul li');
  let arr_active_local_link = Array.from(active_local_link);
  arr_active_local_link.forEach(element => {
    element.addEventListener('click',function(){
      arr_active_local_link.forEach(ele => {
        ele.classList.remove('active_nav_local_link');
      });
      element.classList.add('active_nav_local_link');
    })

  });
}

//nav_Book_local_one
if(document.querySelector('.Books_nav_one')){
  let nav_Book_local_one = document.querySelectorAll('.Books_nav_one li a');
  let arr_nav_Book_local_one = Array.from(nav_Book_local_one);
  arr_nav_Book_local_one.forEach(element => {
    element.addEventListener('click',function(){
      arr_nav_Book_local_one.forEach(ele => {
        ele.classList.remove('blue_dark');
      });
      element.classList.add('blue_dark');
    })

  });
}

//input_range
if(document.querySelector('.input_range')){
  let input_range = document.querySelector('.input_range');
  document.querySelector('.min_value').textContent = input_range.min;
  document.querySelector('.max_value').textContent = input_range.max;
  input_range.addEventListener('change', function(){
    document.querySelector('.min_value').textContent = input_range.value;
  })
}
//heart
if(document.querySelector('.fa-heart')){
  let fa_heart = document.querySelectorAll('.fa-heart');
  let arr_fa_heart = Array.from(fa_heart);
  arr_fa_heart.forEach(element => {
    element.addEventListener('click', function() {
      element.classList.toggle('heart_clicked')
    })
  });

}

//video
if(document.querySelector('.fa-play-circle')){
  document.querySelector('.fa-play-circle').addEventListener('click', function () {
    document.querySelector('.poster_image').classList.add('poster_image_action')
  })
}

//icon_side_menu
if(document.querySelector('.icon_side_menu')){
  document.querySelector('.icon_side_menu').addEventListener('click', function(){
    document.querySelector('.side_menu').classList.toggle('side_menu_action');
    document.querySelector('.overlay_black').classList.toggle('overlay_black_action');
  })
  document.querySelector('.overlay_black').addEventListener('click', function(){
    document.querySelector('.side_menu').classList.remove('side_menu_action');
    document.querySelector('.overlay_black').classList.remove('overlay_black_action');
  })
}

//pay
if(document.querySelector('.pay_method')){
  let pay_method = document.querySelectorAll('.pay_method');
  let arr_pay_method = Array.from(pay_method);
  arr_pay_method.forEach(element => {
    element.addEventListener('click',function(){
      arr_pay_method.forEach(ele => {
        ele.classList.remove('active_pay_method');
      });
      element.classList.add('active_pay_method');
    })

  });
}
