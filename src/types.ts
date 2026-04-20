export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'Science' | 'Arts' | 'Commerce' | 'Languages';
  image: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
}

export interface AdmissionStep {
  id: number;
  title: string;
  description: string;
}
