function grader(score){
    var total = 0;
    for(var i=0; i<score.length; i++){
        total += score[i];
    }
    return Math.round(total/score.length);
}

var scores1 = [90,98,89,100,100,86,94];
console.log(grader(scores1));


var scores2 = [40,65,77,82,80,54,73,63,95,49];
console.log(grader(scores2)); 