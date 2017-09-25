function selectChange(el) {
    var sendBtn = document.getElementById("sendBtn");
    if (el.options[el.selectedIndex].value == "selectOne") {
        sendBtn.disabled = true;
        sendBtn.classList.add("disabled-btn")
        sendBtn.value = "Select a publicity type first!";
    } else {
        sendBtn.disabled = false;
        sendBtn.classList.remove("disabled-btn")
        sendBtn.value = "Send it!";
    }
}