document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-btn');

   
    function appendMessage(messageText, messageType) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', messageType);
        messageElement.textContent = messageText;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; 
    }

    sendButton.addEventListener('click', function () {
        const messageText = messageInput.value.trim();
        if (messageText) {
            appendMessage(messageText, 'sent'); 
            messageInput.value = ''; 

            setTimeout(() => {
                appendMessage('Hello', 'received');
            }, 1000);
        }
    });

    messageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
