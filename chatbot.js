function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (message === "") return;
  
    const chatBox = document.getElementById("chat-box");
  
    // Add user message
    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);
  
    // Simulate bot response
    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.className = "bot-message";
      botMsg.textContent = generateBotReply(message);
      chatBox.appendChild(botMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
  
    input.value = "";
  }
  
  function generateBotReply(input) {
    const lower = input.toLowerCase();
  
    if (lower.includes("study")) return "Studying is tough sometimes! Want some tips?";
    if (lower.includes("timer")) return "You can use the Pomodoro method! Want me to set a timer?";
    if (lower.includes("hello") || lower.includes("hi")) return "Hey there! 👋";
    
    return "Interesting... Tell me more!";
  }