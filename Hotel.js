export default class Hotel{
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
        console.log("Address: " + this.Address);
        console.log("Number of rooms: " + this.NumberOfRooms);
    }
    ListBookedRooms(){
        return this.rooms.filter(function (){
            return this.isBooked();
        });
    }
}

