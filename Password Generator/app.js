const generate = () => {
    let dictory = "";
    // console.log(dictory.length);

    if (document.querySelector("#small").checked) {
        dictory += "abcdefghijklmnopqrstuvwxyz";
    }

    if (document.querySelector("#capital").checked) {
        dictory += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (document.querySelector("#num").checked) {
        dictory += "0123456789";
    }

    if (document.querySelector("#extra").checked) {
        dictory += "!@#?";
    }

    const length = document.querySelector("input[type='range']").value;

    if (length < 1 || dictory.length == 0) {
        return;
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        const pos = Math.floor(Math.random() * dictory.length);
        password += dictory[pos];
    }

    document.querySelector('.password input[type="text"]').value = password;
}

document.querySelector("input[type='range']").addEventListener('input', (event) => {
    document.querySelector(".ranges span").innerHTML = event.target.value;
})

document.querySelector("#generateButton").addEventListener('click', () => {
    generate();
})

document.querySelector(".password button").addEventListener('click', () => {
    const pass = document.querySelector('.password input[type="text"]').value;
    navigator.clipboard.writeText(pass).then(() => {
        document.querySelector(".password button").innerHTML = "Copied";
        console.log(pass)
        setTimeout(() => {
            document.querySelector(".password button").innerHTML = "Copy";
        }, 1000)
    })
})