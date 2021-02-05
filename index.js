var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = 'dice'+ randomNumber1 + '.png';
var imageSources = 'images/'+randomImage1;
document.querySelector('.img1').setAttribute('src',imageSources);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = 'dice'+ randomNumber2 + '.png';
var imageSources2 = 'images/'+randomImage2;
document.querySelector('.img2').setAttribute('src',imageSources2);

if(randomNumber1 > randomNumber2)
document.querySelector('h1').innerHTML="Player1 Win";
else if(randomNumber1 < randomNumber2)
document.querySelector('h1').innerHTML="Player2 Win";
else{
    document.querySelector('h1').innerHTML="Tie";
}