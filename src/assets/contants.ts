import { PAGES } from "./types";

export const LINKS_TITLE = {
    [PAGES.todos]: 'todos',
    [PAGES.dogs]: 'dogs',
    [PAGES.products]: 'products',
}

export const LINKS = [
    {
        link: PAGES.todos,
        title: LINKS_TITLE[PAGES.todos],
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
