// script.js

// Variabel global
let selectedElements = [];
let currentElement = null;
let currentSearchQuery = ''; // Variabel global tambahan untuk pencarian

// Inisialisasi aplikasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

// Fungsi utama untuk inisialisasi aplikasi
function initializeApp() {
    renderPeriodicTable();
    setupEventListeners();
    showWelcomeMessage();
}

// ----------------------------------------------------
// Render tabel periodik
// ----------------------------------------------------
function renderPeriodicTable() {
    const tableContainer = document.getElementById('periodicTable');
    tableContainer.innerHTML = '';

    periodicTableLayout.forEach(row => {
        row.forEach(cellNumber => {
            const elementCell = document.createElement('div');

            if (cellNumber && !isNaN(cellNumber)) {
                const element = elements.find(el => el.number === cellNumber);
                if (element) {
                    elementCell.className = `element ${element.color}`;
                    elementCell.innerHTML = `
                        <div class="element-symbol">${element.symbol}</div>
                        <div class="element-number">${element.number}</div>
                    `;
                    elementCell.setAttribute('data-symbol', element.symbol);
                    elementCell.setAttribute('data-number', element.number);
                } else {
                    elementCell.className = 'element empty';
                }
            } else {
                elementCell.className = 'element empty';
            }
            tableContainer.appendChild(elementCell);
        });
    });
}

// ----------------------------------------------------
// Event Listeners
// ----------------------------------------------------
function setupEventListeners() {
    const tableContainer = document.getElementById('periodicTable');
    const mixBtn = document.getElementById('mixBtn');
    const resetBtn = document.getElementById('resetBtn');
    const searchInput = document.getElementById('elementSearch');
    const clearSearchBtn = document.getElementById('clearSearch');

    tableContainer.addEventListener('click', function (e) {
        const elementCell = e.target.closest('.element');
        if (elementCell && !elementCell.classList.contains('empty')) {
            const symbol = elementCell.getAttribute('data-symbol');
            selectElement(symbol);
        }
    });

    mixBtn.addEventListener('click', mixElements);

    resetBtn.addEventListener('click', resetSelection);

    searchInput.addEventListener('input', function (e) {
        currentSearchQuery = e.target.value.trim();
        searchElements(currentSearchQuery);
        clearSearchBtn.style.display = currentSearchQuery ? 'block' : 'none';
    });

    clearSearchBtn.addEventListener('click', function () {
        searchInput.value = '';
        currentSearchQuery = '';
        clearSearchBtn.style.display = 'none';
        clearSearch();
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (currentSearchQuery) {
                const results = performSearch(currentSearchQuery);
                if (results.length === 1) selectElement(results[0].symbol);
            }
        }
    });
}

// ----------------------------------------------------
// PENCARIAN (PREFIX MATCH VERSION)
// ----------------------------------------------------
function searchElements(query) {
    if (!query) {
        clearSearch();
        return;
    }

    const results = performSearch(query);
    displaySearchResults(results, query);
}

function performSearch(query) {
    const searchTerm = query.toLowerCase();

    return elements.filter(element => {
        const symbolMatch = element.symbol.toLowerCase().startsWith(searchTerm);
        const nameMatch = element.name.toLowerCase().startsWith(searchTerm);
        const numberMatch = element.number.toString().startsWith(searchTerm);

        return symbolMatch || nameMatch || numberMatch;
    }).sort((a, b) => {
        const aSymbol = a.symbol.toLowerCase().startsWith(searchTerm);
        const bSymbol = b.symbol.toLowerCase().startsWith(searchTerm);
        const aName = a.name.toLowerCase().startsWith(searchTerm);
        const bName = b.name.toLowerCase().startsWith(searchTerm);

        if (aSymbol && !bSymbol) return -1;
        if (!aSymbol && bSymbol) return 1;
        if (aName && !bName) return -1;
        if (!aName && bName) return 1;

        return a.number - b.number;
    });
}

