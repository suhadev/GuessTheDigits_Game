let randomNumber
let circleClicked = false
let selectedCircle
let nextLineCounter = 0
function generateRandomNumber(max, min) {
    randomNumber = (Math.floor(Math.random() * (max - min) + min)).toString().split('')

    // console.log(randomNumber)

}
generateRandomNumber(1000, 2000)

function selectCircle(e,index) {
    if(circleClicked == false) {
        e.target.classList.add("selectedCircle")
        circleClicked = true
        selectedCircle = index
    }
}
function detectKey(event) {
    document.getElementById(selectedCircle).innerHTML = event.key
    let valueEntered = event.key
    // console.log(randomNumber.indexOf(valueEntered))
    if(randomNumber.indexOf(valueEntered)=== selectedCircle) {
        // console.log("CorrectNumber and location")
        document.getElementById(selectedCircle).classList.add("correctNumber-Position")
    } else if(randomNumber.indexOf(valueEntered)!== -1){
        // console.log("correct number wron position")
        document.getElementById(selectedCircle).classList.add("correctNumber-wrongPosition")
    } else{
        // console.log("wrong Number")
        document.getElementById(selectedCircle).classList.add("wrongNumber")
    }
    document.getElementById(selectedCircle).classList.remove("selectedCircle")
    circleClicked = false
    nextLineCounter ++
    if(nextLineCounter >= 4) {
        document.getElementById("gameArea").innerHTML += `
        <div class="col-lg-12">
        <div class="row text-center">
                <div id="0" class="col-lg-1 circle-bg offset-md-4" onclick="selectCircle(event,0)">1</div>
                <div id="1" class="col-lg-1 circle-bg" onclick="selectCircle(event,1)">2</div>
                <div id="2" class="col-lg-1 circle-bg" onclick="selectCircle(event,2)">3</div>
                <div id="3" class="col-lg-1 circle-bg" onclick="selectCircle(event,3)">4</div>
        </div>
    </div>`
    nextLineCounter = 0
    }
}