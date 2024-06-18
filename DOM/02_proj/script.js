const red=document.querySelector(".red");
const cyan=document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");

const center=document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);
const getBGColor=(selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};

const magicColorChanger=(element)=>{
    return element.addEventListener('mouseenter',()=>{
        center.style.background=getBGColor(element);
    });
};

magicColorChanger(red)
magicColorChanger(cyan)
magicColorChanger(violet)
magicColorChanger(orange)
magicColorChanger(pink)