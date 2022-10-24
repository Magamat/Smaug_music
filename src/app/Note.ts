export class Note {
    bottomRowPosition: number;

    constructor(bottomRowPosition: number) {
        this.bottomRowPosition = bottomRowPosition;
    }

    getFrenchName() : string {
        switch (this.bottomRowPosition) {
            case 1: { return "Do";}
            case 2: { return "Re";}
            case 3: { return "Mi";}
            case 4: { return "Fa";}
            case 5: { return "Sol";}
            case 6: { return "La";}
            case 7: { return "Si";}
            default: { 
                throw("tout est couvert"); 
             } 
        }
    }

    getEnglishName() : string {
        switch (this.bottomRowPosition) {
            case 1: { return "c";}
            case 2: { return "d";}
            case 3: { return "e";}
            case 4: { return "f";}
            case 5: { return "g";}
            case 6: { return "a";}
            case 7: { return "b";}
            default: { 
                console.log(this.bottomRowPosition)
                throw("tout est couvert"); 
             } 
        }
    }
}