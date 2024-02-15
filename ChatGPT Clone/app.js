const mode = document.querySelector("#mode");
const send = document.querySelector("#arrow");
const deleteMSG = document.querySelector('#delete');
const msg = document.querySelector("#mainMSG");
const screen = document.querySelector(".upperScreen");

// const userText = null;
const API_KEY = process.env.API_KEY;

//change the mode of document
mode.addEventListener('click', () => {
    // console.log("click")
    if (mode.classList[1] === "fa-regular") {
        //In black mode
        document.body.classList.add("whiteMode");
        mode.classList.remove("fa-regular");
        mode.classList.add("fa-solid");
        // console.log(mode.classList);
    } else {
        //In dark mode
        document.body.classList.remove("whiteMode");
        mode.classList.remove('fa-solid');
        mode.classList.add('fa-regular')
    }
})

//clear the input area when user click on trash 
deleteMSG.addEventListener('click', () => {
    msg.value = "";
})

//send msg data to display on screen when user click on send logo
send.addEventListener('click', () => {
    //Here we get user input and delete extra space by useing trim function
    displayMessage(msg.value.trim());
    //we will clean textarea clear after user click on send msg
    msg.value = "";
})

//create outer div and add msg container in user div
const createElement = (msg, className) => {
    const userDiv = document.createElement('div');
    userDiv.classList.add(className);
    userDiv.innerHTML = msg;
    return userDiv;
}

//after displaying msg that user added we will load animation until we get the respond from API.
const showAnimationTypeing = () => {
    const animation = `
        <div class="gptAnimation">
            <img src="./images/chatbot.jpg" alt="chatGPT">
            <div class="typingDot" style="--delay:0.2s"></div>
            <div class="typingDot" style="--delay:0.3s"></div>
            <div class="typingDot" style="--delay:0.4s"></div>
        </div>
    `

    const outGoingAnimation = createElement(animation, "gpt");
    screen.appendChild(outGoingAnimation);
}


//here I this function we are getting respond of user msg from openAPI
const getChatRespond = async (userText) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const requestOptions = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            message: [{role:"user", content:"Hello!"}],
            max_tokens:100
        })
    }

    try {
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//This function will display the message that user has inputed in textarea
const displayMessage = (message) => {

    const msg = `    
            <div class="userContainer">
                <img src="./images/user.jpg" alt="user">
                <p>${message}</p>
            </div>
    `

    const outGoingMSG = createElement(msg, "user");
    screen.appendChild(outGoingMSG);
    setTimeout(() => {
        showAnimationTypeing();
    }, 1000)
    // getChatRespond(message);
}

// const userText = "How are you?";
// getChatRespond(userText);