export const cleanFileName = (fileName) => {
    const validPattern = /[^a-zA-Z0-9_.-]/g

    const cleanName = fileName.replace(validPattern, '-').replaceAll('--', '-').toLowerCase()

    return cleanName
}

export const editFavGames = (favs, data) => {

    if ( favs.some( game => game.title === data.title) ) {
        const newFavs = favs.filter(game => game.title !== data.title)
        localStorage.setItem(("favGames"), JSON.stringify(newFavs))
        return newFavs
    }

    const newFavs = [...favs, data]
    localStorage.setItem(("favGames"), JSON.stringify(newFavs))
    return newFavs
}