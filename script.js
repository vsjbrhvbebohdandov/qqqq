document.getElementById('scanner').addEventListener('mousedown', function () {
    const scanner = document.getElementById('scanner');
    const scanText = document.getElementById('scan-text');
    const result = document.getElementById('result');

    // Початок сканування
    scanner.classList.add('scanning');
    scanText.textContent = 'Сканування...';

    // Затримка для імітації процесу сканування
    setTimeout(() => {
        scanner.classList.remove('scanning');
        scanText.textContent = 'Поставте палець...';

        // Генерація випадкової потужності (від 50 до 100)
        const power = Math.floor(Math.random() * 51) + 50;
        result.textContent = `Ваша потужність: ${power}%`;
    }, 3000); // Затримка 3 секунди
});
