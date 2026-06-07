function setup() {
  createCanvas(600, 400);
  background(210, 247, 255);

  // 목
  noStroke();
  fill(255, 225, 210);
  rect(275, 240, 50, 60); 
  fill(250, 194, 157);
  arc(275, 217, 145, 80, radians(30), radians(90)); // 목 그림자
  
  // 몸통
  stroke(210);
  strokeWeight(2);
  fill(247, 242, 239); 
  arc(300, 410, 300, 290, PI, 0);
  
  // 목 부분
  noFill();
  stroke(220);
  arc(300, 260, 80, 80, radians(14), radians(166));
  fill(255, 225, 210);
  arc(300, 260, 60, 60, radians(14), radians(166));

  // 얼굴
  noStroke();
  fill(255, 225, 210);
  ellipse(240, 185, 35, 40); // 왼쪽 귀
  ellipse(360, 185, 35, 40); // 오른쪽 귀
  ellipse(300, 150, 135, 160); // 얼굴 상단
  ellipse(300, 180, 130, 140); // 얼굴 하단
  
  // 머리카락
  fill(47, 43, 44); 
  arc(300, 140, 145, 140, radians(170), radians(10));
  ellipse(300, 143, 135, 10)

  strokeWeight(3);
  bezier(238, 135, 217, 135, 235, 175, 235, 170);
  bezier(362, 135, 383, 135, 365, 175, 365, 170);

  stroke(12, 11, 8);
  // noFill();
  bezier(245, 118, 235, 138, 245, 158, 255, 148);
  bezier(265, 108, 255, 138, 270, 158, 280, 148);
  bezier(295, 100, 285, 140, 305, 160, 315, 150);
  bezier(330, 107, 340, 127, 350, 153, 330, 153);
  bezier(355, 115, 365, 135, 355, 155, 350, 150);
  bezier(260, 110, 255, 130, 245, 150, 235, 155); 
  bezier(290, 100, 270, 125, 295, 150, 280, 155);
  bezier(303, 105, 317, 130, 307, 155, 327, 150);
  
  // 눈썹
  noFill();
  stroke(35, 35, 35);
  strokeWeight(5);
  arc(265, 165, 35, 15, radians(190), radians(345)); // 왼쪽 눈썹
  arc(335, 165, 35, 15, radians(195), radians(350)); // 오른쪽 눈썹

  // 눈
  noStroke();
  fill(0);
  ellipse(265, 180, 16, 18); // 왼쪽 눈
  ellipse(335, 180, 16, 18); // 오른쪽 눈

  fill(255);
  ellipse(268, 177, 4, 4);
  ellipse(338, 177, 4, 4);

  // 코
  noFill();
  stroke(244, 174, 134);
  strokeWeight(3);
  arc(300, 190, 15, 18, 0, HALF_PI);

  // 입
  stroke(246, 132, 121);
  strokeWeight(3);
  arc(300, 215, 45, 15, radians(5), radians(175));

  //안경
  noFill();
  stroke(160, 170, 180);
  strokeWeight(3);
  ellipse(265, 180, 40, 38); // 왼쪽 렌즈
  ellipse(335, 180, 40, 38); // 오른쪽 렌즈
  line(285, 180, 315, 180); // 안경 가운데
  line(243, 175, 234, 169); // 왼쪽 안경다리
  line(357, 175, 366, 169); // 오른쪽 안경다리

  // 점
  noStroke();
  fill(30);
  ellipse(290, 210, 3, 3); // 왼쪽 위 점
  ellipse(310, 235, 3, 3); // 오른쪽 아래 점
}
