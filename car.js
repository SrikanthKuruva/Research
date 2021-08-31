const car = {
    model:2007,
    manufacturer: 'Honda'
};
class sampleClass{
    constructor(){
        this.sampleProperty = 'constructor value';    
    }
    sampleProperty = 'sample';

    sampleMethod(a, b){
        return a * b;
    }
}
let oClass = (a, b) =>{ return a * b * 2};
export { car as car1, oClass as sampleClass };