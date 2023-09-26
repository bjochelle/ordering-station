<template>
    <svg :height="props.height+'px'" :width="props.width+'px'"
         preserveAspectRatio="xMidYMid"
         style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;"
         viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
        <g>
            <circle cx="60" cy="50" fill="#e15b64" r="4">
                <animate attributeName="cx" begin="-0.67s" dur="1s" keyTimes="0;1"
                         repeatCount="indefinite" values="95;35"></animate>
                <animate attributeName="fill-opacity" begin="-0.67s" dur="1s"
                         keyTimes="0;0.2;1" repeatCount="indefinite" values="0;1;1"></animate>
            </circle>
            <circle cx="60" cy="50" fill="#e15b64" r="4">
                <animate attributeName="cx" begin="-0.33s" dur="1s" keyTimes="0;1"
                         repeatCount="indefinite" values="95;35"></animate>
                <animate attributeName="fill-opacity" begin="-0.33s" dur="1s"
                         keyTimes="0;0.2;1" repeatCount="indefinite" values="0;1;1"></animate>
            </circle>
            <circle cx="60" cy="50" fill="#e15b64" r="4">
                <animate attributeName="cx" begin="0s" dur="1s" keyTimes="0;1"
                         repeatCount="indefinite" values="95;35"></animate>
                <animate attributeName="fill-opacity" begin="0s" dur="1s"
                         keyTimes="0;0.2;1" repeatCount="indefinite" values="0;1;1"></animate>
            </circle>
        </g>
        <g transform="translate(-15 0)">
            <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f8b26a"
                  transform="rotate(90 50 50)"></path>
            <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f8b26a">
                <animateTransform attributeName="transform" dur="1s"
                                  keyTimes="0;0.5;1" repeatCount="indefinite"
                                  type="rotate"
                                  values="0 50 50;45 50 50;0 50 50"></animateTransform>
            </path>
            <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#f8b26a">
                <animateTransform attributeName="transform" dur="1s"
                                  keyTimes="0;0.5;1" repeatCount="indefinite"
                                  type="rotate"
                                  values="0 50 50;-45 50 50;0 50 50"></animateTransform>
            </path>
        </g>
    </svg>
</template>

<script setup>


const props = defineProps({
    height: {
        type: String,
        default: "100",
    },
    width: {
        type: String,
        default: "100",
    },
});

</script>

<style scoped>

</style>
