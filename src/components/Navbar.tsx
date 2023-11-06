'use client';

import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import SocialButton from './SocialButton';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import { cn } from '@/lib/utils';

function NavItem({
	children,
	className = '',
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<li
			className={cn(
				'flex rounded-md hover:bg-white/10 transition-colors',
				className
			)}
		>
			{children}
		</li>
	);
}

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [navOpen, setNavOpen] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setIsScrolled(window.scrollY > 1);
		});
		window.addEventListener('click', (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			console.log('run');
			if (target.dataset.navToggle !== 'true') {
				setNavOpen(false);
			}
		});
		window.addEventListener('resize', () => {
			if (window.innerWidth > 1024) setNavOpen(false);
		});
	}, []);
	return (
		<header className='sticky top-0 z-50'>
			<div
				className={`p-4 backdrop-blur-md ${
					isScrolled ? 'border-b border-zinc-800 shadow-lg' : ''
				}`}
			>
				<div className='max-w-screen-xl mx-auto flex justify-between items-center'>
					<div>
						<h2 className='text-2xl font-bold'>
							<Link href='#'>
								Tyler <span className='hidden sm:inline'>Gennaro</span>
							</Link>
						</h2>
					</div>
					<ul className='hidden lg:flex gap-8'>
						<li className='text-lg text-foreground-light font-semibold'>
							<Link href='#experience'>Experience</Link>
						</li>
						<li className='text-lg text-foreground-light font-semibold'>
							<Link href='#education'>Education</Link>
						</li>
						<li className='text-lg text-foreground-light font-semibold'>
							<Link href='#skills'>Skills</Link>
						</li>
						<li className='text-lg text-foreground-light font-semibold'>
							<Link href='#projects'>Projects</Link>
						</li>
					</ul>
					<div>
						<ul className='flex gap-1 sm:gap-4'>
							<NavItem>
								<SocialButton
									Icon={Mail}
									link='mailto:tylergennaro10@gmail.com'
								/>
							</NavItem>
							<NavItem>
								<SocialButton
									Icon={Github}
									link='https://github.com/TGennnaro'
								/>
							</NavItem>
							<NavItem>
								<SocialButton
									Icon={Linkedin}
									link='https://www.linkedin.com/in/tyler-gennaro/'
								/>
							</NavItem>
							<button
								className='p-1 px-2 hover:bg-white/10 rounded-lg transition-colors flex items-center cursor-pointer lg:hidden'
								onClick={() => setNavOpen(!navOpen)}
								data-nav-toggle
							>
								<X
									className={`w-8 h-8 pointer-events-none transition-transform ${
										navOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
									}`}
								/>
								<Menu
									className={`absolute w-8 h-8 pointer-events-none transition-transform ${
										navOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
									}`}
								/>
							</button>
						</ul>
					</div>
				</div>
			</div>
			<div
				className={`absolute top-full left-0 w-full p-8 ${
					isScrolled ? 'border-b' : 'border-y'
				} border-zinc-800 backdrop-blur-md z-10 transition-all ${
					navOpen
						? 'opacity-1 translate-y-0'
						: 'opacity-0 -translate-y-4 pointer-events-none'
				}`}
			>
				<ul className='flex flex-col gap-4'>
					<li className='text-xl text-foreground-light font-semibold'>
						<Link href='#experience'>Experience</Link>
					</li>
					<li className='text-xl text-foreground-light font-semibold'>
						<Link href='#education'>Education</Link>
					</li>
					<li className='text-xl text-foreground-light font-semibold'>
						<Link href='#skills'>Skills</Link>
					</li>
					<li className='text-xl text-foreground-light font-semibold'>
						<Link href='#projects'>Projects</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
