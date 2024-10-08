import { LayoutDashboard, LogOut, User } from 'lucide-react';
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
import { IconExchange } from '@tabler/icons-react';

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
					<DropdownMenuItem
						onClick={() => {
							window.location.href = '/client/profile';
						}}
					>
						<User className='mr-2 h-4 w-4' />
						<span>Profile</span>
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => {
							window.location.href = '/client/transaction_history';
						}}
					>
						<IconExchange className='mr-2 h-4 w-4' />
						<span>Transaction History</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem
						onClick={() => {
							window.location.href = '/dashboard';
						}}
					>
						<LayoutDashboard className='mr-2 h-4 w-4' />
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
