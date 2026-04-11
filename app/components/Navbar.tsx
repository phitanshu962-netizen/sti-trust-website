import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'COURSES', href: '/courses' },
    { name: 'TERMS & CONDITIONS', href: '/terms-and-conditions' },
    { name: 'RESULTS', href: '/results' },
    { name: 'ATC LOGIN', href: '/atc-login' },
    { name: 'PARTNERS', href: '/partners' },
    { name: 'CONTACT US', href: '/contact-us' },
    { name: 'LOGIN', href: '/admin-login'}
  ];
  
  return (
    <nav className="w-full mt-2 font-serif uppercase tracking-tight shadow-md">
      <div className="bg-[#2b4c9b] text-white flex flex-wrap">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="px-5 py-3 md:py-4 xl:px-6 hover:bg-[#3d63bd] hover:text-yellow-300 font-bold text-[13px] sm:text-sm lg:text-[15px] border-r border-[#1a3375] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
