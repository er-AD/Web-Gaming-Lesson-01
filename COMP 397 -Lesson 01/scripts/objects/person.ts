module objects {
    //module is creating the namespace
    export class Person {
        //private instance variable
        protected _name: string;

        //CONSTRUCTOR
        constructor(name: string) {
            this._name = name;
        } 

        //PUBLIC METHODS
        public speaks(): void {
            console.log(this._name + " says helo :)");
        }
    }

}