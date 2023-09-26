<template>
    <div id="modal-component" ref="modalEle" aria-hidden="true" aria-labelledby="modal-component-label" class="modal fade"
         data-bs-backdrop="true" data-bs-keyboard="true"
         tabindex="-1"
    >
        <div :class="classObject" class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header bg-light">
                    <h5 id="staticBackdropLabel" class="modal-title pt-1">{{ props.title }}</h5>
                    <div class="position-absolute top-0 end-0 mt-2 me-3 pt-1 ps-1 z-index-1">
                        <button aria-label="Close"
                                class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal"></button>
                    </div>
                    <!--                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
                </div>
                <div class="modal-body">
                    <slot name="body"/>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                    <button class="btn btn-sm btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref, computed, watch} from "vue";

import {Modal} from "bootstrap";


const emit = defineEmits(['modalHiddenEvent'])

const props = defineProps({
    title: {
        type: String,
        default: "no title",
    },
    size: {
        type: String,
        default: null,
    },
    keyboard: {
        type: Boolean,
        default: false,
    },
    backdrop: {
        type: String,
        default: true,
    },
});


const classObject = computed(() => ({
    'modal-xl': props.size === 'xl',
    'modal-lg': props.size === 'lg',
    'modal-sm': props.size === 'sm',
    'modal-fullscreen': props.size === 'fullscreen',
    'modal-fullscreen-sm-down': props.size === 'fullscreen-sm-down',
    'modal-fullscreen-md-down': props.size === 'fullscreen-md-down',
    'modal-fullscreen-lg-down': props.size === 'fullscreen-lg-down',
    'modal-fullscreen-xl-down': props.size === 'fullscreen-xl-down',
    'modal-fullscreen-xxl-down': props.size === 'fullscreen-xxl-down',
}))

let modalEle = ref(null);

let thisModalObj = null;

onMounted(() => {


    modalEle.value.addEventListener('hidden.bs.modal', function (event) {
        emit('modalHiddenEvent')
    })

})

const _show = async () => {


    thisModalObj = await new Modal(modalEle.value, {
        keyboard: props.keyboard,
        backdrop: props.backdrop,

    });

    await thisModalObj.show();

}

const _hide = () => {
    thisModalObj.hide();
}


defineExpose({show: _show, hide: _hide});

</script>

<style scoped>

</style>
