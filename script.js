//متغییر ها
//تایم 00:00:00
const theTimer = document.querySelector(".timerr");
//باکس برای وارد کردن کلمه ها
const testArea = document.querySelector("#test-area");
//متن اصلی
const originText = document.querySelector(".test p").innerHTML;
//همون باکس برای وارد کردن کلمه ها ایندفعه برای بردرش
const rang = document.querySelector("#test-area");
//دکمه از نو
const resetButton = document.querySelector(".reset");

const timeRunning = false;
var timer = [0,0,0,0];
var Interval;

//برای نمایش دوتایی تایمر
function leadingzero(timer){
    if(timer<=9){
        timer = "0"+timer;
    }

    return timer;
}

//محاسبه تایم,دقیقه,ثانیه,ساعت
function runTimer(){
let currenTime = leadingzero(timer[0])+":"+leadingzero(timer[1])+":"+leadingzero(timer[2]);
theTimer.innerHTML = currenTime;


timer[0] = Math.floor((timer[3]/100)/60);
timer[1] = Math.floor((timer[3]/100)-(timer[0]*60));
timer[2] = Math.floor((timer[3] - (timer[1]*100) - (timer[0]*6000)));
timer[3]++;
}

//برای تایید انچه نوشتیم با متن اصلی
function spellCheck(){
    let textEntered = testArea.value;//وارد کردن کل جمله
    let Math = originText.substring(0,textEntered.length);//وارد کردن نیمه جمله

    if(textEntered==originText){
         rang.style.borderColor="green";
         clearInterval(Interval);
    }

    else{
        if(textEntered==Math){
            rang.style.borderColor="yellow";
        }
        else{
            rang.style.borderColor="red";
        }
    }
}

//برای دکمه از نو
function reset(){
    theTimer.innerHTML="00:00:00";
    testArea.value="";
    rang.style.borderColor="black"; 
    timeRunning=false;
    timer=[0,0,0,0];
    Interval=null;
    clearInterval(Interval);
}

//برای گرفتن متن
function Start(){
    let textEnterlength = testArea.value.length;

    if(textEnterlength==0 && !timeRunning){
        Interval = setInterval(runTimer,10);
        timeRunning=true;
    }
}



//وارد کردن حروف
testArea.addEventListener("keypress",Start);
testArea.addEventListener("keyup",spellCheck);
resetButton.addEventListener("click",reset);
