document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById("email").value;
    const salary = parseFloat(document.getElementById('salary').value) || 0;
    const houseProperty = parseFloat(document.getElementById('houseProperty').value) || 0;
    const otherSources = parseFloat(document.getElementById('otherSources').value) || 0;

    // Prepare data to send
    const data = {
        name,
        phone,
        email,
        salary,
        houseProperty,
        otherSources
    };

    // Display result modal
    document.getElementById('resultModal').style.display = 'flex';
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalPhone').innerText = phone;
    document.getElementById('modalEmail').innerText = email;
    document.getElementById('modalSalary').innerText = salary.toFixed(2);
    document.getElementById('modalHouseProperty').innerText = houseProperty.toFixed(2);
    document.getElementById('modalOtherSources').innerText = otherSources.toFixed(2);
    document.getElementById('modalTaxAmount').innerText = (calculateTax(salary + houseProperty + otherSources)).toFixed(2);

    // Send data when 'Send' button is clicked
    document.getElementById('sendButton').addEventListener('click', function() {
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.message) {
                alert(result.message);
                document.getElementById('resultModal').style.display = 'none'; // Hide modal after sending email
            } else {
                alert(result.error);
            }
        })
        .catch(error => console.error('Error:', error));
    });

    // Close modal when clicking on the close button
    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('resultModal').style.display = 'none';
    });
});

function calculateTax(income) {
    // Basic tax calculation logic
    let tax = 0;
    if (income > 1500000) {
        tax = (income - 1500000) * 0.30 + 100000 * 0.20 + 300000 * 0.15 + 300000 * 0.10 + 300000 * 0.05;
    } else if (income > 1200000) {
        tax = (income - 1200000) * 0.20 + 300000 * 0.15 + 300000 * 0.10 + 300000 * 0.05;
    } else if (income > 900000) {
        tax = (income - 900000) * 0.15 + 300000 * 0.10 + 300000 * 0.05;
    } else if (income > 600000) {
        tax = (income - 600000) * 0.10 + 300000 * 0.05;
    } else if (income > 300000) {
        tax = (income - 300000) * 0.05;
    }
    return tax;
}
