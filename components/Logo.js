import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/outline';

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center space-x-1 text-blue-300">
        <GlobeAltIcon className="w-8 h-8 flex-shrink-0" />
        <span className="font-bold text-lg tracking-tight whitespace-nowrap">
          Global Logistics US
        </span>
      </a>
    </Link>
  )
}

export default Logo;