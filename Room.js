export default class Room{
    floorNum;
    roomNum;
    price;
    #isBooked;
    constructor(floorNum, roomNum, price){
        this.floorNum = floorNum
        this.roomNum = roomNum
        this.price = price
    }
    print(){
        console.log("Floor: " + this.floorNum + " Room: " + this.roomNum + " Price: " + this.price);
    }
    book(){
        this.#isBooked = true;
    }
    isBooked(){
        return this.#isBooked;
    }
}

