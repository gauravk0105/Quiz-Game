
/* to store user detail */
function storeDetails():void {
    let nameText = document.getElementById("form3");
    let emailText = document.getElementById("form2");
    sessionStorage.setItem("username", nameText.nodeValue);
}

/* start timer */
function start_timer():void {
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
            let remSecX = '0' + remSec;
        }
        if (min < 10) {
            let minX = '0' + min;
        }
        countDiv.innerHTML = min + ":" + remSec;
        if (sec > 0) {
            sec = sec - 1;
        } else {
            clearInterval(countDown);
            alert("Your Time is over..")
            toChecked(true);
            
        }
    }
}

/* storing questions and answer in data */
let data = {
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
      },{
        "id":6, 
        "question":"What is the purpose of the radix parameter in the parseInt() method?", 
        "options":["Numeral system not to be used", "Numeral system to be used", "Conversion mode", "Parsing mode"], 
        "answers":["b"]
      },{
        "id":7, 
        "question":"What will be the radix value of the parseInt() method when the string begins with 0?", 
        "options":["6", "7", "8", "9"], 
        "answers":["c"]
      },{
        "id":8, 
        "question":"What is the return type of the method parseInt()?", 
        "options":["Date", "Float", "Integer", "Date"], 
        "answers":["c"]
      },{
        "id":9, 
        "question":"1 kilobyte (kb) =", 
        "options":["1,024 Bytes", "1,000 Bytes", "1,200 Bytes", "1,275 Bytes"], 
        "answers":["a"]
      },{
        "id":10, 
        "question":"Which of the below are reserved keyword in Java?", 
        "options":["array", "goto", "null", "int"], 
        "answers":["b", "d"]
      },{
        "id":11, 
        "question":"What are the valid statements for static keyword in Java?", 
        "options":["We can have static block in a class.", "The static block in a class is executed every time an object of class is created.", "We can have static method implementations in interface.", "We can define static block inside a method."], 
        "answers":["a", "c"]
      },{
        "id":12, 
        "question":" Select all the core concepts of OOPS.", 
        "options":["Abstraction", "Inheritance", "Interface", "Polymorphism"], 
        "answers":["a", "b", "d"]
      },{
        "id":13, 
        "question":"Which of the following statements are true for inheritance in Java?", 
        "options":["The “extend” keyword is used to extend a class in java.", "You can extend multiple classes in java.", "Private members of the superclass are accessible to the subclass.", "We can’t extend Final classes in java."], 
        "answers":["d"]
      },{
        "id":14, 
        "question":"Which of the below are unchecked exceptions in java?", 
        "options":["RuntimeException", "ClassCastException", "NullPointerException", "IOException"], 
        "answers":["a", "b", "c"]
      },{
        "id":15, 
        "question":"What is 6 X 4?", 
        "options":["22", "24", "28", "32"], 
        "answers":["b"]
      },{
        "id":16, 
        "question":"The circular wait condition can be prevented by ____________?", 
        "options":["defining a linear ordering of resource types", "using thread", "using pipes", "all of the mentioned"], 
        "answers":["a"]
      },{
        "id":17, 
        "question":"To avoid deadlock ____________?", 
        "options":["there must be a fixed number of resources to allocate", "resource allocation must be done only once", "all deadlocked processes must be aborted", "inversion technique can be used"], 
        "answers":["a"]
      },{
        "id":18, 
        "question":"In operating system, each process has its own __________?", 
        "options":["address space and global variables", "open files", "pending alarms, signals and signal handlers", "all of the mentioned"], 
        "answers":["d"]
      },{
        "id":19, 
        "question":"In Unix, Which system call creates the new process?", 
        "options":["fork", "create", "new", "none of the mentioned"], 
        "answers":["a"]
      },{
        "id":20, 
        "question":"In tuple relational calculus P1 → P2 is equivalent to?", 
        "options":["¬ P1  ∨ P2", "P1 ∨ P2", "P1  ∧ P2", "P1  ∧ ¬P2"], 
        "answers":["a"]
      },{
        "id":21, 
        "question":"Related fields in a database are grouped to form a?", 
        "options":["Data file", "Data record", "Menu", "Bank"], 
        "answers":["b"]
      },{
        "id":22, 
        "question":"The database environment has all of the following components except:", 
        "options":["Users", "Separate files", "Database", "Database administrator"], 
        "answers":["b"]
      },{
        "id":23, 
        "question":"A report generator is used to?", 
        "options":["Update files", "Print files on paper", "Data entry", "Delete files"], 
        "answers":["b"]
      },{
        "id":24, 
        "question":" A subschema expresses?", 
        "options":["The logical view", "The physical view", "The external view", "All of the above"], 
        "answers":["c"]
      },{
        "id":25, 
        "question":"E-R model uses this symbol to represent weak entity set?", 
        "options":["Dotted rectangle", "Diamond", "Doubly outlined rectangle", "None of these"], 
        "answers":["c"]
      }
    ]
  }

