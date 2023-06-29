function togglePortfolio(x){

    /*
        togglePortfolio(x) => x is an int, where 1 > x < 6
        x represents the portfolio tile being hovered
    */

    //List of instructions on how to move each tile
    var instructions = {
        "1": [
            {
                "name": "pftile-1",
                "size": [540, 540], //[height, width]
                "pos": "ignore"
            },
            {
                "name": "pftile-2",
                "size": [180, 180],
                "pos": [0, 185] //[top, left]
            },
            {
                "name": "pftile-3",
                "size": [180, 180],
                "pos": [0, 185] //[top, left]
            },
            // {
            //     "name": "pftile-4",
            //     "size": [180, 180],
            //     "pos": [0, 180] //[top, left]
            // }
        ]
    }

    //Pick an instruction set based on the received input:
    var instruction_set = instructions[x.toString()];

    for (var i = 0; i < instruction_set.length; i++){

        $("#" + instruction_set[i].name).animate({
            "height": instruction_set[i].size[0] + "px",
            "width": instruction_set[i].size[1] + "px"
        }, 250);

        if (instruction_set[i].pos !== "ignore"){
            $("#" + instruction_set[i].name).animate({
                "top": instruction_set[i].pos[0] + "px",
                "left": instruction_set[i].pos[1] + "px"
            })
        }

    }

}

//Settings for the github tile
var minimumWaitTime = 60; //minimum time between keystrokes in ms
var githubTexts = [
    `
#body_content h1 {
    font-size: 70px;
    font-family: "Open Sans";
    font-weight: 300;
    text-align: center;
    margin-bottom: 10px;
    padding: 0px;
}
~
#body_content h2 {
    font-size: 50px;
    font-family: "Open Sans";
    margin-top: 0px;
    text-align: center;
    font-weight: 300;
}
`,
`
//Define the server port:
var port = 27015 || process.env.PORT;
~
//Get the required modules to 
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
~
//Get the file system module:
var fs = require("fs");
~
//Get the hashing modules and crea
var jshashes = require("jshashes");
`,
`
#button_container {
    position: relative;
    width: 100%;
    height: 1150px;
    margin-top: 50px;
    text-align: center;
}
~
.button {
    position: relative;
    height: 360px;
    width: 360px;
    background-color: #000;
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding-top: 70px;
    padding-right: 20px;
    padding-left: 20px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
`,
`
var test_json = {
	"test0": {
		"asd": "asd",
		"dsa": "dsa"
	},
	"test1": ["asdfgh"]
}

edit = function(data){
		
	console.log("input", data);
	
	if (typeof data !== "object

	var primary_keys = Object.keys(data);
	
	for (var i = 0; i < primary_keys.length; i++){
`,
`
<!DOCTYPE html>
<html lang="en">
<script src="/socket.io/socket.io.js"></script>
~
<script src="/js/jquery.js"></script>
<script src="/js/jquery-ui.js"></script>
<script src="/js/jquery-ui.min.js"></script>
<script src="/js/framework.js"></script>
<script src="/js/parallax.js"></script>
~
<link href="https://fonts.google
<link rel="styleshe
~
<title>Overflow Prototype Platfo>
~
<!-- Start of Login Screen -->
<div id="login_screen" style="posit; 
`,
`
var hash_function = function(){
~
    const current_time = new Date();
    const random_number = Math.rand;
~
    const hash_current_time = md5.h;
    const hash_random_number = md5.;
~
    //We'll just conjoin the two st;
    //equals 16 for uniformity. The;
    //then cut that down to sixteen;
    //complete randomness over the ;
~
    //Since MD5 has a length of 32, 
    //starting point of the string f
    const hash1_pos = Math.floor(Mat
    const hash2_pos = Math.floor(Mat
`,
`
~
//Now we'll concat the items into t
const hash_part1 = hash_current_time
const hash_part2 = hash_random_numbe
~
//Now we'll concat them:
const concatted_hash = hash_part1 +
~
//Now hash it again just just to be
const final_hash = md5.hex(concatted
~    
//Now we're pretty much certain the 
//position
const result = final_hash.slice(0, 1
~
return result;
`
];

