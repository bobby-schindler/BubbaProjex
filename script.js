// Select all details elements
const detailsElements = document.querySelectorAll('details');

// Function to handle the background color change and close other open details
function handleDetailsToggle(event) {
    const currentDetails = event.target;
    const isOpen = currentDetails.open;

    if (isOpen) {
        // Close all other open details elements
        detailsElements.forEach(details => {
            if (details !== currentDetails) {
                details.open = false;
            }
        });
        
        // Set background color based on the opened details element's custom color
        const bgColor = getComputedStyle(currentDetails).getPropertyValue('--bg-color');
        document.body.style.backgroundColor = bgColor;
    } else {
        // If all details are closed, set background to white
        const anyOpen = Array.from(detailsElements).some(details => details.open);
        if (!anyOpen) {
            document.body.style.backgroundColor = 'white';
        }
    }
}

// Add event listeners to each details element
detailsElements.forEach(details => {
    details.addEventListener('toggle', handleDetailsToggle);
});

// Add smooth Fade-In effect to details contents

detailsElements.forEach(details => {
    details.addEventListener('toggle', function () {
        const content = details.querySelector('.details-content');
        if (details.open) {
            content.style.opacity = '1';
            content.style.maxHeight = '500px';
            content.style.transition = 'all 350ms ease-out';
        } else {
            content.style.opacity = '0';
            content.style.maxHeight = '0';
            content.style.overflow = 'hidden';
        }
    });
});
