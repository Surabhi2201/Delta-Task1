function getANumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
let container=document.querySelector(".grid-container");
let boxId1=`box-61`;
let box2Id=`box-63`;
let box2=document.getElementById(box2Id);
let box3Id="box-60";
let box4Id=`box-57`;
let box5Id=`box-15`;
let box5=document.getElementById(box5Id);

let box4=document.getElementById(box4Id);
let box=document.getElementById(boxId1);
let boxId2=`box-${getANumber(1,16)}`;
let box3=document.getElementById(box3Id);
console.log(boxId1);
let button1=document.getElementById("x");
// let ball=document.createElement("div");
let boxId1Player2=`box-8`;
let boxId2Player2=`box-11`;
let boxId3Player2=`box-9`;
let titan2=document.getElementById(boxId1Player2);
let canon2=document.getElementById(boxId2Player2);
let tank2=document.getElementById(boxId3Player2);
let rotationAngle=0;
box4.addEventListener('click',()=>{
    rotationAngle+=90;
    box4.style.transform=`rotate(${rotationAngle}deg)`;
    console.log(rotationAngle);
})
let rotationAngle2=0
box5.addEventListener('click',()=>{
    rotationAngle2+=90;
    box5.style.transform=`rotate(${rotationAngle2}deg)`;
    console.log(rotationAngle2);
})
let boxId6='box-13';
let box6=document.getElementById(boxId6);
let img1=document.createElement("img");
img1.src="image/red.jpg";
img1.height=62.5;
img1.width=62.5;
box6.append(img1);
let boxId7='box-58';
let box7=document.getElementById(boxId7);
let img2=document.createElement("img");
img2.src="image/orange.webp";
img2.height=62.5;
img2.width=62.5;
box7.append(img2);

let rotationAngle1=0;
let n=0;
box6.addEventListener('click',()=>{
    if(rotationAngle1<360){
        rotationAngle1+=90;
    box6.style.transform=`rotate(${rotationAngle1}deg)`;
    console.log(rotationAngle1);
    n=(rotationAngle1/10);
    console.log(n);
    }
    else{
        rotationAngle1=0;
    }
})

let rotationalAngle3=0
box7.addEventListener('click',()=>{
    rotationalAngle3+=90;
    box7.style.transform=`rotate(${rotationalAngle3}deg)`;//change
    // console.log(rotationalAngle3);
})
let difference=(box2Id.split('-')[1]-box5Id.split('-')[1])/8;
// console.log(difference);
titan2.innerHTML="titan";
canon2.innerHTML="canon";
tank2.innerHTML="tank";

titan2.setAttribute("id","titan2");
canon2.classList.add("canon2");
tank2.setAttribute("id","tank2");

// ball.setAttribute("class","ball");

    box3.innerHTML="tank";
    box.innerHTML="titan"
    box2.innerHTML="canon";
    box.classList.add("player1");
    box2.classList.add("canon");
    box3.classList.add("player1");

let ball;

