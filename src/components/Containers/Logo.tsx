import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  children?: React.ReactNode;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <Link href="/beranda">
      <Image
            className="mx-auto"
            src="/Logo.png"
            width={193.03}
            height={30.08}
            alt="Logo"
          />
      </Link>
      {children}
    </div>
  );
};

export default Logo;
