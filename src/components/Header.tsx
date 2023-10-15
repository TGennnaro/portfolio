import { cn } from '@/lib/utils';

export default function Header({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<h2
			className={cn(
				'leading-snug text-6xl font-bold tracking-tight',
				className
			)}
		>
			{children}
		</h2>
	);
}
