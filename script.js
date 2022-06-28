/* Waiting for the DOM to be loaded before it executes the code. */
document.addEventListener('DOMContentLoaded', function(){
    
    /* Selecting all the classes from the HTML. */
    const calculator = document.querySelector(".calculator")
     /* Selecting the class buttons from calculator. */
    const buttons = calculator.querySelector(".calculator_buttons")
    const display = document.querySelector(".calculator_display")

    buttons.addEventListener('click', e =>{
        if(/* it checks if the element matches the selector. */
        e.target.matches('button')){
            /* It selects the button that was clicked. */
            const key = e.target
            /* It selects the data-action from the HTML. */
            const action = key.dataset.action

            /* It selects the text content from the button that was clicked. */
            const buttonContent = key.textContent
            /* It selects the text content from the display. */
            const shownNumber = display.textContent
            /* It selects the data-previuos-typed-key from the HTML. */
            const previuosTypedKey = calculator.dataset.previuosTypedKey
            if (!action) {
            /* It checks if the shownNumber is equal to 0 or the previuosTypedKey is equal to operator. */
                if(shownNumber === "0" /* It checks if the first value is true, if it is
                true it will return the first value, if it is false it will
                return the second value. */
                || previuosTypedKey === "operator"){
                display.textContent = buttonContent
            }  else{
                    display.textContent = shownNumber + buttonContent
            }
        }
            if  (action === 'addition' || 
                action === 'subtraction' || 
                action === 'multiply' || 
                action === 'division'){

                /* Stores the value of the operator that was clicked. */
                calculator.dataset.previuosTypedKey = "operator"
               /* Stores the first value that was typed in the calculator. */
                calculator.dataset.firstValue = shownNumber
                /* Stores the operator that was clicked. */
                calculator.dataset.operator = action
        }
            if(action === 'decimal'){
                display.textContent = shownNumber + '.'
                calculator.dataset.previuosTypedKey = "decimal"
            }
            if(action ==='delete'){
                display.textContent = 0
            }
            if(action === 'calculate'){
                display.textContent = calculate(calculator.dataset.firstValue, calculator.dataset.operator, shownNumber)
            }
        }
    });
});

function calculate(n1, operator, n2){
    let result = ""
    if(operator === "addition"){
        result = parseFloat(n1) + parseFloat(n2)
    }else if(operator === "subtraction"){
        result = parseFloat(n1) - parseFloat(n2)
    }else if(operator === "multiply"){
        result = parseFloat(n1) * parseFloat(n2)
    }else if(operator === "division"){
        result = parseFloat(n1) / parseFloat(n2)
    }
    return result
}