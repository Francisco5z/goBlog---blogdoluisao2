import posts from './posts';

const categories: any[] = ["home"]

posts.map(i => categories.push(i.categories));

const flatCategories: string[] = [];

new Set(categories.flat()).forEach(i => flatCategories.push(i));

export default flatCategories;