let randomNumber
let circleClicked = false
let selectedCircle
let nextLineCounter = 0
let selectedElement
let rowCounter = 1
let chances = 4
function generateRandomNumber(max, min) {
    randomNumber = (Math.floor(Math.random() * (max - min) + min)).toString().split('')

     console.log(randomNumber)

}
generateRandomNumber(1000, 2000)

function selectCircle(e,index) {
    console.log(e.target)
    if(circleClicked == false) {
        e.target.classList.add("selectedCircle")
        circleClicked = true
        selectedElement = e.target
        selectedCircle = index
    }
}
function detectKey(event) {
   
    selectedElement.innerHTML = event.key
    let valueEntered = event.key
    // console.log(randomNumber.indexOf(valueEntered))
    if(randomNumber.indexOf(valueEntered)=== selectedCircle) {
        // console.log("CorrectNumber and location")
        selectedElement.classList.add("correctNumber-Position")
    } else if(randomNumber.indexOf(valueEntered)!== -1){
        // console.log("correct number wron position")
        selectedElement.classList.add("correctNumber-wrongPosition")
    } else{
        // console.log("wrong Number")
        selectedElement.classList.add("wrongNumber")
    }
    selectedElement.classList.remove("selectedCircle")
    circleClicked = false
    nextLineCounter ++
    console.log(nextLineCounter)
    console.log(rowCounter)
    
    if(nextLineCounter == 4 && rowCounter < 4) {
        rowCounter++
        console.log("next")
        document.getElementById("gameArea").innerHTML += `
        <div class="col-lg-12 text-center" style="margin-left:320px; margin-top:20px;">
                    <div class="row text-center">
                            <div id="0" class="col-lg-1 circle-bg offset-md-6" onclick="selectCircle(event,0)">1</div>
                            <div id="1" class="col-lg-1 circle-bg" onclick="selectCircle(event,1)">2</div>
                            <div id="2" class="col-lg-1 circle-bg" onclick="selectCircle(event,2)">3</div>
                            <div id="3" class="col-lg-1 circle-bg" onclick="selectCircle(event,3)">4</div>
                    </div>
                </div>`
    nextLineCounter = 0
    chances--
    
    console.log(rowCounter)
    }
    document.getElementById("instruction").innerHTML = "<h5>Guess the number behind each circle.You have "+chances+" chances</h5>"
    if(rowCounter == 4 && nextLineCounter == 4) {
        document.getElementById("instruction").innerHTML = "<h2>Game Over!</h2>"
        document.getElementById("instruction").classList.add("gameOver")
        
    }
    
}