import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className='sticky top-0 left-0 px-8 py-5 border-b border-primary-900 bg-primary-900'>
      <div className='flex items-center justify-between max-w-full mx-auto'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
