function start_timer() {
    
    var timer = document.getElementById("timer");
    timer.innerHTML = "Time Left: ";
    var sec         = 1800,
    countDiv    = document.getElementById("div_timer"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';
        secpass();
    }, 1000);
    function secpass() {
            'use strict';
        var min     = Math.floor(sec / 60),
            remSec  = sec % 60;
        if (remSec < 10) {
            remSec = '0' + remSec;
        }
        if (min < 10) {
            min = '0' + min;
        }
        countDiv.innerHTML = min + ":" + remSec;
        if (sec > 0) {
            sec = sec - 1;
        } else {
            clearInterval(countDown);
            countDiv.innerHTML = 'countdown done';
            }
    }
    //createQuiz();
}

data = {
    "QA": [
      {
          "id":1, 
          "question":"Which of the following option leads to the portability and security of Java?", 
          "options":["Bytecode is executed by JVM", "The applet makes the Java code secure and portable", "Use of exception handling", "Dynamic binding between objects"], 
          "answers":["a"]
      },
      {
          "id":2, 
          "question":"Which of the following is not a Java features?", 
          "options":["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"], 
          "answers":["c"]
      },{
          "id":3, 
          "question":" _____ is used to find and fix bugs in the Java programs.", 
          "options":["JVM", "JRE", "JDK", "JDB"], 
          "answers":["d"]
      },{
          "id":4, 
          "question":"What is the return type of the hashCode() method in the Object class?", 
          "options":["Object", "int", "long", "void"], 
          "answers":["b"]
      },{
          "id":5, 
          "question":"What does the expression float a = 35 / 0 return?", 
          "options":["0", "Not a Number", "Infinity", "Run time exception"], 
          "answers":["c"]
      }
    ]
  }

//var ch = ["a", "b", "c", "d"]
function createQuiz() {
    var ch = ["a", "b", "c", "d"];
    //console.log(ch[0]);
    for (i in data.QA) {
        //console.log(i);
        var div_count = Math.floor(i/1);
        console.log(div_count);
        var div_form = document.getElementById("set"+(div_count+1));
        var div_element = document.createElement("div");
        div_element.classList.add("container");
        var heading_h5 = document.createElement("h5");
        heading_h5.innerHTML="Question"+(data.QA[i].id)+": "+data.QA[i].question;
        heading_h5.classList.add("control-label");
        heading_h5.classList.add("col-sm-10");
        var ul_list = document.createElement("ul");
        for(j=0;j<4;j++) {
            var li_element=document.createElement('li');
            var input = document.createElement("input");
            input.type = "checkbox";
            input.name = "q"+data.QA[i].id;
            console.log(input.name);
            input.value = ch[j];
            input.id = "id"+data.QA[i].id;
            li_element.appendChild(input);
            li_element.innerHTML+='&nbsp;'
            li_element.innerHTML+=data.QA[i].options[j];
            ul_list.appendChild(li_element);
        }
        div_element.appendChild(heading_h5);
        div_element.appendChild(ul_list);
        div_form.appendChild(div_element);
      }

    
}

function toChecked() {
    //window.alert("heloo");
    correct="";
    for(i in data.QA) {   
       var choices = document.getElementsByName("q"+data.QA[i].id);
       var arr=[]; 
       for(var j=0;j<choices.length;j++) {
            if(choices[j].checked) {
                //window.alert(choices[j].value)
                arr.push(choices[j].value);
            }
        }
        if(JSON.stringify(data.QA[i].answers)==JSON.stringify(arr)) correct++;
    }
    window.alert("Score: "+correct);
    //window.location.assign('index.html')
}
