const app= Vue.createApp({})

app.component('foco',{
    props:['lugar'],
    data(){
        return {
            estado:0
        }
    },
    template: `
        <img :src="estado ?'focoOn.jpg':'focoOff.jpg'"
         @click="estado=!estado" width="100">
        <p>{{lugar}}</p>
    `
})

const vm=app.mount('#app')