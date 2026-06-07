let mode = 0; // 0: 기본, 1: 암전, 2: 손전등

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(210, 247, 255);

  // 목이랑 목 그림자
  noStroke();
  fill(255, 225, 210);
  rect(275, 240, 50, 60); 
  fill(250, 194, 157);
  arc(275, 217, 145, 80, radians(30), radians(90)); 
  
  // 몸통
  stroke(210);
  strokeWeight(2);
  fill(247, 242, 239); 
  arc(300, 410, 300, 290, PI, 0);
  
  // 티셔츠 넥라인
  noFill();
  stroke(220);
  arc(300, 260, 80, 80, radians(14), radians(166));
  fill(255, 225, 210);
  arc(300, 260, 60, 60, radians(14), radians(166));

  // 얼굴형이랑 귀
  noStroke();
  fill(255, 225, 210);
  ellipse(240, 185, 35, 40); 
  ellipse(360, 185, 35, 40); 
  ellipse(300, 150, 135, 160); 
  ellipse(300, 180, 130, 140); 
  
  // 머리카락
  fill(47, 43, 44); 
  arc(300, 140, 145, 140, radians(170), radians(10));
  ellipse(300, 143, 135, 10);

  strokeWeight(3);
  bezier(238, 135, 217, 135, 235, 175, 235, 170);
  bezier(362, 135, 383, 135, 365, 175, 365, 170);

  stroke(12, 11, 8);
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
  arc(265, 165, 35, 15, radians(190), radians(345)); 
  arc(335, 165, 35, 15, radians(195), radians(350)); 

  // 코
  noFill();
  stroke(244, 174, 134);
  strokeWeight(3);
  arc(300, 190, 15, 18, 0, HALF_PI);

  // 동그란 안경
  noFill();
  stroke(160, 170, 180);
  strokeWeight(3);
  ellipse(265, 180, 40, 38); 
  ellipse(335, 180, 40, 38); 
  line(285, 180, 315, 180); 
  line(243, 175, 234, 169); 
  line(357, 175, 366, 169); 

  // 얼굴에 있는 점 2개
  noStroke();
  fill(30);
  ellipse(290, 210, 3, 3); 
  ellipse(310, 235, 3, 3);

  // 입모양 (모드에 따라 바뀜)
  stroke(246, 132, 121);
  strokeWeight(3);
  noFill();
  if (mode == 0) {
    arc(300, 215, 45, 15, radians(5), radians(175)); // 웃는 입
  } else {
    arc(300, 225, 45, 15, radians(185), radians(355)); // 우울한 입
  }

  // 평소 상태 눈
  if (mode == 0) {
    noStroke();
    fill(0);
    ellipse(265, 180, 16, 18); 
    ellipse(335, 180, 16, 18); 
    fill(255);
    ellipse(268, 177, 4, 4);
    ellipse(338, 177, 4, 4);
  }

  // 화면 어두워졌을 때 효과 (모드 1, 2)
  if (mode > 0) {
    fill(0, 0, 0, 190); 
    noStroke();

    if (mode == 1) {
      rect(0, 0, width, height); 
    } else if (mode == 2) {
      // 손전등
      beginShape();
      vertex(0, 0); vertex(width, 0); vertex(width, height); vertex(0, height);
      beginContour(); 
      for (let i = TWO_PI; i > 0; i -= 0.1) {
        vertex(mouseX + cos(i) * 80, mouseY + sin(i) * 80);
      }
      endContour();
      endShape(CLOSE);
    }

    // 눈 깜빡
    let blink = frameCount % 100 < 10; 

    if (blink) {
      stroke(200, 255, 255);
      strokeWeight(4);
      line(257, 180, 273, 180);
      line(327, 180, 343, 180);
    } else {
      // 눈 빛나는 효과
      noStroke();
      fill(220, 240, 255, 120); 
      ellipse(265, 180, 20, 22); 
      ellipse(335, 180, 20, 22);

      fill(255); // 흰자
      ellipse(265, 180, 16, 18); 
      ellipse(335, 180, 16, 18); 

      // 불안해 하는 애니메이션
      let timer = frameCount % 300; 
      let eyeX = 0;
      
      // 타이밍 나눠서 눈동자 휙휙 돌아가게
      if (timer > 150 && timer <= 155) {
        eyeX = -(timer - 150); 
      } else if (timer > 155 && timer <= 195) {
        eyeX = -5; // 멈춤
      } else if (timer > 195 && timer <= 205) {
        eyeX = -5 + (timer - 195);
      } else if (timer > 205 && timer <= 245) {
        eyeX = 5; // 멈춤
      } else if (timer > 245 && timer <= 250) {
        eyeX = 5 - (timer - 245);
      }

      fill(0); // 까만 동공
      ellipse(265 + eyeX, 180, 8, 10);
      ellipse(335 + eyeX, 180, 8, 10);
    }
  }
}

function keyPressed() {
  if (key == '1') {
    mode = 0; 
  } else if (key == '2') {
    mode = 1; 
  } else if (key == '3') {
    mode = 2; 
  }
}