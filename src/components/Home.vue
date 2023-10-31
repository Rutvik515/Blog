<template>
<Mainlayout>
    <template #header>
        <div class="text mt-6">
            <h1 class="text-secondary">Trending Post</h1>
        </div>
    </template>
    <template #detail>
        <div class="container  d-inline-flex mt-lg-5">
        <div class="w-50 border-none" v-for="trending in trendings" :key="trending.id">
                <div class="img-fluid card-body" >
                    <img class="rounded-top-3 h-100 w-75" :src="trending.image" alt="">
                    <p class="ms-6 p-3 bg-secondary-subtle w-75 rounded-bottom-3"> {{ trending.titel }}
                       </p>   
            </div>
        </div>
            <!-- <div class="w-50 border-none "> -->
                <!-- <div class="img-fluid card-body"> -->
                    <!-- <img class="rounded-top-3 h-100 w-75" :src="trending.image" alt=""> -->
                    <!-- <p class="ms-6 p-3 bg-secondary-subtle w-75 rounded-bottom-3">{{ trending.titel }} </p> -->
                <!-- </div> -->
            <!-- </div> -->
            <!-- <div class="w-50 border-none ">
                <div class="img-fluid card-body">
                    <img class="rounded-top-3 h-100 w-75" :src="trending.image" alt="">
                    <p class="ms-6 p-3 bg-secondary-subtle w-75 rounded-bottom-3">{{ trending.titel }}</p>
                </div>
            </div> -->
        </div>

    </template>
</Mainlayout>
</template>

<script>
import Mainlayout from './MainLayout.vue';
export default {
    name: 'HomeComponent',
    data() {
        return {
            trendings:[
                {
                id:1,
                image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/rohit-sharma-played-a-captains-knock-under-pressure-michael-vaughan-courtesy-ap-305634964-16x9_0.jpg?VersionId=PVBgvtu0OKH3gX.AAav0tkMkdrwk1UDh&size=690:388",
                titel: "Rohit Sharma scored 87 runs against England in Lucknow. Rohit Sharma won the Player of the Match award against England."

            },
            {
                id:2,
                image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/adani-group-065126172-16x9_1.png?VersionId=xBEhgSJhDspFq7xIpb68PkIVz8j6Qc7j&size=690:388",
                titel: "Shares of most Adani Group companies gained on Monday as reports suggested that the Supreme Court (SC) deferred."

            },
            {
                id:3,
                image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/deepika-padukone-and-ranveer-singh-261001391-16x9_0.jpg?VersionId=bfG7O6bwgrxEfg6yRA2vOdADBEKovbIO&size=690:388",
                titel: "As Deepika Padukone and Ranveer Singh's wedding video creates a buzz, we revisit the actress' impeccable wedding wardrobe."

            },
        ]
        }
    },
    components: {
        Mainlayout
    }
}
</script>

<style scoped>
.text {
    text-decoration: none;
}

.mt-6 {

    margin-top: 13rem;
}

.border-none {

    border: none;
}

.ms-6 {

    margin-left: 54px;
    font-size: 18px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}
</style>
