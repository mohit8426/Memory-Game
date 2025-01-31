import React from 'react';

import finishImg from '@/assets/finish.svg';
import confettiGif from '@/assets/confetti.gif'; // Ensure the GIF is in the correct directory
import { Button } from '@/components';

interface IFinish {
	moves: number;
	onPlayClick: () => void;
	onQuitClick: () => void;
}

export const Finish: React.FC<IFinish> = ({ moves, onPlayClick, onQuitClick }) => {
	return (
		<div
			className='flex flex-col h-screen w-screen items-center justify-center text-3xl selection:bg-text selection:text-bg'
			data-testid='finish'
		>
			<div>Woo-hoo! 🎉 Congratulations!</div>
			<div>
				You won in <span className='font-bold'>{moves}</span> moves!
			</div>
			
			{/* Image Container for Confetti & Finish Image */}
			<div className="flex items-center gap-4">
				<img src={confettiGif} alt='confetti' draggable={false} />
				<img src={finishImg} alt='finish' draggable={false} />
			</div>

			{/* Buttons */}
			<div className='flex gap-8 mt-4'>
				<Button onClick={onPlayClick}>Play Again</Button>
				<Button onClick={onQuitClick}>Quit</Button>
			</div>
		</div>
	);
};
