
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
    console.log("--------------------------------------");
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
    let l = document.createElement('li');
    l.textContent = (i + 1) + "件目の検索結果";
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
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
    l = document.createElement('li');
    l.textContent = "画像URL: " + data.results.shop[i].photo.pc.l;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "クーポンURL: " + data.results.shop[i].coupon_urls.pc;
    d.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = "--------------------------------------";
    d.insertAdjacentElement('beforeend', l);
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#sendRequest');
  b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let genre = document.querySelector('#genre').value;
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