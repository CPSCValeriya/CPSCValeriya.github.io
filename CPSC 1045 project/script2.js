var name;

var age;
var zodiac;
var mood1;
var gender;
var submitb=document.getElementById("submitbutton");
submitb.addEventListener("click",runFunction);

var canvas = document.getElementById("canvasboard");
var ctx = canvas.getContext("2d");
var x=0;
var y=0;
var zodiacimg;

// Function runFunction runs when the user clicks the submit button. 

function runFunction(){

var age=document.getElementById("ageinput").value;
var name=document.getElementById("nameinput").value;
var zodiac=document.getElementById("zodiacinput").value;


	if (isNaN(age) || age < 1 || age > 120) {
	alert("The age must be a number! Please refresh and try again ");}
  else results();



	console.log(name);
	console.log(age);

	console.log(zodiac);
//	console.log(birthmonth);


}

//If the user has entered a valid age , function results will run. 
//The results function gets all of the users value, and creates a response depending on what the user has entered. 

function results(){

var age=document.getElementById("ageinput").value;
var name=document.getElementById("nameinput").value;
var zodiac=document.getElementById("zodiacinput").value;


moodcheck();



document.getElementById("yourinfobox").innerHTML = "Hi "+name+"! "+"You are "+age+" years old, and you are a "+zodiac+"!";


document.getElementById("newinfo").innerHTML = "<strong>Your star sign is so beautiful.</strong><br>It tells me so many wonderful things."


//HOROSCOPE STAR SIGN
	if (zodiac == "Pisces"){ zodiacPisces();
	document.getElementById("newinfo").innerHTML= "Phone calls and e-mails between you and your friends may get misplaced or otherwise go astray, " + zodiac + ". A little patience is called for when trying to reach anyone at this time, especially if modern technology is involved. on the fourth, the sun conjoins the Neptune in " + zodiac + ". on the full moon and the last moon on months last day, be the arbiter or peacemaker for some argumentative people. It will be easy <br><br> standout days: 4,6,16 <br> challenging days : 8 , 13.";
	}
		
		
	if (zodiac == "Aries") {zodiacAries();
	document.getElementById("newinfo").innerHTML= "Don't worry about coming on too strong or scaring away someone promising. <br> The right person will be drawn to your flame. Be sincere and sensational.<br><br> Standout days:5, 11, 17 <br> Challenging days: 2, 24 ";

	}
	if (zodiac == "Taurus"){ zodiacTaurus();
	document.getElementById("newinfo").innerHTML= "Get artistic and daring on a small scale for the full moon. Do miniature needlepoint or scrapbooking just for an hour or two. <br><br> Get big fun from small efforts. Attract all the attention that you could possibly want and enjoy every moment. Eat, sleep, and dream better, too. <br> <br>Standout days: 1, 6, 28 <br>Challenging days: 13, 23";
	}
	if (zodiac == "Capricorn") {zodiacCapricorn();
	document.getElementById("newinfo").innerHTML=" <strong>Appreciate the details of your world on the full moon.</strong> <br> Pay exquisite attention to the small scale as well as the big. A friendship or love relationship could develop some superficial complications. <br><br> Career and social image light up at the full moon, and blue moon, on the month's last day. Rock that interview, write that resume, relate well with co-workers, win points with management. <br><br>Standout days: 10, 17, 20<br>Challenging days: 13, 29" ;
	}
	if (zodiac == "Gemini") { zodiacGemini();
	 document.getElementById("newinfo").innerHTML= " Be a dedicated stay-at-home for the full moon. <br>If work or a social group gets over-the-top demanding or ambitious, let home embrace you with custom-made peace and quiet. <br> <br>Have faith in your many abilities and talents.  This gives you permission to take things more slowly.  Others may prefer brash and exciting. Let them.<br><br>Standout days: 2, 3, 19<br>Challenging days: 10, 25";
	 }
	if (zodiac == "Sagittarius"){ zodiacSagittarius();
	document.getElementById("newinfo").innerHTML="At the full moon, be the go-to person at work or in your social group. Perform well and you will deserve all the rewards. <br> Jupiter goes retrograde on the eighth. Look more closely at what is really lucky for you.Ingenious solutions will come out of nowhere, making it effortless.<br><br><strong> Be someone else's magic. </strong><br> <br>Standout days: 1, 16, 25<br>Challenging days: 8, 29 " ;
	}
	if (zodiac == "Aquarius") { zodiacAquarius();
	document.getElementById("newinfo").innerHTML=" On the full moon, don't let imagined or fantastic money plans or concerns disturb you. <br><strong>Things are fine. Make big plans,</strong> <br> but keep your actions modest and solid for now. On 28, Venus conjoins Uranus in Aries. Love isn't getting stale, but it might want some freshening up.<br> The world will feel much calmer and more beautiful no matter what happens. Make it contagious.<br><br>Standout days: 11, 23, 28<br>Challenging days: 25, 29" ;
	}
	if (zodiac == "Virgo"){ zodiacVirgo();
	document.getElementById("newinfo").innerHTML="The full moon starts your month off with a flash bang of self-confidence and fully deserved self-importance.<br><br> Be modest, but be fully you. The new moon on the seventeenth is for love and romance. You may not meet your soul mate, but you could clearly visualize such a person. Bask in the romantic glow of the day. On 22, Mercury goes retrograde in Aries. Reexamine something you've recently started. You could probably improve on it. <br><br>Standout days: 4, 5, 20<br>Challenging days: 10, 22" ;
	}
	if (zodiac == "Scorpio"){ zodiacScorpio();
	document.getElementById("newinfo").innerHTML=" For the full moon, romp on the big stage without having to be in the spotlight all the time. <br> Steal the scene - or the whole show. <br><br>A great, wild new idea could strike at any time.Be outrageous, feel romantic, and make no apology.<br><br><strong> Absorb the beauty around you that is usually overlooked.</strong><br><br>Standout days: 9, 11, 28<br>Challenging days: 4, 24" ;
	}
	if (zodiac == "Libra") {zodiacLibra();
	document.getElementById("newinfo").innerHTML="Make one tiny change now and turn an okay place into a haven from the blustery world. Enact your resolution to be healthier and more active. Or to vacuum or clean the litter box more often.<br><br><strong> Good intentions may lead nowhere, but they're still good. </strong><br>Love could come out of nowhere and surprise you that day. <br> Be clever and tactful. No one can resist you now.<br><br>Standout days: 6, 13, 19<br>Challenging days: 23, 25" ;
	}
	if (zodiac == "Leo"){	zodiacLeo();
	document.getElementById("newinfo").innerHTML="Trust your instincts and then fully commit to a new project or work already in progress. At the new moon on the seventeenth, let the outside world make its mad demands and requests on your time and attention.<br><br> If you have plans on tap, start them now. If not, make those plans! Don't know your neighbors? You may soon.<br><br>Standout days: 4, 13, 20<br>Challenging days: 18, 24";
	}
	if(zodiac== "Cancer") {zodiacCancer();
	document.getElementById("newinfo").innerHTML="Your own inclinations might lead you off in a glorious but dead-end direction. <br><br> The new moon on the seventeenth could show you how big the world really is. It won't be scary, and it may not last long, but welcome every moment that you have. <br><br>Standout days: 6, 13, 19<br>Challenging days: 10, 18";
	}


 //////////////////////////////////////////////


}

