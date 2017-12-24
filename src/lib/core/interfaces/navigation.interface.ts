/**
 * Represents the data structure of a UitNavigationItem to generate items by items source.
 */
export interface INavigation {
	/**
	 * Gets or sets a value that will get displayed as link text.
	 */
	label: string;
	/**
	 * Gets or sets a value that is used as destination path for the Angular router.
	 */
	path: string;
}
