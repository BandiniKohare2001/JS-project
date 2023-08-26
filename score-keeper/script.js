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
    var homeScore = document.getElementById('indiaScore');
    var awayScore = document.getElementById('pakScore');
    var home = homeScore.innerHTML;
    var away = awayScore.innerHTML;

    home = 0;
    away = 0;

    console.log(home, away);
    document.getElementById('indiaScore').innerHTML = home;
    document.getElementById('pakScore').innerHTML = away;
}


function getScore(){
    var homeScore = document.getElementById('indiaScore');
    var home = parseInt(homeScore.innerHTML);
    var awayScore = document.getElementById("pakScore")
    var away = parseInt(awayScore.innerHTML);
    var homeName = document.getElementById('india-name').innerText;
    var awayName = document.getElementById('pak-name').innerText;

    localStorage.setItem("india_score", home);
    localStorage.setItem("pak_score", away);
    localStorage.setItem("india_name", homeName);
    localStorage.setItem("pak_name", awayName);
}



function displayImage() {
    var input = document.getElementById('uploadInput');
    var image = document.getElementById('uploadedImage');
  
    var file = input.files[0];
    var reader = new FileReader();
  
    reader.onload = function(e) {
      image.src = e.target.result;
      localStorage.setItem('uploadedImageSrc', e.target.result);
    };
  
    reader.readAsDataURL(file);
  }

  function clearStorage(){
    localStorage.clear();
  }