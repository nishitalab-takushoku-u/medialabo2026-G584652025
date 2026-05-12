// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu = kaisu + 1;
  document.querySelector('span#kaisu').textContent = kaisu;

  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso = parseInt(document.querySelector('input#nyuuryoku').value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  let result = document.querySelector('p#result');
  if (kaisu < 4) {
    if (yoso === kotae) {
    result.textContent = '正解です．おめでとう!';
    } else if (yoso < kotae) {
    result.textContent = 'まちがい．答えはもっと大きいですよ';
    } else {
    result.textContent = 'まちがい．答えはもっと小さいですよ';
    }
  } else {
    result.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
document.querySelector('button#botan').addEventListener('click', hantei);

// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
