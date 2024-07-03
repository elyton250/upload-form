document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#form1'); // Select the form element
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formDataObject = {
            title: form.elements['title'].value,
            date: form.elements['date'].value,
            description: form.elements['description'].value
        };
        
        console.log('Form Data:', formDataObject);
        
        fetch('http://127.0.0.1:3000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObject),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Optionally, handle success response here
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, handle error here
        });
    });
});
