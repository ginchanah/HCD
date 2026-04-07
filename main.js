console.log("hallo")

const selectBloemzaad = document.getElementById("bloemzaadjes")
const bloempotCheckbox = document.getElementById("bloempot")
const bloemStatus = document.getElementById("bloemstatus")
const muziekCheckbox = document.getElementById("muziek")
const geluidCheckbox = document.getElementById("geluid")
// Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=17463">freesound_community</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=17463">Pixabay</a>
let achtergrondMuziek = new Audio("assets/sound-effects/achtergrond-muziek.mp3")
achtergrondMuziek.volume = 0.2;
achtergrondMuziek.loop = true;
// Sound Effect by <a href="https://pixabay.com/users/u_xjrmmgxfru-47169417/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=266293">u_xjrmmgxfru</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=266293">Pixabay</a>
let bloemGeplantAudio = new Audio("assets/sound-effects/plant-zaadje.mp3");
bloemGeplantAudio.volume = 0.5;
// Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36732">freesound_community</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36732">Pixabay</a>
let shovelGeluid = new Audio("assets/sound-effects/shovel.mp3")
shovelGeluid.volume = 0.5;


// muziek aan en uitzetten
muziekCheckbox.addEventListener("change", () => {
    if (muziekCheckbox.checked) {
        achtergrondMuziek.play();
        muziekstatus.textContent = "Muziek staat nu aan"
    }
    else {
        achtergrondMuziek.pause();
        muziekstatus.textContent = "Muziek staat nu uit"
    }
})

// geluid aan en uitzetten
geluidCheckbox.addEventListener("change", () => {
    if (geluidCheckbox.checked) {
        geluidstatus.textContent = "De geluidseffecten staan nu aan"
    }
    else {
        geluidstatus.textContent = "De geluidseffecten staan nu uit"
    }
})



// geselecteerde value en text
let selectedBloemValue = selectBloemzaad.value;       
let selectedBloemTextContent  = selectBloemzaad.options[selectBloemzaad.selectedIndex].text; 

// als je een nieuwe optie selecterd dan verander de value 
selectBloemzaad.addEventListener("change", (event) => {
    selectedBloemValue = event.target.value;
    selectedBloemTextContent = event.target.options[event.target.selectedIndex].text;
});



const bloempotCheckboxes = document.querySelectorAll(".bloempot")

bloempotCheckboxes.forEach((bloempot) => {
    bloempot.addEventListener("change", (event) => {
        let description = bloempot.nextElementSibling
        if (bloempot.checked) {
            description.textContent = `Je hebt ${selectedBloemTextContent} geplant!`;
            console.log(description.textContent)
            if (geluidCheckbox.checked) {
                bloemGeplantAudio.play();
            }
            
        } else {
            description.textContent = "Je hebt nog geen bloem geplant in deze bloempot";
            if (geluidCheckbox.checked) {
                shovelGeluid.play();
            }
        }
    })

})