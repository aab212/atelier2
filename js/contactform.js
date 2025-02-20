
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    document.getElementById("message").textContent = "Submitting...";
    document.getElementById("message").style.display = "block";
    document.getElementById("submit-button").disabled = true;

    // Collect form data
    var formData = new FormData(this);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
        keyValuePairs.push(pair[0] + "=" + encodeURIComponent(pair[1]));
    }

    var formDataString = keyValuePairs.join("&");

    // Send a POST request to Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbxpRm1oodwLlQmHMSOCTLQdJyvIv4M_Vs2eIAR3O5JMlgqS0yPB7enDFn6_R8srzHcu/exec", {
        redirect: "follow",
        method: "POST",
        body: formDataString,
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        },
    })
    .then(response => response.text()) // Using .text() instead of .json()
    .then(data => {
        console.log("Response received:", data); // Debugging log

        // If submission is successful, replace the form with the thank you message
        if (data.includes("success") || data.includes("Submitted")) {
            document.getElementById("form-container").innerHTML = `
                <div class="thank-you-message">
                    <h2>Thank you!</h2>
                    <p>Your message has been sent. We will get back to you soon.</p>
                </div>
            `;
        } else {
            throw new Error("Unexpected response received.");
        }
    })
    .catch(error => {
        console.error("Submission error:", error);
        alert("Error submitting form. Please try again.");
        document.getElementById("submit-button").disabled = false;
    });
});

