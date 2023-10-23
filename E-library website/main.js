
//     function openModal(title, author, description, pdfLink) {
// document.getElementById("modal-title").textContent = title;
// document.getElementById("modal-author").textContent = "Author: " + author;
// document.getElementById("modal-description").textContent = description;
// document.getElementById("download-button").href = pdfLink;
// document.getElementById("view-button").disabled = !pdfLink;
// document.getElementById("modal").style.display = "block";
// }

// function closeModal() {
// document.getElementById("modal").style.display = "none";
// }

// function viewPDF() {
// // Add your code to open the PDF viewer here
// }


function openModal(imageSrc, title, author, description, pdfLink) {
var modalImage = document.getElementById("modal-image");
modalImage.src = imageSrc;
document.getElementById("modal-title").textContent = title;
document.getElementById("modal-author").textContent = "W/Q: " + author;
document.getElementById("modal-description").textContent = description;
document.getElementById("download-button").href = pdfLink;
document.getElementById("view-button").disabled = !pdfLink;
document.getElementById("modal").style.display = "flex";
}

function closeModal() {
document.getElementById("modal").style.display = "none";
}

function viewPDF() {
// Add your code to open the PDF viewer here
}


function searchDiv() {
        var input = document.getElementById("searchInput").value.toLowerCase();
        var divs = document.getElementsByClassName("result");
        var noResultsMsg = document.getElementById("noResults");
        var refreshMsg = document.getElementById("refresh");

        var foundResults = false;

        for (var i = 0; i < divs.length; i++) {
            var div = divs[i];
            var divId = div.id.toLowerCase();

            if (divId.includes(input)) {
                div.style.display = "block";
                foundResults = true;
            } else {
                div.style.display = "none";
            }
        }

        if (foundResults) {
            noResultsMsg.style.display = "none";
        } else {
            noResultsMsg.style.display = "flex";
        }

        if (foundResults) {
            refreshMsg.style.display = "block";
        } else {
            refreshMsg.style.display = "block";
        }


    }




    function searchButton1() {
        document.getElementById("searchInput").value = "Taariikh";
        searchDiv();
    }

    function searchButton2() {
        document.getElementById("searchInput").value = "Jacayl";
        searchDiv();
    }

    function searchButton3() {
        document.getElementById("searchInput").value = "Sheeko";
        searchDiv();
    }

    function searchButton4() {
        document.getElementById("searchInput").value = "Islamic";
        searchDiv();
    }

    function searchButton5() {
        document.getElementById("searchInput").value = "naf-la-hadal";
        searchDiv();
    }

    function searchButton6() {
        document.getElementById("searchInput").value = "Dhiirigalin";
        searchDiv();
    }

    function searchButton7() {
        document.getElementById("searchInput").value = "Qoraal";
        searchDiv();
    }

    function searchButton8() {
        document.getElementById("searchInput").value = "Ganacsiga";
        searchDiv();
    }


  