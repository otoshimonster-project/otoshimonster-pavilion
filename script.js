document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.animated-image');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayDescription = document.getElementById('overlay-description');
    const closeButton = document.querySelector('.close-button');

    // 画像ごとのデータ（タイトル + 概要）
    const imageData = [
        { title: "アイスリングちゃん", description: "くちぐせはリンリンです" },
        { title: "テッシュー", description: "くちぐせはシューシューです。" },
        { title: "画像3", description: "これは画像3の概要説明です。" },
        { title: "けしごむ", description: "いつもダラーてなってる。すんでるばしょはけしごむせんたー。いつもけしごむセンターであそんでる。" },
        { title: "ハンドカワウソ", description: "おっとり。魚が好き。ふにゃ〜。ハンドパワーで魚をつかまえる。ハンカワタオルとなかよし。自分の力でとんでいる。一言（魚ちょうだい！おなか減ったんだよ〜）" },
        { title: "下じきのこ", description: "明るくて、元気。いつも上にある下じきを見て、嬉しそうにうれしそうに笑っている。くちぐせ イエーイ！森にいて、ぶんぼうぐをつけているきのこの友だちといつもしゃべっている。" },
        { title: "サングラスライム", description: "どっちもせいかくがそれぞれちがって左の子がやたらかっこつけたがって、右の子がめっちゃポジティブ！あと絵にかいてあるようにくずれる。" }
    ];

    images.forEach((img, index) => {
        // フェードイン
        setTimeout(() => {
            img.style.opacity = 1;
        }, index * 300);

        // アニメーションの設定
        const duration = (Math.random() * 3 + 2).toFixed(2); // 2〜5秒
        const delay = (Math.random() * 2).toFixed(2);        // 0〜2秒
        img.style.animationDuration = `${duration}s`;
        img.style.animationDelay = `${delay}s`;

        // クリックでオーバーレイ表示
        img.addEventListener('click', () => {
            overlay.classList.remove('hidden');
            overlayImage.src = img.src.replace("&sz=w500", "&sz=w1000");
            overlayTitle.textContent = imageData[index]?.title || "タイトル未設定";
            overlayDescription.textContent = imageData[index]?.description || "説明がありません。";
        });
    });

    // ×ボタン or 背景クリックで閉じる
    closeButton.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.add('hidden');
        }
    });
});