box.classList.add("titan");
box2.classList.add('box');
let ballHit=false;
let topPosition = 0;
let leftPosition=0;
let rightPosition=0;
        let difference2=(getCurrentPosition(box.id.split('-')[1]).row-getCurrentPosition(box6.id.split('-')[1]).row);
        console.log(difference2);
        const MaxDist=difference2*62.5
        let downDist=MaxDist;
        let maxHeight = difference*62.5+25; // Change this value to set the height at which the ball should start moving right
        const moveUpSpeed = 5;
        const moveLeftSpeed= 5;
        const moveRightSpeed = 5;
        const downSpeed=5;
        let maxLeftDist= (getCurrentPosition(box5Id.split('-')[1]).col- getCurrentPosition(boxId6.split('-')[1]).col)*62.5;
        // console.log(maxLeftDist);
        let isMovingUp = false;
        let isMovingRight=false;
        let isMovingDown=false;
        let isMovingLeft=false;
        box2.addEventListener('click', () => {
           topPosition=0;

           leftPosition=0;
           rightPosition=0;
            ballGenerate(box2);
        });
      
        function ballGenerate(reqElement){
            console.log("ball is generated")
            ball=document.createElement("div");
           ball.setAttribute("class","ball");
           reqElement.appendChild(ball);
           topPosition=0;

           leftPosition=0;
           rightPosition=0;
           
           isMovingUp = true;
           setTimeout(moveBall(),10);
        }
        canon2.addEventListener('click',()=>{
            ballGenerate2(canon2);
        })
        let topPosition2;
        let leftPosition2;
        let rightPosition2;
        function ballGenerate2(reqElement){
            console.log("ball is generated")
            ball=document.createElement("div");
           ball.setAttribute("class","ball2");
           reqElement.addEventListener('click',()=>{
            reqElement.appendChild(ball);
           })
           isMovingDown=true;
           topPosition2=(8-(getCurrentPosition(canon2.id.split('-')[1]).col))*62.5;
           leftPosition2=0;
           rightPosition2=0;
           moveBall2();
        }
        function moveBall2(){
          if(isMovingDown){
            if(topPosition2>0){
                topPosition2-=5;
                ball.style.bottom=topPosition2+"px";
                requestAnimationFrame(moveBall2)
            }
            else if(topPosition2<=0){
                
                isMovingDown=false;
            }
          }
        }
        
let ball2;

        function moveBall() {
              
            if (isMovingUp) {
                if (topPosition < maxHeight) {
                   

                    topPosition += moveUpSpeed;
                    ball.style.bottom = topPosition + 'px';
                  
                    requestAnimationFrame(moveBall);
                } 
                else {
                    
                    if((rotationAngle2/90)%2==0){
                        isMovingUp = false;
                        isMovingLeft=true;
                        moveBall();
                    
                    }
                    else if((rotationAngle2/90)%2!=0){
                        isMovingUp = false;
                        isMovingRight=true;
                        moveBall();
                    }
                    
                }
            }
            else if(isMovingRight){
                if(rightPosition<maxLeftDist){
                   
                    rightPosition+=moveRightSpeed;
                   ball.style.left=rightPosition+"px";
                    moveBall();
                }
                else{
                    isMovingRight=false;
                    isMovingDown=true;
                    moveBall();
                }
            }
           
         
            else if(isMovingLeft){
                if(leftPosition<maxLeftDist){
                    
                    leftPosition+=moveLeftSpeed;
                   ball.style.right=leftPosition+"px";
                    moveBall();
                }
                else{
                    isMovingLeft=false;
                    if(n==9){
                        isMovingDown=true;
                        
                    moveBall();
                    }
                    else if(n!=9 && ball.style.right==(maxLeftDist+"px") ){
                         console.log("correct riochet position");
                       
                        isMovingLeft=false;
                        
                       
                    }
                }
            }
            
            else if(isMovingDown){

               
                if(downDist>0){
                    downDist-=downSpeed;
                    ball.style.bottom=downDist+"px";
                    requestAnimationFrame(moveBall);
                    
                    

                }
                else if(downDist==0){
                   ballHit=true;
                   box2.removeChild(ball)
                   isMovingDown=false//changeS
                   checkingTitanPosition(box6.id,boxId1)
                }
               
               
               
                
            }
            
            
        }




const boxes= document.querySelectorAll(".grid-item");





let tankBetween=false;
const currentRow=0;
const currentCol=0;
let boxNumber=0;
const clickableElements=[box,box2,box3];
clickableElements.forEach(element=>{
    element.addEventListener('click',(event)=>{
        const elementId= event.target.id;
         boxNumber=elementId.split('-')[1];
        console.log("clicked element id is " ,boxNumber);
    })
})

function moveBox(newPosition){
   if(newPosition>=1&& newPosition<=64){
document.getElementById(`box-${newPosition}`).addclasslist("box");
   }
}

function getCurrentPosition(id){
  let row=0;
  let col=0;
  if(id<=8){
   row=1;
     col=id;
  }
  else{
    if(id%8==0){
        row=(Math.floor(id/8));
    col=8;
    }
    else if(id%8!=0){
        row=(Math.floor(id/8))+1;
    col=id%8;
    }
  }
  return {
    row:row,
    col:col
  };
  
}
let line=document.createElement("div");
line.setAttribute("class","rio");
box4.appendChild(line);
let line2=document.createElement("div");
line2.setAttribute("class","rio");
box5.appendChild(line2);



