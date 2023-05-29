function timgiatrilonnhat(so) {
    let max = so[0];
    for(var i = 1;i<10; i++){
        if (so[i] > max){
            max = so[i]
        }
    }
    return max;
    }
    console.log(timgiatrilonnhat([10,23,14,17,36,41]));