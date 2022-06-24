# phase-1-project-meals


Today you'll be building an app for searching meals by name, viewing recipe, area,category,watching recipe YouTube Video and adding a comment on the main page. You will be using
https://www.themealdb.com API and building out the frontend for our app, phase-1-project-meals.



## Setup
Clone this repo in your local environment 
Navigate to this directory and open your code writer i.e VS Code by typing 'code .' in your terminal
Add index.html, index.js and style.css files in your work directory 
Run this command to get the backend started:

```console

Test your API using Postman 
If successful, start coding 

## Deliverables

As a user, I can:

1. Search meals by name and see search results including meal name, area, category, meal image, meal recipe, a link to YouTube video for the recipe, and write a comment. Additionally, as a user I can see a list of meals when i click search even without any input in the search bar.

You will need to fetch data using 
https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}

Where searchInput is the meal name like Shawarma



   Example Response:
   
{
  "meals": [
    {
      "idMeal": "53028",
      "strMeal": "Shawarma",
      "strDrinkAlternate": null,
      "strCategory": "Chicken",
      "strArea": "Egyptian",
      "strInstructions": "Combine the marinade ingredients in a large ziplock bag (or bowl).\r\nAdd the chicken and use your hands to make sure each piece is coated. If using a ziplock bag, I find it convenient to close the bag then massage the bag to disperse the rub all over each chicken piece.\r\nMarinate overnight or up to 24 hours.\r\nCombine the Yoghurt Sauce ingredients in a bowl and mix. Cover and put in the fridge until required (it will last for 3 days in the fridge).\r\nHeat grill/BBQ (or large heavy based pan on stove) on medium high. You should not need to oil it because the marinade has oil in it and also thigh fillets have fat. But if you are worried then oil your hotplate/grill. (See notes for baking)\r\nPlace chicken on the grill and cook the first side for 4 to 5 minutes until nicely charred, then turn and cook the other side for 3 to 4 minutes (the 2nd side takes less time).\r\nRemove chicken from the grill and cover loosely with foil. Set aside to rest for 5 minutes.\r\nTO SERVE\r\nSlice chicken and pile onto platter alongside flatbreads, Salad and the Yoghurt Sauce.\r\nTo make a wrap, get a piece of flatbread and smear with Yoghurt Sauce. Top with a bit of lettuce and tomato and Chicken Shawarma. Roll up and enjoy!",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg",
      "strTags": null,
      "strYoutube": "https://www.youtube.com/watch?v=3lxUIeKDgic",
      "strIngredient1": "Chicken Thighs",
      "strIngredient2": "Coriander",
      "strIngredient3": "Cumin",
      "strIngredient4": "Cardamom",
      "strIngredient5": "Cayenne Pepper",
      "strIngredient6": "Paprika",
      "strIngredient7": "Lemon Juice",
      "strIngredient8": "Olive Oil",
      "strIngredient9": "Greek Yogurt",
      "strIngredient10": "Garlic Clove",
      "strIngredient11": "Cumin",
      "strIngredient12": "Lemon Juice",
      "strIngredient13": "Lettuce",
      "strIngredient14": "Tomato",
      "strIngredient15": "Pita Bread",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "1 kg",
      "strMeasure2": "1 tbs",
      "strMeasure3": "1 tbs",
      "strMeasure4": "1 tbs",
      "strMeasure5": "1 tsp ",
      "strMeasure6": "2 tsp",
      "strMeasure7": "2 tbs",
      "strMeasure8": "3 tbs",
      "strMeasure9": "1 cup ",
      "strMeasure10": "1",
      "strMeasure11": "1 tsp ",
      "strMeasure12": "Splash",
      "strMeasure13": "Sliced",
      "strMeasure14": "Sliced",
      "strMeasure15": "6",
      "strMeasure16": " ",
      "strMeasure17": " ",
      "strMeasure18": " ",
      "strMeasure19": " ",
      "strMeasure20": " ",
      "strSource": "https://www.recipetineats.com/chicken-sharwama-middle-eastern/",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": null
    }
     
   ```



3. Add a comment on the page , no persistence is needed

### Bonus Deliverables

These bonus deliverables are here if you want an extra challenge and won't
affect your score. **Make sure to commit your work to save your progress before
attempting the bonus deliverables!**

1. Instead of recipe showing in the search results, it should be accessed through a get recipe button at the bottom of the meal image and should be a pop up window displaying recipe and Youtube video link


## Extra Bonus
The get recipe window to include an unordered ingredient list plus their measurements.

    


