import { PAGES } from "./types";

export const LINKS_TITLE = {
    [PAGES.todos]: 'todos',
    [PAGES.dogs]: 'dogs',
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
]
