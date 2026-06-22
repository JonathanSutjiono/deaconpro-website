export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;
export const homepageQuery = `*[_type == "homepage"][0]`;
export const aboutQuery = `*[_type == "about"][0]`;
export const contactQuery = `*[_type == "contact"][0]`;
export const footerQuery = `*[_type == "footer"][0]`;

export const servicesQuery = `*[_type == "service" && published == true] | order(order asc, title asc)`;
export const portfolioQuery = `*[_type == "portfolio" && published == true] | order(order asc, year desc)`;
export const processStepsQuery = `*[_type == "processStep" && published == true] | order(order asc, title asc)`;
export const insightsQuery = `*[_type == "insight" && published == true] | order(publishedAt desc)`;

export const portfolioBySlugQuery = `*[_type == "portfolio" && published == true && slug.current == $slug][0]`;
export const insightBySlugQuery = `*[_type == "insight" && published == true && slug.current == $slug][0]`;
