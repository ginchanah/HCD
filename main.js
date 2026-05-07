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
let selectedOption = selectBloemzaad.options[selectBloemzaad.selectedIndex];

let selectedBloemTextContent  = selectedOption.text; 


let selectedBloemNaam = selectedOption.dataset.bloem;

// als je een nieuwe optie selecterd dan verander de value 
selectBloemzaad.addEventListener("change", (event) => {
    const option = event.target.options[event.target.selectedIndex];

    selectedBloemValue = event.target.value;
    selectedBloemTextContent = event.target.options[event.target.selectedIndex].text;
    selectedBloemNaam = option.dataset.bloem;
    console.log(selectedBloemNaam)
});




const checkbox = document.getElementById('premiumbloembed');
const statusMessage = document.getElementById('status');
const button = document.getElementById('verwijderOnkruid');
const help = document.getElementById('bloembedhelp')
const onkruidSpan = document.querySelector('#label span')
const waterButton = document.getElementById('water')
const verwijderBloemenButton = document.getElementById('verwijderBloemen')
let waterInstance = 0


// bloempot button
button.addEventListener('click', () => {

    checkbox.disabled = false;
    checkbox.ariaDisabled = false;

    statusMessage.textContent = 'De brandnetel is verwijdert. Je vingers doen nu wel een beetje pijn.';
    help.textContent = 'Je kunt nu bloemen planten in deze bloempot.'
    onkruidSpan.textContent = ''

    checkbox.focus();

    button.classList.add("hidden")
});


// bloemen planten/verwijderen
checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
            statusMessage.textContent = `Je hebt ${selectedBloemTextContent} geplant!`;
            help.textContent = ''
            onkruidSpan.textContent = `met ${selectedBloemNaam}`
            waterButton.classList.remove("hidden")

            if (geluidCheckbox.checked) {
                bloemGeplantAudio.play();
            }
            
        } else {
            statusMessage.textContent = 'Je hebt de bloemen verwijdert... je voelt je een beetje verdrietig.';
            button.classList.add("hidden")
            waterButton.classList.add("hidden")
            verwijderBloemenButton.classList.add("hidden")
            console.log("verwijder bloemen button", verwijderBloemenButton)
            onkruidSpan.textContent = ''


            if (geluidCheckbox.checked) {
                shovelGeluid.play();
            }
        }
})


// bloemen water geven
waterButton.addEventListener('click', () => {
    waterInstance++

    let geplanteBloem = onkruidSpan.textContent
    
    if (waterInstance === 1) {
        statusMessage.textContent = 'Er begint een klein beetje groen door de grond te komen!'
        checkbox.focus();
    } 
    if (waterInstance === 2) {
        statusMessage.textContent = 'Er begint een knosp te vormen!'
        checkbox.focus();
    } 
    if (waterInstance === 3) {
        statusMessage.textContent = `Je ${geplanteBloem} is helemaal in bloem! Het ruikt heerlijk.`
        checkbox.focus();
    } 
    if (waterInstance >= 4) {
        statusMessage.textContent = `Je ${geplanteBloem} heeft te veel water gekregen en is kapot gegaan.. je bent verdrietig`
        checkbox.focus();
        waterButton.classList.add('hidden')
        verwijderBloemenButton.classList.remove('hidden')
    }
    
})

// bloemen verwijderen
verwijderBloemenButton.addEventListener('click', () => {
    statusMessage.textContent = 'Je kunt nu bloemen planten in deze bloempot.'
    onkruidSpan.textContent = ''
    checkbox.checked = false;
    checkbox.focus();
    verwijderBloemenButton.classList.add("hidden")
    if (geluidCheckbox.checked) {
        shovelGeluid.play();
    }
})







const bloembedSelect = document.getElementById("bloembed-select");
const actiesSelect = document.getElementById("tuinier-acties");
const actieSections    = document.querySelectorAll('.actie-section');
const onkruidSection = document.querySelector(".onkruid-wieden-section");
const bloemenSection = document.querySelector(".bloemen-planten-section");
const onkruidButton = document.querySelector(".onkruid-wieden-section button");
const plantButton = document.querySelector(".bloemen-planten-section button");
const bloemzaadjesSelect = document.getElementById("bloemzaadjes2");
const uitlegP = document.querySelector(".uitleg");

let linkedBloembed = null;


