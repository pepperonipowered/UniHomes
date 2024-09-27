import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '../ui/button';

export function NavbarModalLogin({
	isOpen,
	onClose,
	openModal,
	onLoginSuccess,
}) {
	const handleSubmit = () => {
		onLoginSuccess();
	};
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='max-w-[425px] bg-white text-black rounded-[20px]'>
				<DialogHeader>
					<DialogTitle className='text-2xl'>Login</DialogTitle>
					<DialogDescription>
						Please enter your login credentials.
					</DialogDescription>
				</DialogHeader>

				<div className='text-black'>
					<Label htmlFor='login-email' className='font-semibold'>
						Email
					</Label>
					<Input
						id='login-email'
						placeholder='you@example.com'
						className='border-gray-400'
					/>
				</div>

				<div className='text-black'>
					<Label htmlFor='login-password' className='font-semibold'>
						Password
					</Label>
					<Input
						id='login-password'
						type='password'
						className='border-gray-400'
					/>
				</div>

				<DialogFooter>
					<div className='w-full'>
						<Button
							type='submit'
							className='w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800'
							onClick={handleSubmit}
						>
							Login
						</Button>
						<div className='mt-4 text-center text-black'>
							<p>
								Don&apos;t have an account?{' '}
								<a
									href='#'
									className='text-blue-500 hover:underline'
									onClick={() => {
										onClose();
										openModal('register');
									}}
								>
									Register
								</a>
							</p>
						</div>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
