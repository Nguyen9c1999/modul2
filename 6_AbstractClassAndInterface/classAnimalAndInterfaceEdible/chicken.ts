import {Animal} from "./Animal";
import {Edible} from "./Edible";

export  class Chicken extends Animal implements Edible{
    makeSound() {
        console.log("gà")
    }

    howToEat() {
        console.log("gà ăn được")
    }

}