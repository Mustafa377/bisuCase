<template>
    <div></div>
</template>

<script>
/*
* IFrame sayfalar arası data transferi için gerekli olan köprü sayfasıdır. Silmeyin!!
*/
export default {
    name: 'CreditCardProcessResult',
    data() {
        return {
            broadcastChannel: Buffer.from(this.$route.params.channel, 'base64').toString(),
            data: Buffer.from(this.$route.params.data, 'base64').toString()
        };
    },
    created() {
        const bc = new BroadcastChannel(this.broadcastChannel);
        
        bc.postMessage(this.data);
        //window.close();
    },
    methods: {}
};
</script>
