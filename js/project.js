// 1. Select #color-button from the page, and add an onclick event handler that triggers a function changeColor;
document.querySelector('#color-button').onclick = changeColor
// 2. Write the function, named changeColor, that is called when #color-button is clicked
function changeColor(){
    let red = document.querySelector('#red').value
    let green = document.querySelector('#green').value
    let blue = document.querySelector('#blue').value
    let colorStr = `rgb(${red},${green},${blue})`
    document.querySelector('#colorful-text').innerHTML = colorStr
    document.querySelector('#wrapper').style.background = colorStr
}
// 3. Inside of the function changeColor, use variables to store the <input> values from #red, #green, and #blue
// - Use .value to get the values from the inputs
// HINT: let red = document.querySelector('#red').value;

// 4. Create a variable, named colorStr, which concatenates the above red, green, and blue variables into the format:
// rgb(x, y, z)
// - If the user enters: 100, 150, and 200, colorStr should be: rgb(100, 150, 200)

// 5. Use .innerHTML to change the text inside of #colorful-text to colorStr

// 6. Use .style.background to change the background of #wrapper to colorStr
