function bouncyBall(radius, color, bounciness){
    this.radius = radius;
    this.color = color;
    this.bounciness = bounciness;
    this.initial_pos = new p5.Vector(ww/2, wh/2);
    this.center = new p5.Vector(ww/2, wh/2);
    this.cur_pos = this.initial_pos.copy();
}


function calculate_displacement(){
    return [1,1]
}

bouncyBall.prototype = {
    displace: function(x, y, displacement){
        let moved_x = x + displacement.x;
        let moved_y = y + displacement.y;
        // let moved = createVector(moved_x, moved_y);
        let moved = createVector(displacement.x, displacement.y);
        console.log(moved,this.radius)
        console.log((moved_x - this.center.x)**2 + (moved_y - this.center.y)**2)
        inflection = createVector(-5,-5)
        if ((moved_x - this.center.x)**2 + (moved_y - this.center.y)**2 >= home_radius) {
          moved.mult(inflection);
        }
        return moved
      },
    update: function(){
        let disp = calculate_displacement();
        let dispx = disp[0];
        let dispy = disp[1];
        displacement = createVector(dispx,dispy);
        move = createVector(1,1);
        displacement = this.displace(this.cur_pos.x, this.cur_pos.y, move)
        this.cur_pos.add(displacement)
    },
    render: function(){
        fill(this.color);
        circle(this.cur_pos.x, this.cur_pos.y, this.radius);
    }
}
