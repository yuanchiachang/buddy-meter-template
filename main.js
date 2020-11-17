const problemList = loadProblem();

let problemNum = 0;
let correctNum = 0;

function start(){
    document.getElementById("problem-list-wrapper").style.display="inline-block";
    document.getElementById("correct-number").style.display="inline-block";
    document.getElementById("button").style.display = "none";
    render();
}

function choose(num){
    /*todo
      1.選到正確答案，要把正確答案變成綠色，並將correctNum加1
      2.選到錯誤答案，要把錯誤答案變成紅色，正確答案變成綠色
    */   
    if(problemNum < 9){
        problemNum++;
        setTimeout(function(){
            render();
        },1000);
    }
    else{
        setTimeout(function(){
            finish();
        },1000);
        
    } 
}

function render(){
    /*todo
        1.把題目名稱依據題數從物件陣列中取出
        2.將選項依據題數從物件陣列中取出
        3.將選項的背景顏色重設為#ff9999
    */
}

function finish(){
    document.getElementById("problem-list").style.display="none";
    document.getElementById("correct-number").style.display="none";
    document.getElementById("final-result-img").style.display="inline-block";
    /*todo
        根據不同答對題數correctNum顯示不同的final-result和不同的final-result-img
    */
}

function loadProblem(){
    const problemList = [];
    /*todo
    做十個const物件，其中包括
        1.problemTitle
        2.choice陣列
        3.trueChoice
    並將這十個物件一一push到problemList裡面
    */  
    return problemList;
}