function addGithubText(i, textPosition, tag_id){

    /*     
        addGithubText() function
        * i = integer, index of the string to be typed in in githubTexts[]
        * textPosition = integer, the current position of the last typed in text of the string in githubTexts[i]
        * tag_id = string, id of the HTML element to be edited by the function
    */

    //Reset the text if this is a new iteration
    if (textPosition == 0){
        $("#" + tag_id).html("");
        console.log("Intialised new textPosition for " + tag_id);
    }

    var text = githubTexts[i];
    var wait = minimumWaitTime + Math.floor(Math.random()*100);

    //Check if we should start the next new recursive call:
    if (textPosition > text.length){

        //Create a newTextPosition, if we have typed everything:
        var randomIndex = ()=>{ return Math.floor(Math.random() * githubTexts.length) },
            newTextPosition = randomIndex();

        //Ensure newTextPosition and textPosition are different:
        while (i == textPosition){
            newTextPosition = randomIndex();
        }

        console.log("Initialising new textPosition: " + i + " to " + newTextPosition + ", (textPosition("+textPosition+") > text.length("+text.length+")): " + (textPosition > text.length));

        //Start the next recursive call:
        addGithubText(newTextPosition, 0, tag_id);

        //End this current recursive call
        return;

    }

    //Get the value of the string already on github-txt:
    var txt       = document.getElementById(tag_id),
        txt_value = txt.innerHTML,

    //Create a function to alter the text:
    alter_text = (string)=>{
        $("#" + tag_id).html(txt_value + string);

        //Recursively call the function to send the next keystroke
        addGithubText(i, textPosition + 1, tag_id);
    }

    if (text.charAt(textPosition) == " "){
        alter_text("&nbsp;");
    } else if (text.charAt(textPosition) == "~"){
        alter_text("<br>");
    } else if (
        text.charAt(textPosition) == ";" || 
        text.charAt(textPosition) == "{" ||
        text.charAt(textPosition) == "}" 
    ){ 
        alter_text(text.charAt(textPosition) + "<br>")
    } else {
        setTimeout(()=>{ alter_text(text.charAt(textPosition)); }, wait);
    }

}

//Information about the diferent sections on the page
var sections = [
    {
        "id": "landing-panel",
        "top": 0,
        "pos": 1,
    },
    {
        "id": "about",
        "top": 0,
        "pos": 2
    },
    {
        "id": "latest-project",
        "top": 0,
        "pos": 3
    },
    {
        "id": "portfolio",
        "top": 0,
        "pos": 4
    },
    {
        "id": "lets-connect",
        "top": 0,
        "pos": 5
    }
]

//Last item updated by sectionTracker
var lastItem = {
    "id": "landing-panel",
    "top": 0,
    "pos": 1,
}

function sectionTracker(){

    for (var i = 0; i < sections.length; i++){

        //Populate where the top of each item is 
        sections[i].top = document.getElementById(sections[i].id).offsetTop;

    }
    
    document.addEventListener("scroll", ()=>{

        var scrollPosition = window.scrollY;
        var sectionInfo    = sections.filter((x) => { return x.top >= scrollPosition })[0];

        $("#nav-" + sectionInfo.id).css({
            "text-decoration": "underline"
        });

        //$("#section-" + sectionInfo[0].pos).css({})

    });

}

document.onload = ()=>{

    window.mobileCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };
    
    // if (window.mobileCheck()){
    
    //     $("#mobile-detected").fadeIn();

    //     $("#mobile-detected").css({
    //         "display": "table"
    //     });
    
    // } else {
    //     $("#mobile-detected").fadeOut();
    // }

}

window.onload = ()=>{

    addGithubText(0, 0, "github-txt");
    addGithubText(1, 0, "stackoverflow-txt");
    addGithubText(2, 0, "linkedin-txt");

    //sectionTracker();

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var time_now = new Date();

    //Ensure #divider-month shows the correct date:
    $("#divider-month").html(months[time_now.getMonth()] + " " + time_now.getFullYear());

}

document.onmouseover = (e)=>{

    //On hover, get the id of the element the mouse is over:
    var id = e.target.id;
    var item = document.getElementById(id);

    console.log(item.innerHTML);

}