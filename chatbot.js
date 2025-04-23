const studyTechniques = {
    "pomodoro": "The Pomodoro Technique involves working for 25 minutes, then taking a 5-minute break. After 4 cycles, take a longer break.",
    "sq3r": "SQ3R stands for Survey, Question, Read, Recite, Review. It's a method to help you study and retain textbook information.",
    "active recall": "Active recall means testing yourself repeatedly to reinforce memory, instead of just rereading notes.",
    "spaced repetition": "Spaced repetition is a learning technique that involves reviewing information at increasing intervals over time.",
    "mind mapping": "Mind mapping is a visual way of organizing information, showing relationships between concepts using diagrams."
  };
  
  const chatContainer = document.getElementById("chat-container");
  const inputField = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");
  
  sendButton.addEventListener("click", () => {
    const userMessage = inputField.value.trim();
    if (userMessage !== "") {
      addUserMessage(userMessage);
      handleUserMessage(userMessage);
      inputField.value = "";
    }
  });
  
  inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendButton.click();
    }
  });
  
  function addUserMessage(message) {
    const userBubble = document.createElement("div");
    userBubble.className = "message user-message";
    userBubble.textContent = message;
    chatContainer.appendChild(userBubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  function addChatbotMessage(message) {
    const botBubble = document.createElement("div");
    botBubble.className = "message bot-message";
    botBubble.textContent = message;
    chatContainer.appendChild(botBubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  function handleUserMessage(message) {
    const lowerCaseMessage = message.toLowerCase();
    for (const technique in studyTechniques) {
      if (lowerCaseMessage.includes(technique)) {
        addChatbotMessage(studyTechniques[technique]);
        return;
      }
    }
    addChatbotMessage("I'm not sure how to respond to that. Try asking about a study technique like Pomodoro or Active Recall.");
  }
