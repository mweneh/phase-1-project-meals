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
// get meal list that matches name 
function fetchMealList(){
    let searchInput = document.getElementById('search-input').value.trim();
    fetch((`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`))
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "meal">
                        </div>
                        <div class = "meal-name">
                            <h3>Name: ${meal.strMeal}</h3>
                            <p><strong> Category: ${meal.strCategory}</strong></p>
                            <p><strong> Area: ${meal.strArea}</strong></p>
                            <h3>Instructions:</h3>
                            <p>${meal.strInstructions}</p>
                            <div class = "recipe-link">
                                <a href = "${meal.strYoutube}" target = "_blank">Watch Video instead?</a>
                            </div>

                            <a href = "#" class = "recipe-btn">Order Meal</a>
                            <a href = '@' class = "submit-btn"> Add to Favorites</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, no match found!";
            mealList.classList.add('notFound');
        }

       
    });
}
