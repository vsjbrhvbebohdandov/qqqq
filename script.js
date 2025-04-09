document.getElementById('high-power-button').addEventListener('click', function () {
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

        // Генерація потужності більше 50%
        const power = Math.floor(Math.random() * 51) + 50;
        result.textContent = `Ваша потужність: ${power}%`;
    }, 3000);
});

document.getElementById('low-power-button').addEventListener('click', function () {
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

        // Генерація потужності менше 35%
        const power = Math.floor(Math.random() * 35);
        result.textContent = `Ваша потужність: ${power}%`;
    }, 3000);
});
