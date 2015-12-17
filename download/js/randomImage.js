var imageArray = new Array();

imageArray[0] = "images/pic1.jpg"; 
imageArray[1] = "images/pic2.jpg";
imageArray[2] = "images/pic3.jpg";
imageArray[3] = "images/pic4.jpg";
imageArray[4] = "images/pic5.jpg";
imageArray[5] = "images/pic6.jpg";
imageArray[6] = "images/pic7.jpg";
imageArray[7] = "images/pic8.jpg";
imageArray[8] = "images/pic9.jpg";
imageArray[9] = "images/pic10.jpg";
imageArray[10] = "images/pic11.jpg";
imageArray[11] = "images/pic12.jpg";
imageArray[12] = "images/pic13.jpg";
imageArray[13] = "images/pic14.jpg";
function doIt()
{
var rand = Math.floor(Math.random()*14); 

var randomImage = "url('"+imageArray[rand]+"')"
document.getElementById("banner").style.backgroundImage = randomImage;

}