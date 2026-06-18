


const calculateResult = () => {
  let sum = 0;  
  const numberOfSubjects = document.getElementById("subjects").value;
  for(let i = 0; i < numberOfSubjects; i++ ){

    let x = parseFloat(prompt("Enter the Subjects Number" + (i+1)));
    sum += x;
    let avg = sum/numberOfSubjects;
    let grade;

    if(avg>90){
      grade = "A+";

    }
    else if(avg>75){
      grade = "A";

    }

    else if(avg>60){
      grade = "B+"
    }

    else if(avg>50){
      grade = "B";
    }

    else if(avg>40){
      grade = "C";
    }

    else{
      grade = "F";
    }

    
    
    let result = document.getElementById("result").innerHTML = `Total Marks: ${sum} <br><br> Average: ${avg.toFixed(2)} <br><br> Grade: ${grade} <br><br> Result: ${grade === "F"?"Fail":"Pass"} `;
  }
} 