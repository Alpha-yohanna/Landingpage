const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/KLTSicbD5XWG2GX3xnQo6W";

const form = document.getElementById("cryptoLeadForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = document.getElementById("name").value.trim();
  const userWhatsapp = document.getElementById("whatsapp").value.trim();

  if (!userName || !userWhatsapp) {
    alert("Please fill in all fields.");
    return;
  }

  const leadData = `
Name: ${userName}
WhatsApp: ${userWhatsapp}
Joined: ${new Date().toLocaleString()}
------------------------------------
`;

  const blob = new Blob([leadData], {
    type: "text/plain",
  });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);

  link.download = `crypto_lead_${userName.replace(/\s+/g, "_")}.txt`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  const btn = document.querySelector(".submit-btn");

  btn.innerHTML = "✅ Redirecting...";

  setTimeout(() => {
    window.location.href = WHATSAPP_GROUP_LINK;
  }, 1000);
});
