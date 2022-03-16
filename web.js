const express = require('express')
const path = require('/home/hosting_users/db1magic/apps/db1magic_dangbti');
const app = express()
const PORT = 8001

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.static(path.join(__dirname,"/views")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/question", (req, res) => {
    res.sendFile(path.join(__dirname, "views/component/question.html"));
});
app.get("/result/[1-5]", (req, res) => {
    res.sendFile(path.join(__dirname, "views/component/result.html"));
});
//"/"를 요청시에 index.html을 가져온다.

app.post("/submit", (req, res) => {
    const data = req.body;
    let numberArr = [0, 0, 0, 0, 0];
    //for문이 실행되면서 5개의 인덱스 번호에
    //사용자가 선택한 pk값을 1씩 증가시켜 선택 횟수를 카운트한다.
    //예시) 사용자가 선택한 pk값: 1
    //numberArr[0] = numArr[0] + 1

    for(let i = 1; i < 11; i++) {
        let breedNum = Number(data[`answer-${i}`]);
       numberArr[breedNum - 1] += 1;

    }

    let maxValue = 0;
    let maxValueIdx = 0;

    for(let i = 0; i< numberArr.length; i++) {
        //배열안의 숫자중 가장 큰숫자값을 구함
        //가장 큰 숫자값의 인덱스 번호를 구함
        if(numberArr[i] > maxValue) {
            maxValue = numberArr[i];
            maxValueIdx = i;
        }
    }
    
    res.redirect("/result/" + (maxValueIdx + 1));
})
app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})