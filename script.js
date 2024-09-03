//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    let count = 0;

    incrementBtn.addEventListener('click', function () {
        alert(`Current value: ${count}`);
        count++;
        counterElement.textContent = count;
    });
});
