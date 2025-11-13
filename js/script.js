// Variabel global
let selectedElements = [];
let currentElement = null;

// Inisialisasi aplikasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Fungsi utama untuk inisialisasi aplikasi
function initializeApp() {
    renderPeriodicTable(); 
    setupEventListeners();
    showWelcomeMessage();
}

// ----------------------------------------------------
// Fungsi renderPeriodicTable()
// ----------------------------------------------------
// Render tabel periodik berdasarkan layout
function renderPeriodicTable() {
    const tableContainer = document.getElementById('periodicTable');
    tableContainer.innerHTML = '';
    
    // Asumsi: periodicTableLayout dan elements tersedia secara global dari data.js
    periodicTableLayout.forEach(row => {
        row.forEach(cellNumber => {
            const elementCell = document.createElement('div');
            
            if (cellNumber && !isNaN(cellNumber)) {
                // Cari unsur dengan nomor atom ini
                const element = elements.find(el => el.number === cellNumber);
                if (element) {
                    // Buat sel untuk unsur yang ada
                    elementCell.className = `element ${element.color}`;
                    elementCell.innerHTML = `
                        <div class="element-symbol">${element.symbol}</div>
                        <div class="element-number">${element.number}</div>
                    `;
                    elementCell.setAttribute('data-symbol', element.symbol);
                    elementCell.setAttribute('data-number', element.number);
                } else {
                    // Buat sel kosong untuk unsur yang tidak ada di data
                    elementCell.className = 'element empty';
                    elementCell.textContent = '';
                }
            } else {
                // Buat sel kosong untuk posisi null/undefined
                elementCell.className = 'element empty';
                elementCell.textContent = '';
            }
            
            tableContainer.appendChild(elementCell);
        });
    });
}
// ----------------------------------------------------


// Setup event listeners untuk interaksi pengguna
function setupEventListeners() {
    const tableContainer = document.getElementById('periodicTable');
    const mixBtn = document.getElementById('mixBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    // Event listener untuk klik pada unsur
    tableContainer.addEventListener('click', function(e) {
        const elementCell = e.target.closest('.element');
        if (elementCell && !elementCell.classList.contains('empty')) {
            const symbol = elementCell.getAttribute('data-symbol');
            selectElement(symbol); // Menggunakan fungsi selectElement yang diperbarui
        }
    });
    
    // Event listener untuk tombol Campur
    mixBtn.addEventListener('click', mixElements);
    
    // Event listener untuk tombol Reset
    resetBtn.addEventListener('click', resetSelection);
}

// Fungsi untuk memilih/membatalkan unsur (DIPERBARUI)
function selectElement(symbol) {
    const element = elements.find(el => el.symbol === symbol);
    if (!element) return;
    
    // Tampilkan info unsur yang diklik
    showElementInfo(element);
    
    // Cek apakah unsur sudah dipilih
    const alreadySelected = selectedElements.includes(symbol);
    
    if (alreadySelected) {
        // Jika sudah dipilih, batalkan (remove dari array)
        selectedElements = selectedElements.filter(item => item !== symbol);
    } else {
        // Jika belum dipilih, tambahkan
        if (selectedElements.length < 2) {
            selectedElements.push(symbol);
        } else {
            // Jika sudah ada 2, ganti unsur pertama
            selectedElements[0] = symbol;
        }
    }
    
    // Update tampilan
    updateSubstanceSlots();
    updateMixButton();
    highlightSelectedElements();
}

// Tampilkan informasi detail unsur
function showElementInfo(element) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const elementDetails = document.getElementById('elementDetails');
    const reactionResult = document.getElementById('reactionResult');
    
    // Sembunyikan panel lain
    welcomeMessage.style.display = 'none';
    reactionResult.style.display = 'none';
    
    // Tampilkan panel detail unsur
    elementDetails.style.display = 'block';
    
    // Isi data unsur
    document.getElementById('elementSymbolLarge').textContent = element.symbol;
    document.getElementById('elementName').textContent = element.name;
    document.getElementById('elementNumber').textContent = `Nomor Atom: ${element.number}`;
    document.getElementById('elementCategory').textContent = element.category;
    document.getElementById('elementDescription').textContent = element.desc;
    document.getElementById('elementImage').innerHTML = element.image;
    
    currentElement = element;
}

// Tampilkan pesan selamat datang
function showWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const elementDetails = document.getElementById('elementDetails');
    const reactionResult = document.getElementById('reactionResult');
    
    elementDetails.style.display = 'none';
    reactionResult.style.display = 'none';
    welcomeMessage.style.display = 'block';
}

