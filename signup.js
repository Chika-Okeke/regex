// Retrieve the form element
const form = document.getElementById('Registration Form');

// Add event listener to the form's submit event
form.addEventListener('submit', function (event) {
   event.preventDefault(); // Prevent form submission

   // Retrieve the form data
   const formData = {
      firstName: form.firstName.value,
      middleName: form.middleName.value,
      lastName: form.lastName.value,
      dob: form.dob.value,
      studentId: form.studentId.value,
      street: form.street.value,
      city: form.city.value,
      state: form.state.value,
      country: form.country.value,
      zipCode: form.zipCode.value,
      email: form.email.value,
      phone: form.phone.value,
      comments: form.comment.value
   };

   // Save the form data to local storage
   localStorage.setItem('formData', JSON.stringify(formData));

   // Optionally, display a success message or redirect to another page
   alert('Form data saved successfully!');

    window.location.href = 'preview.html';
});



 
