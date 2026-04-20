import { motion, AnimatePresence } from 'motion/react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation 
} from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Search,
  School,
  ArrowRight,
  ClipboardCheck,
  Award,
  BookMarked,
  Lightbulb,
  Menu,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Course, FacultyMember, AdmissionStep } from './types';
import { courses, faculty, admissionSteps } from './data';

// --- Helper: Scroll to top on route change ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Component: Navbar (Updated with Mobile Menu) -----
const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Notice', path: '/notice' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="bg-white py-4 md:py-5 sticky top-0 z-[100] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center gap-3 relative z-[110]">
          <img src="/pyramid.png" alt="Logo" className="h-16 md:h-20 w-auto" />
          <span className="font-serif text-xl md:text-2xl font-bold text-secondary leading-tight">
            HIMALAYAN<br/><span className="text-primary">PYRAMID</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 font-bold text-[13px] uppercase tracking-wider">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`${isActive(item.path) ? 'text-primary' : 'text-secondary/80 hover:text-primary'} transition-all`}
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-primary text-white px-8 py-3 rounded text-sm font-bold hover:shadow-lg transition-all uppercase tracking-widest">
            Join Us
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden p-2 text-secondary relative z-[110]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-[100] md:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-8 text-center">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-2xl font-serif font-bold ${isActive(item.path) ? 'text-primary' : 'text-secondary'}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg">
                  Join Us Now
                </button>
              </div>
              <div className="flex justify-center gap-6 pt-8 text-slate-400">
                <Mail size={20} />
                <Phone size={20} />
                <MapPin size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Section: Hero ---
