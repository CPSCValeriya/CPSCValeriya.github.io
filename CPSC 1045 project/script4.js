var signs; 
var gender; 
var newinfo;
var signs;

var canvasP = document.getElementById("canvasP");
var ctx = canvasP.getContext("2d");

var zodiacimg;

var button4=document.getElementById("check");
button4.addEventListener("click", check);





function check(){
	signs_raw=document.getElementById("zodiacsign").value;
	gender=document.getElementById("genderselect").value;
	

	signs = signs_raw.toUpperCase();	

	if(!isNaN(signs)) {alert("Please fill in sign correctly! ")}	

	
	console.log("in check");
	console.log("gender=" + gender)
	if(signs=="ARIES" || signs=="TAURUS" || signs=="SAGITTARIUS" || signs=="VIRGO" || signs=="LIBRA" || signs=="SCORPIO" || signs=="LEO" || signs=="CANCER" || signs=="GEMINI" || signs=="CAPRICORN" || signs=="AQUARIUS" || signs=="PISCES") {
	document.getElementById("infoboxGAME").innerHTML =signs+"<br>Your zodiac personality match is...";
	results();}


	
	
}

function results(){
	
	// FEMALE PERSONALITY MATCH 
	
	
	console.log("in results" + signs);
	if (signs=="ARIES" && gender=="Female"){
	console.log("in signs");
	PersonalityAriesF(); }
	
	
	else if(signs=="TAURUS" && gender=="Female"){
		console.log("in taurus")
		PersonalityTaurusF();
	}
	
	else if (signs=="AQUARIUS" && gender=="Female"){
		PersonalityAquariusF();
	}
	
	else if(signs=="SCORPIO" && gender=="Female"){
		PersonalityScorpioF();
	}
	else if(signs=="LEO" && gender=="Female"){
		PersonalityLeoF();
	}
	else if (signs=="SAGITTARIUS" && gender=="Female"){
		PersonalitySagittariusF();
	}
	else if(signs=="VIRGO" && gender=="Female"){
		PersonalityVirgoF();
	
	}
	else if(signs=="CAPRICORN" && gender=="Female"){
		PersonalityCapricornF();
	}
	else if(signs=="GEMINI" && gender=="Female"){
		PersonalityGeminiF();
	}
	else if(signs=="LIBRA" && gender=="Female"){
		PersonalityLibraF();
	}
	else if(signs=="CANCER" && gender=="Female"){
		PersonalityCancerF();}
		
		//MALE PERSONALITY MATCH
		
		
	else if(signs=="PISCES" && gender=="Female"){PersonalityPiscesF();}
	else if (signs=="ARIES" && gender=="Male"){PersonalityAriesM();}
	else if (signs=="TAURUS" && gender=="Male"){PersonalityTaurusM();}
	else if (signs=="AQUARIUS" && gender=="Male"){PersonalityAquariusM();}
	else if (signs=="SCORPIO" && gender=="Male"){PersonalityScorpioM();}
	else if (signs=="LEO" && gender=="Male"){PersonalityLeoM();}
	else if (signs=="SAGITTARIUS" && gender=="Male"){PersonalitySagittariusM();}
	else if (signs=="VIRGO" && gender=="Male"){PersonalityVirgoM();}
	else if (signs=="LIBRA" && gender=="Male"){PersonalityLibraM();}
	else if (signs=="GEMINI" && gender=="Male"){PersonalityGeminiM();}
	else if (signs=="CAPRICORN" && gender=="Male"){PersonalityCapricornM();}
	else if (signs=="PISCES" && gender=="Male"){PersonalityPiscesM();}
	else if (signs=="CANCER" && gender=="Male"){PersonalityCancerM();}

	//RANDOM PERSONALITY MATCH
	
	else if (signs=="ARIES" && gender=="Random"){imageLoopAries();}
	else if (signs=="TAURUS" && gender=="Random"){imageLoopTaurus();}
	else if (signs=="LEO" && gender=="Random"){imageLoopLeo();}
	else if (signs=="SAGITTARIUS" && gender=="Random"){imageLoopSagittarius();}
	else if (signs=="LIBRA" && gender=="Random"){imageLoopLibra();}
	else if (signs=="VIRGO" && gender=="Random"){imageLoopVirgo();}
	else if (signs=="GEMINI" && gender=="Random"){imageLoopGemini();}
	else if (signs=="CAPRICORN" && gender=="Random"){imageLoopCapricorn();}
	else if (signs=="SAGITTARIUS" && gender=="Random"){imageLoopSagittarius();}
	else if (signs=="PISCES" && gender=="Random"){imageLoopPisces();}
	else if (signs=="CANCER" && gender=="Random"){imageLoopCancer();}
	else if (signs=="SCORPIO" && gender=="Random"){imageLoopScorpio();}
	else if (signs=="AQUARIUS" && gender=="Random"){imageLoopAquarius();}
	
	
}










