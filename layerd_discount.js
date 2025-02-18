/**
 * first 100 --> 100
 * 101To200 --> 90
 * above 200 -->70
 */

function layeredDiscountedTotal (quantity){
   const first100Price = 100 ;
   const To200Price = 90 ;
   const above200Price = 70 ;

   if (quantity<=100){
    const total = quantity*first100Price;
    return total;
   }
   else if (quantity<=200){
    const totalcostof100 = first100Price*100;
    const remainningQuantity = quantity -100 ;
    const remainningQuantityTotal = remainningQuantity * To200Price ;
    const total = totalcostof100 + remainningQuantityTotal ;
    return total ;
   }
   else {
    const totalcostof100 = first100Price*100;
    const totalcostof200 = To200Price * 100 ;
    const remainningQuantity = quantity - 200;
    const remainningQuantityTotal = remainningQuantity * above200Price ;
    const total = totalcostof100 + totalcostof200 + remainningQuantityTotal ;
    return total ;
   
   }

 }

 const total = layeredDiscountedTotal(250);
console.log (total);
