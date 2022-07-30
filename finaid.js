const addLoc = () => {
    const state = document.querySelector('#state').value
    const zpcode = document.querySelector('#zpcode').value
    const rg = document.querySelector('#rg').value

    if (state === "") {

        return [zpcode, rg];
        
    } 
    
    else if (zpcode === "" || rg === "") {
        
        return state

    }
    
}


const addType = () => {
    const priv = document.querySelector('#privradio').checked
    const fouryr = document.querySelector('#fouryradio').checked


    if ((priv === true) && (fouryr === true)) {
        return '"funding-type":["private"], "degree-length":["4year"]'

    } 
    else if (priv === false && fouryr === false) {

        return '"funding-type":["public"], "degree-length":["2year"]'

    } 
    else if (priv === false && fouryr === true) {
        
        return '"funding-type":["public"], "degree-length":["4year"]'


    }
    else if (priv === true && fouryr === false) {
        
        return '"funding-type":["private"], "degree-length":["2year"]'

    }

}

const addCost =  () => {
    const need = document.querySelector('#yesneedmet').checked

    if (need === true) {
        return '100'
    } else
        return false;

}


const addCampLife = () => {
    const size = document.querySelector('#size').value
    const env = document.querySelector('#env').value


    return [size, env];


}


const getVal = () => {
    const sizePick = document.querySelector("#looking").value
    console.log(sizePick)
}



let subset = 0
pageBottom = window.onscroll = function() {
    const difference = document.documentElement.scrollHeight - window.innerHeight;
    const scrollposition = document.documentElement.scrollTop; 
    if (difference - scrollposition <= 2) {
        subset = subset + 20
        grandFunc(subset) 
        
    }   
}