// select bloembed and get the linked bloembed
function checkBloembed() {
    const selectedValue = bloembedSelect.value;
    linkedBloembed = document.getElementById(selectedValue);
    if (!linkedBloembed) return;

    const hasOnkruid = !!linkedBloembed.querySelector("span.onkruid");
    const inhoudSpan = linkedBloembed.querySelector(".inhoud-bloembed");
    const isEmpty = inhoudSpan && inhoudSpan.classList.contains("is-empty");
    const hasActie = inhoudSpan && inhoudSpan.classList.contains("actie-uitgevoerd");

    // als er onkruid is enable onkruid option en disable andere options
    if (hasOnkruid) {
        Array.from(actiesSelect.options).forEach(option => {
            if (option.value === "onkruid-wieden" || option.value === "onkruid-water-geven") {
            option.disabled = false;
            option.removeAttribute("aria-disabled");
            } else {
            option.disabled = true;
            option.setAttribute("aria-disabled", "true");
            }
        });

        actiesSelect.value = "onkruid-wieden";

        // als er nog geen bloem geplant is
        if (!hasActie) {
        uitlegP.textContent = "In dit bloembed zit onkruid.";
        } else {
            // als er wel al een bloem geplant is
            const inhoudSpan = linkedBloembed.querySelector(".inhoud-bloembed");
            if (!inhoudSpan) return;

            const onkruidNaam = inhoudSpan.textContent
                .replace("met ", "")
                .replace(".", "")
                .trim();

            uitlegP.textContent = `Je ${onkruidNaam} spreid uit!`;
        }

    } else if (isEmpty) {

        
        // als er onkruid gewied is
        Array.from(actiesSelect.options).forEach(option => {
        option.disabled = false;
        option.removeAttribute("aria-disabled");
        });

        actiesSelect.value = "bloemen-planten";
        
        const bloemnaam = inhoudSpan.textContent.replace("met ", "").replace(".", "");
        const bloembedNaam = bloembedSelect.options[bloembedSelect.selectedIndex].text;

        if (inhoudSpan.textContent === "") {
            uitlegP.textContent = "In dit bloembed zit geen onkruid. Je kunt bloemen planten!";
        } else {
            uitlegP.textContent = `${bloemnaam} geplant in ${bloembedNaam}!`;
        }

    } else {
        // geen onkruid
        Array.from(actiesSelect.options).forEach(option => {
        if (option.value === "onkruid-wieden") {
            option.disabled = true;
            option.setAttribute("aria-disabled", "true");
        } else {
            option.disabled = false;
            option.removeAttribute("aria-disabled");
        }
        });

        actiesSelect.value = "bloemen-planten";
        uitlegP.textContent = "In dit bloembed zit geen onkruid. Je kunt bloemen planten!";
    } 

    // laat section zien voor de geselecteerde option
    updateSectionsVisibility();
}

// laat section zien voor de geselecteerde option
function updateSectionsVisibility() {
    document.querySelectorAll(".actie-section").forEach(section => {
        section.classList.add("hidden");
    });

    const sectionClass = `${actiesSelect.value}-section`;
    const linkedSection = document.querySelector(`.${sectionClass}`);
    if (linkedSection) {
        linkedSection.classList.remove("hidden");
    }
}



checkBloembed();
bloembedSelect.addEventListener("change", checkBloembed);
actiesSelect.addEventListener("change", updateSectionsVisibility);


// Onkruid wieden button
onkruidButton.addEventListener("click", function () {
    if (!linkedBloembed) return;

    // onkruid weghalen
    const inhoudSpan = linkedBloembed.querySelector(".inhoud-bloembed");
    if (inhoudSpan) {
        inhoudSpan.textContent = "";
        inhoudSpan.classList.remove("onkruid");
    }

    // options disabelen
    Array.from(actiesSelect.options).forEach(option => {
        if (option.value === "onkruid-wieden") {
            option.disabled = true;
            option.setAttribute("aria-disabled", "true");
        } else if (option.value === "onkruid-water-geven") {
            option.disabled = true;
            option.setAttribute("aria-disabled", "true");
        } else {
            option.disabled = false;
            option.removeAttribute("aria-disabled");
        }
    });

    // laat bloemen planten option zien
    actiesSelect.value = "bloemen-planten";
    actiesSelect.dispatchEvent(new Event("change")); 
    

    let isEmpty = inhoudSpan.classList.add("is-empty")

    if (!isEmpty) {
        uitlegP.textContent = "Onkruid gewied! Je kunt nu bloemen planten.";
    }

    if (geluidCheckbox.checked) {
        shovelGeluid.play();
    }
});




// Plant bloemen button
plantButton.addEventListener("click", function () {
    if (!linkedBloembed) return;

    // Haal de geselecteerde bloem op
    const selectedOption = bloemzaadjesSelect.options[bloemzaadjesSelect.selectedIndex];
    const bloemnaam = selectedOption.getAttribute("data-bloem");
    const bloembedNaam = bloembedSelect.options[bloembedSelect.selectedIndex].text;

    // Vul de inhoudSpan met bloemnaam
    const inhoudSpan = linkedBloembed.querySelector(".inhoud-bloembed");
    if (inhoudSpan && bloemnaam) {
        inhoudSpan.textContent = `met ${bloemnaam}.`;
    }

    uitlegP.textContent = `${bloemnaam} geplant in ${bloembedNaam}!`;

    inhoudSpan.classList.add("bloem-geplant")
    inhoudSpan.classList.remove("is-empty")

    tuinbeschrijvingAanpassen();

    if (geluidCheckbox.checked) {
        bloemGeplantAudio.play();
    }
});


// onkruid water geven button
const onkruidWaterGevenButton = document.querySelector(".onkruid-water-geven-section button");

onkruidWaterGevenButton.addEventListener("click", function () {
    if (!linkedBloembed) return;

    const inhoudSpan = linkedBloembed.querySelector(".inhoud-bloembed");
    if (!inhoudSpan) return;

    // onkruid naam uit span
    const onkruidNaam = inhoudSpan.textContent
        .replace("met ", "")
        .replace(".", "")
        .trim();

    uitlegP.textContent = `Je ${onkruidNaam} spreid uit!`;
    
    // class om te laten weten dat er een actie is uitgevoerd
    inhoudSpan.classList.add("actie-uitgevoerd");
});


const tuinBeschrijving = document.getElementById("tuinDescription")

// tuinbeschrijving aanpassen als er een bloem geplant is

function tuinbeschrijvingAanpassen() {
    let bloemGeplant = document.querySelector(".bloem-geplant")

    if(bloemGeplant) {
        tuinBeschrijving.textContent = "Je tuin zit vol met bloemen. Het ruikt heerlijk!"
    }
}