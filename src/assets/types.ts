export enum PAGES {
  users = 'users',
  dogs = 'dogs',
  products = 'products',
}

export enum BREED_LIST {
   husky = 'husky',
   boxer = 'boxer',
   chihuahua = 'chihuahua',
   dalmatian = 'dalmatian',
   labrador = 'labrador',
   pitbull= 'pitbull',
   puggle = 'puggle',
   rottweiler = 'rottweiler',
}

export enum PRODUCTS_CATEGORIES {
  smartphones = "smartphones",
  laptops = "laptops",
  fragrances = "fragrances",
  skincare = "skincare",
  groceries = "groceries",
  home = "home-decoration",
  furniture = "furniture",
  tops = "tops",
  ['womens-dresses'] = "womens-dresses",
  ['womens-shoes'] = "womens-shoes",
  ['mens-shirts'] = "mens-shirts",
  ['mens-shoes'] = "mens-shoes",
  ['mens-watches'] = "mens-watches",
  ['womens-watches'] = "womens-watches",
  ['womens-bags'] = "womens-bags",
  ['womens-jewellery'] = "womens-jewellery",
  sunglasses = "sunglasses",
  automotive = "automotive",
  motorcycle = "motorcycle",
  lighting = "lighting"
}

export interface IProduct {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: "...",
  images: string[]
}

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}
