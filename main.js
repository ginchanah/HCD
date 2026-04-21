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


// const bloembedSelect = document.getElementById("bloembed-select");
// const actiesSelect = document.getElementById("tuinier-acties");

// bloembedSelect.addEventListener("change", function () {
//     // 1. Link de geselecteerde option aan de td met hetzelfde id
//     const selectedValue = this.value;
//     const linkedBloembed = document.getElementById(selectedValue);

//     // Veiligheidscheck
//     if (!linkedBloembed) {
//         Array.from(actiesSelect.options).forEach(opt => opt.disabled = false);
//         return;
//     }

//     // 2. Check of er een span met class "onkruid" in de td zit
//     const hasOnkruid = linkedBloembed.querySelector(".onkruid") !== null;

//     if (hasOnkruid) {
//         // Alle opties uitschakelen behalve "onkruid-wieden"
//         Array.from(actiesSelect.options).forEach(option => {
//             option.disabled = option.value !== "onkruid-wieden";
//         });

//         // Automatisch "onkruid-wieden" selecteren
//         actiesSelect.value = "onkruid-wieden";
//     } else {
//         // Anders: alle opties weer inschakelen
//         Array.from(actiesSelect.options).forEach(option => {
//             option.disabled = false;
//         });
//     }
// });






// const bloembedSelect = document.getElementById("bloembed-select");
//     const actiesSelect = document.getElementById("tuinier-acties");
//     const onkruidSection = document.querySelector(".onkruid-wieden-section");
//     const bloemenSection = document.querySelector(".bloemen-planten-section");
//     const onkruidButton = document.querySelector(".onkruid-wieden-section button");
//     const plantButton = document.querySelector(".bloemen-planten-section button");
//     const bloemzaadjesSelect = document.getElementById("bloemzaadjes2");
//     const uitlegP = document.querySelector(".uitleg");

//     let linkedBloembed = null;

//     // 1. Bloembed selectie
//     bloembedSelect.addEventListener("change", function () {
//         const selectedValue = this.value;
//         linkedBloembed = document.getElementById(selectedValue);

//         if (!linkedBloembed) {
//             Array.from(actiesSelect.options).forEach(opt => {
//                 opt.disabled = false;
//                 opt.removeAttribute("aria-disabled");
//             });
//             return;
//         }

//         // Check of er onkruid in zit
//         const hasOnkruid = linkedBloembed.querySelector(".onkruid") !== null;

//         if (hasOnkruid) {
//             // Alleen "onkruid-wieden" beschikbaar
//             Array.from(actiesSelect.options).forEach(option => {
//                 if (option.value !== "onkruid-wieden") {
//                     option.disabled = true;
//                     option.setAttribute("aria-disabled", "true");
//                 } else {
//                     option.disabled = false;
//                     option.removeAttribute("aria-disabled");
//                 }
//             });
//             actiesSelect.value = "onkruid-wieden";
            
//             // Trigger change event om section te tonen
//             actiesSelect.dispatchEvent(new Event("change"));
//         } else {
//             // Alle opties beschikbaar behalve onkruid-wieden
//             Array.from(actiesSelect.options).forEach(option => {
//                 if (option.value === "onkruid-wieden") {
//                     option.disabled = true;
//                     option.setAttribute("aria-disabled", "true");
//                 } else {
//                     option.disabled = false;
//                     option.removeAttribute("aria-disabled");
//                 }
//             });
//         }
//     });

//     // 2. Actie selectie - toon juiste section
//     actiesSelect.addEventListener("change", function () {
//         // Verberg alle sections (voeg hidden class toe)
//         onkruidSection.classList.add("hidden");
//         bloemenSection.classList.add("hidden");

//         // Toon de juiste section (verwijder hidden class)
//         if (this.value === "onkruid-wieden") {
//             onkruidSection.classList.remove("hidden");
//         } else if (this.value === "bloemen-planten") {
//             bloemenSection.classList.remove("hidden");
//         }
//     });

//     // 3. Onkruid wieden button
//     onkruidButton.addEventListener("click", function () {
//         console.log(linkedBloembed)
//         if (!linkedBloembed) return;

//         // 1. Maak de span met inhoud-bloembed leeg
//         const inhoudSpan = linkedBloembed.querySelector(".inhoud-bloembed");
//         if (inhoudSpan) {
//             inhoudSpan.textContent = "";
//             inhoudSpan.classList.remove("onkruid"); // Verwijder ook de onkruid class
//         }

//         // Update uitleg paragraph
//         uitlegP.textContent = "Onkruid gewied! Je kunt nu bloemen planten.";



//         // 2. Disable "onkruid-wieden" en enable "bloemen-planten"
//         Array.from(actiesSelect.options).forEach(option => {
//             if (option.value === "onkruid-wieden") {
//                 option.disabled = true;
//                 option.setAttribute("aria-disabled", "true");
//             } else if (option.value === "bloemen-planten") {
//                 option.disabled = false;
//                 option.removeAttribute("aria-disabled");
//             }
//         });

//         // Selecteer automatisch "bloemen-planten"
//         actiesSelect.value = "bloemen-planten";
        
//         // Trigger change event om de juiste section te tonen
//         actiesSelect.dispatchEvent(new Event("change"));

//     });

//     // // Optioneel: feedback aan gebruiker
//     // alert("Onkruid gewied! Je kunt nu bloemen planten.");

//     // 4. Plant bloemen button
//     plantButton.addEventListener("click", function () {
//         if (!linkedBloembed) return;

