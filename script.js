var data = {
    "signs": [
      {
        "name" : "capricorn",
        "element" : "earth: practical and grounded",
        "qualities" : "cardinal: take action and start initiatives",
        "ruler" : "Saturn",
        "representation" : "The Goat",
        "perfect match" : "Virgo",
        "imperfect match" : "Gemini"
      },
      {
        "name" : "aquarius",
        "element" : "air: intellectual and curious",
        "qualities" : "fixed: steady, consistent forces that maintain movement",
        "ruler" : "Uranus",
        "representation" : "The Water Bearer",
        "perfect match" : "Sagittarius",
        "imperfect match" : "Cancer"
      },
      {
        "name" : "pisces",
        "element" : "water: intuitive and emotional",
        "qualities" : "mutable: well-suited to change and transformation",
        "ruler" : "Neptune",
        "representation" : "The Fish",
        "perfect match" : "Scorpio",
        "imperfect match" : "Virgo"
      },
      {
        "name" : "aries",
        "element" : "fire: passionate and exuberant",
        "qualities" : "cardinal: take action and start initiatives",
        "ruler" : "Mars",
        "representation" : "The Ram",
        "perfect match" : "Libra",
        "imperfect match" : "Taurus"
      },
      {
        "name" : "taurus",
        "element" : "earth: practical and grounded",
        "qualities" : "fixed: steady, consistent forces that maintain movement",
        "ruler" : "Venus",
        "representation" : "The Bull",
        "perfect match" : "Scorpio",
        "imperfect match" : "Sagittarius"
      },
      {
        "name" : "gemini",
        "element" : "air: intellectual and curious",
        "qualities" : "mutable: well-suited to change and transformation",
        "ruler" : "Mercury",
        "representation" : "The Twins",
        "perfect match" : "Sagittarius",
        "imperfect match" : "Capricorn"
      },
      {
        "name" : "cancer",
        "element" : "water: intuitive and emotional",
        "qualities" : "cardinal: take action and start initiatives",
        "ruler" : "The Moon",
        "representation" : "The Crab",
        "perfect match" : "Taurus",
        "imperfect match" : "Aquarius"
      },
      {
        "name" : "leo",
        "element" : "fire: passionate and exuberant",
        "qualities" : "fixed: steady, consistent forces that maintain movement",
        "ruler" : "The Sun",
        "representation" : "The Lion",
        "perfect match" : "Sagittarius",
        "imperfect match" : "Scorpio"
      },
      {
        "name" : "virgo",
        "element" : "earth: practical and grounded",
        "qualities" : "mutable: well-suited to change and transformation",
        "ruler" : "Mercury",
        "representation" : "The Virgin",
        "perfect match" : "Scorpio",
        "imperfect match" : "Sagittarius"
      },
      {
        "name" : "libra",
        "element" : "air: intellectual and curious",
        "qualities" : "cardinal: take action and start initiatives",
        "ruler" : "Venus",
        "representation" : "The Scales",
        "perfect match" : "Libra",
        "imperfect match" : "Virgo"
      },
      {
        "name" : "scorpio",
        "element" : "water: intuitive and emotional",
        "qualities" : "fixed: steady, consistent forces that maintain movement",
        "ruler" : "Pluto",
        "representation" : "The Scorpion",
        "perfect match" : "Pisces",
        "imperfect match" : "Aries"
      },
      {
        "name" : "sagittarius",
        "element" : "fire: passionate and exuberant",
        "qualities" : "mutable: well-suited to change and transformation",
        "ruler" : "Jupiter",
        "representation" : "The Archer",
        "perfect match" : "Aquarius",
        "imperfect match" : "Taurus"
      }
    ]
  };

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
    var signs = data.signs;

    if (sign == 'Capricorn') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[0].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[0].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[0].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[0].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[0]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[0]["imperfect match"]
    }

    if (sign == 'Aquarius') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[1].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[1].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[1].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[1].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[1]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[1]["imperfect match"]
    }

    if (sign == 'Pisces') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[2].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[2].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[2].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[2].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[2]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[2]["imperfect match"]
    }

    if (sign == 'Aries') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[3].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[3].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[3].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[3].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[3]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[3]["imperfect match"]
    }

    if (sign == 'Taurus') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[4].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[4].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[4].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[4].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[4]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[4]["imperfect match"]
    }

    if (sign == 'Gemini') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[5].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[5].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[5].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[5].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[5]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[5]["imperfect match"]
    }

    if (sign == 'Cancer') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[6].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[6].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[6].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[6].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[6]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[6]["imperfect match"]
    }

    if (sign == 'Leo') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[7].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[7].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[7].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[7].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[7]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[7]["imperfect match"]
    }

    if (sign == 'Virgo') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[8].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[8].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[8].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[8].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[8]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[8]["imperfect match"]
    }

    if (sign == 'Libra') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[9].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[9].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[9].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[9].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[9]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[9]["imperfect match"]
    }

    if (sign == 'Scorpio') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[10].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[10].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[10].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[10].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[10]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[10]["imperfect match"]
    }

    if (sign == 'Sagittarius') {
        document.getElementById('Element').innerHTML = 'Element: ' + signs[11].element
        document.getElementById('Qualities').innerHTML = 'Qualities: ' + signs[11].qualities
        document.getElementById('Ruler').innerHTML = 'Ruler: ' + signs[11].ruler
        document.getElementById('Representation').innerHTML = 'Representation: ' + signs[11].representation
        document.getElementById('Perfect Match').innerHTML = 'Perfect Match: ' + signs[11]["perfect match"]
        document.getElementById('Imperfect Match').innerHTML = 'Imperfect Match: ' + signs[11]["imperfect match"]
    }
  }
