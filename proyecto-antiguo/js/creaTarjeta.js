'use strict';

const submitButton = document.querySelector('#btn-submit');
const responseURL = document.querySelector('.response');
const form = document.querySelector('.form');
// var fr = new FileReader();
const buttonTwitter = document.querySelector('.btn-twitter');

const linkTwitter = document.querySelector('.url-twitter');

submitButton.addEventListener('click', loadPhoto);

const sendData = ()=> {
  const selects = document.getElementsByTagName('select');
  const inputs = Array.from(form.elements);
  console.log(inputs);
  const json = getJSONFromInputs(inputs);
  json.skills = [];

  for(let i=0; i < selects.length;i++){
    console.log(selects[i]);
    json.skills.push(selects[i].value);
  }
  //json.skills = ['javascript'];
  json.photo = fr.result;
  sendRequest(json);
}

const loadPhoto = ()=>{
  const myFile = document.querySelector('#img--profile').files[0];
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
}

const getJSONFromInputs = (inputs) => {
  return inputs.reduce(function (acc, val) {
    if(val.nodeName !== 'BUTTON' && val.type !== 'radio' && val.nodeName !== 'FIELDSET' && val.nodeName !== 'SELECT')
    {acc[val.name] = val.value;}
    if (val.type==='radio' && val.checked===true) {
      acc[val.name] = val.value;
    }
    return acc;
  }, {});
}

const sendRequest = (json) => {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) { return resp.json(); })
    .then(function(result) { showURL(result); })
    .catch(function(error) { console.log(error); });
}
const twitterURL;
const showURL = (result) => {
  const texto = document.querySelector('.container__twitter--title');
  const btnTarjeta = document.querySelector('.form2__button');
  if(result.success){

    texto.innerHTML = '<h3 class="twitter-title">La tarjeta ha sido creada:</h3>';
    responseURL.innerHTML = '<a class="link--response"  href=' + result.cardURL + ' target="_blank" >' + result.cardURL + '</a>';
    btnTarjeta.disabled = true;
    btnTarjeta.classList.add('disabled');

  }else{
    console.log(result.error);
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
  twitterURL = result.cardURL;
}

const shareOnTwitter = () => {


  linkTwitter.href = 'https://twitter.com/intent/tweet?url=' + twitterURL + '&text=Acabo%20de%20crear%20mi%20tarjeta%20con%20Font%20Awesome%20de%20Queens%20of%20hearts&hashtags=WomenInTech';



}


buttonTwitter.addEventListener('click', shareOnTwitter);
