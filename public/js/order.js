function kirimWa(){
       

    var user = $('#user').val();
    var server = $('#server').val();
    var nomorwa = $('#nomorwa').val();
    var diamond = $('input:checked').val();
    var pembayaran = $('.pilih-bayar input:checked').val();
    


    if(user != '' && server != '' && nomorwa != '' && diamond != '' && pembayaran != '' ){

   
         /* Whatsapp Settings */
         var walink = 'https://web.whatsapp.com/send',
             phone = '6281313213380',
             walink2 = 'Halo saya ingin Order';

         /* Smartphone Support */
        //  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //  var walink = 'whatsapp://send';
        //  }

         /* Final Whatsapp URL */
         var sendWA = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
         'User ID : ' + user + '%0A' +
         'Server ID : ' + server + '%0A' +
         'Diamond : ' + diamond + '%0A' +
         'Pembayaran Via : ' + pembayaran + '%0A' +
         'Nomor Whatsapp : ' + nomorwa + '%0A';
         
         

         /* Whatsapp Window Open */
         window.open(sendWA,'_blank');
    
     
         } else {
             alert("Harap isi")
         }
      }