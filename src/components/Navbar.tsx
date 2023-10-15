'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import SocialButton from './SocialButton';
import { useEffect, useState } from 'react';

function NavItem({ children }: { children: React.ReactNode }) {
	return (
		<li className='flex rounded-md hover:bg-white/10 transition-colors'>
			{children}
		</li>
	);
}

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setIsScrolled(window.scrollY > 1);
		});
	});
	return (
		<header
			className={`p-4 sticky top-0 backdrop-blur-md z-50 ${
				isScrolled ? 'border-b border-zinc-800 shadow-lg' : ''
			}`}
		>
			<div className='max-w-screen-xl mx-auto flex justify-between items-center'>
				<div>
					<h2 className='text-2xl font-bold'>
						Tyler <span className='hidden sm:inline'>Gennaro</span>
					</h2>
				</div>
				<div>
					<ul className='flex gap-4'>
						<NavItem>
							<SocialButton
								Icon={Mail}
								link='mailto:tylergennaro10@gmail.com'
							/>
						</NavItem>
						<NavItem>
							<SocialButton Icon={Github} link='https://github.com/TGennnaro' />
						</NavItem>
						<NavItem>
							<SocialButton
								Icon={Linkedin}
								link='https://www.linkedin.com/in/tyler-gennaro/'
							/>
						</NavItem>
					</ul>
				</div>
			</div>
		</header>
	);
}
