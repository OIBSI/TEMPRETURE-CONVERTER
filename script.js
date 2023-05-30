    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    const kelvinInput=document.getElementById("kelvin");
    const identity=document.getElementsByClassName("input");
    for(let i=0;i<identity.length;i++){
        let input=identity[i];
        input.addEventListener("input",function(e){
            let value=parseFloat(e.target.value);

            switch(e.target.name){
                case "fahrenheit":
                    celsiusInput.value=(value-32)/1.8;
                    kelvinInput.value=((value-32)/1.8)+273.15;
                break;  
                case "celsius":
                    fahrenheitInput.value=(value*1.8)+32;
                    kelvinInput.value=value+273.15;
                break;  
                case "kelvin":
                    celsiusInput.value=value-273.15;
                    fahrenheitInput.value=((value-273.15)*1.8)+32;
                break;             }
        });
    }
     