/* adding question dynamically */
function createQuiz() {
    var ch = ["a", "b", "c", "d"];
    for (let i in data.QA) {
        var div_count = Math.floor(i/5);
        //console.log(div_count);
        var div_form = document.getElementById("set"+(div_count+1));
        var div_element = document.createElement("div");
        div_element.classList.add("container");
        var heading_h5 = document.createElement("h5");
        heading_h5.innerHTML="Question "+(data.QA[i].id)+": "+data.QA[i].question;
        heading_h5.classList.add("control-label");
        heading_h5.classList.add("col-sm-10");
        var ul_list = document.createElement("ul");
        for(let j=0;j<4;j++) {
            var li_element=document.createElement('li');
            var input = document.createElement("input");
            input.type = "checkbox";
            input.name = "q"+data.QA[i].id;
            //console.log(input.name);
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


function toChecked(flag) {
    var id=[]
    let correct:number=0;
    var history_options=[];
    var history_isCorrect=[];
    for(let i in data.QA) {   
       var choices = document.getElementsByName("q"+data.QA[i].id);
       var arr=[]; 
       id.push(data.QA[i].id)
       for(let j=0;j<choices.length;j++) {
            if(choices[j]) {
                arr.push(choices[j]);
            }
        }
        console.log(typeof(arr))
       history_options.push(arr);
        if(JSON.stringify(data.QA[i].answers)==JSON.stringify(arr)) {
            history_isCorrect.push(1);
            correct++;
        } else history_isCorrect.push(0)
    }
    sessionStorage.setItem("correct", ""+correct);
    sessionStorage.setItem("iscorrect", JSON.stringify(history_isCorrect));
    sessionStorage.setItem("qid", JSON.stringify(id));
    sessionStorage.setItem("options_selected", JSON.stringify(history_options));
    window.alert("Your Score: "+correct);
    if(flag==true) {
        if((correct/25)*100 >= 70)
           window.alert("Pass and your percentage is: "+((correct/25)*100));
         else window.alert("Fail and your percentage is: "+((correct/25)*100))
        window.location.href='finish.html'
    } else {
        if (confirm('Are you sure you want to end the quiz??')) {
             if((correct/25)*100 >= 70)
               alert("Pass and your percentage is: "+((correct/25)*100));
           else alert("Fail and your percentage is: "+((correct/25)*100))
           var anchor = document.getElementById("anchor");
            //anchor.href="finish.html";
        } //else alert("No Contine it")
    }
}

/* ------------------------------------------------------------------------------------------------------------- */

function fetchData() {
    // let loc_name = document.getElementById("display_name");
    // let loc_score = document.getElementById("display_score");
    // let loc_name.innerHTML = "Hello "+(sessionStorage.getItem("username"))+",";
    // if(((sessionStorage.getItem("correct"))/25)*100 >= 70) {
    //      loc_score.innerHTML = "Pass and your Percentage is: "+(parseFloat(sessionStorage.getItem("correct")/25)*100)+"%";
    //      loc_score.classList.add("bg-success");
    //  }
    //  else {
    //      loc_score.innerHTML = "Fail and your Percentage is: "+(parseFloat(sessionStorage.getItem("correct")/25)*100)+"%";
    //      loc_score.classList.add("bg-danger");
    //  }
}


function createQuizWithReplay() {
    let history_isCorrect=JSON.parse(sessionStorage.getItem("iscorrect"));
    let id=JSON.parse(sessionStorage.getItem("qid"));
    let history_options=JSON.parse(sessionStorage.getItem("options_selected"));
    var ch = ["a", "b", "c", "d"];
    for (let i in data.QA) {
        var div_count = Math.floor(i/5);
        var div_form = document.getElementById("set"+(div_count+1));
        var div_element = document.createElement("div");
        div_element.classList.add("container");
        var heading_h5 = document.createElement("h5");
        heading_h5.innerHTML="Question "+(data.QA[i].id)+": "+data.QA[i].question;
        heading_h5.classList.add("control-label");
        heading_h5.classList.add("col-sm-10");
        var ul_list = document.createElement("ul");
        for(let j=0;j<4;j++) {
            var li_element=document.createElement('li');
            var input = document.createElement("input");
            input.type = "checkbox";
            input.name = "q"+data.QA[i].id;  
            input.value = ch[j];
            input.id = "id"+data.QA[i].id;
            li_element.appendChild(input);
            li_element.innerHTML+='&nbsp;'
            li_element.innerHTML+=data.QA[i].options[j];
            ul_list.appendChild(li_element);
        }
        let new_div = document.createElement("div")
        new_div.classList.add("alert");
        if(history_isCorrect[i]==true) {
            new_div.classList.add("alert-success");
            new_div.innerHTML="<strong>Correct Answer!</strong>"
        } else {
            new_div.classList.add("alert-danger");
            new_div.innerHTML="<strong>Wrong Answer!</strong>"
        }
        let inside = document.createElement("div");
        if(history_options[i].length==0)
            inside.innerHTML="<div class='col-3'>selected options: None</div> <div class='col-3'>correct options: "+data.QA[i].answers+"<\div>";
        else
            inside.innerHTML="<div class='col-3'>selected options: "+history_options[i]+"</div> <div class='col-3'>correct options: "+data.QA[i].answers+"<\div>";
        new_div.appendChild(inside);
        div_element.appendChild(heading_h5);
        div_element.appendChild(ul_list);
        div_element.appendChild(new_div);
        div_form.appendChild(div_element);
      }
}