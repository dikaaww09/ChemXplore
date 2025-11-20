// =========================================================================
// BAGIAN 1: DATA UNSUR KIMIA (118 Unsur) - SUDAH DIPERBAIKI
// =========================================================================
const elements = [
    // Periode 1
    { symbol: "H", name: "Hidrogen", number: 1, category: "Non-logam", color: "non-metal", desc: "Unsur paling ringan dan melimpah di alam semesta. Gas tidak berwarna, tidak berbau, dan sangat mudah terbakar.", image: "🚀" },
    { symbol: "He", name: "Helium", number: 2, category: "Gas Mulia", color: "noble-gas", desc: "Gas mulia paling ringan. Tidak berwarna, tidak berbau, tidak mudah terbakar, dan digunakan untuk balon.", image: "🎈" },

    // Periode 2
    { symbol: "Li", name: "Litium", number: 3, category: "Logam Alkali", color: "alkali-metal", desc: "Logam alkali paling ringan. Lunak, putih keperakan, dan digunakan dalam baterai litium-ion.", image: "🔋" },
    { symbol: "Be", name: "Berilium", number: 4, category: "Logam Alkali Tanah", color: "alkaline-earth", desc: "Logam alkali tanah yang ringan namun kuat. Digunakan dalam aerospace dan aplikasi nuklir.", image: "✈️" },
    { symbol: "B", name: "Boron", number: 5, category: "Metaloid", color: "metalloid", desc: "Metaloid dengan sifat antara logam dan non-logam. Penting untuk produksi kaca dan keramik.", image: "🔸" },
    { symbol: "C", name: "Karbon", number: 6, category: "Non-logam", color: "non-metal", desc: "Dasar kehidupan organik. Memiliki beberapa alotrop termasuk grafit, intan, dan graphene.", image: "💎" },
    { symbol: "N", name: "Nitrogen", number: 7, category: "Non-logam", color: "non-metal", desc: "Menyusun 78% atmosfer Bumi. Gas tidak berwarna, tidak berbau, penting untuk kehidupan.", image: "🌬️" },
    { symbol: "O", name: "Oksigen", number: 8, category: "Non-logam", color: "non-metal", desc: "Esensial untuk respirasi makhluk hidup. Menyusun 21% atmosfer dan paling melimpah di kerak Bumi.", image: "💨" },
    { symbol: "F", name: "Fluor", number: 9, category: "Halogen", color: "halogen", desc: "Halogen paling reaktif. Gas kuning pucat yang sangat korosif dan beracun.", image: "⚠️" },
    { symbol: "Ne", name: "Neon", number: 10, category: "Gas Mulia", color: "noble-gas", desc: "Gas mulia yang digunakan dalam lampu neon. Tidak berwarna dan tidak reaktif.", image: "💡" },

    // Periode 3
    { symbol: "Na", name: "Natrium", number: 11, category: "Logam Alkali", color: "alkali-metal", desc: "Logam alkali yang lunak dan sangat reaktif. Komponen utama garam dapur (NaCl).", image: "🧂" },
    { symbol: "Mg", name: "Magnesium", number: 12, category: "Logam Alkali Tanah", color: "alkaline-earth", desc: "Logam ringan yang penting untuk biologi. Terbakar dengan cahaya putih terang.", image: "🔥" },
    { symbol: "Al", name: "Aluminium", number: 13, category: "Logam Pasca-transisi", color: "post-transition", desc: "Logam ringan, kuat, dan tahan korosi. Digunakan luas dalam industri dan kemasan.", image: "🥫" },
    { symbol: "Si", name: "Silikon", number: 14, category: "Metaloid", color: "metalloid", desc: "Metaloid kedua paling melimpah. Dasar industri semikonduktor dan elektronik.", image: "💻" },
    { symbol: "P", name: "Fosfor", number: 15, category: "Non-logam", color: "non-metal", desc: "Non-logam yang penting untuk DNA dan energi sel. Memiliki beberapa alotrop.", image: "🧬" },
    { symbol: "S", name: "Belerang", number: 16, category: "Non-logam", color: "non-metal", desc: "Non-logam kuning yang penting untuk industri dan biologi. Berbau khas.", image: "🟨" },
    { symbol: "Cl", name: "Klor", number: 17, category: "Halogen", color: "halogen", desc: "Gas halogen hijau kekuningan yang sangat reaktif. Digunakan untuk pemurnian air.", image: "💧" },
    { symbol: "Ar", name: "Argon", number: 18, category: "Gas Mulia", color: "noble-gas", desc: "Gas mulia paling melimpah di atmosfer Bumi. Digunakan dalam pengelasan dan lampu.", image: "💠" },

    // Periode 4
    { symbol: "K", name: "Kalium", number: 19, category: "Logam Alkali", color: "alkali-metal", desc: "Logam alkali esensial untuk fungsi saraf dan otot. Sangat reaktif dengan air.", image: "💪" },
    { symbol: "Ca", name: "Kalsium", number: 20, category: "Logam Alkali Tanah", color: "alkaline-earth", desc: "Logam alkali tanah penting untuk tulang dan gigi. Juga untuk semen dan konstruksi.", image: "🦴" },
    { symbol: "Sc", name: "Skandium", number: 21, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi ringan yang langka. Digunakan dalam lampu hemat energi.", image: "💡" },
    { symbol: "Ti", name: "Titanium", number: 22, category: "Logam Transisi", color: "transition-metal", desc: "Logam kuat, ringan, dan tahan korosi. Digunakan dalam aerospace dan implan medis.", image: "✈️" },
    { symbol: "V", name: "Vanadium", number: 23, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi yang keras. Digunakan untuk memperkuat baja.", image: "🛡️" },
    { symbol: "Cr", name: "Kromium", number: 24, category: "Logam Transisi", color: "transition-metal", desc: "Logam mengilap tahan karat. Digunakan untuk pelapis krom dan stainless steel.", image: "✨" },
    { symbol: "Mn", name: "Mangan", number: 25, category: "Logam Transisi", color: "transition-metal", desc: "Logam penting untuk produksi baja dan baterai alkaline.", image: "⚙️" },
    { symbol: "Fe", name: "Besi", number: 26, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi penting untuk hemoglobin dan industri. Dapat berkarat.", image: "🛠️" },
    { symbol: "Co", name: "Kobalt", number: 27, category: "Logam Transisi", color: "transition-metal", desc: "Logam untuk baterai litium-ion dan pigmen biru.", image: "🔋" },
    { symbol: "Ni", name: "Nikel", number: 28, category: "Logam Transisi", color: "transition-metal", desc: "Logam untuk pelapis anti-karat dan baterai nikel-kadmium.", image: "🪙" },
    { symbol: "Cu", name: "Tembaga", number: 29, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi dengan konduktivitas tinggi. Digunakan untuk kabel dan koin.", image: "🔌" },
    { symbol: "Zn", name: "Seng", number: 30, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi penting untuk sistem kekebalan dan pelapis anti-karat.", image: "🛡️" },
    { symbol: "Ga", name: "Galium", number: 31, category: "Logam Pasca-transisi", color: "post-transition", desc: "Logam yang meleleh di tangan. Digunakan dalam semikonduktor.", image: "🫳" },
    { symbol: "Ge", name: "Germanium", number: 32, category: "Metaloid", color: "metalloid", desc: "Metaloid penting untuk elektronik awal dan serat optik.", image: "🔍" },
    { symbol: "As", name: "Arsen", number: 33, category: "Metaloid", color: "metalloid", desc: "Metaloid beracun yang digunakan dalam pestisida dan elektronik.", image: "☠️" },
    { symbol: "Se", name: "Selenium", number: 34, category: "Non-logam", color: "non-metal", desc: "Non-logam penting untuk enzim antioksidan dan fotosel.", image: "☀️" },
    { symbol: "Br", name: "Brom", number: 35, category: "Halogen", color: "halogen", desc: "Satu-satunya halogen cair. Cairan merah tua yang mudah menguap.", image: "🧪" },
    { symbol: "Kr", name: "Kripton", number: 36, category: "Gas Mulia", color: "noble-gas", desc: "Gas mulia digunakan dalam lampu kilat fotografi dan laser.", image: "📸" },

    // Periode 5
    { symbol: "Rb", name: "Rubidium", number: 37, category: "Logam Alkali", color: "alkali-metal", desc: "Logam alkali yang sangat reaktif. Digunakan dalam penelitian fisika.", image: "🔬" },
    { symbol: "Sr", name: "Stronsium", number: 38, category: "Logam Alkali Tanah", color: "alkaline-earth", desc: "Logam alkali tanah yang memberikan warna merah pada kembang api.", image: "🎆" },
    { symbol: "Y", name: "Itrium", number: 39, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi digunakan dalam LED dan superkonduktor.", image: "💡" },
    { symbol: "Zr", name: "Zirkonium", number: 40, category: "Logam Transisi", color: "transition-metal", desc: "Logam tahan korosi digunakan dalam reaktor nuklir dan perhiasan.", image: "⚛️" },
    { symbol: "Nb", name: "Niobium", number: 41, category: "Logam Transisi", color: "transition-metal", desc: "Logam digunakan dalam baja super kuat dan magnet superkonduktor.", image: "🧲" },
    { symbol: "Mo", name: "Molibdenum", number: 42, category: "Logam Transisi", color: "transition-metal", desc: "Logam penting untuk kekuatan baja dan enzim biologis.", image: "⚙️" },
    { symbol: "Tc", name: "Teknesium", number: 43, category: "Logam Transisi", color: "transition-metal", desc: "Unsur radioaktif buatan pertama. Digunakan dalam pencitraan medis.", image: "🏥" },
    { symbol: "Ru", name: "Rutenium", number: 44, category: "Logam Transisi", color: "transition-metal", desc: "Logam langka digunakan dalam elektronik dan katalis.", image: "💎" },
    { symbol: "Rh", name: "Rodium", number: 45, category: "Logam Transisi", color: "transition-metal", desc: "Logam mulia langka digunakan dalam katalis konverter mobil.", image: "🚗" },
    { symbol: "Pd", name: "Paladium", number: 46, category: "Logam Transisi", color: "transition-metal", desc: "Logam mulia digunakan dalam katalis dan perhiasan putih.", image: "💍" },
    { symbol: "Ag", name: "Perak", number: 47, category: "Logam Transisi", color: "transition-metal", desc: "Logam mulia dengan konduktivitas tertinggi. Digunakan untuk perhiasan dan elektronik.", image: "💍" },
    { symbol: "Cd", name: "Kadmium", number: 48, category: "Logam Transisi", color: "transition-metal", desc: "Logam beracun digunakan dalam baterai dan pigmen.", image: "🔋" },
    { symbol: "In", name: "Indium", number: 49, category: "Logam Pasca-transisi", color: "post-transition", desc: "Logam lunak digunakan dalam layar sentuh dan LED.", image: "📱" },
    { symbol: "Sn", name: "Timah", number: 50, category: "Logam Pasca-transisi", color: "post-transition", desc: "Logam digunakan untuk solder, pelapis kaleng, dan perunggu.", image: "🥫" },
    { symbol: "Sb", name: "Antimon", number: 51, category: "Metaloid", color: "metalloid", desc: "Metaloid digunakan dalam tahanan api dan baterai.", image: "🔥" },
    { symbol: "Te", name: "Telurium", number: 52, category: "Metaloid", color: "metalloid", desc: "Metaloid digunakan dalam panel surya dan CD rewritable.", image: "💿" },
    { symbol: "I", name: "Iodin", number: 53, category: "Halogen", color: "halogen", desc: "Halogen padat penting untuk hormon tiroid dan disinfektan.", image: "🩺" },
    { symbol: "Xe", name: "Xenon", number: 54, category: "Gas Mulia", color: "noble-gas", desc: "Gas mulia digunakan dalam lampu sorot dan anestesi.", image: "💡" },

    // Periode 6
    { symbol: "Cs", name: "Sesium", number: 55, category: "Logam Alkali", color: "alkali-metal", desc: "Logam alkali paling reaktif. Digunakan dalam jam atom.", image: "⏰" },
    { symbol: "Ba", name: "Barium", number: 56, category: "Logam Alkali Tanah", color: "alkaline-earth", desc: "Logam alkali tanah digunakan dalam pencitraan medis sinar-X.", image: "🩻" },
    { symbol: "La", name: "Lantanum", number: 57, category: "Lantanida", color: "lanthanide", desc: "Unsur pertama lantanida. Digunakan dalam baterai nikel-logam hidrida.", image: "🔋" },
    { symbol: "Hf", name: "Hafnium", number: 72, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi digunakan dalam reaktor nuklir dan prosesor.", image: "⚛️" },
    { symbol: "Ta", name: "Tantalum", number: 73, category: "Logam Transisi", color: "transition-metal", desc: "Logam tahan korosi digunakan dalam elektronik dan implan medis.", image: "📱" },
    { symbol: "W", name: "Wolfram", number: 74, category: "Logam Transisi", color: "transition-metal", desc: "Logam dengan titik leleh tertinggi. Digunakan dalam filamen lampu.", image: "💡" },
    { symbol: "Re", name: "Renium", number: 75, category: "Logam Transisi", color: "transition-metal", desc: "Salah satu logam paling langka dengan titik leleh sangat tinggi.", image: "🔥" },
    { symbol: "Os", name: "Osmium", number: 76, category: "Logam Transisi", color: "transition-metal", desc: "Logam paling padat. Digunakan dalam ujung pena dan paduan keras.", image: "✒️" },
    { symbol: "Ir", name: "Iridium", number: 77, category: "Logam Transisi", color: "transition-metal", desc: "Logam sangat tahan korosi. Langka di Bumi tapi melimpah di meteorit.", image: "☄️" },
    { symbol: "Pt", name: "Platina", number: 78, category: "Logam Transisi", color: "transition-metal", desc: "Logam mulia digunakan dalam katalis, perhiasan, dan peralatan lab.", image: "💎" },
    { symbol: "Au", name: "Emas", number: 79, category: "Logam Transisi", color: "transition-metal", desc: "Logam mulia yang sangat berharga. Tahan korosi dan mudah dibentuk.", image: "🥇" },
    { symbol: "Hg", name: "Raksa", number: 80, category: "Logam Transisi", color: "transition-metal", desc: "Satu-satunya logam cair pada suhu ruang. Beracun dan digunakan dalam termometer.", image: "🌡️" },
    { symbol: "Tl", name: "Talium", number: 81, category: "Logam Pasca-transisi", color: "post-transition", desc: "Logam sangat beracun digunakan dalam racun tikus dan detektor inframerah.", image: "☠️" },
    { symbol: "Pb", name: "Timbal", number: 82, category: "Logam Pasca-transisi", color: "post-transition", desc: "Logam berat yang lunak dan mudah dibentuk. Beracun dan dulu digunakan untuk pipa.", image: "⚖️" },
    { symbol: "Bi", name: "Bismut", number: 83, category: "Logam Pasca-transisi", color: "post-transition", desc: "Logam berat dengan toksisitas rendah. Digunakan dalam kosmetik dan obat.", image: "💄" },
    { symbol: "Po", name: "Polonium", number: 84, category: "Metaloid", color: "metalloid", desc: "Metaloid radioaktif sangat beracun. Digunakan dalam sumber neutron.", image: "☢️" },
    { symbol: "At", name: "Astatin", number: 85, category: "Halogen", color: "halogen", desc: "Halogen radioaktif paling langka di kerak Bumi.", image: "⚛️" },
    { symbol: "Rn", name: "Radon", number: 86, category: "Gas Mulia", color: "noble-gas", desc: "Gas mulia radioaktif yang dapat menyebabkan kanker paru-paru.", image: "🏚️" },

    // Periode 7
    { symbol: "Fr", name: "Fransium", number: 87, category: "Logam Alkali", color: "alkali-metal", desc: "Logam alkali radioaktif paling langka dan tidak stabil.", image: "⚛️" },
    { symbol: "Ra", name: "Radium", number: 88, category: "Logam Alkali Tanah", color: "alkaline-earth", desc: "Logam alkali tanah radioaktif. Dulu digunakan dalam cat bercahaya.", image: "✨" },
    { symbol: "Ac", name: "Aktinium", number: 89, category: "Aktinida", color: "actinide", desc: "Unsur pertama aktinida. Radioaktif dan digunakan dalam sumber neutron.", image: "⚛️" },
    { symbol: "Rf", name: "Ruterfordium", number: 104, category: "Logam Transisi", color: "transition-metal", desc: "Unsur transisi superberat sintetis.", image: "⚛️" },
    { symbol: "Db", name: "Dubnium", number: 105, category: "Logam Transisi", color: "transition-metal", desc: "Unsur sintetis sangat radioaktif dengan waktu paruh pendek.", image: "⚛️" },
    { symbol: "Sg", name: "Seaborgium", number: 106, category: "Logam Transisi", color: "transition-metal", desc: "Unsur sintetis dinamai dari Glenn T. Seaborg.", image: "👨‍🔬" },
    { symbol: "Bh", name: "Bohrium", number: 107, category: "Logam Transisi", color: "transition-metal", desc: "Unsur sintetis dinamai dari Niels Bohr.", image: "👨‍🔬" },
    { symbol: "Hs", name: "Hasium", number: 108, category: "Logam Transisi", color: "transition-metal", desc: "Unsur sintetis dengan waktu paruh sangat singkat.", image: "⚛️" },
    { symbol: "Mt", name: "Meitnerium", number: 109, category: "Logam Transisi", color: "transition-metal", desc: "Unsur sintetis dinamai dari Lise Meitner.", image: "👩‍🔬" },
    { symbol: "Ds", name: "Darmstadtium", number: 110, category: "Logam Transisi", color: "transition-metal", desc: "Unsur sintetis dibuat di Darmstadt, Jerman.", image: "🇩🇪" },
    { symbol: "Rg", name: "Roentgenium", number: 111, category: "Logam Transisi", color: "transition-metal", desc: "Unsur sintetis dinamai dari Wilhelm Röntgen.", image: "👨‍🔬" },
    { symbol: "Cn", name: "Kopernisium", number: 112, category: "Logam Transisi", color: "transition-metal", desc: "Unsur sintetis dinamai dari Nicolaus Copernicus.", image: "👨‍🔬" },
    { symbol: "Nh", name: "Nihonium", number: 113, category: "Logam Pasca-transisi", color: "post-transition", desc: "Unsur sintetis pertama yang ditemukan di Asia.", image: "🇯🇵" },
    { symbol: "Fl", name: "Flerovium", number: 114, category: "Logam Pasca-transisi", color: "post-transition", desc: "Unsur sintetis superberat.", image: "⚛️" },
    { symbol: "Mc", name: "Moscovium", number: 115, category: "Logam Pasca-transisi", color: "post-transition", desc: "Unsur sintetis dinamai dari Moscow.", image: "🇷🇺" },
    { symbol: "Lv", name: "Livermorium", number: 116, category: "Logam Pasca-transisi", color: "post-transition", desc: "Unsur sintetis dinamai dari Lawrence Livermore National Laboratory.", image: "🔬" },
    { symbol: "Ts", name: "Tenesin", number: 117, category: "Halogen", color: "halogen", desc: "Halogen sintetis superberat.", image: "⚛️" },
    { symbol: "Og", name: "Oganeson", number: 118, category: "Gas Mulia", color: "noble-gas", desc: "Unsur sintetis terberat, dinamai dari Yuri Oganessian.", image: "👨‍🔬" },

    // Lantanida (Z=58 sampai Z=71)
    { symbol: "Ce", name: "Serium", number: 58, category: "Lantanida", color: "lanthanide", desc: "Lantanida paling melimpah. Digunakan dalam katalis konverter.", image: "🚗" },
    { symbol: "Pr", name: "Praseodimium", number: 59, category: "Lantanida", color: "lanthanide", desc: "Lantanida digunakan dalam magnet kuat dan kaca khusus.", image: "🧲" },
    { symbol: "Nd", name: "Neodimium", number: 60, category: "Lantanida", color: "lanthanide", desc: "Lantanida untuk magnet neodimium yang sangat kuat.", image: "🧲" },
    { symbol: "Pm", name: "Prometium", number: 61, category: "Lantanida", color: "lanthanide", desc: "Lantanida radioaktif digunakan dalam baterai nuklir.", image: "⚛️" },
    { symbol: "Sm", name: "Samarium", number: 62, category: "Lantanida", color: "lanthanide", desc: "Lantanida untuk magnet samarium-kobalt.", image: "🧲" },
    { symbol: "Eu", name: "Europium", number: 63, category: "Lantanida", color: "lanthanide", desc: "Lantanida memberikan warna merah pada TV dan lampu fluoresen.", image: "📺" },
    { symbol: "Gd", name: "Gadolinium", number: 64, category: "Lantanida", color: "lanthanide", desc: "Lantanida digunakan dalam pencitraan resonansi magnetik (MRI).", image: "🏥" },
    { symbol: "Tb", name: "Terbium", number: 65, category: "Lantanida", color: "lanthanide", desc: "Lantanida untuk lampu fluoresen dan magnet.", image: "💡" },
    { symbol: "Dy", name: "Disprosium", number: 66, category: "Lantanida", color: "lanthanide", desc: "Lantanida untuk magnet kuat pada motor listrik.", image: "🔋" },
    { symbol: "Ho", name: "Holmium", number: 67, category: "Lantanida", color: "lanthanide", desc: "Lantanida dengan sifat magnetik terkuat.", image: "🧲" },
    { symbol: "Er", name: "Erbium", number: 68, category: "Lantanida", color: "lanthanide", desc: "Lantanida digunakan dalam serat optik dan laser.", image: "📡" },
    { symbol: "Tm", name: "Tulium", number: 69, category: "Lantanida", color: "lanthanide", desc: "Lantanida langka digunakan dalam peralatan medis portabel.", image: "🩺" },
    { symbol: "Yb", name: "Iterbium", number: 70, category: "Lantanida", color: "lanthanide", desc: "Lantanida digunakan dalam laser dan penguat sinyal.", image: "📡" },
    { symbol: "Lu", name: "Lutesium", number: 71, category: "Lantanida", color: "lanthanide", desc: "Lantanida terberat dan paling keras.", image: "💎" },

    // Aktinida (Z=90 sampai Z=103)
    { symbol: "Th", name: "Torium", number: 90, category: "Aktinida", color: "actinide", desc: "Aktinida radioaktif digunakan dalam paduan logam dan energi nuklir.", image: "⚛️" },
    { symbol: "Pa", name: "Protaktinium", number: 91, category: "Aktinida", color: "actinide", desc: "Aktinida sangat langka dan radioaktif.", image: "⚛️" },
    { symbol: "U", name: "Uranium", number: 92, category: "Aktinida", color: "actinide", desc: "Unsur radioaktif berat. Digunakan sebagai bahan bakar nuklir dan senjata.", image: "☢️" },
    { symbol: "Np", name: "Neptunium", number: 93, category: "Aktinida", color: "actinide", desc: "Aktinida buatan pertama. Digunakan dalam detektor neutron.", image: "⚛️" },
    { symbol: "Pu", name: "Plutonium", number: 94, category: "Aktinida", color: "actinide", desc: "Aktinida digunakan dalam senjata nuklir dan pembangkit listrik.", image: "☢️" },
    { symbol: "Am", name: "Amerisium", number: 95, category: "Aktinida", color: "actinide", desc: "Aktinida digunakan dalam detektor asap.", image: "🚬" },
    { symbol: "Cm", name: "Curium", number: 96, category: "Aktinida", color: "actinide", desc: "Aktinida digunakan dalam sumber tenaga satelit dan pesawat ruang angkasa.", image: "🛰️" },
    { symbol: "Bk", name: "Berkelium", number: 97, category: "Aktinida", color: "actinide", desc: "Aktinida disintesis dalam jumlah sangat kecil untuk penelitian.", image: "🔬" },
    { symbol: "Cf", name: "Kalifornium", number: 98, category: "Aktinida", color: "actinide", desc: "Aktinida digunakan dalam starter reaktor nuklir dan pengobatan kanker.", image: "🏥" },
    { symbol: "Es", name: "Einsteinium", number: 99, category: "Aktinida", color: "actinide", desc: "Aktinida dinamai dari Albert Einstein. Untuk penelitian ilmiah.", image: "👨‍🔬" },
    { symbol: "Fm", name: "Fermium", number: 100, category: "Aktinida", color: "actinide", desc: "Aktinida dinamai dari Enrico Fermi. Hanya untuk penelitian.", image: "👨‍🔬" },
    { symbol: "Md", name: "Mendelevium", number: 101, category: "Aktinida", color: "actinide", desc: "Aktinida dinamai dari Dmitri Mendeleev. Untuk penelitian saja.", image: "👨‍🔬" },
    { symbol: "No", name: "Nobelium", number: 102, category: "Aktinida", color: "actinide", desc: "Aktinida dinamai dari Alfred Nobel. Sangat tidak stabil.", image: "🏆" },
    { symbol: "Lr", name: "Lawrensium", number: 103, category: "Aktinida", color: "actinide", desc: "Aktinida terakhir. Dinamai dari Ernest Lawrence.", image: "👨‍🔬" }
];

// Layout tabel periodik LENGKAP (118 Unsur)
const periodicTableLayout = [
    [1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2],
    [3, 4, null, null, null, null, null, null, null, null, null, null, 5, 6, 7, 8, 9, 10],
    [11, 12, null, null, null, null, null, null, null, null, null, null, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    [87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    [null, null, null, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, null],
    [null, null, null, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, null]
];

// =========================================================================
// BAGIAN 2: DATA REAKSI KIMIA (SUDAH DIPERBAIKI)
// =========================================================================

// Data reaksi kimia yang sudah DIBERSIHKAN (HANYA 2 UNSUR)
const reactions = {
    // ==================== REAKSI AIR & HIDROGEN ====================
    "H+O": {
        result: "Air",
        formula: "H₂O",
        desc: "Hidrogen dan Oksigen bereaksi membentuk air, senyawa esensial untuk kehidupan.",
        image: "💧",
        safety: "safe"
    },

    // ==================== REAKSI OKSIDA ====================
    "C+O": {
        result: "Karbon Dioksida",
        formula: "CO₂",
        desc: "Gas rumah kaca yang penting untuk fotosintesis.",
        image: "🌫️",
        safety: "safe"
    },
    "C+O2": {
        result: "Karbon Monoksida",
        formula: "CO",
        desc: "Gas beracun tak berwarna dan tak berbau. MEMATIKAN!",
        image: "💀",
        safety: "extreme"
    },
    "S+O": {
        result: "Belerang Dioksida",
        formula: "SO₂",
        desc: "Gas penyebab hujan asam. Iritasi pernapasan.",
        image: "🌋",
        safety: "danger"
    },
    "N+O": {
        result: "Nitrogen Oksida",
        formula: "NO",
        desc: "Gas beracun, prekursor hujan asam.",
        image: "🏭",
        safety: "danger"
    },
    "N+O2": {
        result: "Nitrogen Dioksida",
        formula: "NO₂",
        desc: "Gas coklat beracun, iritasi paru-paru.",
        image: "🌫️",
        safety: "extreme"
    },
    "P+O": {
        result: "Fosfor Pentoksida",
        formula: "P₂O₅",
        desc: "Bahan pengering kuat, bereaksi hebat dengan air.",
        image: "🔥",
        safety: "danger"
    },
    "Si+O": {
        result: "Silikon Dioksida",
        formula: "SiO₂",
        desc: "Penyusun utama pasir dan kaca.",
        image: "🏖️",
        safety: "safe"
    },
    "Ca+O": {
        result: "Kalsium Oksida",
        formula: "CaO",
        desc: "Kapur tohor, bereaksi eksotermik dengan air.",
        image: "🏗️",
        safety: "warning"
    },
    "Mg+O": {
        result: "Magnesium Oksida",
        formula: "MgO",
        desc: "Terbakar dengan cahaya putih terang. Blitzlicht fotografi.",
        image: "📸",
        safety: "danger"
    },
    "Ba+O": {
        result: "Barium Oksida",
        formula: "BaO",
        desc: "Beracun, digunakan dalam kaca dan keramik.",
        image: "⚗️",
        safety: "danger"
    },
    "Sr+O": {
        result: "Stronsium Oksida",
        formula: "SrO",
        desc: "Memberikan warna merah pada kembang api.",
        image: "🎆",
        safety: "warning"
    },
    "Be+O": {
        result: "Berilium Oksida",
        formula: "BeO",
        desc: "Konduktor panas excellent. BERACUN jika terhirup!",
        image: "☠️",
        safety: "extreme"
    },
    "Ra+O": {
        result: "Radium Oksida",
        formula: "RaO",
        desc: "SANGAT RADIOAKTIF! Penyebab kematian Marie Curie.",
        image: "☢️",
        safety: "extreme"
    },
    "Fe+O": {
        result: "Besi(III) Oksida",
        formula: "Fe₂O₃",
        desc: "Karat, proses korosi alami besi.",
        image: "🦠",
        safety: "safe"
    },
    "Cu+O": {
        result: "Tembaga(II) Oksida",
        formula: "CuO",
        desc: "Patina hijau pada tembaga.",
        image: "🏺",
        safety: "safe"
    },
    "Zn+O": {
        result: "Seng Oksida",
        formula: "ZnO",
        desc: "Salep kulit dan tabir surya.",
        image: "🧴",
        safety: "safe"
    },
    "Pb+O": {
        result: "Timbal(II) Oksida",
        formula: "PbO",
        desc: "Beracun, digunakan dalam kaca dan keramik.",
        image: "⚖️",
        safety: "danger"
    },
    "Cd+O": {
        result: "Kadmium Oksida",
        formula: "CdO",
        desc: "Beracun, karsinogenik. SANGAT BERBAHAYA!",
        image: "💀",
        safety: "extreme"
    },
    "Tl+O": {
        result: "Talium(I) Oksida",
        formula: "Tl₂O",
        desc: "Racun tikus yang sangat efektif. MEMATIKAN!",
        image: "🐀",
        safety: "extreme"
    },
    "As+O": {
        result: "Arsen Trioksida",
        formula: "As₂O₃",
        desc: "Racun klasik yang tak berbau dan tak berasa. MEMATIKAN!",
        image: "💀",
        safety: "extreme"
    },
    "Al+O": {
        result: "Aluminium Oksida",
        formula: "Al₂O₃",
        desc: "Safir dan ruby. Lapisan pelindung aluminium.",
        image: "💎",
        safety: "safe"
    },
    "Ti+O": {
        result: "Titanium Dioksida",
        formula: "TiO₂",
        desc: "Pigmen putih untuk cat dan tabir surya.",
        image: "🎨",
        safety: "safe"
    },
    "Cr+O": {
        result: "Kromium(III) Oksida",
        formula: "Cr₂O₃",
        desc: "Pigmen hijau, tahan panas.",
        image: "🎨",
        safety: "warning"
    },
    "Mn+O": {
        result: "Mangan Dioksida",
        formula: "MnO₂",
        desc: "Depolarizer baterai sel kering.",
        image: "🔋",
        safety: "warning"
    },
    "Ni+O": {
        result: "Nikel(II) Oksida",
        formula: "NiO",
        desc: "Pigmen dan katalis.",
        image: "⚗️",
        safety: "warning"
    },
    "Co+O": {
        result: "Kobalt(II) Oksida",
        formula: "CoO",
        desc: "Pigmen biru untuk keramik.",
        image: "🔵",
        safety: "warning"
    },
    "W+O": {
        result: "Wolfram Trioksida",
        formula: "WO₃",
        desc: "Pigmen kuning dan katalis.",
        image: "🎨",
        safety: "safe"
    },
    "Mo+O": {
        result: "Molibdenum Trioksida",
        formula: "MoO₃",
        desc: "Katalis dan pigmen.",
        image: "⚗️",
        safety: "warning"
    },
    "V+O": {
        result: "Vanadium Pentoksida",
        formula: "V₂O₅",
        desc: "Katalis untuk asam sulfat.",
        image: "🏭",
        safety: "danger"
    },
    "U+O": {
        result: "Uranium Dioksida",
        formula: "UO₂",
        desc: "Bahan bakar nuklir. SANGAT RADIOAKTIF!",
        image: "⚛️",
        safety: "extreme"
    },
    "Pu+O": {
        result: "Plutonium Dioksida",
        formula: "PuO₂",
        desc: "Bahan bakar nuklir dan komponen senjata nuklir. SANGAT RADIOAKTIF!",
        image: "💀",
        safety: "extreme"
    },
    "Th+O": {
        result: "Torium Dioksida",
        formula: "ThO₂",
        desc: "Bahan bakar nuklir generasi baru. RADIOAKTIF!",
        image: "⚛️",
        safety: "extreme"
    },
    "Xe+O": {
        result: "Xenon Trioksida",
        formula: "XeO₃",
        desc: "SANGAT EKSPLOSIF! Xenon oksida tidak stabil.",
        image: "💥",
        safety: "extreme"
    },

    // ==================== REAKSI HALOGEN & GARAM ====================
    "H+F": {
        result: "Asam Fluorida",
        formula: "HF",
        desc: "Asam super korosif yang dapat melarutkan kaca. SANGAT BERBAHAYA!",
        image: "☠️",
        safety: "extreme"
    },
    "H+Cl": {
        result: "Asam Klorida",
        formula: "HCl",
        desc: "Asam kuat untuk industri dan pencernaan.",
        image: "🧪",
        safety: "warning"
    },
    "H+Br": {
        result: "Asam Bromida",
        formula: "HBr",
        desc: "Asam kuat, iritasi kulit dan mata.",
        image: "⚠️",
        safety: "danger"
    },
    "H+I": {
        result: "Asam Iodida",
        formula: "HI",
        desc: "Asam reduktor kuat, beracun.",
        image: "🧪",
        safety: "danger"
    },
    "Na+Cl": {
        result: "Natrium Klorida",
        formula: "NaCl",
        desc: "Garam dapur, bumbu masak dan pengawet.",
        image: "🧂",
        safety: "safe"
    },
    "Na+F": {
        result: "Natrium Fluorida",
        formula: "NaF",
        desc: "Pasta gigi anti gigi berlubang. Beracun dalam dosis besar.",
        image: "🦷",
        safety: "warning"
    },
    "Na+Br": {
        result: "Natrium Bromida",
        formula: "NaBr",
        desc: "Sedatif dan obat kejang. Depresan SSP.",
        image: "💊",
        safety: "warning"
    },
    "Na+I": {
        result: "Natrium Iodida",
        formula: "NaI",
        desc: "Sumber iodin untuk tiroid dan fotografi.",
        image: "📸",
        safety: "safe"
    },
    "K+Cl": {
        result: "Kalium Klorida",
        formula: "KCl",
        desc: "Pupuk dan injeksi mati rasa. STOP JANTUNG dalam dosis tinggi!",
        image: "💀",
        safety: "extreme"
    },
    "K+F": {
        result: "Kalium Fluorida",
        formula: "KF",
        desc: "Beracun, digunakan dalam fluorinasi.",
        image: "⚠️",
        safety: "danger"
    },
    "Li+Cl": {
        result: "Litium Klorida",
        formula: "LiCl",
        desc: "Pengering udara dan obat bipolar.",
        image: "💊",
        safety: "warning"
    },
    "Rb+Cl": {
        result: "Rubidium Klorida",
        formula: "RbCl",
        desc: "Penanda biologi, sedikit radioaktif.",
        image: "🔬",
        safety: "warning"
    },
    "Cs+Cl": {
        result: "Sesium Klorida",
        formula: "CsCl",
        desc: "Untuk sentrifugasi density gradient.",
        image: "⚗️",
        safety: "warning"
    },
    "Al+Cl": {
        result: "Aluminium Klorida",
        formula: "AlCl₃",
        desc: "Katalis Friedel-Crafts. Korosif dan berasap.",
        image: "⚗️",
        safety: "danger"
    },
    "Ti+Cl": {
        result: "Titanium Tetraklorida",
        formula: "TiCl₄",
        desc: "Bereaksi dengan air menghasilkan awan putih. Iritasi!",
        image: "☁️",
        safety: "danger"
    },
    "Au+Cl": {
        result: "Emas(III) Klorida",
        formula: "AuCl₃",
        desc: "Senyawa emas untuk electroplating.",
        image: "👑",
        safety: "warning"
    },
    "Pt+Cl": {
        result: "Platina(II) Klorida",
        formula: "PtCl₂",
        desc: "Katalis penting dalam industri.",
        image: "⚗️",
        safety: "warning"
    },
    "U+F": {
        result: "Uranium Heksafluorida",
        formula: "UF₆",
        desc: "Digunakan dalam pengayaan uranium untuk senjata nuklir. RADIOAKTIF!",
        image: "☢️",
        safety: "extreme"
    },
    "Xe+F": {
        result: "Xenon Difluorida",
        formula: "XeF₂",
        desc: "Salah satu senyawa gas mulia yang pertama dibuat. EKSPLOSIF!",
        image: "💣",
        safety: "extreme"
    },
    "Kr+F": {
        result: "Kripton Difluorida",
        formula: "KrF₂",
        desc: "Senyawa kripton yang sangat tidak stabil dan reaktif.",
        image: "⚡",
        safety: "extreme"
    },
    "Rn+F": {
        result: "Radon Difluorida",
        formula: "RnF₂",
        desc: "Senyawa radioaktif yang sangat berbahaya.",
        image: "☢️",
        safety: "extreme"
    },
    "He+F": {
        result: "Tidak Bereaksi",
        formula: "Tidak Ada",
        desc: "Helium adalah gas mulia dan tidak membentuk senyawa stabil.",
        image: "🚫",
        safety: "safe"
    },
    "Ne+F": {
        result: "Tidak Bereaksi",
        formula: "Tidak Ada",
        desc: "Neon terlalu stabil untuk bereaksi dengan fluor.",
        image: "🚫",
        safety: "safe"
    },
    "Ar+F": {
        result: "Tidak Bereaksi",
        formula: "Tidak Ada",
        desc: "Argon tidak bereaksi dengan fluor pada kondisi normal.",
        image: "🚫",
        safety: "safe"
    },

    // ==================== REAKSI HIDRIDA ====================
    "Na+H": {
        result: "Natrium Hidrida",
        formula: "NaH",
        desc: "Bereaksi hebat dengan air menghasilkan hidrogen yang mudah meledak.",
        image: "💥",
        safety: "extreme"
    },
    "K+H": {
        result: "Kalium Hidrida",
        formula: "KH",
        desc: "LEBIH EKSPLOSIF dari natrium! Sangat reaktif dengan air.",
        image: "💣",
        safety: "extreme"
    },
    "Li+H": {
        result: "Litium Hidrida",
        formula: "LiH",
        desc: "Digunakan dalam produksi tritium untuk senjata nuklir.",
        image: "☢️",
        safety: "extreme"
    },
    "Rb+H": {
        result: "Rubidium Hidrida",
        formula: "RbH",
        desc: "SANGAT EKSPLOSIF! Lebih reaktif dari kalium.",
        image: "💥",
        safety: "extreme"
    },
    "Cs+H": {
        result: "Sesium Hidrida",
        formula: "CsH",
        desc: "PALING EKSPLOSIF! Bereaksi hebat bahkan dengan es.",
        image: "💣",
        safety: "extreme"
    },
    "Ca+H": {
        result: "Kalsium Hidrida",
        formula: "CaH₂",
        desc: "Sumber hidrogen, pengering kuat.",
        image: "💧",
        safety: "danger"
    },
    "Mg+H": {
        result: "Magnesium Hidrida",
        formula: "MgH₂",
        desc: "Penyimpanan hidrogen untuk sel bahan bakar.",
        image: "🔋",
        safety: "warning"
    },
    "Al+H": {
        result: "Aluminium Hidrida",
        formula: "AlH₃",
        desc: "Reduktor kuat dalam kimia organik.",
        image: "🧪",
        safety: "danger"
    },

    // ==================== REAKSI ASAM/GAS BERACUN ====================
    "H+S": {
        result: "Hidrogen Sulfida",
        formula: "H₂S",
        desc: "Gas telur busuk. BERACUN dan mudah meledak!",
        image: "🥚",
        safety: "extreme"
    },
    "H+N": {
        result: "Amonia",
        formula: "NH₃",
        desc: "Bahan pupuk dan pembersih. Iritasi pernapasan.",
        image: "🌾",
        safety: "danger"
    },
    "H+P": {
        result: "Fosfin",
        formula: "PH₃",
        desc: "Gas beracun, bau bawang busuk. SANGAT BERBAHAYA!",
        image: "☠️",
        safety: "extreme"
    },

    // ==================== REAKSI SULFIDA & LOGAM BERAT ====================
    "Fe+S": {
        result: "Besi(II) Sulfida",
        formula: "FeS",
        desc: "Mineral pirit, sering dikira emas.",
        image: "💰",
        safety: "safe"
    },
    "Cu+S": {
        result: "Tembaga(I) Sulfida",
        formula: "Cu₂S",
        desc: "Bijih tembaga penting.",
        image: "⛏️",
        safety: "safe"
    },
    "Ag+S": {
        result: "Perak Sulfida",
        formula: "Ag₂S",
        desc: "Menyebabkan perak berubah hitam.",
        image: "⚫",
        safety: "safe"
    },
    "Zn+S": {
        result: "Seng Sulfida",
        formula: "ZnS",
        desc: "Fosfor dan pigmen.",
        image: "✨",
        safety: "safe"
    },
    "Hg+S": {
        result: "Raksa Sulfida",
        formula: "HgS",
        desc: "Bijih merkuri utama. SANGAT BERACUN!",
        image: "💀",
        safety: "extreme"
    },
    "Pb+S": {
        result: "Timbal(II) Sulfida",
        formula: "PbS",
        desc: "Bijih timbal utama. LOGAM BERAT BERACUN!",
        image: "💀",
        safety: "extreme"
    },
    "Cd+S": {
        result: "Kadmium Sulfida",
        formula: "CdS",
        desc: "Bijih kadmium. LOGAM BERAT BERACUN!",
        image: "☠️",
        safety: "extreme"
    },
    "Sb+S": {
        result: "Antimon Trisulfida",
        formula: "Sb₂S₃",
        desc: "Stibnit, bijih antimon.",
        image: "⛏️",
        safety: "danger"
    },
    "Bi+S": {
        result: "Bismut Sulfida",
        formula: "Bi₂S₃",
        desc: "Bijih bismut.",
        image: "💎",
        safety: "warning"
    },

    // ==================== REAKSI KARBIDA & SILISIDA ====================
    "Ca+C": {
        result: "Kalsium Karbida",
        formula: "CaC₂",
        desc: "Menghasilkan asetilena untuk las karbit.",
        image: "🔥",
        safety: "danger"
    },
    "Si+C": {
        result: "Silikon Karbida",
        formula: "SiC",
        desc: "Karborundum, abrasif sangat keras.",
        image: "💎",
        safety: "safe"
    },
    "Al+C": {
        result: "Aluminium Karbida",
        formula: "Al₄C₃",
        desc: "Bereaksi dengan air menghasilkan metana.",
        image: "🔥",
        safety: "danger"
    },
    "Ca+Si": {
        result: "Kalsium Silisida",
        formula: "CaSi₂",
        desc: "Menghasilkan silana dengan asam.",
        image: "🧪",
        safety: "danger"
    },
    "Mg+Si": {
        result: "Magnesium Silisida",
        formula: "Mg₂Si",
        desc: "Menghasilkan silana beracun dengan asam.",
        image: "☠️",
        safety: "extreme"
    },

    // ==================== REAKSI NITRIDA, FOSFIDA & BORIDA ====================
    "Li+N": {
        result: "Litium Nitrida",
        formula: "Li₃N",
        desc: "Salah satu nitrida logam yang stabil.",
        image: "🔬",
        safety: "warning"
    },
    "Mg+N": {
        result: "Magnesium Nitrida",
        formula: "Mg₃N₂",
        desc: "Bereaksi dengan air menghasilkan amonia.",
        image: "🌾",
        safety: "warning"
    },
    "Al+N": {
        result: "Aluminium Nitrida",
        formula: "AlN",
        desc: "Keramik konduktor panas.",
        image: "⚡",
        safety: "safe"
    },
    "Na+P": {
        result: "Natrium Fosfida",
        formula: "Na₃P",
        desc: "Menghasilkan fosfin beracun dengan air.",
        image: "☠️",
        safety: "extreme"
    },
    "Ca+P": {
        result: "Kalsium Fosfida",
        formula: "Ca₃P₂",
        desc: "Racun tikus, menghasilkan fosfin.",
        image: "🐀",
        safety: "extreme"
    },
    "Zn+P": {
        result: "Seng Fosfida",
        formula: "Zn₃P₂",
        desc: "Racun tikus yang efektif.",
        image: "🐀",
        safety: "extreme"
    },
    "Mg+B": {
        result: "Magnesium Diborida",
        formula: "MgB₂",
        desc: "Superkonduktor suhu tinggi.",
        image: "⚡",
        safety: "safe"
    },

    // ==================== REAKSI ORGANIK SEDERHANA (HANYA C+H) ====================
    "C+H": {
        result: "Metana",
        formula: "CH₄",
        desc: "Karbon dan Hidrogen membentuk metana, gas alam utama.",
        image: "🔥",
        safety: "danger"
    },
    "Au+C": {
        result: "Sianida Emas",
        formula: "Au(CN)₂",
        desc: "Digunakan dalam ekstraksi emas. SANGAT BERACUN!",
        image: "💀",
        safety: "extreme"
    },
    "Li+F": {
        result: "Litium Fluorida",
        formula: "LiF",
        desc: "Digunakan dalam keramik dan produksi aluminium. Relatif aman.",
        image: "⚗️",
        safety: "safe"
    },
    "Li+Br": {
        result: "Litium Bromida",
        formula: "LiBr",
        desc: "Pengering dan sedatif. Beracun dalam dosis tinggi.",
        image: "💊",
        safety: "warning"
    },
    "Rb+F": {
        result: "Rubidium Fluorida",
        formula: "RbF",
        desc: "Senyawa rubidium yang higroskopis.",
        image: "🧪",
        safety: "warning"
    },
    "Cs+F": {
        result: "Sesium Fluorida",
        formula: "CsF",
        desc: "Base kuat dalam kimia organik.",
        image: "⚗️",
        safety: "danger"
    },

    // ==================== REAKSI LOGAM ALKALI TANAH BARU ====================
    "Be+F": {
        result: "Berilium Fluorida",
        formula: "BeF₂",
        desc: "SANGAT BERACUN! Penyebab beriliosis.",
        image: "💀",
        safety: "extreme"
    },
    "Be+Cl": {
        result: "Berilium Klorida",
        formula: "BeCl₂",
        desc: "Katalis dan prekursor logam berilium. BERACUN!",
        image: "☠️",
        safety: "extreme"
    },
    "Mg+Cl": {
        result: "Magnesium Klorida",
        formula: "MgCl₂",
        desc: "Garam Epsom, pupuk, dan koagulan tofu.",
        image: "🧂",
        safety: "safe"
    },
    "Ca+Cl": {
        result: "Kalsium Klorida",
        formula: "CaCl₂",
        desc: "Pengering, pengawet makanan, dan pelebur es.",
        image: "🧊",
        safety: "safe"
    },
    "Sr+Cl": {
        result: "Stronsium Klorida",
        formula: "SrCl₂",
        desc: "Pasta gigi sensitif dan kembang api merah.",
        image: "🦷",
        safety: "warning"
    },
    "Ba+Cl": {
        result: "Barium Klorida",
        formula: "BaCl₂",
        desc: "Beracun, digunakan dalam industri minyak.",
        image: "⚠️",
        safety: "danger"
    },

    // ==================== REAKSI LOGAM TRANSISI BARU ====================
    "Sc+O": {
        result: "Skandium Oksida",
        formula: "Sc₂O₃",
        desc: "Untuk lampu intensitas tinggi dan alloy.",
        image: "💡",
        safety: "warning"
    },
    "Ti+N": {
        result: "Titanium Nitrida",
        formula: "TiN",
        desc: "Pelapis emas untuk peralatan medis dan perkakas.",
        image: "🛠️",
        safety: "safe"
    },
    "V+N": {
        result: "Vanadium Nitrida",
        formula: "VN",
        desc: "Memperkuat baja, coating tahan aus.",
        image: "⚙️",
        safety: "warning"
    },
    "Cr+Cl": {
        result: "Kromium Klorida",
        formula: "CrCl₃",
        desc: "Katalis dan mordant tekstil. Karsinogen!",
        image: "🎨",
        safety: "danger"
    },
    "Mn+Cl": {
        result: "Mangan Klorida",
        formula: "MnCl₂",
        desc: "Pupuk mikronutrien dan katalis.",
        image: "🌱",
        safety: "warning"
    },
    "Co+Cl": {
        result: "Kobalt Klorida",
        formula: "CoCl₂",
        desc: "Indikator kelembaban, berubah biru ke merah muda.",
        image: "💧",
        safety: "danger"
    },
    "Ni+Cl": {
        result: "Nikel Klorida",
        formula: "NiCl₂",
        desc: "Electroplating dan katalis. Karsinogen!",
        image: "⚗️",
        safety: "danger"
    },

    // ==================== REAKSI LOGAM POST-TRANSISI BARU ====================
    "Ga+As": {
        result: "Gallium Arsenida",
        formula: "GaAs",
        desc: "Semikonduktor untuk LED dan sel surya. BERACUN!",
        image: "💡",
        safety: "extreme"
    },
    "In+Sb": {
        result: "Indium Antimonida",
        formula: "InSb",
        desc: "Semikonduktor infrared dan magnetoresistor.",
        image: "📡",
        safety: "warning"
    },
    "Sn+O": {
        result: "Timah Oksida",
        formula: "SnO₂",
        desc: "Politur dan keramik konduktif.",
        image: "💎",
        safety: "safe"
    },
    "Pb+Cl": {
        result: "Timbal Klorida",
        formula: "PbCl₂",
        desc: "Beracun, sedikit larut dalam air.",
        image: "💀",
        safety: "extreme"
    },

    // ==================== REAKSI METALOID BARU ====================
    "B+N": {
        result: "Boron Nitrida",
        formula: "BN",
        desc: "Lubrikant dan material tahan panas.",
        image: "🛡️",
        safety: "safe"
    },
    "Si+C": {
        result: "Silikon Karbida",
        formula: "SiC",
        desc: "Carborundum, abrasif sangat keras.",
        image: "💎",
        safety: "safe"
    },
    "Ge+O": {
        result: "Germanium Oksida",
        formula: "GeO₂",
        desc: "Serat optik dan katalis.",
        image: "📡",
        safety: "warning"
    },
    "As+F": {
        result: "Arsen Trifluorida",
        formula: "AsF₃",
        desc: "SANGAT BERACUN! Cairan tak berwarna.",
        image: "☠️",
        safety: "extreme"
    },
    "Sb+Cl": {
        result: "Antimon Klorida",
        formula: "SbCl₃",
        desc: "Katalis dan fire retardant. Beracun!",
        image: "🔥",
        safety: "danger"
    },
    "Te+Cl": {
        result: "Telurium Klorida",
        formula: "TeCl₄",
        desc: "Reagen dalam sintesis organik.",
        image: "🧪",
        safety: "danger"
    },

    // ==================== REAKSI HALOGEN BARU ====================
    "F+Cl": {
        result: "Klor Trifluorida",
        formula: "ClF₃",
        desc: "SANGAT REAKTIF! Membakar pasir dan kaca. 'SETAN CAIR'!",
        image: "😈",
        safety: "extreme"
    },
    "Br+Cl": {
        result: "Brom Monoklorida",
        formula: "BrCl",
        desc: "Reagen brominasi, sangat reaktif.",
        image: "⚡",
        safety: "extreme"
    },
    "I+Cl": {
        result: "Iod Monoklorida",
        formula: "ICl",
        desc: "Reagen iodinasi, korosif.",
        image: "🧪",
        safety: "danger"
    },

    // ==================== REAKSI GAS MULIA BARU ====================
    "Xe+O+F": {
        result: "Xenon Oksitetrafluorida",
        formula: "XeOF₄",
        desc: "Senyawa gas mulia yang eksotis.",
        image: "🔬",
        safety: "extreme"
    },
    "Rn+O": {
        result: "Radon Oksida",
        formula: "RnO₃",
        desc: "SANGAT RADIOAKTIF! Hanya teori.",
        image: "☢️",
        safety: "extreme"
    },

    // ==================== REAKSI LANTHANIDA BARU ====================
    "La+O": {
        result: "Lantanum Oksida",
        formula: "La₂O₃",
        desc: "Kaca optik dan katalis.",
        image: "👓",
        safety: "warning"
    },
    "Ce+O": {
        result: "Serium Oksida",
        formula: "CeO₂",
        desc: "Politur kaca dan katalis converter.",
        image: "🚗",
        safety: "safe"
    },
    "Pr+O": {
        result: "Praseodimium Oksida",
        formula: "Pr₆O₁₁",
        desc: "Pigmen kuning untuk keramik.",
        image: "🎨",
        safety: "safe"
    },
    "Nd+O": {
        result: "Neodimium Oksida",
        formula: "Nd₂O₃",
        desc: "Laser dan magnet kuat.",
        image: "🧲",
        safety: "safe"
    },
    "Sm+O": {
        result: "Samarium Oksida",
        formula: "Sm₂O₃",
        desc: "Katalis dan keramik.",
        image: "⚗️",
        safety: "safe"
    },
    "Eu+O": {
        result: "Europium Oksida",
        formula: "Eu₂O₃",
        desc: "Fosfor merah untuk TV dan lampu.",
        image: "📺",
        safety: "safe"
    },
    "Gd+O": {
        result: "Gadolinium Oksida",
        formula: "Gd₂O₃",
        desc: "Agent kontras MRI dan neutron capture.",
        image: "🏥",
        safety: "warning"
    },
    "Tb+O": {
        result: "Terbium Oksida",
        formula: "Tb₄O₇",
        desc: "Fosfor hijau untuk lampu.",
        image: "💡",
        safety: "safe"
    },
    "Dy+O": {
        result: "Disprosium Oksida",
        formula: "Dy₂O₃",
        desc: "Keramik dan lampu metal halide.",
        image: "💡",
        safety: "safe"
    },
    "Ho+O": {
        result: "Holmium Oksida",
        formula: "Ho₂O₃",
        desc: "Pewarna kaca dan laser.",
        image: "🎨",
        safety: "safe"
    },
    "Er+O": {
        result: "Erbium Oksida",
        formula: "Er₂O₃",
        desc: "Serat optik dan laser kedokteran.",
        image: "📡",
        safety: "safe"
    },
    "Tm+O": {
        result: "Tulium Oksida",
        formula: "Tm₂O₃",
        desc: "Sumber radiasi portable.",
        image: "🩺",
        safety: "warning"
    },
    "Yb+O": {
        result: "Iterbium Oksida",
        formula: "Yb₂O₃",
        desc: "Keramik dan stainless steel.",
        image: "⚙️",
        safety: "safe"
    },
    "Lu+O": {
        result: "Lutesium Oksida",
        formula: "Lu₂O₃",
        desc: "Katalis cracking minyak.",
        image: "🛢️",
        safety: "safe"
    },

    // ==================== REAKSI AKTINIDA BARU ====================
    "Ac+O": {
        result: "Aktinium Oksida",
        formula: "Ac₂O₃",
        desc: "SANGAT RADIOAKTIF! Sumber neutron.",
        image: "☢️",
        safety: "extreme"
    },
    "Th+Cl": {
        result: "Torium Klorida",
        formula: "ThCl₄",
        desc: "RADIOAKTIF! Untuk lampu gas mantel.",
        image: "💡",
        safety: "extreme"
    },
    "Pa+Cl": {
        result: "Protaktinium Klorida",
        formula: "PaCl₅",
        desc: "SANGAT RADIOAKTIF DAN LANGKA!",
        image: "⚛️",
        safety: "extreme"
    },
    "Np+O": {
        result: "Neptunium Oksida",
        formula: "NpO₂",
        desc: "Bahan bakar nuklir alternatif.",
        image: "⚛️",
        safety: "extreme"
    },
    "Am+O": {
        result: "Amerisium Oksida",
        formula: "AmO₂",
        desc: "Sumber ionisasi detektor asap.",
        image: "🚬",
        safety: "extreme"
    },
    "Cm+O": {
        result: "Curium Oksida",
        formula: "Cm₂O₃",
        desc: "Sumber panas untuk satelit.",
        image: "🛰️",
        safety: "extreme"
    },

    // ==================== REAKSI LOGAM BERAT BARU ====================
    "Hg+Cl": {
        result: "Merkuri Klorida",
        formula: "HgCl₂",
        desc: "SANGAT BERACUN! Desinfektan dan fungisida.",
        image: "💀",
        safety: "extreme"
    },
    "Tl+Cl": {
        result: "Talium Klorida",
        formula: "TlCl",
        desc: "RACUN TIKUS MEMATIKAN! Tak berbau dan tak berasa.",
        image: "🐀",
        safety: "extreme"
    },
    "Bi+O": {
        result: "Bismut Oksida",
        formula: "Bi₂O₃",
        desc: "Pigmen dan kosmetik. Relatif aman.",
        image: "💄",
        safety: "safe"
    },

    // ==================== REAKSI SULFIDA BARU ====================
    "Mo+S": {
        result: "Molibdenum Disulfida",
        formula: "MoS₂",
        desc: "Lubrikant padat (Molybdenum disulfide).",
        image: "⚙️",
        safety: "safe"
    },
    "W+S": {
        result: "Tungsten Disulfida",
        formula: "WS₂",
        desc: "Lubrikant suhu tinggi.",
        image: "🔥",
        safety: "safe"
    },
    "Re+S": {
        result: "Renium Disulfida",
        formula: "ReS₂",
        desc: "Katalis dan semikonduktor.",
        image: "⚗️",
        safety: "warning"
    },

    // ==================== REAKSI HIDRIDA BARU ====================
    "B+H": {
        result: "Diborana",
        formula: "B₂H₆",
        desc: "Gas sangat mudah terbakar dan beracun.",
        image: "🔥",
        safety: "extreme"
    },
    "Si+H": {
        result: "Silana",
        formula: "SiH₄",
        desc: "Gas piroforik untuk semikonduktor.",
        image: "💨",
        safety: "extreme"
    },
    "Ge+H": {
        result: "Germana",
        formula: "GeH₄",
        desc: "Gas beracun untuk deposisi germanium.",
        image: "☠️",
        safety: "extreme"
    },

    // ==================== REAKSI KARBIDA BARU ====================
    "B+C": {
        result: "Boron Karbida",
        formula: "B₄C",
        desc: "Material armor dan abrasif.",
        image: "🛡️",
        safety: "safe"
    },
    "Ti+C": {
        result: "Titanium Karbida",
        formula: "TiC",
        desc: "Coating tool yang sangat keras.",
        image: "🛠️",
        safety: "safe"
    },
    "W+C": {
        result: "Tungsten Karbida",
        formula: "WC",
        desc: "Material cutting tool super keras.",
        image: "⚒️",
        safety: "safe"
    },

    // ==================== REAKSI NITRIDA BARU ====================
    "Al+N": {
        result: "Aluminium Nitrida",
        formula: "AlN",
        desc: "Substrat semikonduktor dan keramik.",
        image: "💎",
        safety: "safe"
    },
    "Ti+N": {
        result: "Titanium Nitrida",
        formula: "TiN",
        desc: "Coating emas untuk peralatan.",
        image: "✨",
        safety: "safe"
    },
    "Zr+N": {
        result: "Zirkonium Nitrida",
        formula: "ZrN",
        desc: "Coating dekoratif dan protektif.",
        image: "🛡️",
        safety: "safe"
    },

    // ==================== REAKSI FOSFIDA BARU ===================
    "Ga+P": {
        result: "Gallium Fosfida",
        formula: "GaP",
        desc: "Semikonduktor untuk LED merah dan hijau.",
        image: "💡",
        safety: "warning"
    },
    "In+P": {
        result: "Indium Fosfida",
        formula: "InP",
        desc: "Semikonduktor high-frequency.",
        image: "📡",
        safety: "warning"
    },

    // ==================== REAKSI LOGAM TRANSISI LANJUTAN ====================
    "Zr+O": {
        result: "Zirkonia",
        formula: "ZrO₂",
        desc: "Keramik gigi dan pisau.",
        image: "🦷",
        safety: "safe"
    },
    "Nb+O": {
        result: "Niobium Oksida",
        formula: "Nb₂O₅",
        desc: "Lensa kamera dan katalis.",
        image: "📷",
        safety: "safe"
    },
    "Ru+O": {
        result: "Rutenium Oksida",
        formula: "RuO₂",
        desc: "Elektroda dan resistor thick-film.",
        image: "⚡",
        safety: "warning"
    },
    "Rh+O": {
        result: "Rodium Oksida",
        formula: "Rh₂O₃",
        desc: "Katalis converter mobil.",
        image: "🚗",
        safety: "warning"
    },
    "Pd+O": {
        result: "Paladium Oksida",
        formula: "PdO",
        desc: "Katalis hydrogenasi.",
        image: "⚗️",
        safety: "warning"
    },
    "Ag+O": {
        result: "Perak Oksida",
        formula: "Ag₂O",
        desc: "Electrode baterai silver-oxide.",
        image: "🔋",
        safety: "safe"
    },
    "Cd+O": {
        result: "Kadmium Oksida",
        formula: "CdO",
        desc: "SANGAT BERACUN! Semikonduktor.",
        image: "💀",
        safety: "extreme"
    },

    // ==================== REAKSI GAS MULIA EKSPERIMENTAL ====================
    "Ar+F": {
        result: "Argon Fluorohidrida",
        formula: "HArF",
        desc: "Senyawa argon pertama yang ditemukan (2000).",
        image: "🔬",
        safety: "extreme"
    },
    "Kr+O": {
        result: "Kripton Oksida",
        formula: "KrO",
        desc: "Sangat tidak stabil, hanya teori.",
        image: "⚛️",
        safety: "extreme"
    },

   

};

// =========================================================================
// BAGIAN 3: FUNGSI LOGIKA (TETAP SAMA)
// =========================================================================

/**
 * Mendapatkan hasil reaksi kimia antara dua unsur.
 * @param {string} elem1 - Simbol unsur pertama.
 * @param {string} elem2 - Simbol unsur kedua.
 * @returns {object} Objek hasil reaksi atau objek fallback.
 */
function getReaction(elem1, elem2) {
    // Membuat kunci reaksi dalam dua urutan (untuk memastikan pencarian dua arah)
    const key1 = `${elem1}+${elem2}`;
    const key2 = `${elem2}+${elem1}`;

    // Mencari reaksi langsung
    if (reactions[key1]) return reactions[key1];
    if (reactions[key2]) return reactions[key2];

    // Logika untuk menangani kasus seperti C+O dan C+O2, N+O dan N+O2
    // Walaupun input user hanya 2 unsur, kita bisa periksa reaksi yang memiliki angka stoikiometri di key-nya.
    if ((elem1 === 'C' && elem2 === 'O') || (elem2 === 'C' && elem1 === 'O')) {
        if (reactions['C+O2']) return reactions['C+O2'];
    }
    if ((elem1 === 'N' && elem2 === 'O') || (elem2 === 'N' && elem1 === 'O')) {
        if (reactions['N+O2']) return reactions['N+O2'];
    }

    // Cari data unsur untuk fallback
    const element1 = elements.find(el => el.symbol === elem1);
    const element2 = elements.find(el => el.symbol === elem2);

    if (!element1 || !element2) {
        return {
            result: "Unsur Tidak Dikenal",
            formula: "N/A",
            desc: "Salah satu unsur tidak ditemukan dalam database.",
            image: "❌",
            safety: "unknown"
        };
    }

    // Logika fallback berdasarkan kategori (Gas Mulia tidak bereaksi)
    if (element1.category.includes("Gas Mulia") || element2.category.includes("Gas Mulia")) {
        return {
            result: "Tidak Bereaksi",
            formula: "Tidak Ada",
            desc: `${element1.name} dan ${element2.name} tidak bereaksi karena sifat gas mulia yang sangat stabil (kecuali dalam kondisi ekstrem).`,
            image: "🚫",
            safety: "safe"
        };
    }

    // Fallback umum
    return {
        result: "Reaksi Kimia Potensial",
        formula: "Belum Diketahui",
        desc: `Reaksi antara **${element1.name}** dan **${element2.name}** kemungkinan terjadi. Sifat reaktifnya tergantung pada kategori mereka: ${element1.category} dan ${element2.category}.`,
        image: "❓",
        safety: "warning"
    };
}

/**
 * Mendapatkan informasi unsur berdasarkan nama atau simbol.
 * @param {string} query - Nama atau simbol unsur.
 * @returns {object|undefined} Objek unsur atau undefined.
 */
function getElementInfo(query) {
    const cleanQuery = query.toLowerCase();
    const result = elements.find(el =>
        el.symbol.toLowerCase() === cleanQuery ||
        el.name.toLowerCase() === cleanQuery
    );
    return result;
}

/**
 * Mendapatkan simbol unsur dari namanya.
 * @param {string} name - Nama unsur.
 * @returns {string|null} Simbol unsur atau null.
 */
const getSymbolFromName = (name) => {
    // Normalisasi nama untuk pencarian, misalnya mengubah "klor" menjadi "Klor"
    const element = elements.find(el => el.name.toLowerCase() === name.toLowerCase());
    return element ? element.symbol : null;
};

/**
 * Fungsi utama untuk memproses permintaan.
 * @param {string} userQuery - Permintaan pengguna.
 * @returns {string} Jawaban dalam format Markdown.
 */
function processQuery(userQuery) {
    // Mengekstrak unsur dari query, mengabaikan huruf kapital
    const match = userQuery.match(/reaksi antara (\w+) dan (\w+)/i);

    if (match) {
        const name1 = match[1];
        const name2 = match[2];

        const symbol1 = getSymbolFromName(name1);
        const symbol2 = getSymbolFromName(name2);

        if (symbol1 && symbol2) {
            const reactionResult = getReaction(symbol1, symbol2);

            const elem1Data = elements.find(el => el.symbol === symbol1);
            const elem2Data = elements.find(el => el.symbol === symbol2);

            const safetyMapping = {
                "safe": "Aman",
                "warning": "Peringatan",
                "danger": "Berbahaya",
                "extreme": "**SANGAT BERBAHAYA!**",
                "unknown": "Tidak Diketahui"
            };
            const safetyText = safetyMapping[reactionResult.safety] || "Tidak Diketahui";

            return `## 🧪 Hasil Reaksi Kimia: ${elem1Data.name} + ${elem2Data.name}\n\n---\n\n* **Unsur 1:** **${elem1Data.name}** (${elem1Data.symbol}, Golongan: ${elem1Data.category})\n* **Unsur 2:** **${elem2Data.name}** (${elem2Data.symbol}, Golongan: ${elem2Data.category})\n\n### ${reactionResult.image} Produk Reaksi\n\n* **Nama Senyawa:** **${reactionResult.result}**\n* **Formula Kimia:** ${reactionResult.formula}\n* **Deskripsi:** ${reactionResult.desc}\n* **Tingkat Keamanan:** **${safetyText}**\n\n---\n\nApakah Anda ingin mencoba reaksi antara unsur kimia lain? (Contoh: "Reaksi antara Kalium dan Klor")`;

        } else {
            const notFound = [];
            if (!symbol1) notFound.push(name1);
            if (!symbol2) notFound.push(name2);

            return `⚠️ Maaf, saya tidak dapat menemukan data untuk unsur kimia: **${notFound.join(" dan ")}**. Silakan periksa ejaan.\n\nApakah Anda ingin mencari informasi tentang unsur tertentu? (Contoh: "Informasi Litium")`;
        }
    } else {
        // Jika tidak cocok dengan pola reaksi, coba cari info unsur
        const elementInfo = getElementInfo(userQuery.replace("informasi", "").trim());

        if (elementInfo) {
            return `## ${elementInfo.image} Informasi Unsur Kimia: ${elementInfo.name}\n\n---\n\n* **Simbol:** **${elementInfo.symbol}**\n* **Nomor Atom:** ${elementInfo.number}\n* **Kategori:** **${elementInfo.category}**\n* **Deskripsi:** ${elementInfo.desc}\n\nApakah Anda ingin mengetahui unsur lain atau reaksi kimia? (Contoh: "Reaksi antara Litium dan Fluor")`;
        } else {
            return "❌ Format pertanyaan tidak dikenali. Silakan ajukan pertanyaan dalam format:\n\n1.  **Informasi Unsur:** \"Informasi [Nama/Simbol Unsur]\" (Contoh: \"Informasi Litium\")\n2.  **Reaksi Kimia:** \"Reaksi antara [Unsur A] dan [Unsur B]\" (Contoh: \"Reaksi antara Kalium dan Klor\")";
        }
    }
}

// =========================================================================
// CONTOH PENGGUNAAN
// Anda dapat menguji kode dengan menjalankan fungsi processQuery dengan input:
// console.log(processQuery("Informasi Plutonium"));
// console.log(processQuery("Reaksi antara Litium dan Fluor"));
// console.log(processQuery("Reaksi antara Kalium dan Hidrogen"));
// =========================================================================