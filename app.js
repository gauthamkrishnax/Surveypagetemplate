const key = ['A','B','B','A'];
const form = document.querySelector('#form');
const scoredisplay = document.querySelector('#scoredisplay');
const submitbtn = document.querySelector('#submitbtn');

submitbtn.addEventListener('click', e => {
    e.preventDefault();
    
    let score=0;
    let userkey = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userkey.forEach((a,b)=>{
        if(a===key[b]) {score=score+25;}
    })

    scrollTo(0,0);

    console.log(score);
    scoredisplay.classList.remove('hidden');

    let output=0;
    const timer = setInterval(() => {
        scoredisplay.querySelector('strong').textContent = `${output}%`;
        if(output<score-5){
            const timers = setInterval(() => {
                if(output>=score-5){
                    clearInterval(timers)}
                scoredisplay.querySelector('strong').textContent = `${output}%`;
                output++;
            }, 20); 
        }    
        if(output===score){
            clearInterval(timer);
        }
        output++;
    }, 200);
})
 console.log('ok bei tata ! XD')