// Depending on what zodiac sign the user has entered, they will be shown their star sign in the canvas. 


function zodiacPisces(){
zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,0,120,260,350,x,y,100*3,100*3);}

}
function zodiacAries(){
zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,0,350,260,350,x,y,100*3,100*3);}
}
function zodiacTaurus(){
zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,180,350,260,350,x,y,100*3,100*3);}
}
function zodiacCapricorn(){
zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,350,120,260,350,x,y,100*3,100*3);}
}
function zodiacGemini(){
zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,350,350,260,350,x,y,100*3,100*3);}
}
function zodiacSagittarius(){
	zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,530,120,260,350,x,y,100*3,100*3);}
}
function zodiacAquarius(){
	zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,180,120,260,350,x,y,100*3,100*3);}
}
function zodiacVirgo(){
zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,530,350,260,350,x,y,100*3,100*3);}
}
function zodiacScorpio(){
zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,0,580,260,350,x,y,100*3,100*3);}
}
function zodiacLibra(){
zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,180,580,260,350,x,y,100*3,100*3);}
}
function zodiacLeo(){
zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,350,580,260,350,x,y,100*3,100*3);}
}

function zodiacCancer(){
zodiacimg = new Image();
zodiacimg.src = "zodiacimg.jpg";
zodiacimg.onload=function(){
ctx.drawImage(zodiacimg,530,580,260,350,x,y,100*3,100*3);}
}




// mood



function moodcheck(){
	mood1=document.getElementById("mood1").value;
console.log("hey "+mood1)

if (mood1=="happy") document.getElementById("moodbox").innerHTML = "Im glad to know you are "+mood1+"!"
if (mood1=="confused")  document.getElementById("moodbox").innerHTML = "Well that sucks to hear you are "+mood1+", let me help make you less "+mood1+"!"+"<br>"
if (mood1=="upset")  document.getElementById("moodbox").innerHTML = "It is no good to feel "+mood1+".Lets play this game to try and cheer you up."
if (mood1=="angry")  document.getElementById("moodbox").innerHTML = "Oh no!Why are you "+mood1+"?! Lets relax a little, play a game..."
if (mood1=="excited")  document.getElementById("moodbox").innerHTML = "Hey my friend! Im glad to hear you are "+mood1+"! Lets play!"


}