function displaySearchResults(results, query) {
    const tableContainer = document.getElementById('periodicTable');
    const allElements = tableContainer.querySelectorAll('.element');

    allElements.forEach(el => {
        el.classList.remove('highlighted');
        el.style.opacity = '1';
        el.style.display = 'flex';
    });

    if (results.length === 0) {
        allElements.forEach(el => {
            if (!el.classList.contains('empty')) {
                el.style.display = 'none';
            }
        });

        let msg = tableContainer.querySelector('.no-results');
        if (!msg) {
            msg = document.createElement('div');
            msg.className = 'no-results';
            tableContainer.appendChild(msg);
        }
        msg.textContent = `Tidak ditemukan unsur yang diawali dengan "${query}"`;

    } else {
        allElements.forEach(el => {
            if (!el.classList.contains('empty')) {
                const symbol = el.getAttribute('data-symbol');
                const match = results.some(r => r.symbol === symbol);
                el.style.display = match ? 'flex' : 'none';
                if (match) el.classList.add('highlighted');
            }
        });

        const msg = tableContainer.querySelector('.no-results');
        if (msg) msg.remove();
    }

    showSearchInfo(results.length, query);
}

function showSearchInfo(count, query) {
    let info = document.querySelector('.search-info');
    if (!info) {
        info = document.createElement('div');
        info.className = 'search-info';
        const searchContainer = document.querySelector('.search-container');
        searchContainer.parentNode.insertBefore(info, searchContainer.nextSibling);
    }

    if (count === 0) {
        info.textContent = `Pencarian untuk "${query}"`;
        info.style.color = '#ef476f';
    } else {
        info.textContent = `Ditemukan ${count} unsur untuk "${query}"`;
        info.style.color = '#06d6a0';
    }
}

function clearSearch() {
    const tableContainer = document.getElementById('periodicTable');
    const allElements = tableContainer.querySelectorAll('.element');

    allElements.forEach(el => {
        el.classList.remove('highlighted');
        el.style.opacity = '1';
        el.style.display = 'flex';
    });

    const msg = tableContainer.querySelector('.no-results');
    if (msg) msg.remove();

    const info = document.querySelector('.search-info');
    if (info) info.remove();
}

// ----------------------------------------------------
// FUNGSI SELECT ELEMENT (VERSI BARU SESUAI PERMINTAAN)
// ----------------------------------------------------
function selectElement(symbol) {
    const element = elements.find(el => el.symbol === symbol);

    const alreadySelected = selectedElements.includes(symbol);

    if (alreadySelected) {
        selectedElements = selectedElements.filter(item => item !== symbol);

        showWelcomeMessage(); // hapus panel detail kalau dibatalkan
    } else {
        if (selectedElements.length < 2) {
            selectedElements.push(symbol);
        } else {
            selectedElements[0] = symbol;
        }

        if (element) {
            showElementInfo(element);
        }
    }

    clearSearch();
    document.getElementById('elementSearch').value = '';
    document.getElementById('clearSearch').style.display = 'none';
    currentSearchQuery = '';

    updateSubstanceSlots();
    updateMixButton();
    highlightSelectedElements();
}

// ----------------------------------------------------
// PANEL INFORMASI
// ----------------------------------------------------
function showElementInfo(element) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const elementDetails = document.getElementById('elementDetails');
    const reactionResult = document.getElementById('reactionResult');

    welcomeMessage.style.display = 'none';
    reactionResult.style.display = 'none';
    elementDetails.style.display = 'block';

    document.getElementById('elementSymbolLarge').textContent = element.symbol;
    document.getElementById('elementName').textContent = element.name;
    document.getElementById('elementNumber').textContent = `Nomor Atom: ${element.number}`;
    document.getElementById('elementCategory').textContent = element.category;
    document.getElementById('elementDescription').textContent = element.desc;
    document.getElementById('elementImage').innerHTML = element.image;

    currentElement = element;
}

function showWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const elementDetails = document.getElementById('elementDetails');
    const reactionResult = document.getElementById('reactionResult');

    elementDetails.style.display = 'none';
    reactionResult.style.display = 'none';
    welcomeMessage.style.display = 'block';

    currentElement = null;
}

// ----------------------------------------------------
// SUBSTANCE SLOTS + SELECTION
// ----------------------------------------------------
function updateSubstanceSlots() {
    const s1 = document.getElementById('substance1');
    const s2 = document.getElementById('substance2');

    s1.textContent = 'Pilih unsur pertama...';
    s2.textContent = 'Pilih unsur kedua...';
    s1.className = 'substance-slot';
    s2.className = 'substance-slot';

    if (selectedElements[0]) {
        s1.textContent = selectedElements[0];
        s1.className = 'substance-slot filled';
    }
    if (selectedElements[1]) {
        s2.textContent = selectedElements[1];
        s2.className = 'substance-slot filled';
    }
}

function updateMixButton() {
    document.getElementById('mixBtn').disabled = selectedElements.length !== 2;
}

function highlightSelectedElements() {
    document.querySelectorAll('.element').forEach(el =>
        el.classList.remove('selected')
    );

    selectedElements.forEach(symbol => {
        const cell = document.querySelector(`[data-symbol="${symbol}"]`);
        if (cell) cell.classList.add('selected');
    });
}

// ----------------------------------------------------
// CAMPUR UNSUR
// ----------------------------------------------------
function mixElements() {
    if (selectedElements.length !== 2) return;

    const [a, b] = selectedElements;
    const reaction = getReaction(a, b);
    showReactionResult(a, b, reaction);
}

function getReaction(a, b) {
    const direct = reactions[`${a}+${b}`];
    const reverse = reactions[`${b}+${a}`];
    return direct || reverse || null;
}

function showReactionResult(elem1, elem2, reaction) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const elementDetails = document.getElementById('elementDetails');
    const reactionResult = document.getElementById('reactionResult');

    welcomeMessage.style.display = 'none';
    elementDetails.style.display = 'none';
    reactionResult.style.display = 'block';

    const safetyText = {
        safe: 'AMAN',
        warning: 'PERINGATAN',
        danger: 'BAHAYA',
        extreme: 'SANGAT BERBAHAYA!',
        unknown: 'BELUM DIKETAHUI'
    };

    if (reaction) {
        const status = reaction.safety || 'unknown';

        reactionResult.className = `reaction-result ${status}`;

        document.getElementById('reactionFormula').textContent = reaction.formula;
        document.getElementById('reactionDescription').textContent = reaction.desc;
        document.getElementById('reactionImage').innerHTML = reaction.image;

        document.getElementById('reactionTitle').innerHTML =
            `${reaction.result} <span class="safety-badge ${status}">${safetyText[status]}</span>`;
    } else {
        const status = 'unknown';
        reactionResult.className = `reaction-result ${status}`;

        document.getElementById('reactionFormula').textContent = `${elem1} + ${elem2}`;
        document.getElementById('reactionDescription').textContent =
            'Kombinasi ini belum memiliki data reaksi pada simulasi ini.';
        document.getElementById('reactionImage').innerHTML = '❓';

        document.getElementById('reactionTitle').innerHTML =
            `Hasil Tidak Dikenal <span class="safety-badge ${status}">${safetyText[status]}</span>`;
    }
}

// ----------------------------------------------------
// RESET
// ----------------------------------------------------
function resetSelection() {
    selectedElements = [];
    currentElement = null;

    clearSearch();
    document.getElementById('elementSearch').value = '';
    document.getElementById('clearSearch').style.display = 'none';
    currentSearchQuery = '';

    updateSubstanceSlots();
    updateMixButton();
    highlightSelectedElements();
    showWelcomeMessage();
}
