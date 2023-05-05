// import  RoomWithView  from "./RoomWithView.js"
// import  SleepingRoom  from "./SleepingRoom.js"
// import  Hotel from "./Hotel.js"
// import  Room  from "./Room.js";  

class Room{
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

class RoomWithView extends Room  {
    view;
    numberOfBeds;
    constructor(floorNum, roomNum, price, view){
        super(floorNum, roomNum, price)
        this.view = view;
        this.numberOfBeds = this.numberOfBeds;
    }
    print(){
        console.log("Floor: " + this.floorNum + " Room: " + this.roomNum 
        + " Price: " + this.price + "view: " + this.view + "number Of Beds" + this.numberOfBeds);
    }
}

class SleepingRoom extends Room  {
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


class Hotel{
    Address;
    NumberOfRooms;
    #maxFloor = 10;
    #minFloor = 0;
    rooms = [];
    constructor(Address, NumberOfRooms, rooms){
        this.Address = Address
        this.NumberOfRooms = NumberOfRooms
        this.rooms = rooms
    }
    set setMaxFloor(maxFloor){
        this.#maxFloor = maxFloor
    }
    get getMaxFloor(){
        return this.#maxFloor
    }
    set setMinFloor(minFloor){
        this.#minFloor = minFloor
    }
    get getMinFloor(){
        return this.#minFloor
    }
    printAdvertismen(){
        console.log("Hello everyone")
        console.log("Address: " + this.Address);
        console.log("Number of rooms: " + this.NumberOfRooms);
    }
    ListBookedRooms(){
        rooms =  this.rooms.filter(function (){
            return this.isBooked();
        });
        return rooms;
    }
}
const roomWithView1 = new RoomWithView(1, 1, 50, "left", 2);
const roomWithView2 = new RoomWithView(2, 2, 100, "top", 1);

const sleepingRoom1 = new SleepingRoom(3, 3, 150, 2);
const sleepingRoom2 = new SleepingRoom(4, 4, 200, 2);

const rooms = []
roomWithView1.book();
sleepingRoom1.book();
rooms.push(roomWithView1);
rooms.push(roomWithView2);
rooms.push(sleepingRoom1);
rooms.push(sleepingRoom1);

const hotel = new Hotel("NS", 100, rooms);



console.log(hotel.ListBookedRooms);
roomWithView1.book();
sleepingRoom1.book();
console.log(hotel.ListBookedRooms);
hotel.printAdvertismen();

