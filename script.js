/*
 * 0: グー
 * 1: チョキ
 * 2: パー
 */
function rsp(p) {
    let result;
    let pHand;
    let cHand;
    let resultString;
    let random = Math.random();
    let c = Math.floor(random * 3);
    console.log(c);
    console.log(p);

    /*
     * 0: 負け
     * 1: 勝ち
     * 2: あいこ
     */

    if (p == c) {
        result = 2;
    } 
    else {
        if (p == 0) {
            if (c == 1) {
                result = 1;
            } 
            else {
                result = 0;
            }
        } 
        else if (p == 1) {
            if (c == 0) {
                result = 0;
            } 
            else {
                result = 1;
            }
        } 
        else {
            if (c == 0) {
                result = 1;
            } 
            else {
                result = 0;
            }
        }
    }
    console.log(result);

    if (p == 0) {
        pHand = 'グー';
    } 
    else if (p == 1) {
        pHand = 'チョキ';
    } 
    else {
        pHand = 'パー';
    }

    if (c== 0) {
        cHand = 'グー';
    } 
    else if (c == 1) {
        cHand = 'チョキ';
    } 
    else {
        cHand = 'パー';
    }

    if (result == 0) {
        resultString = '負け';
    } 
    else if (result == 1) {
        resultString = '勝ち';
    } 
    else {
        resultString = 'あいこ';
    }

    document.getElementById('player').innerHTML = 'あなたは ' + pHand;
    document.getElementById('computer').innerHTML =
        'コンピューターは ' + cHand;
    document.getElementById('resultMsg').innerHTML = '結果は ' + resultString;
}