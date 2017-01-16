function Level1() {
 console.log("Level1()");
 	document.getElementById("level_video").style.display = "inline";
 var opt1 = document.getElementById('option1');
 opt1.innerHTML = 'Next';
 opt1.setAttribute("onClick", "javascript:Level2();");

 var opt2 = document.getElementById('option2').style.display = "none";
  var opt3 = document.getElementById('option3').style.display = "none";



 document.getElementById('level_title').innerHTML = 'level 1';
 document.getElementById('level_video').setAttribute('src', 'beyond.mp4');
 document.getElementById('level_image').style.display = "none";
}


function Level2() {
 console.log("Level2()");
 document.getElementById('level_video').style.display = "none";
 document.getElementById('level_image').style.display = "inline";
 document.getElementById('level_video').pause()


 var opt1 = document.getElementById('option1');
 opt1.innerHTML = 'Circle';
 opt1.setAttribute("onClick", "javascript:Level2();");
 
 var opt2 = document.getElementById('option2');
 opt2.innerHTML = 'Cube';
 opt2.setAttribute("onClick", "javascript:Level3();");

 document.getElementById('level_title').innerHTML = 'level 2';
 document.getElementById('level_image').setAttribute('src', 'level2.jpg');
 var opt2 = document.getElementById('option2').style.display = "inline";

 
}

function Level3() {
 console.log("Level3()");
 document.getElementById("level_video").style.display = "none";
 document.getElementById('level_image').style.display = "inline";


 var opt1 = document.getElementById('option1');
 opt1.innerHTML = 'Home';
 opt1.setAttribute("onClick", "javascript:Level1();");
 
 var opt2 = document.getElementById('option2');
 opt2.innerHTML = 'Try again';
 opt2.setAttribute("onClick", "javascript:Level2();");

 document.getElementById('level_title').innerHTML = 'level 3';
 document.getElementById('level_image').setAttribute('src', 'game over.jpg');
 
}