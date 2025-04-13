import React, { createContext, useCallback, useState } from 'react';

export const TooltipContext = createContext();

export const TooltipProvider = ({ children }) => {
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

	const tooltipManager = {
		activeTooltip,
		showTooltip,
		hideTooltip,
		closeAllTooltips,
	};

	return (
		<TooltipContext.Provider value={tooltipManager}>
			{children}
		</TooltipContext.Provider>
	);
};
