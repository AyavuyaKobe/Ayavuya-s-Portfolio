function sendmail(event) {
        event.preventDefault();
    let params = {
        fullname: document.getElementById("fullName").value,
    email: document.getElementById("email_id").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
            }
 
    emailjs.send("service_r0cto8d","template_hyx754p")
    .then(function (res) {
        alert("Success! " + res.status);
                })
    .catch(function (error) {
        alert("Error sending message. Please try again later.");
    console.error("Error sending email:", error);
                });
        }
 