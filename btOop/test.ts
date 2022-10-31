import {Gender} from "./cadres";
import {Cadres} from "./cadres";
import {Staff} from "./staff";
import {Engineer} from "./engeneers";
import {Worker} from "./worker";
import {Manager} from "./manager";
let staff= new Staff('nguyen',23,0,'Ha Noi','ke toan')
let engineer=new Engineer('bong',23,1,'ha noi','xay dung')
let work = new Worker('mai',18,1,'ha noi',5)
let listManger:Manager=new Manager()
listManger.add(staff)
listManger.add(engineer)
listManger.add(work)
listManger.display()
listManger.find('nguyen')
