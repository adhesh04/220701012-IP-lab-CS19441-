document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Retrieve form values
    const regNo = document.getElementById('regNo').value.trim();
    const name = document.getElementById('name').value.trim();
    const year = document.getElementById('year').value.trim();
    const semester = document.getElementById('semester').value.trim();
    const academicYear = document.getElementById('academicYear').value.trim();
    const subjectCode = document.getElementById('subjectCode').value.trim();
    const subjectName = document.getElementById('subjectName').value.trim();
    const credit = document.getElementById('credit').value.trim();
    const courseType = document.getElementById('courseType').value;
    const gmail = document.getElementById('gmail').value.trim();

    let hasError = false;
    let errorMessage = '';

    // Define regular expressions
    const namePattern = /^[a-zA-Z\s]+$/;
    const regNoPattern = /^\d+$/;
    const semesterPattern = /^[1-9]$/; // Matches digits 1 through 9
    const academicYearPattern = /^[1-4]$/; // Matches digits 1 through 4
    const subjectCodePattern = /^[a-zA-Z]{2}\d{5}$/;
    const creditPattern = /^\d+$/; // Matches positive integers
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Validate Name
    if (!namePattern.test(name)) {
      errorMessage += 'Name should contain only alphabetic characters.\n';
      hasError = true;
    }

    // Validate Registration Number
    if (!regNoPattern.test(regNo)) {
      errorMessage += 'Registration Number should contain only numbers.\n';
      hasError = true;
    }

    // Validate Year
    if (!year || isNaN(year) || parseInt(year, 10) < 1) {
      errorMessage += 'Year must be a positive number.\n';
      hasError = true;
    }

    // Validate Semester
    if (!semesterPattern.test(semester)) {
      errorMessage += 'Semester must be a number between 1 and 9.\n';
      hasError = true;
    }

    // Validate Academic Year
    if (!academicYearPattern.test(academicYear)) {
      errorMessage += 'Academic Year must be a number between 1 and 4.\n';
      hasError = true;
    }

    // Validate Subject Code
    if (!subjectCodePattern.test(subjectCode)) {
      errorMessage += 'Subject Code should be 7 characters long, starting with 2 letters followed by 5 digits.\n';
      hasError = true;
    }

    // Validate Credit
    if (!creditPattern.test(credit) || parseInt(credit, 10) < 1) {
      errorMessage += 'Credit must be a positive number.\n';
      hasError = true;
    }

    // Validate Course Type
    if (!courseType) {
      errorMessage += 'Course Type is required.\n';
      hasError = true;
    }

    // Validate Gmail
    if (!gmailPattern.test(gmail)) {
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