const Hero = () => {
  return (
    <section className="relative py-12 md:py-24 flex items-center justify-center bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-primary font-bold text-sm tracking-widest uppercase mb-4">
            Welcome to Himalayan Pyramid
          </span>
          <h1 className="text-4xl md:text-6xl text-secondary font-serif mb-6 leading-tight font-bold">
            Cultivating Minds, <br className="hidden md:block"/><span className="text-primary">Shaping Futures.</span>
          </h1>
          <p className="text-slate-600 text-lg mb-10 max-w-lg leading-relaxed">
            A tradition of excellence in education. Join a community dedicated to academic rigor and character development.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-all text-center">
              GET STARTED
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-8 py-3 bg-white text-primary font-bold rounded border-2 border-primary hover:bg-primary/5 transition-all text-center">
              LEARN MORE
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative hidden lg:block"
        >
          <img 
            src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/493087668_1324504639261804_4405438478846138068_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2a1932&_nc_ohc=UjGYrj71v2cQ7kNvwFMMEle&_nc_oc=Adrq9y-V83ov97mjVA7evas1YnYyDLlvl2Gi6eeCOkyl0IUB-OUz1_xGecN2mH5f1C7AJ9yF4E7eNY7ZIRJfE3sg&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=uMyJ8YOAt23hUiCHXfQ1DQ&_nc_ss=7a389&oh=00_Af1gE_SB1YSAjWTR_ZnfJgZaSiz7Rrl1H72iNMw4F1u9tg&oe=69EBD3AF" 
            alt="Campus" 
            className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

// --- Section: About ---
const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl relative z-10 border-8 border-white group-hover:rotate-1 transition-transform duration-700">
              <img 
                src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/644515941_1595834635462135_8297398211471720822_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=qDJ8IRcDJtQQ7kNvwEr9BOU&_nc_oc=AdqnMDFscn6xr1AKjiU1L6KxQ2JfxaBjJGs8rco9N8LD7L43ulCGJ0JVun4-HhbVh0SqiJpntqiuAnMipone4Ngr&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=Ueb-dHjRgn3L5040plPHtg&_nc_ss=7a389&oh=00_Af2H5xv67zmHGJ_fEcJxk8ohzbBoUu7h4iULV3UYJvuPYg&oe=69EBC951" 
                alt="Our History" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-secondary rounded-[40px] -z-10 flex items-center justify-center p-10 text-primary shadow-2xl rotate-3 group-hover:rotate-6 transition-transform duration-700">
              <div className="text-center">
                <p className="text-5xl font-serif font-bold mb-2 drop-shadow-md">100+</p>
                <p className="text-xs font-black uppercase tracking-[0.2em] leading-tight">Years of Academic <br/> Heritage</p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-secondary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl text-primary font-serif mb-8 leading-tight">Empowering Visionaries Since 1924</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Himalayan Pyramid School/College was founded with a singular vision: to create a sanctuary of learning that balances traditional values with future-forward innovation. 
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-primary font-bold text-lg mb-2">Holistic Growth</h4>
                <p className="text-slate-500 text-sm">We believe in nurturing the intellect, character, and emotional well-being of every student.</p>
              </div>
              <div>
                <h4 className="text-primary font-bold text-lg mb-2">Global Perspective</h4>
                <p className="text-slate-500 text-sm">Our curriculum is designed to prepare students for the complexities of a connected global society.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section: Courses ---
const CourseSection = ({ limit }: { limit?: number }) => {
  const displayedCourses = limit ? courses.slice(0, limit) : courses;
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-secondary font-serif font-bold mb-4">Academic Programs</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Explore our range of comprehensive courses designed for modern excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedCourses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white rounded border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{course.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">{course.description}</p>
                <Link to="/contact" className="text-primary font-bold text-xs uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section: Notices ---
const NoticeSection = ({ limit }: { limit?: number }) => {
  const notices = [
    { date: 'Oct 15, 2026', title: 'Annual Cultural Fest "Pyramid Pulse" Scheduled', category: 'Events' },
    { date: 'Oct 12, 2026', title: 'Mid-Term Examination Results Declared', category: 'Academic' },
    { date: 'Oct 08, 2026', title: 'Admissions Open for Spring 2027 Intake', category: 'Admission' },
  ];

  const displayedNotices = limit ? notices.slice(0, limit) : notices;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-secondary font-serif mb-2">Latest News</h2>
            <div className="w-12 h-1 bg-primary mb-4"></div>
            <p className="text-slate-600">Important institutional updates and announcements.</p>
          </div>
          {limit && (
            <Link to="/notice" className="text-primary font-bold text-sm uppercase tracking-widest border-b border-primary hover:text-secondary transition-all pb-1">
              View All
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedNotices.map((notice, i) => (
            <motion.div 
              key={i}
              className="bg-white p-8 rounded border border-slate-200 hover:border-primary transition-all group"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">{notice.category}</span>
              <h4 className="text-lg font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{notice.title}</h4>
              <p className="text-xs text-slate-400 font-bold uppercase">{notice.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section: Faculty ---
const FacultySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-primary font-serif mb-6">Distinguished Faculty</h2>
          <p className="text-slate-600 text-lg">Guided by experts committed to mentoring the next generation of global citizens.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {faculty.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-[40px] overflow-hidden border-4 border-accent shadow-2xl relative z-10">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -inset-4 bg-secondary/10 rounded-[60px] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-1">{member.name}</h3>
              <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-slate-500 leading-relaxed italic max-w-xs mx-auto">"{member.bio}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section: Gallery ---
const GallerySection = () => {
  const images = [
    'https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/671400956_1633257765053155_7286363324186189655_n.jpg?stp=c0.296.1152.1152a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=-yKfiApNBg8Q7kNvwFSAVz5&_nc_oc=Ado-1pl9osLAtencVXAp069bIhcEF4NGjMSCh42FSVRJBHg4D3IdyV2b0u-Bw1kRk_2PBWaOze540aQSBSCeVEYd&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=VXyvnd3so-Vb64FNIXaCAQ&_nc_ss=7a389&oh=00_Af1tXp9e_6QDmGermQwskLbQMPv1NqX2V6I5yrnStrUb_Q&oe=69EBBC86',
    'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/671723865_1633256081719990_3270754024398497737_n.jpg?stp=c449.0.1150.1150a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ssj69b0asWAQ7kNvwGetL8J&_nc_oc=AdqlOFt0k8FoUQ2gAMUa7IUP2YbOAN6EQvFTGKHQzSqwMZs8iHlcqPVe1gVAh3VXs7rcMJD3wmT8pI1aSUs-jhBn&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=YiExUZBRxXWiJM6toKQvpQ&_nc_ss=7a389&oh=00_Af1SRLa6SLQv0jBlDhl0agAvcDlZGqBqDK05pGoFi-4bEQ&oe=69EBD1AA',
    'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/633961140_1582881243424141_3275983014403142096_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=P3nxevPSj-MQ7kNvwEibWZs&_nc_oc=AdqF2IunIcwj41-5dUhY-E9aV7NVJ60Gk-lOFSiLCHrbOXBcAuVa85prk9XLP3CJWnkUHp1INwdrXCyCcgefpS8T&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=h-Aa5KzaDOrON9KQW42_Yw&_nc_ss=7a389&oh=00_Af2PggQYKJJ6Uhhjfk5yFhBA9drASFr37xRuNrM0k0GJkg&oe=69EBDABF',
    'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/518292148_1387762942935973_5671012130452235822_n.jpg?stp=c447.0.1155.1155a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=XDfyXK5mioEQ7kNvwGrB9HX&_nc_oc=AdrRuKceE1BxfUzJmYVKYgHHjUSIBDcOVq2kMsmNPy8YdJlm7IcrS8Cw22VFxMlIEjliWfQ_tqQeqI63XvX9Ywur&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=j-yjFRe7lUZlx3eU0QY0kg&_nc_ss=7a389&oh=00_Af3A0cOWsiKW1-Cgm-tMZZp4CJZrMQusqj-1oZy6fBmb1g&oe=69EBE247',
    'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/497573679_1339553301090271_6468457453632777015_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=6N2Pn2YxtPQQ7kNvwFPr8NM&_nc_oc=AdowLAgNoxuJCAjUUh0SA7IRPuMqeyx9W9L3ResAlRpoINrEvFJ4cvR7hlWDLPcCLe0sX7DrB4CWy0s3uMOzjngY&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=NqYRNxDaJHad3TOm5O8LrA&_nc_ss=7a389&oh=00_Af0Yorb4dO1rTlHgDQMwsbW4ADlwIFnCtOiIrEaLSEbXJQ&oe=69EBC698',
    'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/490449331_1313173373728264_4503359736432250775_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=a934a8&_nc_ohc=3V-VSGR_tp0Q7kNvwF1pYZm&_nc_oc=Ado7WGk3SlSfcL3QKBXPdMZanI0PZOs5TqzNYiig2ddioulY1bk4yjS3lNpR5Q4L22pnj9iaClMUeytmrJOhrvrR&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=fz0V5zASAZOyXlOTexQhZw&_nc_ss=7a389&oh=00_Af0iJO6q4dIeD5UxNttk1en7hLXnkYifIhViE9gDTEK8FQ&oe=69EBD49D',
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl text-primary font-serif mb-6">Campus Life Gallery</h2>
          <p className="text-slate-600">Moments of discovery and achievement at Himalayan Pyramid.</p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Campus Image ${i+1}`} 
                className="w-full h-auto group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <Search className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section: Admissions ---
const AdmissionSection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden text-center text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to Join Us?</h2>
        <p className="text-accent/70 text-lg mb-10">We seek students with curiosity, character, and a commitment to making a difference.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-10 py-4 bg-secondary text-primary font-bold rounded-xl hover:shadow-lg transition-all">Start Application</button>
          <button className="px-10 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">Download Brochure</button>
        </div>
      </div>
    </section>
  );
};

// --- Page Components ---
const HomePage = () => (
  <>
    <Hero />
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-primary font-serif mb-6 underline-offset-8 underline decoration-secondary decoration-4">Welcome to our Campus</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Explore our world-class facilities and academic programs designed to foster growth and innovation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: BookOpen,
              title: 'Modern Library',
              desc: 'State-of-the-art learning commons with digital resources',
              image: 'https://th.bing.com/th/id/OIP.269CobNMH8964aJswoJaLgHaE7?w=348&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
            },
            {
              icon: Users,
              title: 'Collaborative Spaces',
              desc: 'Interactive zones for group study and projects',
              image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500'
            },
            {
              icon: Award,
              title: 'Sports & Wellness',
              desc: 'Olympic-standard athletic and recreation facilities',
              image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=500'
            },
            {
              icon: Lightbulb,
              title: 'Innovation Lab',
              desc: 'Cutting-edge technology and research centers',
              image: 'https://th.bing.com/th/id/OIP.va8ud3LkObYDX5ucqoYW0wHaFX?w=243&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
            }
          ].map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
    <CourseSection limit={4} />
    <NoticeSection limit={2} />
    <AdmissionSection />
  </>
);

const AboutPage = () => (
  <div className="pt-0">
    <AboutSection />
    <FacultySection />
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl text-secondary font-serif font-bold mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: 'Integrity', d: 'Acting with honesty and strong moral principles in all we do.' },
            { t: 'Excellence', d: 'Striving for highest quality in every academic endeavor.' },
            { t: 'Community', d: 'Fostering a supportive and inclusive learning environment.' }
          ].map((v, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-primary mb-4">{v.t}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const NoticePage = () => (
  <div className="pt-10 md:pt-20">
    <NoticeSection />
  </div>
);

const GalleryPage = () => (
  <div className="pt-10 md:pt-20">
    <GallerySection />
  </div>
);

const ContactPage = () => (
  <div className="py-12 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
        <div>
          <h2 className="text-3xl text-secondary font-serif font-bold mb-6">Contact Us</h2>
          <div className="w-16 h-1 bg-primary mb-10"></div>
          <p className="text-slate-600 mb-12 text-lg">Have questions? We're here to help you navigate your educational journey.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-slate-600 font-medium">info@himalayanpyramid.edu</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-slate-600 font-medium">+1 (555) 012-3456</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-slate-600 font-medium">124 Education Row, Valley, NY</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-6 md:p-10 rounded border border-slate-200">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-secondary mb-2 uppercase">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-primary outline-none bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2 uppercase">Email address</label>
              <input type="email" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-primary outline-none bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2 uppercase">Your Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded border border-slate-300 focus:border-primary outline-none bg-white"></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-all uppercase tracking-widest shadow-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- Footer ---
const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/pyramid.png" alt="Himalayan Pyramid Logo" className="h-20 w-auto" />
              <span className="font-serif text-2xl font-bold text-secondary">Himalayan<br/><span className="text-primary">Pyramid</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering students through academic excellence and character building since 1924.
            </p>
          </div>
          
          <div>
            <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-6">Academics</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/courses" className="hover:text-secondary transition-colors">Courses</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">Faculty</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors">Campus life</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-6">Info</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/notice" className="hover:text-secondary transition-colors">Notices</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" /> info@himalayan.edu
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Get the latest institutional updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white p-2 rounded-lg">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          <p>© 2026 Himalayan Pyramid School/College. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white relative">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/courses" element={<CourseSection />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Apply Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50"
        >
          <Link 
            to="/contact" 
            className="flex items-center gap-3 bg-primary text-white font-bold px-6 py-3 md:px-8 md:py-3 rounded shadow-xl hover:shadow-2xl transition-all group"
          >
            <span className="uppercase tracking-[0.1em] text-xs md:text-sm">Join Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </Router>
  );
}
