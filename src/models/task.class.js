import { LEVELS } from "./levels.enum";


export class Task {
    name = '';
    description=''
    compled = false;
    level = LEVELS.NORMAL;

    constructor(name, description, completed,level ){
        this.name= name ;
        this.description = description;
        this.compled = completed;
        this.level = level
    }
}