const grandFunc = async (subset) => {


    const type = addType()
    const location = addLoc()
    const need = addCost()
    const campLife = addCampLife()

    console.log(location)

    if (location[0] === ''|| campLife[0] === '' ) {
        alert("Please complete all steps!")
        window.location.reload();
        

    }

    const collegeresults = document.querySelector('#collegeresults')

    
    

    if (location[0].length === 5) {
        
            if (need !== false) {
            
            const results = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&info_ids=campus_image,city,avg_net_price,acceptance_rate,sat_average,website&offset=${0+subset}&filters={${type}, "zipCode":"${location[0]}", "distanceFromHomeMiles":[0,${location[1]}], "atleast-percent-financial-aid-met":"100", "schoolSize":["${campLife[0]}"], "area-type":["${campLife[1]}"]}`)

            
            console.log(results.data.colleges)

            
            for (const data of results.data.colleges) {
                const disp = document.createElement("div")
                disp.setAttribute("class", "disp")
                const newDiv = document.createElement("div")
                newDiv.setAttribute("class", "indresult");
                const info = document.createElement("div")
                info.setAttribute("class", "info")
                const uniname = document.createElement("h1")
                uniname.append(data.name)
                uniname.setAttribute("id", "uniname");
                disp.append(uniname)
                newDiv.append(disp)
                const acceptrate = document.createElement("p")
                acceptrate.append("Acceptance Rate: ", Math.ceil(data.acceptanceRate * 100),"%")
                info.append(acceptrate)
                newDiv.append(info)
                acceptrate.setAttribute("id", "acceptrate");
                const price = document.createElement("p")
                price.append("Average Net Price: $",data.avgNetPrice)
                info.append(price)
                newDiv.append(info)
                price.setAttribute("id", "price");
                const city = document.createElement("p")
                city.append("City: ", data.city)
                info.append(city)
                newDiv.append(info)
                city.setAttribute("id", "city");
                const sat = document.createElement("p")
                sat.append("Average SAT:",data.satAverage)
                info.append(sat)
                newDiv.append(info)
                sat.setAttribute("id", "sat");
                const website = document.createElement("p")
                website.setAttribute("id", "website");
                if (data.website.length > 25) {

                    var trimmed = data.website.toString().substring(0, 25);
                    website.append("Website: ", trimmed)
                } else {
                    website.append("Website: ", data.website)
                }
                info.append(website)
                newDiv.append(info)
                const divpic = document.createElement("div")
                var img = new Image(350,220);
                img.src = data.campusImage;
                divpic.append(img)
                disp.append(divpic)
                newDiv.append(disp)
                divpic.setAttribute("id", "picture");
                console.log(newDiv)
                collegeresults.append(newDiv)
            }

        }
            
        else {

            const results = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&info_ids=campus_image,city,avg_net_price,acceptance_rate,sat_average,website&offset=${0+subset}&filters={${type}, "zipCode":"${location[0]}", "distanceFromHomeMiles":[0,${location[1]}], "schoolSize":["${campLife[0]}"], "area-type":["${campLife[1]}"]}`)
            

            console.log(results.data.colleges)

            for (const data of results.data.colleges) {
                const disp = document.createElement("div")
                disp.setAttribute("class", "disp")
                const newDiv = document.createElement("div")
                newDiv.setAttribute("class", "indresult");
                const info = document.createElement("div")
                info.setAttribute("class", "info")
                const uniname = document.createElement("h1")
                uniname.append(data.name)
                uniname.setAttribute("id", "uniname");
                disp.append(uniname)
                newDiv.append(disp)
                const acceptrate = document.createElement("p")
                acceptrate.append("Acceptance Rate: ", Math.ceil(data.acceptanceRate * 100),"%")
                info.append(acceptrate)
                newDiv.append(info)
                acceptrate.setAttribute("id", "acceptrate");
                const price = document.createElement("p")
                price.append("Average Net Price: $",data.avgNetPrice)
                info.append(price)
                newDiv.append(info)
                price.setAttribute("id", "price");
                const city = document.createElement("p")
                city.append("City: ", data.city)
                info.append(city)
                newDiv.append(info)
                city.setAttribute("id", "city");
                const sat = document.createElement("p")
                sat.append("Average SAT:",data.satAverage)
                info.append(sat)
                newDiv.append(info)
                sat.setAttribute("id", "sat");
                const website = document.createElement("p")
                website.setAttribute("id", "website");
                if (data.website.length > 25) {
                    var trimmed = data.website.toString().substring(0, 25);
                    website.append("Website: ", trimmed)
                } else {
                    website.append("Website: ", data.website)
                }                info.append(website)
                newDiv.append(info)
                const divpic = document.createElement("div")
                var img = new Image(350,220);
                img.src = data.campusImage;
                divpic.append(img)
                disp.append(divpic)
                newDiv.append(disp)
                divpic.setAttribute("id", "picture");
                console.log(newDiv)
                collegeresults.append(newDiv)
            }
        }
    }

    // selection of state for loaction

    else if (location.length === 2) {

        if (need !== false) {
            
            const results = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&info_ids=campus_image,city,avg_net_price,acceptance_rate,sat_average,website&offset=${0+subset}&filters={${type}, "in-state":"${location}", "atleast-percent-financial-aid-met":"100", "schoolSize":["${campLife[0]}"], "area-type":["${campLife[1]}"]}`)

            
            console.log(results.data.colleges)

            
            for (const data of results.data.colleges) {
                const disp = document.createElement("div")
                disp.setAttribute("class", "disp")
                const newDiv = document.createElement("div")
                newDiv.setAttribute("class", "indresult");
                const info = document.createElement("div")
                info.setAttribute("class", "info")
                const uniname = document.createElement("h1")
                uniname.append(data.name)
                uniname.setAttribute("id", "uniname");
                disp.append(uniname)
                newDiv.append(disp)
                const acceptrate = document.createElement("p")
                acceptrate.append("Acceptance Rate: ", Math.ceil(data.acceptanceRate * 100),"%")
                info.append(acceptrate)
                newDiv.append(info)
                acceptrate.setAttribute("id", "acceptrate");
                const price = document.createElement("p")
                price.append("Average Net Price: $",data.avgNetPrice)
                info.append(price)
                newDiv.append(info)
                price.setAttribute("id", "price");
                const city = document.createElement("p")
                city.append("City: ", data.city)
                info.append(city)
                newDiv.append(info)
                city.setAttribute("id", "city");
                const sat = document.createElement("p")
                sat.append("Average SAT:",data.satAverage)
                info.append(sat)
                newDiv.append(info)
                sat.setAttribute("id", "sat");
                const website = document.createElement("p")
                website.setAttribute("id", "website");
                if (data.website.length > 25) {
                    var trimmed = data.website.toString().substring(0, 25);
                    website.append("Website: ", trimmed)
                } else {
                    website.append("Website: ", data.website)
                }
                info.append(website)
                newDiv.append(info)
                const divpic = document.createElement("div")
                var img = new Image(350,220);
                img.src = data.campusImage;
                divpic.append(img)
                disp.append(divpic)
                newDiv.append(disp)
                divpic.setAttribute("id", "picture");
                console.log(newDiv)
                collegeresults.append(newDiv)
            }
            

        } else {

            const results = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&info_ids=campus_image,city,avg_net_price,acceptance_rate,sat_average,website&offset=${0+subset}&filters={${type}, "in-state":"${location}", "schoolSize":["${campLife[0]}"], "area-type":["${campLife[1]}"]}`)

            console.log(results.data.colleges)

            for (const data of results.data.colleges) {
                const disp = document.createElement("div")
                disp.setAttribute("class", "disp")
                const newDiv = document.createElement("div")
                newDiv.setAttribute("class", "indresult");
                const info = document.createElement("div")
                info.setAttribute("class", "info")
                const uniname = document.createElement("h1")
                uniname.append(data.name)
                uniname.setAttribute("id", "uniname");
                disp.append(uniname)
                newDiv.append(disp)
                const acceptrate = document.createElement("p")
                acceptrate.append("Acceptance Rate: ", Math.ceil(data.acceptanceRate * 100),"%")
                info.append(acceptrate)
                newDiv.append(info)
                acceptrate.setAttribute("id", "acceptrate");
                const price = document.createElement("p")
                price.append("Average Net Price: $",data.avgNetPrice)
                info.append(price)
                newDiv.append(info)
                price.setAttribute("id", "price");
                const city = document.createElement("p")
                city.append("City: ", data.city)
                info.append(city)
                newDiv.append(info)
                city.setAttribute("id", "city");
                const sat = document.createElement("p")
                sat.append("Average SAT:",data.satAverage)
                info.append(sat)
                newDiv.append(info)
                sat.setAttribute("id", "sat");
                const website = document.createElement("p")
                website.setAttribute("id", "website");
                if (data.website.length > 25) {
                    var trimmed = data.website.toString().substring(0, 25);
                    website.append("Website: ", trimmed)
                } else {
                    website.append("Website: ", data.website)
                }
                info.append(website)
                newDiv.append(info)
                const divpic = document.createElement("div")
                var img = new Image(350,220);
                img.src = data.campusImage;
                divpic.append(img)
                disp.append(divpic)
                newDiv.append(disp)
                divpic.setAttribute("id", "picture");
                console.log(newDiv)
                collegeresults.append(newDiv)
            }

        }

    }

}

window.onload=function(){
    const button = document.querySelector('#button');
    button.addEventListener('click', grandFunc)
  }
