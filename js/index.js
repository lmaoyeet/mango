//------------------------REVOLUTIONARY VARIABLES------------------------
var context;
context = "start";
var monkey = "start";
//------------------------------------------------------------------
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if (new Date().getTime() - start > milliseconds) {
			break;
		}
	}
}
function Mango() {
	this.lang = "en-GB";
	this.speak = function(say) {
		if ("speechSynthesis" in window) {
			let speech;
			speech = new SpeechSynthesisUtterance(say);
			speech.lang = this.lang;
			window.speechSynthesis.speak(speech);
		}
	};
}
let voice;
voice = new Mango();
function say(thing) {
	voice.speak(thing);
}
//voice.speak("Hello, Its Mango, How may I help you?");

let mango;
mango = new Image();
// mango.src = 'http://clipart-finder.com/data/mini/1305737747.png';
//
//let backgrounder = new Image();
//backgrounder.src =
// "https://www.filterforge.com/filters/10000-ambientocclusion.jpg";
mango.src =
	"http://www.pngonly.com/wp-content/uploads/2017/05/Mango-PNG-Clipart-3.png";
//
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 200;
var srcFor = "hi";
c.beginPath();
c.lineWidth = 50;
var center = canvas.width / 2;
var cent = canvas.height / 2;
// c.drawImage(mango, center - 350, cent - 400);
function loadimg() {
	//  c.drawImage(backgrounder, 0, 0, canvas.width, canvas.height);
	c.drawImage(mango, center - 380, cent - 190);
}
window.onload = loadimg();

console.log("image loaded");
c.arc(center, cent, 90, 0, 2 * Math.PI);
c.stroke();
console.log("circle loaded");
//how old is mango?
var DateDiff = {
	inDays: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();

		return parseInt((t2 - t1) / (24 * 3600 * 1000));
	},

	inWeeks: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();

		return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
	},

	inMonths: function(d1, d2) {
		var d1Y = d1.getFullYear();
		var d2Y = d2.getFullYear();
		var d1M = d1.getMonth();
		var d2M = d2.getMonth();

		return d2M + 12 * d2Y - (d1M + 12 * d1Y);
	},

	inYears: function(d1, d2) {
		return d2.getFullYear() - d1.getFullYear();
	}
};

var dString = "December, 19, 2017";

var d1 = new Date(dString);
var d2 = new Date();
var daysold = DateDiff.inDays(d1, d2);
console.log("age loaded");
// voice thing now, aka annyang script

