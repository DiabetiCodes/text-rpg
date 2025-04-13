import { useCallback, useState } from 'react';

const useTooltipManager = () => {
	const [activeTooltip, setActiveTooltip] = useState(null);

	const showTooltip = useCallback((tooltipId) => {
		setActiveTooltip(tooltipId);
	}, []);

	const hideTooltip = useCallback(() => {
		setActiveTooltip(null);
	}, []);

	const closeAllTooltips = useCallback(() => {
		setActiveTooltip(null);
	}, []);

	return {
		activeTooltip,
		showTooltip,
		hideTooltip,
		closeAllTooltips,
	};
};

export default useTooltipManager;
