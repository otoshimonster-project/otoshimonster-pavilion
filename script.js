document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayDescription = document.getElementById('overlay-description');
    const closeButton = document.querySelector('.close-button');

    // 画像情報リスト（自由に追加可能）
    const imageData = [
        { id: "1nJPAQ5vTl3o_nPcDAV33l_Fj5_ewsNsT", title: "アイスリングちゃん", description: "くちぐせはリンリンです" },
        { id: "1m1F_1-Th9A-9sxG5Cp3abzoIo8Ei4RMG", title: "テッシュー", description: "くちぐせはシューシューです。" },
        { id: "1ja8AYWDuSppvHbAWsKdWNKRIkzrTBUEd", title: "画像3", description: "これは画像3の概要説明です。" },
        { id: "1LWzpBRJDQ5w8AtmW68-_ARnBxifOWWXb", title: "けしごむ", description: "けしごむセンターでのんびり。" },
        { id: "18Z4vQJlGszTTgTUoj4Gv_aYeoBE0Weuc", title: "ハンドカワウソ", description: "魚が好き。ふにゃ〜。" },
        { id: "1x_dOf9CU2rAvNf56_Fera8EiU2aKeDd8", title: "下じきのこ", description: "元気なきのこ。イエーイ！" },
        { id: "1kY0A2O5BHP9PVJ-0R7Uew6RtQYiwrjUu", title: "サングラスライム", description: "かっこつけとポジティブのコンビ。" },
        {id: "1ZMzAXEthXPW2aMS1KkXywgybo7Fs1mvK",title: "ニコニコたくさん手かがみ",description: "しゃべるのがすき（🙂・😃）うごくのすき"},
        {id: "1afRyP-U1HXS2Z8ZPDR5nOX0Q7G5L-oLv",title: "ハンカたろう",description: "せいかく　おこりんぼう　くちぐせ　「ひろってー！💢」"},
        {id: "1qh2QUF-vgkxuq1ppR9RG1bealhSctH_B",title: "ハンカワタオル",description: "くちぐせは「かわ」だよ！性格は、ぼーとしてる。ちょっとはずかしがりや。ハンドカワウソとても仲よしだよ！！コメント…「みんなと遊びたいよ！！」"},
        {id: "1q5mqQxQoeSwHn7TbDrRphFGzS1JDy9oj",title: "えんぴーつ",description: "くちぐせはぴーつぴーつです。"},
        {id: "16nl6djOnrJtaY0xjC8eEmJey5cKI9cz9",title: "ごむ",description: "くちぐせごむ"},
        {id: "12Oxjg5hkMkPG6fKCT3aiWfEmDnz2zkBo",title: "ハンカチ",description: "はずかしい"},
        {id: "16WWptZ5LO6XwwU15nxvAp_XAR8_eUYwF",title: "けしごむエナガ",description: "ふだんは手を見せてくれない。なき声は、「ピー」。けすと頭がけずられる。"},
        // ここにさらに追加可能
    ];

    let index = 0;
    let rowCount = 0;

    while (index < imageData.length) {
        rowCount++;
        const row = document.createElement('div');
        row.classList.add('row');
        if (rowCount % 2 === 0) row.classList.add('offset');

        const countInRow = rowCount % 2 === 1 ? 3 : 4;
        for (let i = 0; i < countInRow && index < imageData.length; i++, index++) {
            const data = imageData[index];
            const img = document.createElement('img');
            img.className = 'animated-image';
            img.src = `https://drive.google.com/thumbnail?id=${data.id}&sz=w500`;
            img.alt = data.title;

            // アニメーション
            setTimeout(() => {
                img.style.opacity = 1;
            }, index * 300);
            const duration = (Math.random() * 3 + 2).toFixed(2);
            const delay = (Math.random() * 2).toFixed(2);
            img.style.animationDuration = `${duration}s`;
            img.style.animationDelay = `${delay}s`;

            // クリックでオーバーレイ
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

    // 閉じる処理
    closeButton.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.add('hidden');
        }
    });
});

