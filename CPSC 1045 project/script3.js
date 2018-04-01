var signs; 
var signs2;
var newinfo;


function compatible(){
	console.log("in compatible");
	
	signs=document.getElementById("signs1").value;
	signs2=document.getElementById("signs2").value;
	console.log(signs);
	console.log(signs2);
	
if (signs=="Aries" && signs2=="Gemini" || signs=="Gemini" && signs2=="Aries" || signs=="Gemini" && signs2=="Aquarius" || signs=="Aries" && signs2=="Aquarius" || signs=="Taurus" && signs2=="Cancer" || signs=="Cancer" && signs2=="Pisces" || signs=="Leo" && signs2=="Sagittarius" || signs=="Taurus" && signs2=="Virgo" || signs=="Libra" && signs2=="Gemini" || signs=="Cancer" && signs2=="Scorpio" || signs=="Sagittarius" && signs2=="Aries" || signs=="Capricorn" && signs2=="Taurus" || signs=="Gemini" && signs2=="Aquarius" || signs=="Scorpio" && signs2=="Pisces" 
|| /*backwards*/ signs=="Aquarius" && signs2=="Gemini" || signs=="Aquarius" && signs2=="Aries" || signs=="Cancer" && signs2=="Taurus" || signs=="Pisces" && signs2=="Cancer" || signs=="Sagittarius" && signs2=="Leo" || signs=="Virgo" && signs2=="Taurus" || signs=="Gemini" && signs2=="Libra" || signs=="Scorpio" && signs2=="Cancer" || signs=="Aries" && signs2=="Sagittarius" || signs=="Taurus" && signs2=="Capricorn" || signs=="Aquarius" && signs2=="Gemini" || signs=="Pisces" && signs2=="Scorpio" || signs=="Aries" && signs2 =="Aries" || signs=="Leo" && signs2 =="Leo" || signs=="Sagittarius" && signs2 =="Sagittarius" || signs=="Taurus" && signs2 =="Taurus" || signs=="Virgo" && signs2 =="Virgo" 
|| signs=="Capricorn" && signs2 =="Capricorn" || signs=="Gemini" && signs2=="Leo" || signs=="Scorpio" && signs2=="Virgo" || signs=="Leo" && signs2=="Gemini" || signs=="Cancer" && signs2=="Virgo" || signs=="Virgo" && signs2=="Cancer" || signs=="Cancer" && signs2=="Capricorn" || signs=="Capricorn" && signs2=="Cancer" ||signs=="Gemini" && signs2=="Gemini" || signs=="" && signs2=="" || signs=="Libra" && signs2=="Libra" || signs=="Aquarius" && signs2=="Aquarius" || signs=="Cancer" && signs2=="Cancer" || signs=="Scorpio" && signs2=="Scorpio" || signs=="Pisces" && signs2=="Pisces" || signs=="Taurus" && signs2=="Scorpio" || signs=="Scorpio" && signs2=="Taurus" || signs=="Leo" && signs2=="Aries" || signs=="Aries" && signs2=="Leo" || signs=="Sagittarius" && signs2=="Aquarius" ) {
perfectCompatibility();
}

if(signs=="Aries" && signs2=="Virgo" || signs=="Virgo" && signs2=="Aries" || signs=="Aries" && signs2=="Pisces" || signs=="Pisces" && signs2=="Aries" || signs=="Leo" && signs2=="Taurus" || signs=="Taurus" && signs2=="Leo" ||  signs=="Sagittarius" && signs2=="Cancer" || signs=="Cancer" && signs2=="Sagittarius" || signs=="Leo" && signs2=="Aquarius" || signs=="Aquarius" && signs2=="Leo" || signs=="Leo" && signs2=="Cancer" || signs=="Cancer" && signs2=="Leo" || signs=="Leo" && signs2=="Scorpio" || signs=="Scorpio" && signs2=="Leo" || signs=="Leo" && signs2=="Pisces" || signs=="Pisces" && signs2=="Leo" || signs=="Sagittarius" && signs2=="Scorpio" || signs=="Scorpio" && signs2=="Sagittarius" || 
 signs=="Pisces" && signs2=="Sagittarius" || signs=="Sagittarius" && signs2=="Pisces" ||signs=="Leo" && signs2=="Taurus" || signs=="Taurus" && signs2=="Leo" || signs=="Taurus" && signs2=="Libra" || signs=="Libra" && signs2=="Taurus" || signs=="Leo" && signs2=="Virgo" || signs=="Virgo" && signs2=="Leo" || signs=="Leo" && signs2=="Aquarius" || signs=="Aquarius" && signs2=="Leo" || 
 signs=="Gemini" && signs2=="Sagittarius" ||signs=="Virgo" && signs2=="Capricorn" ||signs=="Leo" && signs2=="Libra" ||signs=="Libra" && signs2=="Leo" ||   signs=="Capricorn" && signs2=="Virgo" ||  signs=="Taurus" && signs2=="Pisces" || signs=="Virgo" && signs2=="Scorpio" ||signs=="Scorpio" && signs2=="Virgo" ||  signs=="Pisces" && signs2=="Taurus" || signs=="Sagittarius" && signs2=="Libra" || signs=="Aquarius" && signs2=="Libra" || signs=="Pisces" && signs2=="Capricorn" ||signs=="Sagittarius" && signs2=="Gemini" || signs=="Virgo" && signs2=="Gemini" || signs=="Gemini" && signs2=="Virgo" || signs=="Gemini" && signs2=="Capricorn" || signs=="Capricorn" && signs2=="Gemini" || signs=="Libra" && signs2=="Aries" || signs=="Aries" && signs2=="Libra" || signs=="Taurus" && signs2=="Libra" || signs=="Libra" && signs2=="Taurus" || signs=="Pisces" && signs2=="Libra" || signs=="Libra" && signs2=="Pisces" || signs=="Aquarius" && signs2=="Scorpio" || signs=="Scorpio" && signs2=="Aquarius" || signs=="Pisces" && signs2=="Aquarius" || signs=="Aquarius" && signs2=="Pisces" || signs=="Cancer" && signs2=="Leo" || signs=="Leo" && signs2=="Cancer" || signs=="Cancer" && signs2=="Sagittarius" || signs=="Sagittarius" && signs2=="Cancer" || signs=="Scorpio" && signs2=="Aries" || signs=="Aries" && signs2=="Scorpio" || signs=="Leo" && signs2=="Scorpio" || signs=="Scorpio" && signs2=="Leo" || signs=="Pisces" && signs2=="Aries" || signs=="Pisces" && signs2=="Leo" || signs=="Leo" && signs2=="Pisces" || signs=="Pisces" && signs2=="Leo" || signs=="Sagittarius" && signs2=="Pisces" || signs=="Pisces" && signs2=="Sagittarius" || signs=="Pisces" && signs2=="Virgo" || signs=="Virgo" && signs2=="Pisces" ){
goodCompatibility();
}

if(signs=="Aries" && signs2=="Taurus"|| signs=="Taurus" && signs2=="Aries"|| signs=="Aries" && signs2=="Capricorn"|| signs=="Capricorn" && signs2=="Aries"|| signs=="Aries" && signs2=="Cancer"|| signs=="Cancer" && signs2=="Aries"|| signs=="Scorpio" && signs2=="Aries"|| signs=="Aries" && signs2=="Scorpio"|| signs=="Leo" && signs2=="Virgo"|| signs=="Virgo" && signs2=="Leo"|| signs=="Leo" && signs2=="Capricorn"|| signs=="Capricorn" && signs2=="Leo"|| signs=="Taurus" && signs2=="Sagittarius"|| signs=="Sagittarius" && signs2=="Taurus"|| signs=="Sagittarius" && signs2=="Virgo"|| signs=="Virgo" && signs2=="Sagittarius"|| signs=="Sagittarius" && signs2=="Capricorn"|| signs=="Capricorn" && signs2=="Sagittarius"||  signs=="Taurus" && signs2=="Aries"|| signs=="Aries" && signs2=="Taurus"|| signs=="Taurus" && signs2=="Sagittarius"|| signs=="Sagittarius" && signs2=="Taurus"|| signs=="Taurus" && signs2=="Gemini"|| signs=="Gemini" && signs2=="Taurus"|| signs=="Taurus" && signs2=="Aquarius"|| signs=="Aquarius" && signs2=="Taurus"|| signs=="Virgo" && signs2=="Aries"|| signs=="Aries" && signs2=="Virgo"|| signs=="Virgo" && signs2=="Sagittarius"|| signs=="Sagittarius" && signs2=="Virgo"|| signs=="Virgo" && signs2=="Gemini"|| signs=="Virgo" && signs2=="Libra"|| signs=="Libra" && signs2=="Virgo"|| signs=="Capricorn" && signs2=="Sagittarius"|| signs=="Sagittarius" && signs2=="Capricorn"|| signs=="Capricorn" && signs2=="Gemini"||
 signs=="Capricorn" && signs2=="Aquarius"|| signs=="Gemini" && signs2=="Taurus"|| signs=="Cancer" && signs2=="Gemini"|| signs=="Gemini" && signs2=="Cancer"|| signs=="Gemini" && signs2=="Scorpio"|| signs=="Scorpio" && signs2=="Gemini" || signs=="Gemini" && signs2=="Pisces"|| signs=="Pisces" && signs2=="Gemini"|| signs=="Libra" && signs2=="Virgo"||  signs=="Capricorn" && signs2=="Aquarius"|| signs=="Gemini" && signs2=="Taurus"|| signs=="Cancer" && signs2=="Gemini"|| signs=="Gemini" && signs2=="Cancer"|| signs=="Gemini" && signs2=="Scorpio"|| signs=="Scorpio" && signs2=="Gemini" || signs=="Gemini" && signs2=="Pisces"|| signs=="Pisces" && signs2=="Gemini"|| signs=="Libra" && signs2=="Virgo"|| signs=="Libra" && signs2=="Capricorn" || signs=="Capricorn" && signs2=="Libra" || signs=="Virgo" && signs2=="Libra" || signs=="Libra" && signs2=="Cancer" || signs=="Cancer" && signs2=="Libra" || signs=="Libra" && signs2=="Scorpio" || signs=="Scorpio" && signs2=="Libra" || signs=="Aquarius" && signs2=="Taurus" || signs=="Taurus" && signs2=="Aquarius" || signs=="Libra" && signs2=="Capricorn" || signs=="Aquarius" && signs2=="Virgo" || signs=="Virgo" && signs2=="Aquarius" || signs=="Aquarius" && signs2=="Capricorn" || signs=="Capricorn" && signs2=="Aquarius" || signs=="Libra" && signs2=="Capricorn" || signs=="Aquarius" && signs2=="Cancer" || signs=="Cancer" && signs2=="Aquarius" || signs=="Cancer" && signs2=="Aries" || signs=="Aries" && signs2=="Cancer" || signs=="Gemini" && signs2=="Cancer" || signs=="Cancer" && signs2=="Gemini" || signs=="Cancer" && signs2=="Libra" || signs=="Libra" && signs2=="Cancer" || signs=="Cancer" && signs2=="Aquarius" || signs=="Aquarius" && signs2=="Cancer" ||
 signs=="Scorpio" && signs2=="Sagittarius" || signs=="Sagittarius" && signs2=="Scorpio" || signs=="Libra" && signs2=="Capricorn" || signs=="Scorpio" && signs2=="Sagittarius" || signs=="Sagittarius" && signs2=="Scorpio" || signs=="Scorpio" && signs2=="Gemini" || signs=="Gemini" && signs2=="Scorpio" || signs=="Libra" && signs2=="Gemini" || signs=="Gemini" && signs2=="Libra" || signs=="Scorpio" && signs2=="Aquarius" || signs=="Aquarius" && signs2=="Scorpio" || signs=="Pisces" && signs2=="Gemini" || signs=="Gemini" && signs2=="Pisces" || signs=="Libra" && signs2=="Pisces" || signs=="Pisces" && signs2=="Libra" || signs=="Pisces" && signs2=="Aquarius" || signs=="Aquarius" && signs2=="Pisces" ){
badCompatibility();
}



}





function perfectCompatibility(){
newinfo=document.getElementById("infoboxLOVE").innerHTML ="Congratulations! It is a match made by the stars!<br><br>"+signs+" and "+signs2+" have 100% compatibility."
document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
}

function goodCompatibility(){
newinfo=document.getElementById("infoboxLOVE").innerHTML ="Not bad! <br><br>"+signs+" and "+signs2+" have 80% compatibility."	
document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
}

function badCompatibility(){
newinfo=document.getElementById("infoboxLOVE").innerHTML ="Bad news... <br><br>"+signs+" and "+signs2+" have 40% compatibility. But that does not mean you should not try!"
document.getElementById("yourPerson").innerHTML ="THANK YOU FOR PLAYING!";
}