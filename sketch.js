var leg_w = 32;
var leg_h = 160;
var drop_h = 26;
var seat_w = 172;
var seat_d = 162;
var back_h = 210;
var overlap = 30;

var gotBack = true;

var corner_x = 200;
var corner_y = 20;

var dash_w = 2;
var drawLineWeight = 4;
var px = drawLineWeight / 2;

var backHeightSlider, seatDepthSlider, seatWidthSlider, legWidthSlider, legHeightSlider, dropHeightSlider, overlapSlider;
var chairButton, diningTableButton, coffeeTableButton, bedButton, counterButton, dresserButton;

var sliderX = 700;
var sliderY = 25;
var labelX = 850;

function setup() {
  createCanvas(1000, 600);
  backHeightSlider = createSlider(10, 250, back_h);
  backHeightSlider.changed(function() {
    back_h = backHeightSlider.value();
    loop();
  });
  seatDepthSlider = createSlider(10, 250, seat_d);
  seatDepthSlider.changed(function() {
    seat_d = seatDepthSlider.value();
    loop();
  });
  seatWidthSlider = createSlider(10, 250, seat_w);
  seatWidthSlider.changed(function() {
    seat_w = seatWidthSlider.value();
    loop();
  });
  dropHeightSlider = createSlider(10, 250, drop_h);
  dropHeightSlider.changed(function() {
    drop_h = dropHeightSlider.value();
    loop();
  });
  legWidthSlider = createSlider(10, 250, leg_w);
  legWidthSlider.changed(function() {
    leg_w = legWidthSlider.value();
    loop();
  });
  legHeightSlider = createSlider(10, 250, leg_h);
  legHeightSlider.changed(function() {
    leg_h = legHeightSlider.value();
    loop();
  });
  overlapSlider = createSlider(10, 250, overlap);
  overlapSlider.changed(function() {
    overlap = overlapSlider.value();
    loop();
  });

  backHeightSlider.position(sliderX, sliderY);
  createP("back height").position(labelX, sliderY-20);
  seatDepthSlider.position(sliderX, sliderY*2);
  createP("seat depth").position(labelX, sliderY*2-20);
  seatWidthSlider.position(sliderX, sliderY*3);
  createP("seat width").position(labelX, sliderY*3-20);
  legWidthSlider.position(sliderX, sliderY*4);
  createP("leg thickness").position(labelX, sliderY*4-20);
  legHeightSlider.position(sliderX, sliderY*5);
  createP("leg height").position(labelX, sliderY*5-20);
  dropHeightSlider.position(sliderX, sliderY*6);
  createP("apron height").position(labelX, sliderY*6-20);
  overlapSlider.position(sliderX, sliderY*7);
  createP("overlap amount").position(labelX, sliderY*7-20);

  chairButton = createButton("chair");
  chairButton.position(sliderX, sliderY * 9);
  chairButton.mousePressed(function() {
    leg_w = 32;
    leg_h = 160;
    drop_h = 26;
    seat_w = 172;
    seat_d = 162;
    back_h = 210;
    overlap = 30;
    gotBack = true;
    loop();
  })
}

