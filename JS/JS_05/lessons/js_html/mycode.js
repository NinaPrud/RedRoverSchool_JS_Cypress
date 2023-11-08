// для запуска зайти в html  и кликнуть f5
//либо Run -> Run without debugging
// везде должно быть document.write


let bread = 'white bread'
let salmon = 'salted salmon'
let turkey = 'smoked turkey'
let bacon = 'fried bacon'
let cheese = 'cream cheese'
let sandwich
let topping

let turkeySandwich = 'Sandwich with turkey'
let baconSandwich = 'Sandwich with bacon'
let salmonSandwich = 'Sandwich with salmon'
let isReady

sandwich = salmonSandwich
isReady = true
                //вложенный if
if(isReady == true)
{
  
     if(sandwich == turkeySandwich) 
        {
   topping = turkey
        }
   else if (sandwich == salmonSandwich)  
        {
   topping = salmon
        }
   else if (sandwich == baconSandwich)
        {
   topping = bacon
        }
   else{topping = "UNKNOWING TOPPING"}
   

   let step1 = `1.Take a piece of ${bread}`
   let step2 = `2.Take a piece of ${cheese}`
   let step3 = '3.Put cheese on bread'
   let step4 = `4.Take a piece of ${topping}`
   let step5 = `5.Put ${topping} on ${cheese}`
   let step6 = 'Bon appetite!'
 
   document.write(`For ${sandwich} you must do: <br><br>`, step1, 
   '<br>', step2, '<br>', step3, '<br>', 
   step4, '<br>', step5, '<br><br>', step6, '<br><br>')
  
   console.log(`For ${sandwich} you must do: `,'\n\n', step1, '\n', 
   step2, '\n', step3, '\n', step4, 
   '\n', step5, '\n\n', step6, '\n\n')

   let priceSalmon = 15
   let priceTurkey = 10
   let priceBacon = 8

   if(topping == salmon)
           {
   document.write(`P.S.:And in a cafe ${salmonSandwich} costs 
   ${priceSalmon} dollars`)
            }
   else if(topping == turkey)
            {
   document.write(`P.S.:And in a cafe ${turkeySandwich} costs 
   ${priceTurkey}  dollars`)
            }
   else if(topping == bacon)
            {
   document.write(`P.S.:And in a cafe ${baconSandwich} costs 
   ${priceBacon} dollars`)  
            }
}
  
else if(isReady == false)
{
 document.write("Please, wait more 5 minets") 
} 
else
{
  document.write("I don't know what is going here!") 
}