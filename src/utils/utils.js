export const cleanFileName = (fileName) => {
    const validPattern = /[^a-zA-Z0-9_.-]/g

    const cleanName = fileName.replace(validPattern, '-').replaceAll('--', '-').toLowerCase()

    return cleanName
}
