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
        document.getElementById('result').style.display = 'block'
        document.getElementById('result_title').innerHTML = 'Your sign is ' + sign

        var img = document.createElement("img");
        let imgsrc = "img/" + sign + ".svg";
        img.src = imgsrc;
        let src = document.getElementById("constellation");
        console.log(src);
        if (src.children.length > 0) {
          // It has at least one
          src.removeChild(src.children[0]);
          src.appendChild(img);

        }
        else {
          src.appendChild(img);
        }

        showInformation(sign);
				
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

function showInformation(sign) {
    lowercase_sign = sign.toLowerCase()
		console.log(signs[lowercase_sign])
    document.getElementById('Element').innerHTML = 'Element: ' + signs[lowercase_sign].element
    document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[lowercase_sign].qualities
    document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[lowercase_sign].ruler
    document.getElementById('Representation').innerHTML = 'Representation: ' + signs[lowercase_sign].representation
    document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[lowercase_sign]["perfect match"]
    document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[lowercase_sign]["imperfect match"]
    document.getElementById('Professional').innerHTML = 'Professional traits: ' + signs[lowercase_sign].professional
    document.getElementById('Career Path').innerHTML = 'Ideal Careers: ' + signs[lowercase_sign]["career path"]

  }

function popup(planet){
	document.getElementById("overlay").style.height = "100%"
	
	document.getElementById('element').innerHTML = 'Element: '
	document.getElementById('qualities').innerHTML = 'Qualities: ' 
	document.getElementById('ruler').innerHTML = 'Ruler: ' 
	document.getElementById('representation').innerHTML = 'Representation: '
	document.getElementById('perfect_match').innerHTML = 'Perfect Match: '
	document.getElementById('imperfect_match').innerHTML = 'Imperfect Match: ' 
	document.getElementById('professional').innerHTML = 'Professional traits: ' 
	document.getElementById('career_path').innerHTML = 'Ideal Careers: ' 
}

function closePopup() {
	document.getElementById("overlay").style.height = "0%"
}