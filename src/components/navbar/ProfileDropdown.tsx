import { CreditCard, LogOut, User, Users } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function ProfileDropdown({ onLogout }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar className='w-9 h-9'>
					<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56 lg:mr-12 md:mr-12 sm:mr-6 xs:mr-8'>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem onClick={() => {window.location.href = "/client/profile"}}>
						<User className='mr-2 h-4 w-4' />
						<span>Profile</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem  onClick={() => {window.location.href = "/dashboard"}}>
						<Users className='mr-2 h-4 w-4' />
						<span>My Lessor Dashboard</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={onLogout}>
					<LogOut className='mr-2 h-4 w-4' />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
