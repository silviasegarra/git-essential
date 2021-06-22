// MOVEMENT OF THE BUTTONS
const lis = document.querySelectorAll("ul li") // we select all of li (buttons)
//WE SEE EACH OF THE 'LI' USING FOREACH OF THIS VARIABLE (LIS)
lis.forEach((node) =>{
    node.addEventListener('mousedown', function(event) {
        //we get the value whatevery in "nodelist" are
        const value = node.innerText.trim()  //trim is to take of any extra space it may be
        const result = document.querySelector(".result")
        const resultText = result.innerText.trim()   

        // rid of the 0, the undefined and infinity -> the two last ones given by default by JS
        if(resultText == '0' || resultText == 'undefined'  || resultText == 'Infinity'){
            result.innerText = ''
        }

        // funcionality for = (rid of the = sign)
        if(value == '='){
            let solution = eval(resultText)
            result.innerText = solution
            return true
        }
        
        //clear buttom C: if we press the button c it will borrar all calculation and it will return true,nothing else will do
        if(value.toLowerCase == 'c'){
            result.innerText = ''
            return true;
        }
        result.append(value)
          
    })
})


