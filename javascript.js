var quote = [
	["Postpone joy, it will diminish, postpone a problem, it will Grow","Paulo Coelho"],
	["Yesterday I was clever, so I wanted to change the world. Today I am cwise, so I am changing myself","Rumi"],
	["If you don\'t have the time to do it right, what makes you think you\ 'll have time to do it over?","Seth Godin"],
	["When I let of of what I am, I become what I might be","Lao Tzu"],
	["First you have to believe in yourself, before others can believe in you","Mimi Ikonn"],
	["I know not all that may be coming, but come what will, I'll go to it laughing.","Herman Melville"],
	["Shoot for the moon, even if you miss it you\'ll land among the stars","Les Brown"],
	["Life is just a story we create moment by moment","Alex Ikonn"],
	["I am the master of my fate, I am the captain of my soul","William Earnest Henley"],
	["None of us really change over time. We only become more fully what we are.","Anne Rice"],
];

var x=0;

function newQuote(){
document.getElementById("quote-box").innerHTML = "\"" + quote[x][0] + "\"";
	document.getElementById("author-box").innerHTML = "-- " + quote[x][1];
	var i = 1;
	if(i==1){
		remove();
		i--;
	}
}

function randomize(){
	x = Math.floor(Math.random()*(quote.length));
}

function tweetOut(){
	var twtLink =  'http://twitter.com/home?status=' +encodeURIComponent("\"" + quote[x][0] + "\"" + " --" + quote [x][1]);
 window.open(twtLink,'_blank');
 }

function remove(){
	document.getElementById("placeholder").remove();
}
