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
  // Set the date we're counting down to
  var countDownDate = new Date("Dec 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.querySelector('.day_time').innerHTML = days;
    document.querySelector('.hr_time').innerHTML = hours;
    document.querySelector('.min_time').innerHTML = minutes
    document.querySelector('.sec_time').innerHTML = seconds;

    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
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

//nav
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
