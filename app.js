//Tuesday January 7 2025  - web app, casino slots that plays an audio file when 
//all three elements are the same file

const button = document.querySelector('.button-style');
//object for audio file that stored on macbook
const imageOne = document.getElementById("image-one")
const imageTwo = document.getElementById("image-two")
const imageThree = document.getElementById("image-three");
//popup container
const container = document.querySelector('#main-container');
const popUp = document.querySelector('#pop-up');
//close button for popup container 
const closeButton = document.querySelector('#close-button');

//sound file for win
const winnerSound = new Audio('assets/audio/winner.mp3');
//sound file for loss
// const lossSound = new Audio('');
//image pngs 
const images = {
    one: "assets/diamond.png",
    two: "assets/cherry.jpg",
    three: "assets/seven.jpg"
}
// array for the images
const arrayImages = [images.one, images.two, images.three];

//Fisher - Yates Shuffle algorithm - this changes the order of the elements in the array list
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index between 0 and i
      [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
}
//cycles through the images last element in the shuffled array is the choice
let delay = 100; 
async function runSpin(arr, delay, imagePos) {
    for (let i = 0; i < 5; i++) {
        for (const image of arr) {
        // Wait for 1 milisecond before showing the next image
        await new Promise(resolve => {
            setTimeout(() => {
            imagePos.setAttribute("src", image);
            resolve(); // Resolve the promise after the timeout
            }, delay);
        });
        }
    }
}
function setOpacity(){
    popUp.style.display = 'block';
    container.style.opacity = '0.2';
    button.setAttribute('disabled','');
}
button.addEventListener('click', function (){
    let randomizedArray = shuffleArray([...arrayImages]);
    let randomizedArrayTwo = shuffleArray([...arrayImages]); //learn more about this it only worked when we made a copy of the array
    let randomizedArrayThree = shuffleArray([...arrayImages]);
    runSpin(randomizedArray, delay, imageOne);
    runSpin(randomizedArrayTwo, delay, imageTwo);
    runSpin(randomizedArrayThree, delay, imageThree);
    youAreAWinner(randomizedArray[2], randomizedArrayTwo[2], randomizedArrayThree[2]);
})
closeButton.addEventListener('click', function (){
    popUp.style.display = 'none';
    container.style.opacity = '1';
    button.removeAttribute("disabled");
})
function youAreAWinner(element1, element2, element3){
    if (element1 === element2 && element2 === element3) {
        winnerSound.play();
        setOpacity();
        console.log("You are a winner!");
    } else {
        console.log("Not a winner");
    }
}  
// function youAreAWinner(randomizedArrayElement, randomizedArrayTwoElement, randomizedArrayThreeElement){
//     if (randomizedArrayElement === image.one && randomizedArrayTwoElement === image.one && randomizedArrayThreeElement === image.one){
//         winnerSound.play();
//     }
//     else if (randomizedArrayElement === image.two && randomizedArrayTwoElement === image.two && randomizedArrayThreeElement === image.two){
//         winnerSound.play();
//     }
//     else if(randomizedArrayElement === image.three && randomizedArrayTwoElement === image.three && randomizedArrayThreeElement === image.three){
//         winnerSound.play();
//     }
// }
//each image postion is being updated with the same src value



//last element of the casino is equal to 
// function determineWinner(){
//     if () {
        
//     }
// }


//to-do list

//popup banner bool flag turns on turning on the banner
//button turns 
//disabled attribute added once winner message comes up