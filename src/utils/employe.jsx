import picture1 from '@/assets/image/employee1.jpg';
import picture2 from '@/assets/image/employee2.jpg';
import picture3 from '@/assets/image/employee3.jpg';
import picture4 from '@/assets/image/employee4.jpg';

const employee = [
  {
    id: 'employee-1',
    name: 'Muh Syawal',
    picture: picture1,
    comment: 'Saya bekerja sebagai Laravel developer di sebuah agensi digital selama 2 tahun terakhir. Saya merasa senang bisa berkontribusi pada proyek-proyek yang bermanfaat bagi klien kami',
    position: 'Laravel Developer',

  },
  {
    id: 'employee-2',
    name: 'Andi Alfian',
    picture: picture4,
    comment: 'Saya sudah menjadi ReactJS developer selama 3 tahun dan bekerja di sebuah perusahaan pengembangan perangkat lunak. Saya sangat menyukai pekerjaan ini.',
    position: 'Reactjs Developer',
  },
  {
    id: 'employee-3',
    name: 'Ayu Ramadhan',
    picture: picture3,
    comment: 'Sebagai seorang VueJS developer, Saya sangat menikmati pekerjaan saya karena saya bisa terus belajar dan mengeksplorasi kemampuan VueJS.',
    position: 'Vuejs Developer',
  },
  {
    id: 'employee-4',
    name: 'Rifqa Tul',
    picture: picture2,
    comment: 'Saya bekerja sebagai Flutter developer di sebuah perusahaan pengembangan perangkat lunak selama 2 tahun terakhir, saya sangat menyukai pekerjaan ini',
    position: 'QA & Testing Engineer',
  },
];

const getEmployee = () => employee;

export {
  getEmployee,
};
