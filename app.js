let h1 =document.querySelector(".number"),
    x = 0,
    y = 0,
    btn =document.querySelector("#btn"),
    btn2=document.querySelector(".btn2"),
    h2 =document.querySelector(".number2");

btn.addEventListener("click", () => {
    x++;
    y++;
    h1.textContent=`${x}`;
    h2.textContent=`${y}`;
    if(x > 32){
        x = 0 ;
    }
})
btn2.addEventListener("click", () => {
    x=0;
    y=0;
    h1.textContent=`${x}`;
    h2.textContent=`${y}`;
})