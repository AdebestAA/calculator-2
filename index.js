let numberBtns = document.querySelectorAll("[cal-digit]")
let operatorBtns = document.querySelectorAll("[cal-operator]")
let previousInput = document.querySelector("[cal-previous]")
let currentInput = document.querySelector("[cal-current]")
let deleteBtn = document.querySelector("[cal-del]")
let clearBtn = document.querySelector("[cal-clear]")
let equalToBtn = document.querySelector("[cal-equal]")

class Calculator {
    constructor(previousInput, currentInput) {
        this.previousInput = previousInput;
        this.currentInput = currentInput;
        this.operation = undefined;
        this.clear()
    }


    clear() {
        this.current = ''
        this.previous = ''
        this.operation = undefined

    }
    displayNumber(number) {
        this.current = this.current.toString()
        if (this.current.includes('.') && number == '.') {
            return
        }

        if (this.current.length === 20) {
            return
        }

        this.current += number;
        console.log(this.current);
    }

    operateValue(operator) {
        this.operation = operator;
        if (this.previous !== "" && this.current !== "") {
            this.equal()
        }

        this.previous = this.current
        this.current = ''
    }


    del() {
        this.current = this.current.toString()
        this.current = this.current.slice(0, -1)

    }
    equal() {
        let prev = parseFloat(this.previous)
        let curr = parseFloat(this.current);
        this.output = ''
        console.log(this.operation);

        if (this.operation == "+") {
            this.current = prev + curr
        }
        else if (this.operation == "-") {
            this.current = prev - curr
        }
        else if (this.operation == "X") {
            this.current = prev * curr
        }
        else if (this.operation == '/')
            this.current = prev / curr


    }


    update() {
        this.previousInput.innerText = this.previous + ' '
        this.currentInput.innerText = this.current
    }
}

let calculator = new Calculator(previousInput, currentInput)

numberBtns.forEach((numberBtn => {
    numberBtn.addEventListener('click', () => {

        let numberValue = numberBtn.innerText
        calculator.displayNumber(numberValue)
        calculator.update()
    })
}))


operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        let operatorValue = operatorBtn.innerText;

        calculator.operateValue(operatorValue)
        calculator.update()
    })
})

equalToBtn.addEventListener('click', () => {

    calculator.equal()
    calculator.update()
})

clearBtn.addEventListener('click', () => {
    calculator.clear()
    calculator.update()

})


deleteBtn.addEventListener('click', () => {
    calculator.del()
    calculator.update()

})

