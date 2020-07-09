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
    
    const theForm = document.getElementById('theForm')
    theForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const sign = calculate()
        document.getElementById('result').style.display = 'inline'
        document.getElementById('result_title').innerHTML = 'Your sign is ' + sign
    })
}

function calculate(){
    const months = document.getElementById('months')
    const month = months.options[months.selectedIndex].text
    
    const days = document.getElementById('days')
    const day = days.options[days.selectedIndex].text
    
    if (month == 'March') {
        if (day < 21) {
            return 'pisces'
        } else {
            return 'aries'
        }
    } else if (month == 'April') {
        if (day < 20) {
            return 'aries'
        } else {
            return 'taurus'
        }
    } else if (month == 'May') {
        if (day < 21) {
            return 'taurus'
        } else {
            return 'gemini'
        }
    } else if (month == 'June') {
        if (day < 21) {
            return 'gemini'
        } else {
            return 'cancer'
        }
    } else if (month == 'July') {
        if (day < 23) {
            return 'cancer'
        } else {
            return 'leo'
        }
    } else if (month == 'August') {
        if (day < 23) {
            return 'leo'
        } else {
            return 'virgo'
        }
    } else if (month == 'September') {
        if (day < 23) {
            return 'virgo'
        } else {
            return 'libra'
        }
    } else if (month == 'October') {
        if (day < 23) {
            return 'libra'
        } else {
            return 'scorpio'
        }
    } else if (month == 'November') {
        if (day < 22) {
            return 'scorpio'
        } else {
            return 'sagittarius'
        }
    } else if (month == 'December') {
        if (day < 22) {
            return 'sagitarrius'
        } else {
            return 'capricorn'
        }
    } else if (month == 'January') {
        if (day < 20) {
            return 'capricorn'
        } else {
            return 'aquarius'
        }
    } else if (month == 'February') {
        if (day < 19) {
            return 'aquarius'
        } else {
            return 'pisces'
        }
    }
}
