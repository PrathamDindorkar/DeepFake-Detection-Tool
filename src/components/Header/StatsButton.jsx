import { IoStatsChart } from 'react-icons/io5';
import { ActionIcon, Tooltip } from '@mantine/core';
import { useState } from 'react';
import StatsModal from './StatsModal';

const StatsButton = () => {
	const [statsModal, setStatsModal] = useState(false);
	return (
		<>
			<StatsModal statsModal={statsModal} setStatsModal={setStatsModal} />
			<Tooltip label="Stats" withArrow>
				<ActionIcon variant="transparent" onClick={() => setStatsModal(true)}>
					<IoStatsChart size={30} />
				</ActionIcon>
			</Tooltip>
		</>
	);
};

export default StatsButton;
