document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Собираем данные формы
        const formData = new FormData(form);
        
        // Отправляем данные через AJAX
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts'); // Пример URL для тестов
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function() {
            if (xhr.status === 201) {
                responseMessage.innerHTML = 'Данные успешно отправлены!';
                form.reset();
            } else {
                responseMessage.innerHTML = 'Произошла ошибка при отправке данных.';
            }
        };

        xhr.send(JSON.stringify(Object.fromEntries(formData)));
    });
});
