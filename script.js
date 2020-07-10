// the json file (will load later)
var signs = {
  "capricorn":  {
    "element" : "earth: practical and grounded",
    "qualities" : "cardinal: take action and start initiatives",
    "ruler" : "Saturn",
    "representation" : "The Goat",
    "perfect match" : "Virgo",
    "imperfect match" : "Gemini"
  },
  "aquarius":  {
    "element" : "air: intellectual and curious",
    "qualities" : "fixed: steady, consistent forces that maintain movement",
    "ruler" : "Uranus",
    "representation" : "The Water Bearer",
    "perfect match" : "Sagittarius",
    "imperfect match" : "Cancer"
  },
  "pisces":  {
    "element" : "water: intuitive and emotional",
    "qualities" : "mutable: well-suited to change and transformation",
    "ruler" : "Neptune",
    "representation" : "The Fish",
    "perfect match" : "Scorpio",
    "imperfect match" : "Virgo"
  },
  "aries":  {
    "element" : "fire: passionate and exuberant",
    "qualities" : "cardinal: take action and start initiatives",
    "ruler" : "Mars",
    "representation" : "The Ram",
    "perfect match" : "Libra",
    "imperfect match" : "Taurus"
  },
  "taurus":  {
    "element" : "earth: practical and grounded",
    "qualities" : "fixed: steady, consistent forces that maintain movement",
    "ruler" : "Venus",
    "representation" : "The Bull",
    "perfect match" : "Scorpio",
    "imperfect match" : "Sagittarius"
  },
  "gemini":  {
    "element" : "air: intellectual and curious",
    "qualities" : "mutable: well-suited to change and transformation",
    "ruler" : "Mercury",
    "representation" : "The Twins",
    "perfect match" : "Sagittarius",
    "imperfect match" : "Capricorn"
  },
  "cancer":  {
    "element" : "water: intuitive and emotional",
    "qualities" : "cardinal: take action and start initiatives",
    "ruler" : "The Moon",
    "representation" : "The Crab",
    "perfect match" : "Taurus",
    "imperfect match" : "Aquarius"
  },
  "leo":  {
    "element" : "fire: passionate and exuberant",
    "qualities" : "fixed: steady, consistent forces that maintain movement",
    "ruler" : "The Sun",
    "representation" : "The Lion",
    "perfect match" : "Sagittarius",
    "imperfect match" : "Scorpio"
  },
  "virgo":  {
    "element" : "earth: practical and grounded",
    "qualities" : "mutable: well-suited to change and transformation",
    "ruler" : "Mercury",
    "representation" : "The Virgin",
    "perfect match" : "Scorpio",
    "imperfect match" : "Sagittarius"
  },
  "libra":  {
    "element" : "air: intellectual and curious",
    "qualities" : "cardinal: take action and start initiatives",
    "ruler" : "Venus",
    "representation" : "The Scales",
    "perfect match" : "Libra",
    "imperfect match" : "Virgo"
  },
  "scorpio":  {
    "element" : "water: intuitive and emotional",
    "qualities" : "fixed: steady, consistent forces that maintain movement",
    "ruler" : "Pluto",
    "representation" : "The Scorpion",
    "perfect match" : "Pisces",
    "imperfect match" : "Aries"
  },
  "sagittarius":  {
    "element" : "fire: passionate and exuberant",
    "qualities" : "mutable: well-suited to change and transformation",
    "ruler" : "Jupiter",
    "representation" : "The Archer",
    "perfect match" : "Aquarius",
    "imperfect match" : "Taurus"
  }
}

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
    
  }

