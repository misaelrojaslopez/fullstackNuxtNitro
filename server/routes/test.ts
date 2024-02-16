export default defineEventHandler(event => {
    return sendRedirect(event, 'my-new-domain.com', 302)
})


const limitOfProviders = 5
let remainingProviders = 0

if (gameProviderNames.length > 0) {
    // The array is not empty
    const firstFiveProviders = gameProviderNames.slice(0, 5)
    providers = firstFiveProviders.join(', ')

    if (gameProviderNames.length > limitOfProviders) {
        remainingProviders = gameProviderNames.length - limitOfProviders
        providers += `${providers} ,${remainingProviders}+ ${microcopyProviders}`
    }
}