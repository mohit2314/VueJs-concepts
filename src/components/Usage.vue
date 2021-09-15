<template>
<div class="usage-container">
    <div class="heading">
Usage
    </div>
    <div class="content">
<div class="message">Show this section to Clients</div>
<div class="toggle-switch"><input type="checkbox"></div>
<div class="info">( <span></span> This setting is visible only to Agency Admins)</div>
    </div>
    </div>  
</template>

<script>
export default {

}
</script>

<style lang='scss'>

.usage-container{
    padding: 4px;
    .heading{
    font-size: 18px;
font-weight: 500;
color: #4F4F4F;
    }

    .content{
        margin-left: 24px;
        padding: 16px;
        display: flex;
        .message{
            font-size: 16px;
            font-weight: 400;
            color: #737373;
            width: 197px;
margin-right: 12px;
        }
.toggle-switch{
    margin: 0px 6px;
}

        .info{
            font-size: 12px;
            font-weight: 400;
            color: #4F4F4F;
            width: 279px;
            height: 18px;
            margin-left:16px;
        }

    }
}
</style>