export const cleanFileName = (fileName) => {
    const validPattern = /[^a-zA-Z0-9_.-]/g

    const cleanName = fileName.replace(validPattern, '-').replaceAll('--', '-').toLowerCase()

    return cleanName
}

export const editFavGames = (data) => {

    let favGames = JSON.parse(localStorage.getItem("favGames")) || []

    if ( favGames.some( game => game.title === data.title) ) {
        const newFavGames = favGames.filter(game => game.title !== data.title)
        localStorage.setItem(("favGames"), JSON.stringify(newFavGames))
        return
    }

    localStorage.setItem(("favGames"), JSON.stringify([...favGames, data]))
}