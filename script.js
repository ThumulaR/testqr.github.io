

document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const generateQRButton = document.getElementById("generateQR");
    const qrcodeDiv = document.getElementById("qrcode");
    const downloadLink = document.getElementById("downloadLink");

    generateQRButton.addEventListener("click", function () {
        const text = inputText.value;

        // Clear previous QR code
        qrcodeDiv.innerHTML = '';

        if (text.trim() !== "") {
            // Generate QR code
            const qr = new QRCode(qrcodeDiv, {
                text: text,
                width: 200,
                height: 200
            });

            // Show download buttons
            downloadLink.href = qrcodeDiv.firstChild.toDataURL("image/png");
            downloadLink.download = `${text}.png`; // Set the file name
            downloadLink.style.display = "block";
        } else {
            // Hide download button if there's no input text
            downloadLink.style.display = "none";
        }
    });
});

