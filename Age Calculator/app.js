const getDate = document.getElementById("date");
const age = document.querySelector(".age");
getDate.max = new Date().toISOString().split('T')[0];    //restrict user from selecting date from future

const calculateAge = () => {
    let birthDate = new Date(getDate.value);
    // console.log(birthDate);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth();
    let y1 = birthDate.getFullYear();

    let currentDate = new Date();

    let d2 = currentDate.getDate();
    let m2 = currentDate.getMonth();
    let y2 = currentDate.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1) {
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1) {
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDayInMonth(y3, m3) + d2 - d1;
        // console.log(getDayInMonth(y3, m3))
    }

    if(m3 < 0) {
        m3 = 11;
        y3--;
    }

    age.innerHTML = `You are ${d3} day, ${m3} month and ${y3} Years older`
    console.log(y3,m3,d3);
}

const getDayInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}