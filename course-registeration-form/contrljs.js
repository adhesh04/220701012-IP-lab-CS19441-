document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Retrieve form values
    const regNo = document.getElementById('regNo').value.trim();
    const name = document.getElementById('name').value.trim();
    const year = parseInt(document.getElementById('year').value, 10);
    const semester = parseInt(document.getElementById('semester').value, 10);
    const academicYear = parseInt(document.getElementById('academicYear').value, 10);
    const subjectCode = document.getElementById('subjectCode').value.trim();
    const subjectName = document.getElementById('subjectName').value.trim();
    const credit = parseInt(document.getElementById('credit').value, 10);
    const courseType = document.getElementById('courseType').value;
    const gmail = document.getElementById('gmail').value.trim();

    let hasError = false;
    let errorMessage = '';

    // Validate Name (should only contain letters)
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      errorMessage += 'Name should contain only alphabetic characters.\n';
      hasError = true;
    }

    // Validate Registration Number (should be only numbers)
    if (!/^\d+$/.test(regNo)) {
      errorMessage += 'Registration Number should contain only numbers.\n';
      hasError = true;
    }

    // Validate Year (must be a positive number)
    if (isNaN(year) || year < 1) {
      errorMessage += 'Year must be a positive number.\n';
      hasError = true;
    }

    // Validate Semester (must be between 1 and 9)
    if (isNaN(semester) || semester < 1 || semester > 9) {
      errorMessage += 'Semester must be between 1 and 9.\n';
      hasError = true;
    }

    // Validate Academic Year (must be between 1 and 4)
    if (isNaN(academicYear) || academicYear < 1 || academicYear > 4) {
      errorMessage += 'Academic Year must be between 1 and 4.\n';
      hasError = true;
    }

    // Validate Subject Code (7 characters: 2 letters + 5 digits)
    if (!/^[a-zA-Z]{2}\d{5}$/.test(subjectCode) || subjectCode.length !== 7) {
      errorMessage += 'Subject Code should be 7 characters long, starting with 2 letters followed by 5 digits.\n';
      hasError = true;
    }

    // Validate Credit (must be a positive number)
    if (isNaN(credit) || credit < 1) {
      errorMessage += 'Credit must be a positive number.\n';
      hasError = true;
    }

    // Validate Course Type (must be selected)
    if (!courseType) {
      errorMessage += 'Course Type is required.\n';
      hasError = true;
    }

    // Validate Gmail (should be a valid Gmail address)
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(gmail)) {
      errorMessage += 'Gmail should be in the format example@gmail.com.\n';
      hasError = true;
    }

    // Display alert for errors if any
    if (hasError) {
      alert('Form submission failed:\n' + errorMessage);
    } else {
      // Display success message
      alert('Form submitted successfully!');
      // Optionally, you can reset the form fields after submission
      form.reset();
    }
  });
});
