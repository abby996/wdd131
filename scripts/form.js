const products = [
    {
      id: 'fc-1888',
    name: 'flux capacitor',
    'avg-rating': 4.5
    },
    {
      id: 'fc-2050',
    name: 'power laces',
    avgRating: 4.7
    },
    {
      id: 'fs-1987',
    name: 'time circuits',
    avgRating: 3.5
    },
    {
      id: 'ac-2000',
    name: 'low voltage reactor',
    avgRating: 3.9
    },
    {
      id: 'jj-1969',
    name: 'warp equalizer',
    avgRating: 5.0
    }
  ];

 

  function populateProductOptions() {
    const productNameSelect = document.getElementById('productName');
    
    // Clear existing options
    productNameSelect.innerHTML = '';
    
    // Add new options based on the product array
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productNameSelect.appendChild(option);
    });
  }
  
  // Call the function to populate Product Name options when the page loads
  document.addEventListener('DOMContentLoaded', populateProductOptions);
  // Check if there is a counter value stored in localStorage
  let counter = localStorage.getItem('reviewCounter');
  
  // If counter is null or undefined, initialize it to 0
  if (!counter) {
    counter = 0;
  } else {
    // If counter is not null or undefined, parse it as an integer
    counter = parseInt(counter);
  }
  
  // Increment the counter by 1
  counter++;
  
  // Update the value of the counter in localStorage
  localStorage.setItem('reviewCounter', counter);