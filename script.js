// ================= TABLA PERIODICA =================
const elementos = [
    // PERIODO 1
    { z: 1, s: 'H', n: 'Hidrógeno', m: 1.008, cat: 'nomet', c: 1, r: 1, conf: '1s¹', val: 1, enlace: 'Covalente (ej. H2O)', estado: 'Gas', den: '0.0000899*' },
    { z: 2, s: 'He', n: 'Helio', m: 4.002, cat: 'gas', c: 18, r: 1, conf: '1s²', val: 2, enlace: 'Inerte', estado: 'Gas', den: '0.0001785*' },
    // PERIODO 2
    { z: 3, s: 'Li', n: 'Litio', m: 6.94, cat: 'alc', c: 1, r: 2, conf: '[He] 2s¹', val: 1, enlace: 'Iónico', estado: 'Sólido', den: '0.534' },
    { z: 4, s: 'Be', n: 'Berilio', m: 9.012, cat: 'alct', c: 2, r: 2, conf: '[He] 2s²', val: 2, enlace: 'Iónico/Covalente', estado: 'Sólido', den: '1.848' },
    { z: 5, s: 'B', n: 'Boro', m: 10.81, cat: 'meta', c: 13, r: 2, conf: '[He] 2s² 2p¹', val: 3, enlace: 'Covalente', estado: 'Sólido', den: '2.34' },
    { z: 6, s: 'C', n: 'Carbono', m: 12.011, cat: 'nomet', c: 14, r: 2, conf: '[He] 2s² 2p²', val: 4, enlace: 'Covalente', estado: 'Sólido', den: '2.267' },
    { z: 7, s: 'N', n: 'Nitrógeno', m: 14.007, cat: 'nomet', c: 15, r: 2, conf: '[He] 2s² 2p³', val: 5, enlace: 'Covalente', estado: 'Gas', den: '0.001251*' },
    { z: 8, s: 'O', n: 'Oxígeno', m: 15.999, cat: 'nomet', c: 16, r: 2, conf: '[He] 2s² 2p⁴', val: 6, enlace: 'Covalente / Iónico', estado: 'Gas', den: '0.001429*' },
    { z: 9, s: 'F', n: 'Flúor', m: 18.998, cat: 'nomet', c: 17, r: 2, conf: '[He] 2s² 2p⁵', val: 7, enlace: 'Iónico / Polar', estado: 'Gas', den: '0.001696*' },
    { z: 10, s: 'Ne', n: 'Neón', m: 20.180, cat: 'gas', c: 18, r: 2, conf: '[He] 2s² 2p⁶', val: 8, enlace: 'Inerte', estado: 'Gas', den: '0.0009002*' },
    // PERIODO 3
    { z: 11, s: 'Na', n: 'Sodio', m: 22.990, cat: 'alc', c: 1, r: 3, conf: '[Ne] 3s¹', val: 1, enlace: 'Iónico', estado: 'Sólido', den: '0.968' },
    { z: 12, s: 'Mg', n: 'Magnesio', m: 24.305, cat: 'alct', c: 2, r: 3, conf: '[Ne] 3s²', val: 2, enlace: 'Iónico / Metálico', estado: 'Sólido', den: '1.738' },
    { z: 13, s: 'Al', n: 'Aluminio', m: 26.982, cat: 'post', c: 13, r: 3, conf: '[Ne] 3s² 3p¹', val: 3, enlace: 'Metálico / Covalente', estado: 'Sólido', den: '2.698' },
    { z: 14, s: 'Si', n: 'Silicio', m: 28.085, cat: 'meta', c: 14, r: 3, conf: '[Ne] 3s² 3p²', val: 4, enlace: 'Covalente', estado: 'Sólido', den: '2.329' },
    { z: 15, s: 'P', n: 'Fósforo', m: 30.974, cat: 'nomet', c: 15, r: 3, conf: '[Ne] 3s² 3p³', val: 5, enlace: 'Covalente', estado: 'Sólido', den: '1.82' },
    { z: 16, s: 'S', n: 'Azufre', m: 32.06, cat: 'nomet', c: 16, r: 3, conf: '[Ne] 3s² 3p⁴', val: 6, enlace: 'Covalente', estado: 'Sólido', den: '2.067' },
    { z: 17, s: 'Cl', n: 'Cloro', m: 35.45, cat: 'nomet', c: 17, r: 3, conf: '[Ne] 3s² 3p⁵', val: 7, enlace: 'Polar / Iónico', estado: 'Gas', den: '0.003214*' },
    { z: 18, s: 'Ar', n: 'Argón', m: 39.948, cat: 'gas', c: 18, r: 3, conf: '[Ne] 3s² 3p⁶', val: 8, enlace: 'Inerte', estado: 'Gas', den: '0.001784*' },
    // PERIODO 4
    { z: 19, s: 'K', n: 'Potasio', m: 39.098, cat: 'alc', c: 1, r: 4, conf: '[Ar] 4s¹', val: 1, enlace: 'Iónico', estado: 'Sólido', den: '0.862' },
    { z: 20, s: 'Ca', n: 'Calcio', m: 40.078, cat: 'alct', c: 2, r: 4, conf: '[Ar] 4s²', val: 2, enlace: 'Iónico / Metálico', estado: 'Sólido', den: '1.55' },
    { z: 21, s: 'Sc', n: 'Escandio', m: 44.956, cat: 'tran', c: 3, r: 4, conf: '[Ar] 4s² 3d¹', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '2.989' },
    { z: 22, s: 'Ti', n: 'Titanio', m: 47.867, cat: 'tran', c: 4, r: 4, conf: '[Ar] 4s² 3d²', val: 4, enlace: 'Metálico', estado: 'Sólido', den: '4.507' },
    { z: 23, s: 'V', n: 'Vanadio', m: 50.942, cat: 'tran', c: 5, r: 4, conf: '[Ar] 4s² 3d³', val: 5, enlace: 'Metálico', estado: 'Sólido', den: '6.11' },
    { z: 24, s: 'Cr', n: 'Cromo', m: 51.996, cat: 'tran', c: 6, r: 4, conf: '[Ar] 4s¹ 3d⁵', val: 6, enlace: 'Metálico', estado: 'Sólido', den: '7.15' },
    { z: 25, s: 'Mn', n: 'Manganeso', m: 54.938, cat: 'tran', c: 7, r: 4, conf: '[Ar] 4s² 3d⁵', val: 7, enlace: 'Metálico', estado: 'Sólido', den: '7.44' },
    { z: 26, s: 'Fe', n: 'Hierro', m: 55.845, cat: 'tran', c: 8, r: 4, conf: '[Ar] 4s² 3d⁶', val: 3, enlace: 'Metálico / Iónico', estado: 'Sólido', den: '7.874' },
    { z: 27, s: 'Co', n: 'Cobalto', m: 58.933, cat: 'tran', c: 9, r: 4, conf: '[Ar] 4s² 3d⁷', val: 2, enlace: 'Metálico', estado: 'Sólido', den: '8.9' },
    { z: 28, s: 'Ni', n: 'Níquel', m: 58.693, cat: 'tran', c: 10, r: 4, conf: '[Ar] 4s² 3d⁸', val: 2, enlace: 'Metálico', estado: 'Sólido', den: '8.908' },
    { z: 29, s: 'Cu', n: 'Cobre', m: 63.546, cat: 'tran', c: 11, r: 4, conf: '[Ar] 4s¹ 3d¹⁰', val: 2, enlace: 'Metálico', estado: 'Sólido', den: '8.96' },
    { z: 30, s: 'Zn', n: 'Zinc', m: 65.38, cat: 'tran', c: 12, r: 4, conf: '[Ar] 4s² 3d¹⁰', val: 2, enlace: 'Metálico', estado: 'Sólido', den: '7.134' },
    { z: 31, s: 'Ga', n: 'Galio', m: 69.723, cat: 'post', c: 13, r: 4, conf: '[Ar] 4s² 3d¹⁰ 4p¹', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '5.907' },
    { z: 32, s: 'Ge', n: 'Germanio', m: 72.630, cat: 'meta', c: 14, r: 4, conf: '[Ar] 4s² 3d¹⁰ 4p²', val: 4, enlace: 'Covalente', estado: 'Sólido', den: '5.323' },
    { z: 33, s: 'As', n: 'Arsénico', m: 74.922, cat: 'meta', c: 15, r: 4, conf: '[Ar] 4s² 3d¹⁰ 4p³', val: 5, enlace: 'Covalente', estado: 'Sólido', den: '5.727' },
    { z: 34, s: 'Se', n: 'Selenio', m: 78.971, cat: 'nomet', c: 16, r: 4, conf: '[Ar] 4s² 3d¹⁰ 4p⁴', val: 6, enlace: 'Covalente', estado: 'Sólido', den: '4.819' },
    { z: 35, s: 'Br', n: 'Bromo', m: 79.904, cat: 'nomet', c: 17, r: 4, conf: '[Ar] 4s² 3d¹⁰ 4p⁵', val: 7, enlace: 'Polar / Iónico', estado: 'Líquido', den: '3.122' },
    { z: 36, s: 'Kr', n: 'Criptón', m: 83.798, cat: 'gas', c: 18, r: 4, conf: '[Ar] 4s² 3d¹⁰ 4p⁶', val: 8, enlace: 'Inerte', estado: 'Gas', den: '0.003749*' },
    // PERIODO 5
    { z: 37, s: 'Rb', n: 'Rubidio', m: 85.468, cat: 'alc', c: 1, r: 5, conf: '[Kr] 5s¹', val: 1, enlace: 'Iónico', estado: 'Sólido', den: '1.532' },
    { z: 38, s: 'Sr', n: 'Estroncio', m: 87.62, cat: 'alct', c: 2, r: 5, conf: '[Kr] 5s²', val: 2, enlace: 'Iónico / Metálico', estado: 'Sólido', den: '2.64' },
    { z: 39, s: 'Y', n: 'Itrio', m: 88.906, cat: 'tran', c: 3, r: 5, conf: '[Kr] 5s² 4d¹', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '4.472' },
    { z: 40, s: 'Zr', n: 'Circonio', m: 91.224, cat: 'tran', c: 4, r: 5, conf: '[Kr] 5s² 4d²', val: 4, enlace: 'Metálico', estado: 'Sólido', den: '6.511' },
    { z: 41, s: 'Nb', n: 'Niobio', m: 92.906, cat: 'tran', c: 5, r: 5, conf: '[Kr] 5s¹ 4d⁴', val: 5, enlace: 'Metálico', estado: 'Sólido', den: '8.57' },
    { z: 42, s: 'Mo', n: 'Molibdeno', m: 95.95, cat: 'tran', c: 6, r: 5, conf: '[Kr] 5s¹ 4d⁵', val: 6, enlace: 'Metálico', estado: 'Sólido', den: '10.28' },
    { z: 43, s: 'Tc', n: 'Tecnecio', m: 98, cat: 'tran', c: 7, r: 5, conf: '[Kr] 5s² 4d⁵', val: 7, enlace: 'Metálico', estado: 'Sintético', den: '11.5' },
    { z: 44, s: 'Ru', n: 'Rutenio', m: 101.07, cat: 'tran', c: 8, r: 5, conf: '[Kr] 5s¹ 4d⁷', val: 8, enlace: 'Metálico', estado: 'Sólido', den: '12.37' },
    { z: 45, s: 'Rh', n: 'Rodio', m: 102.91, cat: 'tran', c: 9, r: 5, conf: '[Kr] 5s¹ 4d⁸', val: 4, enlace: 'Metálico', estado: 'Sólido', den: '12.41' },
    { z: 46, s: 'Pd', n: 'Paladio', m: 106.42, cat: 'tran', c: 10, r: 5, conf: '[Kr] 4d¹⁰', val: 4, enlace: 'Metálico', estado: 'Sólido', den: '12.023' },
    { z: 47, s: 'Ag', n: 'Plata', m: 107.87, cat: 'tran', c: 11, r: 5, conf: '[Kr] 5s¹ 4d¹⁰', val: 1, enlace: 'Metálico', estado: 'Sólido', den: '10.49' },
    { z: 48, s: 'Cd', n: 'Cadmio', m: 112.41, cat: 'tran', c: 12, r: 5, conf: '[Kr] 5s² 4d¹⁰', val: 2, enlace: 'Metálico', estado: 'Sólido', den: '8.65' },
    { z: 49, s: 'In', n: 'Indio', m: 114.82, cat: 'post', c: 13, r: 5, conf: '[Kr] 5s² 4d¹⁰ 5p¹', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '7.31' },
    { z: 50, s: 'Sn', n: 'Estaño', m: 118.71, cat: 'post', c: 14, r: 5, conf: '[Kr] 5s² 4d¹⁰ 5p²', val: 4, enlace: 'Metálico / Covalente', estado: 'Sólido', den: '7.287' },
    { z: 51, s: 'Sb', n: 'Antimonio', m: 121.76, cat: 'meta', c: 15, r: 5, conf: '[Kr] 5s² 4d¹⁰ 5p³', val: 5, enlace: 'Covalente', estado: 'Sólido', den: '6.685' },
    { z: 52, s: 'Te', n: 'Telurio', m: 127.60, cat: 'meta', c: 16, r: 5, conf: '[Kr] 5s² 4d¹⁰ 5p⁴', val: 6, enlace: 'Covalente', estado: 'Sólido', den: '6.232' },
    { z: 53, s: 'I', n: 'Yodo', m: 126.90, cat: 'nomet', c: 17, r: 5, conf: '[Kr] 5s² 4d¹⁰ 5p⁵', val: 7, enlace: 'Covalente Polar', estado: 'Sólido', den: '4.933' },
    { z: 54, s: 'Xe', n: 'Xenón', m: 131.29, cat: 'gas', c: 18, r: 5, conf: '[Kr] 5s² 4d¹⁰ 5p⁶', val: 8, enlace: 'Inerte', estado: 'Gas', den: '0.005887*' },
    // PERIODO 6
    { z: 55, s: 'Cs', n: 'Cesio', m: 132.91, cat: 'alc', c: 1, r: 6, conf: '[Xe] 6s¹', val: 1, enlace: 'Iónico', estado: 'Sólido', den: '1.879' },
    { z: 56, s: 'Ba', n: 'Bario', m: 137.33, cat: 'alct', c: 2, r: 6, conf: '[Xe] 6s²', val: 2, enlace: 'Iónico / Metálico', estado: 'Sólido', den: '3.51' },
    // LANTÁNIDOS
    { z: 57, s: 'La', n: 'Lantano', m: 138.91, cat: 'lant', c: 4, r: 9, conf: '[Xe] 6s² 5d¹', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '6.145' },
    { z: 58, s: 'Ce', n: 'Cerio', m: 140.12, cat: 'lant', c: 5, r: 9, conf: '[Xe] 6s² 4f¹ 5d¹', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '6.77' },
    { z: 59, s: 'Pr', n: 'Praseodimio', m: 140.91, cat: 'lant', c: 6, r: 9, conf: '[Xe] 6s² 4f³', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '6.773' },
    { z: 60, s: 'Nd', n: 'Neodimio', m: 144.24, cat: 'lant', c: 7, r: 9, conf: '[Xe] 6s² 4f⁴', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '7.007' },
    { z: 61, s: 'Pm', n: 'Prometio', m: 145, cat: 'lant', c: 8, r: 9, conf: '[Xe] 6s² 4f⁵', val: 3, enlace: 'Metálico', estado: 'Sintético', den: '7.26' },
    { z: 62, s: 'Sm', n: 'Samario', m: 150.36, cat: 'lant', c: 9, r: 9, conf: '[Xe] 6s² 4f⁶', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '7.52' },
    { z: 63, s: 'Eu', n: 'Europio', m: 151.96, cat: 'lant', c: 10, r: 9, conf: '[Xe] 6s² 4f⁷', val: 2, enlace: 'Metálico', estado: 'Sólido', den: '5.243' },
    { z: 64, s: 'Gd', n: 'Gadolinio', m: 157.25, cat: 'lant', c: 11, r: 9, conf: '[Xe] 6s² 4f⁷ 5d¹', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '7.9' },
    { z: 65, s: 'Tb', n: 'Terbio', m: 158.93, cat: 'lant', c: 12, r: 9, conf: '[Xe] 6s² 4f⁹', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '8.229' },
    { z: 66, s: 'Dy', n: 'Disprosio', m: 162.50, cat: 'lant', c: 13, r: 9, conf: '[Xe] 6s² 4f¹⁰', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '8.55' },
    { z: 67, s: 'Ho', n: 'Holmio', m: 164.93, cat: 'lant', c: 14, r: 9, conf: '[Xe] 6s² 4f¹¹', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '8.795' },
    { z: 68, s: 'Er', n: 'Erbio', m: 167.26, cat: 'lant', c: 15, r: 9, conf: '[Xe] 6s² 4f¹²', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '9.066' },
    { z: 69, s: 'Tm', n: 'Tulio', m: 168.93, cat: 'lant', c: 16, r: 9, conf: '[Xe] 6s² 4f¹³', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '9.321' },
    { z: 70, s: 'Yb', n: 'Iterbio', m: 173.05, cat: 'lant', c: 17, r: 9, conf: '[Xe] 6s² 4f¹⁴', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '6.965' },
    { z: 71, s: 'Lu', n: 'Lutecio', m: 174.97, cat: 'lant', c: 18, r: 9, conf: '[Xe] 6s² 4f¹⁴ 5d¹', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '9.84' },
    // VUELTA PERIODO 6
    { z: 72, s: 'Hf', n: 'Hafnio', m: 178.49, cat: 'tran', c: 4, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d²', val: 4, enlace: 'Metálico', estado: 'Sólido', den: '13.31' },
    { z: 73, s: 'Ta', n: 'Tantalio', m: 180.95, cat: 'tran', c: 5, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d³', val: 5, enlace: 'Metálico', estado: 'Sólido', den: '16.65' },
    { z: 74, s: 'W', n: 'Wolframio', m: 183.84, cat: 'tran', c: 6, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d⁴', val: 6, enlace: 'Metálico', estado: 'Sólido', den: '19.25' },
    { z: 75, s: 'Re', n: 'Renio', m: 186.21, cat: 'tran', c: 7, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d⁵', val: 7, enlace: 'Metálico', estado: 'Sólido', den: '21.02' },
    { z: 76, s: 'Os', n: 'Osmio', m: 190.23, cat: 'tran', c: 8, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d⁶', val: 8, enlace: 'Metálico', estado: 'Sólido', den: '22.59' },
    { z: 77, s: 'Ir', n: 'Iridio', m: 192.22, cat: 'tran', c: 9, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d⁷', val: 4, enlace: 'Metálico', estado: 'Sólido', den: '22.56' },
    { z: 78, s: 'Pt', n: 'Platino', m: 195.08, cat: 'tran', c: 10, r: 6, conf: '[Xe] 6s¹ 4f¹⁴ 5d⁹', val: 4, enlace: 'Metálico', estado: 'Sólido', den: '21.45' },
    { z: 79, s: 'Au', n: 'Oro', m: 196.97, cat: 'tran', c: 11, r: 6, conf: '[Xe] 6s¹ 4f¹⁴ 5d¹⁰', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '19.3' },
    { z: 80, s: 'Hg', n: 'Mercurio', m: 200.59, cat: 'tran', c: 12, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d¹⁰', val: 2, enlace: 'Metálico', estado: 'Líquido', den: '13.534' },
    { z: 81, s: 'Tl', n: 'Talio', m: 204.38, cat: 'post', c: 13, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p¹', val: 3, enlace: 'Metálico', estado: 'Sólido', den: '11.85' },
    { z: 82, s: 'Pb', n: 'Plomo', m: 207.2, cat: 'post', c: 14, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p²', val: 4, enlace: 'Metálico', estado: 'Sólido', den: '11.34' },
    { z: 83, s: 'Bi', n: 'Bismuto', m: 208.98, cat: 'post', c: 15, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p³', val: 5, enlace: 'Metálico', estado: 'Sólido', den: '9.807' },
    { z: 84, s: 'Po', n: 'Polonio', m: 209, cat: 'post', c: 16, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁴', val: 6, enlace: 'Covalente', estado: 'Sólido Radiactivo', den: '9.32' },
    { z: 85, s: 'At', n: 'Astato', m: 210, cat: 'meta', c: 17, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁵', val: 7, enlace: 'Polar', estado: 'Sólido Radiactivo', den: '7.0' },
    { z: 86, s: 'Rn', n: 'Radón', m: 222, cat: 'gas', c: 18, r: 6, conf: '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁶', val: 8, enlace: 'Inerte', estado: 'Gas Radiactivo', den: '0.00973*' },
    // PERIODO 7
    { z: 87, s: 'Fr', n: 'Francio', m: 223, cat: 'alc', c: 1, r: 7, conf: '[Rn] 7s¹', val: 1, enlace: 'Iónico', estado: 'Sólido Radiactivo', den: '1.87' },
    { z: 88, s: 'Ra', n: 'Radio', m: 226, cat: 'alct', c: 2, r: 7, conf: '[Rn] 7s²', val: 2, enlace: 'Iónico', estado: 'Sólido Radiactivo', den: '5.5' },
    // ACTINOIDES
    { z: 89, s: 'Ac', n: 'Actinio', m: 227, cat: 'acti', c: 4, r: 10, conf: '[Rn] 7s² 6d¹', val: 3, enlace: 'Metálico', estado: 'Sólido Radiactivo', den: '10.07' },
    { z: 90, s: 'Th', n: 'Torio', m: 232.04, cat: 'acti', c: 5, r: 10, conf: '[Rn] 7s² 6d²', val: 4, enlace: 'Metálico', estado: 'Sólido Radiactivo', den: '11.72' },
    { z: 91, s: 'Pa', n: 'Protactinio', m: 231.04, cat: 'acti', c: 6, r: 10, conf: '[Rn] 7s² 5f² 6d¹', val: 5, enlace: 'Metálico', estado: 'Sólido Radiactivo', den: '15.37' },
    { z: 92, s: 'U', n: 'Uranio', m: 238.03, cat: 'acti', c: 7, r: 10, conf: '[Rn] 7s² 5f³ 6d¹', val: 6, enlace: 'Metálico', estado: 'Sólido Radiactivo', den: '19.05' },
    { z: 93, s: 'Np', n: 'Neptunio', m: 237, cat: 'acti', c: 8, r: 10, conf: '[Rn] 7s² 5f⁴ 6d¹', val: 5, enlace: 'Metálico', estado: 'Sintético', den: '20.45' },
    { z: 94, s: 'Pu', n: 'Plutonio', m: 244, cat: 'acti', c: 9, r: 10, conf: '[Rn] 7s² 5f⁶', val: 4, enlace: 'Metálico', estado: 'Sintético', den: '19.84' },
    { z: 95, s: 'Am', n: 'Americio', m: 243, cat: 'acti', c: 10, r: 10, conf: '[Rn] 7s² 5f⁷', val: 3, enlace: 'Metálico', estado: 'Sintético', den: '13.67' },
    { z: 96, s: 'Cm', n: 'Curio', m: 247, cat: 'acti', c: 11, r: 10, conf: '[Rn] 7s² 5f⁷ 6d¹', val: 3, enlace: 'Metálico', estado: 'Sintético', den: '13.51' },
    { z: 97, s: 'Bk', n: 'Berkelio', m: 247, cat: 'acti', c: 12, r: 10, conf: '[Rn] 7s² 5f⁹', val: 3, enlace: 'Metálico', estado: 'Sintético', den: '14.78' },
    { z: 98, s: 'Cf', n: 'Californio', m: 251, cat: 'acti', c: 13, r: 10, conf: '[Rn] 7s² 5f¹⁰', val: 3, enlace: 'Metálico', estado: 'Sintético', den: '15.1' },
    { z: 99, s: 'Es', n: 'Einstenio', m: 252, cat: 'acti', c: 14, r: 10, conf: '[Rn] 7s² 5f¹¹', val: 3, enlace: 'Metálico', estado: 'Sintético', den: '8.84' },
    { z: 100, s: 'Fm', n: 'Fermio', m: 257, cat: 'acti', c: 15, r: 10, conf: '[Rn] 7s² 5f¹²', val: 3, enlace: 'Metálico', estado: 'Sintético', den: '9.7' },
    { z: 101, s: 'Md', n: 'Mendelevio', m: 258, cat: 'acti', c: 16, r: 10, conf: '[Rn] 7s² 5f¹³', val: 3, enlace: 'Metálico', estado: 'Sintético', den: '10.3' },
    { z: 102, s: 'No', n: 'Nobelio', m: 259, cat: 'acti', c: 17, r: 10, conf: '[Rn] 7s² 5f¹⁴', val: 2, enlace: 'Metálico', estado: 'Sintético', den: '9.9' },
    { z: 103, s: 'Lr', n: 'Lawrencio', m: 262, cat: 'acti', c: 18, r: 10, conf: '[Rn] 7s² 5f¹⁴ 7p¹', val: 3, enlace: 'Metálico', estado: 'Sintético', den: '14.4' },
    // VUELTA PERIODO 7
    { z: 104, s: 'Rf', n: 'Rutherfordio', m: 267, cat: 'tran', c: 4, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d²', val: 4, enlace: 'Desconocido', estado: 'Sintético', den: '23.2' },
    { z: 105, s: 'Db', n: 'Dubnio', m: 268, cat: 'tran', c: 5, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d³', val: 5, enlace: 'Desconocido', estado: 'Sintético', den: '29.3' },
    { z: 106, s: 'Sg', n: 'Seaborgio', m: 269, cat: 'tran', c: 6, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d⁴', val: 6, enlace: 'Desconocido', estado: 'Sintético', den: '35.0' },
    { z: 107, s: 'Bh', n: 'Bohrio', m: 270, cat: 'tran', c: 7, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d⁵', val: 7, enlace: 'Desconocido', estado: 'Sintético', den: '37.1' },
    { z: 108, s: 'Hs', n: 'Hassio', m: 277, cat: 'tran', c: 8, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d⁶', val: 8, enlace: 'Desconocido', estado: 'Sintético', den: '40.7' },
    { z: 109, s: 'Mt', n: 'Meitnerio', m: 278, cat: 'desc', c: 9, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d⁷', val: '-', enlace: 'Desconocido', estado: 'Sintético', den: '37.4' },
    { z: 110, s: 'Ds', n: 'Darmstadtio', m: 281, cat: 'desc', c: 10, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d⁸', val: '-', enlace: 'Desconocido', estado: 'Sintético', den: '34.8' },
    { z: 111, s: 'Rg', n: 'Roentgenio', m: 282, cat: 'desc', c: 11, r: 7, conf: '[Rn] 7s¹ 5f¹⁴ 6d¹⁰', val: '-', enlace: 'Desconocido', estado: 'Sintético', den: '28.7' },
    { z: 112, s: 'Cn', n: 'Copernicio', m: 285, cat: 'tran', c: 12, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d¹⁰', val: 2, enlace: 'Metálico', estado: 'Sintético', den: '23.7' },
    { z: 113, s: 'Nh', n: 'Nihonio', m: 286, cat: 'desc', c: 13, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p¹', val: 3, enlace: 'Desconocido', estado: 'Sintético', den: '16.0' },
    { z: 114, s: 'Fl', n: 'Flerovio', m: 289, cat: 'desc', c: 14, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p²', val: 4, enlace: 'Desconocido', estado: 'Sintético', den: '14.0' },
    { z: 115, s: 'Mc', n: 'Moscovio', m: 290, cat: 'desc', c: 15, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p³', val: 5, enlace: 'Desconocido', estado: 'Sintético', den: '13.5' },
    { z: 116, s: 'Lv', n: 'Livermorio', m: 293, cat: 'desc', c: 16, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p⁴', val: 6, enlace: 'Desconocido', estado: 'Sintético', den: '12.9' },
    { z: 117, s: 'Ts', n: 'Teneso', m: 294, cat: 'desc', c: 17, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p⁵', val: 7, enlace: 'Desconocido', estado: 'Sintético', den: '7.2' },
    { z: 118, s: 'Og', n: 'Oganesón', m: 294, cat: 'desc', c: 18, r: 7, conf: '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p⁶', val: 8, enlace: 'Gas Noble', estado: 'Sintético', den: '5.0' }
];

// ================= COMPUESTOS =================
const compuestosLab = [
    // Óxidos y Agua
    { s: 'H₂O', n: 'Agua', cat: 'Óxido / Solvente' },
    { s: 'H₂O₂', n: 'Peróxido de Hidrógeno', cat: 'Peróxido' },
    { s: 'CO₂', n: 'Dióxido de Carbono', cat: 'Óxido Ácido' },
    { s: 'CaO', n: 'Óxido de Calcio', cat: 'Óxido Básico' },
    { s: 'BaO', n: 'Óxido de Bario', cat: 'Óxido Básico' },
    { s: 'K₂O', n: 'Óxido de Potasio', cat: 'Óxido Básico' },
    { s: 'Na₂O', n: 'Óxido de Sodio', cat: 'Óxido Básico' },
    { s: 'MgO', n: 'Óxido de Magnesio', cat: 'Óxido Básico' },
    { s: 'PbO₂', n: 'Dióxido de Plomo', cat: 'Óxido' },
    { s: 'HgO', n: 'Óxido de Mercurio', cat: 'Óxido' },

    // Ácidos
    { s: 'HCl', n: 'Ácido Clorhídrico', cat: 'Ácido Fuerte' },
    { s: 'H₂SO₄', n: 'Ácido Sulfúrico', cat: 'Ácido Fuerte' },
    { s: 'HNO₃', n: 'Ácido Nítrico', cat: 'Ácido Fuerte' },
    { s: 'HBr', n: 'Ácido Bromhídrico', cat: 'Ácido Fuerte' },
    { s: 'HClO₄', n: 'Ácido Perclórico', cat: 'Ácido Fuerte' },
    { s: 'HF', n: 'Ácido Fluorhídrico', cat: 'Ácido Débil' },
    { s: 'H₂CO₃', n: 'Ácido Carbónico', cat: 'Ácido Débil' },
    { s: 'CH₃COOH', n: 'Ácido Acético', cat: 'Ácido Orgánico' },
    { s: 'H₂S', n: 'Ácido Sulfhídrico', cat: 'Ácido Débil (Gas)' },
    { s: 'H₃PO₄', n: 'Ácido Fosfórico', cat: 'Ácido Poliprótico' },

    // Bases
    { s: 'NaOH', n: 'Hidróxido de Sodio', cat: 'Base Fuerte' },
    { s: 'KOH', n: 'Hidróxido de Potasio', cat: 'Base Fuerte' },
    { s: 'Ca(OH)₂', n: 'Hidróxido de Calcio', cat: 'Base Fuerte' },
    { s: 'NH₃', n: 'Amoníaco', cat: 'Base Débil' },

    // Sales y Otros
    { s: 'NaCl', n: 'Cloruro de Sodio', cat: 'Sal Haloidea' },
    { s: 'KClO₃', n: 'Clorato de Potasio', cat: 'Sal Oxisal' },
    { s: 'AgNO₃', n: 'Nitrato de Plata', cat: 'Sal Oxisal' },
    { s: 'CaCO₃', n: 'Carbonato de Calcio', cat: 'Sal Oxisal' },
    { s: 'NaHCO₃', n: 'Bicarbonato de Sodio', cat: 'Sal Ácida' },
    { s: 'CuSO₄', n: 'Sulfato de Cobre (II)', cat: 'Sal Oxisal' },
    { s: 'KMnO₄', n: 'Permanganato de Potasio', cat: 'Sal Oxisal' },
    { s: 'NaN₃', n: 'Azida de Sodio', cat: 'Sal Explosiva' },
    { s: 'KI', n: 'Yoduro de Potasio', cat: 'Sal Haloidea' },
    { s: 'Pb(NO₃)₂', n: 'Nitrato de Plomo (II)', cat: 'Sal Oxisal' },
    { s: 'BaCl₂', n: 'Cloruro de Bario', cat: 'Sal Haloidea' },
    { s: 'K₂CrO₄', n: 'Cromato de Potasio', cat: 'Sal Oxisal' },
    { s: 'FeCl₂', n: 'Cloruro de Hierro (II)', cat: 'Sal Haloidea' },
    { s: 'FeCl₃', n: 'Cloruro de Hierro (III)', cat: 'Sal Haloidea' },

    // Gases Diatómicos y Orgánicos
    { s: 'O₂', n: 'Oxígeno Gaseoso', cat: 'Gas Diatómico' },
    { s: 'N₂', n: 'Nitrógeno Gaseoso', cat: 'Gas Diatómico' },
    { s: 'Cl₂', n: 'Cloro Gaseoso', cat: 'Gas Diatómico / Halógeno' },
    { s: 'Br₂', n: 'Bromo Líquido', cat: 'Halógeno' },
    { s: 'I₂', n: 'Yodo Sólido', cat: 'Halógeno' },
    { s: 'CH₄', n: 'Metano', cat: 'Hidrocarburo' },
    { s: 'C₂H₅OH', n: 'Etanol', cat: 'Alcohol' },
    { s: 'C₃H₈', n: 'Propano', cat: 'Hidrocarburo' },
    { s: 'C₄H₁₀', n: 'Butano', cat: 'Hidrocarburo' }
];

// ================= REACCIONES =================
const reaccionesData = {
    // ================= 1. DESCOMPOSICIÓN =================
    "KClO₃": { nom: "Descomposición del Clorato de Potasio", tipo: "Descomposición Térmica", eq: "2KClO₃(s) + Δ → 2KCl(s) + 3O₂(g)", desc: "El calor cataliza la disociación del clorato de potasio en cloruro de potasio sólido y gas oxígeno." },
    "H₂O": { nom: "Electrólisis del Agua", tipo: "Descomposición (Electrólisis)", eq: "2H₂O(l) + e⁻ → 2H₂(g) + O₂(g)", desc: "La electrólisis rompe los enlaces covalentes del agua, separándola en gases diatómicos de hidrógeno y oxígeno." },
    "H₂O₂": { nom: "Descomposición del Peróxido", tipo: "Descomposición Catalítica", eq: "2H₂O₂(aq) → 2H₂O(l) + O₂(g)↑", desc: "El peróxido de hidrógeno se descompone espontáneamente en agua y oxígeno gaseoso." },
    "CaCO₃": { nom: "Calcinación de Caliza", tipo: "Descomposición Térmica", eq: "CaCO₃(s) + Δ → CaO(s) + CO₂(g)↑", desc: "A más de 840°C, el carbonato de calcio se descompone produciendo óxido de calcio (cal viva) y dióxido de carbono." },
    "NaHCO₃": { nom: "Descomposición de Bicarbonato", tipo: "Descomposición Térmica", eq: "2NaHCO₃(s) + Δ → Na₂CO₃(s) + H₂O(g) + CO₂(g)↑", desc: "El bicarbonato de sodio se descompone con calor en carbonato de sodio, vapor de agua y dióxido de carbono." },
    "H₂CO₃": { nom: "Descomposición del Ácido Carbónico", tipo: "Descomposición Espontánea", eq: "H₂CO₃(aq) → H₂O(l) + CO₂(g)↑", desc: "El ácido carbónico es inestable y se disocia naturalmente en agua y gas carbónico." },
    "NH₃": { nom: "Craqueo de Amoníaco", tipo: "Descomposición", eq: "2NH₃(g) + Δ → N₂(g) + 3H₂(g)", desc: "A altas temperaturas, el amoníaco se revierte a sus gases constituyentes elementales." },

    // ================= 2. SÍNTESIS DE SALES HALOIDEAS (Metales + Halógenos) =================
    "Cl₂+Na": { nom: "Síntesis de Cloruro de Sodio", tipo: "Síntesis / Sal Haloidea", eq: "2Na(s) + Cl₂(g) → 2NaCl(s)", desc: "El sodio cede electrones al cloro diatómico, formando una red iónica cúbica estable." },
    "Cl₂+K": { nom: "Síntesis de Cloruro de Potasio", tipo: "Síntesis / Sal Haloidea", eq: "2K(s) + Cl₂(g) → 2KCl(s)", desc: "El potasio reacciona violentamente con gas cloro para formar cloruro de potasio." },
    "Cl₂+Li": { nom: "Síntesis de Cloruro de Litio", tipo: "Síntesis / Sal Haloidea", eq: "2Li(s) + Cl₂(g) → 2LiCl(s)", desc: "Reacción redox directa que genera la sal iónica cloruro de litio." },
    "Ca+Cl₂": { nom: "Síntesis de Cloruro de Calcio", tipo: "Síntesis / Sal Haloidea", eq: "Ca(s) + Cl₂(g) → CaCl₂(s)", desc: "El calcio alcalinotérreo oxida cediendo dos electrones al cloro." },
    "Cl₂+Mg": { nom: "Síntesis de Cloruro de Magnesio", tipo: "Síntesis / Sal Haloidea", eq: "Mg(s) + Cl₂(g) → MgCl₂(s)", desc: "Síntesis directa por combinación de magnesio metálico y gas cloro." },
    "Br₂+K": { nom: "Síntesis de Bromuro de Potasio", tipo: "Síntesis", eq: "2K(s) + Br₂(l) → 2KBr(s)", desc: "Reacción altamente exotérmica entre el metal alcalino y bromo elemental." },
    "Br₂+Na": { nom: "Síntesis de Bromuro de Sodio", tipo: "Síntesis", eq: "2Na(s) + Br₂(l) → 2NaBr(s)", desc: "El sodio reduce al bromo líquido formando la sal bromuro de sodio." },
    "I₂+K": { nom: "Síntesis de Yoduro de Potasio", tipo: "Síntesis", eq: "2K(s) + I₂(s) → 2KI(s)", desc: "Reacción redox entre potasio metálico y yodo sólido." },
    "I₂+Na": { nom: "Síntesis de Yoduro de Sodio", tipo: "Síntesis", eq: "2Na(s) + I₂(s) → 2NaI(s)", desc: "El sodio reacciona con vapores de yodo para estabilizarse como yoduro." },
    "F₂+Na": { nom: "Síntesis de Fluoruro de Sodio", tipo: "Síntesis", eq: "2Na(s) + F₂(g) → 2NaF(s)", desc: "El flúor, altamente electronegativo, arrebata electrones al sodio violentamente." },
    "Ca+F₂": { nom: "Síntesis de Fluoruro de Calcio", tipo: "Síntesis", eq: "Ca(s) + F₂(g) → CaF₂(s)", desc: "Combinación directa de calcio y flúor gaseoso." },

    // ================= 3. SÍNTESIS DE ÓXIDOS (Metales/No Metales + Oxígeno) =================
    "Mg+O₂": { nom: "Formación de Óxido de Magnesio", tipo: "Síntesis / Óxido Metálico", eq: "2Mg(s) + O₂(g) → 2MgO(s)", desc: "Combustión del magnesio que emite luz blanca intensa y radiación UV." },
    "Ca+O₂": { nom: "Formación de Óxido de Calcio", tipo: "Síntesis / Óxido Metálico", eq: "2Ca(s) + O₂(g) → 2CaO(s)", desc: "El calcio metálico oxida en contacto con el aire formando cal viva." },
    "Fe+O₂": { nom: "Corrosión (Óxido de Hierro)", tipo: "Síntesis / Oxidación", eq: "4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)", desc: "Corrosión termodinámica espontánea que produce herrumbre." },
    "Cu+O₂": { nom: "Formación de Óxido Cúprico", tipo: "Oxidación", eq: "2Cu(s) + O₂(g) → 2CuO(s)", desc: "El cobre al rojo reacciona con oxígeno formando una pátina negra de óxido de cobre (II)." },
    "C+O₂": { nom: "Formación de Dióxido de Carbono", tipo: "Síntesis / Óxido No Metálico", eq: "C(s) + O₂(g) → CO₂(g)", desc: "Combustión del carbono puro generando gas carbónico." },
    "H₂+O₂": { nom: "Síntesis de Agua", tipo: "Síntesis / Combustión", eq: "2H₂(g) + O₂(g) → 2H₂O(g) + Δ", desc: "Los gases elementales reaccionan de manera explosiva bajo ignición para formar agua." },
    "S+O₂": { nom: "Formación de Dióxido de Azufre", tipo: "Combustión", eq: "S(s) + O₂(g) → SO₂(g)", desc: "El azufre arde con llama azul generando un gas tóxico y sofocante." },

    // ================= 4. REACCIONES CON AGUA (Hidratación y Redox) =================
    "H₂O+Na": { nom: "Reacción Alcalina del Sodio", tipo: "Redox / Reacción con Agua", eq: "2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)↑", desc: "El sodio reacciona explosivamente con agua, formando hidróxido de sodio y liberando gas hidrógeno inflamable." },
    "H₂O+K": { nom: "Reacción Alcalina del Potasio", tipo: "Redox / Reacción con Agua", eq: "2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g)↑", desc: "Reacción violenta donde el potasio funde y enciende el hidrógeno producido con una llama lila." },
    "H₂O+Li": { nom: "Reacción Alcalina del Litio", tipo: "Redox / Reacción con Agua", eq: "2Li(s) + 2H₂O(l) → 2LiOH(aq) + H₂(g)↑", desc: "El litio efervesce vigorosamente en agua generando hidróxido de litio e hidrógeno gaseoso." },
    "Ca+H₂O": { nom: "Reacción del Calcio con Agua", tipo: "Redox", eq: "Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g)↑", desc: "El calcio ataca el agua a temperatura ambiente, liberando hidrógeno de forma menos violenta que los alcalinos." },
    "CaO+H₂O": { nom: "Apagado de Cal", tipo: "Síntesis / Hidratación", eq: "CaO(s) + H₂O(l) → Ca(OH)₂(aq)", desc: "La hidratación del óxido de calcio libera gran cantidad de calor y forma cal apagada (base fuerte)." },
    "H₂O+Na₂O": { nom: "Hidratación de Óxido Sódico", tipo: "Hidratación", eq: "Na₂O(s) + H₂O(l) → 2NaOH(aq)", desc: "El óxido alcalino se disuelve formando una solución de hidróxido de sodio." },
    "CO₂+H₂O": { nom: "Síntesis de Ácido Carbónico", tipo: "Formación de Oxoácido", eq: "CO₂(g) + H₂O(l) ⇌ H₂CO₃(aq)", desc: "Reacción en equilibrio causante de la acidificación del agua." },
    "H₂O+SO₂": { nom: "Síntesis de Ácido Sulfuroso", tipo: "Formación de Oxoácido", eq: "SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq)", desc: "El dióxido de azufre disuelto en agua forma lluvia ácida débil." },

    // ================= 5. SUSTITUCIÓN SIMPLE (Desplazamiento) =================
    // Hierro
    "CuSO₄+Fe": { nom: "Desplazamiento de Cobre por Hierro", tipo: "Sustitución Simple", eq: "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)↓", desc: "El hierro oxida desplazando al cobre de la solución. El cobre metálico precipita." },
    "Fe+HCl": { nom: "Corrosión Férrica", tipo: "Sustitución Simple", eq: "Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)↑", desc: "El hierro se disuelve en ácido clorhídrico formando cloruro de hierro (II) y liberando hidrógeno." },
    "Fe+H₂SO₄": { nom: "Reacción Ácido-Metal", tipo: "Sustitución Simple", eq: "Fe(s) + H₂SO₄(aq) → FeSO₄(aq) + H₂(g)↑", desc: "El hierro desplaza al hidrógeno del ácido sulfúrico diluido." },
    // Zinc
    "CuSO₄+Zn": { nom: "Pila de Daniell (Base)", tipo: "Sustitución Simple", eq: "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)↓", desc: "El zinc, altamente reactivo, transfiere electrones a los iones de cobre precipitando este metal." },
    "HCl+Zn": { nom: "Generación de Hidrógeno", tipo: "Sustitución Simple", eq: "Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)↑", desc: "El zinc sólido ataca al ácido clorhídrico con fuerte efervescencia de gas hidrógeno." },
    "H₂SO₄+Zn": { nom: "Desplazamiento Catiónico", tipo: "Sustitución Simple", eq: "Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)↑", desc: "Reacción estándar para obtención de hidrógeno en laboratorios a partir de zinc y ácido." },
    // Magnesio y otros
    "HCl+Mg": { nom: "Corrosión Magnésica", tipo: "Sustitución Simple", eq: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)↑", desc: "El magnesio reacciona violentamente con el ácido clorhídrico." },
    "H₂SO₄+Mg": { nom: "Reacción Ácido-Metal", tipo: "Sustitución Simple", eq: "Mg(s) + H₂SO₄(aq) → MgSO₄(aq) + H₂(g)↑", desc: "El magnesio disuelve en ácido sulfúrico formando sulfato de magnesio acuoso." },
    "AgNO₃+Cu": { nom: "Árbol de Plata", tipo: "Sustitución Simple", eq: "Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s)↓", desc: "El cobre oxida y desplaza a la plata, formando cristales de plata pura y una solución azulada." },
    "Al+HCl": { nom: "Corrosión Alumínica", tipo: "Sustitución Simple", eq: "2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g)↑", desc: "Tras destruir su capa pasiva, el aluminio reacciona fuertemente con el ácido clorhídrico." },

    // ================= 6. DOBLE SUSTITUCIÓN (Precipitación) =================
    "AgNO₃+NaCl": { nom: "Precipitación de Cloruro de Plata", tipo: "Doble Sustitución", eq: "AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq)", desc: "Intercambio iónico instantáneo que forma un sólido blanco insoluble de cloruro de plata." },
    "AgNO₃+KCl": { nom: "Precipitación con Potasio", tipo: "Doble Sustitución", eq: "AgNO₃(aq) + KCl(aq) → AgCl(s)↓ + KNO₃(aq)", desc: "Similar al cloruro de sodio, forma cloruro de plata insoluble." },
    "CaCl₂+Na₂CO₃": { nom: "Precipitación de Carbonato", tipo: "Doble Sustitución", eq: "CaCl₂(aq) + Na₂CO₃(aq) → CaCO₃(s)↓ + 2NaCl(aq)", desc: "El calcio y el carbonato se unen formando carbonato de calcio, un precipitado blanco calcáreo." },
    "CuSO₄+NaOH": { nom: "Precipitación de Hidróxido de Cobre", tipo: "Doble Sustitución", eq: "CuSO₄(aq) + 2NaOH(aq) → Cu(OH)₂(s)↓ + Na₂SO₄(aq)", desc: "Los iones de cobre (II) precipitan como un sólido gelatinoso de color azul claro." },
    "FeCl₃+NaOH": { nom: "Precipitación de Hidróxido Férrico", tipo: "Doble Sustitución", eq: "FeCl₃(aq) + 3NaOH(aq) → Fe(OH)₃(s)↓ + 3NaCl(aq)", desc: "Se forma un precipitado insoluble de hidróxido de hierro (III) de color pardo-rojizo." },

    // ================= 7. NEUTRALIZACIÓN (Ácido + Base) =================
    "HCl+NaOH": { nom: "Neutralización Clorhídrica", tipo: "Neutralización (Fuerte)", eq: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)", desc: "Protones e hidroxilos forman agua neutra, dejando cloruro de sodio (sal) disuelto." },
    "HCl+KOH": { nom: "Neutralización Potásica", tipo: "Neutralización (Fuerte)", eq: "HCl(aq) + KOH(aq) → KCl(aq) + H₂O(l)", desc: "Reacción exotérmica que produce cloruro de potasio y moléculas de agua." },
    "Ca(OH)₂+HCl": { nom: "Neutralización con Cal", tipo: "Neutralización", eq: "2HCl(aq) + Ca(OH)₂(aq) → CaCl₂(aq) + 2H₂O(l)", desc: "El ácido neutraliza el hidróxido de calcio produciendo cloruro de calcio y agua." },
    "Ca(OH)₂+H₂SO₄": { nom: "Formación de Yeso", tipo: "Neutralización", eq: "H₂SO₄(aq) + Ca(OH)₂(aq) → CaSO₄(s)↓ + 2H₂O(l)", desc: "Produce agua y sulfato de calcio, el cual al ser poco soluble, puede precipitar." },
    "H₂SO₄+NaOH": { nom: "Neutralización Sulfúrica", tipo: "Neutralización", eq: "H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)", desc: "Formación de sulfato de sodio neutro altamente soluble en agua." },
    "H₂SO₄+KOH": { nom: "Neutralización Sulfúrica Potásica", tipo: "Neutralización", eq: "H₂SO₄(aq) + 2KOH(aq) → K₂SO₄(aq) + 2H₂O(l)", desc: "Reacción que produce sulfato de potasio y agua termodinámicamente estable." },
    "HNO₃+NaOH": { nom: "Neutralización Nítrica", tipo: "Neutralización", eq: "HNO₃(aq) + NaOH(aq) → NaNO₃(aq) + H₂O(l)", desc: "Produce nitrato de sodio, una sal neutra muy soluble." },
    "HNO₃+KOH": { nom: "Formación de Salitre", tipo: "Neutralización", eq: "HNO₃(aq) + KOH(aq) → KNO₃(aq) + H₂O(l)", desc: "Reacción que genera nitrato de potasio (salitre) disuelto." },
    "CH₃COOH+NaOH": { nom: "Formación de Acetato", tipo: "Neutralización (Débil/Fuerte)", eq: "CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l)", desc: "El ácido acético reacciona formando acetato de sodio y agua (pH ligeramente básico)." },
    "HCl+NH₃": { nom: "Síntesis de Cloruro de Amonio", tipo: "Neutralización Gaseosa", eq: "HCl(g) + NH₃(g) → NH₄Cl(s)", desc: "Los vapores ácidos y básicos reaccionan en el aire formando un polvo blanco sólido." },

    // Efervescencias
    "HCl+NaHCO₃": { nom: "Efervescencia Ácida", tipo: "Neutralización c/ Gas", eq: "HCl(aq) + NaHCO₃(s) → NaCl(aq) + H₂O(l) + CO₂(g)↑", desc: "El ácido genera ácido carbónico inestable que se rompe liberando gas carbónico." },
    "CH₃COOH+NaHCO₃": { nom: "Volcán de Vinagre", tipo: "Neutralización c/ Gas", eq: "CH₃COOH(aq) + NaHCO₃(s) → CH₃COONa(aq) + H₂O(l) + CO₂(g)↑", desc: "El ácido acético y el bicarbonato reaccionan causando una fuerte efervescencia de dióxido de carbono." },

    // ================= 8. COMBUSTIÓN =================
    "CH₄+O₂": { nom: "Combustión del Metano", tipo: "Combustión Completa", eq: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) + Δ", desc: "Oxidación rápida del gas natural produciendo CO₂, vapor de agua y altas temperaturas." },
    "C₃H₈+O₂": { nom: "Combustión del Propano", tipo: "Combustión Completa", eq: "C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(g) + Δ", desc: "El propano arde eficientemente produciendo gases de invernadero y calor." },
    "C₂H₅OH+O₂": { nom: "Combustión de Etanol", tipo: "Combustión de Alcohol", eq: "C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(g) + Δ", desc: "El etanol arde con llama azul transparente y limpia." },
    "C₆H₁₂O₆+O₂": { nom: "Respiración Celular", tipo: "Combustión Lenta Metabólica", eq: "C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(l) + ATP", desc: "Oxidación biológica de la glucosa catalizada por enzimas para generar energía celular." },
    "H₂+Cl₂": { nom: "Síntesis de Ácido Clorhídrico", tipo: "Síntesis Gaseosa", eq: "H₂(g) + Cl₂(g) → 2HCl(g)", desc: "Gases que reaccionan violentamente bajo luz ultravioleta formando cloruro de hidrógeno." },

    // ================= 9. DESCOMPOSICIONES AVANZADAS Y FOTOQUÍMICAS =================
    "AgCl": { nom: "Fotólisis del Cloruro de Plata", tipo: "Descomposición Fotoquímica", eq: "2AgCl(s) + luz (hν) → 2Ag(s) + Cl₂(g)", desc: "Bajo exposición a la luz, el cloruro de plata se oscurece al reducirse a plata metálica y liberar gas cloro. Principio de la fotografía tradicional." },
    "AgBr": { nom: "Fotólisis del Bromuro de Plata", tipo: "Descomposición Fotoquímica", eq: "2AgBr(s) + luz (hν) → 2Ag(s) + Br₂(l)", desc: "Sensible a la luz, se descompone en plata metálica oscura y bromo libre." },
    "KNO₃": { nom: "Descomposición del Salitre", tipo: "Descomposición Térmica", eq: "2KNO₃(s) + Δ → 2KNO₂(s) + O₂(g)↑", desc: "A altas temperaturas, el nitrato de potasio se reduce a nitrito de potasio liberando oxígeno molecular." },
    "NaNO₃": { nom: "Descomposición del Nitrato de Sodio", tipo: "Descomposición Térmica", eq: "2NaNO₃(s) + Δ → 2NaNO₂(s) + O₂(g)↑", desc: "El nitrato de sodio fundido se descompone térmicamente en nitrito de sodio." },
    "PbO₂": { nom: "Descomposición del Óxido de Plomo (IV)", tipo: "Descomposición Térmica", eq: "2PbO₂(s) + Δ → 2PbO(s) + O₂(g)↑", desc: "El dióxido de plomo pardo se calienta para dar óxido de plomo (II) amarillo (litargirio) y oxígeno." },
    "HgO": { nom: "Calcinación del Óxido de Mercurio", tipo: "Descomposición Térmica", eq: "2HgO(s) + Δ → 2Hg(l) + O₂(g)↑", desc: "El óxido rojo de mercurio (II) se descompone al calor en mercurio líquido plateado y gas oxígeno. Reacción histórica de Lavoisier." },

    // ================= 10. SÍNTESIS CON METALES DE TRANSICIÓN Y POST-TRANSICIÓN =================
    "Cl₂+Fe": { nom: "Síntesis de Cloruro de Hierro (III)", tipo: "Síntesis", eq: "2Fe(s) + 3Cl₂(g) → 2FeCl₃(s)", desc: "El hierro caliente en atmósfera de cloro seco produce cloruro de hierro (III) oscuro." },
    "Br₂+Fe": { nom: "Síntesis de Bromuro de Hierro (III)", tipo: "Síntesis", eq: "2Fe(s) + 3Br₂(l) → 2FeBr₃(s)", desc: "Reacción directa del hierro con bromo para formar el haluro férrico." },
    "Cl₂+Cu": { nom: "Síntesis de Cloruro de Cobre (II)", tipo: "Síntesis", eq: "Cu(s) + Cl₂(g) → CuCl₂(s)", desc: "El cobre metálico reacciona con gas cloro para dar un polvo amarillo-marrón que se hidrata a verde-azulado." },
    "Al+Cl₂": { nom: "Síntesis de Cloruro de Aluminio", tipo: "Síntesis Exotérmica", eq: "2Al(s) + 3Cl₂(g) → 2AlCl₃(s)", desc: "El aluminio reacciona violentamente con el cloro gaseoso generando gran cantidad de calor y luz." },
    "Al+Br₂": { nom: "Síntesis de Bromuro de Aluminio", tipo: "Síntesis", eq: "2Al(s) + 3Br₂(l) → 2AlBr₃(s)", desc: "El polvo de aluminio arde espontáneamente al entrar en contacto con bromo líquido." },
    "I₂+Zn": { nom: "Síntesis de Yoduro de Zinc", tipo: "Síntesis", eq: "Zn(s) + I₂(s) + H₂O(cat) → ZnI₂(aq)", desc: "Mezcla de polvos de zinc y yodo que, catalizada por una gota de agua, reacciona violentamente produciendo vapores púrpuras." },

    // ================= 11. FORMACIÓN DE ÓXIDOS (Otros Metales y No Metales) =================
    "Al+O₂": { nom: "Oxidación del Aluminio", tipo: "Síntesis / Pasivación", eq: "4Al(s) + 3O₂(g) → 2Al₂O₃(s)", desc: "El aluminio se oxida formando una capa superficial extremadamente dura e impermeable de alúmina (Al₂O₃)." },
    "O₂+Zn": { nom: "Combustión del Zinc", tipo: "Síntesis / Óxido Metálico", eq: "2Zn(s) + O₂(g) → 2ZnO(s)", desc: "El vapor de zinc arde en el aire formando nubes blancas y algodonosas de óxido de zinc." },
    "Pb+O₂": { nom: "Formación de Litargirio", tipo: "Oxidación", eq: "2Pb(s) + O₂(g) → 2PbO(s)", desc: "Oxidación al rojo del plomo metálico formando óxido de plomo (II) masivo." },
    "N₂+O₂": { nom: "Formación de Óxido Nítrico", tipo: "Síntesis Endotérmica", eq: "N₂(g) + O₂(g) + Arco Eléctrico → 2NO(g)", desc: "A altísimas temperaturas (como un rayo), el nitrógeno y oxígeno atmosféricos se combinan." },
    "O₂+P": { nom: "Combustión del Fósforo", tipo: "Síntesis", eq: "P₄(s) + 5O₂(g) → P₄O₁₀(s)", desc: "El fósforo blanco arde espontáneamente formando un denso humo blanco de pentóxido de difósforo." },

    // ================= 12. HIDRATACIÓN Y ÓXIDOS CON AGUA (Extendido) =================
    "Ba+H₂O": { nom: "Reacción del Bario con Agua", tipo: "Redox / Reacción Alcalina", eq: "Ba(s) + 2H₂O(l) → Ba(OH)₂(aq) + H₂(g)↑", desc: "El bario ataca al agua más violentamente que el calcio, generando hidróxido de bario." },
    "H₂O+Sr": { nom: "Reacción del Estroncio con Agua", tipo: "Redox", eq: "Sr(s) + 2H₂O(l) → Sr(OH)₂(aq) + H₂(g)↑", desc: "El estroncio metálico reacciona con agua produciendo burbujas de hidrógeno y base de estroncio." },
    "BaO+H₂O": { nom: "Hidratación del Óxido de Bario", tipo: "Síntesis / Formación de Base", eq: "BaO(s) + H₂O(l) → Ba(OH)₂(aq)", desc: "Fuerte reacción exotérmica que produce una solución altamente alcalina (agua de barita)." },
    "H₂O+K₂O": { nom: "Hidratación del Óxido de Potasio", tipo: "Hidratación Violenta", eq: "K₂O(s) + H₂O(l) → 2KOH(aq)", desc: "Reacción peligrosamente exotérmica que disuelve el óxido formando sosa potásica cáustica." },
    "H₂O+SO₃": { nom: "Formación de Ácido Sulfúrico", tipo: "Síntesis de Oxoácido", eq: "SO₃(g) + H₂O(l) → H₂SO₄(aq)", desc: "El trióxido de azufre se disuelve en agua violentamente formando ácido sulfúrico. Principal vía de la lluvia ácida fuerte." },
    "H₂O+N₂O₅": { nom: "Formación de Ácido Nítrico", tipo: "Síntesis de Oxoácido", eq: "N₂O₅(s) + H₂O(l) → 2HNO₃(aq)", desc: "El pentóxido de dinitrógeno sólido ataca al agua para formar el fuerte ácido nítrico." },

    // ================= 13. SUSTITUCIÓN SIMPLE AVANZADA (Metales Nobles y Ácidos Oxidantes) =================
    "Cu+HNO₃": { nom: "Ataque Nítrico al Cobre (Concentrado)", tipo: "Redox Compleja", eq: "Cu(s) + 4HNO₃(aq, conc) → Cu(NO₃)₂(aq) + 2NO₂(g)↑ + 2H₂O(l)", desc: "El cobre no reacciona con ácidos simples, pero el ácido nítrico concentrado lo oxida violentamente formando gas tóxico pardo NO₂." },
    "Ag+HNO₃": { nom: "Disolución de Plata", tipo: "Redox", eq: "3Ag(s) + 4HNO₃(aq, dil) → 3AgNO₃(aq) + NO(g)↑ + 2H₂O(l)", desc: "La plata metálica noble se disuelve en ácido nítrico diluido, liberando gas incoloro NO que se oxida a NO₂ en el aire." },
    "Cu+H₂SO₄": { nom: "Ataque Sulfúrico Caliente al Cobre", tipo: "Redox", eq: "Cu(s) + 2H₂O₄(aq, conc+Δ) → CuSO₄(aq) + SO₂(g)↑ + 2H₂O(l)", desc: "Solo cuando el ácido sulfúrico está concentrado y caliente logra oxidar al cobre, emitiendo gas dióxido de azufre sofocante." },
    "AgNO₃+Zn": { nom: "Desplazamiento Argentífero", tipo: "Sustitución Simple", eq: "Zn(s) + 2AgNO₃(aq) → Zn(NO₃)₂(aq) + 2Ag(s)↓", desc: "El zinc oxida rápido precipitando plata metálica pura de la solución de nitrato de plata." },
    "Al+CuSO₄": { nom: "Termita Húmeda (Desplazamiento)", tipo: "Sustitución Simple", eq: "2Al(s) + 3CuSO₄(aq) → Al₂(SO₄)₃(aq) + 3Cu(s)↓", desc: "Si se elimina el óxido pasivo con un cloruro, el aluminio desplaza violentamente al cobre liberando mucho calor." },

    // ================= 14. DOBLE SUSTITUCIÓN: PRECIPITACIONES DE HIDRÓXIDOS =================
    "FeCl₂+NaOH": { nom: "Precipitación de Hidróxido de Hierro (II)", tipo: "Doble Sustitución", eq: "FeCl₂(aq) + 2NaOH(aq) → Fe(OH)₂(s)↓ + 2NaCl(aq)", desc: "Formación de un precipitado verde pálido gelatinoso de Fe(OH)₂, que oxida rápidamente a pardo en el aire." },
    "AlCl₃+NaOH": { nom: "Precipitación Alumínica", tipo: "Doble Sustitución", eq: "AlCl₃(aq) + 3NaOH(aq) → Al(OH)₃(s)↓ + 3NaCl(aq)", desc: "Se forma un sólido blanco gelatinoso. Un exceso de base lo volvería a disolver." },
    "NaOH+ZnSO₄": { nom: "Precipitación de Hidróxido de Zinc", tipo: "Doble Sustitución", eq: "ZnSO₄(aq) + 2NaOH(aq) → Zn(OH)₂(s)↓ + Na₂SO₄(aq)", desc: "Precipitado blanco que exhibe anfoterismo (se disuelve en exceso de ácido o de base)." },
    "Mg(NO₃)₂+NaOH": { nom: "Precipitación Magnésica", tipo: "Doble Sustitución", eq: "Mg(NO₃)₂(aq) + 2NaOH(aq) → Mg(OH)₂(s)↓ + 2NaNO₃(aq)", desc: "Generación de hidróxido de magnesio blanco, conocido en suspensión como leche de magnesia." },

    // ================= 15. DOBLE SUSTITUCIÓN: SULFUROS Y YODUROS (Colores Intensos) =================
    "KI+Pb(NO₃)₂": { nom: "Lluvia de Oro (Yoduro de Plomo)", tipo: "Doble Sustitución", eq: "Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s)↓ + 2KNO₃(aq)", desc: "Al mezclar dos líquidos incoloros precipita instantáneamente un sólido amarillo brillante y denso de yoduro de plomo (II)." },
    "AgNO₃+KI": { nom: "Precipitación de Yoduro de Plata", tipo: "Doble Sustitución", eq: "AgNO₃(aq) + KI(aq) → AgI(s)↓ + KNO₃(aq)", desc: "Formación de un precipitado amarillo pálido muy insoluble, usado históricamente en fotografía y para sembrar nubes." },
    "AgNO₃+NaBr": { nom: "Precipitación de Bromuro de Plata", tipo: "Doble Sustitución", eq: "AgNO₃(aq) + NaBr(aq) → AgBr(s)↓ + NaNO₃(aq)", desc: "Se genera un sólido de color crema claro, fotosensible." },
    "CaCl₂+H₂SO₄": { nom: "Precipitación de Sulfato de Calcio", tipo: "Doble Sustitución", eq: "CaCl₂(aq) + H₂SO₄(aq) → CaSO₄(s)↓ + 2HCl(aq)", desc: "El ion calcio y el sulfato forman sulfato de calcio blanco cristalino (yeso)." },
    "BaCl₂+H₂SO₄": { nom: "Precipitación Bártica", tipo: "Doble Sustitución", eq: "BaCl₂(aq) + H₂SO₄(aq) → BaSO₄(s)↓ + 2HCl(aq)", desc: "Reacción cualitativa clásica. Forma un precipitado blanco de sulfato de bario, extremadamente insoluble e inerte frente a ácidos." },
    "BaCl₂+Na₂SO₄": { nom: "Doble Sustitución Neutra", tipo: "Precipitación", eq: "BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s)↓ + 2NaCl(aq)", desc: "Alternativa segura para precipitar sulfato de bario blanco sin generar ácidos libres." },

    // ================= 16. NEUTRALIZACIONES AVANZADAS (Fósforo, Nitrógeno y Orgánicos) =================
    "H₃PO₄+NaOH": { nom: "Neutralización Fosfórica I", tipo: "Neutralización Poliprótica", eq: "H₃PO₄(aq) + 3NaOH(aq) → Na₃PO₄(aq) + 3H₂O(l)", desc: "Neutralización total del ácido fosfórico fuerte formando fosfato de sodio tribásico." },
    "HNO₃+NH₃": { nom: "Síntesis de Nitrato de Amonio", tipo: "Neutralización Gaseosa/Acuosa", eq: "HNO₃(aq) + NH₃(aq) → NH₄NO₃(aq)", desc: "El ácido nítrico y la base amoníaca forman nitrato de amonio, un fertilizante vital y explosivo potente al secarse." },
    "H₂SO₄+NH₃": { nom: "Síntesis de Sulfato de Amonio", tipo: "Neutralización", eq: "H₂SO₄(aq) + 2NH₃(aq) → (NH₄)₂SO₄(aq)", desc: "Producción de sulfato de amonio, sal utilizada primariamente para disminuir el pH de suelos alcalinos." },

    // ================= 17. REACCIONES CON CARBONATOS Y BICARBONATOS (Ácido + Carbonato) =================
    "CaCO₃+HCl": { nom: "Prueba de Ácido en Caliza", tipo: "Doble Sustitución / Descomposición", eq: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)↑", desc: "El ácido ataca al carbonato mineral produciendo burbujeo intenso de dióxido de carbono. Usado por geólogos para identificar caliza." },
    "H₂SO₄+NaHCO₃": { nom: "Ataque Sulfúrico a Bicarbonato", tipo: "Neutralización c/ Gas", eq: "H₂SO₄(aq) + 2NaHCO₃(s) → Na₂SO₄(aq) + 2H₂O(l) + 2CO₂(g)↑", desc: "Violenta liberación de gas carbónico, dejando sulfato de sodio acuoso." },
    "CH₃COOH+CaCO₃": { nom: "Ataque Ácido Suave a Caliza", tipo: "Neutralización Acética", eq: "2CH₃COOH(aq) + CaCO₃(s) → Ca(CH₃COO)₂(aq) + H₂O(l) + CO₂(g)↑", desc: "El vinagre disuelve lentamente la caliza, el mármol o las cáscaras de huevo liberando CO₂." },

    // ================= 18. COMBUSTIÓN Y REACCIONES ORGÁNICAS BÁSICAS =================
    "C₄H₁₀+O₂": { nom: "Combustión del Butano", tipo: "Combustión Completa", eq: "2C₄H₁₀(g) + 13O₂(g) → 8CO₂(g) + 10H₂O(g) + Δ", desc: "El gas de encendedores arde exotérmicamente si dispone de una mezcla estequiométrica de oxígeno atmosférico." },
    "C₈H₁₈+O₂": { nom: "Combustión del Octano (Gasolina)", tipo: "Combustión Completa", eq: "2C₈H₁₈(l) + 25O₂(g) → 16CO₂(g) + 18H₂O(g) + Δ", desc: "Reacción primaria en motores de combustión interna, altamente exotérmica." },

    // ================= 19. SÍNTESIS: ÓXIDOS SUPERIORES Y PERÓXIDOS =================
    "K+O₂": { nom: "Formación de Superóxido de Potasio", tipo: "Síntesis / Superóxido", eq: "K(s) + O₂(g) → KO₂(s)", desc: "El potasio arde en exceso de oxígeno formando un polvo amarillo-anaranjado paramagnético." },
    "Na+O₂": { nom: "Formación de Peróxido de Sodio", tipo: "Síntesis / Peróxido", eq: "2Na(s) + O₂(g) → Na₂O₂(s)", desc: "El sodio metálico a 130-200°C en oxígeno puro genera un sólido amarillento con fuerte poder oxidante." },
    "Ba+O₂": { nom: "Formación de Peróxido de Bario", tipo: "Síntesis / Peróxido", eq: "Ba(s) + O₂(g) → BaO₂(s)", desc: "Al calentar óxido de bario a 500°C en aire se forma el peróxido, históricamente usado para obtener H₂O₂." },
    "Li+O₂": { nom: "Combustión del Litio", tipo: "Síntesis / Óxido Normal", eq: "4Li(s) + O₂(g) → 2Li₂O(s)", desc: "A diferencia del Na y K, el litio arde formando predominantemente su óxido normal (blanco), debido a la alta densidad de carga del catión Li⁺." },
    "N₂+O₂": { nom: "Síntesis de Dióxido de Nitrógeno", tipo: "Oxidación Continua", eq: "2NO(g) + O₂(g) → 2NO₂(g)", desc: "El óxido nítrico incoloro reacciona espontáneamente con oxígeno en frío para formar gas NO₂ pardo y tóxico." },
    "P+O₂": { nom: "Combustión Incompleta del Fósforo", tipo: "Síntesis", eq: "P₄(s) + 3O₂(g) → P₄O₆(s)", desc: "Si el oxígeno es limitado, el fósforo blanco produce humo de hexóxido de tetrafósforo en lugar de P₄O₁₀." },

    // ================= 20. SÍNTESIS CON HALÓGENOS (Variedad de Estados de Oxidación) =================
    "Cu+Cl₂": { nom: "Formación de Cloruro de Cobre (I) y (II)", tipo: "Síntesis", eq: "2Cu(s) + Cl₂(g) → 2CuCl(s)", desc: "A temperaturas moderadas o con poco cloro, se forma el haluro cuproso (incoloro/blanco)." },
    "Fe+Br₂": { nom: "Síntesis de Bromuro Férrico", tipo: "Síntesis", eq: "2Fe(s) + 3Br₂(l) → 2FeBr₃(s)", desc: "Reacción directa que forma cristales higroscópicos de color rojo-marrón intenso." },
    "Fe+I₂": { nom: "Síntesis de Yoduro Ferroso", tipo: "Síntesis", eq: "Fe(s) + I₂(s) → FeI₂(s)", desc: "El yodo es un oxidante más débil que Cl₂ o Br₂, por lo que oxida al hierro solo hasta su estado de oxidación +2." },
    "Al+I₂": { nom: "Síntesis de Yoduro de Aluminio", tipo: "Síntesis Exotérmica", eq: "2Al(s) + 3I₂(s) + H₂O(cat) → 2AlI₃(s)", desc: "La mezcla en seco no reacciona, pero una gota de agua cataliza una reacción violenta con espectaculares nubes de vapor de yodo púrpura." },
    "Ag+F₂": { nom: "Formación de Fluoruro de Plata (II)", tipo: "Oxidación Fuerte", eq: "Ag(s) + F₂(g) → AgF₂(s)", desc: "El flúor es el único elemento capaz de oxidar la plata a su raro estado +2, formando un polvo negro fuertemente oxidante." },
    "Hg+Cl₂": { nom: "Formación de Cloruro Mercúrico (Sublimado Corrosivo)", tipo: "Síntesis", eq: "Hg(l) + Cl₂(g) → HgCl₂(s)", desc: "El mercurio líquido reacciona con gas cloro generando un sólido blanco cristalino y extremadamente tóxico." },
    "Pb+Cl₂": { nom: "Síntesis de Cloruro de Plomo (II)", tipo: "Síntesis", eq: "Pb(s) + Cl₂(g) → PbCl₂(s)", desc: "Reacción directa que rinde un polvo blanco poco soluble en agua fría, pero soluble en caliente." },

    // ================= 21. DESPLAZAMIENTOS Y FORMACIÓN DE SULFUROS =================
    "Fe+S": { nom: "Formación de Sulfuro de Hierro (II)", tipo: "Síntesis Endotérmica (Inicial)", eq: "Fe(s) + S(s) + Δ → FeS(s)", desc: "Mezcla de polvos (gris y amarillo) que, al calentarse, inicia una reacción exotérmica rojiza formando una masa negra de pirita." },
    "Cu+S": { nom: "Formación de Sulfuro de Cobre (I)", tipo: "Síntesis", eq: "2Cu(s) + S(s) + Δ → Cu₂S(s)", desc: "Al calentar cobre con azufre se genera sulfuro cuproso oscuro, a menudo brillante." },
    "Zn+S": { nom: "Formación de Sulfuro de Zinc", tipo: "Síntesis Explosiva", eq: "Zn(s) + S(s) → ZnS(s) + Energía", desc: "La ignición de polvos finamente mezclados genera un destello cegador y nubes expansivas (frecuente en cohetes amateurs)." },
    "Ag+S": { nom: "Deslustre de la Plata", tipo: "Oxidación Sulfhídrica", eq: "2Ag(s) + H₂S(g) → Ag₂S(s) + H₂(g)", desc: "El deslustre negro clásico de los cubiertos de plata se debe a pequeñas cantidades de ácido sulfhídrico en el aire o comida." },
    "Pb+S": { nom: "Formación de Galena Artificial", tipo: "Síntesis", eq: "Pb(s) + S(s) + Δ → PbS(s)", desc: "Fusión de plomo y azufre produciendo sulfuro de plomo negro-grisáceo." },

    // ================= 22. NEUTRALIZACIONES DIVERSAS (Ácidos: HBr, HClO₄, HF, H₂S) =================
    "HBr+NaOH": { nom: "Neutralización Bromhídrica", tipo: "Neutralización Fuerte", eq: "HBr(aq) + NaOH(aq) → NaBr(aq) + H₂O(l)", desc: "Formación de bromuro de sodio neutro altamente soluble en la matriz acuosa." },
    "HBr+KOH": { nom: "Formación de Bromuro de Potasio", tipo: "Neutralización Fuerte", eq: "HBr(aq) + KOH(aq) → KBr(aq) + H₂O(l)", desc: "Clásica obtención de KBr para usos médicos o cristales ópticos." },
    "HClO₄+NaOH": { nom: "Neutralización Perclórica", tipo: "Neutralización", eq: "HClO₄(aq) + NaOH(aq) → NaClO₄(aq) + H₂O(l)", desc: "Reacción con el fortísimo ácido perclórico para formar perclorato de sodio." },
    "HClO₄+KOH": { nom: "Formación de Perclorato de Potasio", tipo: "Neutralización", eq: "HClO₄(aq) + KOH(aq) → KClO₄(s)↓ + H₂O(l)", desc: "A diferencia del Na, el perclorato de potasio tiene baja solubilidad y precipitará en frío." },
    "HF+NaOH": { nom: "Neutralización Fluorhídrica", tipo: "Neutralización Débil/Fuerte", eq: "HF(aq) + NaOH(aq) → NaF(aq) + H₂O(l)", desc: "El ácido fluorhídrico (que disuelve vidrio) reacciona formando fluoruro de sodio." },
    "H₂S+NaOH": { nom: "Formación de Sulfuro de Sodio", tipo: "Neutralización Diprótica", eq: "H₂S(g) + 2NaOH(aq) → Na₂S(aq) + 2H₂O(l)", desc: "El gas sulfhídrico (olor a huevos podridos) se absorbe en sosa para formar sulfuro sódico disuelto." },
    "H₂S+KOH": { nom: "Formación de Sulfuro de Potasio", tipo: "Neutralización Diprótica", eq: "H₂S(g) + 2KOH(aq) → K₂S(aq) + 2H₂O(l)", desc: "Reacción homóloga con potasa cáustica." },

    // ================= 23. DESPLAZAMIENTO METÁLICO (Serie Electromotriz Extensa) =================
    "AgNO₃+Fe": { nom: "Desplazamiento de Plata por Hierro", tipo: "Sustitución Simple", eq: "Fe(s) + 2AgNO₃(aq) → Fe(NO₃)₂(aq) + 2Ag(s)↓", desc: "El hierro oxida y desplaza a la plata, precipitándola como cristales oscuros sobre el metal." },
    "AgNO₃+Mg": { nom: "Desplazamiento Rápido de Plata", tipo: "Sustitución Simple", eq: "Mg(s) + 2AgNO₃(aq) → Mg(NO₃)₂(aq) + 2Ag(s)↓", desc: "Dada la alta reactividad del magnesio, la plata precipita velozmente como un lodo negro o espejado." },
    "CuSO₄+Mg": { nom: "Desplazamiento Rápido de Cobre", tipo: "Sustitución Simple", eq: "Mg(s) + CuSO₄(aq) → MgSO₄(aq) + Cu(s)↓", desc: "La solución azul se decolora rápidamente mientras el cobre esponjoso rojo oscuro precipita." },
    "CuSO₄+Al": { nom: "Ataque del Aluminio al Sulfato de Cobre", tipo: "Sustitución Simple (Con HCl catalizador)", eq: "2Al(s) + 3CuSO₄(aq) → Al₂(SO₄)₃(aq) + 3Cu(s)↓", desc: "Requiere destruir la capa pasiva del Al con cloruros. Desprende mucho calor y gas hidrógeno secundario." },
    "Pb(NO₃)₂+Zn": { nom: "Formación del Árbol de Saturno", tipo: "Sustitución Simple", eq: "Zn(s) + Pb(NO₃)₂(aq) → Zn(NO₃)₂(aq) + Pb(s)↓", desc: "El zinc desplaza al plomo, el cual cristaliza en hermosas ramificaciones grisáceas metálicas." },
    "Pb(NO₃)₂+Fe": { nom: "Desplazamiento de Plomo", tipo: "Sustitución Simple", eq: "Fe(s) + Pb(NO₃)₂(aq) → Fe(NO₃)₂(aq) + Pb(s)↓", desc: "El hierro es suficiente para desplazar al catión plomo de su sal." },

    // ================= 24. PRECIPITACIÓN DE SALES INSOLUBLES (Doble Sustitución) =================
    "BaCl₂+K₂CrO₄": { nom: "Precipitación de Cromato de Bario", tipo: "Precipitación (Amarilla)", eq: "BaCl₂(aq) + K₂CrO₄(aq) → BaCrO₄(s)↓ + 2KCl(aq)", desc: "El ion bario reacciona con el cromato formando un precipitado amarillo intenso insoluble." },
    "Pb(NO₃)₂+K₂CrO₄": { nom: "Precipitación de Cromato de Plomo", tipo: "Precipitación (Amarilla)", eq: "Pb(NO₃)₂(aq) + K₂CrO₄(aq) → PbCrO₄(s)↓ + 2KNO₃(aq)", desc: "Se genera el clásico pigmento 'Amarillo de Cromo', tóxico y brillante." },
    "AgNO₃+K₂CrO₄": { nom: "Precipitación de Cromato de Plata", tipo: "Precipitación (Roja)", eq: "2AgNO₃(aq) + K₂CrO₄(aq) → Ag₂CrO₄(s)↓ + 2KNO₃(aq)", desc: "Formación de un llamativo precipitado rojo ladrillo (indicador en el método de Mohr)." },
    "Ca(NO₃)₂+Na₂SO₄": { nom: "Precipitación de Sulfato de Calcio", tipo: "Precipitación (Yeso)", eq: "Ca(NO₃)₂(aq) + Na₂SO₄(aq) → CaSO₄(s)↓ + 2NaNO₃(aq)", desc: "El yeso cristaliza lentamente como un sólido blanco en soluciones concentradas." },
    "Sr(NO₃)₂+Na₂SO₄": { nom: "Precipitación de Sulfato de Estroncio", tipo: "Precipitación", eq: "Sr(NO₃)₂(aq) + Na₂SO₄(aq) → SrSO₄(s)↓ + 2NaNO₃(aq)", desc: "Precipitado blanco masivo análogo al sulfato de bario pero ligeramente más soluble." },
    "Ba(NO₃)₂+Na₂CO₃": { nom: "Precipitación de Carbonato de Bario", tipo: "Precipitación", eq: "Ba(NO₃)₂(aq) + Na₂CO₃(aq) → BaCO₃(s)↓ + 2NaNO₃(aq)", desc: "Sólido blanco insoluble, tóxico y usado históricamente como raticida (witherita)." },
    "Sr(NO₃)₂+Na₂CO₃": { nom: "Precipitación de Carbonato de Estroncio", tipo: "Precipitación", eq: "Sr(NO₃)₂(aq) + Na₂CO₃(aq) → SrCO₃(s)↓ + 2NaNO₃(aq)", desc: "Precipitado calcáreo blanco utilizado en la manufactura de fuegos artificiales rojos." },

    // ================= 25. DESCOMPOSICIONES DIVERSAS (Óxidos, Peróxidos, Carbonatos y Azidas) =================
    "NaN₃": { nom: "Descomposición de la Azida de Sodio", tipo: "Descomposición Explosiva", eq: "2NaN₃(s) + Δ → 2Na(s) + 3N₂(g)↑", desc: "Al calentarse a ~300°C o por impacto eléctrico, se descompone en milisegundos liberando gas nitrógeno. Base de las bolsas de aire (airbags)." },
    "KMnO₄": { nom: "Descomposición del Permanganato", tipo: "Descomposición Térmica", eq: "2KMnO₄(s) + Δ → K₂MnO₄(s) + MnO₂(s) + O₂(g)↑", desc: "El permanganato de potasio morado se calienta liberando oxígeno puro y dejando un residuo negro y verde." },
    "CuCO₃": { nom: "Descomposición del Carbonato de Cobre", tipo: "Descomposición Térmica", eq: "CuCO₃(s) + Δ → CuO(s) + CO₂(g)↑", desc: "El polvo verde turquesa se ennegrece lentamente al calor formando óxido de cobre (II) y liberando gas." },
    "MgCO₃": { nom: "Descomposición de la Magnesita", tipo: "Descomposición Térmica", eq: "MgCO₃(s) + Δ → MgO(s) + CO₂(g)↑", desc: "La calcinación produce óxido de magnesio, material refractario esencial en hornos." },
    "ZnSO₄+H₂S": { nom: "Precipitación de Sulfuro de Zinc", tipo: "Doble Sustitución", eq: "ZnSO₄(aq) + H₂S(g) → ZnS(s)↓ + H₂SO₄(aq)", desc: "Produce un raro precipitado de sulfuro blanco puro (esfalerita)." },
    "Cd(NO₃)₂+H₂S": { nom: "Precipitación de Sulfuro de Cadmio", tipo: "Precipitación (Amarilla)", eq: "Cd(NO₃)₂(aq) + H₂S(g) → CdS(s)↓ + 2HNO₃(aq)", desc: "El cadmio reacciona formando un pigmento amarillo brillante y vibrante (Amarillo de Cadmio)." },
    "SbCl₃+H₂S": { nom: "Precipitación de Sulfuro de Antimonio", tipo: "Precipitación (Naranja)", eq: "2SbCl₃(aq) + 3H₂S(g) → Sb₂S₃(s)↓ + 6HCl(aq)", desc: "Generación de un precipitado anaranjado característico del antimonio (estibina)." },

    // ================= 27. SÍNTESIS DE HIDRÓXIDOS INSOLUBLES =================
    "FeCl₃+NaOH": { nom: "Precipitación de Hidróxido de Hierro (III)", tipo: "Precipitación Gelatinosa", eq: "FeCl₃(aq) + 3NaOH(aq) → Fe(OH)₃(s)↓ + 3NaCl(aq)", desc: "Se coagula un copioso precipitado de color óxido rojizo (pardo), totalmente insoluble en agua." },
    "NiCl₂+NaOH": { nom: "Precipitación de Hidróxido de Níquel", tipo: "Precipitación", eq: "NiCl₂(aq) + 2NaOH(aq) → Ni(OH)₂(s)↓ + 2NaCl(aq)", desc: "La solución verde pálido precipita un hidróxido gelatinoso verde manzana o esmeralda." },
    "CoCl₂+NaOH": { nom: "Precipitación de Hidróxido de Cobalto", tipo: "Precipitación", eq: "CoCl₂(aq) + 2NaOH(aq) → Co(OH)₂(s)↓ + 2NaCl(aq)", desc: "Precipita inicialmente en un tono azul vibrante que, por hidratación u oxidación, vira a un polvo rosado." },
    "MnCl₂+NaOH": { nom: "Precipitación de Hidróxido de Manganeso", tipo: "Precipitación / Oxidación Lenta", eq: "MnCl₂(aq) + 2NaOH(aq) → Mn(OH)₂(s)↓ + 2NaCl(aq)", desc: "Crea un precipitado blanco pálido o carnoso que rápidamente se oxida en aire a tonos castaños oscuros (MnO₂)." },
    "CrCl₃+NaOH": { nom: "Precipitación de Hidróxido de Cromo", tipo: "Precipitación Anfótera", eq: "CrCl₃(aq) + 3NaOH(aq) → Cr(OH)₃(s)↓ + 3NaCl(aq)", desc: "Formación de un polvo gelatinoso verde grisáceo." },

    // ================= 28. SÍNTESIS DE HALUROS (Alcalinos y Alcalinotérreos Restantes) =================
    "F₂+Li": { nom: "Síntesis de Fluoruro de Litio", tipo: "Síntesis", eq: "2Li(s) + F₂(g) → 2LiF(s)", desc: "Reacción redox directa altamente exotérmica. El litio cede su electrón de valencia al flúor." },
    "Br₂+Li": { nom: "Síntesis de Bromuro de Litio", tipo: "Síntesis", eq: "2Li(s) + Br₂(l) → 2LiBr(s)", desc: "Combinación directa del litio con bromo líquido para formar una sal higroscópica." },
    "I₂+Li": { nom: "Síntesis de Yoduro de Litio", tipo: "Síntesis", eq: "2Li(s) + I₂(s) → 2LiI(s)", desc: "Oxidación del litio metálico por yodo sólido, generando un cristal iónico." },
    "F₂+Rb": { nom: "Síntesis de Fluoruro de Rubidio", tipo: "Síntesis Violenta", eq: "2Rb(s) + F₂(g) → 2RbF(s)", desc: "Reacción explosiva debido a la alta reactividad del rubidio y el extremo poder oxidante del flúor." },
    "Cl₂+Rb": { nom: "Síntesis de Cloruro de Rubidio", tipo: "Síntesis", eq: "2Rb(s) + Cl₂(g) → 2RbCl(s)", desc: "El rubidio arde en atmósfera de cloro produciendo su respectiva sal haloidea." },
    "Br₂+Rb": { nom: "Síntesis de Bromuro de Rubidio", tipo: "Síntesis", eq: "2Rb(s) + Br₂(l) → 2RbBr(s)", desc: "Formación de bromuro de rubidio cristalino mediante transferencia electrónica total." },
    "I₂+Rb": { nom: "Síntesis de Yoduro de Rubidio", tipo: "Síntesis", eq: "2Rb(s) + I₂(s) → 2RbI(s)", desc: "El rubidio metálico reduce al yodo diatómico formando una red iónica estable." },
    "Cs+F₂": { nom: "Síntesis de Fluoruro de Cesio", tipo: "Síntesis Explosiva", eq: "2Cs(s) + F₂(g) → 2CsF(s)", desc: "Una de las reacciones más vigorosas posibles entre elementos estables, dada la extrema diferencia de electronegatividad." },
    "Cl₂+Cs": { nom: "Síntesis de Cloruro de Cesio", tipo: "Síntesis", eq: "2Cs(s) + Cl₂(g) → 2CsCl(s)", desc: "Síntesis de la sal haloidea típica que cristaliza en una red cúbica centrada en el cuerpo." },
    "Br₂+Cs": { nom: "Síntesis de Bromuro de Cesio", tipo: "Síntesis", eq: "2Cs(s) + Br₂(l) → 2CsBr(s)", desc: "El cesio reacciona instantáneamente con el bromo líquido." },
    "Cs+I₂": { nom: "Síntesis de Yoduro de Cesio", tipo: "Síntesis", eq: "2Cs(s) + I₂(s) → 2CsI(s)", desc: "Oxidación del cesio por yodo diatómico para formar yoduro de cesio sólido." },
    "Be+F₂": { nom: "Síntesis de Fluoruro de Berilio", tipo: "Síntesis", eq: "Be(s) + F₂(g) → BeF₂(s)", desc: "El berilio alcalinotérreo oxida formando un compuesto con marcado carácter covalente polimérico." },
    "Be+Cl₂": { nom: "Síntesis de Cloruro de Berilio", tipo: "Síntesis", eq: "Be(s) + Cl₂(g) → BeCl₂(s)", desc: "Combinación directa a alta temperatura para producir cloruro de berilio." },
    "F₂+Mg": { nom: "Síntesis de Fluoruro de Magnesio", tipo: "Síntesis", eq: "Mg(s) + F₂(g) → MgF₂(s)", desc: "El magnesio arde en flúor produciendo una sal blanca insoluble en agua." },
    "Br₂+Mg": { nom: "Síntesis de Bromuro de Magnesio", tipo: "Síntesis", eq: "Mg(s) + Br₂(l) → MgBr₂(s)", desc: "Reacción directa que produce el bromuro de magnesio fuertemente higroscópico." },
    "I₂+Mg": { nom: "Síntesis de Yoduro de Magnesio", tipo: "Síntesis", eq: "Mg(s) + I₂(s) → MgI₂(s)", desc: "Oxidación del magnesio metálico mediante yodo sólido calentado." },
    "Br₂+Ca": { nom: "Síntesis de Bromuro de Calcio", tipo: "Síntesis", eq: "Ca(s) + Br₂(l) → CaBr₂(s)", desc: "El calcio transfiere dos electrones reduciendo la molécula de bromo diatómico." },
    "Ca+I₂": { nom: "Síntesis de Yoduro de Calcio", tipo: "Síntesis", eq: "Ca(s) + I₂(s) → CaI₂(s)", desc: "Síntesis directa del yoduro de calcio, un compuesto sumamente delicuescente." },
    "F₂+Sr": { nom: "Síntesis de Fluoruro de Estroncio", tipo: "Síntesis", eq: "Sr(s) + F₂(g) → SrF₂(s)", desc: "El estroncio reacciona con flúor para formar un cristal incoloro y muy denso." },
    "Cl₂+Sr": { nom: "Síntesis de Cloruro de Estroncio", tipo: "Síntesis", eq: "Sr(s) + Cl₂(g) → SrCl₂(s)", desc: "Reacción típica de alcalinotérreo con gas halógeno." },
    "Br₂+Sr": { nom: "Síntesis de Bromuro de Estroncio", tipo: "Síntesis", eq: "Sr(s) + Br₂(l) → SrBr₂(s)", desc: "Formación de sal haloidea bivalente de estroncio." },
    "I₂+Sr": { nom: "Síntesis de Yoduro de Estroncio", tipo: "Síntesis", eq: "Sr(s) + I₂(s) → SrI₂(s)", desc: "El estroncio metálico se oxida frente al yodo." },
    "Ba+F₂": { nom: "Síntesis de Fluoruro de Bario", tipo: "Síntesis", eq: "Ba(s) + F₂(g) → BaF₂(s)", desc: "Formación de fluoruro de bario, insoluble y utilizado en óptica infrarroja." },
    "Ba+Cl₂": { nom: "Síntesis de Cloruro de Bario", tipo: "Síntesis", eq: "Ba(s) + Cl₂(g) → BaCl₂(s)", desc: "Síntesis directa de la sal soluble de bario." },
    "Ba+Br₂": { nom: "Síntesis de Bromuro de Bario", tipo: "Síntesis", eq: "Ba(s) + Br₂(l) → BaBr₂(s)", desc: "El bario reduce al bromo líquido exotérmicamente." },
    "Ba+I₂": { nom: "Síntesis de Yoduro de Bario", tipo: "Síntesis", eq: "Ba(s) + I₂(s) → BaI₂(s)", desc: "Reacción directa para formar la sal de yoduro bártico." },

    // ================= 29. FORMACIÓN DE SULFUROS METÁLICOS =================
    "Li+S": { nom: "Síntesis de Sulfuro de Litio", tipo: "Síntesis", eq: "2Li(s) + S(s) + Δ → Li₂S(s)", desc: "Fusión de litio y azufre produciendo sulfuro de litio con estructura antifluorita." },
    "Na+S": { nom: "Síntesis de Sulfuro de Sodio", tipo: "Síntesis", eq: "2Na(s) + S(s) + Δ → Na₂S(s)", desc: "El sodio fundido reacciona con azufre para formar una sal altamente alcalina en solución." },
    "K+S": { nom: "Síntesis de Sulfuro de Potasio", tipo: "Síntesis", eq: "2K(s) + S(s) + Δ → K₂S(s)", desc: "Reacción exotérmica que produce un compuesto muy reactivo al aire húmedo." },
    "Rb+S": { nom: "Síntesis de Sulfuro de Rubidio", tipo: "Síntesis", eq: "2Rb(s) + S(s) + Δ → Rb₂S(s)", desc: "Generación de sulfuro de rubidio mediante combinación directa de sus elementos puros." },
    "Cs+S": { nom: "Síntesis de Sulfuro de Cesio", tipo: "Síntesis", eq: "2Cs(s) + S(s) + Δ → Cs₂S(s)", desc: "El cesio reacciona con azufre produciendo una sal incolora que oxida rápidamente." },
    "Be+S": { nom: "Síntesis de Sulfuro de Berilio", tipo: "Síntesis", eq: "Be(s) + S(s) + Δ → BeS(s)", desc: "Formación de sulfuro de berilio mediante calentamiento prolongado en vacío." },
    "Mg+S": { nom: "Síntesis de Sulfuro de Magnesio", tipo: "Síntesis", eq: "Mg(s) + S(s) + Δ → MgS(s)", desc: "Combustión del magnesio en atmósfera de azufre, generando un cristal cúrico." },
    "Ca+S": { nom: "Síntesis de Sulfuro de Calcio", tipo: "Síntesis", eq: "Ca(s) + S(s) + Δ → CaS(s)", desc: "El calcio reacciona con azufre para formar un compuesto luminiscente en presencia de impurezas." },
    "S+Sr": { nom: "Síntesis de Sulfuro de Estroncio", tipo: "Síntesis", eq: "Sr(s) + S(s) + Δ → SrS(s)", desc: "Reacción térmica que rinde sulfato de estroncio inorgánico." },
    "Ba+S": { nom: "Síntesis de Sulfuro de Bario", tipo: "Síntesis", eq: "Ba(s) + S(s) + Δ → BaS(s)", desc: "Producción de sulfuro de bario, precursor industrial de otras sales de bario." },

    // ================= 30. FORMACIÓN DE NITRUROS =================
    "Li+N₂": { nom: "Formación de Nitruro de Litio", tipo: "Síntesis Excepcional", eq: "6Li(s) + N₂(g) → 2Li₃N(s)", desc: "El litio es el único metal alcalino que reacciona directamente con nitrógeno diatómico a temperatura ambiente." },
    "Mg+N₂": { nom: "Formación de Nitruro de Magnesio", tipo: "Síntesis", eq: "3Mg(s) + N₂(g) + Δ → Mg₃N₂(s)", desc: "La calcinación del magnesio en aire produce este nitruro junto con su óxido." },
    "Ca+N₂": { nom: "Formación de Nitruro de Calcio", tipo: "Síntesis Térmica", eq: "3Ca(s) + N₂(g) + Δ → Ca₃N₂(s)", desc: "A altas temperaturas, el calcio fija el nitrógeno gaseoso." },
    "Al+N₂": { nom: "Formación de Nitruro de Aluminio", tipo: "Síntesis Térmica", eq: "2Al(s) + N₂(g) + Δ → 2AlN(s)", desc: "El polvo de aluminio calentado reacciona con nitrógeno formando un material cerámico superconductor térmico." },

    // ================= 31. ATAQUES ÁCIDOS (Ácido Clorhídrico y Sulfúrico Extendido) =================
    "HCl+Li": { nom: "Corrosión del Litio", tipo: "Sustitución Simple", eq: "2Li(s) + 2HCl(aq) → 2LiCl(aq) + H₂(g)↑", desc: "El litio desplaza los protones del ácido clorhídrico generando gran cantidad de calor y gas." },
    "HCl+Rb": { nom: "Corrosión del Rubidio", tipo: "Sustitución Simple Explosiva", eq: "2Rb(s) + 2HCl(aq) → 2RbCl(aq) + H₂(g)↑", desc: "Reacción extremadamente violenta donde el rubidio reduce instantáneamente los protones disueltos." },
    "Ca+HCl": { nom: "Corrosión del Calcio", tipo: "Sustitución Simple", eq: "Ca(s) + 2HCl(aq) → CaCl₂(aq) + H₂(g)↑", desc: "El calcio metálico se disuelve en ácido produciendo cloruro de calcio acuoso." },
    "HCl+Sr": { nom: "Ataque Ácido al Estroncio", tipo: "Sustitución Simple", eq: "Sr(s) + 2HCl(aq) → SrCl₂(aq) + H₂(g)↑", desc: "Formación rápida de cloruro de estroncio mediante desprendimiento de gas diatómico." },
    "Ba+HCl": { nom: "Ataque Ácido al Bario", tipo: "Sustitución Simple", eq: "Ba(s) + 2HCl(aq) → BaCl₂(aq) + H₂(g)↑", desc: "Disolución exotérmica del bario metálico en el medio ácido." },
    "Co+HCl": { nom: "Corrosión del Cobalto", tipo: "Sustitución Simple Lenta", eq: "Co(s) + 2HCl(aq) → CoCl₂(aq) + H₂(g)↑", desc: "El cobalto se oxida lentamente en ácidos no oxidantes generando una solución rosada." },
    "HCl+Ni": { nom: "Corrosión del Níquel", tipo: "Sustitución Simple Lenta", eq: "Ni(s) + 2HCl(aq) → NiCl₂(aq) + H₂(g)↑", desc: "El níquel disuelve de manera parsimoniosa formando una característica solución verde." },
    "Cr+HCl": { nom: "Ataque Ácido al Cromo", tipo: "Sustitución Simple", eq: "Cr(s) + 2HCl(aq) → CrCl₂(aq) + H₂(g)↑", desc: "El cromo metálico desplaza al hidrógeno, formando cloruro de cromo (II) de tono azul." },
    "HCl+Sn": { nom: "Corrosión del Estaño", tipo: "Sustitución Simple", eq: "Sn(s) + 2HCl(aq) → SnCl₂(aq) + H₂(g)↑", desc: "El estaño es débilmente atacado por el ácido clorhídrico caliente, dando cloruro estannoso." },
    "HCl+Pb": { nom: "Ataque Superficial al Plomo", tipo: "Sustitución Simple (Inhibida)", eq: "Pb(s) + 2HCl(aq) → PbCl₂(s)↓ + H₂(g)↑", desc: "La reacción se detiene rápidamente al formarse una capa insoluble de cloruro de plomo sobre el metal." },

    // Ácido Sulfúrico (Metales)
    "H₂SO₄+Li": { nom: "Corrosión Sulfúrica del Litio", tipo: "Sustitución Simple", eq: "2Li(s) + H₂SO₄(aq) → Li₂SO₄(aq) + H₂(g)↑", desc: "Violento desprendimiento de hidrógeno al atacar el litio con ácido sulfúrico diluido." },
    "H₂SO₄+Na": { nom: "Corrosión Sulfúrica del Sodio", tipo: "Sustitución Simple", eq: "2Na(s) + H₂SO₄(aq) → Na₂SO₄(aq) + H₂(g)↑", desc: "Reacción peligrosa y descontrolada de un metal alcalino frente a un ácido fuerte." },
    "H₂SO₄+K": { nom: "Corrosión Sulfúrica del Potasio", tipo: "Sustitución Simple", eq: "2K(s) + H₂SO₄(aq) → K₂SO₄(aq) + H₂(g)↑", desc: "Explosión inminente por la rápida generación de hidrógeno y enorme entalpía térmica." },
    "Ca+H₂SO₄": { nom: "Ataque Sulfúrico al Calcio", tipo: "Sustitución Simple", eq: "Ca(s) + H₂SO₄(aq) → CaSO₄(s)↓ + H₂(g)↑", desc: "La formación de sulfato de calcio insoluble tiende a pasivar el metal y detener la reacción." },
    "Al+H₂SO₄": { nom: "Corrosión Alumínica Sulfúrica", tipo: "Sustitución Simple", eq: "2Al(s) + 3H₂SO₄(aq) → Al₂(SO₄)₃(aq) + 3H₂(g)↑", desc: "El aluminio se disuelve en ácido sulfúrico formando sulfato de aluminio y burbujas de gas." },

    // ================= 32. PRECIPITACIONES METÁTICAS (Doble Sustitución Masiva) =================
    // Nitratos de Plata (AgNO3)
    "AgNO₃+KI": { nom: "Precipitación de Yoduro de Plata", tipo: "Precipitación", eq: "AgNO₃(aq) + KI(aq) → AgI(s)↓ + KNO₃(aq)", desc: "Formación de un sólido amarillo pálido muy estable, con aplicaciones fotográficas históricas." },
    "AgNO₃+NaBr": { nom: "Precipitación de Bromuro de Plata", tipo: "Precipitación", eq: "AgNO₃(aq) + NaBr(aq) → AgBr(s)↓ + NaNO₃(aq)", desc: "Se genera un precipitado color crema sensible a la radiación lumínica." },
    "AgNO₃+Na₂CO₃": { nom: "Precipitación de Carbonato de Plata", tipo: "Precipitación", eq: "2AgNO₃(aq) + Na₂CO₃(aq) → Ag₂CO₃(s)↓ + 2NaNO₃(aq)", desc: "Generación de un precipitado cristalino de tono amarillo a grisáceo." },
    "AgNO₃+NaOH": { nom: "Precipitación de Óxido de Plata", tipo: "Precipitación y Descomposición", eq: "2AgNO₃(aq) + 2NaOH(aq) → Ag₂O(s)↓ + H₂O(l) + 2NaNO₃(aq)", desc: "El hidróxido de plata inicial es inestable y se deshidrata rápidamente a óxido de plata marrón oscuro." },
    "AgNO₃+Na₂S": { nom: "Precipitación de Sulfuro de Plata", tipo: "Precipitación", eq: "2AgNO₃(aq) + Na₂S(aq) → Ag₂S(s)↓ + 2NaNO₃(aq)", desc: "Los iones sulfuro precipitan instantáneamente la plata como un sólido negro totalmente insoluble." },

    // Nitratos de Plomo (Pb(NO3)2)
    "NaCl+Pb(NO₃)₂": { nom: "Precipitación de Cloruro de Plomo", tipo: "Precipitación", eq: "Pb(NO₃)₂(aq) + 2NaCl(aq) → PbCl₂(s)↓ + 2NaNO₃(aq)", desc: "Formación de un polvo blanco insoluble en frío pero que se disuelve característicamente al calentar." },
    "KCl+Pb(NO₃)₂": { nom: "Precipitación con Cloruro Potásico", tipo: "Precipitación", eq: "Pb(NO₃)₂(aq) + 2KCl(aq) → PbCl₂(s)↓ + 2KNO₃(aq)", desc: "El plomo precipita de manera idéntica frente al catión potasio." },
    "NaBr+Pb(NO₃)₂": { nom: "Precipitación de Bromuro de Plomo", tipo: "Precipitación", eq: "Pb(NO₃)₂(aq) + 2NaBr(aq) → PbBr₂(s)↓ + 2NaNO₃(aq)", desc: "Se forma un precipitado cristalino blanco o ligeramente amarillento." },
    "Na₂SO₄+Pb(NO₃)₂": { nom: "Precipitación de Sulfato de Plomo", tipo: "Precipitación", eq: "Pb(NO₃)₂(aq) + Na₂SO₄(aq) → PbSO₄(s)↓ + 2NaNO₃(aq)", desc: "Los iones sulfato forman un sólido blanco muy insoluble y pesado." },
    "Na₂CO₃+Pb(NO₃)₂": { nom: "Precipitación de Carbonato de Plomo", tipo: "Precipitación", eq: "Pb(NO₃)₂(aq) + Na₂CO₃(aq) → PbCO₃(s)↓ + 2NaNO₃(aq)", desc: "Generación de albayalde puro, un polvo blanco históricamente usado y prohibido en pinturas." },
    "Na₂S+Pb(NO₃)₂": { nom: "Precipitación de Sulfuro de Plomo", tipo: "Precipitación Analítica", eq: "Pb(NO₃)₂(aq) + Na₂S(aq) → PbS(s)↓ + 2NaNO₃(aq)", desc: "La reacción extremadamente sensible produce galena sintética negra, indicando trazas de plomo." },
    "NaOH+Pb(NO₃)₂": { nom: "Precipitación Anfótera de Plomo", tipo: "Precipitación", eq: "Pb(NO₃)₂(aq) + 2NaOH(aq) → Pb(OH)₂(s)↓ + 2NaNO₃(aq)", desc: "Precipita hidróxido de plomo blanco que, al agregar exceso de sosa, vuelve a disolverse como plumbito." },

    // Cloruro de Bario (BaCl2)
    "BaCl₂+Na₂SO₄": { nom: "Ensayo Químico de Sulfatos", tipo: "Precipitación", eq: "BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s)↓ + 2NaCl(aq)", desc: "Formación de sulfato de bario, un precipitado lechoso, pesado y virtualmente inatacable por ácidos." },
    "BaCl₂+K₂SO₄": { nom: "Precipitación de Sulfato Bártico", tipo: "Precipitación", eq: "BaCl₂(aq) + K₂SO₄(aq) → BaSO₄(s)↓ + 2KCl(aq)", desc: "El anión sulfato provoca la precipitación cuantitativa del catión bario." },
    "BaCl₂+Na₂CO₃": { nom: "Precipitación de Carbonato Bártico", tipo: "Precipitación", eq: "BaCl₂(aq) + Na₂CO₃(aq) → BaCO₃(s)↓ + 2NaCl(aq)", desc: "Generación de witherita sintética, un carbonato blanco insoluble en agua pero soluble en ácidos." },
    "AgNO₃+BaCl₂": { nom: "Ensayo Químico de Cloruros", tipo: "Precipitación Doble", eq: "BaCl₂(aq) + 2AgNO₃(aq) → 2AgCl(s)↓ + Ba(NO₃)₂(aq)", desc: "Los iones cloruro libres son detectados y precipitados inmediatamente por los cationes de plata." },

    // Cloruro de Calcio (CaCl2)
    "CaCl₂+Na₂CO₃": { nom: "Precipitación de Caliza Sintética", tipo: "Precipitación", eq: "CaCl₂(aq) + Na₂CO₃(aq) → CaCO₃(s)↓ + 2NaCl(aq)", desc: "Formación de carbonato de calcio blanco. Mecanismo primario de la dureza temporal del agua." },
    "CaCl₂+K₂CO₃": { nom: "Precipitación de Carbonato Cálcico", tipo: "Precipitación", eq: "CaCl₂(aq) + K₂CO₃(aq) → CaCO₃(s)↓ + 2KCl(aq)", desc: "El catión potásico no interfiere en la inminente formación del carbonato insoluble." },
    "AgNO₃+CaCl₂": { nom: "Precipitación de Cloruro de Plata", tipo: "Precipitación", eq: "CaCl₂(aq) + 2AgNO₃(aq) → 2AgCl(s)↓ + Ca(NO₃)₂(aq)", desc: "El cloruro disociado del calcio es atrapado rápidamente por la plata formando el coágulo blanco característico." },

    // ================= 33. NEUTRALIZACIONES EXTENDIDAS (Ácidos y Bases Variados) =================
    "HCl+LiOH": { nom: "Neutralización de Litio", tipo: "Neutralización Fuerte", eq: "HCl(aq) + LiOH(aq) → LiCl(aq) + H₂O(l)", desc: "Reacción típica entre ácido clorhídrico y la base hidróxido de litio produciendo una sal soluble." },
    "HCl+Mg(OH)₂": { nom: "Efecto Antiancido", tipo: "Neutralización", eq: "2HCl(aq) + Mg(OH)₂(s) → MgCl₂(aq) + 2H₂O(l)", desc: "El ácido estomacal se neutraliza con la leche de magnesia, disolviendo el sólido y calmando la acidez." },
    "Ba(OH)₂+HCl": { nom: "Neutralización de Barita", tipo: "Neutralización", eq: "2HCl(aq) + Ba(OH)₂(aq) → BaCl₂(aq) + 2H₂O(l)", desc: "La base fuerte de bario reacciona produciendo cloruro de bario soluble." },
    "Al(OH)₃+HCl": { nom: "Disolución Alumínica Antiancida", tipo: "Neutralización", eq: "3HCl(aq) + Al(OH)₃(s) → AlCl₃(aq) + 3H₂O(l)", desc: "El hidróxido de aluminio gelatinoso actúa como base capturando los protones del ácido." },

    "H₂SO₄+LiOH": { nom: "Neutralización Sulfúrica (Li)", tipo: "Neutralización", eq: "H₂SO₄(aq) + 2LiOH(aq) → Li₂SO₄(aq) + 2H₂O(l)", desc: "El ácido diprótico exige dos equivalentes de base para sintetizar sulfato de litio." },
    "H₂SO₄+Mg(OH)₂": { nom: "Neutralización Magnésica Sulfúrica", tipo: "Neutralización", eq: "H₂SO₄(aq) + Mg(OH)₂(s) → MgSO₄(aq) + 2H₂O(l)", desc: "Formación del soluble sulfato de magnesio (sal de Epsom) disuelto en el agua generada." },
    "Ba(OH)₂+H₂SO₄": { nom: "Neutralización con Auto-Precipitación", tipo: "Neutralización Múltiple", eq: "H₂SO₄(aq) + Ba(OH)₂(aq) → BaSO₄(s)↓ + 2H₂O(l)", desc: "Al reaccionar este ácido y base específicos, no solo se forma agua, sino que la sal producida es totalmente insoluble." },
    "Al(OH)₃+H₂SO₄": { nom: "Neutralización Sulfúrica Alumínica", tipo: "Neutralización", eq: "3H₂SO₄(aq) + 2Al(OH)₃(s) → Al₂(SO₄)₃(aq) + 6H₂O(l)", desc: "La base tripótica reacciona lentamente requiriendo balance estequiométrico complejo." },

    "HNO₃+LiOH": { nom: "Neutralización Nítrica (Li)", tipo: "Neutralización", eq: "HNO₃(aq) + LiOH(aq) → LiNO₃(aq) + H₂O(l)", desc: "Síntesis térmica del nitrato de litio altamente soluble en agua." },
    "Ca(OH)₂+HNO₃": { nom: "Neutralización Nítrica con Cal", tipo: "Neutralización", eq: "2HNO₃(aq) + Ca(OH)₂(aq) → Ca(NO₃)₂(aq) + 2H₂O(l)", desc: "El ácido nítrico ataca al hidróxido de calcio produciendo una sal muy higroscópica." },
    "Ba(OH)₂+HNO₃": { nom: "Neutralización Nítrica (Ba)", tipo: "Neutralización", eq: "2HNO₃(aq) + Ba(OH)₂(aq) → Ba(NO₃)₂(aq) + 2H₂O(l)", desc: "La reacción deja nitrato de bario tóxico disuelto en la solución matriz." },

    "HBr+LiOH": { nom: "Neutralización Bromhídrica (Li)", tipo: "Neutralización Fuerte", eq: "HBr(aq) + LiOH(aq) → LiBr(aq) + H₂O(l)", desc: "Ácido y base de Arrhenius típicos generando agua y bromuro de litio." },
    "Ca(OH)₂+HBr": { nom: "Neutralización Bromhídrica (Ca)", tipo: "Neutralización", eq: "2HBr(aq) + Ca(OH)₂(aq) → CaBr₂(aq) + 2H₂O(l)", desc: "La cal apagada se disuelve en ácido bromhídrico para generar la sal neutra." },
    "Ba(OH)₂+HBr": { nom: "Neutralización Bromhídrica (Ba)", tipo: "Neutralización", eq: "2HBr(aq) + Ba(OH)₂(aq) → BaBr₂(aq) + 2H₂O(l)", desc: "Se generan moléculas de agua mediante el ensamblaje termodinámico de H⁺ y OH⁻." },

    "HClO₄+LiOH": { nom: "Neutralización Perclórica (Li)", tipo: "Neutralización", eq: "HClO₄(aq) + LiOH(aq) → LiClO₄(aq) + H₂O(l)", desc: "Reacción con uno de los superácidos más fuertes conocidos (perclórico) formando perclorato de litio." },
    "Ca(OH)₂+HClO₄": { nom: "Neutralización Perclórica (Ca)", tipo: "Neutralización", eq: "2HClO₄(aq) + Ca(OH)₂(aq) → Ca(ClO₄)₂(aq) + 2H₂O(l)", desc: "El hidróxido cálcico cede ante el poderoso efecto disociativo del ion perclorato." },
    "Ba(OH)₂+HClO₄": { nom: "Neutralización Perclórica (Ba)", tipo: "Neutralización", eq: "2HClO₄(aq) + Ba(OH)₂(aq) → Ba(ClO₄)₂(aq) + 2H₂O(l)", desc: "Generación de perclorato de bario, oxidante vigoroso al cristalizar y secarse." },

    // ================= 34. COMBUSTIONES Y REACCIONES ORGÁNICAS AVANZADAS =================
    "CH₃OH+O₂": { nom: "Combustión del Metanol", tipo: "Combustión Completa", eq: "2CH₃OH(l) + 3O₂(g) → 2CO₂(g) + 4H₂O(g) + Δ", desc: "El alcohol de madera arde con una llama azul prácticamente invisible a la luz del sol, emitiendo gas carbónico y calor." },
    "C₂H₂+O₂": { nom: "Combustión del Acetileno", tipo: "Combustión a Alta Temperatura", eq: "2C₂H₂(g) + 5O₂(g) → 4CO₂(g) + 2H₂O(g) + Δ", desc: "La combustión oxoacetilénica en condiciones ideales alcanza temperaturas superiores a los 3000°C, ideal para soldadura metálica." },
    "C₂H₄+O₂": { nom: "Combustión del Etileno", tipo: "Combustión Completa", eq: "C₂H₄(g) + 3O₂(g) → 2CO₂(g) + 2H₂O(g) + Δ", desc: "El alqueno simple se oxida vigorosamente generando productos limpios sin residuo carbonoso." },
    "C₅H₁₂+O₂": { nom: "Combustión del Pentano", tipo: "Combustión Completa", eq: "C₅H₁₂(l) + 8O₂(g) → 5CO₂(g) + 6H₂O(g) + Δ", desc: "El alcano líquido volátil combustiona requiriendo exactamente ocho equivalentes molares de oxígeno diatómico." },
    "C₆H₆+O₂": { nom: "Combustión del Benceno", tipo: "Combustión Orgánica", eq: "2C₆H₆(l) + 15O₂(g) → 12CO₂(g) + 6H₂O(g) + Δ", desc: "El anillo aromático requiere masivas cantidades de oxígeno. Con defecto de aire, produce llamas fuliginosas extremadamente densas de hollín." },

    // ================= 35. DESCOMPOSICIONES TÉRMICAS ADICIONALES =================
    "Li₂CO₃": { nom: "Descomposición del Carbonato de Litio", tipo: "Descomposición Térmica", eq: "Li₂CO₃(s) + Δ → Li₂O(s) + CO₂(g)↑", desc: "Debido a la alta polarización catiónica del litio, su carbonato es el único alcalino que descompone fácilmente al calor." },
    "SrCO₃": { nom: "Calcinación del Estroncio", tipo: "Descomposición Térmica", eq: "SrCO₃(s) + Δ → SrO(s) + CO₂(g)↑", desc: "Calcinación que rinde el óxido de estroncio refractario y expulsa anhídrido carbónico." },
    "BaCO₃": { nom: "Calcinación del Bario", tipo: "Descomposición Térmica", eq: "BaCO₃(s) + Δ → BaO(s) + CO₂(g)↑", desc: "Requiere altísimas temperaturas industriales (~1360°C) para disociar la estable red del carbonato bártico." },
    "FeCO₃": { nom: "Descomposición de Siderita", tipo: "Descomposición Térmica", eq: "FeCO₃(s) + Δ → FeO(s) + CO₂(g)↑", desc: "Mineral de hierro que, en ausencia de oxígeno, se reduce a óxido ferroso." },
    "Ag₂CO₃": { nom: "Descomposición del Carbonato de Plata", tipo: "Descomposición Térmica Compleja", eq: "2Ag₂CO₃(s) + Δ → 4Ag(s) + 2CO₂(g)↑ + O₂(g)↑", desc: "El calentamiento moderado no solo expulsa el gas, sino que destruye el óxido de plata resultante dejando solo metal puro." },
    "NaClO₃": { nom: "Descomposición del Clorato de Sodio", tipo: "Descomposición Térmica", eq: "2NaClO₃(s) + Δ → 2NaCl(s) + 3O₂(g)↑", desc: "Generación de oxígeno de emergencia mediante reacción térmica en 'velas de oxígeno'." },
    "LiNO₃": { nom: "Descomposición del Nitrato de Litio", tipo: "Descomposición Térmica", eq: "4LiNO₃(s) + Δ → 2Li₂O(s) + 4NO₂(g)↑ + O₂(g)↑", desc: "A diferencia de los otros alcalinos que forman nitritos, el litio destruye completamente el anión a óxido y gases tóxicos pardos." },
    "Mg(NO₃)₂": { nom: "Descomposición del Nitrato Magnésico", tipo: "Descomposición Térmica", eq: "2Mg(NO₃)₂(s) + Δ → 2MgO(s) + 4NO₂(g)↑ + O₂(g)↑", desc: "Destrucción de la sal hidratada produciendo gas nitrógeno oxidado y dejando magnesia refractaria." },
    "Ca(NO₃)₂": { nom: "Descomposición del Nitrato de Calcio", tipo: "Descomposición Térmica", eq: "2Ca(NO₃)₂(s) + Δ → 2CaO(s) + 4NO₂(g)↑ + O₂(g)↑", desc: "Produce gases pardo-rojizos tóxicos característicos del dióxido de nitrógeno y cal viva residual." },
    "Cu(NO₃)₂": { nom: "Descomposición del Nitrato de Cobre", tipo: "Descomposición Térmica", eq: "2Cu(NO₃)₂(s) + Δ → 2CuO(s) + 4NO₂(g)↑ + O₂(g)↑", desc: "Los brillantes cristales azules se ennegrecen formando óxido cúprico entre vapores ácidos asfixiantes." },
    "AgNO₃": { nom: "Termólisis de Nitrato Argentífero", tipo: "Descomposición Térmica", eq: "2AgNO₃(s) + Δ → 2Ag(s) + 2NO₂(g)↑ + O₂(g)↑", desc: "La sal se destruye completamente hasta rendir plata metálica en estado de pureza." },
    "Pb(NO₃)₂": { nom: "Descomposición del Nitrato Plumboso", tipo: "Descomposición Térmica Clásica", eq: "2Pb(NO₃)₂(s) + Δ → 2PbO(s) + 4NO₂(g)↑ + O₂(g)↑", desc: "Famoso experimento de laboratorio que crepita y libera dióxido de nitrógeno visible dejando litargirio amarillo." },
    "Mg(OH)₂": { nom: "Deshidratación de Magnesia", tipo: "Descomposición Térmica", eq: "Mg(OH)₂(s) + Δ → MgO(s) + H₂O(g)↑", desc: "El hidróxido pierde su agua estructural convirtiéndose en óxido cerámico refractario al calor." },
    "Ca(OH)₂": { nom: "Deshidratación de Cal", tipo: "Descomposición Térmica", eq: "Ca(OH)₂(s) + Δ → CaO(s) + H₂O(g)↑", desc: "A más de 500°C, la cal apagada revierte a cal viva expulsando vapor de agua fuertemente adherido." },
    "Cu(OH)₂": { nom: "Termólisis del Cobre Gelatinoso", tipo: "Descomposición Térmica", eq: "Cu(OH)₂(s) + Δ → CuO(s) + H₂O(l)", desc: "A temperaturas muy suaves, incluso en el agua donde precipitó, este hidróxido azul se ennegrece formando óxido." },
    "Fe(OH)₃": { nom: "Calcinación de Hidróxido Férrico", tipo: "Descomposición Térmica", eq: "2Fe(OH)₃(s) + Δ → Fe₂O₃(s) + 3H₂O(g)↑", desc: "Pérdida forzada de agua de la estructura parda amorfa para sintetizar hematita roja en polvo." },
    "Al(OH)₃": { nom: "Formación de Alúmina Activada", tipo: "Descomposición Térmica", eq: "2Al(OH)₃(s) + Δ → Al₂O₃(s) + 3H₂O(g)↑", desc: "El calentamiento a 1000°C expulsa el agua del hidróxido dejando la increíblemente dura y resistente capa de óxido de aluminio." },

    "CO+Fe₂O₃": { nom: "Reducción Siderúrgica del Hierro", tipo: "Redox / Metalurgia", eq: "Fe₂O₃(s) + 3CO(g) → 2Fe(s) + 3CO₂(g)", desc: "En un alto horno, el gas monóxido de carbono actúa como un reductor fuerte, arrebatando el oxígeno al óxido de hierro (III) para producir hierro metálico puro y dióxido de carbono." },
    "Al+Fe₂O₃": { nom: "Reacción de la Termita", tipo: "Sustitución Simple / Altamente Exotérmica", eq: "Fe₂O₃(s) + 2Al(s) → Al₂O₃(s) + 2Fe(l) + Δ", desc: "El aluminio reduce al óxido de hierro liberando tanto calor (hasta 2500°C) que el hierro resultante nace en estado líquido. Se usa para soldar vías de tren." },
};

// ================= CATEGORIAS TABLA PERIODICA =================
const nombresCat = {
    alc: "Metales alcalinos", alct: "Metales alcalinotérreos", tran: "Metales transicionales",
    post: "Metales postransicionales", meta: "Metaloides", nomet: "No metales reactivos",
    gas: "Gases nobles", lant: "Lantánidos", acti: "Actinoides", desc: "Propiedades desconocidas"
};






function initTabla() {
    const contenedor = document.getElementById('tabla-periodica');
    elementos.forEach(el => {
        const div = document.createElement('div');
        div.className = 'elemento';
        div.dataset.cat = el.cat;
        div.style.gridColumn = el.c;
        div.style.gridRow = el.r;

        div.innerHTML = `<div class="el-z">${el.z}</div><div class="el-simbolo">${el.s}</div><div class="el-nombre">${el.n}</div>`;
        div.onclick = () => abrirVistaElemento(el);
        contenedor.appendChild(div);
    });
}

function filtrarCategoria(catSeleccionada) {
    const todasLasCeldas = document.querySelectorAll('.elemento');
    if (catSeleccionada === 'todos') {
        todasLasCeldas.forEach(c => c.classList.remove('dimmed'));
    } else {
        todasLasCeldas.forEach(c => {
            if (c.dataset.cat === catSeleccionada) c.classList.remove('dimmed');
            else c.classList.add('dimmed');
        });
    }
}

function cambiarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.remove('hidden');
    event.target.classList.add('active');

    if (id === 'sec-modelos' && !escenaModelos) initModelosHistoricos();
    if (id === 'sec-formulas') {
        const fila = document.querySelector('#formulas-categorias');
        const primero = fila && fila.querySelector('.formulas-tab-btn');
        if (primero) cambiarSubFormulas('quimica', primero);
    }
}

// ===== NUEVA NAVEGACIÓN POR SUBCATEGORÍAS =====
const formulasDB = {
    fisica: {
        cinematica: {
            titulo: 'Cinemática (MRU y MRUA)',
            formulas: [
                { nombre: 'Velocidad media', eq: 'v<sub>m</sub> = Δx / Δt', vars: '<strong>v<sub>m</sub></strong> = velocidad media<br><strong>Δx</strong> = desplazamiento<br><strong>Δt</strong> = intervalo de tiempo' },
                { nombre: 'MRU', eq: 'x = x<sub>0</sub> + v · t', vars: '<strong>x</strong> = posición final<br><strong>x<sub>0</sub></strong> = posición inicial<br><strong>v</strong> = velocidad constante<br><strong>t</strong> = tiempo' },
                { nombre: 'MRUA — velocidad', eq: 'v = v<sub>0</sub> + a · t', vars: '<strong>v</strong> = velocidad en el instante t<br><strong>v<sub>0</sub></strong> = velocidad inicial<br><strong>a</strong> = aceleración constante<br><strong>t</strong> = tiempo' },
                { nombre: 'MRUA — posición', eq: 'x = x<sub>0</sub> + v<sub>0</sub>t + ½at²', vars: '<strong>x</strong> = posición<br><strong>x<sub>0</sub></strong> = posición inicial<br><strong>v<sub>0</sub></strong> = velocidad inicial<br><strong>a</strong> = aceleración<br><strong>t</strong> = tiempo' },
                { nombre: 'Sin tiempo (MRUA)', eq: 'v² = v<sub>0</sub>² + 2a · Δx', vars: '<strong>v</strong> = velocidad final<br><strong>v<sub>0</sub></strong> = velocidad inicial<br><strong>a</strong> = aceleración<br><strong>Δx</strong> = desplazamiento' },
            ]
        },
        dinamica: {
            titulo: 'Dinámica y Energía Mecánica',
            formulas: [
                { nombre: 'Segunda ley de Newton', eq: 'F = m · a', vars: '<strong>F</strong> = fuerza resultante (N)<br><strong>m</strong> = masa (kg)<br><strong>a</strong> = aceleración (m·s<sup>−2</sup>)' },
                { nombre: 'Peso', eq: 'W = m · g', vars: '<strong>W</strong> = peso<br><strong>m</strong> = masa<br><strong>g</strong> = aceleración de la gravedad' },
                { nombre: 'Fuerza centrípeta', eq: 'F<sub>c</sub> = m v² / r', vars: '<strong>F<sub>c</sub></strong> = fuerza hacia el centro<br><strong>m</strong> = masa<br><strong>v</strong> = rapidez tangencial<br><strong>r</strong> = radio de curvatura' },
                { nombre: 'Energía cinética', eq: 'E<sub>c</sub> = ½ m v²', vars: '<strong>E<sub>c</sub></strong> = energía cinética (J)<br><strong>m</strong> = masa<br><strong>v</strong> = rapidez' },
                { nombre: 'Energía potencial gravitatoria', eq: 'E<sub>p</sub> = m g h', vars: '<strong>E<sub>p</sub></strong> = energía potencial (J)<br><strong>m</strong> = masa<br><strong>g</strong> = gravedad<br><strong>h</strong> = altura' },
                { nombre: 'Trabajo (constante y colineal)', eq: 'W = F · d · cos θ', vars: '<strong>W</strong> = trabajo (J)<br><strong>F</strong> = fuerza constante<br><strong>d</strong> = desplazamiento<br><strong>θ</strong> = ángulo entre F y d' },
                { nombre: 'Potencia media', eq: 'P = W / Δt', vars: '<strong>P</strong> = potencia (W)<br><strong>W</strong> = trabajo realizado<br><strong>Δt</strong> = tiempo empleado' },
            ]
        },
        fluidos: {
            titulo: 'Fluidos, Calor y Ondas',
            formulas: [
                { nombre: 'Gasto o Caudal', eq: 'Q = A · v', vars: '<strong>Q</strong> = gasto o caudal (m³/s)<br><strong>A</strong> = área de la sección transversal (m²)<br><strong>v</strong> = velocidad del fluido (m/s)' },
                { nombre: 'Ecuación de Continuidad', eq: 'A<sub>1</sub> · v<sub>1</sub> = A<sub>2</sub> · v<sub>2</sub>', vars: '<strong>A<sub>1</sub>, A<sub>2</sub></strong> = áreas de la sección 1 y 2<br><strong>v<sub>1</sub>, v<sub>2</sub></strong> = velocidades en cada sección<br>El caudal se conserva en fluido incompresible' },
                { nombre: 'Presión', eq: 'P = F / A', vars: '<strong>P</strong> = presión (Pa)<br><strong>F</strong> = fuerza perpendicular (N)<br><strong>A</strong> = área (m²)' },
                { nombre: 'Presión hidrostática', eq: 'P = ρ g h', vars: '<strong>P</strong> = presión del fluido<br><strong>ρ</strong> = densidad del fluido<br><strong>g</strong> = gravedad<br><strong>h</strong> = profundidad' },
                { nombre: 'Principio de Arquímedes', eq: 'E = ρ<sub>fluido</sub> · g · V<sub>desalojado</sub>', vars: '<strong>E</strong> = empuje (flotación)<br><strong>ρ<sub>fluido</sub></strong> = densidad del fluido<br><strong>V<sub>desalojado</sub></strong> = volumen sumergido' },
                { nombre: 'Calor sensible', eq: 'Q = m c ΔT', vars: '<strong>Q</strong> = calor transferido (J)<br><strong>m</strong> = masa<br><strong>c</strong> = calor específico<br><strong>ΔT</strong> = cambio de temperatura' },
                { nombre: 'Eficiencia Carnot', eq: 'η = 1 − T<sub>c</sub> / T<sub>h</sub>', vars: '<strong>η</strong> = eficiencia máxima<br><strong>T<sub>c</sub></strong> = foco frío (K)<br><strong>T<sub>h</sub></strong> = foco caliente (K)' },
                { nombre: 'Onda — velocidad de propagación', eq: 'v = λ · f', vars: '<strong>v</strong> = velocidad de onda<br><strong>λ</strong> = longitud de onda<br><strong>f</strong> = frecuencia (Hz)' },
                { nombre: 'Ley de Snell', eq: 'n<sub>1</sub> sen θ<sub>1</sub> = n<sub>2</sub> sen θ<sub>2</sub>', vars: '<strong>n<sub>1</sub>, n<sub>2</sub></strong> = índices de refracción<br><strong>θ<sub>1</sub></strong> = ángulo de incidencia<br><strong>θ<sub>2</sub></strong> = ángulo de refracción' },
            ]
        },
        termofluidos: {
            titulo: 'Termodinámica y Fluidos',
            formulas: [
                { nombre: 'Gasto o Caudal (con diámetro)', eq: 'Q = A · v &nbsp;→&nbsp; A = (π · D²) / 4', vars: '<strong>Q</strong> = gasto (m³/s)<br><strong>A</strong> = área de la sección transversal (m²)<br><strong>D</strong> = diámetro del ducto (m)<br><strong>v</strong> = velocidad del fluido (m/s)' },
                { nombre: 'Gasto (volumen / tiempo)', eq: 'G = V / t', vars: '<strong>G</strong> = gasto (m³/s)<br><strong>V</strong> = volumen (m³)<br><strong>t</strong> = tiempo (s)' },
                { nombre: 'Densidad', eq: 'ρ = m / V', vars: '<strong>ρ</strong> = densidad (kg/m³)<br><strong>m</strong> = masa (kg)<br><strong>V</strong> = volumen (m³)' },
                { nombre: 'Presión hidrostática', eq: 'P<sub>hid</sub> = ρ · g · h', vars: '<strong>P<sub>hid</sub></strong> = presión hidrostática (Pa)<br><strong>ρ</strong> = densidad del fluido (kg/m³)<br><strong>g</strong> = gravedad (9.81 m/s²)<br><strong>h</strong> = profundidad (m)' },
                { nombre: 'Presión (fuerza / área)', eq: 'P = F / A', vars: '<strong>P</strong> = presión (Pa)<br><strong>F</strong> = fuerza aplicada (N)<br><strong>A</strong> = área (m²)' },
                { nombre: 'Peso / Fuerza gravitacional', eq: 'F = W = m · g', vars: '<strong>F</strong> = fuerza (N)<br><strong>W</strong> = peso (N)<br><strong>m</strong> = masa (kg)<br><strong>g</strong> = 9.81 m/s²' },
                { nombre: 'Presión atmosférica estándar', eq: 'P<sub>abs</sub> = 1.013 × 10⁵ Pa', vars: '<strong>P<sub>abs</sub></strong> = presión atmosférica estándar = 101 300 Pa = 1 atm' },
                { nombre: 'Eficiencia térmica (Carnot — temperaturas)', eq: 'E = 1 − T<sub>2</sub> / T<sub>1</sub>', vars: '<strong>E</strong> = eficiencia (0 a 1)<br><strong>T<sub>1</sub></strong> = temperatura del foco caliente (K)<br><strong>T<sub>2</sub></strong> = temperatura del foco frío (K)' },
                { nombre: 'Eficiencia térmica (calores)', eq: 'E = 1 − Q<sub>2</sub> / Q<sub>1</sub>', vars: '<strong>E</strong> = eficiencia<br><strong>Q<sub>1</sub></strong> = calor absorbido del foco caliente (J)<br><strong>Q<sub>2</sub></strong> = calor cedido al foco frío (J)' },
                { nombre: 'Trabajo termodinámico / Equilibrio térmico', eq: 'W = P · (V<sub>f</sub> − V<sub>i</sub>)', vars: '<strong>W</strong> = trabajo realizado por el gas (J)<br><strong>P</strong> = presión constante (Pa)<br><strong>V<sub>f</sub></strong> = volumen final (m³)<br><strong>V<sub>i</sub></strong> = volumen inicial (m³)' },
                { nombre: 'Energía potencial (trabajo mecánico)', eq: 'W = E<sub>p</sub> = m · g · h', vars: '<strong>W</strong> = trabajo (J)<br><strong>E<sub>p</sub></strong> = energía potencial gravitatoria (J)<br><strong>m</strong> = masa (kg)<br><strong>g</strong> = 9.81 m/s²<br><strong>h</strong> = altura (m)' },
                { nombre: 'Variación de energía interna (1ª Ley Termodinámica)', eq: 'ΔU = Q − W', vars: '<strong>ΔU</strong> = variación de energía interna (cal o J)<br><strong>Q</strong> = calor que entra (+) o sale (−) del sistema (cal o J)<br><strong>W</strong> = trabajo efectuado por el sistema (+) o sobre este (−) (cal o J)' },
                { nombre: 'Energía cinética clásica', eq: 'E<sub>c</sub> = ½ m v²', vars: '<strong>E<sub>c</sub></strong> = energía cinética (J)<br><strong>m</strong> = masa (kg)<br><strong>v</strong> = velocidad (m/s) &nbsp;— tu profe usa <em>c</em> en lugar de <em>v</em>' },
                { nombre: 'Energía cinética (con momento lineal)', eq: 'E<sub>c</sub> = p² / 2m', vars: '<strong>E<sub>c</sub></strong> = energía cinética (J)<br><strong>p</strong> = momento lineal (kg·m/s), donde p = m·v<br><strong>m</strong> = masa (kg)' },
            ]
        },
        clase: {
            titulo: '📓 Fórmulas de Clase',
            formulas: [
                { nombre: 'Gasto con Diámetro', eq: 'Q = (π · D²/ 4) · v', vars: '<strong>Q</strong> = gasto (m³/s)<br><strong>D</strong> = diámetro del ducto (m)<br><strong>v</strong> = velocidad del fluido (m/s)' },
                { nombre: 'Área de la sección (con diámetro)', eq: 'A = (π · D²) / 4', vars: '<strong>A</strong> = área transversal (m²)<br><strong>D</strong> = diámetro (m)' },
                { nombre: 'Gasto volumétrico', eq: 'G = V / t', vars: '<strong>G</strong> = gasto (m³/s)<br><strong>V</strong> = volumen (m³)<br><strong>t</strong> = tiempo (s)' },
                { nombre: 'Presión hidrostática', eq: 'P<sub>hid</sub> = ρ · g · h', vars: '<strong>ρ</strong> = densidad del fluido (kg/m³)<br><strong>g</strong> = 9.81 m/s²<br><strong>h</strong> = profundidad (m)' },
                { nombre: 'Peso / Fuerza gravitacional', eq: 'F = W = m · g', vars: '<strong>m</strong> = masa (kg)<br><strong>g</strong> = 9.81 m/s²' },
                { nombre: 'Presión (fuerza / área)', eq: 'P = F / A', vars: '<strong>F</strong> = fuerza (N)<br><strong>A</strong> = área (m²)' },
                { nombre: 'Presión atmosférica estándar', eq: 'P<sub>abs</sub> = 1.013 × 10⁵ Pa', vars: 'Equivale a 1 atm = 101 300 Pa' },
                { nombre: 'Densidad', eq: 'ρ = m / V', vars: '<strong>ρ</strong> = densidad (kg/m³)<br><strong>m</strong> = masa (kg)<br><strong>V</strong> = volumen (m³)' },
                { nombre: 'Eficiencia térmica (temperaturas)', eq: 'E = 1 − T<sub>2</sub> / T<sub>1</sub>', vars: '<strong>T<sub>1</sub></strong> = temperatura foco caliente (K)<br><strong>T<sub>2</sub></strong> = temperatura foco frío (K)' },
                { nombre: 'Eficiencia térmica (calores)', eq: 'E = 1 − Q<sub>2</sub> / Q<sub>1</sub>', vars: '<strong>Q<sub>1</sub></strong> = calor absorbido (J)<br><strong>Q<sub>2</sub></strong> = calor cedido (J)' },
                { nombre: 'Variación de energía interna (1ª Ley)', eq: 'ΔU = Q − W', vars: '<strong>Q</strong> = calor que entra (+) o sale (−) del sistema (J o cal)<br><strong>W</strong> = trabajo realizado por el sistema (J o cal)' },
                { nombre: 'Trabajo termodinámico', eq: 'W = P · (V<sub>f</sub> − V<sub>i</sub>)', vars: '<strong>P</strong> = presión constante (Pa)<br><strong>V<sub>f</sub></strong> = volumen final (m³)<br><strong>V<sub>i</sub></strong> = volumen inicial (m³)' },
                { nombre: 'Energía potencial / Trabajo mecánico', eq: 'W = E<sub>p</sub> = m · g · h', vars: '<strong>m</strong> = masa (kg)<br><strong>g</strong> = 9.81 m/s²<br><strong>h</strong> = altura (m)' },
                { nombre: 'Energía cinética clásica', eq: 'E<sub>c</sub> = ½ m v²', vars: '<strong>m</strong> = masa (kg)<br><strong>v</strong> = velocidad (m/s) — tu profe usa <em>c</em> en lugar de <em>v</em>' },
                { nombre: 'Energía cinética con momento lineal', eq: 'E<sub>c</sub> = p² / 2m', vars: '<strong>p</strong> = momento lineal = m·v (kg·m/s)<br><strong>m</strong> = masa (kg)' },
            ]
        },
        electricidad: {
            titulo: 'Electricidad y Magnetismo (Básico)',
            formulas: [
                { nombre: 'Ley de Ohm', eq: 'V = I · R', vars: '<strong>V</strong> = voltaje (V)<br><strong>I</strong> = intensidad de corriente (A)<br><strong>R</strong> = resistencia eléctrica (Ω)' },
                { nombre: 'Potencia eléctrica', eq: 'P = V · I = I²R = V²/R', vars: '<strong>P</strong> = potencia disipada (W)<br><strong>V</strong> = voltaje<br><strong>I</strong> = corriente<br><strong>R</strong> = resistencia' },
                { nombre: 'Resistencias en serie', eq: 'R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub> + …', vars: '<strong>R<sub>eq</sub></strong> = resistencia equivalente<br><strong>R<sub>1</sub>, R<sub>2</sub>…</strong> = resistencias en serie' },
                { nombre: 'Resistencias en paralelo', eq: '1/R<sub>eq</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + …', vars: '<strong>R<sub>eq</sub></strong> = resistencia equivalente<br>La tensión es la misma en cada rama' },
                { nombre: 'Fuerza sobre carga en campo B', eq: 'F = q v B sen θ', vars: '<strong>F</strong> = fuerza magnética (Lorentz)<br><strong>q</strong> = carga<br><strong>v</strong> = rapidez<br><strong>B</strong> = campo magnético' },
                { nombre: 'Energía en campo eléctrico', eq: 'U = q V', vars: '<strong>U</strong> = energía potencial eléctrica (J)<br><strong>q</strong> = carga (C)<br><strong>V</strong> = diferencia de potencial (V)' },
            ]
        }
    },
    quimica: {
        estequiometria: {
            titulo: 'Estequiometría y Soluciones',
            formulas: [
                { nombre: 'Moles', eq: 'n = m / M', vars: '<strong>n</strong> = moles<br><strong>m</strong> = masa (g)<br><strong>M</strong> = masa molar (g·mol<sup>−1</sup>)' },
                { nombre: 'Concentración molar', eq: 'M = n / V', vars: '<strong>M</strong> = molaridad (mol·L<sup>−1</sup>)<br><strong>n</strong> = moles de soluto<br><strong>V</strong> = volumen (L)' },
                { nombre: 'Fracción molar', eq: 'X<sub>i</sub> = n<sub>i</sub> / n<sub>total</sub>', vars: '<strong>X<sub>i</sub></strong> = fracción molar del componente i<br><strong>n<sub>i</sub></strong> = moles del componente<br><strong>n<sub>total</sub></strong> = moles totales' },
                { nombre: 'Dilución', eq: 'C<sub>1</sub>V<sub>1</sub> = C<sub>2</sub>V<sub>2</sub>', vars: '<strong>C</strong> = concentración (antes y después)<br><strong>V</strong> = volumen correspondiente' },
                { nombre: 'Densidad', eq: 'ρ = m / V', vars: '<strong>ρ</strong> = densidad<br><strong>m</strong> = masa<br><strong>V</strong> = volumen' },
                { nombre: '% masa en disolución', eq: '% = (m<sub>soluto</sub> / m<sub>disolución</sub>) · 100', vars: '<strong>m<sub>soluto</sub></strong> = masa del soluto<br><strong>m<sub>disolución</sub></strong> = masa total de la disolución' },
            ]
        },
        acidos: {
            titulo: 'Ácidos, Bases y Equilibrio en Disolución',
            formulas: [
                { nombre: 'pH', eq: 'pH = −log[H⁺]', vars: '<strong>pH</strong> = medida de acidez<br><strong>[H⁺]</strong> = concentración del ion hidrógeno (mol·L<sup>−1</sup>)' },
                { nombre: 'pOH', eq: 'pOH = −log[OH⁻]', vars: '<strong>pOH</strong> = medida de basicidad<br><strong>[OH⁻]</strong> = concentración del ion hidróxido (mol·L<sup>−1</sup>)' },
                { nombre: 'Producto iónico del agua (25 °C)', eq: 'K<sub>w</sub> = [H⁺][OH⁻] = 10<sup>−14</sup>', vars: '<strong>K<sub>w</sub></strong> = constante de autoionización del agua' },
                { nombre: 'Relación pH + pOH', eq: 'pH + pOH = 14', vars: 'Válido a 25 °C en agua pura' },
                { nombre: 'Henderson–Hasselbalch (buffer)', eq: 'pH = pK<sub>a</sub> + log([A⁻]/[HA])', vars: '<strong>pK<sub>a</sub></strong> = −log K<sub>a</sub> del par conjugado<br><strong>[A⁻]</strong> = forma desprotonada<br><strong>[HA]</strong> = forma ácida' },
                { nombre: 'pKa', eq: 'pK<sub>a</sub> = −log K<sub>a</sub>', vars: '<strong>pK<sub>a</sub></strong> = escala logarítmica de fuerza del ácido<br><strong>K<sub>a</sub></strong> = constante de acidez' },
            ]
        },
        gases: {
            titulo: 'Gases y Termodinámica Química',
            formulas: [
                { nombre: 'Gas ideal', eq: 'PV = nRT', vars: '<strong>P</strong> = presión<br><strong>V</strong> = volumen<br><strong>n</strong> = moles<br><strong>R</strong> = constante de gases<br><strong>T</strong> = temperatura (K)' },
                { nombre: 'Ley combinada de los gases', eq: '(P<sub>1</sub>V<sub>1</sub>) / T<sub>1</sub> = (P<sub>2</sub>V<sub>2</sub>) / T<sub>2</sub>', vars: '<strong>P, V, T</strong> = presión, volumen, temperatura (K)' },
                { nombre: 'Densidad de un gas ideal', eq: 'PM = ρRT', vars: '<strong>M</strong> = masa molar del gas<br><strong>ρ</strong> = densidad<br><strong>R</strong> = constante de gases<br><strong>T</strong> = temperatura (K)' },
                { nombre: 'Presión parcial (Dalton)', eq: 'P<sub>i</sub> = X<sub>i</sub> · P<sub>total</sub>', vars: '<strong>P<sub>i</sub></strong> = presión parcial del gas i<br><strong>X<sub>i</sub></strong> = fracción molar' },
                { nombre: 'Energía libre de Gibbs', eq: 'ΔG = ΔH − TΔS', vars: '<strong>ΔG</strong> = cambio de energía libre<br><strong>ΔH</strong> = cambio de entalpía<br><strong>ΔS</strong> = cambio de entropía' },
                { nombre: 'Espontaneidad', eq: 'ΔG < 0 → proceso espontáneo', vars: '<strong>ΔG</strong> negativo indica proceso espontáneo a P y T constantes' },
                { nombre: 'Equilibrio y energía libre', eq: 'ΔG° = −RT ln K', vars: '<strong>ΔG°</strong> = energía libre estándar<br><strong>K</strong> = constante de equilibrio' },
            ]
        },
        cinetica: {
            titulo: 'Cinética y Electroquímica',
            formulas: [
                { nombre: 'Velocidad media de reacción', eq: 'v = −(1/ν) · d[A]/dt', vars: '<strong>ν</strong> = coeficiente estequiométrico<br><strong>[A]</strong> = concentración de A<br><strong>t</strong> = tiempo' },
                { nombre: 'Arrhenius', eq: 'k = A · e<sup>−Ea/(RT)</sup>', vars: '<strong>k</strong> = constante de velocidad<br><strong>Ea</strong> = energía de activación<br><strong>R</strong> = constante de gases<br><strong>T</strong> = temperatura (K)' },
                { nombre: 'Relación Q y K', eq: 'Q < K → hacia productos; Q > K → hacia reactivos', vars: '<strong>Q</strong> = cociente de reacción<br><strong>K</strong> = constante de equilibrio' },
                { nombre: 'Ecuación de Nernst (25 °C)', eq: 'E = E° − (0,05916 V / n) · log Q', vars: '<strong>E</strong> = potencial en condiciones no estándar<br><strong>E°</strong> = potencial estándar<br><strong>n</strong> = moles de e⁻' },
            ]
        }
    },
    constantes: {
        fisicas: {
            titulo: 'Constantes Físicas y Químicas',
            formulas: [
                { nombre: 'Número de Avogadro', eq: 'N<sub>A</sub> ≈ 6,022 · 10<sup>23</sup> mol<sup>−1</sup>', vars: '<strong>N<sub>A</sub></strong> = número de partículas por mol' },
                { nombre: 'Constante de los gases', eq: 'R ≈ 8,314 J·mol<sup>−1</sup>·K<sup>−1</sup>', vars: '<strong>R</strong> = enlaza P, V, n, T en el gas ideal' },
                { nombre: 'Constante de Faraday', eq: 'F ≈ 96 485 C·mol<sup>−1</sup>', vars: '<strong>F</strong> = carga eléctrica de un mol de electrones' },
                { nombre: 'Velocidad de la luz en el vacío', eq: 'c ≈ 2,998 · 10<sup>8</sup> m·s<sup>−1</sup>', vars: '<strong>c</strong> = velocidad de la luz en el vacío' },
                { nombre: 'Carga elemental', eq: 'e ≈ 1,602 · 10<sup>−19</sup> C', vars: '<strong>e</strong> = carga del protón o electrón' },
                { nombre: 'Masa del electrón', eq: 'm<sub>e</sub> ≈ 9,11 · 10<sup>−31</sup> kg', vars: '<strong>m<sub>e</sub></strong> = masa en reposo del electrón' },
                { nombre: 'Aceleración de la gravedad (aprox.)', eq: 'g ≈ 9,81 m·s<sup>−2</sup>', vars: '<strong>g</strong> = aceleración gravitacional terrestre' },
                { nombre: 'Presión atmosférica estándar', eq: '1 atm = 101 325 Pa', vars: '<strong>atm</strong> = atmósfera<br><strong>Pa</strong> = pascal (N·m<sup>−2</sup>)' },
            ]
        },
        matematicas: {
            titulo: 'Matemáticas Útiles en Ciencias',
            formulas: [
                { nombre: 'Teorema de Pitágoras', eq: 'a² + b² = c²', vars: '<strong>a, b</strong> = catetos<br><strong>c</strong> = hipotenusa' },
                { nombre: 'Área del círculo', eq: 'A = π r²', vars: '<strong>A</strong> = área<br><strong>r</strong> = radio' },
                { nombre: 'Volumen de la esfera', eq: 'V = (4/3) π r³', vars: '<strong>V</strong> = volumen<br><strong>r</strong> = radio' },
                { nombre: 'Volumen del cilindro', eq: 'V = π r² h', vars: '<strong>r</strong> = radio de la base<br><strong>h</strong> = altura' },
                { nombre: 'Porcentaje de variación', eq: '% = ((valor<sub>f</sub> − valor<sub>i</sub>) / valor<sub>i</sub>) · 100', vars: '<strong>valor<sub>i</sub></strong> = inicial<br><strong>valor<sub>f</sub></strong> = final' },
                { nombre: 'Logaritmo de un producto', eq: 'log(a·b) = log a + log b', vars: '<strong>a, b</strong> = factores positivos' },
                { nombre: 'Cambio de base', eq: 'log<sub>a</sub> x = ln x / ln a', vars: '<strong>a</strong> = base (a > 0, a ≠ 1)<br><strong>ln</strong> = logaritmo natural' },
            ]
        },
        temperatura: {
            titulo: 'Conversiones de Temperatura',
            formulas: [
                { nombre: 'Celsius ↔ Kelvin', eq: 'T(K) = T(°C) + 273,15', vars: '<strong>T(K)</strong> = temperatura en kelvin<br><strong>T(°C)</strong> = temperatura en Celsius' },
                { nombre: 'Celsius ↔ Fahrenheit', eq: 'T(°F) = (9/5) T(°C) + 32', vars: '<strong>T(°F)</strong> = temperatura en Fahrenheit<br><strong>9/5</strong> = relación entre escalas<br><strong>32</strong> = desplazamiento de cero' },
            ]
        }
    }
};

let currentFormulasCat = 'quimica';

function cambiarSubFormulas(subId, btn) {
    currentFormulasCat = subId;
    document.querySelectorAll('.formulas-tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    // Hide all subcats panels
    document.querySelectorAll('.formulas-subcats').forEach(p => p.classList.add('hidden'));
    // Hide detalle panel
    document.getElementById('formulas-detalle-panel').classList.add('hidden');

    // Show the corresponding subcats
    const subcatsEl = document.getElementById('formulas-subcats-' + subId);
    if (subcatsEl) subcatsEl.classList.remove('hidden');
}

function abrirSubtema(categoria, subtema, btn) {
    // Highlight clicked card
    const parent = btn.closest('.subcats-grid');
    if (parent) parent.querySelectorAll('.subcat-card').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');

    const data = formulasDB[categoria] && formulasDB[categoria][subtema];
    if (!data) return;

    // Hide subcats
    document.querySelectorAll('.formulas-subcats').forEach(p => p.classList.add('hidden'));

    // Build formula cards
    const titulo = document.getElementById('formulas-detalle-titulo');
    const grid = document.getElementById('formulas-detalle-grid');
    titulo.innerHTML = data.titulo;
    grid.innerHTML = data.formulas.map(f => `
        <div class="formula-card-item">
            <div class="formula-card-name">${f.nombre}</div>
            <code class="formula-card-eq">${f.eq}</code>
            <div class="formula-card-vars">${f.vars}</div>
        </div>
    `).join('');

    document.getElementById('formulas-detalle-panel').classList.remove('hidden');
}

function volverSubcats() {
    document.getElementById('formulas-detalle-panel').classList.add('hidden');
    const subcatsEl = document.getElementById('formulas-subcats-' + currentFormulasCat);
    if (subcatsEl) subcatsEl.classList.remove('hidden');
}

let animacionAtomoId;
let isPausadoAtomo = false;

function abrirVistaElemento(el) {
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('vista-elemento').classList.remove('hidden');

    document.getElementById('det-simbolo').innerText = el.s;
    document.getElementById('det-nombre').innerText = el.n;
    document.getElementById('det-z').innerText = `Z: ${el.z}`;
    document.getElementById('det-masa').innerText = el.m;
    document.getElementById('det-cat').innerText = nombresCat[el.cat];
    document.getElementById('det-valencia').innerText = el.val;
    document.getElementById('det-estado').innerText = el.estado;
    const denVal = el.den;
    const esGas = denVal && denVal.endsWith('*');
    const denNum = esGas ? denVal.replace('*','') : denVal;
    const denUnidad = esGas ? ' g/L (gas)' : ' g/cm³';
    document.getElementById('det-densidad').innerText = denVal ? denNum + denUnidad : 'Desconocida';
    document.getElementById('det-conf').innerText = el.conf;
    document.getElementById('det-enlaces').innerText = el.enlace;

    renderizarLewis(el.s, el.val);
    renderizarAtomo3D(el.z);
}

function cerrarVistaElemento() {
    document.getElementById('vista-elemento').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    if (animacionAtomoId) cancelAnimationFrame(animacionAtomoId);
}

function renderizarLewis(simbolo, valenciaStr) {
    let val = parseInt(valenciaStr.toString().replace(/[^0-9]/g, '').charAt(0));
    if (isNaN(val) || val < 1) val = 2;
    if (val > 8) val = 8;

    const contenedor = document.getElementById('contenedor-lewis');
    let html = `<div class="lewis-wrapper"><div class="lewis-sym">${simbolo}</div>`;

    const posiciones = [
        { top: '35%', right: '-15px' }, { top: '35%', left: '-15px' }, { top: '-15px', left: '35%' }, { bottom: '-15px', left: '35%' },
        { top: '65%', right: '-15px' }, { top: '65%', left: '-15px' }, { top: '-15px', left: '65%' }, { bottom: '-15px', left: '65%' }
    ];

    for (let i = 0; i < val; i++) {
        let style = '';
        for (let prop in posiciones[i]) style += `${prop}: ${posiciones[i][prop]}; `;
        html += `<div class="lewis-dot" style="${style}"></div>`;
    }
    contenedor.innerHTML = html + `</div>`;
}

let escenaP, camaraP, renderP, controlesP, nucleoGrupo, grupoOrbitas;

function togglePausaAtomo() {
    isPausadoAtomo = !isPausadoAtomo;
    const btn = document.getElementById('btn-pausa-atomo');
    if (isPausadoAtomo) {
        btn.innerText = "Reanudar Animación";
        btn.classList.add("pausado");
    } else {
        btn.innerText = "Pausar Animación";
        btn.classList.remove("pausado");
    }
}

function renderizarAtomo3D(z) {
    const contenedor = document.getElementById('canvas-elemento-principal');
    contenedor.innerHTML = '';
    isPausadoAtomo = false;
    document.getElementById('btn-pausa-atomo').innerText = "Pausar Animación";
    document.getElementById('btn-pausa-atomo').classList.remove("pausado");

    escenaP = new THREE.Scene();
    camaraP = new THREE.PerspectiveCamera(45, contenedor.clientWidth / contenedor.clientHeight, 0.1, 1000);
    renderP = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderP.setSize(contenedor.clientWidth, contenedor.clientHeight);
    contenedor.appendChild(renderP.domElement);

    controlesP = new THREE.OrbitControls(camaraP, renderP.domElement);
    controlesP.enableDamping = true;

    nucleoGrupo = new THREE.Group();
    const particulaGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const matProton = new THREE.MeshBasicMaterial({ color: 0xff4757 });
    const matNeutron = new THREE.MeshBasicMaterial({ color: 0x747d8c });

    const particulasVisuales = Math.min(z * 2, 40);
    for (let i = 0; i < particulasVisuales; i++) {
        const esfera = new THREE.Mesh(particulaGeo, i % 2 === 0 ? matProton : matNeutron);
        esfera.position.set((Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8);
        nucleoGrupo.add(esfera);
    }
    escenaP.add(nucleoGrupo);

    const elGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const elMat = new THREE.MeshBasicMaterial({ color: 0x41e2ba });
    grupoOrbitas = new THREE.Group();

    let electronesRestantes = z;
    const maxPorCapa = [2, 8, 18, 32, 32, 18, 8];
    let capasReales = [];

    for (let max of maxPorCapa) {
        if (electronesRestantes > 0) {
            let e = Math.min(electronesRestantes, max);
            capasReales.push(e);
            electronesRestantes -= e;
        }
    }

    capasReales.forEach((numElectrones, index) => {
        const radio = (index + 1) * 2.0 + 1;
        const anilloGeo = new THREE.TorusGeometry(radio, 0.015, 16, 100);
        const anillo = new THREE.Mesh(anilloGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 }));
        anillo.rotation.x = Math.random() * Math.PI;
        anillo.rotation.y = Math.random() * Math.PI;

        for (let e = 0; e < numElectrones; e++) {
            const electron = new THREE.Mesh(elGeo, elMat);
            const angulo = (e / numElectrones) * Math.PI * 2;
            electron.position.set(Math.cos(angulo) * radio, Math.sin(angulo) * radio, 0);
            anillo.add(electron);
        }
        grupoOrbitas.add(anillo);
    });

    escenaP.add(grupoOrbitas);
    camaraP.position.z = capasReales.length * 3 + 4;

    function animar() {
        animacionAtomoId = requestAnimationFrame(animar);

        if (!isPausadoAtomo) {
            nucleoGrupo.rotation.y += 0.003;
            grupoOrbitas.children.forEach((anillo, index) => {
                anillo.rotation.z += 0.008 * (index % 2 === 0 ? 1 : -1);
            });
        }
        controlesP.update();
        renderP.render(escenaP, camaraP);
    }
    animar();
}

let escenaModelos, camaraModelos, renderModelos, grupoModeloActual, controlesModelos;
let isPausadoModelos = false;

function togglePausaModelos() {
    isPausadoModelos = !isPausadoModelos;
    const btn = document.getElementById('btn-pausa-modelos');
    if (isPausadoModelos) {
        btn.innerText = "Reanudar Animación";
        btn.classList.add("pausado");
    } else {
        btn.innerText = "Pausar Animación";
        btn.classList.remove("pausado");
    }
}

function initModelosHistoricos() {
    const contenedor = document.getElementById('canvas-modelos-historicos');
    escenaModelos = new THREE.Scene();
    camaraModelos = new THREE.PerspectiveCamera(45, contenedor.clientWidth / contenedor.clientHeight, 0.1, 100);
    renderModelos = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderModelos.setSize(contenedor.clientWidth, contenedor.clientHeight);
    contenedor.appendChild(renderModelos.domElement);
    camaraModelos.position.z = 12;

    controlesModelos = new THREE.OrbitControls(camaraModelos, renderModelos.domElement);
    controlesModelos.enableDamping = true;

    const luz = new THREE.PointLight(0xffffff, 1, 100);
    luz.position.set(10, 10, 10);
    escenaModelos.add(luz);
    escenaModelos.add(new THREE.AmbientLight(0x606060));

    cargarModeloHistorico('dalton', document.querySelector('.modelo-card'));

    function animarModelos() {
        requestAnimationFrame(animarModelos);
        if (grupoModeloActual && !isPausadoModelos) {
            grupoModeloActual.rotation.y += 0.01;
            grupoModeloActual.rotation.x += 0.005;
        }
        controlesModelos.update();
        renderModelos.render(escenaModelos, camaraModelos);
    }
    animarModelos();
}

function cargarModeloHistorico(tipo, element) {
    document.querySelectorAll('.modelo-card').forEach(c => c.classList.remove('active'));
    if (element) element.classList.add('active');

    if (grupoModeloActual) escenaModelos.remove(grupoModeloActual);
    grupoModeloActual = new THREE.Group();

    if (tipo === 'dalton') {
        const mat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.8 });
        grupoModeloActual.add(new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), mat));
    } else if (tipo === 'thomson') {
        const matBase = new THREE.MeshStandardMaterial({ color: 0xff4757, transparent: true, opacity: 0.8 });
        grupoModeloActual.add(new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), matBase));
        for (let i = 0; i < 15; i++) {
            const elec = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), new THREE.MeshStandardMaterial({ color: 0x4bcffa }));
            elec.position.set((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5).normalize().multiplyScalar(3.1);
            grupoModeloActual.add(elec);
        }
    } else if (tipo === 'rutherford') {
        const nucleo = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), new THREE.MeshBasicMaterial({ color: 0xffdf00 }));
        grupoModeloActual.add(nucleo);
        for (let i = 1; i <= 4; i++) {
            const anillo = new THREE.Mesh(new THREE.TorusGeometry(3, 0.05, 16, 100), new THREE.MeshBasicMaterial({ color: 0xffffff }));
            anillo.rotation.x = Math.random() * Math.PI; anillo.rotation.y = Math.random() * Math.PI;

            const elec = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), new THREE.MeshBasicMaterial({ color: 0x4bcffa }));
            elec.position.set(3, 0, 0);
            anillo.add(elec);

            grupoModeloActual.add(anillo);
        }
    } else if (tipo === 'bohr') {
        const nucleo = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), new THREE.MeshBasicMaterial({ color: 0xffdf00 }));
        grupoModeloActual.add(nucleo);
        for (let i = 1; i <= 3; i++) {
            const anillo = new THREE.Mesh(new THREE.TorusGeometry(i * 1.5, 0.05, 16, 100), new THREE.MeshBasicMaterial({ color: 0xffffff }));
            const elec = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), new THREE.MeshBasicMaterial({ color: 0x4bcffa }));
            elec.position.set(i * 1.5, 0, 0);
            anillo.add(elec);
            grupoModeloActual.add(anillo);
        }
    } else if (tipo === 'sommerfeld') {
        const nucleo = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), new THREE.MeshBasicMaterial({ color: 0xffdf00 }));
        grupoModeloActual.add(nucleo);

        // Crear órbitas elípticas (Escalando un torus)
        for (let i = 1; i <= 3; i++) {
            const elipseGeom = new THREE.TorusGeometry(i * 1.5, 0.05, 16, 100);
            const elipse = new THREE.Mesh(elipseGeom, new THREE.MeshBasicMaterial({ color: 0xffffff }));
            elipse.scale.set(1, 0.5 + (Math.random() * 0.5), 1); // Elipse aleatoria
            elipse.rotation.x = Math.random() * Math.PI;
            elipse.rotation.y = Math.random() * Math.PI;
            grupoModeloActual.add(elipse);
        }
    } else if (tipo === 'cuantico') {
        const matNube = new THREE.MeshStandardMaterial({ color: 0x4bcffa, transparent: true, opacity: 0.15, wireframe: true });
        grupoModeloActual.add(new THREE.Mesh(new THREE.SphereGeometry(4, 32, 32), matNube));

        const matNubeDensidad = new THREE.MeshStandardMaterial({ color: 0x4bcffa, transparent: true, opacity: 0.4 });
        grupoModeloActual.add(new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), matNubeDensidad));

        grupoModeloActual.add(new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), new THREE.MeshBasicMaterial({ color: 0xff4757 })));
    }
    escenaModelos.add(grupoModeloActual);
}

document.addEventListener("DOMContentLoaded", () => {
    const orbitalesMoeller = document.querySelectorAll('.m-orb');
    const secuenciaBase = "1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p".split(" → ");

    orbitalesMoeller.forEach(orb => {
        orb.addEventListener('mouseenter', () => {
            const ordenHover = parseInt(orb.getAttribute('data-orden'));
            orbitalesMoeller.forEach(o => {
                if (parseInt(o.getAttribute('data-orden')) <= ordenHover) o.classList.add('highlight');
                else o.classList.remove('highlight');
            });

            // data-orden arranca en 1, index del array en 0, entonces index+1 <= ordenHover
            let nuevoTextoHTML = "";
            secuenciaBase.forEach((textoOrb, index) => {
                if (index + 1 <= ordenHover) nuevoTextoHTML += `<span class="sec-activa">${textoOrb}</span>`;
                else nuevoTextoHTML += textoOrb;
                if (index < secuenciaBase.length - 1) nuevoTextoHTML += " → ";
            });
            document.getElementById('secuencia-texto').innerHTML = nuevoTextoHTML;
        });

        orb.addEventListener('mouseleave', () => {
            orbitalesMoeller.forEach(o => o.classList.remove('highlight'));
            document.getElementById('secuencia-texto').innerHTML = secuenciaBase.join(" → ");
        });
    });
});


let letraGrande = false;

function toggleTamanoLetra() {
    letraGrande = !letraGrande;
    const body = document.body;
    const btn = document.getElementById('btn-letra');

    if (letraGrande) {
        body.classList.add('textos-ampliados');
        btn.classList.add('activo');
        btn.innerText = "A⁻";
    } else {
        body.classList.remove('textos-ampliados');
        btn.classList.remove('activo');
        btn.innerText = "A⁺";
    }
}

window.onload = initTabla;


let labSlot1 = null;
let labSlot2 = null;
let tabActualLab = 'elementos';

function initLaboratorio() { cambiarTabLab('elementos'); }

function cambiarTabLab(tab) {
    tabActualLab = tab;
    document.getElementById('btn-tab-elem').classList.remove('active');
    document.getElementById('btn-tab-comp').classList.remove('active');
    document.getElementById(`btn-tab-${tab === 'elementos' ? 'elem' : 'comp'}`).classList.add('active');

    document.getElementById('buscador-lab').value = "";
    renderizarGridLab(tab === 'elementos' ? elementos : compuestosLab);
}

function renderizarGridLab(lista) {
    const contenedor = document.getElementById('lab-lista');
    contenedor.innerHTML = '';
    lista.forEach(item => {
        const btn = document.createElement('div');
        btn.className = `lab-badge ${item.cat && item.cat !== 'alc' && item.cat !== 'alct' && item.cat !== 'tran' && item.cat !== 'post' && item.cat !== 'meta' && item.cat !== 'nomet' && item.cat !== 'gas' && item.cat !== 'lant' && item.cat !== 'acti' && item.cat !== 'desc' ? 'compuesto' : ''}`;
        btn.innerHTML = `<strong>${item.s}</strong><span>${item.n}</span>`;
        btn.onclick = () => seleccionarParaLab(item);
        contenedor.appendChild(btn);
    });
}

function filtrarLab() {
    const texto = document.getElementById('buscador-lab').value.toLowerCase();
    let listaFiltrada = tabActualLab === 'elementos'
        ? elementos.filter(el => el.n.toLowerCase().includes(texto) || el.s.toLowerCase().includes(texto))
        : compuestosLab.filter(c => c.n.toLowerCase().includes(texto) || c.s.toLowerCase().includes(texto));
    renderizarGridLab(listaFiltrada);
}

function formatearSubindices(input) {
    const mapaSub = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
    input.value = input.value.replace(/[0-9]/g, numero => mapaSub[numero]);

    document.getElementById('panel-resultado').classList.add('hidden');
}

function seleccionarParaLab(item) {
    document.getElementById('panel-resultado').classList.add('hidden');

    let f1 = document.getElementById('formula1');
    let f2 = document.getElementById('formula2');

    if (f1.value === "") {
        f1.value = item.s;
    } else if (f2.value === "" && f1.value !== item.s) {
        f2.value = item.s;
    }
}

function vaciarSlots() {
    document.getElementById('formula1').value = "";
    document.getElementById('formula2').value = "";
    document.getElementById('coef1').value = "1";
    document.getElementById('coef2').value = "1";
    document.getElementById('panel-resultado').classList.add('hidden');
}

function obtenerCoeficiente(eq, simbolo) {
    let reactivosStr = eq.split('→')[0].split('⇌')[0];
    let partes = reactivosStr.split('+').map(p => p.trim());

    for (let parte of partes) {
        let parteLimpia = parte.replace(/\(s\)|\(l\)|\(g\)|\(aq\)/g, '').trim();

        let match = parteLimpia.match(/^(\d+)(.*)/);
        let coef = match ? parseInt(match[1]) : 1;
        let sim = match ? match[2].trim() : parteLimpia.trim();

        if (sim === simbolo) return coef;
    }
    return null;
}

function procesarReaccion() {
    const panel = document.getElementById('panel-resultado');
    let resEq = "Sin reacción programada";
    let resTipo = "Desconocido";
    let resDesc = "Esta combinación no es espontánea en condiciones estándar.";
    let resNom = "Mezcla No Reactiva";
    let estadoValidacion = "error";

    let c1 = parseInt(document.getElementById('coef1').value) || 1;
    let c2 = parseInt(document.getElementById('coef2').value) || 1;
    let strC1 = c1 === 1 ? "" : c1;
    let strC2 = c2 === 1 ? "" : c2;

    let sA = document.getElementById('formula1').value.trim();
    let sB = document.getElementById('formula2').value.trim();

    const buscarObj = (str) => elementos.find(e => e.s === str) || compuestosLab.find(c => c.s === str) || { s: str, n: "Personalizado", cat: "desconocido" };

    let r1 = sA !== "" ? buscarObj(sA) : null;
    let r2 = sB !== "" ? buscarObj(sB) : null;

    if (r1 && !r2) {
        let clave = r1.s;
        if (reaccionesData[clave]) {
            let reaccion = reaccionesData[clave];
            let coef_necesario = obtenerCoeficiente(reaccion.eq, r1.s);

            if (c1 === coef_necesario) {
                resNom = reaccion.nom; resTipo = reaccion.tipo; resEq = reaccion.eq; resDesc = reaccion.desc;
                estadoValidacion = "exito";
            } else {
                resNom = "Desequilibrio Estequiométrico"; resTipo = "Reacción Incompleta";
                resEq = `${strC1}${r1.s} → ???`;
                resDesc = `¡Reactivo correcto! Sin embargo, necesitas ${coef_necesario} moles de este reactivo para que la descomposición esté balanceada. Ajusta el número.`;
                estadoValidacion = "desbalanceado";
            }
        } else {
            resEq = `${strC1}${r1.s} → Estabilidad Termodinámica`;
            resDesc = `El reactivo seleccionado no sufre descomposición espontánea bajo estas condiciones.`;
        }
    } else if (r1 && r2) {
        let sA = r1.s; let sB = r2.s;
        const diat = { 'H': 'H₂', 'O': 'O₂', 'N': 'N₂', 'F': 'F₂', 'Cl': 'Cl₂', 'Br': 'Br₂', 'I': 'I₂' };
        let realA = diat[sA] || sA;
        let realB = diat[sB] || sB;

        let clave1 = `${realA}+${realB}`;
        let clave2 = `${realB}+${realA}`;
        let reaccionEncontrada = reaccionesData[clave1] || reaccionesData[clave2];

        if (reaccionEncontrada) {
            let coef1_req = obtenerCoeficiente(reaccionEncontrada.eq, realA);
            let coef2_req = obtenerCoeficiente(reaccionEncontrada.eq, realB);

            if (c1 === coef1_req && c2 === coef2_req) {
                resNom = reaccionEncontrada.nom; resTipo = reaccionEncontrada.tipo;
                resEq = reaccionEncontrada.eq; resDesc = reaccionEncontrada.desc;
                estadoValidacion = "exito";
            } else {
                resNom = "Desequilibrio Estequiométrico"; resTipo = "Reacción Incompleta";
                resEq = `${strC1}${realA} + ${strC2}${realB} → ???`;
                resDesc = "¡Has encontrado una reacción válida! Sin embargo, los coeficientes que ingresaste no respetan la Ley de Conservación de la Masa. Ajusta los números en los matraces e intenta de nuevo.";
                estadoValidacion = "desbalanceado";
            }
        } else {
            resEq = `${strC1}${realA} + ${strC2}${realB} → N/R`;
        }
    }

    document.getElementById('res-nombre-reaccion').innerText = resNom;
    document.getElementById('res-tipo-reaccion').innerText = resTipo;
    document.getElementById('res-ecuacion').innerText = resEq;
    document.getElementById('res-desc').innerText = resDesc;

    const colorEcuacion = document.getElementById('res-ecuacion');
    if (estadoValidacion === "exito") {
        colorEcuacion.style.color = "var(--accent)";
    } else if (estadoValidacion === "desbalanceado") {
        colorEcuacion.style.color = "#feca57";
    } else {
        colorEcuacion.style.color = "#ff4757";
    }

    panel.classList.remove('hidden');
}

const onloadAnterior = window.onload;
window.onload = function () {
    if (onloadAnterior) onloadAnterior();
    initLaboratorio();
};
// =====================================================
// ============== OPERACIONES FÍSICAS =================
// =====================================================

function opsGetModo() {
    const el = document.getElementById('ops-field-modo');
    return el ? el.value : '';
}

function opsParseField(id) {
    const el = document.getElementById(`ops-field-${id}`);
    if (!el || String(el.value).trim() === '') return NaN;
    return parseFloat(String(el.value).replace(',', '.'));
}

function opsSelectModo(opciones) {
    return {
        id: 'modo',
        label: '¿Qué quieres obtener?',
        type: 'select',
        unit: '',
        hint: '',
        opciones
    };
}

const opsTemas = {
    ec: {
        titulo: 'Energía Cinética',
        formula: 'Ec = ½ · m · v²',
        desc: 'Elige qué calcular; ingresa las otras dos (m y v positivas cuando apliquen). Deja vacío el campo de la incógnita.',
        campos: [
            opsSelectModo([
                { value: 'Ec', label: 'Energía cinética Ec' },
                { value: 'm', label: 'Masa m' },
                { value: 'v', label: 'Velocidad v' }
            ]),
            { id: 'masa', label: 'Masa (m)', unit: 'kg', hint: 'Vacío si calculas m' },
            { id: 'vel', label: 'Velocidad (v)', unit: 'm/s', hint: 'Vacío si calculas v' },
            { id: 'ec', label: 'Energía cinética (Ec)', unit: 'J', hint: 'Vacío si calculas Ec' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'Ec';
            const m = opsParseField('masa'), vel = opsParseField('vel'), Ec = opsParseField('ec');
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (modo === 'Ec') {
                if (!pos(m) || !pos(vel)) return { error: 'Para Ec ingresa m y v (positivas). Deja Ec vacío.' };
                return { vals: { modo, masa: String(m), vel: String(vel) } };
            }
            if (modo === 'm') {
                if (!pos(Ec) || !pos(vel)) return { error: 'Para m ingresa Ec y v (positivas). Deja m vacío.' };
                return { vals: { modo, ec: String(Ec), vel: String(vel) } };
            }
            if (modo === 'v') {
                if (!pos(Ec) || !pos(m)) return { error: 'Para v ingresa Ec y m (positivas). Deja v vacío.' };
                return { vals: { modo, ec: String(Ec), masa: String(m) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'Ec') {
                const m = parseFloat(v.masa), vel = parseFloat(v.vel);
                const Ec = 0.5 * m * vel * vel;
                return {
                    valor: Ec.toFixed(4), unidad: 'J',
                    pasos: [
                        `Fórmula: Ec = ½ · m · v²`,
                        `Sustituyendo: Ec = ½ · ${m} kg · (${vel} m/s)²`,
                        `Ec = ${Ec.toFixed(4)} J`
                    ]
                };
            }
            if (modo === 'm') {
                const Ec = parseFloat(v.ec), vel = parseFloat(v.vel);
                const m = 2 * Ec / (vel * vel);
                return {
                    valor: m.toFixed(4), unidad: 'kg',
                    pasos: [
                        `Despeje: m = 2Ec / v²`,
                        `m = 2 · ${Ec} / ${vel}²`,
                        `m = ${m.toFixed(4)} kg`
                    ]
                };
            }
            if (modo === 'v') {
                const Ec = parseFloat(v.ec), m = parseFloat(v.masa);
                const vel = Math.sqrt(2 * Ec / m);
                return {
                    valor: vel.toFixed(4), unidad: 'm/s',
                    pasos: [
                        `Despeje: v = √(2Ec / m)`,
                        `v = √(2 · ${Ec} / ${m})`,
                        `v = ${vel.toFixed(4)} m/s`
                    ]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    ep: {
        titulo: 'Energía Potencial Gravitacional',
        formula: 'Ep = m · g · h',
        desc: 'g = 9.81 m/s². Elige qué calcular; deja vacío el campo de la incógnita (m y h positivas cuando apliquen).',
        campos: [
            opsSelectModo([
                { value: 'Ep', label: 'Energía potencial Ep' },
                { value: 'm', label: 'Masa m' },
                { value: 'h', label: 'Altura h' }
            ]),
            { id: 'masa', label: 'Masa (m)', unit: 'kg', hint: 'Vacío si calculas m' },
            { id: 'altura', label: 'Altura (h)', unit: 'm', hint: 'Vacío si calculas h' },
            { id: 'ep', label: 'Energía potencial (Ep)', unit: 'J', hint: 'Vacío si calculas Ep' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'Ep';
            const m = opsParseField('masa'), h = opsParseField('altura'), Ep = opsParseField('ep');
            const pos = (x) => Number.isFinite(x) && x > 0;
            const g = 9.81;
            if (modo === 'Ep') {
                if (!pos(m) || !pos(h)) return { error: 'Para Ep ingresa m y h (positivas). Deja Ep vacío.' };
                return { vals: { modo, masa: String(m), altura: String(h) } };
            }
            if (modo === 'm') {
                if (!pos(Ep) || !pos(h)) return { error: 'Para m ingresa Ep y h (positivas). Deja m vacío.' };
                return { vals: { modo, ep: String(Ep), altura: String(h) } };
            }
            if (modo === 'h') {
                if (!pos(Ep) || !pos(m)) return { error: 'Para h ingresa Ep y m (positivas). Deja h vacío.' };
                return { vals: { modo, ep: String(Ep), masa: String(m) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const g = 9.81;
            const modo = v.modo;
            if (modo === 'Ep') {
                const m = parseFloat(v.masa), h = parseFloat(v.altura);
                const Ep = m * g * h;
                return {
                    valor: Ep.toFixed(4), unidad: 'J',
                    pasos: [
                        `Fórmula: Ep = m · g · h`,
                        `g = 9.81 m/s²`,
                        `Ep = ${m} · 9.81 · ${h} = ${Ep.toFixed(4)} J`
                    ]
                };
            }
            if (modo === 'm') {
                const Ep = parseFloat(v.ep), h = parseFloat(v.altura);
                const m = Ep / (g * h);
                return {
                    valor: m.toFixed(4), unidad: 'kg',
                    pasos: [
                        `Despeje: m = Ep / (g · h)`,
                        `m = ${Ep} / (9.81 · ${h})`,
                        `m = ${m.toFixed(4)} kg`
                    ]
                };
            }
            if (modo === 'h') {
                const Ep = parseFloat(v.ep), m = parseFloat(v.masa);
                const h = Ep / (m * g);
                return {
                    valor: h.toFixed(4), unidad: 'm',
                    pasos: [
                        `Despeje: h = Ep / (m · g)`,
                        `h = ${Ep} / (${m} · 9.81)`,
                        `h = ${h.toFixed(4)} m`
                    ]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    trabajo: {
        titulo: 'Trabajo Mecánico',
        formula: 'W = F · d · cos(θ)',
        desc: 'Elige qué calcular. Siempre indica el ángulo θ entre F y d. cos(θ) no puede ser 0 al despejar F o d.',
        campos: [
            opsSelectModo([
                { value: 'W', label: 'Trabajo W' },
                { value: 'F', label: 'Fuerza F' },
                { value: 'd', label: 'Desplazamiento d' }
            ]),
            { id: 'fuerza', label: 'Fuerza (F)', unit: 'N', hint: 'Vacío si calculas F' },
            { id: 'dist', label: 'Desplazamiento (d)', unit: 'm', hint: 'Vacío si calculas d' },
            { id: 'trab', label: 'Trabajo (W)', unit: 'J', hint: 'Vacío si calculas W' },
            { id: 'angulo', label: 'Ángulo θ (entre F y d)', unit: '°', hint: 'ej. 0' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'W';
            const F = opsParseField('fuerza'), d = opsParseField('dist'), W = opsParseField('trab');
            const ang = opsParseField('angulo');
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (!Number.isFinite(ang)) return { error: 'Ingresa el ángulo θ en grados.' };
            const rad = ang * Math.PI / 180;
            const c = Math.cos(rad);
            if (Math.abs(c) < 1e-9) return { error: 'cos(θ) es 0: no se puede despejar F ni d con esta orientación.' };
            if (modo === 'W') {
                if (!pos(F) || !pos(d)) return { error: 'Para W ingresa F y d (positivas). Deja W vacío.' };
                return { vals: { modo, fuerza: String(F), dist: String(d), angulo: String(ang) } };
            }
            if (modo === 'F') {
                if (!Number.isFinite(W) || !pos(d)) return { error: 'Para F ingresa W y d (d > 0). Deja F vacío.' };
                return { vals: { modo, trab: String(W), dist: String(d), angulo: String(ang) } };
            }
            if (modo === 'd') {
                if (!Number.isFinite(W) || !pos(F)) return { error: 'Para d ingresa W y F (F > 0). Deja d vacío.' };
                return { vals: { modo, trab: String(W), fuerza: String(F), angulo: String(ang) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            const ang = parseFloat(v.angulo);
            const rad = ang * Math.PI / 180;
            const c = Math.cos(rad);
            if (modo === 'W') {
                const F = parseFloat(v.fuerza), d = parseFloat(v.dist);
                const W = F * d * c;
                return {
                    valor: W.toFixed(4), unidad: 'J',
                    pasos: [
                        `Fórmula: W = F · d · cos(θ)`,
                        `cos(${ang}°) = ${c.toFixed(6)}`,
                        `W = ${F} · ${d} · ${c.toFixed(6)} = ${W.toFixed(4)} J`
                    ]
                };
            }
            if (modo === 'F') {
                const W = parseFloat(v.trab), d = parseFloat(v.dist);
                const F = W / (d * c);
                return {
                    valor: F.toFixed(4), unidad: 'N',
                    pasos: [
                        `Despeje: F = W / (d · cos θ)`,
                        `F = ${W} / (${d} · ${c.toFixed(6)})`,
                        `F = ${F.toFixed(4)} N`
                    ]
                };
            }
            if (modo === 'd') {
                const W = parseFloat(v.trab), F = parseFloat(v.fuerza);
                const d = W / (F * c);
                return {
                    valor: d.toFixed(4), unidad: 'm',
                    pasos: [
                        `Despeje: d = W / (F · cos θ)`,
                        `d = ${W} / (${F} · ${c.toFixed(6)})`,
                        `d = ${d.toFixed(4)} m`
                    ]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    potencia: {
        titulo: 'Potencia',
        formula: 'P = W / t',
        desc: 'Elige qué calcular (W trabajo en julios, t en segundos; valores positivos cuando apliquen).',
        campos: [
            opsSelectModo([
                { value: 'P', label: 'Potencia P' },
                { value: 'W', label: 'Trabajo W' },
                { value: 't', label: 'Tiempo t' }
            ]),
            { id: 'trabajo', label: 'Trabajo (W)', unit: 'J', hint: 'Vacío si calculas W' },
            { id: 'tiempo', label: 'Tiempo (t)', unit: 's', hint: 'Vacío si calculas t' },
            { id: 'pot', label: 'Potencia (P)', unit: 'W', hint: 'Vacío si calculas P' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'P';
            const W = opsParseField('trabajo'), t = opsParseField('tiempo'), P = opsParseField('pot');
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (modo === 'P') {
                if (!pos(W) || !pos(t)) return { error: 'Para P ingresa W y t (positivos). Deja P vacío.' };
                return { vals: { modo, trabajo: String(W), tiempo: String(t) } };
            }
            if (modo === 'W') {
                if (!pos(P) || !pos(t)) return { error: 'Para W ingresa P y t (positivos). Deja W vacío.' };
                return { vals: { modo, pot: String(P), tiempo: String(t) } };
            }
            if (modo === 't') {
                if (!pos(P) || !pos(W)) return { error: 'Para t ingresa P y W (positivos). Deja t vacío.' };
                return { vals: { modo, pot: String(P), trabajo: String(W) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'P') {
                const W = parseFloat(v.trabajo), t = parseFloat(v.tiempo);
                const P = W / t;
                return {
                    valor: P.toFixed(4), unidad: 'W',
                    pasos: [
                        `Fórmula: P = W / t`,
                        `P = ${W} J / ${t} s = ${P.toFixed(4)} W`,
                        `≈ ${(P / 745.7).toFixed(6)} hp`
                    ]
                };
            }
            if (modo === 'W') {
                const P = parseFloat(v.pot), t = parseFloat(v.tiempo);
                const W = P * t;
                return {
                    valor: W.toFixed(4), unidad: 'J',
                    pasos: [
                        `Despeje: W = P · t`,
                        `W = ${P} · ${t} = ${W.toFixed(4)} J`
                    ]
                };
            }
            if (modo === 't') {
                const P = parseFloat(v.pot), W = parseFloat(v.trabajo);
                const t = W / P;
                return {
                    valor: t.toFixed(4), unidad: 's',
                    pasos: [
                        `Despeje: t = W / P`,
                        `t = ${W} / ${P} = ${t.toFixed(4)} s`
                    ]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    calor: {
        titulo: 'Calor Sensible (Q = mcΔT)',
        formula: 'Q = m · c · ΔT',
        desc: 'Siempre ingresa Ti y Tf. Elige si calculas Q, m o c (ΔT = Tf − Ti no puede ser 0 al despejar m o c).',
        campos: [
            opsSelectModo([
                { value: 'Q', label: 'Calor Q' },
                { value: 'm', label: 'Masa m' },
                { value: 'c', label: 'Calor específico c' }
            ]),
            { id: 'masa', label: 'Masa (m)', unit: 'kg', hint: 'Vacío si calculas m' },
            { id: 'ce', label: 'Calor específico (c)', unit: 'J/(kg·°C)', hint: 'Vacío si calculas c' },
            { id: 'calorq', label: 'Calor (Q)', unit: 'J', hint: 'Vacío si calculas Q' },
            { id: 'ti', label: 'Temperatura inicial (Ti)', unit: '°C', hint: 'ej. 20' },
            { id: 'tf', label: 'Temperatura final (Tf)', unit: '°C', hint: 'ej. 80' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'Q';
            const m = opsParseField('masa'), c = opsParseField('ce'), Q = opsParseField('calorq');
            const Ti = opsParseField('ti'), Tf = opsParseField('tf');
            if (!Number.isFinite(Ti) || !Number.isFinite(Tf)) return { error: 'Ingresa Ti y Tf.' };
            const dT = Tf - Ti;
            if (modo !== 'Q' && Math.abs(dT) < 1e-12) return { error: 'ΔT = Tf − Ti no puede ser 0 para despejar m o c.' };
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (modo === 'Q') {
                if (!pos(m) || !pos(c)) return { error: 'Para Q ingresa m y c (positivos). Deja Q vacío.' };
                return { vals: { modo, masa: String(m), ce: String(c), ti: String(Ti), tf: String(Tf) } };
            }
            if (modo === 'm') {
                if (!Number.isFinite(Q) || !pos(c)) return { error: 'Para m ingresa Q y c (c > 0). Deja m vacío.' };
                return { vals: { modo, calorq: String(Q), ce: String(c), ti: String(Ti), tf: String(Tf) } };
            }
            if (modo === 'c') {
                if (!Number.isFinite(Q) || !pos(m)) return { error: 'Para c ingresa Q y m (m > 0). Deja c vacío.' };
                return { vals: { modo, calorq: String(Q), masa: String(m), ti: String(Ti), tf: String(Tf) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            const Ti = parseFloat(v.ti), Tf = parseFloat(v.tf);
            const dT = Tf - Ti;
            if (modo === 'Q') {
                const m = parseFloat(v.masa), c = parseFloat(v.ce);
                const Q = m * c * dT;
                return {
                    valor: Q.toFixed(4), unidad: 'J',
                    pasos: [
                        `Fórmula: Q = m · c · ΔT`,
                        `ΔT = Tf − Ti = ${dT} °C`,
                        `Q = ${m} · ${c} · ${dT} = ${Q.toFixed(4)} J`,
                        `≈ ${(Q / 4186).toFixed(4)} kcal`,
                        dT >= 0 ? `El sistema absorbe calor (endotérmico).` : `El sistema libera calor (exotérmico).`
                    ]
                };
            }
            if (modo === 'm') {
                const Q = parseFloat(v.calorq), c = parseFloat(v.ce);
                const m = Q / (c * dT);
                return {
                    valor: m.toFixed(4), unidad: 'kg',
                    pasos: [
                        `Despeje: m = Q / (c · ΔT)`,
                        `ΔT = ${dT} °C`,
                        `m = ${Q} / (${c} · ${dT}) = ${m.toFixed(4)} kg`
                    ]
                };
            }
            if (modo === 'c') {
                const Q = parseFloat(v.calorq), m = parseFloat(v.masa);
                const c = Q / (m * dT);
                return {
                    valor: c.toFixed(4), unidad: 'J/(kg·°C)',
                    pasos: [
                        `Despeje: c = Q / (m · ΔT)`,
                        `ΔT = ${dT} °C`,
                        `c = ${Q} / (${m} · ${dT}) = ${c.toFixed(4)} J/(kg·°C)`
                    ]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    '2ley': {
        titulo: '2ª Ley — Eficiencia Térmica (Carnot)',
        formula: 'η = 1 − (Tc / Th)',
        desc: 'Temperaturas en kelvin (K). Para despejar Th o Tc, ingresa η como decimal entre 0 y 1 (ej. 0.42 = 42%).',
        campos: [
            opsSelectModo([
                { value: 'eta', label: 'Eficiencia η' },
                { value: 'Th', label: 'Temperatura caliente Th' },
                { value: 'Tc', label: 'Temperatura fría Tc' }
            ]),
            { id: 'th', label: 'Temperatura caliente (Th)', unit: 'K', hint: 'Vacío si calculas Th' },
            { id: 'tc', label: 'Temperatura fría (Tc)', unit: 'K', hint: 'Vacío si calculas Tc' },
            { id: 'eta', label: 'Eficiencia η (0 a 1)', unit: '', hint: 'Solo si despejas Th o Tc' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'eta';
            const Th = opsParseField('th'), Tc = opsParseField('tc'), eta = opsParseField('eta');
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (modo === 'eta') {
                if (!pos(Th) || !pos(Tc)) return { error: 'Para η ingresa Th y Tc (K, positivas). Deja η vacío.' };
                if (Tc >= Th) return { error: 'Tc debe ser menor que Th.' };
                return { vals: { modo, th: String(Th), tc: String(Tc) } };
            }
            if (modo === 'Th') {
                if (!Number.isFinite(eta) || eta <= 0 || eta >= 1 || !pos(Tc)) return { error: 'Para Th ingresa η (entre 0 y 1) y Tc > 0. Deja Th vacío.' };
                return { vals: { modo, eta: String(eta), tc: String(Tc) } };
            }
            if (modo === 'Tc') {
                if (!Number.isFinite(eta) || eta <= 0 || eta >= 1 || !pos(Th)) return { error: 'Para Tc ingresa η (entre 0 y 1) y Th > 0. Deja Tc vacío.' };
                return { vals: { modo, eta: String(eta), th: String(Th) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'eta') {
                const Th = parseFloat(v.th), Tc = parseFloat(v.tc);
                const eta = 1 - (Tc / Th);
                const pct = (eta * 100).toFixed(2);
                return {
                    valor: pct, unidad: '%',
                    pasos: [
                        `η = 1 − (Tc / Th) = 1 − (${Tc} / ${Th})`,
                        `η = ${eta.toFixed(6)} → ${pct}%`,
                        `Nota: ninguna máquina real supera este límite.`
                    ]
                };
            }
            if (modo === 'Th') {
                const eta = parseFloat(v.eta), Tc = parseFloat(v.tc);
                const Th = Tc / (1 - eta);
                return {
                    valor: Th.toFixed(4), unidad: 'K',
                    pasos: [
                        `Despeje: Th = Tc / (1 − η)`,
                        `Th = ${Tc} / (1 − ${eta}) = ${Th.toFixed(4)} K`
                    ]
                };
            }
            if (modo === 'Tc') {
                const eta = parseFloat(v.eta), Th = parseFloat(v.th);
                const Tc = (1 - eta) * Th;
                return {
                    valor: Tc.toFixed(4), unidad: 'K',
                    pasos: [
                        `Despeje: Tc = (1 − η) · Th`,
                        `Tc = (1 − ${eta}) · ${Th} = ${Tc.toFixed(4)} K`
                    ]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    dilatacion: {
        titulo: 'Dilatación Térmica Lineal',
        formula: 'ΔL = L₀ · α · ΔT',
        desc: 'Elige qué calcular; el resto deben ser conocidos (evita divisiones por 0).',
        campos: [
            opsSelectModo([
                { value: 'dL', label: 'Alargamiento ΔL' },
                { value: 'L0', label: 'Longitud inicial L₀' },
                { value: 'alpha', label: 'Coeficiente α' },
                { value: 'dT', label: 'Variación ΔT' }
            ]),
            { id: 'dl', label: 'ΔL', unit: 'm', hint: 'Vacío si calculas ΔL' },
            { id: 'l0', label: 'Longitud inicial (L₀)', unit: 'm', hint: 'Vacío si calculas L₀' },
            { id: 'alpha', label: 'Coef. dilatación (α)', unit: '1/°C', hint: 'Vacío si calculas α' },
            { id: 'dt', label: 'Variación de temp. (ΔT)', unit: '°C', hint: 'Vacío si calculas ΔT' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'dL';
            const dL = opsParseField('dl'), L0 = opsParseField('l0'), alpha = opsParseField('alpha'), dT = opsParseField('dt');
            const nz = (x) => Number.isFinite(x) && x !== 0;
            const fin = (x) => Number.isFinite(x);
            if (modo === 'dL') {
                if (!nz(L0) || !nz(alpha) || !nz(dT)) return { error: 'Para ΔL ingresa L₀, α y ΔT (todos ≠ 0 donde aplique).' };
                return { vals: { modo, l0: String(L0), alpha: String(alpha), dt: String(dT) } };
            }
            if (modo === 'L0') {
                if (!nz(alpha) || !nz(dT) || !fin(dL)) return { error: 'Para L₀ ingresa ΔL, α y ΔT (α y ΔT ≠ 0).' };
                return { vals: { modo, dl: String(dL), alpha: String(alpha), dt: String(dT) } };
            }
            if (modo === 'alpha') {
                if (!nz(L0) || !nz(dT) || !fin(dL)) return { error: 'Para α ingresa ΔL, L₀ y ΔT (L₀ y ΔT ≠ 0).' };
                return { vals: { modo, dl: String(dL), l0: String(L0), dt: String(dT) } };
            }
            if (modo === 'dT') {
                if (!nz(L0) || !nz(alpha) || !fin(dL)) return { error: 'Para ΔT ingresa ΔL, L₀ y α (L₀ y α ≠ 0).' };
                return { vals: { modo, dl: String(dL), l0: String(L0), alpha: String(alpha) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'dL') {
                const L0 = parseFloat(v.l0), alpha = parseFloat(v.alpha), dT = parseFloat(v.dt);
                const dL = L0 * alpha * dT;
                const Lf = L0 + dL;
                return {
                    valor: dL.toFixed(6), unidad: 'm',
                    pasos: [
                        `ΔL = L₀ · α · ΔT = ${L0} · ${alpha} · ${dT}`,
                        `ΔL = ${dL.toFixed(6)} m`,
                        `Lf = L₀ + ΔL = ${Lf.toFixed(6)} m`
                    ]
                };
            }
            if (modo === 'L0') {
                const dL = parseFloat(v.dl), alpha = parseFloat(v.alpha), dT = parseFloat(v.dt);
                const L0 = dL / (alpha * dT);
                return { valor: L0.toFixed(6), unidad: 'm', pasos: [`L₀ = ΔL / (α · ΔT) = ${L0.toFixed(6)} m`] };
            }
            if (modo === 'alpha') {
                const dL = parseFloat(v.dl), L0 = parseFloat(v.l0), dT = parseFloat(v.dt);
                const alpha = dL / (L0 * dT);
                return { valor: alpha.toFixed(9), unidad: '1/°C', pasos: [`α = ΔL / (L₀ · ΔT) = ${alpha.toFixed(9)} 1/°C`] };
            }
            if (modo === 'dT') {
                const dL = parseFloat(v.dl), L0 = parseFloat(v.l0), alpha = parseFloat(v.alpha);
                const dT = dL / (L0 * alpha);
                return { valor: dT.toFixed(6), unidad: '°C', pasos: [`ΔT = ΔL / (L₀ · α) = ${dT.toFixed(6)} °C`] };
            }
            return { error: 'Modo no válido.' };
        }
    },
    presion: {
        titulo: 'Presión',
        formula: 'P = F / A',
        desc: 'Elige qué calcular e ingresa las otras dos (solo positivas). Deja vacío el campo de la incógnita.',
        campos: [
            opsSelectModo([
                { value: 'P', label: 'Presión P' },
                { value: 'F', label: 'Fuerza F' },
                { value: 'A', label: 'Área A' }
            ]),
            { id: 'fuerza', label: 'Fuerza (F)', unit: 'N', hint: 'Vacío si calculas F' },
            { id: 'area', label: 'Área (A)', unit: 'm²', hint: 'Vacío si calculas A' },
            { id: 'pres', label: 'Presión (P)', unit: 'Pa', hint: 'Vacío si calculas P' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'P';
            const F = opsParseField('fuerza'), A = opsParseField('area'), P = opsParseField('pres');
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (modo === 'P') {
                if (!pos(F) || !pos(A)) return { error: 'Para P ingresa F y A (positivas). Deja P vacío.' };
                return { vals: { modo, fuerza: String(F), area: String(A) } };
            }
            if (modo === 'F') {
                if (!pos(P) || !pos(A)) return { error: 'Para F ingresa P y A (positivas). Deja F vacío.' };
                return { vals: { modo, pres: String(P), area: String(A) } };
            }
            if (modo === 'A') {
                if (!pos(P) || !pos(F)) return { error: 'Para A ingresa P y F (positivas). Deja A vacío.' };
                return { vals: { modo, pres: String(P), fuerza: String(F) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'P') {
                const F = parseFloat(v.fuerza), A = parseFloat(v.area);
                const P = F / A;
                return {
                    valor: P.toFixed(4), unidad: 'Pa',
                    pasos: [
                        `Fórmula: P = F / A`,
                        `P = ${F} N / ${A} m²`,
                        `P = ${P.toFixed(4)} Pa`,
                        `= ${(P / 1000).toFixed(6)} kPa`,
                        `= ${(P / 101325).toFixed(8)} atm`
                    ]
                };
            }
            if (modo === 'F') {
                const P = parseFloat(v.pres), A = parseFloat(v.area);
                const F = P * A;
                return {
                    valor: F.toFixed(4), unidad: 'N',
                    pasos: [
                        `Fórmula: F = P · A`,
                        `F = ${P} Pa · ${A} m²`,
                        `F = ${F.toFixed(4)} N`
                    ]
                };
            }
            if (modo === 'A') {
                const P = parseFloat(v.pres), F = parseFloat(v.fuerza);
                const A = F / P;
                return {
                    valor: A.toFixed(8), unidad: 'm²',
                    pasos: [
                        `Fórmula: A = F / P`,
                        `A = ${F} N / ${P} Pa`,
                        `A = ${A.toFixed(8)} m²`
                    ]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    phidro: {
        titulo: 'Presión Hidrostática',
        formula: 'P = ρ · g · h',
        desc: 'g = 9.81 m/s². Elige qué calcular (valores positivos cuando apliquen).',
        campos: [
            opsSelectModo([
                { value: 'P', label: 'Presión P' },
                { value: 'rho', label: 'Densidad ρ' },
                { value: 'h', label: 'Profundidad h' }
            ]),
            { id: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³', hint: 'Vacío si calculas ρ' },
            { id: 'altura', label: 'Profundidad (h)', unit: 'm', hint: 'Vacío si calculas h' },
            { id: 'pres', label: 'Presión (P)', unit: 'Pa', hint: 'Vacío si calculas P' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'P';
            const rho = opsParseField('rho'), h = opsParseField('altura'), P = opsParseField('pres');
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (modo === 'P') {
                if (!pos(rho) || !pos(h)) return { error: 'Para P ingresa ρ y h (positivas). Deja P vacío.' };
                return { vals: { modo, rho: String(rho), altura: String(h) } };
            }
            if (modo === 'rho') {
                if (!pos(P) || !pos(h)) return { error: 'Para ρ ingresa P y h (positivas). Deja ρ vacío.' };
                return { vals: { modo, pres: String(P), altura: String(h) } };
            }
            if (modo === 'h') {
                if (!pos(P) || !pos(rho)) return { error: 'Para h ingresa P y ρ (positivas). Deja h vacío.' };
                return { vals: { modo, pres: String(P), rho: String(rho) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const g = 9.81;
            const modo = v.modo;
            if (modo === 'P') {
                const rho = parseFloat(v.rho), h = parseFloat(v.altura);
                const P = rho * g * h;
                return {
                    valor: P.toFixed(4), unidad: 'Pa',
                    pasos: [
                        `P = ρ · g · h = ${rho} · 9.81 · ${h}`,
                        `P = ${P.toFixed(4)} Pa`,
                        `= ${(P / 1000).toFixed(4)} kPa`,
                        `= ${(P / 101325).toFixed(6)} atm`
                    ]
                };
            }
            if (modo === 'rho') {
                const P = parseFloat(v.pres), h = parseFloat(v.altura);
                const rho = P / (g * h);
                return { valor: rho.toFixed(4), unidad: 'kg/m³', pasos: [`ρ = P / (g · h) = ${rho.toFixed(4)} kg/m³`] };
            }
            if (modo === 'h') {
                const P = parseFloat(v.pres), rho = parseFloat(v.rho);
                const h = P / (rho * g);
                return { valor: h.toFixed(4), unidad: 'm', pasos: [`h = P / (ρ · g) = ${h.toFixed(4)} m`] };
            }
            return { error: 'Modo no válido.' };
        }
    },
    patm: {
        titulo: 'Presión Atmosférica — Conversión y Referencia',
        formula: '1 atm = 101,325 Pa = 760 mmHg = 1.01325 bar',
        desc: 'Convierte un valor de presión atmosférica a otras unidades comunes.',
        campos: [
            { id: 'patm', label: 'Presión (P)', unit: 'atm', hint: 'ej. 1.2' }
        ],
        calcular(v) {
            const P = parseFloat(v.patm);
            const Pa = P * 101325;
            const kPa = Pa / 1000;
            const bar = Pa / 100000;
            const mmHg = Pa / 133.322;
            const psi = Pa / 6894.76;
            return {
                valor: Pa.toFixed(2), unidad: 'Pa',
                pasos: [
                    `Valor ingresado: ${P} atm`,
                    `→ ${Pa.toFixed(2)} Pa`,
                    `→ ${kPa.toFixed(4)} kPa`,
                    `→ ${bar.toFixed(6)} bar`,
                    `→ ${mmHg.toFixed(4)} mmHg (Torr)`,
                    `→ ${psi.toFixed(4)} psi`
                ]
            };
        }
    },
    caudal: {
        titulo: 'Caudal y Ecuación de Continuidad',
        formula: 'Q = A · v  |  A₁v₁ = A₂v₂',
        desc: 'El caudal volumétrico se conserva en un fluido incompresible (flujo continuo).',
        campos: [
            { id: 'a1', label: 'Área sección 1 (A₁)', unit: 'm²', hint: 'ej. 0.05' },
            { id: 'v1', label: 'Velocidad sección 1 (v₁)', unit: 'm/s', hint: 'ej. 2' },
            { id: 'a2', label: 'Área sección 2 (A₂)', unit: 'm²', hint: 'ej. 0.02' }
        ],
        calcular(v) {
            const A1 = parseFloat(v.a1), v1 = parseFloat(v.v1), A2 = parseFloat(v.a2);
            const Q = A1 * v1;
            const v2 = Q / A2;
            return {
                valor: Q.toFixed(6), unidad: 'm³/s',
                pasos: [
                    `Caudal: Q = A₁ · v₁ = ${A1} m² · ${v1} m/s = ${Q.toFixed(6)} m³/s`,
                    `Ecuación de continuidad: A₁v₁ = A₂v₂`,
                    `v₂ = (A₁ · v₁) / A₂ = ${Q.toFixed(6)} / ${A2}`,
                    `v₂ = ${v2.toFixed(4)} m/s`,
                    A2 < A1 ? `La sección se reduce → el fluido se acelera (efecto Venturi).` : `La sección se amplía → el fluido desacelera.`
                ]
            };
        }
    },
    bernoulli: {
        titulo: 'Ecuación de Bernoulli',
        formula: 'P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂',
        desc: 'Conservación de energía en fluidos ideales. Calcula P₂ dado el estado inicial y las condiciones de la sección 2.',
        campos: [
            { id: 'rho', label: 'Densidad del fluido (ρ)', unit: 'kg/m³', hint: 'agua=1000' },
            { id: 'p1', label: 'Presión P₁', unit: 'Pa', hint: 'ej. 200000' },
            { id: 'v1', label: 'Velocidad v₁', unit: 'm/s', hint: 'ej. 2' },
            { id: 'h1', label: 'Altura h₁', unit: 'm', hint: 'ej. 0' },
            { id: 'v2', label: 'Velocidad v₂', unit: 'm/s', hint: 'ej. 5' },
            { id: 'h2', label: 'Altura h₂', unit: 'm', hint: 'ej. 3' }
        ],
        calcular(v) {
            const rho = parseFloat(v.rho), g = 9.81;
            const P1 = parseFloat(v.p1), v1 = parseFloat(v.v1), h1 = parseFloat(v.h1);
            const v2 = parseFloat(v.v2), h2 = parseFloat(v.h2);
            const P2 = P1 + 0.5*rho*(v1*v1 - v2*v2) + rho*g*(h1 - h2);
            return {
                valor: P2.toFixed(2), unidad: 'Pa',
                pasos: [
                    `Ecuación: P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂`,
                    `Despejando P₂: P₂ = P₁ + ½ρ(v₁² − v₂²) + ρg(h₁ − h₂)`,
                    `½ρ(v₁² − v₂²) = ½ · ${rho} · (${v1}² − ${v2}²) = ${(0.5*rho*(v1*v1-v2*v2)).toFixed(2)} Pa`,
                    `ρg(h₁ − h₂) = ${rho} · 9.81 · (${h1} − ${h2}) = ${(rho*g*(h1-h2)).toFixed(2)} Pa`,
                    `P₂ = ${P1} + ${(0.5*rho*(v1*v1-v2*v2)).toFixed(2)} + ${(rho*g*(h1-h2)).toFixed(2)}`,
                    `P₂ = ${P2.toFixed(2)} Pa = ${(P2/1000).toFixed(4)} kPa`
                ]
            };
        }
    },
    torricelli: {
        titulo: 'Teorema de Torricelli',
        formula: 'v = √(2 · g · h)',
        desc: 'g = 9.81 m/s². Elige v o h; deja vacío el que calcules.',
        campos: [
            opsSelectModo([
                { value: 'v', label: 'Velocidad v' },
                { value: 'h', label: 'Altura h' }
            ]),
            { id: 'altura', label: 'Altura de la columna (h)', unit: 'm', hint: 'Vacío si calculas h' },
            { id: 'vel', label: 'Velocidad (v)', unit: 'm/s', hint: 'Vacío si calculas v' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'v';
            const h = opsParseField('altura'), vel = opsParseField('vel');
            const pos = (x) => Number.isFinite(x) && x > 0;
            const g = 9.81;
            if (modo === 'v') {
                if (!pos(h)) return { error: 'Para v ingresa h > 0. Deja v vacío.' };
                return { vals: { modo, altura: String(h) } };
            }
            if (modo === 'h') {
                if (!pos(vel)) return { error: 'Para h ingresa v > 0. Deja h vacío.' };
                return { vals: { modo, vel: String(vel) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const g = 9.81;
            if (v.modo === 'v') {
                const h = parseFloat(v.altura);
                const vel = Math.sqrt(2 * g * h);
                return {
                    valor: vel.toFixed(4), unidad: 'm/s',
                    pasos: [
                        `v = √(2gh) = √(2 · 9.81 · ${h})`,
                        `v = ${vel.toFixed(4)} m/s`,
                        `≈ ${(vel * 3.6).toFixed(4)} km/h`
                    ]
                };
            }
            if (v.modo === 'h') {
                const vel = parseFloat(v.vel);
                const h = (vel * vel) / (2 * g);
                return {
                    valor: h.toFixed(4), unidad: 'm',
                    pasos: [
                        `Despeje: h = v² / (2g)`,
                        `h = ${vel}² / (2 · 9.81) = ${h.toFixed(4)} m`
                    ]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    mrua_v: {
        titulo: 'MRUA — Velocidad final',
        formula: 'v = v₀ + a · t',
        desc: 'Elige qué calcular; deja vacío el campo de la incógnita (t ≠ 0 al despejar a o t).',
        campos: [
            opsSelectModo([
                { value: 'v', label: 'Velocidad final v' },
                { value: 'v0', label: 'Velocidad inicial v₀' },
                { value: 'a', label: 'Aceleración a' },
                { value: 't', label: 'Tiempo t' }
            ]),
            { id: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', hint: 'Vacío si calculas v₀' },
            { id: 'acel', label: 'Aceleración (a)', unit: 'm/s²', hint: 'Vacío si calculas a' },
            { id: 'tiempo', label: 'Tiempo (t)', unit: 's', hint: 'Vacío si calculas t' },
            { id: 'vf', label: 'Velocidad final (v)', unit: 'm/s', hint: 'Vacío si calculas v' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'v';
            const v0 = opsParseField('v0'), a = opsParseField('acel'), t = opsParseField('tiempo'), vf = opsParseField('vf');
            const nz = (x) => Number.isFinite(x) && x !== 0;
            const fin = (x) => Number.isFinite(x);
            if (modo === 'v') {
                if (!fin(v0) || !fin(a) || !fin(t)) return { error: 'Para v ingresa v₀, a y t.' };
                return { vals: { modo, v0: String(v0), acel: String(a), tiempo: String(t) } };
            }
            if (modo === 'v0') {
                if (!fin(vf) || !fin(a) || !fin(t)) return { error: 'Para v₀ ingresa v, a y t.' };
                return { vals: { modo, vf: String(vf), acel: String(a), tiempo: String(t) } };
            }
            if (modo === 'a') {
                if (!fin(vf) || !fin(v0) || !nz(t)) return { error: 'Para a ingresa v, v₀ y t (t ≠ 0).' };
                return { vals: { modo, vf: String(vf), v0: String(v0), tiempo: String(t) } };
            }
            if (modo === 't') {
                if (!fin(vf) || !fin(v0) || !nz(a)) return { error: 'Para t ingresa v, v₀ y a (a ≠ 0).' };
                return { vals: { modo, vf: String(vf), v0: String(v0), acel: String(a) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'v') {
                const v0 = parseFloat(v.v0), a = parseFloat(v.acel), t = parseFloat(v.tiempo);
                const vf = v0 + a * t;
                return {
                    valor: vf.toFixed(4), unidad: 'm/s',
                    pasos: [
                        `v = v₀ + a·t = ${v0} + (${a})·(${t})`,
                        `v = ${vf.toFixed(4)} m/s`,
                        `≈ ${(vf * 3.6).toFixed(4)} km/h`
                    ]
                };
            }
            if (modo === 'v0') {
                const vf = parseFloat(v.vf), a = parseFloat(v.acel), t = parseFloat(v.tiempo);
                const v0 = vf - a * t;
                return { valor: v0.toFixed(4), unidad: 'm/s', pasos: [`v₀ = v − a·t = ${v0.toFixed(4)} m/s`] };
            }
            if (modo === 'a') {
                const vf = parseFloat(v.vf), v0 = parseFloat(v.v0), t = parseFloat(v.tiempo);
                const a = (vf - v0) / t;
                return { valor: a.toFixed(4), unidad: 'm/s²', pasos: [`a = (v − v₀) / t = ${a.toFixed(4)} m/s²`] };
            }
            if (modo === 't') {
                const vf = parseFloat(v.vf), v0 = parseFloat(v.v0), a = parseFloat(v.acel);
                const t = (vf - v0) / a;
                return { valor: t.toFixed(4), unidad: 's', pasos: [`t = (v − v₀) / a = ${t.toFixed(4)} s`] };
            }
            return { error: 'Modo no válido.' };
        }
    },
    mrua_x: {
        titulo: 'MRUA — Desplazamiento',
        formula: 'Δx = v₀·t + ½·a·t²',
        desc: 'Elige la incógnita. Si despejas t con a ≠ 0, se usa la raíz no negativa más pequeña cuando hay dos.',
        campos: [
            opsSelectModo([
                { value: 'dx', label: 'Desplazamiento Δx' },
                { value: 'v0', label: 'Velocidad inicial v₀' },
                { value: 'a', label: 'Aceleración a' },
                { value: 't', label: 'Tiempo t' }
            ]),
            { id: 'dx', label: 'Desplazamiento (Δx)', unit: 'm', hint: 'Vacío si calculas Δx' },
            { id: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', hint: 'Vacío si calculas v₀' },
            { id: 'acel', label: 'Aceleración (a)', unit: 'm/s²', hint: 'Vacío si calculas a' },
            { id: 'tiempo', label: 'Tiempo (t)', unit: 's', hint: 'Vacío si calculas t' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'dx';
            const dx = opsParseField('dx'), v0 = opsParseField('v0'), a = opsParseField('acel'), t = opsParseField('tiempo');
            const nz = (x) => Number.isFinite(x) && x !== 0;
            const fin = (x) => Number.isFinite(x);
            if (modo === 'dx') {
                if (!fin(v0) || !fin(a) || !fin(t)) return { error: 'Para Δx ingresa v₀, a y t.' };
                return { vals: { modo, v0: String(v0), acel: String(a), tiempo: String(t) } };
            }
            if (modo === 'v0') {
                if (!fin(dx) || !fin(a) || !nz(t)) return { error: 'Para v₀ ingresa Δx, a y t (t ≠ 0).' };
                return { vals: { modo, dx: String(dx), acel: String(a), tiempo: String(t) } };
            }
            if (modo === 'a') {
                if (!fin(dx) || !fin(v0) || !nz(t)) return { error: 'Para a ingresa Δx, v₀ y t (t ≠ 0).' };
                return { vals: { modo, dx: String(dx), v0: String(v0), tiempo: String(t) } };
            }
            if (modo === 't') {
                if (!fin(dx) || !fin(v0) || !fin(a)) return { error: 'Para t ingresa Δx, v₀ y a.' };
                if (Math.abs(a) < 1e-12 && Math.abs(v0) < 1e-12) return { error: 'Con a = 0 y v₀ = 0 no hay tiempo único.' };
                if (Math.abs(a) < 1e-12 && Math.abs(v0) >= 1e-12) {
                    const tLin = dx / v0;
                    if (!Number.isFinite(tLin) || tLin < 0) return { error: 'No hay t ≥ 0 con MRU (a = 0) para esos datos.' };
                    return { vals: { modo, dx: String(dx), v0: String(v0), acel: '0' } };
                }
                const D = v0 * v0 + 2 * a * dx;
                if (D < -1e-9) return { error: 'Discriminante v₀² + 2a·Δx < 0: no hay tiempo real.' };
                const sD = Math.sqrt(Math.max(0, D));
                const t1 = (-v0 + sD) / a, t2 = (-v0 - sD) / a;
                const cand = [t1, t2].filter(x => Number.isFinite(x) && x >= -1e-9);
                if (!cand.length) return { error: 'No hay solución con t ≥ 0.' };
                const tPick = Math.min(...cand.map(x => Math.max(0, x)));
                return { vals: { modo, dx: String(dx), v0: String(v0), acel: String(a), tiempo: String(tPick) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'dx') {
                const v0 = parseFloat(v.v0), a = parseFloat(v.acel), t = parseFloat(v.tiempo);
                const dx = v0 * t + 0.5 * a * t * t;
                return {
                    valor: dx.toFixed(4), unidad: 'm',
                    pasos: [
                        `Δx = v₀·t + ½·a·t²`,
                        `Δx = ${v0}·${t} + ½·${a}·${t}² = ${dx.toFixed(4)} m`
                    ]
                };
            }
            if (modo === 'v0') {
                const dx = parseFloat(v.dx), a = parseFloat(v.acel), t = parseFloat(v.tiempo);
                const v0 = (dx - 0.5 * a * t * t) / t;
                return { valor: v0.toFixed(4), unidad: 'm/s', pasos: [`v₀ = (Δx − ½at²) / t = ${v0.toFixed(4)} m/s`] };
            }
            if (modo === 'a') {
                const dx = parseFloat(v.dx), v0 = parseFloat(v.v0), t = parseFloat(v.tiempo);
                const a = 2 * (dx - v0 * t) / (t * t);
                return { valor: a.toFixed(4), unidad: 'm/s²', pasos: [`a = 2(Δx − v₀t) / t² = ${a.toFixed(4)} m/s²`] };
            }
            if (modo === 't') {
                const dx = parseFloat(v.dx), v0 = parseFloat(v.v0), a = parseFloat(v.acel);
                if (Math.abs(a) < 1e-12) {
                    const t = dx / v0;
                    return { valor: t.toFixed(4), unidad: 's', pasos: [`MRU: t = Δx / v₀ = ${t.toFixed(4)} s`] };
                }
                const tSol = parseFloat(v.tiempo);
                return {
                    valor: tSol.toFixed(4), unidad: 's',
                    pasos: [
                        `Ecuación ½a·t² + v₀·t − Δx = 0`,
                        `Discriminante = v₀² + 2a·Δx`,
                        `Se toma la solución t ≥ 0 más pequeña: t = ${tSol.toFixed(4)} s`
                    ]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    tiempo_caida: {
        titulo: 'Caída libre — Tiempo / altura',
        formula: 't = √(2h / g)  |  h = ½ g t²',
        desc: 'Desde reposo, sin aire. g = 9.81 m/s². Elige t o h.',
        campos: [
            opsSelectModo([
                { value: 't', label: 'Tiempo t' },
                { value: 'h', label: 'Altura h' }
            ]),
            { id: 'altura', label: 'Altura (h)', unit: 'm', hint: 'Vacío si calculas h' },
            { id: 'tiempo', label: 'Tiempo (t)', unit: 's', hint: 'Vacío si calculas t' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 't';
            const h = opsParseField('altura'), t = opsParseField('tiempo');
            const pos = (x) => Number.isFinite(x) && x > 0;
            const g = 9.81;
            if (modo === 't') {
                if (!pos(h)) return { error: 'Para t ingresa h > 0. Deja t vacío.' };
                return { vals: { modo, altura: String(h) } };
            }
            if (modo === 'h') {
                if (!pos(t)) return { error: 'Para h ingresa t > 0. Deja h vacío.' };
                return { vals: { modo, tiempo: String(t) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const g = 9.81;
            if (v.modo === 't') {
                const h = parseFloat(v.altura);
                const t = Math.sqrt(2 * h / g);
                return {
                    valor: t.toFixed(4), unidad: 's',
                    pasos: [
                        `t = √(2h/g) = √(2·${h}/9.81)`,
                        `t = ${t.toFixed(4)} s`
                    ]
                };
            }
            if (v.modo === 'h') {
                const t = parseFloat(v.tiempo);
                const h = 0.5 * g * t * t;
                return {
                    valor: h.toFixed(4), unidad: 'm',
                    pasos: [
                        `Desde reposo: h = ½ g t²`,
                        `h = ½ · 9.81 · ${t}² = ${h.toFixed(4)} m`
                    ]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    newton: {
        titulo: 'Segunda ley de Newton',
        formula: 'F = m · a',
        desc: 'Elige qué calcular. Para m, F y a deben tener el mismo signo y a ≠ 0.',
        campos: [
            opsSelectModo([
                { value: 'F', label: 'Fuerza F' },
                { value: 'm', label: 'Masa m' },
                { value: 'a', label: 'Aceleración a' }
            ]),
            { id: 'masa', label: 'Masa (m)', unit: 'kg', hint: 'Vacío si calculas m' },
            { id: 'acel', label: 'Aceleración (a)', unit: 'm/s²', hint: 'Vacío si calculas a' },
            { id: 'fuerza', label: 'Fuerza (F)', unit: 'N', hint: 'Vacío si calculas F' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'F';
            const m = opsParseField('masa'), a = opsParseField('acel'), F = opsParseField('fuerza');
            const nz = (x) => Number.isFinite(x) && x !== 0;
            const fin = (x) => Number.isFinite(x);
            if (modo === 'F') {
                if (!fin(m) || !fin(a)) return { error: 'Para F ingresa m y a.' };
                return { vals: { modo, masa: String(m), acel: String(a) } };
            }
            if (modo === 'm') {
                if (!fin(F) || !nz(a)) return { error: 'Para m ingresa F y a (a ≠ 0). F y a deben tener el mismo signo.' };
                if (F * a <= 0) return { error: 'm = F/a debe ser positiva: F y a deben tener el mismo signo.' };
                return { vals: { modo, fuerza: String(F), acel: String(a) } };
            }
            if (modo === 'a') {
                if (!fin(F) || !nz(m)) return { error: 'Para a ingresa F y m (m ≠ 0).' };
                return { vals: { modo, fuerza: String(F), masa: String(m) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'F') {
                const m = parseFloat(v.masa), a = parseFloat(v.acel);
                const F = m * a;
                return {
                    valor: F.toFixed(4), unidad: 'N',
                    pasos: [`F = m · a = ${m} · ${a} = ${F.toFixed(4)} N`]
                };
            }
            if (modo === 'm') {
                const F = parseFloat(v.fuerza), a = parseFloat(v.acel);
                const m = F / a;
                return { valor: m.toFixed(4), unidad: 'kg', pasos: [`m = F / a = ${m.toFixed(4)} kg`] };
            }
            if (modo === 'a') {
                const F = parseFloat(v.fuerza), m = parseFloat(v.masa);
                const a = F / m;
                return { valor: a.toFixed(4), unidad: 'm/s²', pasos: [`a = F / m = ${a.toFixed(4)} m/s²`] };
            }
            return { error: 'Modo no válido.' };
        }
    },
    fuerza_peso: {
        titulo: 'Peso (fuerza gravitatoria)',
        formula: 'W = m · g',
        desc: 'g = 9.81 m/s². Elige W o m.',
        campos: [
            opsSelectModo([
                { value: 'W', label: 'Peso W' },
                { value: 'm', label: 'Masa m' }
            ]),
            { id: 'masa', label: 'Masa (m)', unit: 'kg', hint: 'Vacío si calculas m' },
            { id: 'peso', label: 'Peso (W)', unit: 'N', hint: 'Vacío si calculas W' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'W';
            const m = opsParseField('masa'), W = opsParseField('peso');
            const pos = (x) => Number.isFinite(x) && x > 0;
            const g = 9.81;
            if (modo === 'W') {
                if (!pos(m)) return { error: 'Para W ingresa m > 0. Deja W vacío.' };
                return { vals: { modo, masa: String(m) } };
            }
            if (modo === 'm') {
                if (!pos(W)) return { error: 'Para m ingresa W > 0. Deja m vacío.' };
                return { vals: { modo, peso: String(W) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const g = 9.81;
            if (v.modo === 'W') {
                const m = parseFloat(v.masa);
                const W = m * g;
                return { valor: W.toFixed(4), unidad: 'N', pasos: [`W = m · g = ${m} · 9.81 = ${W.toFixed(4)} N`] };
            }
            if (v.modo === 'm') {
                const W = parseFloat(v.peso);
                const m = W / g;
                return { valor: m.toFixed(4), unidad: 'kg', pasos: [`m = W / g = ${m.toFixed(4)} kg`] };
            }
            return { error: 'Modo no válido.' };
        }
    },
    onda_vlf: {
        titulo: 'Onda — Velocidad de propagación',
        formula: 'v = λ · f',
        desc: 'Elige v, λ o f (valores positivos cuando apliquen).',
        campos: [
            opsSelectModo([
                { value: 'v', label: 'Velocidad v' },
                { value: 'lambda', label: 'Longitud de onda λ' },
                { value: 'f', label: 'Frecuencia f' }
            ]),
            { id: 'lambda', label: 'Longitud de onda (λ)', unit: 'm', hint: 'Vacío si calculas λ' },
            { id: 'freq', label: 'Frecuencia (f)', unit: 'Hz', hint: 'Vacío si calculas f' },
            { id: 'vel', label: 'Velocidad (v)', unit: 'm/s', hint: 'Vacío si calculas v' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'v';
            const lam = opsParseField('lambda'), f = opsParseField('freq'), v = opsParseField('vel');
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (modo === 'v') {
                if (!pos(lam) || !pos(f)) return { error: 'Para v ingresa λ y f (positivas). Deja v vacío.' };
                return { vals: { modo, lambda: String(lam), freq: String(f) } };
            }
            if (modo === 'lambda') {
                if (!pos(v) || !pos(f)) return { error: 'Para λ ingresa v y f (positivas). Deja λ vacío.' };
                return { vals: { modo, vel: String(v), freq: String(f) } };
            }
            if (modo === 'f') {
                if (!pos(v) || !pos(lam)) return { error: 'Para f ingresa v y λ (positivas). Deja f vacío.' };
                return { vals: { modo, vel: String(v), lambda: String(lam) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'v') {
                const lam = parseFloat(v.lambda), f = parseFloat(v.freq);
                const vel = lam * f;
                return {
                    valor: vel.toFixed(4), unidad: 'm/s',
                    pasos: [
                        `v = λ · f = ${lam} · ${f}`,
                        `v = ${vel.toFixed(4)} m/s`,
                        `T = 1/f = ${(1 / f).toFixed(6)} s`
                    ]
                };
            }
            if (modo === 'lambda') {
                const vel = parseFloat(v.vel), f = parseFloat(v.freq);
                const lam = vel / f;
                return { valor: lam.toFixed(6), unidad: 'm', pasos: [`λ = v / f = ${lam.toFixed(6)} m`] };
            }
            if (modo === 'f') {
                const vel = parseFloat(v.vel), lam = parseFloat(v.lambda);
                const f = vel / lam;
                return { valor: f.toFixed(6), unidad: 'Hz', pasos: [`f = v / λ = ${f.toFixed(6)} Hz`] };
            }
            return { error: 'Modo no válido.' };
        }
    },
    periodo_f: {
        titulo: 'Período y frecuencia angular',
        formula: 'T = 1 / f ,  ω = 2πf = 2π / T',
        desc: 'Elige f, T o ω. Para obtener f puedes dar T o ω (deja f vacío).',
        campos: [
            opsSelectModo([
                { value: 'f', label: 'Frecuencia f' },
                { value: 'T', label: 'Período T' },
                { value: 'omega', label: 'Pulsación ω' }
            ]),
            { id: 'freq', label: 'Frecuencia (f)', unit: 'Hz', hint: 'Vacío si calculas f' },
            { id: 'period', label: 'Período (T)', unit: 's', hint: 'Vacío si calculas T' },
            { id: 'omega', label: 'ω', unit: 'rad/s', hint: 'Vacío si calculas ω' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'f';
            const f = opsParseField('freq'), T = opsParseField('period'), om = opsParseField('omega');
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (modo === 'f') {
                if (Number.isFinite(f)) return { error: 'Para f deja el campo f vacío e ingresa T o ω (> 0).' };
                if (pos(T)) return { vals: { modo, sub: 'T', period: String(T) } };
                if (pos(om)) return { vals: { modo, sub: 'omega', omega: String(om) } };
                return { error: 'Ingresa T > 0 o ω > 0.' };
            }
            if (modo === 'T') {
                if (!pos(f)) return { error: 'Para T ingresa f > 0. Deja T vacío.' };
                return { vals: { modo, freq: String(f) } };
            }
            if (modo === 'omega') {
                if (pos(f)) return { vals: { modo, sub: 'f', freq: String(f) } };
                if (pos(T)) return { vals: { modo, sub: 'T', period: String(T) } };
                return { error: 'Para ω ingresa f > 0 o T > 0. Deja ω vacío.' };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'f') {
                if (v.sub === 'T') {
                    const T = parseFloat(v.period);
                    const f = 1 / T;
                    const omega = 2 * Math.PI * f;
                    return {
                        valor: f.toFixed(6), unidad: 'Hz',
                        pasos: [
                            `f = 1/T = 1/${T} = ${f.toFixed(6)} Hz`,
                            `ω = 2πf = ${omega.toFixed(4)} rad/s`
                        ]
                    };
                }
                const om = parseFloat(v.omega);
                const f = om / (2 * Math.PI);
                const T = 1 / f;
                return {
                    valor: f.toFixed(6), unidad: 'Hz',
                    pasos: [
                        `f = ω / (2π) = ${f.toFixed(6)} Hz`,
                        `T = 1/f = ${T.toFixed(6)} s`
                    ]
                };
            }
            if (modo === 'T') {
                const f = parseFloat(v.freq);
                const T = 1 / f;
                const omega = 2 * Math.PI * f;
                return {
                    valor: T.toFixed(6), unidad: 's',
                    pasos: [
                        `T = 1/f = ${T.toFixed(6)} s`,
                        `ω = 2πf = ${omega.toFixed(4)} rad/s`
                    ]
                };
            }
            if (modo === 'omega') {
                if (v.sub === 'f') {
                    const f = parseFloat(v.freq);
                    const omega = 2 * Math.PI * f;
                    return {
                        valor: omega.toFixed(4), unidad: 'rad/s',
                        pasos: [`ω = 2πf = ${omega.toFixed(4)} rad/s`, `T = 1/f = ${(1 / f).toFixed(6)} s`]
                    };
                }
                const T = parseFloat(v.period);
                const omega = 2 * Math.PI / T;
                const f = 1 / T;
                return {
                    valor: omega.toFixed(4), unidad: 'rad/s',
                    pasos: [`ω = 2π/T = ${omega.toFixed(4)} rad/s`, `f = 1/T = ${f.toFixed(6)} Hz`]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    ohm: {
        titulo: 'Ley de Ohm',
        formula: 'V = I · R',
        desc: 'Elige V, I o R (valores positivos).',
        campos: [
            opsSelectModo([
                { value: 'V', label: 'Voltaje V' },
                { value: 'I', label: 'Intensidad I' },
                { value: 'R', label: 'Resistencia R' }
            ]),
            { id: 'volt', label: 'Voltaje (V)', unit: 'V', hint: 'Vacío si calculas V' },
            { id: 'intens', label: 'Intensidad (I)', unit: 'A', hint: 'Vacío si calculas I' },
            { id: 'resist', label: 'Resistencia (R)', unit: 'Ω', hint: 'Vacío si calculas R' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'V';
            const V = opsParseField('volt'), I = opsParseField('intens'), R = opsParseField('resist');
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (modo === 'V') {
                if (!pos(I) || !pos(R)) return { error: 'Para V ingresa I y R (positivas). Deja V vacío.' };
                return { vals: { modo, intens: String(I), resist: String(R) } };
            }
            if (modo === 'I') {
                if (!pos(V) || !pos(R)) return { error: 'Para I ingresa V y R (positivas). Deja I vacío.' };
                return { vals: { modo, volt: String(V), resist: String(R) } };
            }
            if (modo === 'R') {
                if (!pos(V) || !pos(I)) return { error: 'Para R ingresa V e I (positivas). Deja R vacío.' };
                return { vals: { modo, volt: String(V), intens: String(I) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'V') {
                const I = parseFloat(v.intens), R = parseFloat(v.resist);
                const V = I * R;
                return { valor: V.toFixed(4), unidad: 'V', pasos: [`V = I · R = ${V.toFixed(4)} V`] };
            }
            if (modo === 'I') {
                const V = parseFloat(v.volt), R = parseFloat(v.resist);
                const I = V / R;
                return { valor: I.toFixed(4), unidad: 'A', pasos: [`I = V / R = ${I.toFixed(4)} A`] };
            }
            if (modo === 'R') {
                const V = parseFloat(v.volt), I = parseFloat(v.intens);
                const R = V / I;
                return { valor: R.toFixed(4), unidad: 'Ω', pasos: [`R = V / I = ${R.toFixed(4)} Ω`] };
            }
            return { error: 'Modo no válido.' };
        }
    },
    potencia_elec: {
        titulo: 'Potencia eléctrica',
        formula: 'P = V · I',
        desc: 'Elige P, V o I (valores positivos).',
        campos: [
            opsSelectModo([
                { value: 'P', label: 'Potencia P' },
                { value: 'V', label: 'Voltaje V' },
                { value: 'I', label: 'Intensidad I' }
            ]),
            { id: 'pot', label: 'Potencia (P)', unit: 'W', hint: 'Vacío si calculas P' },
            { id: 'volt', label: 'Voltaje (V)', unit: 'V', hint: 'Vacío si calculas V' },
            { id: 'intens', label: 'Intensidad (I)', unit: 'A', hint: 'Vacío si calculas I' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'P';
            const P = opsParseField('pot'), V = opsParseField('volt'), I = opsParseField('intens');
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (modo === 'P') {
                if (!pos(V) || !pos(I)) return { error: 'Para P ingresa V e I (positivas). Deja P vacío.' };
                return { vals: { modo, volt: String(V), intens: String(I) } };
            }
            if (modo === 'V') {
                if (!pos(P) || !pos(I)) return { error: 'Para V ingresa P e I (positivas). Deja V vacío.' };
                return { vals: { modo, pot: String(P), intens: String(I) } };
            }
            if (modo === 'I') {
                if (!pos(P) || !pos(V)) return { error: 'Para I ingresa P y V (positivas). Deja I vacío.' };
                return { vals: { modo, pot: String(P), volt: String(V) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'P') {
                const V = parseFloat(v.volt), I = parseFloat(v.intens);
                const P = V * I;
                return {
                    valor: P.toFixed(4), unidad: 'W',
                    pasos: [`P = V · I = ${P.toFixed(4)} W`, `≈ ${(P / 1000).toFixed(6)} kW`]
                };
            }
            if (modo === 'V') {
                const P = parseFloat(v.pot), I = parseFloat(v.intens);
                const V = P / I;
                return { valor: V.toFixed(4), unidad: 'V', pasos: [`V = P / I = ${V.toFixed(4)} V`] };
            }
            if (modo === 'I') {
                const P = parseFloat(v.pot), V = parseFloat(v.volt);
                const I = P / V;
                return { valor: I.toFixed(4), unidad: 'A', pasos: [`I = P / V = ${I.toFixed(4)} A`] };
            }
            return { error: 'Modo no válido.' };
        }
    },
    delta_ec: {
        titulo: 'Teorema trabajo–energía (ΔEc)',
        formula: 'W = ½m(v² − v₀²)',
        desc: 'Elige la incógnita. Para m hace falta v² ≠ v₀²; para v o v₀ se usa la raíz positiva.',
        campos: [
            opsSelectModo([
                { value: 'W', label: 'Trabajo W' },
                { value: 'm', label: 'Masa m' },
                { value: 'v', label: 'Velocidad final v' },
                { value: 'v0', label: 'Velocidad inicial v₀' }
            ]),
            { id: 'masa', label: 'Masa (m)', unit: 'kg', hint: 'Vacío si calculas m' },
            { id: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', hint: 'Vacío si calculas v₀' },
            { id: 'v', label: 'Velocidad final (v)', unit: 'm/s', hint: 'Vacío si calculas v' },
            { id: 'trabw', label: 'Trabajo (W)', unit: 'J', hint: 'Vacío si calculas W' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'W';
            const m = opsParseField('masa'), v0 = opsParseField('v0'), vf = opsParseField('v'), W = opsParseField('trabw');
            const fin = (x) => Number.isFinite(x);
            const pos = (x) => Number.isFinite(x) && x > 0;
            if (modo === 'W') {
                if (!pos(m) || !fin(v0) || !fin(vf)) return { error: 'Para W ingresa m > 0 y v₀ y v.' };
                return { vals: { modo, masa: String(m), v0: String(v0), v: String(vf) } };
            }
            if (modo === 'm') {
                if (!fin(W) || !fin(v0) || !fin(vf)) return { error: 'Para m ingresa W, v₀ y v.' };
                if (Math.abs(vf * vf - v0 * v0) < 1e-12) return { error: 'v² − v₀² no puede ser 0 para despejar m.' };
                return { vals: { modo, trabw: String(W), v0: String(v0), v: String(vf) } };
            }
            if (modo === 'v') {
                if (!pos(m) || !fin(v0) || !fin(W)) return { error: 'Para v ingresa m > 0, v₀ y W. Deja v vacío.' };
                const inside = v0 * v0 + 2 * W / m;
                if (inside < -1e-9) return { error: 'v₀² + 2W/m debe ser ≥ 0.' };
                return { vals: { modo, masa: String(m), v0: String(v0), trabw: String(W) } };
            }
            if (modo === 'v0') {
                if (!pos(m) || !fin(vf) || !fin(W)) return { error: 'Para v₀ ingresa m > 0, v y W. Deja v₀ vacío.' };
                const inside = vf * vf - 2 * W / m;
                if (inside < -1e-9) return { error: 'v² − 2W/m debe ser ≥ 0.' };
                return { vals: { modo, masa: String(m), v: String(vf), trabw: String(W) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'W') {
                const m = parseFloat(v.masa), v0 = parseFloat(v.v0), vf = parseFloat(v.v);
                const W = 0.5 * m * (vf * vf - v0 * v0);
                return {
                    valor: W.toFixed(4), unidad: 'J',
                    pasos: [
                        `W = ½m(v² − v₀²)`,
                        `W = ½ · ${m} · (${vf}² − ${v0}²) = ${W.toFixed(4)} J`
                    ]
                };
            }
            if (modo === 'm') {
                const W = parseFloat(v.trabw), v0 = parseFloat(v.v0), vf = parseFloat(v.v);
                const m = 2 * W / (vf * vf - v0 * v0);
                return { valor: m.toFixed(4), unidad: 'kg', pasos: [`m = 2W / (v² − v₀²) = ${m.toFixed(4)} kg`] };
            }
            if (modo === 'v') {
                const m = parseFloat(v.masa), v0 = parseFloat(v.v0), W = parseFloat(v.trabw);
                const vf = Math.sqrt(Math.max(0, v0 * v0 + 2 * W / m));
                return { valor: vf.toFixed(4), unidad: 'm/s', pasos: [`v = √(v₀² + 2W/m) = ${vf.toFixed(4)} m/s`] };
            }
            if (modo === 'v0') {
                const m = parseFloat(v.masa), vf = parseFloat(v.v), W = parseFloat(v.trabw);
                const v0 = Math.sqrt(Math.max(0, vf * vf - 2 * W / m));
                return { valor: v0.toFixed(4), unidad: 'm/s', pasos: [`v₀ = √(v² − 2W/m) = ${v0.toFixed(4)} m/s`] };
            }
            return { error: 'Modo no válido.' };
        }
    },
    em_total: {
        titulo: 'Energía mecánica total',
        formula: 'Em = ½mv² + mgh',
        desc: 'g = 9.81 m/s². Elige la incógnita (m > 0 cuando aplique; Em ≥ Ec + Ep físicamente al despejar v o h).',
        campos: [
            opsSelectModo([
                { value: 'Em', label: 'Energía mecánica Em' },
                { value: 'm', label: 'Masa m' },
                { value: 'v', label: 'Rapidez v' },
                { value: 'h', label: 'Altura h' }
            ]),
            { id: 'masa', label: 'Masa (m)', unit: 'kg', hint: 'Vacío si calculas m' },
            { id: 'vel', label: 'Rapidez (v)', unit: 'm/s', hint: 'Vacío si calculas v' },
            { id: 'altura', label: 'Altura (h)', unit: 'm', hint: 'Vacío si calculas h' },
            { id: 'em', label: 'Em', unit: 'J', hint: 'Vacío si calculas Em' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'Em';
            const m = opsParseField('masa'), vel = opsParseField('vel'), h = opsParseField('altura'), Em = opsParseField('em');
            const pos = (x) => Number.isFinite(x) && x > 0;
            const fin = (x) => Number.isFinite(x);
            const g = 9.81;
            if (modo === 'Em') {
                if (!pos(m) || !fin(vel) || !fin(h)) return { error: 'Para Em ingresa m > 0, v y h.' };
                return { vals: { modo, masa: String(m), vel: String(vel), altura: String(h) } };
            }
            if (modo === 'm') {
                if (!fin(Em) || !fin(vel) || !fin(h)) return { error: 'Para m ingresa Em, v y h.' };
                const den = 0.5 * vel * vel + g * h;
                if (Math.abs(den) < 1e-12) return { error: '½v² + gh no puede ser 0.' };
                return { vals: { modo, em: String(Em), vel: String(vel), altura: String(h) } };
            }
            if (modo === 'v') {
                if (!pos(m) || !fin(Em) || !fin(h)) return { error: 'Para v ingresa m > 0, Em y h. Deja v vacío.' };
                const inside = 2 * (Em - m * g * h) / m;
                if (inside < -1e-9) return { error: 'Se requiere Em ≥ mgh para una rapidez real.' };
                return { vals: { modo, em: String(Em), masa: String(m), altura: String(h) } };
            }
            if (modo === 'h') {
                if (!pos(m) || !fin(Em) || !fin(vel)) return { error: 'Para h ingresa m > 0, Em y v. Deja h vacío.' };
                const inside = Em - 0.5 * m * vel * vel;
                if (inside < -1e-9) return { error: 'Se requiere Em ≥ ½mv².' };
                return { vals: { modo, em: String(Em), masa: String(m), vel: String(vel) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const g = 9.81;
            const modo = v.modo;
            if (modo === 'Em') {
                const m = parseFloat(v.masa), vel = parseFloat(v.vel), h = parseFloat(v.altura);
                const Ec = 0.5 * m * vel * vel, Ep = m * g * h, Em = Ec + Ep;
                return {
                    valor: Em.toFixed(4), unidad: 'J',
                    pasos: [
                        `Ec = ½mv² = ${Ec.toFixed(4)} J`,
                        `Ep = mgh = ${Ep.toFixed(4)} J`,
                        `Em = ${Em.toFixed(4)} J`
                    ]
                };
            }
            if (modo === 'm') {
                const Em = parseFloat(v.em), vel = parseFloat(v.vel), h = parseFloat(v.altura);
                const m = Em / (0.5 * vel * vel + g * h);
                return { valor: m.toFixed(4), unidad: 'kg', pasos: [`m = Em / (½v² + gh) = ${m.toFixed(4)} kg`] };
            }
            if (modo === 'v') {
                const Em = parseFloat(v.em), m = parseFloat(v.masa), h = parseFloat(v.altura);
                const vel = Math.sqrt(Math.max(0, 2 * (Em - m * g * h) / m));
                return { valor: vel.toFixed(4), unidad: 'm/s', pasos: [`v = √(2(Em − mgh)/m) = ${vel.toFixed(4)} m/s`] };
            }
            if (modo === 'h') {
                const Em = parseFloat(v.em), m = parseFloat(v.masa), vel = parseFloat(v.vel);
                const h = (Em - 0.5 * m * vel * vel) / (m * g);
                return { valor: h.toFixed(4), unidad: 'm', pasos: [`h = (Em − ½mv²)/(mg) = ${h.toFixed(4)} m`] };
            }
            return { error: 'Modo no válido.' };
        }
    },
    fuerza_centripeta: {
        titulo: 'Fuerza centrípeta',
        formula: 'Fc = m · v² / r',
        desc: 'Elige la incógnita (m, v, r > 0 cuando corresponda; Fc ≠ 0 al despejar r).',
        campos: [
            opsSelectModo([
                { value: 'Fc', label: 'Fuerza Fc' },
                { value: 'm', label: 'Masa m' },
                { value: 'v', label: 'Rapidez v' },
                { value: 'r', label: 'Radio r' }
            ]),
            { id: 'masa', label: 'Masa (m)', unit: 'kg', hint: 'Vacío si calculas m' },
            { id: 'vel', label: 'Rapidez (v)', unit: 'm/s', hint: 'Vacío si calculas v' },
            { id: 'radio', label: 'Radio (r)', unit: 'm', hint: 'Vacío si calculas r' },
            { id: 'fc', label: 'Fc', unit: 'N', hint: 'Vacío si calculas Fc' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'Fc';
            const m = opsParseField('masa'), vel = opsParseField('vel'), r = opsParseField('radio'), Fc = opsParseField('fc');
            const pos = (x) => Number.isFinite(x) && x > 0;
            const nz = (x) => Number.isFinite(x) && x !== 0;
            const fin = (x) => Number.isFinite(x);
            if (modo === 'Fc') {
                if (!pos(m) || !pos(vel) || !pos(r)) return { error: 'Para Fc ingresa m, v y r (positivos). Deja Fc vacío.' };
                return { vals: { modo, masa: String(m), vel: String(vel), radio: String(r) } };
            }
            if (modo === 'm') {
                if (!fin(Fc) || !pos(vel) || !pos(r)) return { error: 'Para m ingresa Fc, v y r (v,r > 0). Deja m vacío.' };
                return { vals: { modo, fc: String(Fc), vel: String(vel), radio: String(r) } };
            }
            if (modo === 'v') {
                if (!fin(Fc) || !pos(m) || !pos(r)) return { error: 'Para v ingresa Fc, m y r (m,r > 0). Deja v vacío.' };
                const inside = Fc * r / m;
                if (inside < -1e-9) return { error: 'Fc·r/m debe ser ≥ 0.' };
                return { vals: { modo, fc: String(Fc), masa: String(m), radio: String(r) } };
            }
            if (modo === 'r') {
                if (!fin(Fc) || !pos(m) || !pos(vel) || !nz(Fc)) return { error: 'Para r ingresa Fc (≠ 0), m y v (m,v > 0). Deja r vacío.' };
                return { vals: { modo, fc: String(Fc), masa: String(m), vel: String(vel) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const modo = v.modo;
            if (modo === 'Fc') {
                const m = parseFloat(v.masa), vel = parseFloat(v.vel), r = parseFloat(v.radio);
                const Fc = m * vel * vel / r;
                return { valor: Fc.toFixed(4), unidad: 'N', pasos: [`Fc = mv²/r = ${Fc.toFixed(4)} N`] };
            }
            if (modo === 'm') {
                const Fc = parseFloat(v.fc), vel = parseFloat(v.vel), r = parseFloat(v.radio);
                const m = Fc * r / (vel * vel);
                return { valor: m.toFixed(4), unidad: 'kg', pasos: [`m = Fc·r/v² = ${m.toFixed(4)} kg`] };
            }
            if (modo === 'v') {
                const Fc = parseFloat(v.fc), m = parseFloat(v.masa), r = parseFloat(v.radio);
                const vel = Math.sqrt(Math.max(0, Fc * r / m));
                return { valor: vel.toFixed(4), unidad: 'm/s', pasos: [`v = √(Fc·r/m) = ${vel.toFixed(4)} m/s`] };
            }
            if (modo === 'r') {
                const Fc = parseFloat(v.fc), m = parseFloat(v.masa), vel = parseFloat(v.vel);
                const r = m * vel * vel / Fc;
                return { valor: r.toFixed(4), unidad: 'm', pasos: [`r = mv²/Fc = ${r.toFixed(4)} m`] };
            }
            return { error: 'Modo no válido.' };
        }
    },

    // ===== FÓRMULAS DE CLASE =====
    gasto_diametro: {
        titulo: 'Gasto con Diámetro (Q = A·v, A = πD²/4)',
        formula: 'Q = (π · D² / 4) · v',
        desc: 'Calcula el gasto a partir del diámetro del ducto y la velocidad del fluido.',
        campos: [
            opsSelectModo([
                { value: 'Q', label: 'Gasto Q' },
                { value: 'D', label: 'Diámetro D' },
                { value: 'v', label: 'Velocidad v' }
            ]),
            { id: 'diam', label: 'Diámetro (D)', unit: 'm', hint: 'ej. 0.16 (16 cm)' },
            { id: 'vel', label: 'Velocidad del fluido (v)', unit: 'm/s', hint: 'ej. 1.4' },
            { id: 'gasto', label: 'Gasto (Q)', unit: 'm³/s', hint: 'Vacío si calculas Q' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'Q';
            const D = opsParseField('diam'), v = opsParseField('vel'), Q = opsParseField('gasto');
            const pos = x => Number.isFinite(x) && x > 0;
            if (modo === 'Q') {
                if (!pos(D) || !pos(v)) return { error: 'Ingresa Diámetro y Velocidad (positivos). Deja Q vacío.' };
                return { vals: { modo, diam: String(D), vel: String(v) } };
            }
            if (modo === 'D') {
                if (!pos(Q) || !pos(v)) return { error: 'Ingresa Q y Velocidad para calcular D.' };
                return { vals: { modo, gasto: String(Q), vel: String(v) } };
            }
            if (modo === 'v') {
                if (!pos(Q) || !pos(D)) return { error: 'Ingresa Q y Diámetro para calcular v.' };
                return { vals: { modo, gasto: String(Q), diam: String(D) } };
            }
            return { error: 'Modo no válido.' };
        },
        calcular(v) {
            const pi = Math.PI;
            if (v.modo === 'Q') {
                const D = parseFloat(v.diam), vel = parseFloat(v.vel);
                const A = pi * D * D / 4;
                const Q = A * vel;
                return {
                    valor: Q.toFixed(6), unidad: 'm³/s',
                    pasos: [
                        `Paso 1 — Área: A = π · D² / 4 = π · ${D}² / 4`,
                        `A = π · ${(D*D).toFixed(6)} / 4 = ${A.toFixed(6)} m²`,
                        `Paso 2 — Gasto: Q = A · v = ${A.toFixed(6)} · ${vel}`,
                        `Q = ${Q.toFixed(6)} m³/s`,
                        `Equivale a ${(Q * 1000).toFixed(4)} L/s`
                    ]
                };
            }
            if (v.modo === 'D') {
                const Q = parseFloat(v.gasto), vel = parseFloat(v.vel);
                const A = Q / vel;
                const D = Math.sqrt(4 * A / pi);
                return {
                    valor: D.toFixed(6), unidad: 'm',
                    pasos: [
                        `Despeje: A = Q / v = ${Q} / ${vel} = ${A.toFixed(6)} m²`,
                        `D = √(4A / π) = √(4 · ${A.toFixed(6)} / π)`,
                        `D = ${D.toFixed(6)} m = ${(D * 100).toFixed(4)} cm`
                    ]
                };
            }
            if (v.modo === 'v') {
                const Q = parseFloat(v.gasto), D = parseFloat(v.diam);
                const A = pi * D * D / 4;
                const vel = Q / A;
                return {
                    valor: vel.toFixed(6), unidad: 'm/s',
                    pasos: [
                        `Área: A = π · D² / 4 = ${A.toFixed(6)} m²`,
                        `v = Q / A = ${Q} / ${A.toFixed(6)}`,
                        `v = ${vel.toFixed(6)} m/s`
                    ]
                };
            }
            return { error: 'Modo no válido.' };
        }
    },
    gasto_vt: {
        titulo: 'Gasto Volumétrico (G = V / t)',
        formula: 'G = V / t',
        desc: 'Calcula el gasto como volumen entre tiempo. Despeja G, V o t.',
        campos: [
            opsSelectModo([
                { value: 'G', label: 'Gasto G' },
                { value: 'V', label: 'Volumen V' },
                { value: 't', label: 'Tiempo t' }
            ]),
            { id: 'vol', label: 'Volumen (V)', unit: 'm³', hint: 'Vacío si calculas V' },
            { id: 'tiem', label: 'Tiempo (t)', unit: 's', hint: 'Vacío si calculas t' },
            { id: 'gasto', label: 'Gasto (G)', unit: 'm³/s', hint: 'Vacío si calculas G' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'G';
            const V = opsParseField('vol'), t = opsParseField('tiem'), G = opsParseField('gasto');
            const pos = x => Number.isFinite(x) && x > 0;
            if (modo === 'G' && (!pos(V) || !pos(t))) return { error: 'Ingresa V y t para calcular G.' };
            if (modo === 'V' && (!pos(G) || !pos(t))) return { error: 'Ingresa G y t para calcular V.' };
            if (modo === 't' && (!pos(G) || !pos(V))) return { error: 'Ingresa G y V para calcular t.' };
            return { vals: { modo, vol: String(V), tiem: String(t), gasto: String(G) } };
        },
        calcular(v) {
            if (v.modo === 'G') {
                const V = parseFloat(v.vol), t = parseFloat(v.tiem);
                const G = V / t;
                return { valor: G.toFixed(6), unidad: 'm³/s', pasos: [`G = V / t = ${V} / ${t} = ${G.toFixed(6)} m³/s`, `Equivale a ${(G*1000).toFixed(4)} L/s`] };
            }
            if (v.modo === 'V') {
                const G = parseFloat(v.gasto), t = parseFloat(v.tiem);
                const V = G * t;
                return { valor: V.toFixed(6), unidad: 'm³', pasos: [`V = G · t = ${G} · ${t} = ${V.toFixed(6)} m³`] };
            }
            const G = parseFloat(v.gasto), V = parseFloat(v.vol);
            const t = V / G;
            return { valor: t.toFixed(4), unidad: 's', pasos: [`t = V / G = ${V} / ${G} = ${t.toFixed(4)} s`] };
        }
    },
    densidad: {
        titulo: 'Densidad (ρ = m / V)',
        formula: 'ρ = m / V',
        desc: 'Despeja densidad, masa o volumen.',
        campos: [
            opsSelectModo([
                { value: 'rho', label: 'Densidad ρ' },
                { value: 'm', label: 'Masa m' },
                { value: 'V', label: 'Volumen V' }
            ]),
            { id: 'masa', label: 'Masa (m)', unit: 'kg', hint: 'Vacío si calculas m' },
            { id: 'vol', label: 'Volumen (V)', unit: 'm³', hint: 'Vacío si calculas V' },
            { id: 'dens', label: 'Densidad (ρ)', unit: 'kg/m³', hint: 'Vacío si calculas ρ' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'rho';
            const m = opsParseField('masa'), V = opsParseField('vol'), r = opsParseField('dens');
            const pos = x => Number.isFinite(x) && x > 0;
            if (modo === 'rho' && (!pos(m) || !pos(V))) return { error: 'Ingresa m y V para calcular ρ.' };
            if (modo === 'm' && (!pos(r) || !pos(V))) return { error: 'Ingresa ρ y V para calcular m.' };
            if (modo === 'V' && (!pos(r) || !pos(m))) return { error: 'Ingresa ρ y m para calcular V.' };
            return { vals: { modo, masa: String(m), vol: String(V), dens: String(r) } };
        },
        calcular(v) {
            if (v.modo === 'rho') {
                const m = parseFloat(v.masa), V = parseFloat(v.vol);
                const r = m / V;
                return { valor: r.toFixed(4), unidad: 'kg/m³', pasos: [`ρ = m / V = ${m} / ${V} = ${r.toFixed(4)} kg/m³`] };
            }
            if (v.modo === 'm') {
                const r = parseFloat(v.dens), V = parseFloat(v.vol);
                const m = r * V;
                return { valor: m.toFixed(4), unidad: 'kg', pasos: [`m = ρ · V = ${r} · ${V} = ${m.toFixed(4)} kg`] };
            }
            const r = parseFloat(v.dens), m = parseFloat(v.masa);
            const V = m / r;
            return { valor: V.toFixed(6), unidad: 'm³', pasos: [`V = m / ρ = ${m} / ${r} = ${V.toFixed(6)} m³`] };
        }
    },
    delta_u: {
        titulo: 'Variación de Energía Interna (ΔU = Q − W)',
        formula: 'ΔU = Q − W',
        desc: 'Q positivo = calor que entra al sistema. W positivo = trabajo que realiza el sistema. Unidades: J o cal.',
        campos: [
            opsSelectModo([
                { value: 'dU', label: 'ΔU (energía interna)' },
                { value: 'Q', label: 'Q (calor)' },
                { value: 'W', label: 'W (trabajo)' }
            ]),
            { id: 'calor', label: 'Calor (Q)', unit: 'J', hint: 'Vacío si calculas Q' },
            { id: 'trab', label: 'Trabajo (W)', unit: 'J', hint: 'Vacío si calculas W' },
            { id: 'du', label: 'ΔU', unit: 'J', hint: 'Vacío si calculas ΔU' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'dU';
            const Q = opsParseField('calor'), W = opsParseField('trab'), dU = opsParseField('du');
            const fin = x => Number.isFinite(x);
            if (modo === 'dU' && (!fin(Q) || !fin(W))) return { error: 'Ingresa Q y W para calcular ΔU.' };
            if (modo === 'Q' && (!fin(dU) || !fin(W))) return { error: 'Ingresa ΔU y W para calcular Q.' };
            if (modo === 'W' && (!fin(dU) || !fin(Q))) return { error: 'Ingresa ΔU y Q para calcular W.' };
            return { vals: { modo, calor: String(Q), trab: String(W), du: String(dU) } };
        },
        calcular(v) {
            if (v.modo === 'dU') {
                const Q = parseFloat(v.calor), W = parseFloat(v.trab);
                const dU = Q - W;
                return { valor: dU.toFixed(4), unidad: 'J', pasos: [`ΔU = Q − W = ${Q} − ${W} = ${dU.toFixed(4)} J`, `Si Q > W → el sistema gana energía interna`, `Si Q < W → el sistema pierde energía interna`] };
            }
            if (v.modo === 'Q') {
                const dU = parseFloat(v.du), W = parseFloat(v.trab);
                const Q = dU + W;
                return { valor: Q.toFixed(4), unidad: 'J', pasos: [`Q = ΔU + W = ${dU} + ${W} = ${Q.toFixed(4)} J`] };
            }
            const dU = parseFloat(v.du), Q = parseFloat(v.calor);
            const W = Q - dU;
            return { valor: W.toFixed(4), unidad: 'J', pasos: [`W = Q − ΔU = ${Q} − ${dU} = ${W.toFixed(4)} J`] };
        }
    },
    trabajo_termodinamico: {
        titulo: 'Trabajo Termodinámico (W = P · ΔV)',
        formula: 'W = P · (Vf − Vi)',
        desc: 'Trabajo realizado por un gas a presión constante. P en Pa, volúmenes en m³.',
        campos: [
            opsSelectModo([
                { value: 'W', label: 'Trabajo W' },
                { value: 'P', label: 'Presión P' },
                { value: 'Vf', label: 'Volumen final Vf' }
            ]),
            { id: 'pres', label: 'Presión (P)', unit: 'Pa', hint: 'Vacío si calculas P' },
            { id: 'vi', label: 'Volumen inicial (Vi)', unit: 'm³', hint: 'ej. 0.002' },
            { id: 'vf', label: 'Volumen final (Vf)', unit: 'm³', hint: 'Vacío si calculas Vf' },
            { id: 'trab', label: 'Trabajo (W)', unit: 'J', hint: 'Vacío si calculas W' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'W';
            const P = opsParseField('pres'), Vi = opsParseField('vi'), Vf = opsParseField('vf'), W = opsParseField('trab');
            const pos = x => Number.isFinite(x) && x > 0;
            const fin = x => Number.isFinite(x);
            if (modo === 'W' && (!pos(P) || !fin(Vi) || !fin(Vf))) return { error: 'Ingresa P, Vi y Vf para calcular W.' };
            if (modo === 'P' && (!fin(W) || !fin(Vi) || !fin(Vf) || Vf === Vi)) return { error: 'Ingresa W, Vi y Vf (Vf ≠ Vi) para calcular P.' };
            if (modo === 'Vf' && (!fin(W) || !pos(P) || !fin(Vi))) return { error: 'Ingresa W, P y Vi para calcular Vf.' };
            return { vals: { modo, pres: String(P), vi: String(Vi), vf: String(Vf), trab: String(W) } };
        },
        calcular(v) {
            if (v.modo === 'W') {
                const P = parseFloat(v.pres), Vi = parseFloat(v.vi), Vf = parseFloat(v.vf);
                const W = P * (Vf - Vi);
                return { valor: W.toFixed(4), unidad: 'J', pasos: [`W = P · (Vf − Vi) = ${P} · (${Vf} − ${Vi})`, `W = ${P} · ${(Vf-Vi).toFixed(6)} = ${W.toFixed(4)} J`, W > 0 ? `W > 0: el gas se expande y realiza trabajo sobre el entorno.` : `W < 0: el gas se comprime, el entorno realiza trabajo sobre él.`] };
            }
            if (v.modo === 'P') {
                const W = parseFloat(v.trab), Vi = parseFloat(v.vi), Vf = parseFloat(v.vf);
                const P = W / (Vf - Vi);
                return { valor: P.toFixed(4), unidad: 'Pa', pasos: [`P = W / (Vf − Vi) = ${W} / (${Vf} − ${Vi}) = ${P.toFixed(4)} Pa`] };
            }
            const W = parseFloat(v.trab), P = parseFloat(v.pres), Vi = parseFloat(v.vi);
            const Vf = W / P + Vi;
            return { valor: Vf.toFixed(6), unidad: 'm³', pasos: [`Vf = W/P + Vi = ${W}/${P} + ${Vi} = ${Vf.toFixed(6)} m³`] };
        }
    },
    ec_momento: {
        titulo: 'Energía Cinética con Momento Lineal (Ec = p²/2m)',
        formula: 'Ec = p² / 2m  |  p = m·v',
        desc: 'Despeja Ec, p o m. El momento lineal p = m·v.',
        campos: [
            opsSelectModo([
                { value: 'Ec', label: 'Energía cinética Ec' },
                { value: 'p', label: 'Momento lineal p' },
                { value: 'm', label: 'Masa m' }
            ]),
            { id: 'momento', label: 'Momento lineal (p = m·v)', unit: 'kg·m/s', hint: 'Vacío si calculas p' },
            { id: 'masa', label: 'Masa (m)', unit: 'kg', hint: 'Vacío si calculas m' },
            { id: 'ec', label: 'Energía cinética (Ec)', unit: 'J', hint: 'Vacío si calculas Ec' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'Ec';
            const p = opsParseField('momento'), m = opsParseField('masa'), Ec = opsParseField('ec');
            const pos = x => Number.isFinite(x) && x > 0;
            if (modo === 'Ec' && (!pos(p) || !pos(m))) return { error: 'Ingresa p y m para calcular Ec.' };
            if (modo === 'p' && (!pos(Ec) || !pos(m))) return { error: 'Ingresa Ec y m para calcular p.' };
            if (modo === 'm' && (!pos(Ec) || !pos(p))) return { error: 'Ingresa Ec y p para calcular m.' };
            return { vals: { modo, momento: String(p), masa: String(m), ec: String(Ec) } };
        },
        calcular(v) {
            if (v.modo === 'Ec') {
                const p = parseFloat(v.momento), m = parseFloat(v.masa);
                const Ec = (p * p) / (2 * m);
                return { valor: Ec.toFixed(4), unidad: 'J', pasos: [`Ec = p² / 2m = ${p}² / (2 · ${m})`, `Ec = ${p*p} / ${2*m} = ${Ec.toFixed(4)} J`] };
            }
            if (v.modo === 'p') {
                const Ec = parseFloat(v.ec), m = parseFloat(v.masa);
                const p = Math.sqrt(2 * m * Ec);
                return { valor: p.toFixed(4), unidad: 'kg·m/s', pasos: [`p = √(2·m·Ec) = √(2 · ${m} · ${Ec}) = ${p.toFixed(4)} kg·m/s`] };
            }
            const Ec = parseFloat(v.ec), p = parseFloat(v.momento);
            const m = (p * p) / (2 * Ec);
            return { valor: m.toFixed(4), unidad: 'kg', pasos: [`m = p² / (2·Ec) = ${p*p} / ${2*Ec} = ${m.toFixed(4)} kg`] };
        }
    },
    eficiencia_calores: {
        titulo: 'Eficiencia Térmica por Calores (E = 1 − Q₂/Q₁)',
        formula: 'E = 1 − Q₂ / Q₁',
        desc: 'Q₁ = calor absorbido del foco caliente. Q₂ = calor cedido al foco frío.',
        campos: [
            opsSelectModo([
                { value: 'E', label: 'Eficiencia E' },
                { value: 'Q1', label: 'Calor absorbido Q₁' },
                { value: 'Q2', label: 'Calor cedido Q₂' }
            ]),
            { id: 'q1', label: 'Calor absorbido (Q₁)', unit: 'J', hint: 'Vacío si calculas Q₁' },
            { id: 'q2', label: 'Calor cedido (Q₂)', unit: 'J', hint: 'Vacío si calculas Q₂' },
            { id: 'efic', label: 'Eficiencia E (0 a 1)', unit: '', hint: 'Vacío si calculas E' }
        ],
        validarEntradas() {
            const modo = opsGetModo() || 'E';
            const Q1 = opsParseField('q1'), Q2 = opsParseField('q2'), E = opsParseField('efic');
            const pos = x => Number.isFinite(x) && x > 0;
            if (modo === 'E' && (!pos(Q1) || !pos(Q2))) return { error: 'Ingresa Q₁ y Q₂ para calcular E.' };
            if (modo === 'Q1' && (!pos(Q2) || !Number.isFinite(E) || E <= 0 || E >= 1)) return { error: 'Ingresa Q₂ y E (entre 0 y 1) para calcular Q₁.' };
            if (modo === 'Q2' && (!pos(Q1) || !Number.isFinite(E) || E <= 0 || E >= 1)) return { error: 'Ingresa Q₁ y E (entre 0 y 1) para calcular Q₂.' };
            return { vals: { modo, q1: String(Q1), q2: String(Q2), efic: String(E) } };
        },
        calcular(v) {
            if (v.modo === 'E') {
                const Q1 = parseFloat(v.q1), Q2 = parseFloat(v.q2);
                const E = 1 - Q2 / Q1;
                return { valor: (E * 100).toFixed(2), unidad: '%', pasos: [`E = 1 − Q₂/Q₁ = 1 − ${Q2}/${Q1}`, `E = ${E.toFixed(6)} → ${(E*100).toFixed(2)}%`] };
            }
            if (v.modo === 'Q1') {
                const Q2 = parseFloat(v.q2), E = parseFloat(v.efic);
                const Q1 = Q2 / (1 - E);
                return { valor: Q1.toFixed(4), unidad: 'J', pasos: [`Q₁ = Q₂ / (1 − E) = ${Q2} / (1 − ${E}) = ${Q1.toFixed(4)} J`] };
            }
            const Q1 = parseFloat(v.q1), E = parseFloat(v.efic);
            const Q2 = Q1 * (1 - E);
            return { valor: Q2.toFixed(4), unidad: 'J', pasos: [`Q₂ = Q₁ · (1 − E) = ${Q1} · (1 − ${E}) = ${Q2.toFixed(4)} J`] };
        }
    }
};

/** Resultado Operaciones: enteros sin decimales; decimales sin ceros finales innecesarios */
function fmtOpsNum(n) {
    if (typeof n !== 'number' || !Number.isFinite(n)) return String(n);
    const r = Math.round(n);
    if (Math.abs(n - r) < 1e-9 * Math.max(1, Math.abs(n))) return String(r);
    return n.toFixed(12).replace(/\.?0+$/, '').replace(/^-0$/, '0');
}

let opsActual = 'ec';

function selOps(btn, tema) {
    document.querySelectorAll('.ops-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    opsActual = tema;
    renderOpsForm();
    document.getElementById('ops-resultado').classList.add('hidden');
}

function renderOpsForm() {
    const t = opsTemas[opsActual];
    let html = `<div class="ops-header">
        <div class="ops-titulo">${t.titulo}</div>
        <div class="ops-formula">${t.formula}</div>
        <div class="ops-desc">${t.desc}</div>
    </div>
    <div class="ops-campos">`;
    t.campos.forEach(c => {
        html += `<div class="ops-campo">
            <label class="ops-label">${c.label}</label>
            <div class="ops-input-wrap">`;
        if (c.type === 'select' && c.opciones) {
            html += `<select class="conv-select ops-field-select" id="ops-field-${c.id}">`;
            c.opciones.forEach(o => {
                html += `<option value="${o.value}">${o.label}</option>`;
            });
            html += `</select>`;
            if (c.unit) html += `<span class="ops-unit">${c.unit}</span>`;
        } else {
            html += `<input type="number" class="conv-input" id="ops-field-${c.id}" placeholder="${c.hint || ''}" step="any">`;
            html += `<span class="ops-unit">${c.unit}</span>`;
        }
        html += `
            </div>
        </div>`;
    });
    html += `</div>`;
    document.getElementById('ops-content').innerHTML = html;
}

function calcularOps() {
    const t = opsTemas[opsActual];
    let vals;

    if (typeof t.validarEntradas === 'function') {
        const vr = t.validarEntradas();
        if (vr.error) {
            mostrarOpsError(vr.error);
            return;
        }
        vals = vr.vals;
    } else {
        vals = {};
        for (const c of t.campos) {
            const el = document.getElementById(`ops-field-${c.id}`);
            if (c.type === 'select') {
                if (!el) {
                    mostrarOpsError('Falta un campo del formulario.');
                    return;
                }
                vals[c.id] = el.value;
                continue;
            }
            if (!el || el.value === '' || isNaN(parseFloat(el.value))) {
                mostrarOpsError(`Ingresa un valor válido en "${c.label}".`);
                return;
            }
            vals[c.id] = el.value;
        }
    }

    const res = t.calcular(vals);
    if (res.error) { mostrarOpsError(res.error); return; }

    const parsedValor = parseFloat(String(res.valor).replace(',', '.'));
    const valorMostrar = Number.isFinite(parsedValor) ? fmtOpsNum(parsedValor) : res.valor;

    let html = `<div class="ops-res-valor">Resultado: <strong>${valorMostrar} ${res.unidad}</strong></div>
        <div class="ops-pasos-titulo">📋 Procedimiento paso a paso:</div>
        <ol class="ops-pasos">`;
    res.pasos.forEach(p => { html += `<li>${p}</li>`; });
    html += `</ol>`;

    const div = document.getElementById('ops-resultado');
    div.innerHTML = html;
    div.classList.remove('hidden', 'ops-error');
}

function mostrarOpsError(msg) {
    const div = document.getElementById('ops-resultado');
    div.innerHTML = `⚠️ ${msg}`;
    div.classList.remove('hidden');
    div.classList.add('ops-error');
}

document.addEventListener('DOMContentLoaded', renderOpsForm);

// =====================================================
// ============== CONVERSIONES DE UNIDADES =============
// =====================================================

function fmtConv(n) {
    if (n === null || isNaN(n)) return '—';
    if (Math.abs(n) >= 1e6 || (Math.abs(n) < 1e-4 && n !== 0)) return n.toExponential(6);
    return parseFloat(n.toPrecision(8)).toString();
}

function convRow(label, val, unit) {
    return `<div class="conv-row"><span class="conv-row-label">${label}</span><span class="conv-row-val">${fmtConv(val)} <small>${unit}</small></span></div>`;
}

function convertirTemp() {
    const raw = parseFloat(document.getElementById('conv-temp-val').value);
    const from = document.getElementById('conv-temp-from').value;
    const out = document.getElementById('conv-temp-out');
    if (isNaN(raw)) { out.innerHTML = ''; return; }
    let C;
    if (from === 'C') C = raw;
    else if (from === 'K') C = raw - 273.15;
    else if (from === 'F') C = (raw - 32) * 5/9;
    else if (from === 'R') C = (raw - 491.67) * 5/9;
    const K = C + 273.15, F = C * 9/5 + 32, R = (C + 273.15) * 9/5;
    out.innerHTML = convRow('Celsius','°', '') + 
        [['°Celsius', C, '°C'], ['Kelvin', K, 'K'], ['Fahrenheit', F, '°F'], ['Rankine', R, '°R']]
        .filter(r => r[0] !== ({C:'°Celsius',K:'Kelvin',F:'Fahrenheit',R:'Rankine'}[from]))
        .map(r => convRow(r[0], r[1], r[2])).join('');
    out.innerHTML = [['°Celsius', C, '°C'], ['Kelvin', K, 'K'], ['Fahrenheit', F, '°F'], ['Rankine', R, '°R']]
        .map(r => convRow(r[0], r[1], r[2])).join('');
}

function convertirEnergia() {
    const raw = parseFloat(document.getElementById('conv-en-val').value);
    const from = document.getElementById('conv-en-from').value;
    const out = document.getElementById('conv-en-out');
    if (isNaN(raw)) { out.innerHTML = ''; return; }
    const toJ = { J:1, cal:4.184, kcal:4184, kJ:1000, eV:1.602176634e-19, BTU:1055.06, kWh:3600000 };
    const J = raw * toJ[from];
    const units = [['Joules',J,'J'],['Calorías',J/4.184,'cal'],['Kilocalorías',J/4184,'kcal'],
        ['Kilojoules',J/1000,'kJ'],['Electronvoltios',J/1.602176634e-19,'eV'],['BTU',J/1055.06,'BTU'],['kWh',J/3600000,'kWh']];
    out.innerHTML = units.map(r => convRow(r[0],r[1],r[2])).join('');
}

function convertirPresion() {
    const raw = parseFloat(document.getElementById('conv-pres-val').value);
    const from = document.getElementById('conv-pres-from').value;
    const out = document.getElementById('conv-pres-out');
    if (isNaN(raw)) { out.innerHTML = ''; return; }
    const toPa = { Pa:1, kPa:1000, atm:101325, bar:100000, mmHg:133.322, psi:6894.76 };
    const Pa = raw * toPa[from];
    const units = [['Pascales',Pa,'Pa'],['Kilopascales',Pa/1000,'kPa'],['Atmósferas',Pa/101325,'atm'],
        ['Bar',Pa/100000,'bar'],['mmHg / Torr',Pa/133.322,'mmHg'],['PSI',Pa/6894.76,'psi']];
    out.innerHTML = units.map(r => convRow(r[0],r[1],r[2])).join('');
}

function convertirMasa() {
    const raw = parseFloat(document.getElementById('conv-masa-val').value);
    const from = document.getElementById('conv-masa-from').value;
    const out = document.getElementById('conv-masa-out');
    if (isNaN(raw)) { out.innerHTML = ''; return; }
    const toKg = { kg:1, g:0.001, mg:1e-6, lb:0.453592, oz:0.0283495, ton:1000, u:1.66053906660e-27 };
    const kg = raw * toKg[from];
    const units = [['Kilogramos',kg,'kg'],['Gramos',kg*1000,'g'],['Miligramos',kg*1e6,'mg'],
        ['Libras',kg/0.453592,'lb'],['Onzas',kg/0.0283495,'oz'],['Toneladas métricas',kg/1000,'t'],
        ['Unidades atómicas (u)',kg/1.66053906660e-27,'u']];
    out.innerHTML = units.map(r => convRow(r[0],r[1],r[2])).join('');
}

function convertirLongitud() {
    const raw = parseFloat(document.getElementById('conv-long-val').value);
    const from = document.getElementById('conv-long-from').value;
    const out = document.getElementById('conv-long-out');
    if (isNaN(raw)) { out.innerHTML = ''; return; }
    const toM = { m:1, km:1000, cm:0.01, mm:0.001, mi:1609.344, ft:0.3048, in:0.0254, nm:1e-9, 'Å':1e-10 };
    const m = raw * toM[from];
    const units = [['Metros',m,'m'],['Kilómetros',m/1000,'km'],['Centímetros',m*100,'cm'],
        ['Milímetros',m*1000,'mm'],['Millas',m/1609.344,'mi'],['Pies',m/0.3048,'ft'],
        ['Pulgadas',m/0.0254,'in'],['Nanómetros',m/1e-9,'nm'],['Ångström',m/1e-10,'Å']];
    out.innerHTML = units.map(r => convRow(r[0],r[1],r[2])).join('');
}

function convertirTiempo() {
    const raw = parseFloat(document.getElementById('conv-tiempo-val').value);
    const from = document.getElementById('conv-tiempo-from').value;
    const out = document.getElementById('conv-tiempo-out');
    if (isNaN(raw)) { out.innerHTML = ''; return; }
    const toS = { s:1, ms:0.001, min:60, h:3600, d:86400 };
    const s = raw * toS[from];
    const units = [['Segundos',s,'s'],['Milisegundos',s*1000,'ms'],['Minutos',s/60,'min'],['Horas',s/3600,'h'],['Días',s/86400,'d']];
    out.innerHTML = units.map(r => convRow(r[0],r[1],r[2])).join('');
}

function convertirVelocidad() {
    const raw = parseFloat(document.getElementById('conv-vel-val').value);
    const from = document.getElementById('conv-vel-from').value;
    const out = document.getElementById('conv-vel-out');
    if (isNaN(raw)) { out.innerHTML = ''; return; }
    const toMs = { ms:1, kmh:1/3.6, mph:0.44704, kn:0.514444, fts:0.3048 };
    const ms = raw * toMs[from];
    const units = [['m/s',ms,'m/s'],['km/h',ms*3.6,'km/h'],['mph',ms/0.44704,'mph'],['Nudos',ms/0.514444,'kn'],['ft/s',ms/0.3048,'ft/s']];
    out.innerHTML = units.map(r => convRow(r[0],r[1],r[2])).join('');
}

function convertirPotencia() {
    const raw = parseFloat(document.getElementById('conv-pot-val').value);
    const from = document.getElementById('conv-pot-from').value;
    const out = document.getElementById('conv-pot-out');
    if (isNaN(raw)) { out.innerHTML = ''; return; }
    const toW = { W:1, kW:1000, hp:745.699872, kcals:4184 };
    const W = raw * toW[from];
    const units = [['Watts',W,'W'],['Kilowatts',W/1000,'kW'],['Caballos de fuerza (hp)',W/745.699872,'hp'],['kcal/s',W/4184,'kcal/s']];
    out.innerHTML = units.map(r => convRow(r[0],r[1],r[2])).join('');
}

function convertirVolumen() {
    const raw = parseFloat(document.getElementById('conv-vol-val').value);
    const from = document.getElementById('conv-vol-from').value;
    const out = document.getElementById('conv-vol-out');
    if (isNaN(raw)) { out.innerHTML = ''; return; }
    const toL = { L:1, mL:0.001, m3:1000, cm3:0.001, gal:3.785411784, fl_oz:0.0295735 };
    const L = raw * toL[from];
    const units = [['Litros',L,'L'],['Mililitros',L*1000,'mL'],['Metros cúbicos',L/1000,'m³'],
        ['Centímetros cúbicos',L*1000,'cm³'],['Galones (US)',L/3.785411784,'gal'],['Onzas líquidas',L/0.0295735,'fl oz']];
    out.innerHTML = units.map(r => convRow(r[0],r[1],r[2])).join('');
}