// Update slot zat yang dipilih (VERSI BARU DENGAN CLEARING)
function updateSubstanceSlots() {
    const substance1 = document.getElementById('substance1');
    const substance2 = document.getElementById('substance2');
    
    // Clear dulu (penting agar placeholder kembali jika slot dikosongkan)
    substance1.textContent = 'Pilih unsur pertama...';
    substance2.textContent = 'Pilih unsur kedua...';
    substance1.className = 'substance-slot';
    substance2.className = 'substance-slot';
    
    // Isi dengan yang dipilih
    if (selectedElements[0]) {
        substance1.textContent = selectedElements[0];
        substance1.className = 'substance-slot filled';
    }
    if (selectedElements[1]) {
        substance2.textContent = selectedElements[1];
        substance2.className = 'substance-slot filled';
    }
}

// Update status tombol Campur
function updateMixButton() {
    const mixBtn = document.getElementById('mixBtn');
    mixBtn.disabled = selectedElements.length !== 2;
}

// Highlight unsur yang sedang dipilih (DIPERBARUI)
function highlightSelectedElements() {
    // Hapus highlight dari semua unsur
    document.querySelectorAll('.element').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Highlight unsur yang dipilih
    selectedElements.forEach(symbol => {
        const elementCell = document.querySelector(`[data-symbol="${symbol}"]`);
        if (elementCell) {
            elementCell.classList.add('selected');
        }
    });
}

// Fungsi untuk mencampur dua unsur
function mixElements() {
    if (selectedElements.length !== 2) return;
    
    const [elem1, elem2] = selectedElements;
    const reaction = getReaction(elem1, elem2);
    
    showReactionResult(elem1, elem2, reaction);
}

// Cari reaksi antara dua unsur
function getReaction(a, b) {
    // Cari reaksi langsung A+B
    const directKey = `${a}+${b}`;
    if (reactions[directKey]) {
        return reactions[directKey];
    }
    
    // Cari reaksi kebalikan B+A
    const reverseKey = `${b}+${a}`;
    if (reactions[reverseKey]) {
        return reactions[reverseKey];
    }
    
    // Tidak ada reaksi yang diketahui
    return null;
}

// Tampilkan hasil reaksi
function showReactionResult(elem1, elem2, reaction) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const elementDetails = document.getElementById('elementDetails');
    const reactionResult = document.getElementById('reactionResult');
    
    // Sembunyikan panel lain
    welcomeMessage.style.display = 'none';
    elementDetails.style.display = 'none';
    
    // Tampilkan panel hasil reaksi
    reactionResult.style.display = 'block';
    
    // Definisi teks keamanan
    const safetyText = {
        'safe': 'AMAN',
        'warning': 'PERINGATAN',
        'danger': 'BAHAYA',
        'extreme': 'SANGAT BERBAHAYA!',
        'unknown': 'BELUM DIKETAHUI'
    };

    if (reaction) {
        // Tentukan status keamanan
        const safetyStatus = reaction.safety || 'unknown';

        // Add safety class ke kontainer hasil
        reactionResult.className = `reaction-result ${safetyStatus}`;

        // Tampilkan hasil reaksi yang diketahui
        document.getElementById('reactionFormula').textContent = reaction.formula;
        document.getElementById('reactionDescription').textContent = reaction.desc;
        document.getElementById('reactionImage').innerHTML = reaction.image;
        
        // Add safety badge ke judul
        document.getElementById('reactionTitle').innerHTML = 
            `${reaction.result} <span class="safety-badge ${safetyStatus}">${
                safetyText[safetyStatus]
            }</span>`;
            
    } else {
        // Tampilkan pesan fallback
        const safetyStatus = 'unknown'; // Fallback menggunakan unknown
        
        // Add safety class ke kontainer hasil
        reactionResult.className = `reaction-result ${safetyStatus}`;
        
        document.getElementById('reactionFormula').textContent = `${elem1} + ${elem2}`;
        document.getElementById('reactionDescription').textContent = 'Kombinasi unsur ini menghasilkan senyawa yang belum teridentifikasi dalam simulasi ini. Dalam kimia nyata, banyak faktor yang mempengaruhi reaksi antara unsur-unsur.';
        document.getElementById('reactionImage').innerHTML = '❓';
        
        // Add safety badge ke judul
        document.getElementById('reactionTitle').innerHTML = 
            `Hasil Tidak Dikenal <span class="safety-badge ${safetyStatus}">${
                safetyText[safetyStatus]
            }</span>`;
    }
}

// Reset semua pilihan dan kembali ke state awal
function resetSelection() {
    selectedElements = [];
    currentElement = null;
    
    // Update UI
    updateSubstanceSlots();
    updateMixButton();
    highlightSelectedElements();
    showWelcomeMessage();
}