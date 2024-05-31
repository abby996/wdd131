document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    // Toggle navigation display and button text on click
    menuBtn.addEventListener('click', function () {
        if (window.innerWidth <= 767) {
            navigation.classList.toggle('active');
            if (navigation.classList.contains('active')) {
                menuBtn.innerHTML = '❌';
            } else {
                menuBtn.innerHTML = '';
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.getElementById('backButton');

    // Add click event listener to the back button
    backButton.addEventListener('click', function () {
        // Navigate back to the previous page
        window.location.href='siteplan.html';
    });
});










const foodItems = [
    { name: "Lalo" },
    { name: "Fritay" },
    { name: "Soup Joumou" },
    { name: "Rice and Legume" },
    { name: "Griot" },
    { name: "Tonmtonm" }
];

// Function to populate product options in the dropdown
function populateProductOptions() {
    const productNameSelect = document.getElementById('productName');
    
    // Clear existing options
    productNameSelect.innerHTML = '';
    
    // Add new options based on the product array
    foodItems.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name; // Setting value to product name
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    const selectedFood = document.getElementById('productName').value;
    const experience = document.getElementById('writtenExperience').value;

    // Store the experience in localStorage
    let experiences = JSON.parse(localStorage.getItem('experiences')) || [];
    experiences.push({ food: selectedFood, experience: experience });
    localStorage.setItem('experiences', JSON.stringify(experiences));

    // Display a confirmation message
    document.getElementById('confirmation').textContent = `Thank you for sharing your experience with ${selectedFood}!`;
}

// Function to display saved experiences from localStorage
function displayExperiences() {
    const experiences = JSON.parse(localStorage.getItem('experiences')) || [];

    const experienceList = document.getElementById('experienceList');
    experienceList.innerHTML = '';

    experiences.forEach((exp, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${exp.food}: ${exp.experience}`;
        experienceList.appendChild(listItem);
    });
}

// Main function to initialize the page
function initializePage() {
    populateProductOptions(); // Populate product options in dropdown
    displayExperiences(); // Display saved experiences
}

// Event listeners
document.getElementById('experienceForm').addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', initializePage);

