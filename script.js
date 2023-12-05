const questions=[
    {
        "question": "Where was India’s first national Museum opened?",
        "answers": [
            {"text": "Delhi", "correct": false},
            {"text": "Hyderabad", "correct": false},
            {"text": "Rajasthan", "correct": false},
            {"text": "Mumbai", "correct": true}
        ]
    },
    {
        "question": "The world’s nation 5G mobile network was launched by which country?",
        "answers": [
            {"text": "Japan", "correct": false},
            {"text": "Asia", "correct": false},
            {"text": "South Korea", "correct": true},
            {"text": "Malaysia", "correct": false}
        ]
    },
    {
        "question": "The green planet in the solar system is?",
        "answers": [
            {"text": "Mars", "correct": false},
            {"text": "Uranus", "correct": true},
            {"text": "Venus", "correct": false},
            {"text": "Earth", "correct": false}
        ]
    },
    {
        "question": "The study of Heavenly bodies is Known as _________?",
        "answers": [
            {"text": "Astrophysics", "correct": false},
            {"text": "Astronautics", "correct": false},
            {"text": "Astrology", "correct": false},
            {"text": "Astronomy", "correct": true}
        ]
    }
    

    
    
    
]
    const quesEle=document.getElementById('question');
    const answerbtn=document.getElementById('answerbutton');
    const nextbtn=document.getElementById('nextbtn');
    let currentQuesIndex=0;
    let score=0;
function startQuiz(){
    currentQuesIndex=0
    score=0;
    nextbtn.innerHTML="Next";
    showQues();

    
}
function showQues(){
    resetState();
    let currentQues=quesEle.innerHTML=questions[currentQuesIndex];
    let questionNo=currentQuesIndex+1;
    quesEle.innerHTML=questionNo+ '. '+currentQues.question;
    currentQues.answers.forEach(answer=>{
        const button=document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });
}
function resetState(){
    nextbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.correct==='true';
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerbtn.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add('correct');
            
        }
        button.disabled=true;

    });
    nextbtn.style.display='block';

}
function handleNextQues(){
    currentQuesIndex++;
    if(currentQuesIndex<questions.length){
        showQues();
    }else{
        showScore();
    }
}
function showScore(){
    resetState();
    quesEle.innerHTML=' You Scored '+score;
    nextbtn.innerHTML='PlayAgain'
    nextbtn.style.display='block'
}
nextbtn.addEventListener('click',()=>{
    if(currentQuesIndex<questions.length){
        handleNextQues();
    }else{
        startQuiz();
    }
})

startQuiz()