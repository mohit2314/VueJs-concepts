<template>
  <div class="summary-container">
<div class="heading">
Summary
</div>
<div class="summary-cards-wrap">
<div v-for="(n,i) in 3" :key="i" class="card">
<div class="upper-block separator">
<div class="month-info">
<span class="main-head">This month so far</span>
<span class="sub-head">(July 01, 2021 - Present)</span>
<span class="pricing">$112.34</span>
</div>
</div>
<!-- Bottom block -->
<div class="bottom-block">
<div class="info-row">
    <div class="info">Calls (120 min)</div>
    <div class="price">$60</div>
    </div>
    <!-- row2 -->
    <div class="info-row">
    <div class="info">SMS (1200)</div>
    <div class="price">$40</div>
    </div>
    <!-- expandable row -->
    <div class="other-charges-row" @click="showOtherCharges=!showOtherCharges">
<div class="heading">Other Charges <span>v</span></div>
<div class="price">$40</div>
    </div>
    <!-- expand items -->
    <div v-if="showOtherCharges" class="other-items">
<div class="info-row">
    <div class="info-other">Call recordings</div>
    <div class="price">$60</div>
    </div>
    <div class="info-row">
    <div class="info-other">Carrier charges</div>
    <div class="price">$40</div>
    </div>
    <div class="info-row">
    <div class="info-other">Global Confrence</div>
    <div class="price ">$40</div>
    </div>
     <div class="info-row">
    <div class="info-other">Validation</div>
    <div class="price">$40</div>
    </div>
    </div>
</div>
</div>
</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            showOtherCharges:false,
        }
    }

}
</script>

<style scoped lang='scss'>
.summary-container{
     padding: 4px;
    .heading{
    font-size: 18px;
font-weight: 500;
color: #4F4F4F;
    }
}
.summary-cards-wrap{
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
}
.card{
    width: 243px;

padding: 28px 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
border: 1px solid #E2E8F0;
box-sizing: border-box;
border-radius: 3px;
}
.upper-block{
    .month-info{
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     .main-head{
         font-size: 14px;
         font-weight: 500;
         color: #4F4F4F;
         margin-bottom: 8px;
     } 
     .sub-head{
         font-size: 12px;
         font-weight: 400;
         color: #4F4F4F;
         margin-bottom: 12px;

     }
     .pricing{
         color: #37ca37;
         font-weight: 500;
         font-size: 30px;
         margin-bottom: 16px;

     }  
    }
}

.separator{
    width: 218px;
    border-bottom: 1px solid #E2E8F0;
}

.bottom-block{
    width: 100%;
    padding: 24px 24px 0px 24px;
    // margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    

}
.info-row{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
            font-size: 12px;
            color: #4F4F4F;
            margin-bottom: 12px;

        .info{
            width: 149px;
            font-weight: 400;
        }
        .info-other{
            width: 95px;
            font-weight: 400;

        }
      
        .price{
            font-weight: 700;

        }
    }
    .other-charges-row{
        cursor: pointer;
        display: flex;
        justify-content: space-around;
         font-size: 12px;
            margin: 4px 0px;

        .heading{
            width: 149px;
         font-size: 12px;

            font-weight: 400;
            color: #178Af6;
            span{
                color: #4F4F4F;
            }
        }
        .price{
            font-weight: 700;
color: #4F4F4F;
        }
    }
.other-items{
    margin-top: 12px;
    margin-left: 48px;
    // display: flex;
    // flex-direction: column;
    // align-items:center;

}
</style>