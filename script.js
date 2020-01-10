// Form Validation

const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const button = document.getElementById('submit');

form.addEventListener('submit', (e) => {
	let messages = []
	if (email.value === '' || email.value == null) {
		messages.push('Please provide a valid email')
	}

	if (messages.length > 0) {
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
		email.style.border = '1.5px red solid';
		console.log('Input is empty!');
	}
})

//write messages to yourself in the console

//how do I run a function when button is clicked?

//how do I combine another check point in the function?

// function emailIsValid (email) {
// 	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//   }
  
//   emailIsValid('tyler@tyler@tylermcginnis.com') // false
//   emailIsValid('tyler@tylermcginnis.com') // true

//   function myFunction() {
//     console.log('Button was clicked!');
//   }