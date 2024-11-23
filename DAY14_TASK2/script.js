document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    // Get selected food options
    let foodChoices = Array.from(document.querySelectorAll('input[name="food"]:checked'))
                            .map(checkbox => checkbox.value);
    if (foodChoices.length < 2) {
        alert("Please select at least two food options.");
        return;
    }

    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    // Append to table
    let table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();
    newRow.innerHTML = `<td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${email}</td>
                        <td>${address}</td>
                        <td>${pincode}</td>
                        <td>${gender}</td>
                        <td>${foodChoices.join(", ")}</td>
                        <td>${state}</td>
                        <td>${country}</td>`;

    // Clear form fields
    document.getElementById("dataForm").reset();
});