if (annyang) {
	console.log("annyang library loaded");
	var google = {
		"(mango) (could you)(can you)(please) open google": function() {
			window.open("https://google.com");
			say("here is the main google page");
		}
	};
	var wikipedia = {
		"(mango) (could you)(can you)(please) open wikipedia": function() {
			window.open("https://wikipedia.org");
			say("here is the main wikipedia page");
		}
	};
	var youtube = {
		"(mango)(could you)(can you)(please) open youtube": function() {
			window.open("https://youtube.com");
			say("here is your youtube homepage");
		}
	};
	var gmail = {
		"(mango)(can you)(could you)(please) open (my) gmail": function() {
			window.open("https://gmail.com");
			say("here is your google mail");
		}
	};
	var second = {
		"(mango)(could you)(can you)(please) open (my) second (g)mail": function() {
			window.open("https://mail.google.com/mail/u/1/#inbox");
			say("here is your google mail");
		}
	};
	var third = {
		"(mango)(could you)(can you)(please) open (my) third gmail": function() {
			window.open("https://mail.google.com/mail/u/2/#inbox");
			say("here is your google mail");
		}
	};
	var meow = {
		"(mango)(could you)(can you)(please) open drive": function() {
			window.open("https://drive.google.com/drive/u/0/");
			say("here is your google drive");
		}
	};
	var whip = {
		"(mango)(could you)(can you)(please) Whip": function() {
			window.open(
				"https://www.bing.com/search?q=watch+me+whip&PC=U316&FORM=CHROMN&adlt=strict"
			);
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance(
					"now watch me whip, now watch me nae nae"
				);
				speech.lang = "en-US";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var plus = {
		"(mango)(could you)(can you)(please) Open Google Plus": function() {
			window.open("https://plus.google.com/u/1/discover");
			say("here is your google plus");
		}
	};
	var coffeeAddicts = {
		"(mango)(could you)(can you)(please) Open The Coffee Addicts Homepage": function() {
			window.open("https://candycanekazoos.wixsite.com/thecoffeeaddicts");
			say("here is the coffee addicts homepage");
		}
	};
	var bing = {
		"(mango)(could you)(can you)(please) Open bing": function() {
			window.open("https://www.bing.com");
			say("here is the main bing page");
		}
	};
	var news = {
		"(mango)(could you)(can you)(please) show me the news": function() {
			window.open("https://news.google.com/news/?ned=us&gl=US&hl=en");
			say("Here is the latest news");
		}
	};
	var weather = {
		"(mango)(could you)(can you)(please) show me the weather": function() {
			window.open(
				"https://www.google.com/search?q=weather&rlz=1CADEAA_enUS711US711&oq=weather&aqs=chrome..69i64j69i59l2j69i57.8404j0j4&sourceid=chrome&ie=UTF-8&safe=active"
			);
			say("here is the weather");
		}
	};
	var amazon = {
		"(mango)(could you)(can you)(please) open amazon": function() {
			window.open("https://www.amazon.com/");
			say("here is your amazon");
		}
	};
	var facebook = {
		"(mango)(could you)(can you)(please) open facebook": function() {
			window.open("https://www.facebook.com");
			say("here is the main page for facebook");
		}
	};
	var pinterest = {
		"(mango)(could you)(can you)(please) open pinterest": function() {
			window.open("https://www.pinterest.com");
			say("here is your pinterest");
		}
	};
	var spotify = {
		"(mango)(could you)(can you)(please) open spotify": function() {
			window.open("https://open.spotify.com/browse/featured");
			say("here is the main page for spotify");
		}
	};
	var netflix = {
		"(mango)(could you)(can you)(please) open netflix": function() {
			window.open("https://www.netflix.com/browse");
			say("here is your netflix");
		}
	};
	var santa = {
		"(mango)(could you)(can you)(please) find santa": function() {
			window.open("https://santatracker.google.com/village.html");
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance(
					"I thought he was in the north pole?"
				);
				speech.lang = "en-US";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var twitter = {
		"(mango)(could you)(can you)(please) open twitter": function() {
			window.open("https://twitter.com");
			say("here is your twitter");
		}
	};
	var bbc = {
		"(mango)(could you)(can you)(please) open bbc": function() {
			window.open("https://bbc.com");
			say("here is some of the latest news");
		}
	};
	var cnn = {
		"(mango)(could you)(can you)(please) open cnn": function() {
			window.open("https://cnn.com");
			say("here is some of the latest news");
		}
	};
	var code = {
		"(mango)(could you) (can you)(please) open code": function() {
			window.open("https://code.org");
			say("here is the website for code");
		}
	};

	var search = {
		"(mango)(could you) (can you)(please) search google for *tag": function(
			tag
		) {
			window.open(
				"https://www.google.com/search?q=" +
					tag +
					"&rlz=1CADEAA_enUS711US711&oq=" +
					tag +
					"&aqs=chrome..69i64j0l2j69i60l3.2258j0j7&sourceid=chrome&ie=UTF-8&safe=active"
			);
			say("here is your search for" + tag);
		}
	};
	var youtubesearch = {
		"(mango) (could you)(can you)(please)search youtube for *tag": function(
			tag
		) {
			window.open(
				"https://www.youtube.com/results?search_query=" +
					tag +
					"&page=&utm_source=opensearch"
			);
			say("here is your search for" + tag);
		}
	};
	var spotifysearch = {
		"(mango) (could you)(can you)(please)search spotify for *tag": function(
			tag
		) {
			window.open("https://open.spotify.com/search/results/" + tag);
			say("here is your search for" + tag);
		}
	};

	var thanks = {
		"thanks (mango)": function() {
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance("your welcome");
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var thankyou = {
		"thank you (mango)": function() {
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance("your welcome");
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var wikisearch = {
		"(mango) (could you)(can you)(search) wiki(pedia) (for) *tag": function(
			tag
		) {
			window.open("https://en.wikipedia.org/wiki/" + tag);
			say("here is your search for" + tag);
		}
	};
	var soundtrap = {
		"(mango) (could you)(can you)(please)open soundtrap": function() {
			window.open("http://soundtrap.com");
			say("here is your soundtrap page");
		}
	};
	var soundation = {
		"(mango)(could you)(can you)(please) open soundation": function() {
			window.open("http://soundation.com");
			say("here is your soundation page");
		}
	};
	var fourth = {
		"(mango)(could you)(can you)(please) open (my) fourth gmail": function() {
			window.open("https://mail.google.com/mail/u/3/");
		}
	};
	var ck12 = {
		"(mango)(could you)(can you)(please) open ck12": function() {
			window.open("http://ck12.org");
			say("here is the ck 12 homepage");
		}
	};
	var greet = {
		"(hello)(hi)(greetings)(oi mate)(hey mango)": function() {
			var random = Math.floor(Math.random() * 3 + 1);
			//first responce
			if (random == 1) {
				if ("speechSynthesis" in window) {
					var speech = new SpeechSynthesisUtterance("Hello");
					speech.lang = "en-GB";
					window.speechSynthesis.speak(speech);
				}
				//second responce
			} else if (random == 2) {
				if ("speechSynthesis" in window) {
					var stupid = new SpeechSynthesisUtterance("Hi");
					stupid.lang = "en-GB";
					window.speechSynthesis.speak(stupid);
				}
			} else if (random == 3) {
				//third responce
				if ("speechSynthesis" in window) {
					var monkeybutt = new SpeechSynthesisUtterance("Greetings");
					monkeybutt.lang = "en-GB";
					window.speechSynthesis.speak(monkeybutt);
				}
				//End Greeting
			}
		}
	};
	var myspace = {
		"(mango)(could you)(can you)(please) open myspace": function() {
			window.open("http://myspace.com");
			say("here is your my space");
		}
	};
	var answers = {
		"(mango)(could you)(can you)(please) open answers": function() {
			window.open("http://answers.com");
			say("here is answers");
		}
	};
	//prototyping math
	var maths = {
		"(mango)(could you please tell me)(could you tell me) what(s)(is) *tag": function(
			tag
		) {
			var math = eval(tag);
			var item = tag;
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance(item + "is" + math);
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var maths2 = {
		"(mango) what(s)(is) *tag": function(tag) {
			var math2 = eval(tag);
			var item2 = tag;
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance(item2 + "is" + math2);
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var meaningoflife = {
		"(mango)(could you tell me)(could you please tell me) what is the meaning of life": function() {
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance("the meaning of life is 42");
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var meaningoflife2 = {
		"(mango)(could you tell me)(could you please tell me) whats the meaning of life": function() {
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance("the meaning of life is 42");
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var bigshaq = {
		"(mango)(could you tell me)(could you please tell me) whats 2 + 2 - 1": function() {
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance(
					"2 + 2 is 4, minus one thats free quick mafs"
				);
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var act = {
		"(hey)(hello)(oi)(are you there) mango": function() {
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance("Yes?");
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var nvm = {
		"nevermind (mango)": function() {
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance("Okay");
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	//yay this works!!!!!
	var anyweb = {
		"(mango)(could you please)(could you) go to *tag": function(tag) {
			var str = tag;
			str = str.replace(/\s+/g, "");
			window.open("http://" + str);
			say("here is" + tag);
		}
	};
	//That up there would be useful. Keep the str.replace() in utility belt :)
	//more commands
	var amazonsearch = {
		"(mango)(can you please)(can you) search amazon for *tag": function(tag) {
			window.open(
				"https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=" +
					tag
			);

			say("here is your search for" + tag);
		}
	};
	var wikihowsearch = {
		"(mango)(can you please)(can you) search wikihow for *tag": function(tag) {
			var sear = tag;
			sear = sear.replace(/\s+/g, "+");
			var search = "https://www.wikihow.com/wikiHowTo?search=" + sear;
			window.open(search);
			say("here is your search for" + tag);
		}
	};
	var bingsearch = {
		"(mango)(can you please)(can you) search bing for *tag": function(tag) {
			var sear = tag;
			var wind =
				"https://www.bing.com/search?q=" +
				tag +
				"&qs=n&form=CHRDEF&pc=U316&sp=-1&pq=" +
				tag +
				"+" +
				tag +
				"&sc=8-7&sk=&cvid=17DEC7FA99A64F66AB5D2D69DD3E3108&adlt=strict";
			window.open(wind);
			say("here is your search for" + tag);
		}
	};
	var clone = {
		"(mango)(can you)(can you please)(can you) clone yourself": function() {
			window.open("https://codepen.io/TheCoffeeAddicts/pen/KZgmpa");
		}
	};
	var newdoc = {
		"(mango)(can you please)(can you) create a new (google) doc": function() {
			window.open("https://docs.google.com/document/create");
			say("here is your new google document");
		}
	};
	var newslide = {
		"(mango)(can you please)(can you) create a new (google) slide": function() {
			window.open("https://docs.google.com/presentation/create");
			say("here is your new google presentation");
		}
	};
	var newdraw = {
		"(mango) create a new (google) drawing": function() {
			window.open("https://docs.google.com/drawings/create");
			say("here is your new google drawing");
		}
	};
	var newspread = {
		"(mango) create a new (google) (spread)sheet": function() {
			window.open("https://docs.google.com/spreadsheets/ccc?new");
			say("here is your new google spreadsheet");
		}
	};
	var newform = {
		"(mango) create a new (google) form": function() {
			window.open("forms.google.com/create");
			say("here is your new form");
		}
	};
	var newpen = {
		"(mango) create a new (codepen) pen": function() {
			window.open("https://codepen.io/pen");
			say("here is your new pen");
		}
	};
	var newproject = {
		"(mango) create a new (codepen) project": function() {
			window.open("https://codepen.io/project/editor");
			say("here is your new project");
		}
	};
	var netsearch = {
		"(mango)(please)(could you please)(could you) search netflix for *tag": function(
			tag
		) {
			window.open("https://www.netflix.com/search?q=" + tag);
			say("here is your search for" + tag);
		}
	};
	var yahoosearch = {
		"(mango)(please)(could you please)(could you) search yahoo for *tag": function(
			tag
		) {
			window.open(
				"https://search.yahoo.com/search?p=" +
					tag +
					"&fr=yfp-t&fp=1&toggle=1&cop=mss&ei=UTF-8&vm=r"
			);
			say("here is your search for" + tag);
		}
	};
	var walmartsearch = {
		"(mango)(please)(could you please)(could you) search walmart for *tag": function(
			tag
		) {
			window.open(
				"https://www.walmart5.com/search/?query=" + tag + "&cat_id=0"
			);
			say("here is your search for" + tag);
		}
	};
	var hyveesearch = {
		"(mango)(please)(could you please)(could you) search hyvee for *tag": function(
			tag
		) {
			window.open(
				"https://www.hy-vee.com/search/results.aspx?q=" +
					tag +
					"&form=cse-search-box&t13n_langs=en&cx=000921688332201118093%3Axl4jkfemw-e&cof=FORID%3A10&ie=UTF-8&sa=GO"
			);
			say("here is your search for" + tag);
		}
	};
	var targetsearch = {
		"(mango)(please)(could you please)(could you) search target for *tag": function(
			tag
		) {
			window.open("https://www.target.com/s?searchTerm=" + tag);
			say("here is your search for" + tag);
		}
	};
	var flettfarmsearch = {
		"(mango)(please)(could you please)(could you) search fleet farm for *tag": function(
			tag
		) {
			window.open("https://www.fleetfarm.com/search?Ntt=" + tag);
			say("here is your search for" + tag);
		}
	};
	var googlescholar = {
		"(mango)(please)(could you please)(could you) open google scholar": function() {
			window.open("https://scholar.google.com");
			say("here is the main page for google scholar");
		}
	};
	var gschsearch = {
		"(mango)(please)(could you please)(could you) search google scholar for *tag": function(
			tag
		) {
			window.open(
				"https://scholar.google.com/scholar?hl=en&as_sdt=0%2C16&q=" +
					tag +
					"&btnG="
			);

			say("here is your search for" + tag);
		}
	};
	var googleimages = {
		"(mango)(please)(could you please)(could you) open google image(s) (search)": function() {
			window.open("images.google.com");
			say("here is the google image home page");
		},
		"(mango)(please)(could you please)(could you) search for images of *tag": function(tag) {
			var gimsr = "https://www.google.com/search?tbm=isch&source=hp&biw=1366&bih=677&ei=_hOiWuPlGKPYjwT0_ayQBg&btnG=Search&q=" + tag + "&gs_l=img.3..0j0i8i30k1.241.2486.0.2688.16.13.0.1.1.0.273.1646.0j6j3.9.0....0...1ac.1.64.img..6.10.1666.0..0i10k1j0i30k1j0i5i30k1.0.TbK0qkfAhkE&safe=active&ssui=on";
		say("here is your search for images of" + tag);
		}
	};
	
	var gimagesearch = {
		"(mango)(please)(could you please)(could you) search (google) images for *tag": function(
			tag
		) {
			var search =
				"https://www.google.com/search?tbm=isch&source=hp&biw=1366&bih=677&ei=tGtaWveGMuWmjwSvnqUo&q=" +
				tag +
				"&oq=" +
				tag +
				"&gs_l=img.3..0l10.62634.62825.0.62999.6.6.0.0.0.0.147.366.1j2.3.0....0...1ac.1.64.img..3.3.363.0...0.m82LNK96YF0&safe=active";
			window.open(search);
			say("here is your search for" + tag);
		}
	};
	var gplussearch = {
		"(mango)(please)(could you please)(could you) search google plus for *tag": function(
			tag
		) {
			window.open("https://plus.google.com/s/" + tag + "/top");
			say("here is your search for" + tag);
		}
	};
	var song = {
		"(mango)(please)(could you please)(could you) create a new song": function() {
			window.open("http://soundtrap.com/studio/");
			say("here is your new song");
		}
	};
	var drivesearch = {
		"(mango) (can you)(could you) search (my) drive for *tag": function(tag) {
			window.open("https://drive.google.com/drive/u/0/search?q=" + tag);
			say("here is your search for" + tag);
		}
	};
	var gmailsearch = {
		"(mango)(please)(could you please)(could you) search my gmail for *tag": function(
			tag
		) {
			var tagg = tag;
			var wind = "https://mail.google.com/mail/u/0/#search/" + tagg;
			window.open(wind);
			say("here is your search for" + tag);
		}
	};
	var god = {
		"(mango)(tell me)(can you tell me)(could you tell me) do you believe in god": function() {
			window.open("https://www.youtube.com/watch?v=owx3ao42kwI");
		}
	};
	var insult = {
		"(mango) insult me": function() {
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance("U smell like flours");
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var howoldismango = {
		"(mango) how old are you": function() {
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance(
					"I am " +
						daysold +
						"days old. i was created on December nineteenth two thousand seventeen by Samuel Reams"
				);
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var singasong = {
		"(mango) sing (me) a song": function() {
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance(
					"dee dee dee dah ditty doe doe dee dah ditty doe dee dee dee dah ditty doe doe dee dah ditty doe dee dee dee dah ditty doe doe dee dah ditty doe dee dee dee dah ditty doe doe dee dah ditty doe"
				);
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var email = {
		"(mango) (please) send an email to *tag": function(tag) {
			context = "email";
			var monkey = tag;
			monkey = monkey.replace(/at/g, "@");
			monkey = monkey.replace(/\s+/g, "");
			window.open("mailto:" + monkey);
		}
	};

	var prezicre = {
		"(mango) (please)(could you)(please) create (me) a new prezi (for me)": function() {
			window.open("https://prezi.com/p/create-prezi/");
			say("here is your new presentation");
		}
	};

	var dawae = {
		"(mango) do you know the way": function() {
			if ("speechSynthesis" in window) {
				var speech = new SpeechSynthesisUtterance(
					"my brutha, you need ebola to know da way"
				);
				speech.lang = "en-GB";
				window.speechSynthesis.speak(speech);
			}
		}
	};
	var magic = {
		"(mango) what day is it (today)": function() {
			window.open("https://www.checkiday.com/");
			say(
				"here is a list of national and international holidays that occur today"
			);
		}
	};
	//
	var newsonggen = {
		"(mango) generate a new song": function() {
			window.open("https://www.ampermusic.com/app#/compose-pro/124974");
			say("here is your new song");
		}
	};
	var stuffs = {
		"(mango) do stuff": function() {
			window.open(
				"https://www.google.com/search?q=cats+knocking+stuff+over&safe=active&rlz=1CADEAA_enUS711US711&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiGzvCnloPZAhWb8oMKHTvcCngQ_AUICygC&biw=1366&bih=677"
			);

			say(
				"here is your search for cats knocking stuff over even though you didnt search for it i will still bring it up any ways haha"
			);
		}
	};
	var wish = {
		"(mango)(can you) search wish for *tag": function(tag) {
			window.open("https://www.wish.com/search/" + tag);
			say("here is your search for" + tag);
		}
	};
	var soundcloud = {
		"(mango) open soundcloud": function() {
			window.open("https://soundcloud.com");
			say("here is the main page for sound cloud");
		}
	};
	var soundsearch = {
		"(mango)(can you) search soundcloud for *tag": function(tag) {
			window.open("https://soundcloud.com/search?q=" + tag);
			say("here is your search for" + tag);
		}
	};
	var whosit = {
		"(mango)(could you tell me) who (is)(are)(a)(the)*tag": function(tag) {
			var search =
				"https://www.google.com/search?tbm=isch&source=hp&biw=1366&bih=677&ei=tGtaWveGMuWmjwSvnqUo&q=" +
				tag +
				"&oq=" +
				tag +
				"&gs_l=img.3..0l10.62634.62825.0.62999.6.6.0.0.0.0.147.366.1j2.3.0....0...1ac.1.64.img..3.3.363.0...0.m82LNK96YF0&safe=active";
			say("here is your search for" + tag);
			window.open(search);
		}
	};
	var killsam = {
		"(mango) kill *tag": function(tag) {
			window.open("https://www.wikihow.com/Load-and-Fire-a-9mm-Pistol");
			say("just joking I hope?");
		}
	};
	var howto = {
		"(mango) how to *tag": function(tag) {
			window.open("https://www.wikihow.com/wikiHowTo?search=" + tag);
			say("here is your search for" + tag);
		}
	};
	var letstalk = {
		"mango(i need to)(lets)(can we)(should we)(please can we)(please) talk": function() {
			window.open(
				"https://5e55505e088645ffbca9b7651ca18f77.production.codepen.plumbing/mangospeak.html"
			);
		}
	};
	var donetalking = {
		"(mango)(i am)(i should be)(im) done talking": function() {
			window.close(
				"https://5e55505e088645ffbca9b7651ca18f77.production.codepen.plumbing/mangospeak.html"
			);
		}
	};
	var die = {
		"(mango)(go)(you should)(just)(fucking) die": function() {
			window.close();
		}
	};
	var foescrash = {
		"(mango) crash (my) computer": function() {
			say("You are going to get crashed in 3");
			say("2");
			say("1");
			say("Have a nice day.");
			while (1 == 1) {
				window.open("");
			}
		}
	};
	var newL = {
		"(mango) what (is)(are)(were)(the)*tag": function(tag) {
			var url = tag;
			window.open(
				"https://www.google.com/search?q=" +
					tag +
					"&rlz=1CADEAA_enUS711US711&oq=" +
					tag +
					"&aqs=chrome..69i64j0j69i60l3j0.1060j0j7&sourceid=chrome&ie=UTF-8&safe=active"
			);
		}
	};
	var myName = {
		"(hey)(hi)(hello)(mango) my name is *tag": function(tag) {
			voice.speak("hello" + tag);
			voice.speak("how are you today?");
			context = "hry";
		},
		"(hey)(hello)(hi)mango(its)it(s)(is)*tag": function(tag) {
			voice.speak("hello" + tag);
			voice.speak("how are you today?");
			context = "hry";
		},
		"(i)(im)(am) (doing) (absolutely)good": function() {
			if (context == "hry") {
				voice.speak("I am fine as well");
			}
		},
		"(i)(im)(am) (doing)(absolutely) wonderful": function() {
			if (context == "hry") {
				voice.speak("I am fine as well");
			}
		},
		"i(m)(am) (doing)(absolutely) bad": function() {
			if ((context = "hry")) {
				voice.speak("bad day?");
			}
		},
		"i(m)(am) (doing)(absolutely) horrible": function() {
			if (context == "hry") {
				voice.speak("thats not good");
			}
		},
		"i(m)(am)(absolutely) well": function() {
			if (context == "hry") {
				voice.speak("I am fine as well");
			}
		},
		"i(m)(am)(absolutely) horrible": function() {
			if (context == "hry") {
				voice.speak("im sorry");
			}
		},
		yeah: function() {
			if (context == "hry") {
				voice.speak("ok");
			}
		},
		yes: function() {
			if (context == "hry") {
				voice.speak("ok");
			}
		}
		// '(mango) how many lines of code(do)(you)(have)(make)(you)': function() {
		// 	voice.speak(43+927+94);//PUT REAL VALUES IN 2 ACTIVATE
		// },
	};
	var times = {
		"(mango) what time is it (right)(now)": function() {
			var currentTime = new Date(),
				hours = currentTime.getHours(),
				minutes = currentTime.getMinutes();
			if (hours > 12) {
				if (hours == 13) {
					hours = 1;
				} else if (hours == 14) {
					hours = 2;
				} else if (hours == 15) {
					hours = 3;
				} else if (hours == 16) {
					hours = 4;
				} else if (hours == 17) {
					hours = 5;
				} else if (hours == 18) {
					hours = 6;
				} else if (hours == 19) {
					hours = 7;
				} else if (hours == 20) {
					hours = 8;
				} else if (hours == 21) {
					hours = 9;
				} else if (hours == 22) {
					hours = 10;
				} else if (hours == 23) {
					hours = 11;
				} else if (hours == 24) {
					hours = 12;
				}
			}
			voice.speak("it is" + hours + ":" + minutes);
			sleep(500);
		},
		"(mango) what(s)(is) the time(right)(now)": function() {
			var currentTime = new Date(),
				hours = currentTime.getHours(),
				minutes = currentTime.getMinutes();
			if (hours > 12) {
				if (hours == 13) {
					hours = 1;
				} else if (hours == 14) {
					hours = 2;
				} else if (hours == 15) {
					hours = 3;
				} else if (hours == 16) {
					hours = 4;
				} else if (hours == 17) {
					hours = 5;
				} else if (hours == 18) {
					hours = 6;
				} else if (hours == 19) {
					hours = 7;
				} else if (hours == 20) {
					hours = 8;
				} else if (hours == 21) {
					hours = 9;
				} else if (hours == 22) {
					hours = 10;
				} else if (hours == 23) {
					hours = 11;
				} else if (hours == 24) {
					hours = 12;
				}
			}
			voice.speak("it is" + hours + ":" + minutes);
			sleep(500);
		},
		"(mango)what(s)(is) time (is)(it)(now)in finland": function() {
			var currentTime = new Date(),
				hours = currentTime.getHours() + 8,
				minutes = currentTime.getMinutes();
			if (hours > 12) {
				if (hours == 13) {
					hours = 1;
				} else if (hours == 14) {
					hours = 2;
				} else if (hours == 15) {
					hours = 3;
				} else if (hours == 16) {
					hours = 4;
				} else if (hours == 17) {
					hours = 5;
				} else if (hours == 18) {
					hours = 6;
				} else if (hours == 19) {
					hours = 7;
				} else if (hours == 20) {
					hours = 8;
				} else if (hours == 21) {
					hours = 9;
				} else if (hours == 22) {
					hours = 10;
				} else if (hours == 23) {
					hours = 11;
				} else if (hours == 24) {
					hours = 12;
				}
			}
			voice.speak("it is" + hours + ":" + minutes);
			sleep(500);
		}
	};
	var searches = {
		"(mango) search uke tabs for *tag": function(tag) {
			window.open("https://ukutabs.com/?s=" + tag);
			say("here is your search for" + tag);
		},
		"(mango) search (codepen) pens for *tag": function(tag) {
			window.open(
				"https://codepen.io/search/pens?q=" + tag + "&limit=all&type=type-pens"
			);
			say("here is your search for" + tag);
		},
		"(mango) search (codepen) projects for *tag": function(tag) {
			window.open("https://codepen.io/search/projects/?q=" + tag);
			say("here is your search for" + tag);
		},
		"(mango) search (google)(the)(recent) news for (the)(those)*tag": function(
			tag
		) {
			window.open(
				"https://news.google.com/news/search/section/q/" +
					tag +
					"/" +
					tag +
					"?hl=en&gl=US&ned=us"
			);
			say("here is your search for" + tag);
		},
		"(mango) search (google) maps for *tag": function(tag) {
			window.open("https://www.google.com/maps/search/" + tag);
			say("here is your search for" + tag);
		},
		"(mango) open (google) flights": function(tag) {
			window.open("https://www.google.com/flights/?gl=us");
		},
		"(mango) search (google) books for *tag": function(tag) {
			window.open(
				"https://www.google.com/search?q=" +
					tag +
					"&safe=active&gl=us&source=lnms&tbm=bks&sa=X&ved=0ahUKEwj16Ine59LZAhUFA6wKHW3NCooQ_AUIDygB&biw=1366&bih=677"
			);
			say("here is your search for" + tag);
		},
		"(mango) how do you *tag": function(tag) {
			window.open("https://www.wikihow.com/wikiHowTo?search=" + tag);
			say("here is your search for" + tag);
		},
		"(mango) search national geographic for *tag": function(tag) {
			window.open("https://www.nationalgeographic.com/search/?q=" + tag);
			say("here is your search for" + tag);
		},
		"(mango) open national geographic": function() {
			window.open("https://www.nationalgeographic.com");
			say("here is the national geographic home page");
		},
		"(mango) search (the)(web)(internet) for *tag": function(tag) {
			window.open(
				"https://www.google.com/search?q=" +
					tag +
					"&rlz=1CADEAA_enUS711US711&oq=" +
					tag +
					"&aqs=chrome..69i64j0l5.12674j1j7&sourceid=chrome&ie=UTF-8&safe=active"
			);
			say("here is your search for" + tag);
		},
		"(mango) search cnn for *tag": function(tag) {
			window.open("https://www.cnn.com/search/?q=" + tag);
			say("here is your search for" + tag);
		},
		"(mango) search live science for *tag": function(tag) {
			window.open("https://www.livescience.com/search?q=" + tag);
			say("here is your search for" + tag);
		},
		"(mango) search github for *tag": function(tag) {
			window.open(
				"https://github.com/search?utf8=%E2%9C%93&q=" + tag + "&type="
			);
			say("here is your search for" + tag);
		},
		"(mango) open github(please)": function() {
			window.open("https://github.com");
			say("here is the main github page");
		},
		"(mango) search space(.com) for *tag(please)": function(tag) {
			window.open("https://www.space.com/search?q=" + tag);
			say("here is your search for" + tag);
		},
		"(mango) open space(.com)(news)(please)": function() {
			window.open("https://space.com");
			say("here is the space dot com main page");
		},
		"(mango) what can you do?": function() {
			voice.speak("Click the link to see the list of commands");
		},
		"(mango) how (to)(do)(can)(you)(i) pronounce *tag": function(tag) {
			voice.speak(tag);
		},
		"(mango) search kaggle for *tag": function(tag) {
			window.open(
				"https://www.kaggle.com/datasets?sortBy=relevance&group=public&search=" +
					tag +
					"&page=1&pageSize=20&size=all&filetype=all&license=all"
			);
			say("here is your search for" + tag);
		},
		"(mango) open kaggle": function() {
			window.open("https://www.kaggle.com/datasets");
			say("here is the main kaggle page");
		},
		"(mango) Is that pretty neat": function() {
			//voice.speak('yeah boiiiiiiiiiii');
			window.open("https://www.youtube.com/watch?v=aa6Ncd_8-Ew");
		}
	};

	//MANGO ISH SMART
	//Maybe I should make the commands in an array and then just do for that array.length?
	var commandArray = [
		{
			"Mango what the heck": function() {
				say("wtf");
			}
		},
		{
			//Fill In Here
		},
		{
			//Fill In Here
		}
	];
	for (var i = 0; i < commandArray.length; i++) {
		annyang.addCommands(commandArray[i]);
	}
	annyang.addCommands(searches);
	annyang.addCommands(times);
	annyang.addCommands(myName);
	// annyang.addCommands(newL);
	annyang.addCommands(foescrash);
	//annyang.addCommands(die);

	annyang.addCommands(howto);
	annyang.addCommands(killsam);
	//annyang.addCommands(whosit);
	annyang.addCommands(soundsearch);
	annyang.addCommands(soundcloud);
	annyang.addCommands(wish);
	annyang.addCommands(stuffs);
	annyang.addCommands(newsonggen);
	annyang.addCommands(magic);
	// annyang.addCommands(rickroll);
	annyang.addCommands(dawae);
	annyang.addCommands(prezicre);
	annyang.addCommands(email);
	annyang.addCommands(singasong);
	annyang.addCommands(howoldismango);
	annyang.addCommands(insult);
	annyang.addCommands(god);
	annyang.addCommands(gmailsearch);
	annyang.addCommands(drivesearch);
	annyang.addCommands(song);
	annyang.addCommands(gplussearch);
	annyang.addCommands(gimagesearch);
	annyang.addCommands(googleimages);
	annyang.addCommands(gschsearch);
	annyang.addCommands(googlescholar);
	annyang.addCommands(flettfarmsearch);
	annyang.addCommands(targetsearch);
	annyang.addCommands(hyveesearch);
	annyang.addCommands(walmartsearch);
	annyang.addCommands(yahoosearch);
	annyang.addCommands(netsearch);
	annyang.addCommands(newproject);
	annyang.addCommands(newpen);
	annyang.addCommands(newform);
	annyang.addCommands(newspread);
	annyang.addCommands(newdraw);
	annyang.addCommands(newslide);
	annyang.addCommands(newdoc);
	annyang.addCommands(clone);
	annyang.addCommands(wikihowsearch);
	annyang.addCommands(act);
	annyang.addCommands(nvm);
	annyang.addCommands(amazonsearch);
	//adding commands
	annyang.addCommands(bigshaq);
	annyang.addCommands(meaningoflife2);
	annyang.addCommands(meaningoflife);
	//Any website: goto:
	annyang.addCommands(anyweb);
	// annyang.addCommands(anywebcom);
	//Yay now math works
	annyang.addCommands(maths);
	annyang.addCommands(maths2);
	//done wit matfs
	annyang.addCommands(myspace);
	annyang.addCommands(fourth);
	annyang.addCommands(greet);
	annyang.addCommands(soundation);
	annyang.addCommands(soundtrap);
	annyang.addCommands(wikisearch);
	annyang.addCommands(spotifysearch);
	annyang.addCommands(youtubesearch);
	annyang.addCommands(thanks);
	annyang.addCommands(thankyou);
	annyang.addCommands(code);
	annyang.addCommands(cnn);
	annyang.addCommands(bbc);
	annyang.addCommands(search);
	annyang.addCommands(twitter);
	annyang.addCommands(santa);
	annyang.addCommands(netflix);
	annyang.addCommands(spotify);
	annyang.addCommands(pinterest);
	annyang.addCommands(amazon);
	annyang.addCommands(facebook);
	annyang.addCommands(weather);
	annyang.addCommands(news);
	annyang.addCommands(bing);
	annyang.addCommands(coffeeAddicts);
	annyang.addCommands(plus);
	annyang.addCommands(third);
	annyang.addCommands(whip);
	annyang.addCommands(meow);
	annyang.addCommands(youtube);
	annyang.addCommands(second);
	annyang.addCommands(gmail);
	annyang.addCommands(wikipedia);
	annyang.addCommands(google);
	console.log("commands loaded");
	//speech kitt
	// Tell KITT to use annyang
	SpeechKITT.annyang();
	// Define a stylesheet for KITT to use
	SpeechKITT.setStylesheet(
		"https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css"
	);
	// Render KITT's interface
	SpeechKITT.vroom();
	// annyang.addCommands(commands);
	console.log("speechkitt loaded");
} else if (!annyang) {
	document.write('Speech Recognition is not supported');
  console.log("Speech Recognition is not supported");
}
//
//You're gonna need this some day:
//   str = str.replace(/at/g, "@");
// str = str.replace(/\s+/g, '');
//
