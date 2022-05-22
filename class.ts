class Rectangle
{
    public width:number;
    public height:number;

    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }

    CalcCircumference(width,height):number{
        const x=2*(width+height);
        return x;
    }

    WhoAmI()
    {
        console.log("I am Rectangle");
    }
}

class Square extends Rectangle 
{
    constructor(width)
    {
        super(width,width);
    }

    CalcCircumference(width):number{
        const y=4*(width);
        return y;
    }

    WhoAmI()
    {
        console.log("I am Square");
    }
}

const rect1 = new Rectangle(2,2);
const sq1 = new Square(2);