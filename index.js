document.addEventListener("DOMContentLoaded",function(){

    const searchButton = document.getElementById("searchBtn");
    const usernameInput = document.getElementById("userInput");
    const statsContainer = document.querySelector(".statcon");
    const easyProgressCircle = document.querySelector(".easy");
    const mediumProgressCircle = document.querySelector(".medium");
    const hardProgressCircle = document.querySelector(".hard");
    const easyLabel = document.getElementById("easyLable");
    const mediumLabel = document.getElementById("mediumLable");
    const hardLabel = document.getElementById("hardLable");
    const cardStatsContainer = document.querySelector(".statCard");


    // function validName(username) {
    //     if(username.trim()===''){
    //         alert("Please enter a valid username");
    //         return false;
    //     }
    //     const regex=/^[a-zA-Z0-9_-]{1,15}$/;
    //     const ismatching = regex.test(username);
    //     if(!ismatching){
    //         alert("Please enter a valid username");
    //         return false;
    //     }
    //     return ismatching;
    // }

    // // const url=`https://codeforces.com/api/user.info?handles=${username}`;


    // async function fetchDetail(username){
    //     const url=`https://leetcode-stats-api.herokuapp.com/${username}`;
    //     try {
    //         searchButton.textContent="Searching...";
    //         searchButton.disabled=true;

    //         const response = await fetch(url);
    //         if(!response.ok){
    //             throw new Error("Unable to fetch the user detail");
    //         }
    //         const parsedData =await response.json();
    //         console.log("Loggin Data: ",parsedData);

    //         displayData(parsedData);

    //     } catch (error) {
    //         console.log("Error: ",error);
    //         statsContainer.innerHTML=`<p>No data Found</p>`
            
    //     } finally{
    //         searchButton.textContent="Search";
    //         searchButton.disabled=false;
    //     }
    // }

    // function UpdateProgress(solved, total, label, circle) {
    //     const progress=(solved/total)*100;
    //     circle.style.setProperty("--progress-degree",`${progress}%`);
    //     label.textContent=`${solved}/${total}`;
    // }
    

    // function displayData(parsedData) {
    //     const totalQues = parsedData.totalQuestions;
    //     const totalEasyQues = parsedData.totalEasy;
    //     const totalMeadiumQues = parsedData.totalMedium;
    //     const totalHardQues = parsedData.totalHard;

    //     console.log("Total Questions: ",totalQues);
    //     console.log("Total Easy Questions: ",totalEasyQues);
    //     console.log("Total Medium Questions: ",totalMeadiumQues);
    //     console.log("Total Hard Questions: ",totalHardQues);


    //     const solvedTotal = parsedData.totalSolved;
    //     const solvedEasyTotal = parsedData.easySolved;
    //     const solvedMediumTotal = parsedData.mediumSolved;
    //     const solvedHardTotal = parsedData.hardSolved;

    //     UpdateProgress(solvedEasyTotal, totalEasyQues, easyLabel, easyProgressCircle);
    //     UpdateProgress(solvedMediumTotal, totalMeadiumQues, mediumLabel, mediumProgressCircle);
    //     UpdateProgress(solvedHardTotal, totalHardQues, hardLabel, hardProgressCircle);

        
    // }

    // searchButton.addEventListener("click",function(){
    //     const username = usernameInput.value;
    //     console.log("loggin Username: ",username);
        
    //     if(validName(username)){
    //         fetchDetail(username);
    //     }
    // });


    function validateUsername(username) {
        if(username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username) {

        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            //statsContainer.classList.add("hidden");

            // const response = await fetch(url);
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
            const targetUrl = 'https://leetcode.com/graphql/';
            
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };

            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            if(!response.ok) {
                throw new Error("Unable to fetch the User details");
            }
            const parsedData = await response.json();
            console.log("Logging data: ", parsedData) ;

            displayUserData(parsedData);
        }
        catch(error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }


    function displayUserData(parsedData) {
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);

        const cardsData = [
            {label: "Overall Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions },
            {label: "Overall Easy Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions },
            {label: "Overall Medium Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions },
            {label: "Overall Hard Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions },
        ];

        console.log("card ka data: " , cardsData);

        cardStatsContainer.innerHTML = cardsData.map(
            data => 
                    `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>`
        ).join("")

    }

    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log("logggin username: ", username);
        if(validateUsername(username)) {
            fetchUserDetails(username);
        }
    })


})
