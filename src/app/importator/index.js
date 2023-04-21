function importator(r) {
	return r.keys().map(r);
}

export const carrouselImgC1 = importator(
	require.context('../../assets/imgCarrousel/C1', false, /.*/)
);
export const carrouselImgC2 = importator(
	require.context('../../assets/imgCarrousel/C2', false, /.*/)
);
export const carrouselImgC3 = importator(
	require.context('../../assets/imgCarrousel/C3', false, /.*/)
);
