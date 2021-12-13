export function prettifyNumber(value) { 
  var thousand = 1000; 
  var million = 1000000; 
  var billion = 1000000000; 
  var trillion = 1000000000000; 
  if (value < thousand) { 
      return String(value);    
  } 
   
  if (value >= thousand && value <= 1000000) { 
       return  (value/thousand).toFixed(1) + 'k';    
  } 
   
  if (value >= million && value <= billion) { 
      return (value/million).toFixed(1) + 'M';    
  } 
   
  if (value >= billion && value <= trillion) { 
      return (value/billion).toFixed(1) + 'B';    
  } 
   
  else { 
      return (value/trillion).toFixed(1) + 'T';    
  } 
} 

export function prettifyPrice(value) {
  if (value > 999) {
    return value.toLocaleString()
  } else if (value >= 1) {
    return value.toFixed(2)
  } else {
    return value.toFixed(8)
  }
}