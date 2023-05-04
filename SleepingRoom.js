export default class SleepingRoom extends Room  {
    personCapacity;
    constructor(floorNum, roomNum, price, personCapacity){
        super(floorNum, roomNum, price)
        this.personCapacity = personCapacity
    }
    print(){
        console.log("Floor: " + this.floorNum + " Room: " + this.roomNum + " Price: " 
        + this.price + "personCapacity: " + this.personCapacity);
    }
}