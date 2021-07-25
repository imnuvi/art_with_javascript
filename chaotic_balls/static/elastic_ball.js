function bouncyBall(radius, color, bounciness){
    this.radius = radius;
    this.color = color;
    this.bounciness = bounciness;
    this.initial_pos = new p5.Vector(ww/2, wh/2);
    this.cur_pos = this.initial_pos.copy();
}


function calculate_displacement(){
    return [1,1]
}

bouncyBall.prototype = {
    update: function(){
        let disp = calculate_displacement();
        let dispx = disp[0];
        let dispy = disp[1];
        displacement = createVector(dispx,dispy);
        this.cur_pos.add(displacement)
    },
    render: function(){
        fill(this.color);
        circle(this.cur_pos.x, this.cur_pos.y, this.radius);
    }    
}