export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;
export const homepageQuery = `*[_type == "homepage"][0]`;
export const aboutQuery = `*[_type == "about"][0]`;
export const contactQuery = `*[_type == "contact"][0]`;
export const footerQuery = `*[_type == "footer"][0]`;

// `showOnWebsite != false` keeps existing documents visible until an editor
// intentionally hides them, while allowing a soft hide without deleting data.
export const servicesQuery = `*[_type == "service" && published == true && showOnWebsite != false] | order(coalesce(order, 9999) asc, title asc)`;
export const portfolioQuery = `*[_type == "portfolio" && published == true && showOnWebsite != false] | order(coalesce(order, 9999) asc, year desc)`;
export const processStepsQuery = `*[_type == "processStep" && published == true && showOnWebsite != false] | order(coalesce(order, 9999) asc, title asc)`;
export const insightsQuery = `*[_type == "insight" && published == true && showOnWebsite != false] | order(coalesce(order, 9999) asc, publishedAt desc)`;

export const portfolioBySlugQuery = `*[_type == "portfolio" && published == true && showOnWebsite != false && slug.current == $slug][0]`;
export const insightBySlugQuery = `*[_type == "insight" && published == true && showOnWebsite != false && slug.current == $slug][0]`;
