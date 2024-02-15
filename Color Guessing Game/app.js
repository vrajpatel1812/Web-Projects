const checkifMatch = () => {
    const user = document.querySelector("input").value;

    if(user === curentColor) {
        alert(`Color is Math`);
    }else{
        alert(`Color is not Match \nYour Color : ${user} and Computer Color : ${curentColor}`);
    }

    setRandomColor();
    document.querySelector("input").value = "";
}

const randomGenerate = () => {
    const x = Math.ceil(Math.random() * 15);

    if(x > 9) {
        return 'abcdef'[x-10];
    }
    return x+"";
}

const setRandomColor = () => {
    const color = randomGenerate() + randomGenerate() + randomGenerate();
    window.curentColor = color;
    console.log(color)
    
    document.querySelector(".guess--Color").style.backgroundColor = "#" + color;
}

setRandomColor()