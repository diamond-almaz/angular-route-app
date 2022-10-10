import { PAGES } from "./types";

export const LINKS_TITLE = {
    [PAGES.users]: 'users',
    [PAGES.dogs]: 'dogs',
    [PAGES.products]: 'products',
}

export const LINKS = [
    {
        link: PAGES.users,
        title: LINKS_TITLE[PAGES.users],
    },
    {
        link: `${PAGES.dogs}/husky`,
        title: LINKS_TITLE[PAGES.dogs]
    },
    {
        link: PAGES.products,
        title: LINKS_TITLE[PAGES.products],
    },
]
