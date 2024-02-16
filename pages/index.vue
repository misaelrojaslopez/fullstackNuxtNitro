<script setup>
// before
// const scizor = await fetch('https://pokeapi.co/api/v2/pokemon/scizor').then(res => res.json())
/* 


* Fetching Data the Nuxt Way
As a result, the more common Nuxt pattern is to keep any async data inside a useAsyncData composable.

The basic anatomy of the useAsyncData composable is that you provide it a unique key to 
help with things like caching, and then a function that contains what async code needs to be run.

For our scenario, we’ll provide the key of 'scizor' and then return a fetch call inside.

$fetch vs fetch
You’ll notice that instead of the standard fetch, I’m using the $fetch instead. This is a Nuxt 
helper method that ensures that the code works both when the being run on the client side as 
well as the server. This type of code is typically called “isomorphic” and it’s a common pattern 
for Nuxt to use in order to minimize overhead for developers to learn and manage.

In addition, another benefit of it is that it automatically parses the data returned as JSON, so 
it’s one less thing you have to do every time you fetch data!
*/

// const { data: scizor } = await useAsyncData('scizor', () => {
   // return $fetch('https://pokeapi.co/api/v2/pokemon/scizor')
// })



/*

But it get’s better!
While this pattern is very powerful, the Nuxt team realized that this is something that developers 
do a lot in their apps. So, as expected of the wonderful team, they came up with an even easier way
 to fetch APIs: useFetch.

*/

// const { data: scizor } = await useFetch('https://pokeapi.co/api/v2/pokemon/scizor')

/*
What’s going on here? This is actually the same code as before, but condensed 
into a function so that you don’t have to type the useAsyncData + $fetch pattern every single time.

In other words, useFetch is a wrapper of syntactic sugar for useAsyncData with $fetch.

Isn’t it so concise and convenient?
*/


// custom api
const { data: pokemon, error }  = await useFetch('/api/charizard')

</script>
<template>
    <div>
    <h1>testing app</h1>
    <ul v-if="pokemon">
        <li><img :src="pokemon.sprite" :alt="pokemon.name"></li>
        <li>{{ pokemon.id }} - {{ pokemon.name }}</li>
    </ul>
    <div v-else>
        {{ error }}
    </div>
    </div>
</template>