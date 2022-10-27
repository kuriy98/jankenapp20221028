function R_Click(p_janken_r) {
    const janken = ['グー','チョキ','パー',];//"janken"のリストを作成します。
    const janken_r = Math.floor( Math.random() * 3);//Math.random() で乱数を作ります
    const p_janken = ['グー','チョキ','パー'];//"プレイヤーのjanken"のリストを作成します。

        //勝ち負けの判定機プログラムです
        if (janken_r === p_janken_r) {
            Result_end = "あいこです";
        } else if(p_janken_r === 0 && janken_r === 1) {
            Result_end = "あなたの【勝ち】";
        }else if(p_janken_r === 1 && janken_r === 2) {
            Result_end = "あなたの【勝ち】";
        }else if(p_janken_r === 2 && janken_r === 0) {
            Result_end = "あなたの【勝ち】";
        }else {
            Result_end = "あなたの【負け】";
        }

        //結果を表示するためのプログラムです
        const jankenpon = document.querySelector("#jankenpon");
        const jankenpon2 = document.querySelector("#jankenpon2");
        document.getElementById("Rejan1").innerHTML = p_janken[p_janken_r] +"を選択しました。ジャンケンの結果は・・・？";
        document.getElementById("Rejan2").innerHTML = "相手は" + janken[janken_r] + Result_end;
        
        jankenpon.img = "./images/jan" + jp_janken_r + ".jpeg"
        jankenpon2.img ="./images/jan + [janken_r] + .jpeg"
    }