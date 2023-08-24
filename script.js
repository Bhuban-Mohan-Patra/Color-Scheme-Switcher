
const boxs = document.querySelectorAll(".box");  
const body = document.querySelector("body");

boxs.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        // console.log(e);
        // console.log(e.target);
        switch(e.target.id)
        {
            case "gray":
                body.style.backgroundColor = "var(--bg--gray)";
                break;

            case "white":
                body.style.backgroundColor = "#ffffff";
                break;

            case "blue":
                body.style.backgroundColor = "royalblue";
                break;
            
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
        }
    })
});
