document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
  
    const textarea = document.getElementById('textarea');
    const userList = document.getElementById('userList');
  
    let username = prompt('Enter your username:');
    socket.emit('join', username);
  
    socket.on('userList', (users) => {
      userList.innerHTML = '';
      users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.textContent = user;
        userList.appendChild(userElement);
      });
    });
  
    textarea.addEventListener('input', () => {
      const text = textarea.value;
      socket.emit('textChange', { text, username });
    });
  
    socket.on('textChange', (data) => {
      textarea.value = data.text;
    });
  
    // Service Worker registration
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  });
  