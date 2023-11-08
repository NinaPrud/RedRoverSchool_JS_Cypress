// Напишите алгоритм приготовления кофе и выведите его на экран

// с тремя циклами - на видео 5.2 Светлана 35:30



let coffee = ["Strong Roast Coffee", "Medium Roast Coffee", "Soft Roast Coffee"];
let filler = ["Caramel Syrup", "Irish rum", "Cow's Milk"];
let size = ["Small", "Medium", "Big"];
let standartpPrice = 1;
let price;
 for (let c = 0; c < coffee.length; c++) {
      for (let f = 0; f < filler.length; f++) {
          for ( let s = 0; s < size.length; s++) {
            price = standartpPrice;
            
            // if ( size[s] === "Small"){
            //   price *= 1;
            //}
             if (size[s] === "Medium"){
              price *= 1.5;
            } if (size[s] === "Big"){
              price *= 2.5;
             }
            console.log(`
                                 ${coffee[c]} with ${filler[f]} and ${size[s]} cup
                      
             1. Choose ${coffee[c]} on the display of the machine ; \n
             2. Choose ${size[s]} cup on the display of the machine ; \n
             3. Pay us ${price}$ and wait for the coffee to be ready; \n
             4. Take ${filler[f]} and pour it to coffee cup; \n\n
             6.Enjoy your coffee!! \n\n\n`)
          }
      }
      
 }



