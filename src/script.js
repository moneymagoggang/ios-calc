
let a = ''
let b = ''
let znak = ''
const button = $('.but')

/*$('.AC').click(function ClearAll() {
   a = ''
   $('.type-field').text(' ')
})*/





$('.AC').click(function clearAll() {
   a = ''
   znak = ''
   b = ''
   $('.type-field').text('')
 
})

button.click(function(event){
   if(event.target.classList.contains('AC')) {
     
      return;
   };


   if( event.target.classList.contains('dig')){
     if ( b === '' && znak === ''){
      let txt = event.target.textContent
     
     a += txt
      $('.type-field').text(a)
     } 

     if (a != '' && znak != '') {
      let txt = event.target.textContent
      b += txt
      $('.type-field').text(b)
     }
   }


   if (event.target.classList.contains('eql')){
      if ( a!='' && b!=''){
         let ab;
         if(znak === '+'){
            ab = Number(a) + Number(b);
            $('.type-field').text(ab)

         }
         if(znak == "*"){
            ab = Number(a) * Number(b);
            $('.type-field').text(ab)
         }



        
      }
   }
     
   if(event.target.classList.contains('znak')) {
      znak += event.target.textContent
      $('.type-field').text(znak)
    
      
   }

  

})