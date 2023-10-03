<script setup>
import { ref } from "vue";

const { props } = defineProps({
    quantity: {
        type: Number,
        default: 0, // Set the default value as a number, not a string
    },
});

const localQuantity = ref(props.quantity); // Create a local ref to manage quantity

const increment = () => {
    localQuantity.value += 1;
}

const decrement = () => {
    if (localQuantity.value > 0) {
        localQuantity.value--;
    }
}
</script>

<template>
    <div class="input-group input-group-sm" data-quantity="data-quantity">
        <button class="btn btn-sm btn-outline-secondary border-300 bg-soft-dark" data-field="input-quantity" data-type="minus"
                @click="decrement">-</button>
        <input class="form-control text-center input-quantity input-spin-none" type="number" min="0"
               aria-label="Quantity" style="max-width: 50px"
               v-model="localQuantity"> <!-- Use localQuantity here -->
        <button class="btn btn-sm btn-outline-secondary border-300 bg-soft-dark" data-field="input-quantity" data-type="plus"
                @click="increment">+</button>
    </div>
</template>

<style scoped>
</style>
