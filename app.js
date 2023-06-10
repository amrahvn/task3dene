
//task1 sahe dairesi
function sahe(radius){
    if(typeof radius === "number"){
        let sahe =Math.PI *Math.pow(radius,2);
        return sahe;
    }else{
        return "reqem daxil ed"
    }
}

console.log(sahe(9))

/*

//task 2 
//encapsulation
class rocket{
    #mass
    constructor(charge,engine,fuel){
         this.charge=charge;
         this.engine=engine;
         this.fuel=fuel;
         this.#mass=mass
    }
    getmass(){
        return this.#mass
    }
    setmass(ton){
        this.#mass=ton
    }
}
let Falcon9 =new rocket('hok','iyon','Rp-1');
Falcon9.setmass(550)
Falcon9.getmass()


//inheritance

class Rocket{
    
    constructor(charge,engine,fuel){
         this.charge=charge;
         this.engine=engine;
         this.fuel=fuel;
    }
 
}

class Soyuz extends Rocket{
    constructor(charge,engine,fuel,design){
        super(charge,engine,fuel);
        this.design=design;
    }
}
*/

//en kicik element
//task3


function downnumber(array) {
    if(!Array.isArray(array)){
        console.log("array deil");
        return ;
    }

    if(array.length ===0){
        console.log("array bosdur");
        return;
    }

    let enkicik=array[0];

    for(let i=0;i<array.length;i++){

        if(array[i]<enkicik){
            enkicik=array[i]
        }
    }

    console.log("en kicik element:"+enkicik);
}

let array1=[5,3,56,7,4,2,31]
downnumber(array1);