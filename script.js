function load(){
    var monthOptions = "";
    var dayOptions = "";
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var i;
    for (i = 0; i < 12; i++) {
        monthOptions += "<option value='"+months[i]+"'>"+months[i]+"</option>"
    }
    for (i = 1; i < 32; i++) {
        dayOptions += "<option value='"+i+"'>"+i+"</option>"
    }
    document.getElementById('months').innerHTML = monthOptions;
    document.getElementById('days').innerHTML = dayOptions;

    const theForm = document.getElementById('theForm');
    theForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const sign = calculate()
        document.getElementById('result').style.display = 'inline'
        document.getElementById('result_title').innerHTML = 'Your sign is ' + sign

        var img = document.createElement("img");
        let imgsrc = "img/" + sign + ".jpg";
        img.src = imgsrc;
        let src = document.getElementById("constellation");
        console.log(src);
        if (src.children.length > 0) {
          // It has at least one
          console.log("HELLOO");
          console.log(src.children[0]);
          src.removeChild(src.children[0]);
          src.appendChild(img);

        }
        else {
          src.appendChild(img);
        }
    })
}

function calculate(){
    const months = document.getElementById('months')
    const month = months.options[months.selectedIndex].text

    const days = document.getElementById('days')
    const day = days.options[days.selectedIndex].text

    if (month == 'March') {
        if (day < 21) {
            return 'Pisces'
        } else {
            return 'Aries'
        }
    } else if (month == 'April') {
        if (day < 20) {
            return 'Aries'
        } else {
            return 'Taurus'
        }
    } else if (month == 'May') {
        if (day < 21) {
            return 'Taurus'
        } else {
            return 'Gemini'
        }
    } else if (month == 'June') {
        if (day < 21) {
            return 'Gemini'
        } else {
            return 'Cancer'
        }
    } else if (month == 'July') {
        if (day < 23) {
            return 'Cancer'
        } else {
            return 'Leo'
        }
    } else if (month == 'August') {
        if (day < 23) {
            return 'Leo'
        } else {
            return 'Virgo'
        }
    } else if (month == 'September') {
        if (day < 23) {
            return 'Virgo'
        } else {
            return 'Libra'
        }
    } else if (month == 'October') {
        if (day < 23) {
            return 'Libra'
        } else {
            return 'Scorpio'
        }
    } else if (month == 'November') {
        if (day < 22) {
            return 'Scorpio'
        } else {
            return 'Sagittarius'
        }
    } else if (month == 'December') {
        if (day < 22) {
            return 'Sagittarius'
        } else {
            return 'Capricorn'
        }
    } else if (month == 'January') {
        if (day < 20) {
            return 'Capricorn'
        } else {
            return 'Aquarius'
        }
    } else if (month == 'February') {
        if (day < 19) {
            return 'Aquarius'
        } else {
            return 'Pisces'
        }
    }
}
