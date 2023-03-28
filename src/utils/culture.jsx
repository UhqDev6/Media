const culture = [
  {
    id: 'culture-1',
    title: 'Kerja Tim',
    description: 'Perusahaan yang memiliki budaya kerja tim biasanya mendorong kolaborasi dan saling mendukung antar karyawan. Karyawan diharapkan untuk bekerja sama untuk mencapai tujuan bersama dan membantu satu sama lain dalam mengatasi hambatan.',
    priority: true,
  },
  {
    id: 'culture-2',
    title: 'Inovasi',
    description: 'Perusahaan dengan budaya inovasi biasanya mendorong karyawan untuk berpikir kreatif dan mengusulkan ide-ide baru untuk meningkatkan produk atau layanan perusahaan.',
    priority: true,
  },
  {
    id: 'culture-3',
    title: 'Penghargaan',
    description: 'Perusahaan dengan budaya penghargaan biasanya memberikan pengakuan dan hadiah kepada karyawan yang melakukan pekerjaan dengan baik atau mencapai target yang telah ditetapkan.',
    priority: false,
  },
  {
    id: 'culture-4',
    title: 'pembelajaran',
    description: 'Perusahaan dengan budaya pembelajaran biasanya mendorong karyawan untuk terus belajar dan mengembangkan keterampilan mereka. Perusahaan memberikan dukungan dan sumber daya untuk karyawan yang ingin mengikuti pelatihan atau kursus untuk meningkatkan keterampilan mereka.',
    priority: true,
  },
  {
    id: 'culture-5',
    title: 'Kolaborasi',
    description: 'Perusahaan dengan budaya kolaborasi biasanya memfasilitasi dan mendorong kerjasama dan pertukaran ide antara tim dan departemen yang berbeda.Budaya keberagaman',
    priority: false,
  },
];

const getCulture = () => culture;

export {
  getCulture,
};