function zodiaccheck(){}


//FEMALE PERSONALITY MATCH: CANVAS 

function PersonalityAriesF(){
	zodiacimg = new Image();
zodiacimg.src = "images/ladygaga.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"
}
}
function PersonalityTaurusF(){
	zodiacimg = new Image();
zodiacimg.src = "images/queen.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"
}
}


function PersonalityAquariusF(){
zodiacimg = new Image();
zodiacimg.src = "images/shakira.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"
}
}
function PersonalityScorpioF(){
zodiacimg = new Image();
zodiacimg.src = "images/mariecurie.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"
}
}
function PersonalityLeoF(){
zodiacimg = new Image();
zodiacimg.src = "images/madonna.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"
}
}
function PersonalitySagittariusF(){
zodiacimg = new Image();
zodiacimg.src = "images/edith.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}

function PersonalityVirgoF(){
zodiacimg = new Image();
zodiacimg.src = "images/agatha.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
	
}
function PersonalityCapricornF(){
zodiacimg = new Image();
zodiacimg.src = "images/michelleobama.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityGeminiF(){
	zodiacimg = new Image();
zodiacimg.src = "images/monroe.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityLibraF(){
zodiacimg = new Image();
zodiacimg.src = "images/thatcher.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityCancerF(){
zodiacimg = new Image();
zodiacimg.src = "images/frida.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}

function PersonalityPiscesF(){
zodiacimg = new Image();
zodiacimg.src = "images/rihanna.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}	
}


//MALE PERSONALITY MATCH: CANVAS

function PersonalityAriesM(){
zodiacimg = new Image();
zodiacimg.src = "images/jackie.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityTaurusM(){
zodiacimg = new Image();
zodiacimg.src = "images/tagore.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityAquariusM(){
zodiacimg = new Image();
zodiacimg.src = "images/lincoln.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityScorpioM(){
zodiacimg = new Image();
zodiacimg.src = "images/gates.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityLeoM(){
zodiacimg = new Image();
zodiacimg.src = "images/armstrong.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalitySagittariusM(){
zodiacimg = new Image();
zodiacimg.src = "images/beethoven.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityVirgoM(){
zodiacimg = new Image();
zodiacimg.src = "images/jackson.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityCapricornM(){
zodiacimg = new Image();
zodiacimg.src = "images/khorana.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityGeminiM(){
zodiacimg = new Image();
zodiacimg.src = "images/vanderbilt.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityLibraM(){
zodiacimg = new Image();
zodiacimg.src = "images/ghandi.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityCancerM(){
zodiacimg = new Image();
zodiacimg.src = "images/tesla.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"}
}
function PersonalityPiscesM(){
zodiacimg = new Image();
zodiacimg.src = "images/einstein.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML = "THANK YOU FOR PLAYING!"
}
}

// RANDOM PERSONALITY MATCH USING ARRAY /////////////////////////////////////////////////////////////////

