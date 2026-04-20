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





// const bloempotCheckboxes = document.querySelectorAll(".bloembed")

// bloempotCheckboxes.forEach((bloempot) => {
//     bloempot.addEventListener("change", (event) => {
//         let description = bloempot.nextElementSibling


//         if (bloempot.checked) {
//             description.textContent = `Je hebt ${selectedBloemTextContent} geplant!`;
//             console.log(description.textContent)
//             if (geluidCheckbox.checked) {
//                 bloemGeplantAudio.play();
//             }


//             // lijst zichtbaar maken voor screenreaders
//             tuinOverzicht.setAttribute('aria-hidden', 'false');

//             // li per bloempot; reuse als hij al bestaat
//             let li = tuinOverzicht.querySelector(`li[data-pot-id="${bloempot.id}"]`);
//             if (!li) {
//                 li = document.createElement('li');
//                 li.dataset.potId = bloempot.id;
//                 tuinOverzicht.appendChild(li);
//             }

//             li.textContent = `${selectedBloemTextContent}`
            
//         } else {
//             description.textContent = "Je hebt nog geen bloem geplant in deze bloempot";
//             if (geluidCheckbox.checked) {
//                 shovelGeluid.play();
//             }
//         }
//     })

// })

const checkbox = document.getElementById('premiumbloembed');
const statusMessage = document.getElementById('status');
const button = document.getElementById('verwijderOnkruid');
const help = document.getElementById('bloembedhelp')
const onkruidSpan = document.querySelector('#label span')
const waterButton = document.getElementById('water')
const verwijderBloemenButton = document.getElementById('verwijderBloemen')
let waterInstance = 0


button.addEventListener('click', () => {

    checkbox.disabled = false;
    checkbox.ariaDisabled = false;

    statusMessage.textContent = 'De brandnetel is verwijdert. Je vingers doen nu wel een beetje pijn.';
    help.textContent = 'Je kunt nu bloemen planten in deze bloempot.'
    onkruidSpan.textContent = ''

    checkbox.focus();

    button.classList.add("hidden")
});

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

verwijderBloemenButton.addEventListener('click', () => {
    statusMessage.textContent = 'Je kunt nu bloemen planten in deze bloempot.'
    onkruidSpan.textContent = ''
    checkbox.checked = false;
    checkbox.focus();
    verwijderBloemenButton.classList.add("hidden")
})


// overzicht

// const tuinDescription = document.getElementById("tuinDescription");
// const tuinDescription2 = document.getElementById("tuinDescription2");
// const bloembedCheckboxes = document.querySelectorAll(".bloembed");

// // functie die je tuin-tekst bijwerkt
// function updateTuinBeschrijving() {
//     const isIetsGeplant = Array.from(bloembedCheckboxes).some(cb => cb.checked);

//     if (isIetsGeplant) {
//         // tekst aanpassen
//         tuinDescription.textContent =
//             "Je staat in je tuin en het ruikt heerlijk. Je herkent de volgende bloemengeuren:";

//         // tweede tekst verbergen
//         tuinDescription2.classList.add("hidden");
//     } else {
//         // terug naar “lege tuin” tekst (pas aan aan jouw originele tekst)
//         tuinDescription.textContent =
//             "Je staat voor je tuin en ruikt nu al alle lekkere bloemen die je van plan bent om te planten.";
//         tuinDescription2.classList.remove("hidden");
//     }
// }

// // alle bloembed-checkboxen dezelfde listener geven
// bloembedCheckboxes.forEach((bloembed) => {
//     bloembed.addEventListener("change", updateTuinBeschrijving);
// });

// // optioneel: bij eerste load ook meteen goede toestand zetten
// updateTuinBeschrijving();


const bloembedSelect = document.getElementById("bloembed-select");
const actiesSelect = document.getElementById("tuinier-acties");

bloembedSelect.addEventListener("change", function () {
    // 1. Link de geselecteerde option aan de td met hetzelfde id
    const selectedValue = this.value;
    const linkedBloembed = document.getElementById(selectedValue);

    // Veiligheidscheck
    if (!linkedBloembed) {
        Array.from(actiesSelect.options).forEach(opt => opt.disabled = false);
        return;
    }

    // 2. Check of er een span met class "onkruid" in de td zit
    const hasOnkruid = linkedBloembed.querySelector(".onkruid") !== null;

    if (hasOnkruid) {
        // Alle opties uitschakelen behalve "onkruid-wieden"
        Array.from(actiesSelect.options).forEach(option => {
            option.disabled = option.value !== "onkruid-wieden";
        });

        // Automatisch "onkruid-wieden" selecteren
        actiesSelect.value = "onkruid-wieden";
    } else {
        // Anders: alle opties weer inschakelen
        Array.from(actiesSelect.options).forEach(option => {
            option.disabled = false;
        });
    }
});
