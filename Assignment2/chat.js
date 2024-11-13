document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message');

    let messages = [];

    function appendMessage(username, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<span>${username}:</span> ${text}`;
        chatBox.appendChild(messageDiv);
    }

    chatForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const message = messageInput.value;

        appendMessage('You', message);
        
        if (message.toLowerCase() === 'hi' || message.toLowerCase() === 'hii') {
            setTimeout(() => {
                appendMessage('Friend', 'Hello');
            }, 1000); 
        }

        if (message.toLowerCase() === 'how are you?' || message.toLowerCase() === 'How Are You?') {
            setTimeout(() => {
                appendMessage('Friend', 'I am good , what about you?');
            }, 1000); 
        }
        messageInput.value = '';
    });
});
