<script setup>
const auth = useCookie('pokemon-auth')

console.log(auth)

function authenticate() {
    auth.value = 'asdfqwer'
}
function logout() {
    auth.value = ''
}
</script>
<template>
    <div>
        <h1>Login</h1>
        <button @click="authenticate">
            Login
        </button>
        <button @click="logout">
            Logout
        </button>
    </div>
</template>