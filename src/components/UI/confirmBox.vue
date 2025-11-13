<template>
    <div class="test">
        <p>du har sparet xxx</p>
    </div>
</template>
<script>

export default {data()
{
return {
        name: "confirmBox"

}
}
methods:{
    
}
}
</script>
<style scoped>
.test{
    z-index: 99;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    justify-self: center;
    align-self: center;
    height: 5vh;
    border-radius: 5px;
    width: 200px;
    position: relative;
    bottom:50%;
    background: #0961233b;
border: 2px, solid;
color: green;

}
</style>