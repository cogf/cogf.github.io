var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 70;
    this.label = config.label || "~Click~";
    this.color = config.color || color(255, 0, 0);
    this.radius = config.radius || 0;
    this.onClick = config.onClick || function() {};
};
Button.prototype.draw = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, this.radius);
    textSize(20);
    fill(0, 0, 0);
    text(this.label, this.x + this.width/2, this.y + this.height/2);
};
Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};
Button.prototype.handleClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};
var btn1 = new Button({
    x: 150,
    y: 175,
    width: 100,
    height: 50,
    radius: 5,
    color: color(106, 89, 255),
    label: "Click me!",
    onClick: function() {
        println("Woo hoo! You did it!");
    },
});
var btn2 = new Button({
    x: 160,
    y: 239,
    width: 80,
    height: 35,
    radius: 5,
    color: color(89, 255, 172),
    label: "No me!",
    onClick: function() {
        println("Wrong one!");
    },
});
var btn3 = new Button({
    x: 125,
    y: 91,
    width: 150,
    height: 70,
    radius: 10,
    color: color(20, 255, 220),
    label: "You should\nclick me.",
    onClick: function() {
        println("Not the right one!");
    },
});

textAlign(CENTER, CENTER);
draw = function() {
    background(0, 0, 0);
    btn1.draw();
    btn2.draw();
    btn3.draw();
};

mouseClicked = function() {
    btn1.handleClick();
    btn2.handleClick();
    btn3.handleClick();
};