function draw() {
  background(255);
  //fold lines
  stroke(255, 0, 0);
  //back fold
  dashedLine(corner_x - leg_h, corner_y + back_h, corner_x + seat_w + leg_h, corner_y + back_h, dash_w);
  //front fold
  dashedLine(corner_x, corner_y + back_h + seat_d, corner_x + seat_w, corner_y + back_h + seat_d, dash_w);
  //left fold
  dashedLine(corner_x, corner_y + back_h, corner_x, corner_y + back_h + seat_d + leg_h, dash_w);
  //right fold
  dashedLine(corner_x + seat_w, corner_y + back_h, corner_x + seat_w, corner_y + back_h + seat_d + leg_h, dash_w);

  //design/draw lines
  stroke(230);
  strokeWeight(drawLineWeight);
  strokeCap(SQUARE);
  //top of seat back
  line(corner_x, corner_y + px, corner_x + seat_w, corner_y + px);
  //left side of seat back
  line(corner_x + px, corner_y, corner_x + px, corner_y + back_h);
  //right side of seat back
  line(corner_x + seat_w - px, corner_y, corner_x + seat_w - px, corner_y + back_h);
  //top of left back leg
  line(corner_x - leg_h, corner_y + back_h - leg_w + px, corner_x - drop_h, corner_y + back_h - leg_w + px);
  //bottom of left back leg
  line(corner_x - leg_h, corner_y + back_h + leg_w - px, corner_x - drop_h, corner_y + back_h + leg_w - px);
  //top of right back leg
  line(corner_x + seat_w + drop_h, corner_y + back_h - leg_w + px, corner_x + seat_w + leg_h, corner_y + back_h - leg_w + px);
  //bottom of right back leg
  line(corner_x + seat_w + drop_h, corner_y + back_h + leg_w - px, corner_x + seat_w + leg_h, corner_y + back_h + leg_w - px);
  //left of left front leg
  line(corner_x - leg_w + px, corner_y + back_h + seat_d, corner_x - leg_w + px, corner_y + back_h + seat_d + leg_h);
  //right of left front leg
  line(corner_x + leg_w - px, corner_y + back_h + seat_d + drop_h, corner_x + leg_w - px, corner_y + back_h + seat_d + leg_h);
  //left of right front leg
  line(corner_x + seat_w - leg_w + px, corner_y + back_h + seat_d + drop_h, corner_x + seat_w - leg_w + px, corner_y + back_h + seat_d + leg_h);
  //right of right front leg
  line(corner_x + seat_w + leg_w - px, corner_y + back_h + seat_d, corner_x + seat_w + leg_w - px, corner_y + back_h + seat_d + leg_h);

  //cut lines
  stroke(0);
  strokeWeight(1);
  //top of back drop left
  line(corner_x - drop_h, corner_y + back_h - seat_w / 2 - overlap, corner_x, corner_y + back_h - seat_w / 2 - overlap);
  //left of back drop left
  line(corner_x - drop_h, corner_y + back_h - seat_w / 2 - overlap, corner_x - drop_h, corner_y + back_h - leg_w);
  //right of back drop left
  line(corner_x, corner_y + back_h - seat_w / 2 - overlap, corner_x, corner_y + back_h);
  //top of back drop right
  line(corner_x + seat_w, corner_y + back_h - seat_w / 2 - overlap, corner_x + seat_w + drop_h, corner_y + back_h - seat_w / 2 - overlap);
  //left of back drop right
  line(corner_x + seat_w, corner_y + back_h - seat_w / 2 - overlap, corner_x + seat_w, corner_y + back_h);
  //right of back drop right
  line(corner_x + seat_w + drop_h, corner_y + back_h - seat_w / 2 - overlap, corner_x + seat_w + drop_h, corner_y + back_h - leg_w);
  //base of back left leg
  line(corner_x - leg_h, corner_y + back_h - leg_w, corner_x - leg_h, corner_y + back_h + leg_w);
  //base of back right leg
  line(corner_x + seat_w + leg_h, corner_y + back_h - leg_w, corner_x + seat_w + leg_h, corner_y + back_h + leg_w);
  //left drop
  line(corner_x - drop_h, corner_y + back_h + leg_w, corner_x - drop_h, corner_y + back_h + seat_d);
  //right drop
  line(corner_x + seat_w + drop_h, corner_y + back_h + leg_w, corner_x + seat_w + drop_h, corner_y + back_h + seat_d);
  //front drop cut left
  line(corner_x - max(leg_w, drop_h), corner_y + back_h + seat_d, corner_x, corner_y + back_h + seat_d);
  //front drop cut right
  line(corner_x + seat_w, corner_y + back_h + seat_d, corner_x + seat_w + max(leg_w, drop_h), corner_y + back_h + seat_d);
  //front drop
  line(corner_x + leg_w, corner_y + back_h + seat_d + drop_h, corner_x + seat_w - leg_w, corner_y + back_h + seat_d + drop_h);
  //base of front left leg
  line(corner_x - leg_w, corner_y + back_h + seat_d + leg_h, corner_x + leg_w, corner_y + back_h + seat_d + leg_h);
  //base of front right leg
  line(corner_x + seat_w - leg_w, corner_y + back_h + seat_d + leg_h, corner_x + seat_w + leg_w, corner_y + back_h + seat_d + leg_h);

  //solid shapes
  stroke(0, 30);
  strokeWeight(1);
  fill(100, 20);
  noFill();
  noStroke();
  //back
  rect(corner_x, corner_y, seat_w, back_h);
  //seat
  rect(corner_x, corner_y + back_h, seat_w, seat_d);
  //front drop
  rect(corner_x, corner_y + back_h + seat_d, seat_w, drop_h);
  //left drop
  rect(corner_x - drop_h, corner_y + back_h, drop_h, seat_d);
  //right drop
  rect(corner_x + seat_w, corner_y + back_h, drop_h, seat_d);
  //back left drop
  rect(corner_x - drop_h, corner_y + back_h - (seat_w / 2 + overlap), drop_h, seat_w / 2 + overlap);
  //back right drop
  rect(corner_x + seat_w, corner_y + back_h - (seat_w / 2 + overlap), drop_h, seat_w / 2 + overlap);
  //left front leg
  rect(corner_x - leg_w, corner_y + back_h + seat_d, leg_w * 2, leg_h);
  //right front leg
  rect(corner_x + seat_w - leg_w, corner_y + back_h + seat_d, leg_w * 2, leg_h);
  //left back leg
  rect(corner_x - leg_h, corner_y + back_h - leg_w, leg_h, 2 * leg_w);
  //right back leg
  rect(corner_x + seat_w, corner_y + back_h - leg_w, leg_h, 2 * leg_w);

  noLoop();
}

function dashedLine(x1, y1, x2, y2, dash_w) {
  var totalDist = dist(x1, y1, x2, y2);
  var numDashes = Math.floor(totalDist / dash_w / 2);
  for (var d = 0; d < numDashes; d += 2) {
    line(lerp(x1, x2, d / numDashes), lerp(y1, y2, d / numDashes), lerp(x1, x2, (d + 1) / numDashes), lerp(y1, y2, (d + 1) / numDashes));
  }
}