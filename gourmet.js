
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for (let i = 0; i < data.results.shop.length; i++) {
    console.log((i + 1) + "件目の検索結果");
    console.log("店名: " + data.results.shop[i].name);
    console.log("住所: " + data.results.shop[i].address);
    console.log("予約: " + data.results.shop[i].band);
    console.log("カード利用: " + data.results.shop[i].card);
    console.log("キャッチコピー: " + data.results.shop[i].catch);
    console.log("ジャンル: " + data.results.shop[i].genre.name);
    console.log("予算: " + data.results.shop[i].budget.name);
    console.log("アクセス: " + data.results.shop[i].access);
    console.log("営業時間: " + data.results.shop[i].open);
    console.log("定休日: " + data.results.shop[i].close);
    console.log("URL: " + data.results.shop[i].urls.pc);
    console.log("画像URL: " + data.results.shop[i].photo.pc.l);
    console.log("クーポンURL: " + data.results.shop[i].coupon_urls.pc);
  }
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let a = document.querySelector('div#result') 
  if (a){
  a.remove();
  }

  let d = document.createElement('div');
  d.setAttribute('id', 'result');

  let b = document.querySelector('body');
  b.insertAdjacentElement('beforeend', d);

  for (let i = 0; i < data.results.shop.length; i++) {
    let h = document.createElement('h2');
    h.textContent = (i + 1) + "件目の検索結果";
    d.insertAdjacentElement('beforeend', h);
    let l = document.createElement('li');
    l.textContent = "店名: " + data.results.shop[i].name;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "住所: " + data.results.shop[i].address;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "予約: " + data.results.shop[i].band;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "カード利用: " + data.results.shop[i].card;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "キャッチコピー: " + data.results.shop[i].catch;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "ジャンル: " + data.results.shop[i].genre.name;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "予算: " + data.results.shop[i].budget.name;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "アクセス: " + data.results.shop[i].access;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "営業時間: " + data.results.shop[i].open;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "定休日: " + data.results.shop[i].close;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "URL: " + data.results.shop[i].urls.pc;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('a');
    l.textContent = "画像URL: " + data.results.shop[i].photo.pc.l;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "クーポンURL: " + data.results.shop[i].coupon_urls.pc;
    d.insertAdjacentElement('beforeend', l);
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#sendRequest');
  b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let genre_name = document.querySelector('#genre').value;
  
  let genre;
  if (genre_name === '居酒屋') {
    genre = 'G001';
  } else if (genre_name === 'ダイニングバー・バル') {
    genre = 'G002';
  } else if (genre_name === '創作料理') {
    genre = 'G003';
  } else if (genre_name === '和食') {
    genre = 'G004';
  } else if (genre_name === '洋食') {
    genre = 'G005';
  } else if (genre_name === 'イタリアン・フレンチ') {
    genre = 'G006';
  } else if (genre_name === '中華') {
    genre = 'G007';
  } else if (genre_name === '焼肉・ホルモン') {
    genre = 'G008';
  } else if (genre_name === 'アジア・エスニック料理') {
    genre = 'G009';
  } else if (genre_name === '各国料理') {
    genre = 'G010';
  } else if (genre_name === 'カラオケ・パーティ') {
    genre = 'G011';
  } else if (genre_name === 'バー・カクテル') {
    genre = 'G012';
  } else if (genre_name === 'ラーメン') {
    genre = 'G013';
  } else if (genre_name === 'カフェ・スイーツ') {
    genre = 'G014';
  } else if (genre_name === 'その他グルメ') {
    genre = 'G015';
  } else if (genre_name === 'お好み焼き・もんじゃ') {
    genre = 'G016';
  } else if (genre_name === '韓国料理') {
    genre = 'G017';
  } else {
    console.log('ジャンルが正しく選択されていません');
    return;
  }
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genre + '.json';
  //テキストボックスやドロップダウンメニュー、ラジオボタンなどからジャンルを取得して、{genre}の部分を置き換える

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}