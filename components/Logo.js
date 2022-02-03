import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/outline';

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center space-x-1 text-blue-300">
        <GlobeAltIcon className="h-6 w-6 flex-shrink-0" />
        <span className="font-bold text-lg tracking-tight whitespace-nowrap logoHidden">
          Logistics US
        </span>
      </a>
    </Link>
  )
}

export default Logo;