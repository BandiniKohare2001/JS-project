function incrementIndia(){
   let element = document.getElementById('indiaScore');
   let value = parseInt(element.innerHTML);

   value++;

   console.log(value);
   document.getElementById('indiaScore').innerHTML = value;
}


function decrementIndia(){
    let element = document.getElementById('indiaScore');
    let value = parseInt(element.innerHTML);

    if(value > 0){
        value--;
    }
    else{
        value = 0;
    }

    console.log(value);
    document.getElementById('indiaScore').innerHTML = value;
}


function incrementPak(){
    let element = document.getElementById('pakScore');
    let value = parseInt(element.innerHTML);

    value++;

    console.log(value);
    document.getElementById('pakScore').innerHTML = value;
}


function decrementPak(){
    let element = document.getElementById('pakScore');
    let value = parseInt(element.innerHTML);

    if(value > 0){
        value--;
    }
    else{
        value = 0;
    }

    console.log(value);
    document.getElementById('pakScore').innerHTML = value;
}





function resetScore(){
    let homeScore = document.getElementById('indiaScore');
    let awayScore = document.getElementById('pakScore');
let home = homeScore.innerHTML;
    let away = awayScore.innerHTML;

    home = 0;
    away = 0;

    console.log(home, away);
    document.getElementById('indiaScore').innerHTML = home;
    document.getElementById('pakScore').innerHTML = away;
}


function getScore(){
    let homeScore = document.getElementById('indiaScore');
    let home = parseInt(homeScore.innerHTML);
    let awayScore = document.getElementById("pakScore")
    let away = parseInt(awayScore.innerHTML);
    let homeName = document.getElementById('india-name').innerText;
    let awayName = document.getElementById('pak-name').innerText;

    localStorage.setItem("india_score", home);
    localStorage.setItem("pak_score", away);
    localStorage.setItem("india_name", homeName);
    localStorage.setItem("pak_name", awayName);
}



function displayImage() {
    let input = document.getElementById('uploadInput');
    let image = document.getElementById('uploadedImage');
  
    let file = input.files[0];
    let reader = new FileReader();
  
    reader.onload = function(e) {
      image.src = e.target.result;
      localStorage.setItem('uploadedImageSrc', e.target.result);
    };
  
    reader.readAsDataURL(file);
  }

  function clearStorage(){
    localStorage.clear();
  }