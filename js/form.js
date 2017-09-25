function checkCharacterFirst(firstName) {
		if (firstName.value != "") {
			document.getElementById('firstCross').src = "images/tick.png";
		} else {
			document.getElementById('firstCross').src = "images/cross.png";
		}
}
function checkCharacterSur(surName) {
		if (surName.value != "") {
			document.getElementById('surCross').src = "images/tick.png";
		} else {
			document.getElementById('surCross').src = "images/cross.png";
		}
}
function checkAddress(address){
		if (address.value != ""){
			document.getElementById('addressCross').src = "images/tick.png";
		} else {
			document.getElementById('addressCross').src = "images/cross.png";
		}
}
function checkCountryCode(){
	var selectCode = document.getElementById('countryCode');
	var numberAble = document.getElementById('dayNo');
	var numberAbleOne = document.getElementById('afterHoursNo');
	var numberAbleTwo = document.getElementById('mobileNo');
		if (selectCode.options[selectCode.selectedIndex].value == "selectPls"){
			numberAble.disabled = true;
			numberAbleOne.disabled = true;
			numberAbleTwo.disabled = true;
		} else {
			numberAble.disabled = false;
			numberAbleOne.disabled = false;
			numberAbleTwo.disabled = false;			
		}
}
function checkNumberDay(no){
var str = no.value;
		if (str.length == 8) {
			document.getElementById('dayNoCross').src = "images/tick.png";
		} else {
			document.getElementById('dayNoCross').src = "images/cross.png";
		}
}
function checkNumberAfter(no){
var str = no.value;
		if (str.length == 8) {
			document.getElementById('afterNoCross').src = "images/tick.png";
		} else {
			document.getElementById('afterNoCross').src = "images/cross.png";
		}
}
function checkNumberMobile(no){
var str = no.value;
		if (str.length == 8) {
			document.getElementById('mobileNoCross').src = "images/tick.png";
		} else {
			document.getElementById('mobileNoCross').src = "images/cross.png";
		}
}