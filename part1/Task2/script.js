var a = Number(prompt("please enter first number"));
var op = prompt("please enter operation");
var b = Number(prompt("please enter second number"));
       
            switch (op) {
              case '+':
                result= a + b
                break;
                case '*':
                    result= a * b
                break;
                
              case '-':
                result= a - b
                break;
                case '/':
                    result= a / b
                break;
                case '%':
                    result= a % b
                break;
              default:
                result= 'invalid operation'
                break
            }
          
     
    alert("result ="+ result)
    var Continue1 = confirm("Do you want to continue?");
    var stop=true;
    if(Continue1==false){
      stop=false
    }

        while(stop)
        {
                 op = prompt("please enter operation");
                 secNum = Number(prompt("Enter number"));
                 switch(op){
                        case "+":
                            result+=secNum;
                                alert("The result ="+result);
                        break;
                        case "*":
                            result*=secNum;
                alert("The result ="+result);
            
                        break;
                        case "-":
                            result-=secNum;
                alert("The result ="+result);
                        break;

                        case "/":
                          result/=secNum;
              alert("The result ="+result); 
                      break;
          
                            case "%":
                            result%=secNum;
                alert("The result ="+result); 
                        break;
            
            
                    }
                    var Continue2 = confirm("Do you want to continue");
                    if (!Continue2) {
                        stop=false;
                      }
                  }
                
                    
                    
      
        
    

