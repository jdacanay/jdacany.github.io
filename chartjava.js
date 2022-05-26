// Even though dict is a const, we can still mutate its children
var q = 0;

const dict = {
    cost : 0,
    flexibility : 0,
}


    function addValue (valueName, ptvalue) {
        dict[valueName]= dict [valueName] + ptvalue;

        document.getElementsByClassName("container1") [0].style.display = "none";
        document.getElementsByClassName("container2") [0].style.display = "none";
        document.getElementsByClassName("container3") [0].style.display = "none";
        document.getElementsByClassName("container4") [0].style.display = "none";
        document.getElementsByClassName("container5") [0].style.display = "none";

        if(dict["cost"]>0 && dict["flexibility"]>0){
            calculator.setExpression({ id: 'quadrant1', latex: 'x>0 \\left\\{y>0\\right\\}'});
            document.getElementsByClassName("container1") [0].style.display = "inherit";
            
        }
        if(dict["cost"]<0 && dict["flexibility"]>0){
            calculator.setExpression({ id: 'quadrant1', latex: 'y>0 \\left\\{x<0\\right\\}'});
            document.getElementsByClassName("container2") [0].style.display = "inherit";
        }
        if(dict["cost"]<0 && dict["flexibility"]<0){
            calculator.setExpression({ id: 'quadrant1', latex: 'x<0 \\left\\{y<0\\right\\}'});

            document.getElementsByClassName("container3") [0].style.display = "inherit";
        }
        if(dict["cost"]>0 && dict["flexibility"]<0){
            calculator.setExpression({ id: 'quadrant1', latex: 'y<0 \\left\\{x>0\\right\\}'});
            document.getElementsByClassName("container4") [0].style.display = "inherit";
        }


        if (dict ["cost"] > 50){
            dict["cost"] = 50;
        }
        if (dict ["cost"] < -50){
            dict["cost"] = -50;
        }
        if (dict ["flexibility"] > 50){
            dict["flexibility"] = 50;
        }
        if (dict ["flexibility"] < -50){
            dict["flexibility"] = -50;
        }
        calculator.setExpression({ id: 'graph1', latex: `(${dict['cost']}, ${dict['flexibility']})` });

    }





