const logger = require('./logger.js')
class Test{
    constructor(numberOne,numberTwo){
        this.numberOne=numberOne;
        this.numberTwo=numberTwo;
    }
    multiplication (numberOne,numberTwo)
    {
      return numberOne*numberTwo;  
    }
    division(numberOne,numberTwo)
    {
        try {
            if (numberTwo===0) {
                let errormsg ="Cant divide by 0";
                throw Error(errormsg);
                logger.info(errormsg)
            }
            else return numberOne/numberTwo;
        } catch (error) {
            logger.info(`${error}`);
            }
    }
    subtraction (numberOne,numberTwo)
    {
      return numberOne-numberTwo;  
    }
};

class Add extends Test{
    /*constructor(numberOne,numberTwo){
        super(numberOne,numberTwo)
    }*/
    add(a,b){ 
        return a+b;
    }

}

var res=new Add(4,3);
console.log(res.add(4,3)); // priority is given to local methods
console.log(res.multiplication(5,10)); // child class inherits parent class
console.log(res.division(10,2)); // child class inherits parent class
logger.info(res.division(10,3));
console.log(res.subtraction(3,0)); // defined in parent class and called from child class object which inherit Parent class