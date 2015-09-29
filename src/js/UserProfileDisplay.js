'use strict';

function hideUserProperties(){
  document.getElementById('PropertiesToggle').innerHTML = 'v';
  document.getElementById('UserPhone').style.display = 'none';
  document.getElementById('UserEmail').style.display = 'none';
}

function showUserProperties(){
  document.getElementById('PropertiesToggle').innerHTML = '^';
  document.getElementById('UserPhone').style.display = 'block';
  document.getElementById('UserEmail').style.display = 'block';
}

function toggleUserProperties(){
  if(document.getElementById('UserPhone').style.display !== 'none'){
    hideUserProperties();
  }
  else{
    showUserProperties();
  }
}
