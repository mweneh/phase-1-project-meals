let textArea= document.querySelector('textarea');
const backUp = textArea.getAttribute('placeholder');
const btn = document.querySelector('.btn');
const clear = document.getElementById('clear')

const searchButton = document.querySelector('#search-button');
const mealList = document.getElementById('food');
const mealContent = document.querySelector('.details-content');
const recipeCloseBtn = document.querySelector('#recipe-close-btn');
const recipeBtn = document.querySelector('.recipe-btn')

textArea.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    btn.style.display = 'block'
}

textArea.onblur = function(){
    this.setAttribute('placeholder',backUp);
    this.style.borderColor = '#aaa'
}

clear.onclick = function(){
    btn.style.display = 'none';
    textArea.value = '';
}