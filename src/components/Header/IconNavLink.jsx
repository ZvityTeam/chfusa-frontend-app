import { Link, useLocation } from 'react-router-dom';
export default function IconNavLink({ to, icon: Icon }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`${isActive ? 'text-secondary' : 'text-secondary'} hover:text-secondary transition-colors`}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}