<template>
    <!--    <h1>Users Management</h1>-->
    <!--    <button class="btn btn-sm btn-info" @click="showModalOne">Open Modal 1</button>-->
    <!--    <button class="btn btn-danger btn-info" @click="showModalTwo">Open Modal 2</button>-->
    <!--    <div class="card">-->
    <!--        <div class="card-header">-->
    <!--            test-->
    <!--        </div>-->
    <!--        <div class="card-body">-->
    <!--            <div class="mb-3">-->
    <!--                <label class="form-label">Email address</label>-->
    <!--                <v-select   label="NAME1" >-->
    <!--                    <template #search="{attributes, events}" #spinner="{ loading }">-->
    <!--                        <input-->
    <!--                            class="vs__search"-->
    <!--                            :filterable="false"-->

    <!--                            v-bind="attributes"-->
    <!--                            v-on="events"-->
    <!--                        />-->
    <!--                    </template>-->
    <!--                </v-select>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--        <ModalComponent :title="modal_properties.title" ref="thisModal" :backdrop="modal_properties.backdrop"-->
    <!--                        :keyboard="modal_properties.keyboard" @modalHiddenEvent="modalClose" :size="modal_properties.size">-->
    <!--            <template #body>-->
    <!--                <SampleOne v-if="modal_properties.type==='one'"></SampleOne>-->
    <!--                <SampleTwo v-if="modal_properties.type==='two'"></SampleTwo>-->
    <!--            </template>-->
    <!--            <template #footer>-->
    <!--                <h1>Modal Footer if Any</h1>-->
    <!--                &lt;!&ndash;            <button class="btn btn-primary">Extra footer button</button>&ndash;&gt;-->
    <!--            </template>-->
    <!--        </ModalComponent>-->
    <!--    </div>-->

    <router-view v-slot="{ Component }">
        <Transition mode="out-in" name="slide-fade">
            <component :is="Component"/>
        </Transition>
    </router-view>
</template>

<script>
import ModalComponent from "@/layout/component/ModalComponent.vue"
import SampleOne from "@/layout/views/users_management/SampleOne.vue";
import SampleTwo from "@/layout/views/users_management/SampleTwo.vue";


export default {
    name: "IndexUserManagement",
    components: {
        SampleTwo,
        SampleOne,
        ModalComponent
    },
    data() {
        return {
            modal_properties: {
                title: null, //string
                backdrop: null, //options: static
                keyboard: null, //default true (Closes the modal when escape key is pressed)
                type: null,
                size: null
            }
        }
    },
    methods: {
        async showModalOne() {
            this.modal_properties.title = 'Title one'
            this.modal_properties.backdrop = true
            this.modal_properties.keyboard = false
            this.modal_properties.type = 'one'
            this.modal_properties.size = 'xl'
            if (await this.$refs.thisModal) {
                await this.$refs.thisModal.show();
            }
        },
        async showModalTwo() {
            this.modal_properties.title = 'Title two'
            this.modal_properties.backdrop = 'static'
            this.modal_properties.keyboard = true
            this.modal_properties.type = 'two'
            this.modal_properties.size = 'fullscreen'
            if (await this.$refs.thisModal) {
                await this.$refs.thisModal.show();
            }
        },

        async modalClose() {
            if (this.modal_properties.type === 'one') {
                //if clear inputs
                alert('this is close modal event one')
            } else if (this.modal_properties.type === 'two') {
                alert('this is close modal event two')
            }

        }

    },

    computed: {},
}
</script>

<style scoped>

</style>
