function updateCounter(){
  let day1 = new Date();
  let day2 = new Date("2025-03-20");

  let difference = day2.getTime()- day1.getTime();

  if (difference > 0 ){
    let dayDifference = Math.floor( difference /(1000 *60 *60 *24));
    
    let hourDifference =  Math.floor(( difference % (1000*60*60*24))/ (1000*60*60));
    
    let minuteDifference = Math.floor(( difference % (1000*60*60))/ (1000*60));
    
    let secoundDifference = Math.floor(( difference % (1000*60))/ (1000));
    
    document.querySelector(".counter-box .day").innerText = dayDifference;

    document.querySelector(".counter-box .hour").innerText = hourDifference;

    document.querySelector(".counter-box .minute").innerText =  minuteDifference;

    document.querySelector(".counter-box .secound").innerText = secoundDifference;

  } else{
    clearInterval(timer);
  }
}
updateCounter()
let timer = setInterval(updateCounter ,1000);






