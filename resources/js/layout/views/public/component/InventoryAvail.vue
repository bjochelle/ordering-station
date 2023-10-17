<template>
    <div class="">

        <button class="btn  btn-falcon-default text-primary border-300 bg-soft-dark"
                data-field="input-quantity"
                @click="checkAvail"
                data-type="plus">Check Stock Availability
        </button>
        {{ props }}

        <ModalComponent ref="thisModal" :backdrop="modal_properties.backdrop" :keyboard="modal_properties.keyboard"
                    :size="modal_properties.size" :title="modal_properties.title" @modalHiddenEvent="modalClose">
        <template #body>
            <div v-if="firstLoad === 0" class="w-full scroll-500">
				<div class="p-15 m-5 text-center">
					<i class="fas fa-spinner fa-pulse"></i> CHECKING INVENTORY...
				</div>
			</div>
			<div v-else-if="firstLoad < 0" class="w-full scroll-500">
				<div class="p-15 m-5 text-center">
					Item Sold Out
				</div>
			</div>
			<div v-else class="w-full scroll-500">
					<div class="searchFilter">
						 <input type="search" v-model="searchTerm" placeholder="Find store" />
					</div>

					<div class="m-3 text-center">
						<a href="https://support.challenger.sg/hc/en-us/requests/new?ticket_form_id=4757547695631" target="_blank">
							Contact us for more details
						</a>
					</div>

					 <div class="m-3 pwp-group flex row" v-for="(v,k) in duplicate_inv">
						<div class="col-8 ">
							<p class="fw-bold h6">{{ v.shop_name }}</p>
							<p class="h6">{{ v.street_line1 }}<br>{{ v.street_line2 }}<br>{{ v.street_line3 }}</p>
							<span class="h6"><span class="fw-bold">Opening Hours:</span><br>{{ v.open_hours }}</span>
						</div>
						<div class="col-4 text-center h6 p-0">
							<div
                                :style="{ backgroundColor: `${v.soh_color}` }"
                            class="w-100 inv-status">{{ v.soh_level }} </div>
						</div>
					</div>
			</div>
        </template>
        <template #footer>
            <button class="btn btn-sm btn-primary me-1 mb-1"
                  >OK
            </button>
        </template>
    </ModalComponent>



	</div>
  </template>

  <script setup>
  import {ref, onBeforeUnmount, onMounted, reactive, watch, computed} from "vue";
  import ModalComponent from "@/layout/component/ModalComponent.vue";
  import {storeToRefs} from "pinia";
  import {usePromoItemStore} from "@/store/Promo";
  import _ from 'lodash';


  const emit = defineEmits(['modalHiddenEvent'])
  const promoItemStore = usePromoItemStore()
  const {inventory} = storeToRefs(promoItemStore)//job variable from store
  const {getInventoryAll} = promoItemStore; //job methods from store

   const { props } = defineProps({
    itemId: {
        type: String,
    },
    cartOptions:{
        type: Object
    }
});

  const firstLoad = ref(0);
  const searchTerm = ref('');
  const duplicate_inv = ref([]);


const modal_properties = ref({
    title: null,
    backdrop: null,
    keyboard: null,
    type: null,
    size: null
})

let thisModal = ref(null);


const checkAvail = async () => {

    modal_properties.value.title = 'Check Stock Availability'
    modal_properties.value.backdrop = 'static'
    modal_properties.value.keyboard = true
    modal_properties.value.type = 'create'
    modal_properties.value.size = 'md'
    await getInventory();
    if (await thisModal.value) {
        await thisModal.value.show();
    }

}

const modalClose = () => {
 thisModal.value.hide();
}

const getInventory = async ()=>{
    firstLoad.value = 0;
    const params = {
        params: {
            item_type: '11',
            inv_type: '12',
            pwp: '',
        }
    }
    await getInventoryAll(params);
    firstLoad.value = 1;
}

  const filterShop = _.debounce(function (search) {

      const searchTerm = search.toLowerCase().trim();
      if (!searchTerm) {
          duplicate_inv.value = inventory.value;
      }else{
          duplicate_inv.value =  inventory.value.filter((item) => {
              const itemInfo = `${item.shop_name} ${item.street_line1} ${item.street_line2} ${item.soh_level}`.toLowerCase();
              return itemInfo.includes(searchTerm);
          });
      }
  }, 500);



  watch(
      () => [searchTerm.value],
      async (newValue) => {
          filterShop(searchTerm.value);
      }
  )

  onMounted(() =>{
      duplicate_inv.value = inventory.value;
  })

  </script>

<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
    .scroll-500 {
        height: 100% !important;
    }

    .newPwp-box {
        .newPwp-select-box {
            height: 115px !important;
            overflow: hidden
        }
    }
}

.scroll-500 {
    height: 500px;
}

.pwp-modal .ivu-modal-body {
    padding: 0px;

    .ps {
        height: 100% !important;
    }
}

.searchFilter {
    padding: 15px 15px 0px 15px;

    input {
        border: 1px solid #CCC;
        width: 100%;
        padding-left: 3px;
        border-radius: 5px;
    }
}

.inv-status{
    padding: 2px;
}

input:focus-visible {
    outline-width: 0;
}
</style>
