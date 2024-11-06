import { SiGithub } from 'react-icons/si';

export default function Footer() {
	return (
		<footer className="p-4">
			<div className="flex h-full flex-col items-center justify-between sm:flex-row">
				<div
					className={
						'flex items-center justify-center gap-x-1 text-center text-sm sm:text-left'
					}
				>
					Made with ❤️ by{' '}
					<span className="underline">
						<a
							href="https://github.com/Dame-G/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Damon
						</a>
					</span>
				</div>
				<div className="flex items-center gap-x-4">
					<a
						href="https://github.com/Dame-G/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl"
					>
						<SiGithub className="hover:opacity-50" />
					</a>
				</div>
			</div>
		</footer>
	);
}
