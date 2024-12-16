import { Link, useLocation } from 'react-router-dom';

export default function NavLink({ to, children, className = '' }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`${className} ${isActive ? 'bg-secondary text-white' : 'text-dark hover:text-primary'} px-6 py-3 rounded-full transition-colors`}
    >
      {children}
    </Link>
  );
}