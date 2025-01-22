// Function to include HTML components
function includeHTML() {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const file = `components/${element.id}.html`;
        fetch(file)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                element.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching the component:', error);
            });
    });
}

// Run the function to include HTML components
document.addEventListener('DOMContentLoaded', includeHTML);
