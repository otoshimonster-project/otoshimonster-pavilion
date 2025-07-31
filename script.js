document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayDescription = document.getElementById('overlay-description');
    const closeButton = document.querySelector('.close-button');

    const imageData = [ {id: "1yaHh6fHlzO9RqGWhC4Qs3LFR5FGqZycn",title: "花のにおいがするかも！！ポーチ",description: "やさしい　ダンスをするのがすき。"},
        {id: "1JuoSp-l6r6gfERWGQtjiJEZdbY-1VIBQ",title: "一円モンスターがおー！",description: "みためはこわいけどともだちになりやすい。ひろったひとには、かみついたり、けったり、たたいたりしてひろったひとをおいはらう。※たまにけいさつもたたく。"},
        {id: "1We2E-0ljyyN7t0hA7W5x60H9R-_NwkWI",title: "ワンポチ",description: "とても人懐っこい。ポーチおとモン。自分が忘れ物だと気づいていない。いつもしっぽを振っている。"},
        {id: "1KsOgU7SvD8G6IGS6XVRmcB943tQnj9vm",title: "本田さん",description: "いつも頭をかかえている。読んだ本の内ようはおぼえている。本を読むたびに頭の本はふえる。"},
        {id: "14dY4qhRdl5hewi3KsBce8po9dMXo0zw8",title: "ふでうさぎ",description: "ふでうさぎのせいかくはげんきで、あかるいせいかく。くちぐせは「う〜う〜」だよ！せいたいはろうかのすみ。"},
        {id: "1GV5Tr5kR2rwSMms6WrVfaDUS9-JoZhiQ",title: "AI",description: "電子機器に村してすいよせられるようにちかづく。電子機器に触れると、中のデータを全てぬきとる。"},
        {id: "1b8DGFyw1rSIXBKS-GUIovX16w8CdAnKL",title: "まじゅつしエピツーン",description: "頭はそれほど良くないが、ま法をつかえる。いがいにせんさい"},
        {id: "1zEsA_fKgk5NGiV_Jli4U3GaG-b1n1PRu",title: "かきかきけしゴム",description: "けすとだんだんみえなくなっていく。けされるとチュピーとなく。けしゴムの中にあるえんぴつをとりだしてかける。"},
        {id: "1F_SnGG1jpDG0KfStnh_Ll2V1rUjhPD3S",title: "AI",description: "スパコンにふれた場合スパコンの内部データをぬき取る"},
        {id: "1AGa_kVcydsBBB1nLw9JQYDHoB1SqECst",title: "ちびえんぴつ・ちびけしごむ",description: "よなか、もちぬしのふでばこの長い・大きいえんぴつ・けしごむと、いれかわる。"},
        {id: "174HSzopof99eWEPxJwYr-9ZfgUYoVaMC",title: "aaaaACBRVZY",description: "YVDBA　せいせくのう"},
        {id: "1AW-zNL_NOvpw-O4r6X4p7_YRhCKoYvAY",title: "ボールのペン",description: "ボールで、できてるから、おもくてうんどうが大のにがて"},
        {id: "1SlDbzr0iq4uZgBsPaQxGhTNV_mqfGFxL",title: "くさすぎたおる",description: "くささ（れべる）ひろしのくつしたとおなじ（2ばい）"},
        {id: "1-7TkE3uYzZ1trKoqyPI-ZpI1YYYk2uiK",title: "ふでばーんねこ",description: ""},
        {id: "1zp53qRvHvd3Lzah6OlLU56adh0vzY1yi",title: "お母さんのねこ",description: "にゃ　お母さんのねこいる。"},
        {id: "1JiT6b2deDenYSsrwbqmdx3hnaVpfjDmg",title: "まほうつかいうさふでもんす",description: "ふでばこがかおでかおでくちはちビームがあるから気おつけてね。"},
        {id: "1ZL_lYFCjekkKWL40Bg40xlIz035q_OqB",title: "じょうぎくん",description: "やさしい"},
        {id: "1ZMzAXEthXPW2aMS1KkXywgybo7Fs1mvK",title: "ニコニコたくさん手かがみ",description: "しゃべるのがすき（🙂・😀）うごくのすき"},
        {id: "1afRyP-U1HXS2Z8ZPDR5nOX0Q7G5L-oLv",title: "ハンカたろう",description: "せいかく　おこりんぼう　くちぐせ　「ひろってー！💢」"},
        {id: "1qh2QUF-vgkxuq1ppR9RG1bealhSctH_B",title: "ハンカワタオル",description: "くちぐせは「かわ」だよ！性格はぼーとしてる。ちょっとはずかしがりや ハンドカワウソとても仲よしだよ！！コメント…「みんなと遊びたいよ！！」"},
        {id: "1q5mqQxQoeSwHn7TbDrRphFGzS1JDy9oj",title: "えんぴーつ",description: "くちぐせはぴーつぴーつです。"},
        {id: "16nl6djOnrJtaY0xjC8eEmJey5cKI9cz9",title: "ごむ",description: "くちぐせごむ"},
        {id: "12Oxjg5hkMkPG6fKCT3aiWfEmDnz2zkBo",title: "ハンカチ",description: "はずかしい"},
        {id: "16WWptZ5LO6XwwU15nxvAp_XAR8_eUYwF",title: "けしごむエナガ",description: "ふだんは手を見せてくれない。なき声は、「ピー」。けすと頭がけずられる。"},
        {id: "18Z4vQJlGszTTgTUoj4Gv_aYeoBE0Weuc",title: "ハンドカワウソ",description: "・おっとり　・魚が好き　・ふにゃ〜　・ハンドパワーで魚をつかまえる。　・ハンカワタオルと仲良し　・自分の力でとんでいる。　一言（魚ちょうだい！おなかへったんだよ〜）"},
        {id: "1x_dOf9CU2rAvNf56_Fera8EiU2aKeDd8",title: "下じきのこ",description: "明るくて、元気。いつも家にある下じきを見て、うれしそうに笑っている。くちぐせイエーイ！森にいて、ぶんぼうぐをつけているキノコの友だちといつもしゃべっている。"},
        {id: "1kY0A2O5BHP9PVJ-0R7Uew6RtQYiwrjUu",title: "サングラスライム",description: "どっちもせいかくがそれぞれちがって左の子がやたらかっこつけたがって、右の子がめっちゃポジティブ！あと絵にかいてあるようにくずれる。"},
        {id: "1nJPAQ5vTl3o_nPcDAV33l_Fj5_ewsNsT",title: "アイスリングちゃん",description: "くちぐせはリンリンです"},
        {id: "1m1F_1-Th9A-9sxG5Cp3abzoIo8Ei4RMG",title: "テッシュー",description: "くちぐせは、シューシューです。"},
        {id: "1ja8AYWDuSppvHbAWsKdWNKRIkzrTBUEd",title: "ハンカチくん",description: "くちぐせかちかち"},
        {id: "1LWzpBRJDQ5w8AtmW68-_ARnBxifOWWXb",title: "けしごむ",description: "いつもダラーてなってる すんでるばしょはけしごむせんたー いつもけしごむせんたーであそんでる。"}];

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
                
                if (data.title === "aaaaACBRVZY") {
                    overlayTitle.innerHTML = `<span class="font-fude">aaaa</span>ACBRVZY`;
                } else {
                    overlayTitle.textContent = data.title;
                }

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

