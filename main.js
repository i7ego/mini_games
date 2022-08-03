let monyZak = document.getElementById("zak");
window.onload = function () {
	monyZak.focus(); 
}
 

function monyZak1() {
	"use strict";
	var monyZak = document.getElementById("zak").value,
		res = monyZak * 0.025;
		
	if (monyZak === "") {
			res = document.getElementById("res3").innerHTML = " This Field Can't Be Empty";
	} else if (isNaN(monyZak)) {
			res = document.getElementById("res3").innerHTML = " This Field Accept Numbers Only";
	} else if (monyZak === "0") {
			res = document.getElementById("res3").innerHTML = "الله يسهلك";
	} else if (monyZak < 0) {
			res = document.getElementById("res3").innerHTML = "انت جاي تشحت  ";
			
	} else {
			res = document.getElementById("res3").innerHTML = " زكاتك " + res + " جنيه";
	}	

}



function ageByDay() {
	"use strict";
	var age = document.getElementById("age").value,
		result = age * 365;
	
	if (age === "") {
		result = document.getElementById("result").innerHTML = " This Field Can't Be Empty";
	} else if (isNaN(age)) {
		result = document.getElementById("result").innerHTML = " This Field Accept Numbers Only";
	} else if (age === "0") {
		result = document.getElementById("result").innerHTML = "Your Age Isn't 0";
	} else if (age < 0) {
		result = document.getElementById("result").innerHTML = "انت الله يرحمك كان عندك  " + result + "يوم";
		
	} else {
		result = document.getElementById("result").innerHTML = " Your Age in Days Is " + result + " Days";
	}
}

function ageByHour() {
	"use strict";
	var age = document.getElementById("age1").value,
		result = age * 365 * 24;
	
	if (age === "") {
		result = document.getElementById("result2").innerHTML = " This Field Can't Be Empty";
	} else if (isNaN(age)) {
		result = document.getElementById("result2").innerHTML = " This Field Accept Numbers Only";
	} else if (age === "0") {
		result = document.getElementById("result2").innerHTML = "Your Age Isn't 0";
	} else if (age < 0) {
		result = document.getElementById("result2").innerHTML = "انت الله يرحمك كان عندك  " + result + "ساعة";
		
	} else {
		result = document.getElementById("result2").innerHTML = " Your Age in Hours Is " + result + " h";
	}
	
}

/*calc*/
/* ----- Calculator ----- */


function insert(num) {

	var a = document.form.textview;

	a.value += num;
}
function opt(amd) {
	var view = document.form.textview;
	if (view.value != "") {
		view.value += amd;
	}
}
function zero() {
	var view = document.form.textview;
	if (view.value != "") {
		view.value += '0';
	}
}
function equal() {
	var button = document.getElementsByClassName('none');
	var a = document.form.textview;
	var exp = a.value;

	if (exp) {
		try {a.value = eval(exp);}
		catch (e) {
			alert ("Syntax Error!");
			document.form.textview.value = 'Syntax Error!';
			none();
		}
	}
	if (a.value == 0) {
		a.value = "";
	}
	if(a.value == 'Infinity'){
		document.form.textview.value = "Can't divide by Zero!";
	   // button.onclick ='none()';
	   alert('Can\'t divide by Zero!')
	   none();
	}
}
function none() {
	alert('Press the Clear button!');
} 
function clean() {
	document.form.textview.value = '';
}

function back() {
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0, exp.length-1);
}


/*gamed*/

let title = document.querySelector('.titlegame');
let turn = 'x';
let squares = [];
function end(num1, num2, num3){
  title.innerHTML = `${squares[num1]} winner`;
  document.getElementById('item'+num1).style.background = '#000';
  document.getElementById('item'+num2).style.background = '#000';
  document.getElementById('item'+num3).style.background = '#000';
  
  setInterval(function(){title.innerHTML += '.'},1000);
  setTimeout(function(){location.reload()},4000)
}
function winner(){
  for (let i = 1; i<10;i++){
  squares[i] = document.getElementById('item' + i).innerHTML;
  }
  if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
  end(1,2,3);
  }
  else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != ''){
    end(4,5,6);
  } 
  else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != ''){
    end(7,8,9);
  }
  else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
    end(1,4,7);
  }
  else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != ''){
    end(2,5,8);
  }
  else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
    end(3,6,9);
  }
  else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != ''){
    end(1,5,9);
  }
  else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != ''){
    end(3,5,7);
  }
}
function game(id)
{
  let element = document.getElementById(id);
  if(turn === 'x' && element.innerHTML == '')
  {
    element.innerHTML = 'x';
    turn = 'o';
    title.innerHTML = 'o';
  }
  else if(turn === 'o' && element.innerHTML == ''){
    element.innerHTML = 'o';
    turn = 'x';
    title.innerHTML = 'x';
  }
  winner();
}

















