const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");

const regNumberList = [];

addRegNumberBtn.addEventListener("click", function() {

	if (regNumberEntered.value == "") {
		message.innerHTML = "Please enter a registration number";
		return;

	}
	if (regNumberList.includes(regNumberEntered.value)){
		message.innerHTML = "Reg number already entered";
		return;
	}
	const newRegNumber = document.createElement('div');
	// put the entered value into the element
	newRegNumber.innerHTML = regNumberEntered.value;
	// add style to the new element
	newRegNumber.classList.add('regNumber');
	//append the newly created element to the DOM
	regNumbers.appendChild(newRegNumber);
    //remember the reg number added
	regNumberList.push(regNumberEntered.value)


    //clear the input box
	regNumberEntered.value ='';

	localStorage['regNumber'] = JSON.stringify(regNumberList)
});