function print(){
    console.log("hii")
}

let position=0;

// let pos=0;
// box.addEventListener('click',()=>{
//     box.style.transform=`translateY(${-(pos+62.5)}px)`;
//     pos=pos+62.5;

// })

let number= box2Id.split('-');
console.log(number)
let array=[];
for(let i=number[1];i>0;i--){
    if(getCurrentPosition(i).row!==2&&getCurrentPosition(i).row!==1){
        let block=document.getElementById(`box-${i}`)
   let remainder=number[1]%8
   if(i%8==remainder){
    array.push(block)
   }
    }
   
}
console.log(array);

function canonArray(canonId){
    let canonAreas=[];
let number=canonId.split('-')[1];
for(let i=boxes.length;i>0;i--){
    let block= document.getElementById(`box-${i}`);
    let canonRow=getCurrentPosition(canonId.split('-')[1]).row;
    console.log(canonRow);
    let blockRow=getCurrentPosition(i).row;
    if(blockRow==canonRow){
        if(block!=box2 && block!=box5 && block!=box6 && block!=box5 && block!=box4 && block!=box7 && block!=box){
            canonAreas.push(block);
        }
    }
}
return canonAreas
}
let canonPlaces=canonArray(box2Id);
let finalCanonPlaces=[];
for(let i=0;i<canonPlaces.length;i++){
    if(canonPlaces[i]!=null && canonPlaces[i]!=box5){
        finalCanonPlaces.unshift(canonPlaces[i]);
    }
}

box2.addEventListener('click',()=>{
    for(let i=0;i< finalCanonPlaces.length;i++){
        if(finalCanonPlaces[i]!=box2 && finalCanonPlaces[i]!=box3 ){
            finalCanonPlaces[i].style.backgroundColor="green"
        }
    }
})
function removingNullElements(reqArray){
    let newArray=[];
for(let i=0;i<reqArray.length;i++){
    if(reqArray[i]!=null){
        newArray.push(reqArray[i])
    }
}
return newArray
}


function isMoveUp(maxHeight,topPosition){
    if(topPosition<maxHeight){
        topPosition+=5;
        ball.style.bottom=topPosition+"px";
        isMoveUp(maxHeight,topPosition);
    }
    else{
        console.log("You have reached max height")
    }
}

let titanPlaces=[];
function titanArray(titanId){
let titanAreas=[];
let titanRow=getCurrentPosition(titanId.split('-')[1]).row;
let titanCol=getCurrentPosition(titanId.split('-')[1]).col;
boxes.forEach((value)=>{
    
    let valueRow=getCurrentPosition(value.id.split('-')[1]).row;
    let valueCol=getCurrentPosition(value.id.split('-')[1]).col;

    if(titanRow==valueRow || titanRow+1==valueRow || titanRow-1==valueRow){
      if(titanCol==valueCol|| titanCol+1==valueCol || titanCol-1==valueCol){
        if(value!=box && value!=box2 && value!=box3){
            titanAreas.push(value);
        }
      }
    }
})
return titanAreas
}
titanPlaces=titanArray(boxId1);
box.addEventListener('click',()=>{
    for(let i=0;i<titanPlaces.length;i++){
        titanPlaces[i].style.backgroundColor="lightgreen"
    }
})
titanPlaces.forEach((value)=>{
    value.addEventListener('click',()=>{
        for(let i=0;i<titanPlaces.length;i++){
            if(value==titanPlaces[i]){
                box.classList.remove("titan");
                box.innerHTML=' ';
                value.classList.add('titan');
                value.innerHTML='titan';
                box=value;
                titanPlaces=titanArray(box.id);
               movingTitanPlaces(titanPlaces);
            }
            else{
                titanPlaces[i].style.backgroundColor="white"
            }
            
        }
    })
})
function colouringTitanPlaces(array){
  box.addEventListener('click',()=>{
    for(let i=0;i<array.length;i++){
        array[i].style.backgroundColor="lightgreen";
    }
  })
}

