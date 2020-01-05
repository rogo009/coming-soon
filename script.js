//form validation

//- Receive an error message when the `form` is submitted if:
  //- The `input` field is empty
  //- The email address is not formatted correctly

// let emailInput = document.getElementById('email');
// let submitButton = document.getElementById('submitButton')


// //Case 1: error message if input field is empty
// if (emailInput = '') {
// 	console.log('Please provide a valid email')
// } else {
// 	console.log('Thanks for joining our mailing list')
// }

// //case 2: error message if email address not formatted correctly
// if input does not contain @ symbol {
// 	//console.log ('Please provide a valid email')
// } else {
// 	//console.log('Thanks for joining our mailing list')
// }


// Form Validation

// const name = document.getElementById('name');
// const password = document.getElementById('password');
// //const form = document.getElementById('form');
// const errorElement = document.getElementById('error'); //remember the error id assigned to div, this message displays to page

// form.addEventListener('submit', (e) => {
// 	let messages = []
// 	if (name.value === '' || name.value == null) { //checking userinput = empty str
// 		messages.push('Name is required')
// 	} 

	// if (password.value.length <= 6) {
	// 	messages.push('Password must be longer than 6 characters')
	// }

	// if (password.value.length >= 20) {
	// 	messages.push('Password must be less than 20 characters')
	// }

	// if (password.value === 'password') {
	// 	messages.push('Password cannot be password')
	// }

// 	if (messages.length > 0) { //checking if array messages is empty
// 		e.preventDefault()
// 		errorElement.innerText = messages.join(', ');
// 	}
// })

const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
	let messages = []
	if (email.value === '' || email.value == null) {
		messages.push('Please provide a valid email')
	}

	if (messages.length > 0) {
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
	}
})




