// Utility function to get hero data from Keystatic
export async function getHeroData() {
  try {
    // Import the hero data from Keystatic
    const heroData = await import('../content/pageHeroes/index.yaml');
    return heroData.default || heroData;
  } catch (error) {
    console.log('Hero data not found, using defaults');
    return {
      aboutHeroType: 'gradient',
      aboutHeroImage: null,
      aboutHeroImageAlt: '',
      contactHeroType: 'gradient',
      contactHeroImage: null,
      contactHeroImageAlt: '',
      pricingHeroType: 'gradient',
      pricingHeroImage: null,
      pricingHeroImageAlt: '',
      foundationHeroType: 'gradient',
      foundationHeroImage: null,
      foundationHeroImageAlt: '',
      teamHeroType: 'gradient',
      teamHeroImage: null,
      teamHeroImageAlt: '',
    };
  }
}

export function getHeroConfig(page: string, heroData: any) {
  return {
    type: heroData[`${page}HeroType`] || 'gradient',
    image: heroData[`${page}HeroImage`] || null,
    imageAlt: heroData[`${page}HeroImageAlt`] || '',
  };
}
