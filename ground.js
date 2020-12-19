class Ground
{
    constructor()
    {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(200,390,400,15,options);
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        fill("lightblue");
        rectMode(CENTER);
        rect(pos.x,pos.y,400,15);
    }
}