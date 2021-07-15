import Image from 'next/image';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
 } from '@heroicons/react/solid'
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/client';



const Header = () => {
    const [session] = useSession();
    // console.log([session])


    return (
        <div className="flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md">
            {/* left */}
                <div className="flex items-center">
                    <Image 
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40} 
                    layout="fixed"
                    />

                    <div className="flex ml-2 items-center rounded-full bg-gray-100">
                        <SearchIcon className="h-6 text-gray-600 hidden md:inline-flex" />
                        <input type="text" placeholder="Search Facebook" className="ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink hidden md:inline-flex" />
                    </div>
                </div>
            {/* center */}
                <div className="flex justify-center flex-grow">
                    <div className="flex space-x-2 md:space-x-2">
                        <HeaderIcon Icon={HomeIcon} active />
                        <HeaderIcon Icon={FlagIcon} />
                        <HeaderIcon Icon={PlayIcon} />
                        <HeaderIcon Icon={ShoppingCartIcon} />
                        <HeaderIcon Icon={UserGroupIcon} />
                    </div>
                </div>
            {/* right */}
                <div className="flex items-center sm:space-x-2 justify-end">
                        <Image 
                            onClick={() => signOut()}
                            className="rounded-full cursor-pointer"
                            src={session.user.image}
                            width={40}
                            height="40"
                            layout="fixed"
                        />


                        <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">
                            {session.user.name}
                        </p>
                        <ViewGridIcon className="icon" />
                        <ChatIcon className="icon" />
                        <BellIcon className="icon" />
                        <ChevronDownIcon className="icon" />
                </div>
        </div>
    )
}

export default Header
