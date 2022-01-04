const btn =document.querySelector('.breakfastOnly')
btn.addEventListener('click',displaymenu)
function displaymenu(){
const result = document.querySelector('.breakfast')
document.querySelector('.lunch').style.display ='none'
document.querySelector('.breakfast').style.display ='flex'
document.querySelector('.supper').style.display ='none'
document.querySelector('.dessert').style.display ='none'
console.log(result)

}
const btn2 =document.querySelector('.lunchOnly')
btn2.addEventListener('click', displayLunch)
function displayLunch(){
document.querySelector('.lunch').style.display ='flex'
document.querySelector('.breakfast').style.display ='none'
document.querySelector('.supper').style.display ='none'
document.querySelector('.dessert').style.display ='none'

}
const btn3 =document.querySelector('.supperOnly')
btn3.addEventListener('click', displaySupper)
function displaySupper(){
document.querySelector('.lunch').style.display ='none'
document.querySelector('.breakfast').style.display ='none'
document.querySelector('.supper').style.display ='flex'
document.querySelector('.dessert').style.display ='none'
}

const btn4 =document.querySelector('.dessertOnly')
btn4.addEventListener('click', displayDessert)
function displayDessert(){
document.querySelector('.lunch').style.display ='none'
document.querySelector('.breakfast').style.display ='none'
document.querySelector('.supper').style.display ='none'
document.querySelector('.dessert').style.display ='flex'
}
const btn5 =document.querySelector('.allMeal')
btn5.addEventListener('click', displayAll)
function displayAll(){

    document.querySelector('.lunch').style.display ='flex'
    document.querySelector('.breakfast').style.display ='flex'
    document.querySelector('.supper').style.display ='flex'
    document.querySelector('.dessert').style.display ='flex'
}
