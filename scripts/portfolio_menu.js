function showAll() { var items = document.getElementsByClassName("single_portfolio_item");
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("portfolio_hidden");
    }
}

function showSchoolOnly() {
    var schools = document.getElementsByClassName("school");
    for (var i = 0; i < schools.length; i++) {
        schools[i].classList.remove("portfolio_hidden");
    }
    var others = document.querySelectorAll(".sad, .univer, .spo");
    for (var j = 0; j < others.length; j++) {
        others[j].classList.add("portfolio_hidden");
    }
}

function showSadOnly() {
    var sads = document.getElementsByClassName("sad");
    for (var i = 0; i < sads.length; i++) {
        sads[i].classList.remove("portfolio_hidden");
    }
    var others = document.querySelectorAll(".school, .univer, .spo");
    for (var j = 0; j < others.length; j++) {
        others[j].classList.add("portfolio_hidden");
    }
}

function showSpoOnly() {
    var spoes = document.getElementsByClassName("spo");
    for (var i = 0; i < spoes.length; i++) {
        spoes[i].classList.remove("portfolio_hidden");
    }
    var others = document.querySelectorAll(".sad, .univer, .school");
    for (var j = 0; j < others.length; j++) {
        others[j].classList.add("portfolio_hidden");
    }
}

function showUniverOnly() {
    var univs = document.getElementsByClassName("univer");
    for (var i = 0; i < univs.length; i++) {
        univs[i].classList.remove("portfolio_hidden");
    }
    var others = document.querySelectorAll(".sad, .school, .spo");
    for (var j = 0; j < others.length; j++) {
        others[j].classList.add("portfolio_hidden");
    }
}