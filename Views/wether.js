
function displayMum() {
    document.getElementById('city').innerHtml="Mumbai";
    document.getElementById('mumbai').classList.add('disp');
    document.getElementById('raipur').classList.remove('disp');
    document.getElementById('surat').classList.remove('disp');
    
}

function displayRpr() {

    document.getElementById('raipur').classList.add('disp');
    document.getElementById('mumbai').classList.remove('disp');
    document.getElementById('surat').classList.remove('disp');
    
}

function displaySur() {

    document.getElementById('surat').classList.add('disp');
    document.getElementById('raipur').classList.remove('disp');
    document.getElementById('mumbai').classList.remove('disp');
    
}


// document.getElementById('mum').onclick = dispalyMum();