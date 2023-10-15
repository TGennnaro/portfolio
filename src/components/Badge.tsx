import { cn } from '@/lib/utils';

export default function Badge({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				'bg-accent/20 py-1 px-2 rounded-2xl text-accent w-fit text-base',
				className
			)}
		>
			{children}
		</div>
	);
}
