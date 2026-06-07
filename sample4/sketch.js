let rectX = 80;
let rectY = 260;
let rectSpeedX = 0.7;
let rectSpeedY = 0.5;

function setup() {
  createCanvas(600, 400);
  rectSpeedY = cos(0.5) * 0.6;
}

function draw() {
  let t = map(sin(frameCount * 0.015), -1, 1, 0, 1);

  // 배경
  background(lerp(210, 15, t), lerp(247, 20, t), lerp(255, 60, t));
  noStroke();

  // 배경 도형
  fill(lerp(200, 40, t), lerp(237, 45, t), lerp(245, 80, t));
  triangle(100, 100, 500, 50, 400, 300);
  square(50, 250, 200);
  ellipse(550, 380, 200, 100);

  // 삼각형
  let bright = lerp(0, 100, t);
  fill(lerp(200, 50, t) + bright, lerp(80, 20, t) + bright * 0.4, lerp(70, 20, t) + bright * 0.5);
  quad(300, 152, 357, 250, 327, 250, 285, 178);
  fill(lerp(240, 60, t) + bright, lerp(140, 35, t) + bright * 0.5, lerp(120, 30, t) + bright * 0.5);
  quad(285, 126, 300, 152, 258, 224, 228, 224);
  quad(300, 100, 387, 250, 372, 276, 285, 126);

  strokeWeight(15);
  noFill();
  stroke(lerp(0, 10, t), lerp(0, 10, t), lerp(0, 20, t));
  arc(600, 400, 800, 600, radians(180), radians(270));
  line(0, 100, 300, 0);
  noStroke();
  strokeWeight(0);

  // 오른쪽 위 원
  fill(lerp(255, 220, t), lerp(190, 220, t), lerp(80, 200, t));
  circle(600, 0, lerp(250, 170, t));

  // 삼각형
  fill(lerp(200, 50, t) + bright, lerp(80, 20, t) + bright * 0.4, lerp(70, 20, t) + bright * 0.5);
  quad(183, 250, 357, 250, 372, 276, 198, 276);
  fill(lerp(255, 65, t) + bright, lerp(190, 50, t) + bright * 0.8, lerp(80, 20, t) + bright * 0.3);
  quad(270, 100, 300, 100, 213, 250, 183, 250);
  quad(228, 224, 312, 224, 327, 250, 213, 250);

  // 바깥 사각형
  fill(lerp(255, 100, t), lerp(190, 75, t), lerp(80, 35, t));
  rect(40, 240, 110, 90);

  // 안쪽 사각형 (튕기며 이동)
  rectX += rectSpeedX;
  rectY += rectSpeedY;
  if (rectX <= 40)  { rectX = 40;  rectSpeedX =  abs(rectSpeedX); }
  if (rectX >= 100) { rectX = 100; rectSpeedX = -abs(rectSpeedX); }
  if (rectY <= 240) { rectY = 240; rectSpeedY =  abs(rectSpeedY); }
  if (rectY >= 280) { rectY = 280; rectSpeedY = -abs(rectSpeedY); }
  fill(lerp(200, 80, t), lerp(80, 30, t), lerp(70, 30, t));
  rect(rectX, rectY, 50);

  fill(lerp(240, 90, t), lerp(140, 55, t), lerp(120, 50, t));
  arc(400, 350, 80, 80, 0, PI + QUARTER_PI);

  // 왼쪽 상단 삼각형
  fill(lerp(240, 90, t), lerp(140, 55, t), lerp(120, 50, t));
  triangle(100, 90, 150, 70, 30, 30);
  fill(lerp(255, 100, t), lerp(190, 75, t), lerp(80, 35, t));
  triangle(90, 70, 140, 80, 70, 10);

  // 점
  stroke(lerp(0, 180, t), lerp(0, 180, t), lerp(0, 200, t));
  strokeWeight(map(sin(frameCount * 0.1 + 0.0), -1, 1, 3, 8)); point(500, 300);
  strokeWeight(map(sin(frameCount * 0.1 + 0.5), -1, 1, 3, 8)); point(505, 310);
  strokeWeight(map(sin(frameCount * 0.1 + 1.0), -1, 1, 3, 8)); point(510, 320);
  strokeWeight(map(sin(frameCount * 0.1 + 1.5), -1, 1, 3, 8)); point(515, 330);
  strokeWeight(map(sin(frameCount * 0.1 + 2.0), -1, 1, 3, 8)); point(505, 328);
  strokeWeight(map(sin(frameCount * 0.1 + 2.5), -1, 1, 3, 8)); point(500, 338);
  strokeWeight(map(sin(frameCount * 0.1 + 3.0), -1, 1, 3, 8)); point(495, 348);
}

function keyPressed() {
  if (key == 's') {
    saveGif('추상화움직임', 7); 
  }
}