function movingTitanPlaces(array){
array.forEach((value)=>{
    value.addEventListener('click',()=>{
        for(let i=0;i<array.length;i++){
            if(value==array[i]){
                box.classList.remove("titan");
                box.innerHTML=' ';
                value.classList.add('titan');
                value.innerHTML='titan';
                value.style.backgroundColor='yellow'
                box=value;
                array=titanArray(box.id);   
                movingTitanPlaces(array);
                checkTank(box3.id,box.id);
            }
            else{
                array[i].style.backgroundColor="white";
                array[i].innerHTML=" ";
            }
        }
    })
})
}
movingTitanPlaces(titanPlaces);
colouringTitanPlaces(titanPlaces)
let tankPlaces=[];
function tankArray(tankId){
let tankAreas=[];
let tankRow=getCurrentPosition(tankId.split('-')[1]).row;
let tankCol=getCurrentPosition(tankId.split('-')[1]).col;
boxes.forEach((value)=>{
    
    let valueRow=getCurrentPosition(value.id.split('-')[1]).row;
    let valueCol=getCurrentPosition(value.id.split('-')[1]).col;

    if(tankRow==valueRow || tankRow+1==valueRow || tankRow-1==valueRow){
      if(tankCol==valueCol|| tankCol+1==valueCol || tankCol-1==valueCol){
        if(value!=box && value!=box2 && value!=box3 && value!=box7 && value!=box4){
            tankAreas.push(value);
        }
      }
    }
})
return tankAreas;
}
tankPlaces=tankArray(box3Id)
function movingTankPlaces(array){
    array.forEach((value)=>{
        value.addEventListener('click',()=>{
            for(let i=0;i<array.length;i++){
                if(value==array[i]){
                    box3.classList.remove("tank");
                    box3.innerHTML=' ';
                    value.classList.add('tank');
                    value.innerHTML='tank';
                    value.style.backgroundColor='black'
                    box3=value;
                    array=tankArray(box3.id);   
                    movingTankPlaces(array);
                    ballGenerate(box2);
                    checkTank(box3.id,box.id);
                }
                else{
                    array[i].style.backgroundColor="white";
                    array[i].innerHTML=" ";
                }
            }
        })
    })
    }
movingTankPlaces(tankPlaces);

function checkingTitanPosition(riochetId,titanId){
let titanCol=getCurrentPosition(titanId.split('-')[1]).col;
let riochetCol=getCurrentPosition(riochetId.split('-')[1]).col;
let R2col=getCurrentPosition(box7.id.split('-')[1]).col;
let L2col=getCurrentPosition(box4.id.split('-')[1]).col;
let C2col=getCurrentPosition(box2.id.split('-')[1]).col;
let T2col=getCurrentPosition(box3.id.split('-')[1]).col;
if(R2col!=titanCol && L2col!=titanCol && C2col!=titanCol && T2col!=titanCol){
    if(titanCol==riochetCol && ballHit){
        console.log("Player1 won");
    }
    else{
        console.log("not done yet")
    }
}
}

function checkTank(tankId,titanId){
    let tank=getCurrentPosition(tankId.split('-')[1]).col;
   let titan=getCurrentPosition(titanId.split('-')[1]).col
    if(tank == titan ){
        console.log("tank is in between");
        tankBetween=true;
    }
    else{
        tankBetween=false;
    }
  
}
// let max2=300;
// let top2=0;
// let left2=100;
// function moveUp(ball){
//         top2+=10;
//         ball.style.bottom=top2+"px"; 
// }
// function moveBall(ball){
//     if(top2<max2){
//         moveUp(ball)
//         moveBall(ball)
//     }
//     else{
//         console.log("heyy")
       
//     }
// }
// let sample;



// function tankBallGeneration(){
//     sample=document.createElement('div');
//     sample.classList.add('ball');
//     box3.appendChild(sample);
//     moveBall(sample)
// }














 
 let arrayNew=[]
//moving titan in the movable places






   




