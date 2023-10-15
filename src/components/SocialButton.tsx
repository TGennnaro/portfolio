import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

export default function SocialButton({
	Icon,
	link,
}: {
	Icon: LucideIcon;
	link: string;
}) {
	return (
		<Link href={link} target='_blank' className='p-2'>
			<Icon className='w-8 h-8 pointer-events-none' />
		</Link>
	);
}
