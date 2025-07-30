document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayDescription = document.getElementById('overlay-description');
    const closeButton = document.querySelector('.close-button');

    const imageData = [ /* ← 略：ここはそのままでOK */ ];

    let index = 0;
    let rowCount = 0;

    while (index < imageData.length) {
        rowCount++;
        const row = document.createElement('div');
        row.classList.add('row');
        if (rowCount % 2 === 0) row.classList.add('offset');

        const countInRow = rowCount % 2 === 1 ? 6 : 7;
        console.log(`row ${rowCount} (${rowCount % 2 === 1 ? 'odd' : 'even'}): ${countInRow} images`);

        for (let i = 0; i < countInRow && index < imageData.length; i++, index++) {
            const data = imageData[index];
            const img = document.createElement('img');
            img.className = 'animated-image';
            img.src = `https://drive.google.com/thumbnail?id=${data.id}&sz=w500`;
            img.alt = data.title;

            // アニメーション設定
            setTimeout(() => {
                img.style.opacity = 1;
            }, index * 300);
            const duration = (Math.random() * 3 + 2).toFixed(2);
            const delay = (Math.random() * 2).toFixed(2);
            img.style.animationDuration = `${duration}s`;
            img.style.animationDelay = `${delay}s`;

            // オーバーレイ設定
            img.addEventListener('click', () => {
                overlay.classList.remove('hidden');
                overlayImage.src = `https://drive.google.com/thumbnail?id=${data.id}&sz=w1000`;
                overlayTitle.textContent = data.title;
                overlayDescription.textContent = data.description;
            });

            row.appendChild(img);
        }

        gallery.appendChild(row);
    }

    // オーバーレイ閉じる
    closeButton.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.add('hidden');
        }
    });
});
