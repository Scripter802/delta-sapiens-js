var isMobile;

const suggestionData = [
    {
        categoryTitle: 'Poslovna strategija i razvoj',
        options: [
            { title: 'Ključne strategije za održivi rast', value: 'Koje su ključne strategije koje Delta Holding koristi za postizanje održivog rasta?' },
            { title: 'Adaptacija na digitalnu transformaciju', value: 'Kako kompanija planira da se adaptira na digitalnu transformaciju u svojim operacijama?' },
            { title: 'Trenutni investicioni projekti', value: 'Koji su trenutni investicioni projekti Delta Holdinga i kako oni doprinose ukupnoj strategiji kompanije?' },
            { title: 'Unapređenje korporativne društvene odgovornosti', value: 'Na koji način Delta Holding planira da unapredi svoju korporativnu društvenu odgovornost i održivost u budućnosti?' }
        ]
    },
    {
        categoryTitle: 'Finansije',
        options: [
            { title: 'Upravljanje finansijskim rizicima', value: 'Koje metode Delta Holding koristi za upravljanje finansijskim rizicima?' },
            { title: 'Optimizacija poreske strategije', value: 'Na koji način Delta Holding optimizuje svoju poresku strategiju?' },
            { title: 'Finansijska analiza u donošenju odluka', value: 'Kako Delta Holding koristi finansijsku analizu za donošenje poslovnih odluka?' },
            { title: 'Izvori finansiranja i pristup novim mogućnostima', value: 'Koji su glavni izvori finansiranja za Delta Holding i kako se pristupa novim mogućnostima finansiranja?' }
        ]
    },
    {
        categoryTitle: 'Ljudski resursi i razvoj talenata',
        options: [
            { title: 'Filozofija upravljanja talentima', value: 'Kakva je filozofija Delta Holdinga po pitanju upravljanja talentima?' },
            { title: 'Razvoj liderstva', value: 'Kako Delta Holding pristupa razvoju liderstva unutar organizacije?' },
            { title: 'Merenje i unapređenje zadovoljstva zaposlenih', value: 'Na koji način se meri i unapređuje zadovoljstvo i angažovanost zaposlenih u Delta Holdingu?' },
            { title: 'Korišćenje tehnologije u upravljanju ljudskim resursima', value: 'Kako Delta Holding koristi tehnologiju i digitalne alate u upravljanju ljudskim resursima?' }
        ]
    },
    {
        categoryTitle: 'Održivost i društvena odgovornost (ESG)',
        options: [
            { title: 'Merenje uticaja na životnu sredinu', value: 'Na koji način Delta Holding meri svoj uticaj na životnu sredinu i prati napredak u održivosti?' },
            { title: 'Podsticanje društvene odgovornosti', value: 'Na koji način Delta Holding podstiče društvenu odgovornost i uključenost u zajednici?' },
            { title: 'Uključivanje stakeholdera u ESG inicijative', value: 'Kako kompanija uključuje stakeholdere u svoje ESG inicijative?' },
            { title: 'Doprinos ciljevima održivog razvoja UN', value: 'Kakav je doprinos Delta Holdinga ciljevima održivog razvoja Ujedinjenih nacija?' }
        ]
    },
    {
        categoryTitle: 'Informacione tehnologije i digitalizacija',
        options: [
            { title: 'Korišćenje digitalnih platformi', value: 'Koje digitalne platforme i alate Delta Holding koristi za unapređenje svojih poslovnih operacija?' },
            { title: 'Adaptacija na IT trendove', value: 'Na koji način se Delta Holding adaptira na najnovije IT trendove i tehnologije?' },
            { title: 'Mere za osiguranje sajber sigurnosti', value: 'Koje mere Delta Holding preduzima za osiguranje sajber sigurnosti?' },
            { title: 'Integracija veštačke inteligencije', value: 'Na koji način Delta Holding integriše veštačku inteligenciju (AI) i mašinsko učenje u svoje poslovne procese?' }
        ]
    },
    {
        categoryTitle: 'Razno',
        options: [
            { title: 'Ko si ti?', value: 'Ko si ti?' },
            { title: 'Pomoć Delta Sapiensu', value: 'Kako ti kao Delta Sapiens možeš biti od pomoći Delta Holding zaposlenima?' },
            { title: 'Novi slogan Delta Holdinga', value: 'Koji je novi Delta Holding slogan i koje je njegovo značenje?' },
            { title: 'Smisao za humor', value: 'Da li ti imaš smisao za humor i ako imaš da li možeš da ga iskazeš?' },
            { title: 'Percepcija drugih ljudi', value: 'Šta želiš da drugi ljudi misle o tebi?' }
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    isMobile = window.innerWidth <= 768;
    renderSuggestions();
    Suggestions();
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderSuggestions() {
    var suggStack;

    if (isMobile) {
        console.log("MOBILE");
        suggStack = document.getElementById('suggStack2');
    } else {
        suggStack = document.getElementById('suggStack');
    }

    var suggStackSuggSpots = suggStack.children;

    // Randomize the first five categories
    let categories = suggestionData.slice(0, 5);
    shuffleArray(categories);
    // Add the "Razno" category at the end
    categories.push(suggestionData.find(category => category.categoryTitle === 'Razno'));

    for (var suggIndex = 0; suggIndex < suggStackSuggSpots.length; suggIndex++) {
        var categoryDiv = suggStackSuggSpots[suggIndex];
        var category = categories[suggIndex];

        const titleDiv = document.createElement('div');
        titleDiv.className = 'suggestiontitle';
        titleDiv.textContent = category.categoryTitle;
        categoryDiv.appendChild(titleDiv);

        category.options.forEach(option => {
            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'suggestionbutton';

            const textDiv = document.createElement('div');
            textDiv.className = 'suggtxt';
            textDiv.textContent = option.title;

            buttonDiv.appendChild(textDiv);
            buttonDiv.dataset.value = option.value;
            categoryDiv.appendChild(buttonDiv);
        });
    }
}


function Suggestions() {
    suggestionButtons = document.querySelectorAll('.suggestionbutton');
    suggestionButtons.forEach(function(button) {
        button.addEventListener('click', function() {

            const value = this.dataset.value;
            chatInput.value = value; 
            submitButton.children[0].src = submitBtn_orangeBck;

            chatInput.style.height = 'auto';
            chatInput.style.height = chatInput.scrollHeight + 'px';

            if (this.classList.contains('active')) {
                this.classList.remove('active');
                chatInput.value = null;
                submitButton.children[0].src = submitBtn_grayBck;
            } else {
                suggestionButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
            
        });
    });
}
