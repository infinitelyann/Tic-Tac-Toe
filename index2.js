// const board = document.getElementById('board')
// board.onclick = () => {
// }
//allows the board to be clicked



const squares = document.getElementsByClassName('block');
let resetButton = document.getElementById('reset-button')
let playerX = document.getElementById('X')
let playerO = document.getElementById('O')
let turns = 0
let gamePlay = false
let playerXWins = false
let playerOWins = false
let score = 0
//setting variables 



playerX.addEventListener('click', () => {
    playerX = true
})

playerO.addEventListener('click', () => {
    playerO = true
})
//allowing an on click event per player that allows their turn to be recognized

let turnMsg = document.createElement('h1')
document.getElementById('player-buttons').appendChild(turnMsg);
turnMsg.innerText = "Click X or O Above and Make Your Move!"

//allows the user to see who's turn it is

Array.from(squares).forEach((element, index) => {
    //creates an array from the DIVs in html// 

    element.addEventListener('click', () => {
        //allows something to happen everytime one of those DIVs are clicked//
    
        //alows the div to only be clicked once
        if (playerX === true && element.innerText === '') {
            element.innerText = 'X'
            turns++
            playerX = false
            playerO = true

            turnMsg.innerHTML = 'Player O turn'

            gameBoardArr[index] = "X"
            endGameCheck()

            //function to allow the DIV to reflect players choice - setting the other player to false   
        } else if (playerO === true && element.innerText === '') {
            element.innerText = 'O'
            turns++
            playerO = false
            playerX = true
            turnMsg.innerHTML = 'Player X turn'

            gameBoardArr[index] = "O"
            endGameCheck()
        }
    })
})
let playerXChoices = ['X', 'X', 'X']


let playerOChoices = ['O', 'O', 'O']

let gameBoardArr = ['', '', '', '', '', '', '', '', '']
let endGameCheck = () => {
    let topRow = [gameBoardArr[0], gameBoardArr[1], gameBoardArr[2]]
    let midRow = [gameBoardArr[3], gameBoardArr[4], gameBoardArr[5]]
    let bottomRow = [gameBoardArr[6], gameBoardArr[7], gameBoardArr[8]]

    let finalValuesArr = [topRow, midRow, bottomRow]

    let columnChecker = () => {

        for (let i = 0; i < finalValuesArr.length; i++) {

            if ([finalValuesArr[0][i], finalValuesArr[1][i], finalValuesArr[2][i]].toString() == ["O", "O", "O"].toString()) {
               gamePlay = true   
               playerOWins = true
            } else if ([finalValuesArr[0][i], finalValuesArr[1][i], finalValuesArr[2][i]].toString() == ['X', 'X', 'X'].toString()) {
                gamePlay = true  
                playerXWins = true
                
            }
            
            
        }
    }
    let rowChecker = () => {
        for (let i = 0; i < finalValuesArr.length; i++) {
            
            if ([finalValuesArr[i]].toString() == ["O", "O", "O"].toString()) {
                gamePlay = true  
                playerOWins = true
            } else if ([finalValuesArr[i]].toString() == ['X', 'X', 'X'].toString()) {
                gamePlay = true  
                playerXWins = true
                }
            }
            
        }
        
    
    let diagonalChecker = () => {

        if([finalValuesArr[0][0], finalValuesArr[1][1], finalValuesArr[2][2]].toString() == ["O", "O", "O"].toString()) {
            finalValuesArr[2][2].innerHTML = "O"
            gamePlay = true  
            playerOWins = true
        } else if([finalValuesArr[0][0], finalValuesArr[1][1], finalValuesArr[2][2]].toString() == ['X', 'X', 'X'].toString()) {
            finalValuesArr[2][2].innerHTML = "X"
            gamePlay = true  
            playerXWins = true
        } else if([finalValuesArr[0][2], finalValuesArr[1][1], finalValuesArr[2][0]].toString() == ["O", "O", "O"].toString()) {
            finalValuesArr[2][0].innerHTML = "0"
            gamePlay = true  
            playerOWins = true
        } else if([finalValuesArr[0][2], finalValuesArr[1][1], finalValuesArr[2][0]].toString() == ['X', 'X', 'X'].toString()) {
            finalValuesArr[2][0].innerHTML = "X"
            gamePlay = true  
            playerXWins = true
        }
    }
    let drawChecker = () =>{
        if (turns >= 9 && gamePlay === false){
            turnMsg.innerText = "Tie!"
        }else if(playerOWins === true){ 
            turnMsg.innerText = "Player O Wins!"
        }else if(playerXWins === true){
            turnMsg.innerText = "Player X Wins!"
        }
      }
      let endOfGameStop = ()=>{
        if (gamePlay === true){
            playerO = false
            playerX = false
        }
      }
      
   
    columnChecker(finalValuesArr)
    rowChecker(finalValuesArr)
    diagonalChecker(finalValuesArr)
    drawChecker()
    endOfGameStop()
}
resetButton.addEventListener("click", ()=>{
    window.location.reload();

  })




// let result = ()=> {
//     if(columnChecker() === false && rowChecker() === false && diagonalChecker() === false){
//         console.log("hey")
//     }
        
  



     

    



















