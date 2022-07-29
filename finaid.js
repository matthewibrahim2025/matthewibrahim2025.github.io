
// 83e081c553af7c31cacb6c866

// INPUT: FILTERS
// - Location—> State and/or distanceFromZIpCODE
// - College Type: Public/priv, degree length
// - COST--> Percent need met mininum
// - Campus Life—> Size(small--large) and urban/rural


// OUTPUT: INFO IDS


// TO DO LIST 

// LOOK AT REMINDERS
// figure out this button problem on the second page if u can 
// learn how to host this on a website if its easy if not upload to github and add this to ur resume and l
// THEN U FINISHED UR FIRST SIDE PROJECT!!!!!!!!!!!!!!



const addLoc = () => {
    const state = document.querySelector('#state').value
    const zpcode = document.querySelector('#zpcode').value
    const rg = document.querySelector('#rg').value

    if (state === "") {

        return [zpcode, rg];
        
        // const res = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={"zipCode":"${zpcode}", "distanceFromHomeMiles":[0,${rg}]}`);
        // console.log(res.data.colleges)
    } 
    
    else if (zpcode === "" || rg === "") {
        
        return state

        // const res = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={"in-state":"${state}"}`);
        // console.log(res.data.colleges)
    }
    // else {
    //     const colleges = await getLocation (state, zpcode, rg);
    //     console.log(colleges)
    // }
   
    // const LI = document.createElement('LI');
    // for (const data of colleges) {
    //     LI.append(data)
    //     tuiton.append(LI)
    //   }
}



// const getLocation = async (state, zpcode, rg) => {

//     const res = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={"in-state":"${state}", "zipCode":"${zpcode}", "distanceFromHomeMiles":[0,${rg}]}`);
//     return (res.data.colleges)

// }

// const NoStateLoc = async (zpcode, rg) => {

//     const res = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={"zipCode":"${zpcode}", "distanceFromHomeMiles":[0,${rg}]}`);
//     return (res.data.colleges)

// }







// button.addEventListener('click', addMatches)



// this sole purpose of this function is to return the type of degree/pupriv
const addType = () => {
    const priv = document.querySelector('#privradio').checked
    const fouryr = document.querySelector('#fouryradio').checked


    // const zpcode = document.querySelector('#zpcode').value
    // const rg = document.querySelector('#rg').value

    if ((priv === true) && (fouryr === true)) {
        return '"funding-type":["private"], "degree-length":["4year"]'

        // const res = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={"funding-type":["private"], "degree-length":["4year"]}`);
        // console.log(res.data.colleges)
    } 
    else if (priv === false && fouryr === false) {

        return '"funding-type":["public"], "degree-length":["2year"]'

        
        // const res = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={"funding-type":["public"], "degree-length":["2year"]}`);
        // console.log(res.data.colleges)
    } 
    else if (priv === false && fouryr === true) {
        
        return '"funding-type":["public"], "degree-length":["4year"]'


        // const res = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={"funding-type":["public"], "degree-length":["4year"]}`);
        // console.log(res.data.colleges)
    }
    else if (priv === true && fouryr === false) {
        
        return '"funding-type":["private"], "degree-length":["2year"]'


        // const res = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={"funding-type":["private"], "degree-length":["4year"]}`);
        // console.log(res.data.colleges)
    }


    
    // if (zpcode === "" || rg === "") {
    //     const res = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={"in-state":"${state}"}`);
    //     console.log(res.data.colleges)
    // }

}


/// MUST BE MODIFIED TO ASK IF THEY WANT FULL NEED MET OR NOT THINKING DROP DOWN THAT RETURN YES OR NO

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



// this executes only when the input for all the categories have been entered



const getVal = () => {
    const sizePick = document.querySelector("#looking").value
    console.log(sizePick)
}




// if (pageBottom == true) {
//     alert(true)
//     subset += 20
//     grandFunc(subset)
// }


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

    
    
    // selection of zip code for loaction

    if (location[0].length === 5) {
        
            if (need !== false) {
            // const results = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={${type}, "zipCode":"${location[0]}", "distanceFromHomeMiles":[0,${location[1]}], "atleast-percent-financial-aid-met":"100", "schoolSize":["${campLife[0]}"], "area-type":["${campLife[1]}"]}`)
            
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
                website.append("Website: ", data.website)
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
            
            // const results = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&info_ids=campus_image,city,avg_net_price,acceptance_rate,sat_average,website&offset=${0+subset}&filters={${type}, "zipCode":"${location[0]}", "distanceFromHomeMiles":[0,500], "schoolSize":["medium"], "area-type":["urban"]}`)

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
                website.append("Website: ", data.website)
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
            
            // for college in 
            // newLI.append(results.data.colleges);
            // collegeresults.append(newLI);


            // for to load more on the bottom of the page im thinking of a functions thats called when the bottom of the page is reached that shows the next 20 via subset
            

        
            


            // document.getElementById("p2").style.color = "blue"

            }
    }

    // selection of state for loaction

    else if (location.length === 2) {

        if (need !== false) {
            // const results = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={${type}, "in-state":"${location}", "atleast-percent-financial-aid-met":"100", "schoolSize":["${campLife[0]}"], "area-type":["${campLife[1]}"]}`)
            
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
                website.append("Website: ", data.website)
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

            // const results = await axios.get(`https://api.collegeai.com/v1/api/college-list?api_key=83e081c553af7c31cacb6c866&filters={${type}, "in-state":"${location}", "schoolSize":["${campLife[0]}"], "area-type":["${campLife[1]}"]}`)
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
                website.append("Website: ", data.website)
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
            // const newLI = document.createElement('LI');
            // newLI.append(results.data.colleges);
            // collegeresults.append(newLI)

        }

    }

}





window.onload=function(){
    const button = document.querySelector('#button');
    button.addEventListener('click', grandFunc)
  }








// const pages = document.querySelectorAll(".page")
// const translateAmount = 100;
// let translate = 0;


// slide = (direction) => {

//     direction === "next" ? translate -= translateAmount : translate += translateAmount;

//     pages.forEach(
//         pages => (pages.style.transform = `translateX(${translate}%)`)
//     );

// }





























// const addTuitionRatio = async () => {
//     const name = document.querySelector('#uniinput').value
//     const collegetuition = await getCollegeTuition (name);
//     // const collegeratio = await getCollegeRatio ();
//     const LI = document.createElement('LI');
//     // const LI2 = document.createElement('LI');
//     LI.append(collegetuition)
//     // LI2.append(collegeratio)
//     tuiton.append(LI)
//     // tuiton.append(LI2)


// }

// const getCollegeTuition = async (name) => {
//     const res = await axios.get(`https://api.collegeai.com/v1/api/college/info?api_key=83e081c553af7c31cacb6c866&info_ids=student_faculty_ratio,in_state_tuition&college_names=${name}`);
//     return res.data.colleges[0].inStateTuition;
// }

// // const getCollegeRatio = async () => {
// //     const res = await axios.get("https://api.collegeai.com/v1/api/college/info?api_key=83e081c553af7c31cacb6c866&info_ids=student_faculty_ratio,in_state_tuition&college_names=vanderbilt");
// //     return res.data.colleges[0].studentFacultyRatio;
// // }


