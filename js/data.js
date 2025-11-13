// Data lengkap unsur-unsur kimia (118 unsur)
const elements = [
    // Periode 1
    { symbol: "H", name: "Hidrogen", number: 1, category: "Non-logam", color: "non-metal", desc: "Unsur paling ringan dan melimpah di alam semesta. Gas tidak berwarna, tidak berbau, dan sangat mudah terbakar.", image: "🚀" },
    { symbol: "He", name: "Helium", number: 2, category: "Gas Mulia", color: "noble-gas", desc: "Gas mulia paling ringan. Tidak berwarna, tidak berbau, tidak mudah terbakar, dan digunakan untuk balon.", image: "🎈" },

    // Periode 2
    { symbol: "Li", name: "Litium", number: 3, category: "Logam Alkali", color: "alkali-metal", desc: "Logam alkali paling ringan. Lunak, putih keperakan, dan digunakan dalam baterai lithium-ion.", image: "🔋" },
    { symbol: "Be", name: "Berilium", number: 4, category: "Logam Alkali Tanah", color: "alkaline-earth", desc: "Logam alkali tanah yang ringan namun kuat. Digunakan dalam aerospace dan aplikasi nuklir.", image: "✈️" },
    { symbol: "B", name: "Boron", number: 5, category: "Metaloid", color: "metalloid", desc: "Metaloid dengan sifat antara logam dan non-logam. Penting untuk produksi kaca dan keramik.", image: "🔸" },
    { symbol: "C", name: "Karbon", number: 6, category: "Non-logam", color: "non-metal", desc: "Dasar kehidupan organik. Memiliki beberapa alotrop termasuk grafit, intan, dan graphene.", image: "💎" },
    { symbol: "N", name: "Nitrogen", number: 7, category: "Non-logam", color: "non-metal", desc: "Menyusun 78% atmosfer Bumi. Gas tidak berwarna, tidak berbau, penting untuk kehidupan.", image: "🌬️" },
    { symbol: "O", name: "Oksigen", number: 8, category: "Non-logam", color: "non-metal", desc: "Esensial untuk respirasi makhluk hidup. Menyusun 21% atmosfer dan paling melimpah di kerak Bumi.", image: "💨" },
    { symbol: "F", name: "Fluor", number: 9, category: "Halogen", color: "halogen", desc: "Halogen paling reaktif. Gas kuning pucat yang sangat korosif dan beracun.", image: "⚠️" }, // Diperbarui
    { symbol: "Ne", name: "Neon", number: 10, category: "Gas Mulia", color: "noble-gas", desc: "Gas mulia paling ringan. Tidak berwarna, tidak berbau, tidak mudah terbakar, dan digunakan untuk balon.", image: "🎈" },

    // Periode 3
    { symbol: "Na", name: "Natrium", number: 11, category: "Logam Alkali", color: "alkali-metal", desc: "Logam alkali yang lunak dan sangat reaktif. Komponen utama garam dapur (NaCl).", image: "🧂" },
    { symbol: "Mg", name: "Magnesium", number: 12, category: "Logam Alkali Tanah", color: "alkaline-earth", desc: "Logam ringan yang penting untuk biologi. Terbakar dengan cahaya putih terang.", image: "🔥" },
    { symbol: "Al", name: "Aluminium", number: 13, category: "Logam Pasca-transisi", color: "post-transition", desc: "Logam ringan, kuat, dan tahan korosi. Digunakan luas dalam industri dan kemasan.", image: "🥫" },
    { symbol: "Si", name: "Silikon", number: 14, category: "Metaloid", color: "metalloid", desc: "Metaloid kedua paling melimpah. Dasar industri semikonduktor dan elektronik.", image: "💻" },
    { symbol: "P", name: "Fosfor", number: 15, category: "Non-logam", color: "non-metal", desc: "Non-logam yang penting untuk DNA dan energi sel. Memiliki beberapa alotrop.", image: "🧬" },
    { symbol: "S", name: "Belerang", number: 16, category: "Non-logam", color: "non-metal", desc: "Non-logam kuning yang penting untuk industri dan biologi. Berbau khas.", image: "🟨" },
    { symbol: "Cl", name: "Klor", number: 17, category: "Halogen", color: "halogen", desc: "Gas halogen hijau kekuningan yang sangat reaktif. Digunakan untuk pemurnian air.", image: "💧" }, // Diperbarui
    { symbol: "Ar", name: "Argon", number: 18, category: "Gas Mulia", color: "noble-gas", desc: "Gas mulia paling melimpah di atmosfer Bumi. Digunakan dalam pengelasan dan lampu.", image: "💠" },

    // Periode 4
    { symbol: "K", name: "Kalium", number: 19, category: "Logam Alkali", color: "alkali-metal", desc: "Logam alkali esensial untuk fungsi saraf dan otot. Sangat reaktif dengan air.", image: "💪" },
    { symbol: "Ca", name: "Kalsium", number: 20, category: "Logam Alkali Tanah", color: "alkaline-earth", desc: "Logam alkali tanah penting untuk tulang dan gigi. Juga untuk semen dan konstruksi.", image: "🦴" },
    { symbol: "Sc", name: "Skandium", number: 21, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi ringan yang langka. Digunakan dalam lampu hemat energi.", image: "💡" },
    { symbol: "Ti", name: "Titanium", number: 22, category: "Logam Transisi", color: "transition-metal", desc: "Logam kuat, ringan, dan tahan korosi. Digunakan dalam aerospace dan implan medis.", image: "✈️" },
    { symbol: "V", name: "Vanadium", number: 23, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi yang keras. Digunakan untuk memperkuat baja.", image: "🛡️" },
    { symbol: "Cr", name: "Kromium", number: 24, category: "Logam Transisi", color: "transition-metal", desc: "Logam mengilap tahan karat. Digunakan untuk pelapis chrome dan stainless steel.", image: "✨" },
    { symbol: "Mn", name: "Mangan", number: 25, category: "Logam Transisi", color: "transition-metal", desc: "Logam penting untuk produksi baja dan baterai alkaline.", image: "⚙️" },
    { symbol: "Fe", name: "Besi", number: 26, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi penting untuk hemoglobin dan industri. Dapat berkarat.", image: "🛠️" },
    { symbol: "Co", name: "Kobalt", number: 27, category: "Logam Transisi", color: "transition-metal", desc: "Logam untuk baterai lithium-ion dan pigmen biru.", image: "🔋" },
    { symbol: "Ni", name: "Nikel", number: 28, category: "Logam Transisi", color: "transition-metal", desc: "Logam untuk pelapis anti-karat dan baterai nikel-kadmium.", image: "🪙" },
    { symbol: "Cu", name: "Tembaga", number: 29, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi dengan konduktivitas tinggi. Digunakan untuk kabel dan koin.", image: "🔌" },
    { symbol: "Zn", name: "Seng", number: 30, category: "Logam Transisi", color: "transition-metal", desc: "Logam transisi penting untuk sistem kekebalan dan pelapis anti-karat.", image: "🛡️" },
    { symbol: "Ga", name: "Galium", number: 31, category: "Logam Pasca-transisi", color: "post-transition", desc: "Logam yang meleleh di tangan. Digunakan dalam semikonduktor.", image: "🫳" },
    { symbol: "Ge", name: "Germanium", number: 32, category: "Metaloid", color: "metalloid", desc: "Metaloid penting untuk elektronik awal dan serat optik.", image: "🔍" },
    { symbol: "As", name: "Arsen", number: 33, category: "Metaloid", color: "metalloid", desc: "Metaloid beracun yang digunakan dalam pestisida dan elektronik.", image: "☠️" },
    { symbol: "Se", name: "Selenium", number: 34, category: "Non-logam", color: "non-metal", desc: "Non-logam penting untuk enzim antioksidan dan fotosel.", image: "☀️" },
    { symbol: "Br", name: "Brom", number: 35, category: "Halogen", color: "halogen", desc: "Satu-satunya halogen cair. Cairan merah tua yang mudah menguap.", image: "🧪" }, // Diperbarui
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
    { symbol: "Rh", name: "Rodium", number: 45, category: "Logam Transisi", color: "transition-metal", desc: "Logam mulia langka digunakan dalam katalis converter mobil.", image: "🚗" },
    { symbol: "Pd", name: "Paladium", number: 46, category: "Logam Transisi", color: "transition-metal", desc: "Logam mulia digunakan dalam katalis dan perhiasan putih.", image: "💍" },
    { symbol: "Ag", name: "Perak", number: 47, category: "Logam Transisi", color: "transition-metal", desc: "Logam mulia dengan konduktivitas tertinggi. Digunakan untuk perhiasan dan elektronik.", image: "💍" },
    { symbol: "Cd", name: "Kadmium", number: 48, category: "Logam Transisi", color: "transition-metal", desc: "Logam beracun digunakan dalam baterai dan pigmen.", image: "🔋" },
    { symbol: "In", name: "Indium", number: 49, category: "Logam Pasca-transisi", color: "post-transition", desc: "Logam lunak digunakan dalam layar sentuh dan LED.", image: "📱" },
    { symbol: "Sn", name: "Timah", number: 50, category: "Logam Pasca-transisi", color: "post-transition", desc: "Logam digunakan untuk solder, pelapis kaleng, dan perunggu.", image: "🥫" },
    { symbol: "Sb", name: "Antimon", number: 51, category: "Metaloid", color: "metalloid", desc: "Metaloid digunakan dalam tahanan api dan baterai.", image: "🔥" },
    { symbol: "Te", name: "Telurium", number: 52, category: "Metaloid", color: "metalloid", desc: "Metaloid digunakan dalam panel surya dan CD rewritable.", image: "💿" },
    { symbol: "I", name: "Iodin", number: 53, category: "Halogen", color: "halogen", desc: "Halogen padat penting untuk hormon tiroid dan disinfektan.", image: "🩺" }, // Diperbarui
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
    { symbol: "At", name: "Astatin", number: 85, category: "Halogen", color: "halogen", desc: "Halogen radioaktif paling langka di kerak Bumi.", image: "⚛️" }, // Diperbarui
    { symbol: "Rn", name: "Radon", number: 86, category: "Gas Mulia", color: "noble-gas", desc: "Gas mulia radioaktif yang dapat menyebabkan kanker paru-paru.", image: "🏚️" },

    // Periode 7
    { symbol: "Fr", name: "Fransium", number: 87, category: "Logam Alkali", color: "alkali-metal", desc: "Logam alkali radioaktif paling langka dan tidak stabil.", image: "⚛️" },
    { symbol: "Ra", name: "Radium", number: 88, category: "Logam Alkali Tanah", color: "alkaline-earth", desc: "Logam alkali tanah radioaktif. Dulu digunakan dalam cat bercahaya.", image: "✨" },
    { symbol: "Ac", name: "Aktinium", number: 89, category: "Aktinida", color: "actinide", desc: "Unsur pertama aktinida. Radioaktif dan digunakan dalam sumber neutron.", image: "⚛️" },
    { symbol: "Rf", name: "Ruterfordium", number: 104, category: "Logam Transisi", color: "transition-metal", desc: "Unsur transisisi superberat sintetis.", image: "⚛️" },
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
    { symbol: "Ts", name: "Tenesin", number: 117, category: "Halogen", color: "halogen", desc: "Halogen sintetis superberat.", image: "⚛️" }, // Diperbarui
    { symbol: "Og", name: "Oganeson", number: 118, category: "Gas Mulia", color: "noble-gas", desc: "Unsur sintetis terberat, dinamai dari Yuri Oganessian.", image: "👨‍🔬" },

    // Lantanida (Z=58 sampai Z=71)
    { symbol: "Ce", name: "Serium", number: 58, category: "Lantanida", color: "lanthanide", desc: "Lantanida paling melimpah. Digunakan dalam katalis converter.", image: "🚗" },
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

// Data reaksi kimia lengkap
const reactions = {
    // ==================== REAKSI DASAR & AMAN ====================
    "H+O": {
        result: "Air",
        formula: "H₂O",
        desc: "Hidrogen dan Oksigen bereaksi membentuk air, senyawa esensial untuk kehidupan.",
        image: "💧",
        safety: "safe"
    },
    "H+Cl": {
        result: "Asam Klorida", 
        formula: "HCl",
        desc: "Hidrogen dan Klor membentuk asam klorida, asam kuat yang digunakan dalam industri.",
        image: "🧪",
        safety: "warning"
    },
    "Na+Cl": {
        result: "Garam Dapur",
        formula: "NaCl", 
        desc: "Natrium dan Klor bereaksi membentuk natrium klorida, atau garam dapur.",
        image: "🧂",
        safety: "safe"
    },
    "C+O": {
        result: "Karbon Dioksida",
        formula: "CO₂",
        desc: "Karbon dan Oksigen membentuk karbon dioksida, gas rumah kaca penting.",
        image: "🌫️",
        safety: "safe"
    },
    "C+H": {
        result: "Metana",
        formula: "CH₄",
        desc: "Karbon dan Hidrogen membentuk metana, gas alam utama.",
        image: "🔥",
        safety: "danger"
    },

    // ==================== REAKSI LOGAM ====================
    "Fe+O": {
        result: "Karat Besi",
        formula: "Fe₂O₃",
        desc: "Besi bereaksi dengan oksigen membentuk karat (besi oksida).",
        image: "🦠",
        safety: "safe"
    },
    "Cu+O": {
        result: "Tembaga Oksida", 
        formula: "CuO",
        desc: "Tembaga bereaksi dengan oksigen membentuk tembaga oksida hijau.",
        image: "🏺",
        safety: "safe"
    },
    "Al+O": {
        result: "Aluminium Oksida",
        formula: "Al₂O₃",
        desc: "Aluminium membentuk lapisan oksida pelindung.",
        image: "🛡️",
        safety: "safe"
    },
    "Mg+O": {
        result: "Magnesium Oksida",
        formula: "MgO",
        desc: "Magnesium terbakar dengan cahaya putih terang membentuk magnesium oksida.",
        image: "💥",
        safety: "warning"
    },

    // ==================== REAKSI HALOGEN ====================
    "Na+F": {
        result: "Natrium Fluorida",
        formula: "NaF",
        desc: "Digunakan dalam pasta gigi untuk mencegah gigi berlubang.",
        image: "🦷",
        safety: "warning"
    },
    "H+F": {
        result: "Asam Fluorida",
        formula: "HF",
        desc: "Asam sangat korosif yang dapat melarutkan kaca. SANGAT BERBAHAYA!",
        image: "☠️",
        safety: "extreme"
    },
    "Ca+F": {
        result: "Kalsium Fluorida",
        formula: "CaF₂",
        desc: "Mineral fluorit, sumber utama fluor.",
        image: "💎",
        safety: "safe"
    },

    // ==================== REAKSI GAS MULIA (Sangat Jarang) ====================
    "Xe+F": {
        result: "Xenon Fluorida",
        formula: "XeF₂",
        desc: "Salah satu senyawa gas mulia yang pertama dibuat. EKSPLOSIF!",
        image: "💣",
        safety: "extreme"
    },
    "Kr+F": {
        result: "Kripton Fluorida", 
        formula: "KrF₂",
        desc: "Senyawa kripton yang sangat tidak stabil dan reaktif.",
        image: "⚡",
        safety: "extreme"
    },

    // ==================== REAKSI BERBAHAYA & EKSPLOSIF ====================
    "H+N": {
        result: "Amonia",
        formula: "NH₃",
        desc: "Hidrogen dan Nitrogen membentuk amonia, bahan dasar pupuk.",
        image: "🌾",
        safety: "danger"
    },
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
        desc: "Lebih reaktif dari natrium hidrida. SANGAT EKSPLOSIF!",
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

    // ==================== REAKSI RADIOAKTIF ====================
    "U+F": {
        result: "Uranium Heksafluorida",
        formula: "UF₆",
        desc: "Digunakan dalam pengayaan uranium untuk senjata nuklir. RADIOAKTIF!",
        image: "☢️",
        safety: "extreme"
    },
    "Pu+O": {
        result: "Plutonium Oksida",
        formula: "PuO₂",
        desc: "Bahan bakar nuklir dan komponen senjata nuklir. SANGAT RADIOAKTIF!",
        image: "💀",
        safety: "extreme"
    },

    // ==================== REAKSI ASAM-BASA ====================
    "H+S": {
        result: "Asam Sulfat",
        formula: "H₂SO₄",
        desc: "Asam kuat yang sangat korosif. 'Raja Kimia' dalam industri.",
        image: "🧪",
        safety: "extreme"
    },
    "H+N+O": {
        result: "Asam Nitrat",
        formula: "HNO₃",
        desc: "Asam kuat untuk produksi pupuk dan bahan peledak.",
        image: "💥",
        safety: "extreme"
    },

    // ==================== REAKSI ORGANIK ====================
    "C+H+O": {
        result: "Glukosa",
        formula: "C₆H₁₂O₆",
        desc: "Gula sederhana, sumber energi utama makhluk hidup.",
        image: "🍬",
        safety: "safe"
    },
    "C+H+O+N": {
        result: "Asam Amino",
        formula: "Variasi",
        desc: "Unit pembangun protein dan kehidupan.",
        image: "🧬",
        safety: "safe"
    },

    // ==================== REAKSI LOGAM BERAT BERACUN ====================
    "Hg+S": {
        result: "Raksa Sulfida",
        formula: "HgS",
        desc: "Cinnabar, bijih merkuri utama. SANGAT BERACUN!",
        image: "💀",
        safety: "extreme"
    },
    "Pb+S": {
        result: "Galenit",
        formula: "PbS",
        desc: "Bijih timbal utama. BERACUN dan karsinogenik.",
        image: "⚖️",
        safety: "extreme"
    },
    "Cd+S": {
        result: "Greenockite", 
        formula: "CdS",
        desc: "Bijih kadmium. LOGAM BERAT BERACUN!",
        image: "☠️",
        safety: "extreme"
    },

    // ==================== REAKSI SINTETIS & LANJUTAN ====================
    "Si+O": {
        result: "Silika",
        formula: "SiO₂",
        desc: "Penyusun utama pasir dan kaca.",
        image: "🏖️",
        safety: "safe"
    },
    "Ti+O": {
        result: "Titanium Dioksida",
        formula: "TiO₂",
        desc: "Pigmen putih untuk cat dan tabir surya.",
        image: "🎨",
        safety: "safe"
    },
    "Ag+S": {
        result: "Perak Sulfida",
        formula: "Ag₂S",
        desc: "Menyebabkan perak berubah warna menjadi hitam.",
        image: "⚫",
        safety: "safe"
    },
    "Au+C": {
        result: "Sianida Emas",
        formula: "Au(CN)₂",
        desc: "Digunakan dalam ekstraksi emas. SANGAT BERACUN!",
        image: "💀",
        safety: "extreme"
    },

    // ==================== REAKSI EKSPERIMENTAL ====================
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
    }
};

// Layout tabel periodik LENGKAP (118 Unsur)
const periodicTableLayout = [
    // Baris 1: Periode 1
    [1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2],
    
    // Baris 2: Periode 2
    [3, 4, null, null, null, null, null, null, null, null, null, null, 5, 6, 7, 8, 9, 10],
    
    // Baris 3: Periode 3
    [11, 12, null, null, null, null, null, null, null, null, null, null, 13, 14, 15, 16, 17, 18],
    
    // Baris 4: Periode 4
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    
    // Baris 5: Periode 5
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    
    // Baris 6: Periode 6 (Lantanida diwakili oleh 57)
    [55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    
    // Baris 7: Periode 7 (Aktinida diwakili oleh 89)
    [87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    
    // Baris 8: Lantanida (Z=58 sampai Z=71)
    [null, null, null, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, null],
    
    // Baris 9: Aktinida (Z=90 sampai Z=103)
    [null, null, null, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, null]
];

// Sistem fallback untuk kombinasi yang tidak ada
function getReaction(elem1, elem2) {
    const key1 = `${elem1}+${elem2}`;
    const key2 = `${elem2}+${elem1}`;
    
    if (reactions[key1]) return reactions[key1];
    if (reactions[key2]) return reactions[key2];
    
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

    // Logika fallback berdasarkan kategori
    if (element1.category.includes("Gas Mulia") || element2.category.includes("Gas Mulia")) {
        return {
            result: "Tidak Bereaksi",
            formula: "Tidak Ada",
            desc: `${element1.name} dan ${element2.name} tidak bereaksi karena sifat gas mulia yang sangat stabil.`,
            image: "🚫",
            safety: "safe"
        };
    }
    
    if (element1.category.includes("Logam") && element2.category.includes("Logam")) {
        return {
            result: "Paduan Logam",
            formula: `${elem1}-${elem2}`,
            desc: `Campuran ${element1.name} dan ${element2.name} kemungkinan membentuk paduan logam.`,
            image: "⚙️",
            safety: "safe"
        };
    }
    
    // Fallback umum (reaksi yang tidak terdefinisi)
    return {
        result: "Senyawa Baru",
        formula: `${elem1}${elem2}`,
        desc: `Kombinasi ${element1.name} dan ${element2.name} menghasilkan senyawa yang belum teridentifikasi atau memerlukan kondisi khusus.`,
        image: "🔬",
        safety: "unknown"
    };
}