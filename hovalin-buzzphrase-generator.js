$( document ).ready(function() {
	var currentQuote = 0;
	setInterval(function(){
	    $("#subheadline").text(quotes[currentQuote]);
	    currentQuote = (currentQuote + 1) % quotes.length;
	}, 3000);
});

var quotes = [
	"that you've heard about this week",
	"that you told your mom about",
	"that can cat-sit while you're on vacation",
	"programmed to remember your birthday",
	"to travel to Mars",
	"that can do your taxes",
	"that knows how to parallel park",
	"that can give your kids, 'the talk'",
	"/ canoe paddle"
];