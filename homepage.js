function showSideBar(){
    console.log("test");
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = 'flex';
}

function removeSideBar(){
    console.log("remove sidebar");
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = 'none';
}

const colourScheme1 = document.querySelector("#colour-scheme-1");
colourScheme1.addEventListener("click", () => 
{
    document.body.classList.toggle("colourScheme1");
})

const colourScheme2 = document.querySelector("#colour-scheme-2");
colourScheme2.addEventListener("click", () => 
{
    document.body.classList.toggle("colourScheme2");
   
})  