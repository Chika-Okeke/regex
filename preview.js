window.addEventListener("DOMContentLoaded", function () {
    // Get the form data from localStorage
    const formData = JSON.parse(localStorage.getItem("formData"));
 
    // Generate the preview content
    const previewContainer = document.getElementById("previewContainer");
    const previewData = document.createElement("div");
    previewData.innerHTML = `
       <h2>Student Information</h2>
       <p><strong>First Name:</strong> ${formData.firstName}</p>
       <p><strong>Middle Name:</strong> ${formData.middleName}</p>
       <p><strong>Last Name:</strong> ${formData.lastName}</p>
       <p><strong>Date of Birth:</strong> ${formData.dob}</p>
       <p><strong>Student ID:</strong> ${formData.studentId}</p>
       
       <h2>Address</h2>
       <p><strong>Street Address:</strong> ${formData.street}</p>
       <p><strong>City:</strong> ${formData.city}</p>
       <p><strong>State/Province:</strong> ${formData.state}</p>
       <p><strong>Country:</strong> ${formData.country}</p>
       <p><strong>ZIP Code:</strong> ${formData.zipCode}</p>
       
       <h2>Contact Information</h2>
       <p><strong>Email:</strong> ${formData.email}</p>
       <p><strong>Phone Number:</strong> ${formData.phone}</p>
       
       <h2>Courses</h2>
       <table>
          <thead>
             <tr>
                <th>Course</th>
                <th>Level</th>
                <th>Language</th>
                <th>Start Date</th>
             </tr>
          </thead>
          <tbody>
                <tr>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                </tr>
       </tbody>
    </table>
    
    <h2>Comments</h2>
    <p>${formData.comments}</p>
 `;
 
 // Append the preview data to the container
 previewContainer.appendChild(previewData);
});

 