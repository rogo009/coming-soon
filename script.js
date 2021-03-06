// Form Validation

const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const button = document.getElementById('submit');

form.addEventListener('submit', (e) => {
	let messages = []
	if (email.value === '' || email.value == null) {
		messages.push('Please provide a valid email.')
	}

	if (messages.length > 0) {
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
		email.style.border = '1.2px red solid';
		console.log('Button clicked, but input is empty.');
	}
})

//need to add a check point that validates email format is correct

// function emailIsValid (email) {
// 	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//   }
  
//   emailIsValid('tyler@tyler@tylermcginnis.com') // false
//   emailIsValid('tyler@tylermcginnis.com') // true