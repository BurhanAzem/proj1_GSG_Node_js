export default class RoomWithView extends Room  {
    view;
    numberOfBeds;
    constructor(floorNum, roomNum, price, view){
        super(floorNum, roomNum, price, numberOfBeds)
        this.view = view;
        this.numberOfBeds = this.numberOfBeds;
    }
    print(){
        console.log("Floor: " + this.floorNum + " Room: " + this.roomNum 
        + " Price: " + this.price + "view: " + this.view + "number Of Beds" + this.numberOfBeds);
    }
}