import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					'px-4 py-3 bg-primary hover:bg-primary-light rounded-md transition-colors shadow-lg',
					className
				)}
				{...props}
			/>
		);
	}
);

Button.displayName = 'Button';

export default Button;
