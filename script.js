// CONFIGURATION: Paste your actual WhatsApp Group Link here!
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/KLTSicbD5XWG2GX3xnQo6W";

document
  .getElementById("cryptoLeadForm")
  .addEventListener("submit", function (event) {
    // 1. Prevent the page from just reloading
    event.preventDefault();

    // 2. Grab the information the user typed in
    const userName = document.getElementById("name").value;
    const userWhatsapp = document.getElementById("whatsapp").value;

    // 3. Create a clean readable log of the lead data
    const leadData = `Name: ${userName} | WhatsApp: ${userWhatsapp} | Joined: ${new Date().toLocaleString()}\n`;

    // 4. Save data directly in the browser by generating a downloadable local backup
    // (This ensures you don't lose the data even without setting up a live database server yet!)
    const blob = new Blob([leadData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `crypto_lead_${userName.replace(/\s+/g, "_")}.txt`;

    // Programmatically trigger a silent file download backup
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 5. Instantly redirect the user right into your WhatsApp group
    window.location.href = WHATSAPP_GROUP_LINK;
  });
