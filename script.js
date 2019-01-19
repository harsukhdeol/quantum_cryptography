
var i =0;
var images = [];
var time= 3000;

//image list

images[0] = "img1.jpg";
images[1] = "img2.jpg";
images[2] = "img3.jpg";

// Change Image

function changeImg(){
	document.slide.src= images[i];

	if (i<images.length-1){
		i++;
	}else{
		i =0;
	}

setTimeout("changeImg()",time);
}

window.onload= changeImg;