//         // Haal de geselecteerde bloem op
//         const selectedOption = bloemzaadjesSelect.options[bloemzaadjesSelect.selectedIndex];
//         const bloemnaam = selectedOption.getAttribute("data-bloem");
//         const bloembedNaam = bloembedSelect.options[bloembedSelect.selectedIndex].text;

    

//         // Vul de inhoudSpan met de bloemnaam
//         const inhoudSpan = linkedBloembed.querySelector(".inhoud-bloembed");
//         if (inhoudSpan && bloemnaam) {
//             inhoudSpan.textContent = `met ${bloemnaam}.`;
//         }

//         // Optioneel: feedback aan gebruiker
//         // alert(`${bloemnaam} geplant in ${bloembedSelect.options[bloembedSelect.selectedIndex].text}!`);

        

//         // Update uitleg paragraph
//         uitlegP.textContent = `${bloemnaam} geplant in ${bloembedNaam}!`;
//     });





    const bloembedSelect = document.getElementById("bloembed-select");
    const actiesSelect = document.getElementById("tuinier-acties");
    const onkruidSection = document.querySelector(".onkruid-wieden-section");
    const bloemenSection = document.querySelector(".bloemen-planten-section");
    const onkruidButton = document.querySelector(".onkruid-wieden-section button");
    const plantButton = document.querySelector(".bloemen-planten-section button");
    const bloemzaadjesSelect = document.getElementById("bloemzaadjes2");
    const uitlegP = document.querySelector(".uitleg");

    let linkedBloembed = null;

    // Functie om bloembed te updaten
    function updateLinkedBloembed() {
        const selectedValue = bloembedSelect.value;
        linkedBloembed = document.getElementById(selectedValue);

        if (!linkedBloembed) {
            Array.from(actiesSelect.options).forEach(opt => {
                opt.disabled = false;
                opt.removeAttribute("aria-disabled");
            });
            return;
        }

        // Check of er onkruid in zit
        const hasOnkruid = linkedBloembed.querySelector(".onkruid") !== null;

        if (hasOnkruid) {
            // Alleen "onkruid-wieden" beschikbaar
            Array.from(actiesSelect.options).forEach(option => {
                if (option.value !== "onkruid-wieden") {
                    option.disabled = true;
                    option.setAttribute("aria-disabled", "true");
                } else {
                    option.disabled = false;
                    option.removeAttribute("aria-disabled");
                }
            });
            actiesSelect.value = "onkruid-wieden";
            
            // Trigger change event om section te tonen
            actiesSelect.dispatchEvent(new Event("change"));
        } else {
            // Alle opties beschikbaar behalve onkruid-wieden
            Array.from(actiesSelect.options).forEach(option => {
                if (option.value === "onkruid-wieden") {
                    option.disabled = true;
                    option.setAttribute("aria-disabled", "true");
                } else {
                    option.disabled = false;
                    option.removeAttribute("aria-disabled");
                }
            });
        }
    }

    // Initialiseer bij page load met de eerste geselecteerde waarde
    updateLinkedBloembed();

    // 1. Bloembed selectie
    bloembedSelect.addEventListener("change", updateLinkedBloembed);

    // 2. Actie selectie - toon juiste section
    actiesSelect.addEventListener("change", function () {
        // Verberg alle sections (voeg hidden class toe)
        onkruidSection.classList.add("hidden");
        bloemenSection.classList.add("hidden");

        // Toon de juiste section (verwijder hidden class)
        if (this.value === "onkruid-wieden") {
            onkruidSection.classList.remove("hidden");
        } else if (this.value === "bloemen-planten") {
            bloemenSection.classList.remove("hidden");
        }
    });

    // 3. Onkruid wieden button
    onkruidButton.addEventListener("click", function () {
        if (!linkedBloembed) return;

        // 1. Maak de span met inhoud-bloembed leeg
        const inhoudSpan = linkedBloembed.querySelector(".inhoud-bloembed");
        if (inhoudSpan) {
            inhoudSpan.textContent = "";
            inhoudSpan.classList.remove("onkruid"); // Verwijder ook de onkruid class
        }

        // 2. Disable "onkruid-wieden" en enable "bloemen-planten"
        Array.from(actiesSelect.options).forEach(option => {
            if (option.value === "onkruid-wieden") {
                option.disabled = true;
                option.setAttribute("aria-disabled", "true");
            } else if (option.value === "bloemen-planten") {
                option.disabled = false;
                option.removeAttribute("aria-disabled");
            }
        });

        // Selecteer automatisch "bloemen-planten"
        actiesSelect.value = "bloemen-planten";
        
        // Trigger change event om de juiste section te tonen
        actiesSelect.dispatchEvent(new Event("change"));

        // Update uitleg paragraph
        uitlegP.textContent = "Onkruid gewied! Je kunt nu bloemen planten.";
    });

    // 4. Plant bloemen button
    plantButton.addEventListener("click", function () {
        if (!linkedBloembed) return;

        // Haal de geselecteerde bloem op
        const selectedOption = bloemzaadjesSelect.options[bloemzaadjesSelect.selectedIndex];
        const bloemnaam = selectedOption.getAttribute("data-bloem");
        const bloembedNaam = bloembedSelect.options[bloembedSelect.selectedIndex].text;

        // Vul de inhoudSpan met de bloemnaam
        const inhoudSpan = linkedBloembed.querySelector(".inhoud-bloembed");
        if (inhoudSpan && bloemnaam) {
            inhoudSpan.textContent = `met ${bloemnaam}.`;
        }

        // Update uitleg paragraph
        uitlegP.textContent = `${bloemnaam} geplant in ${bloembedNaam}!`;
    });
