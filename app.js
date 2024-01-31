let boxes=document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset-btn");
let msg= document.querySelector(".msg");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let tic = 1;

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was Clicked");
        if(tic === 1)
        {
            box.style.color="green";
            box.innerHTML="O";
            
            tic =0;
        }
        else{
            box.innerHTML="X"
            tic=1;
        }
        box.disabled=true;

        checkWinner();
    });
    
});

const enable=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerHTML=" ";
    }
}
const resetGame=()=>{

    tic = 1;
    enable();
    msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled =true;
    }
}

const showWinner=(winner)=>{
  msg.innerHTML=`Congratulations,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner =()=>{
    for(let pattern of winPatterns)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!=""&& pos2val!=" " && pos3val!="")
        {
            if(pos1val==pos2val && pos2val==pos3val)
            {
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }

        }
    }
};

resetbtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);