//side_menu
if(document.querySelector('.side_menu')){
  let side_menu = document.querySelectorAll('.side_menu a');
  let arr_side_menu = Array.from(side_menu);
  arr_side_menu.forEach(element => {
    element.addEventListener('click',function(){
      arr_side_menu.forEach(ele => {
        ele.classList.remove('active_dsch_item');
      });
      element.classList.add('active_dsch_item');
    })

  });
}


//dh-icon_side_menu
if(document.querySelector('.dh_icon_side_menu')){
  document.querySelector('.dh_icon_side_menu').addEventListener('click', function(){
    document.querySelector('.parent_side_menu').classList.toggle('parent_side_menu_actions');
    document.querySelector('.dh_overlay_black').classList.toggle('dh_overlay_black_action');
  })
  document.querySelector('.dh_overlay_black').addEventListener('click', function(){
    document.querySelector('.parent_side_menu').classList.remove('parent_side_menu_actions');
    document.querySelector('.dh_overlay_black').classList.remove('dh_overlay_black_action');
  })
}
//upload_book_img_field
if(document.querySelector('.upload_book_img_field')){

  document.querySelector('#upload_book_img').addEventListener('change', function() {
    if (this.files && this.files[0]) {
      document.querySelector('.upload_book_img_field').src = URL.createObjectURL(this.files[0]);
      document.querySelector('.del_img_upload').classList.remove('del_img_upload_show')

    }
  })

  document.querySelector('.del_img_upload').addEventListener('click',function(){
    document.querySelector('.upload_book_img_field').src = './img/upload.svg';
    document.querySelector('.del_img_upload').classList.add('del_img_upload_show')
  })
}

//chat
if(document.querySelector('#send_massage')){
  let str = document.querySelector('#massage_text');
  document.querySelector('#send_massage').addEventListener('click',function () {
    if(str.value !== ''){
      let message = document.createElement('div');
      document.querySelector('#chat').appendChild(message)
      message.classList.add('align-items-center')
      message.classList.add('d-flex')
      let chat_img = document.createElement('img');
      message.appendChild(chat_img)
      chat_img.classList.add('rounded-circle')
      chat_img.classList.add('img_user')
      chat_img.classList.add('mr-2')
      chat_img.src = 'img/Ellipse 2.png'
      let txt_message = document.createElement('small');
      message.appendChild(txt_message)
      txt_message.textContent = str.value;
      str.value = ''; 
    }
    

  })
}