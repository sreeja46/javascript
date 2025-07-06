let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#userscore");
const computerscorepara=document.querySelector("#computerscore");

const gencomputerchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];

};
const drawgame=()=>{
    msg.innerText="game was draw.Play again !";
    msg.style.backgroundColor ="#081b31";
};
const showwinner=(userwin,userchoice,computerchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        computerscore++;
        computerscorepara.innerText=computerscore;
        msg.innerText=`you lose.  ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor ="red";
    }

};

const playgame=(userchoice)=>{  
    const computerchoice= gencomputerchoice();

    if(userchoice===computerchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=computerchoice==="paper" ?false:true;
        }
        else if(userchoice==="paper"){
            userwin=computerchoice==="scissors" ?false:true;
        }else{
            userwin=computerchoice==="rock" ?false:true;
        }
        showwinner(userwin,userchoice,computerchoice);
    }  
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});
