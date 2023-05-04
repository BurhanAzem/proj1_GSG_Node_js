import  RoomWithView  from "./RoomWithView.js"
import  SleepingRoom  from "./SleepingRoom.js"
import  Hotel from "./Hotel.js"
import  Room  from "./Room.js";  



const roomWithView1 = new RoomWithView(1, 1, 50, "left", 2);
const roomWithView2 = new RoomWithView(2, 2, 100, "top", 1);

const sleepingRoom1 = new SleepingRoom(3, 3, 150, 2);
const sleepingRoom2 = new SleepingRoom(4, 4, 200, 2);

const rooms = []

rooms.push(roomWithView1);
rooms.push(roomWithView2);
rooms.push(sleepingRoom1);
rooms.push(sleepingRoom1);

const hotel = new Hotel("NS", 100, rooms);



console.log(hotel.ListBookedRooms);
roomWithView1.book();
sleepingRoom1.book();
console.log(hotel.ListBookedRooms);