function imageLoopAries(){
	
var images = ["images/ladygaga.jpg","images/jackie.jpg","images/jane.jpg"];
	var random= Math.floor(Math.random()*images.length);
	zodiacimg = new Image();
	zodiacimg.src=images[random];
	zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
	document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
	document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
	}

}
 
 
 function imageLoopTaurus(){
	 var images = ["images/tagore.jpg","images/queen.jpg","images/hepburn.jpg","images/freud.jpg"];
	var random= Math.floor(Math.random()*images.length);
	zodiacimg = new Image();
	zodiacimg.src=images[random];
	zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
	document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
	document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
 }
 }
 
  function imageLoopAquarius(){
	 var images = ["images/shakira.jpg","images/lincoln.jpg","images/ronaldo.jpg", "images/franklin.jpg"];
	var random= Math.floor(Math.random()*images.length);
	zodiacimg = new Image();
	zodiacimg.src=images[random];
	zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
	document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
	document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
 }
 }
 
  function imageLoopGemini(){
	 var images = ["images/monroe.jpg","images/vanderbilt.jpg","images/johnny.jpg","images/mccartney.jpg"];
	var random= Math.floor(Math.random()*images.length);
	zodiacimg = new Image();
	zodiacimg.src=images[random];
	zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
	document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
	document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
 }
 }
  function imageLoopLibra(){
	 var images = ["images/ghandi.jpg","images/thatcher.jpg","images/serena.jpg"];
	var random= Math.floor(Math.random()*images.length);
	zodiacimg = new Image();
	zodiacimg.src=images[random];
	zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
	document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
	document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
 }
 }
  function imageLoopScorpio(){
	 var images = ["images/gates.jpg","images/mariecurie.jpg", "images/aish.jpg", "images/kohli.jpg"];
	var random= Math.floor(Math.random()*images.length);
	zodiacimg = new Image();
	zodiacimg.src=images[random];
	zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
	document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
	document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
 }
 }
 
  function imageLoopSagittarius(){
	 var images = ["images/beethoven.jpg","images/edith.jpg", "images/taylorswift.jpg"];
	var random= Math.floor(Math.random()*images.length);
	zodiacimg = new Image();
	zodiacimg.src=images[random];
	zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
	document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
	document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
 }
 }
 
  function imageLoopCancer(){
	 var images = ["images/tesla.jpg","images/frida.jpg","images/kate.jpg"];
	var random= Math.floor(Math.random()*images.length);
	zodiacimg = new Image();
	zodiacimg.src=images[random];
	zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
	document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
	document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
 }
 }
 
  function imageLoopCapricorn(){
	 var images = ["images/khorana.jpg","images/michelleobama.jpg", "images/presley.jpg"];
	var random= Math.floor(Math.random()*images.length);
	zodiacimg = new Image();
	zodiacimg.src=images[random];
	zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
	document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
	document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
 }
 }
  function imageLoopVirgo(){
	 var images = ["images/jackson.jpg","images/agatha.jpg","images/mercury.jpg"];
	var random= Math.floor(Math.random()*images.length);
	zodiacimg = new Image();
	zodiacimg.src=images[random];
	zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
	document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
	document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
 }
 }
  function imageLoopPisces(){
	 var images = ["images/einstein.jpg","images/rihanna.jpg","images/jobs.jpg"];
	var random= Math.floor(Math.random()*images.length);
	zodiacimg = new Image();
	zodiacimg.src=images[random];
	zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
	document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
	document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
 }
 }
 
 function imageLoopLeo(){
	 var images = ["images/madonna.jpg", "images/armstrong.jpg","images/arnold.jpg"];
	 var random = Math.floor(Math.random()*images.length);
	 zodiac=new Image();
	 zodiacimg.src=images[random];
	 zodiacimg.onload=function(){
	ctx.drawImage(zodiacimg,50,0,290,300);
document.getElementById("canvasBorder").style.backgroundColor = "FloralWhite";
document.getElementById("canvasBorder").style.border="10px solid DarkMagenta";
document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
	 }
 }