


 let button=document.querySelectorAll('button');// isme all buttons select ho ja rahi thi jisse array ban ja raha h tab loop lagate h 
 let input=document.querySelector('input')


 for(let buttons of button)
 {
    buttons.addEventListener('click',function(event){
        let btntext=event.target.innerText;

        if(btntext === 'AC')
        {
            input.value='';
        }

        else if(btntext === '=')
        {
             try{
            input.value=eval(input.value); 
               }  //  ye apne app anwer de dete h given text ka 



               catch(e)
               {
                input.value='INVALID'
               }



        }


    
         else{
        input.value += btntext; // ye ek sath input lene ke lie
         }
    })
 }