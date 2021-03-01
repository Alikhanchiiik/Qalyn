const edu = document.getElementById("education");
const Fname = document.getElementById("Bname");
const price = document.getElementById("Bid");
const networth = document.getElementById("networth");
const but = document.getElementById("submit");
const letter = document.getElementById("Love_letter");
const calculate = document.getElementsByClassName("calculate");
const age = document.getElementsByName("radio");
const bid = document.getElementById("bid");
const skills = document.getElementsByClassName("skills");

const calculate = () => {

    let name = Fname.value; 
    let price = Number(bid.value);
    let love = letter.value;
    if (name != "") {
        price = getNewPrice(price, edu);
        let person = {
            fullName: name,
            finalPrice: price,
            loveLetter: love
        }
        document.getElementById("result").innerHTML = `The price for ${person.fullName} is ${person.finalPrice}. Your love letter is ${person.loveLetter}`;
    }
    else {
        alert("Name and starting bid cannot be empty");
}
const getNewPrice = (price, criteria) => {
    return price * Number(criteria.value);
}

const getElementsByClassName = (skills, price) => { // Check this one, it should work for values with coefficients and with integers
	for (let i=0; i < skills.length; i++) {  
		if (skills[i].checked && Number.isInteger(Number(skills[i].value))) {
			price = price + Number(skills[i].value)
		}
		else if (skills[i].checked && !Number.isInteger(skills[i].value)) {
			price = price * Number(skills[i].value)
		}
	}
	return price;
}

   /* if (edu.children[0].getAttribute("value") === "bachelor") {
        price = price * 1.5;
    }
    else if (edu.children[1].getAttribute("value") == "college") {
        price = price * 1.2;
    }
    else if (edu.children[2].getAttribute("value") == "highs") {
        price = price * 1.05;
    }
    else if (edu.children[3].getAttribute("value") == "middles") {
        price = price * 0.9;
         console.log("edu") 
    } */
    

    if (networth.getAttribute("value") == "upper") {
        price = price * 2;
    }
    else if (networth.getAttribute("value") == "middle") {
        price = price * 1.5;
    }
    else if (networth.getAttribute("value") == "lower") {
        price = price * 1.2;
        console.log("net")
    }

    const sk1 = document.getElementById("skill1").value;
    if (sk1 == "100") {
        price = price + 100;
    }
    else { console.log("without dombra")
    }
    const sk2 = document.getElementById("skill2").value;
    if (sk2 == "200") {
        price = price + 200;
    }
    else { console.log("death in 3day")}
    const sk3 = document.getElementById("skill3").value;
    if (sk3 == "150") {
        price = price + 150;
    }
    else { console.log("terrible character")} 
    const sk4 = document.getElementById("skill4").value;
    if (sk4 = "100") {
        price = price + 100;
    }  
    else {console.log("without cute voice")}

    var age = $('.radio:checked').val();
    if (age = "18") {
        price = price * 1.5;
    }
    else if (age = "24") {
        price = price * 1.2;
    }
    else if (age = "28") {
        price = price * 0.95;
        console.log("age")
    }

    const rp1 = document.getElementById("reputation1").value;
    if (rp1 == "rep1") {
        price = price * 0.85;
    } 
    else { console.log("000")
    }
   const rp2 = document.getElementById("reputation2").value;
   if (rp2 == "rep2") {
       price = price *  0.9;
    } 
    else {console.log("111")}
    const rp3 = document.getElementById("reputation3").value;
    if (rp3 == "rep3") {
        price = price - 200;
    }
    else {console.log("222")}

    
    
   calculate.innerHTML = `The price for your bride ${'name'} is ${'price'}. Your love letter is "${'letter'}"`;
}
