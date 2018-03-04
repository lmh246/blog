<template>
    <div class="page">   
        <Page :current="1" :total="50" simple></Page>
    </div>
</template>
<script>
    export default {
        
    }
</script>

<style scoped>
.page {
    width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>
