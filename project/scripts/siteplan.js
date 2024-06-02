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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('experienceForm');

    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        const selectedFood = document.querySelector('input[name="usefulFeatures"]:checked');
        const experience = document.getElementById('writtenExperience').value;

        // Store the experience and selected food in localStorage
        localStorage.setItem('selectedFood', selectedFood ? selectedFood.value : '');
        localStorage.setItem('experience', experience);

        // Redirect to confirmation page
        window.location.href = 'confirmation.html';
    }

    // Event listener for form submission
    form.addEventListener('submit', handleSubmit);
});

// Call the function to populate product options when the page loads
document.addEventListener('DOMContentLoaded', populateProductOptions);
