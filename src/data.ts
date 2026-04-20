import { Course, FacultyMember, AdmissionStep } from './types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Advanced Biological Sciences',
    description: 'A deep dive into cellular biology, genetics, and ecology designed for aspiring research scientists.',
    duration: '2 Years',
    category: 'Science',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Modern World History & Politics',
    description: 'Exploring the geopolitical shifts of the 20th century and their impact on today’s global stage.',
    duration: '1 Year',
    category: 'Arts',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Digital Business & Innovation',
    description: 'Equipping future entrepreneurs with the tools to navigate the digital economy and startup ecosystem.',
    duration: '2 Years',
    category: 'Commerce',
    image: 'https://tse4.mm.bing.net/th/id/OIP.g-3e8IK8WBGQFpaBvQpf5AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Classical Literature & Philology',
    description: 'An intensive study of Greek and Roman texts, focusing on linguistic evolution and cultural heritage.',
    duration: '3 Years',
    category: 'Languages',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
  },
];

export const faculty: FacultyMember[] = [
  {
    id: '1',
    name: 'Dr. Eleanor Vance',
    role: 'Head of Sciences',
    department: 'Biology',
    bio: 'With over 20 years in research, Dr. Vance brings unprecedented depth to our laboratory programs.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'Prof. Julian Thorne',
    role: 'Senior Lecturer',
    department: 'History',
    bio: 'A celebrated author and historian focusing on the renaissance of digital culture.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    role: 'Director of Commerce',
    department: 'Business',
    bio: 'Former Fortune 500 executive turned educator, passionate about ethical entrepreneurship.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
];

export const admissionSteps: AdmissionStep[] = [
  {
    id: 1,
    title: 'Online Application',
    description: 'Submit your personal details, academic history, and a statement of intent through our secure portal.',
  },
  {
    id: 2,
    title: 'Entrance Evaluation',
    description: 'Participate in a generalized assessment designed to gauge critical thinking and core competencies.',
  },
  {
    id: 3,
    title: 'Personal Interview',
    description: 'A one-on-one session with our department heads to discuss your goals and alignment with our values.',
  },
  {
    id: 4,
    title: 'Enrollment Confirmation',
    description: 'Upon selection, receive your offer letter and complete the final documentation and fee payment.',
  },
];
