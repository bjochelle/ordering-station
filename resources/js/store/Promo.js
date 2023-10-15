import {defineStore} from "pinia";
import axios from "axios";

export const usePromoItemStore = defineStore("promoItem", {
    state: () => ({
        promo_items: [],
        item_details: {},
        descriptions: {},
        price_valid:false,
    }),

    getters: {
        showPriceTag() {
            if (this.price_valid) {
                let default_tag = "ValueClub";
                let mbr_group = ""; // You can set mbr_group as needed

                if (
                    this.item_details.prices &&
                    this.item_details.prices.unit_price_ind != mbr_group
                ) {
                    return default_tag;
                } else {
                    return this.item_details.prices.unit_price_ind;
                }
            }
        },
        showUnitPrice() {
            return  this.item_details.prices.unit_price
        },
        showFulfillBy() {
            return (this.item_details.online_settings) ? 'Fulfilled By: ' + this.item_details.online_settings.fulfilled_by : '';
        },
        firstDescription() {
            const keys = Object.keys(this.descriptions);
            if (keys.length > 0) {
              const firstKey = keys[0];
              return firstKey;
            }
            return null;
          },

    },

    actions: {
        async fetchPromoItem(options, page) {
            const uri = 'api/public/promo?' +
                'page=' + page +
                '&search=' + options.search +
                '&sortby=' + options.currentSort +
                '&sortdir=' + options.currentSortDir +
                '&currentpage=' + options.currentPage;
            const response = await axios.get(uri);
            this.promo_items = response.data
        },

        async fetchProductDetails(upc) {
            // const uri = `api/public/item-details?id=`+upc
            // const response = await axios.get(uri);
            // this.item_details=response.data.data;
            this.item_details = {
                "trans_qty": 0,
                    "item_id": "0194253749462",
                    "item_desc": "Apple MR6G3ZP\/A iPhone 14 Plus 512GB Yellow",
                    "short_desc": "Apple iPhone 14 Plus 512GB (Yellow)",
                    "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194253749462_NQBpriM5bICXrmTov9F2YdmrhbLDr6U8m6TBwiCW.jpg",
                    "item_type": "I",
                    "in_catalog": "Y",
                    "lot_control": "Y",
                    "price_tag_bc": "N",
                    "prices": {
                    "unit_price": 1629,
                        "unit_price_ind": "MEMBER",
                        "price_savings": 0,
                        "regular_price": 2017,
                        "mbr_price": 2017,
                        "promo_price": 1629,
                        "promo_id": "CRMPRC000111506",
                        "promo_ind": "ALL",
                        "promo_cost": 0,
                        "disc_percent": 0,
                        "cost_price": 1502,
                        "min_price": 1945.902,
                        "staff_price": 0,
                        "customer_groups": [],
                        "multiple_points": 2,
                        "mpt_promo_id": "CRMMPT000100527",
                        "mpt_promo_by": "FIXED",
                        "mpt_add_amount": 0,
                        "unit_rebate_points": 3258,
                        "unit_rebate_amount": 32.58
                },
                "settings": {
                    "item_type": "I",
                        "ext_warranty": "1",
                        "lot_control": "Y",
                        "salesperson_control": "N",
                        "status_level": 1,
                        "allow_discount": "Y",
                        "allow_demo": false,
                        "limit_options": {
                        "limit_per_day": -1,
                            "limit_per_mbr": -1,
                            "limit_per_trans": -1,
                            "limit_stock_main": -1,
                            "limit_stock_promo": -1
                    },
                    "item_options": [],
                        "dimensions": {
                        "inv_dim1": "HARDWARE",
                            "inv_dim2": "APPLE",
                            "inv_dim3": "APPLE-IPHONE",
                            "inv_dim4": "APPLE IPHONE14",
                            "brand_id": "APPLE",
                            "model_id": "MR6G3ZP\/A"
                    }
                },
                "online_settings": {
                    "parent_item_id": "0194253375784",
                        "color_id": "YELLOW",
                        "color_opt": [
                        {
                            "item_id": "0194253376705",
                            "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194253376705_DLgzxs3KvtwtXpqeQjcCeyVKDnbdtHUq8zV2V8lS.jpg",
                            "color_id": "BLUE",
                            "color_image": "https:\/\/cdn.hachi.tech\/assets\/images\/color\/blue.png"
                        },
                        {
                            "item_id": "0194253376248",
                            "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194253376248_gGOFzPUG8Sbe9ZHE19XYFHFJWKHQnaDK6AULEwE8.jpg",
                            "color_id": "PURPLE",
                            "color_image": "https:\/\/cdn.hachi.tech\/assets\/images\/color\/d6e840399bad865245a29daeaa383ecd.png"
                        },
                        {
                            "item_id": "0194253376477",
                            "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194253376477_92HYbi28pmRSX2PeGSbipiDsW2amSrnFcGK8ChMd.jpg",
                            "color_id": "RED",
                            "color_image": "https:\/\/cdn.hachi.tech\/assets\/images\/color\/red.png"
                        },
                        {
                            "item_id": "0194253749462",
                            "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194253749462_NQBpriM5bICXrmTov9F2YdmrhbLDr6U8m6TBwiCW.jpg",
                            "color_id": "YELLOW",
                            "color_image": "https:\/\/cdn.hachi.tech\/assets\/images\/color\/yellow.png"
                        },
                        {
                            "item_id": "0194253375784",
                            "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194253375784_weS8n8CpbHa3PCkoiR5cJMngaFH3y35DHOovavGc.jpg",
                            "color_id": "MIDNIGHT",
                            "color_image": "https:\/\/cdn.hachi.tech\/assets\/images\/color\/applemidnight.jpg"
                        },
                        {
                            "item_id": "0194253376019",
                            "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194253376019_G6slju2xFUp7ssHwct3exTiYwTmwRD57msDD69mL.jpg",
                            "color_id": "STARLIGHT",
                            "color_image": "https:\/\/cdn.hachi.tech\/assets\/images\/color\/applestarlight.jpg"
                        }
                    ],
                        "is_active": "Y",
                        "in_catalog": "Y",
                        "inv_type": "CTL",
                        "buffer_qty": 1,
                        "shipping_methods": "{}",
                        "listing_from": "2023-03-14 08:00:00",
                        "listing_to": "2030-12-31 00:00:00",
                        "fulfilled_by": "Challenger",
                        "category_map": [
                        {
                            "id": "apple",
                            "name": "APPLE"
                        },
                        {
                            "id": "iphone-m",
                            "name": "IPHONE"
                        },
                        {
                            "id": "iphone-14",
                            "name": "iPhone 14"
                        }
                    ]
                },
                "pwp": [
                    {
                        "group": 6,
                        "actual_group": "WARRANTY",
                        "is_free": false,
                        "max_qty": 1,
                        "product_count": 2,
                        "products": [
                            {
                                "trans_qty": 0,
                                "item_id": "8000000130341",
                                "item_desc": "ValueClub Extended Warranty 2 Year Plan",
                                "short_desc": "Valueclub Extended Warranty Elite Plan (2 Year)",
                                "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/VEWlogo2.jpg",
                                "item_type": "J",
                                "in_catalog": "N",
                                "lot_control": "N",
                                "price_tag_bc": "N",
                                "prices": {
                                    "unit_price": 163,
                                    "regular_price": 163,
                                    "promo_price": 163,
                                    "promo_id": "CRMPWP00000VEW",
                                    "promo_ind": "ALL",
                                    "price_savings": 163,
                                    "multiple_points": 1
                                },
                                "settings": {
                                    "item_type": "J",
                                    "ext_warranty": "N",
                                    "lot_control": "N",
                                    "salesperson_control": "N",
                                    "status_level": 1,
                                    "allow_discount": "Y",
                                    "allow_demo": false,
                                    "limit_options": {
                                        "limit_per_day": -1,
                                        "limit_per_mbr": -1,
                                        "limit_per_trans": -1,
                                        "limit_stock_main": -1,
                                        "limit_stock_promo": -1
                                    },
                                    "item_options": {
                                        "custom_form": [
                                            "first_name",
                                            "email_addr",
                                            "contact_num"
                                        ]
                                    },
                                    "dimensions": {
                                        "inv_dim1": "SERVICES",
                                        "inv_dim2": "WARRANTY",
                                        "inv_dim3": "EXT WAR",
                                        "inv_dim4": "VEW",
                                        "brand_id": "",
                                        "model_id": ""
                                    }
                                },
                                "online_settings": {
                                    "parent_item_id": "8000000130341",
                                    "color_id": "",
                                    "color_opt": [],
                                    "is_active": "Y",
                                    "in_catalog": "N",
                                    "inv_type": "CTL",
                                    "buffer_qty": 0,
                                    "shipping_methods": "{}",
                                    "listing_from": "2023-04-25 00:00:00",
                                    "listing_to": "2030-12-31 23:59:00",
                                    "fulfilled_by": "Challenger",
                                    "category_map": []
                                }
                            },
                            {
                                "trans_qty": 0,
                                "item_id": "8000000130334",
                                "item_desc": "ValueClub Extended Warranty 1 Year Plan",
                                "short_desc": "Valueclub Extended Warranty Elite Plan (1 Year)",
                                "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/VEWlogo2.jpg",
                                "item_type": "J",
                                "in_catalog": "N",
                                "lot_control": "N",
                                "price_tag_bc": "N",
                                "prices": {
                                    "unit_price": 82,
                                    "regular_price": 82,
                                    "promo_price": 82,
                                    "promo_id": "CRMPWP00000VEW",
                                    "promo_ind": "ALL",
                                    "price_savings": 82,
                                    "multiple_points": 1
                                },
                                "settings": {
                                    "item_type": "J",
                                    "ext_warranty": "N",
                                    "lot_control": "N",
                                    "salesperson_control": "N",
                                    "status_level": 1,
                                    "allow_discount": "Y",
                                    "allow_demo": false,
                                    "limit_options": {
                                        "limit_per_day": -1,
                                        "limit_per_mbr": -1,
                                        "limit_per_trans": -1,
                                        "limit_stock_main": -1,
                                        "limit_stock_promo": -1
                                    },
                                    "item_options": {
                                        "custom_form": [
                                            "first_name",
                                            "email_addr",
                                            "contact_num"
                                        ]
                                    },
                                    "dimensions": {
                                        "inv_dim1": "SERVICES",
                                        "inv_dim2": "WARRANTY",
                                        "inv_dim3": "EXT WAR",
                                        "inv_dim4": "VEW",
                                        "brand_id": "",
                                        "model_id": ""
                                    }
                                },
                                "online_settings": {
                                    "parent_item_id": "8000000130334",
                                    "color_id": "",
                                    "color_opt": [],
                                    "is_active": "Y",
                                    "in_catalog": "N",
                                    "inv_type": "CTL",
                                    "buffer_qty": 0,
                                    "shipping_methods": "{}",
                                    "listing_from": "2023-04-25 00:00:00",
                                    "listing_to": "2030-12-31 23:59:00",
                                    "fulfilled_by": "Challenger",
                                    "category_map": []
                                }
                            }
                        ]
                    },
                    {
                        "group": 1,
                        "actual_group": "AirPods",
                        "is_free": false,
                        "max_qty": 1,
                        "product_count": 2,
                        "products": [
                            {
                                "trans_qty": 0,
                                "item_id": "0190199098558",
                                "item_desc": "Apple MV7N2ZA\/A AirPods (2nd Gen)",
                                "short_desc": "AirPods with Charging Case [MV7N2ZA\/A]",
                                "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0190199098558_potTJNi8q2YEAMrlKRN6nPQldswX687AAzBlB6OL.jpg",
                                "item_type": "I",
                                "in_catalog": "Y",
                                "lot_control": "Y",
                                "price_tag_bc": "N",
                                "prices": {
                                    "unit_price": 186,
                                    "regular_price": 200,
                                    "promo_price": 186,
                                    "promo_id": "CRMPWP000101581",
                                    "promo_ind": "ALL",
                                    "price_savings": 0,
                                    "multiple_points": 0
                                },
                                "settings": {
                                    "item_type": "I",
                                    "ext_warranty": "1",
                                    "lot_control": "Y",
                                    "salesperson_control": "Y",
                                    "status_level": 1,
                                    "allow_discount": "Y",
                                    "allow_demo": false,
                                    "limit_options": {
                                        "limit_per_day": -1,
                                        "limit_per_mbr": -1,
                                        "limit_per_trans": -1,
                                        "limit_stock_main": -1,
                                        "limit_stock_promo": -1
                                    },
                                    "item_options": [],
                                    "dimensions": {
                                        "inv_dim1": "HARDWARE",
                                        "inv_dim2": "APPLE",
                                        "inv_dim3": "APPLE HEADSET",
                                        "inv_dim4": "APPLE-HEADSET",
                                        "brand_id": "APPLE",
                                        "model_id": "MV7N2ZA\/A"
                                    }
                                },
                                "online_settings": {
                                    "parent_item_id": "0190199098558",
                                    "color_id": "WHITE",
                                    "color_opt": [],
                                    "is_active": "Y",
                                    "in_catalog": "Y",
                                    "inv_type": "CTL",
                                    "buffer_qty": 3,
                                    "shipping_methods": "{}",
                                    "listing_from": "2019-03-25 00:00:00",
                                    "listing_to": "2030-12-31 00:00:00",
                                    "fulfilled_by": "Challenger",
                                    "category_map": []
                                }
                            },
                            {
                                "trans_qty": 0,
                                "item_id": "0194253397878",
                                "item_desc": "Apple MQD83ZA\/A AirPods Pro (2nd Gen)",
                                "short_desc": "AirPods Pro (2nd Gen)",
                                "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194253397878_JHkEpQKWU7zwzlKKr63py2GXNMfiOl69A2oT5M8L.jpg",
                                "item_type": "I",
                                "in_catalog": "Y",
                                "lot_control": "Y",
                                "price_tag_bc": "N",
                                "prices": {
                                    "unit_price": 336,
                                    "regular_price": 362,
                                    "promo_price": 336,
                                    "promo_id": "CRMPWP000101581",
                                    "promo_ind": "ALL",
                                    "price_savings": 0,
                                    "multiple_points": 0
                                },
                                "settings": {
                                    "item_type": "I",
                                    "ext_warranty": "1",
                                    "lot_control": "Y",
                                    "salesperson_control": "N",
                                    "status_level": 1,
                                    "allow_discount": "Y",
                                    "allow_demo": false,
                                    "limit_options": {
                                        "limit_per_day": -1,
                                        "limit_per_mbr": -1,
                                        "limit_per_trans": -1,
                                        "limit_stock_main": -1,
                                        "limit_stock_promo": -1
                                    },
                                    "item_options": [],
                                    "dimensions": {
                                        "inv_dim1": "HARDWARE",
                                        "inv_dim2": "APPLE",
                                        "inv_dim3": "APPLE HEADSET",
                                        "inv_dim4": "APPLE-HEADSET",
                                        "brand_id": "APPLE",
                                        "model_id": "MQD83ZA\/A"
                                    }
                                },
                                "online_settings": {
                                    "parent_item_id": "",
                                    "color_id": "",
                                    "color_opt": [],
                                    "is_active": "Y",
                                    "in_catalog": "Y",
                                    "inv_type": "CTL",
                                    "buffer_qty": 2,
                                    "shipping_methods": "{}",
                                    "listing_from": "2022-09-14 00:00:00",
                                    "listing_to": "2030-12-31 23:59:00",
                                    "fulfilled_by": "Challenger",
                                    "category_map": []
                                }
                            }
                        ]
                    },
                    {
                        "group": 2,
                        "actual_group": "Charger",
                        "is_free": false,
                        "max_qty": 1,
                        "product_count": 2,
                        "products": [
                            {
                                "trans_qty": 0,
                                "item_id": "0194252192375",
                                "item_desc": "Apple MHXH3AM\/A MagSafe Charger",
                                "short_desc": "MagSafe Charger",
                                "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194252192375_7KHCUReLJiq9JcivD8ME61JJoHkwrih1TG22yOZT.jpg",
                                "item_type": "I",
                                "in_catalog": "Y",
                                "lot_control": "N",
                                "price_tag_bc": "N",
                                "prices": {
                                    "unit_price": 56.53,
                                    "regular_price": 59.5,
                                    "promo_price": 56.53,
                                    "promo_id": "CRMPWP000101581",
                                    "promo_ind": "ALL",
                                    "price_savings": 2.969999999999999,
                                    "multiple_points": 0
                                },
                                "settings": {
                                    "item_type": "I",
                                    "ext_warranty": "N",
                                    "lot_control": "N",
                                    "salesperson_control": "N",
                                    "status_level": 1,
                                    "allow_discount": "Y",
                                    "allow_demo": false,
                                    "limit_options": {
                                        "limit_per_day": -1,
                                        "limit_per_mbr": -1,
                                        "limit_per_trans": -1,
                                        "limit_stock_main": -1,
                                        "limit_stock_promo": -1
                                    },
                                    "item_options": [],
                                    "dimensions": {
                                        "inv_dim1": "HARDWARE",
                                        "inv_dim2": "APPLE",
                                        "inv_dim3": "APPLE OTHER",
                                        "inv_dim4": "APPLE OTHER",
                                        "brand_id": "APPLE",
                                        "model_id": "MHXH3AM\/A"
                                    }
                                },
                                "online_settings": {
                                    "parent_item_id": "0194252192375",
                                    "color_id": "",
                                    "color_opt": [],
                                    "is_active": "Y",
                                    "in_catalog": "Y",
                                    "inv_type": "CTL",
                                    "buffer_qty": 2,
                                    "shipping_methods": "{}",
                                    "listing_from": "2020-10-19 00:00:00",
                                    "listing_to": "2030-12-31 00:00:00",
                                    "fulfilled_by": "Challenger",
                                    "category_map": []
                                }
                            },
                            {
                                "trans_qty": 0,
                                "item_id": "0194253337348",
                                "item_desc": "Apple MNWP3ZP\/A 35W Dual USB-C Port Power Adapter",
                                "short_desc": "35W Dual USB-C Port Power Adapter",
                                "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194253337348_t6yGr3Aukpq2H12Ddd5MwiIRVrpJVk8RAgE1X4am.jpg",
                                "item_type": "I",
                                "in_catalog": "Y",
                                "lot_control": "N",
                                "price_tag_bc": "N",
                                "prices": {
                                    "unit_price": 81.42,
                                    "regular_price": 85.7,
                                    "promo_price": 81.42,
                                    "promo_id": "CRMPWP000101581",
                                    "promo_ind": "ALL",
                                    "price_savings": 4.280000000000001,
                                    "multiple_points": 0
                                },
                                "settings": {
                                    "item_type": "I",
                                    "ext_warranty": "N",
                                    "lot_control": "N",
                                    "salesperson_control": "N",
                                    "status_level": 1,
                                    "allow_discount": "Y",
                                    "allow_demo": false,
                                    "limit_options": {
                                        "limit_per_day": -1,
                                        "limit_per_mbr": -1,
                                        "limit_per_trans": -1,
                                        "limit_stock_main": -1,
                                        "limit_stock_promo": -1
                                    },
                                    "item_options": [],
                                    "dimensions": {
                                        "inv_dim1": "HARDWARE",
                                        "inv_dim2": "APPLE",
                                        "inv_dim3": "APPLE POWER ADAPTER",
                                        "inv_dim4": "APPLE-POWER ADAPT",
                                        "brand_id": "APPLE",
                                        "model_id": "MNWP3ZP\/A"
                                    }
                                },
                                "online_settings": {
                                    "parent_item_id": "",
                                    "color_id": "",
                                    "color_opt": [],
                                    "is_active": "Y",
                                    "in_catalog": "Y",
                                    "inv_type": "CTL",
                                    "buffer_qty": 2,
                                    "shipping_methods": "{}",
                                    "listing_from": "2022-06-14 00:00:00",
                                    "listing_to": "2030-12-31 23:59:00",
                                    "fulfilled_by": "Challenger",
                                    "category_map": []
                                }
                            }
                        ]
                    },
                    {
                        "group": 5,
                        "actual_group": "Stylus",
                        "is_free": false,
                        "max_qty": 1,
                        "product_count": 2,
                        "products": [
                            {
                                "trans_qty": 0,
                                "item_id": "6926934835225",
                                "item_desc": "Valore LA24 Active Stylus Pen White",
                                "short_desc": "Valore Active Stylus Pen (LA24) (White)",
                                "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/f8b8e6d42701df33f8bcb18a08f508c3.jpg",
                                "item_type": "I",
                                "in_catalog": "Y",
                                "lot_control": "N",
                                "price_tag_bc": "N",
                                "prices": {
                                    "unit_price": 36.9,
                                    "regular_price": 49.9,
                                    "promo_price": 36.9,
                                    "promo_id": "CRMPWP000101450",
                                    "promo_ind": "MEMBER",
                                    "price_savings": 10,
                                    "multiple_points": 0
                                },
                                "settings": {
                                    "item_type": "I",
                                    "ext_warranty": "N",
                                    "lot_control": "N",
                                    "salesperson_control": "N",
                                    "status_level": 1,
                                    "allow_discount": "Y",
                                    "allow_demo": false,
                                    "limit_options": {
                                        "limit_per_day": -1,
                                        "limit_per_mbr": -1,
                                        "limit_per_trans": -1,
                                        "limit_stock_main": -1,
                                        "limit_stock_promo": -1
                                    },
                                    "item_options": [],
                                    "dimensions": {
                                        "inv_dim1": "HARDWARE",
                                        "inv_dim2": "MOBILE ACCESSORY",
                                        "inv_dim3": "STYLUS",
                                        "inv_dim4": "VALORE-STYLUS",
                                        "brand_id": "VALORE",
                                        "model_id": "LA24"
                                    }
                                },
                                "online_settings": {
                                    "parent_item_id": "6926934835225",
                                    "color_id": "",
                                    "color_opt": [],
                                    "is_active": "Y",
                                    "in_catalog": "Y",
                                    "inv_type": "CTL",
                                    "buffer_qty": 2,
                                    "shipping_methods": "{}",
                                    "listing_from": "2019-08-21 00:00:00",
                                    "listing_to": "2030-12-31 00:00:00",
                                    "fulfilled_by": "Challenger",
                                    "category_map": []
                                }
                            },
                            {
                                "trans_qty": 0,
                                "item_id": "6926934836031",
                                "item_desc": "Valore AC129 Active Stylus Pen White",
                                "short_desc": "Valore Active Stylus Pen (AC129)",
                                "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/1b5ee834adc95b8fe9675eb7a5e0a716.jpg",
                                "item_type": "I",
                                "in_catalog": "Y",
                                "lot_control": "N",
                                "price_tag_bc": "N",
                                "prices": {
                                    "unit_price": 36.9,
                                    "regular_price": 49.9,
                                    "promo_price": 36.9,
                                    "promo_id": "CRMPWP000101450",
                                    "promo_ind": "MEMBER",
                                    "price_savings": 10,
                                    "multiple_points": 0
                                },
                                "settings": {
                                    "item_type": "I",
                                    "ext_warranty": "N",
                                    "lot_control": "N",
                                    "salesperson_control": "N",
                                    "status_level": 1,
                                    "allow_discount": "Y",
                                    "allow_demo": false,
                                    "limit_options": {
                                        "limit_per_day": -1,
                                        "limit_per_mbr": -1,
                                        "limit_per_trans": -1,
                                        "limit_stock_main": -1,
                                        "limit_stock_promo": -1
                                    },
                                    "item_options": [],
                                    "dimensions": {
                                        "inv_dim1": "HARDWARE",
                                        "inv_dim2": "MOBILE ACCESSORY",
                                        "inv_dim3": "STYLUS",
                                        "inv_dim4": "VALORE-STYLUS",
                                        "brand_id": "VALORE",
                                        "model_id": "AC129"
                                    }
                                },
                                "online_settings": {
                                    "parent_item_id": "6926934836031",
                                    "color_id": "",
                                    "color_opt": [],
                                    "is_active": "Y",
                                    "in_catalog": "Y",
                                    "inv_type": "CTL",
                                    "buffer_qty": 2,
                                    "shipping_methods": "{}",
                                    "listing_from": "2021-02-19 00:00:00",
                                    "listing_to": "2030-12-31 00:00:00",
                                    "fulfilled_by": "Challenger",
                                    "category_map": []
                                }
                            }
                        ]
                    },
                    {
                        "group": 3,
                        "actual_group": "AppleCare",
                        "is_free": false,
                        "max_qty": 1,
                        "product_count": 1,
                        "products": [
                            {
                                "trans_qty": 0,
                                "item_id": "0194253624202",
                                "item_desc": "Apple SFYT2ZX\/A AppleCare+ for iPhone 14 Plus",
                                "short_desc": "AppleCare+ for iPhone 14 Plus",
                                "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194253624202_NSl6dSU0U5TzpCGHCIWcQNYFcbLIPjkFb8AMGIx8.jpg",
                                "item_type": "A",
                                "in_catalog": "N",
                                "lot_control": "Y",
                                "price_tag_bc": "Y",
                                "prices": {
                                    "unit_price": 251.1,
                                    "regular_price": 279,
                                    "promo_price": 251.1,
                                    "promo_id": "CRMPWP000101576",
                                    "promo_ind": "ALL",
                                    "price_savings": 0,
                                    "multiple_points": 0
                                },
                                "settings": {
                                    "item_type": "A",
                                    "ext_warranty": "N",
                                    "lot_control": "Y",
                                    "salesperson_control": "N",
                                    "status_level": 1,
                                    "allow_discount": "Y",
                                    "allow_demo": false,
                                    "limit_options": {
                                        "limit_per_day": -1,
                                        "limit_per_mbr": -1,
                                        "limit_per_trans": -1,
                                        "limit_stock_main": -1,
                                        "limit_stock_promo": -1
                                    },
                                    "item_options": {
                                        "custom_form": [
                                            "first_name",
                                            "email_addr"
                                        ]
                                    },
                                    "dimensions": {
                                        "inv_dim1": "HARDWARE",
                                        "inv_dim2": "APPLE",
                                        "inv_dim3": "APPLECARE",
                                        "inv_dim4": "APPLECARE-IPHONE",
                                        "brand_id": "APPLE",
                                        "model_id": "SFYT2ZX\/A"
                                    }
                                },
                                "online_settings": {
                                    "parent_item_id": "",
                                    "color_id": "",
                                    "color_opt": [],
                                    "is_active": "Y",
                                    "in_catalog": "N",
                                    "inv_type": "CTL",
                                    "buffer_qty": 0,
                                    "shipping_methods": "{}",
                                    "listing_from": "2022-09-15 00:00:00",
                                    "listing_to": "2030-12-31 23:59:59",
                                    "fulfilled_by": "Challenger",
                                    "category_map": []
                                }
                            }
                        ]
                    },
                    {
                        "group": 4,
                        "actual_group": "HomePod",
                        "is_free": false,
                        "max_qty": 1,
                        "product_count": 1,
                        "products": [
                            {
                                "trans_qty": 0,
                                "item_id": "0194253695639",
                                "item_desc": "Apple MQJ73PA\/A HomePod - Midnight",
                                "short_desc": "Apple HomePod - Midnight [MQJ73PA\/A]",
                                "image_name": "https:\/\/cdn.hachi.tech\/assets\/images\/product_images_thumb\/0194253695639_MV8h6Dhzkeiwrs00cDmYtnUhuJypcEIdtEIWxDwk.jpg",
                                "item_type": "I",
                                "in_catalog": "Y",
                                "lot_control": "Y",
                                "price_tag_bc": "N",
                                "prices": {
                                    "unit_price": 399,
                                    "regular_price": 429,
                                    "promo_price": 399,
                                    "promo_id": "CRMPWP000101581",
                                    "promo_ind": "ALL",
                                    "price_savings": 0,
                                    "multiple_points": 0
                                },
                                "settings": {
                                    "item_type": "I",
                                    "ext_warranty": "N",
                                    "lot_control": "Y",
                                    "salesperson_control": "N",
                                    "status_level": 1,
                                    "allow_discount": "Y",
                                    "allow_demo": false,
                                    "limit_options": {
                                        "limit_per_day": -1,
                                        "limit_per_mbr": -1,
                                        "limit_per_trans": -1,
                                        "limit_stock_main": -1,
                                        "limit_stock_promo": -1
                                    },
                                    "item_options": [],
                                    "dimensions": {
                                        "inv_dim1": "HARDWARE",
                                        "inv_dim2": "APPLE",
                                        "inv_dim3": "APPLE HEADSET",
                                        "inv_dim4": "APPLE-HEADSET",
                                        "brand_id": "APPLE",
                                        "model_id": "MQJ73PA\/A"
                                    }
                                },
                                "online_settings": {
                                    "parent_item_id": "0194253695639",
                                    "color_id": "BLACK",
                                    "color_opt": [],
                                    "is_active": "Y",
                                    "in_catalog": "Y",
                                    "inv_type": "CTL",
                                    "buffer_qty": 1,
                                    "shipping_methods": "{}",
                                    "listing_from": "2023-03-30 14:00:00",
                                    "listing_to": "2031-12-31 23:59:00",
                                    "fulfilled_by": "Challenger",
                                    "category_map": []
                                }
                            }
                        ]
                    }
                ],
                    "is_rebate": false,
                    "item_storage": "512GB",
                    "p_storage": [
                    {
                        "inv_dim5": "128GB",
                        "item_id": "0194253749042",
                        "item_desc": "Apple MR693ZP\/A iPhone 14 Plus 128GB Yellow"
                    },
                    {
                        "inv_dim5": "512GB",
                        "item_id": "0194253749462",
                        "item_desc": "Apple MR6G3ZP\/A iPhone 14 Plus 512GB Yellow"
                    }
                ],
                    "color_settings": [
                    {
                        "item_id": "0194253375784",
                        "color_id": "MIDNIGHT",
                        "image_name": "0194253375784_weS8n8CpbHa3PCkoiR5cJMngaFH3y35DHOovavGc.jpg",
                        "short_desc": "Apple iPhone 14 Plus 512GB (Midnight)"
                    },
                    {
                        "item_id": "0194253376019",
                        "color_id": "STARLIGHT",
                        "image_name": "0194253376019_G6slju2xFUp7ssHwct3exTiYwTmwRD57msDD69mL.jpg",
                        "short_desc": "Apple iPhone 14 Plus 512GB (Starlight)"
                    },
                    {
                        "item_id": "0194253376477",
                        "color_id": "RED",
                        "image_name": "0194253376477_92HYbi28pmRSX2PeGSbipiDsW2amSrnFcGK8ChMd.jpg",
                        "short_desc": "Apple iPhone 14 Plus 512GB (PRODUCT)RED"
                    },
                    {
                        "item_id": "0194253749462",
                        "color_id": "YELLOW",
                        "image_name": "0194253749462_NQBpriM5bICXrmTov9F2YdmrhbLDr6U8m6TBwiCW.jpg",
                        "short_desc": "Apple iPhone 14 Plus 512GB (Yellow)"
                    }
                ],
                    "images": [
                    {
                        "item_id": "0194253749462",
                        "href": "#",
                        "src": "0194253749462_NQBpriM5bICXrmTov9F2YdmrhbLDr6U8m6TBwiCW.jpg"
                    },
                    {
                        "item_id": "0194253749462",
                        "href": "#",
                        "src": "0194253749462_KNP0S3YhlLVi95bKLASIQEuQ9DxMrtloEYWeIgvu.jpg"
                    },
                    {
                        "item_id": "0194253749462",
                        "href": "#",
                        "src": "0194253749462_1p9tPqYJRVHpweHEoOP8p0kNCvJAwnTlI7dJENcU.jpg"
                    },
                    {
                        "item_id": "0194253749462",
                        "href": "#",
                        "src": "0194253749462_rKD3VFJfrVLEBEBh2kH54YlZ5UEQ1oc656egr6nV.jpg"
                    },
                    {
                        "item_id": "0194253749462",
                        "href": "#",
                        "src": "0194253749462_KiOKu2mtjRjgjJF1eWHl1cH5bhLhCBPSmhITkbtz.jpg"
                    },
                    {
                        "item_id": "0194253749462",
                        "href": "#",
                        "src": "0194253749462_YyAahsNdf9oCeZluiVwIilEbN3IFor9f37L7DlOJ.jpg"
                    },
                    {
                        "item_id": "0194253749462",
                        "href": "#",
                        "src": "0194253749462_W8ZFFKYT10kAmC7HSqpOu9f3MyOH5Gn9jtPvDDD5.jpg"
                    },
                    {
                        "item_id": "0194253749462",
                        "href": "#",
                        "src": "0194253749462_QuZ77Wcu8tF3cgTnUmnlCZ1mtLFf7XOxrdz9pTbs.jpg"
                    },
                    {
                        "item_id": "0194253749462",
                        "href": "#",
                        "src": "0194253749462_OMxfhIB8lzIgZY0eCY11DHm9yadN1sZq1SIDq1zO.jpg"
                    }
                ],
                    "additional": {
                    "mbr_type": null,
                        "delivery_options": null,
                        "additional_options": null,
                        "digital_restriction": false
                }
            }
            this.price_valid=true;
        },

        async fetchDescription(upc) {
           // const uri = `api/public/item-description?id=`+upc
         //   const response = await axios.get(uri);
            // this.descriptions = response.data.data
            this.descriptions = {
                "OVERVIEW": {
                    "name": "OVERVIEW",
                    "body": "<p><span style=\"color: windowtext;\">iPhone\u00a014\u00a0Plus. Think big with a larger 6.7-inch\u00a0display<\/span><sup style=\"color: windowtext;\">1<\/sup><span style=\"color: windowtext;\"> and the longest battery life of any iPhone ever.<\/span><sup style=\"color: windowtext;\">2<\/sup><span style=\"color: windowtext;\"> Capture stunning photos in low light and bright light with the dual-camera system. Crash\u00a0Detection,<\/span><sup style=\"color: windowtext;\">3<\/sup><span style=\"color: windowtext;\"> a vital safety feature, can detect a severe car crash and call for help.<\/span><\/p><p><br><\/p><h3><span style=\"color: windowtext; font-family: Helvetica, sans-serif; font-size: 10pt;\">Key feature bullets<\/span><\/h3><p><span style=\"color: windowtext; font-family: Symbol;\">\u00b7<\/span>\t<span style=\"color: windowtext;\">6.7-inch Super\u00a0Retina\u00a0XDR display<\/span><sup style=\"color: windowtext;\">1<\/sup><\/p><p><span style=\"color: windowtext; font-family: Symbol;\">\u00b7<\/span>\t<span style=\"color: windowtext;\">All-day battery life and up to 26\u00a0hours of video playback<\/span><sup style=\"color: windowtext;\">2<\/sup><\/p><p><span style=\"color: windowtext; font-family: Symbol;\">\u00b7<\/span>\t<span style=\"color: windowtext;\">Industry-leading durability features with Ceramic\u00a0Shield and water resistance<\/span><sup style=\"color: windowtext;\">4<\/sup><\/p><p><span style=\"color: windowtext; font-family: Symbol;\">\u00b7<\/span>\t<span style=\"color: windowtext;\">A15\u00a0Bionic chip with 5-core\u00a0GPU for lightning-fast performance. Super-fast 5G connectivity<\/span><sup style=\"color: windowtext;\">5<\/sup><\/p><p><span style=\"color: windowtext; font-family: Symbol;\">\u00b7<\/span>\t<span style=\"color: windowtext;\">Advanced camera system for better photos in any light<\/span><\/p><p><span style=\"color: windowtext; font-family: Symbol;\">\u00b7<\/span>\t<span style=\"color: windowtext;\">Action mode for smooth, steady, handheld videos<\/span><\/p><p><span style=\"color: windowtext; font-family: Symbol;\">\u00b7<\/span>\t<span style=\"color: windowtext;\">Cinematic mode now in 4K\u00a0Dolby\u00a0Vision up to 30\u00a0fps<\/span><\/p><p><span style=\"color: windowtext; font-family: Symbol;\">\u00b7<\/span>\t<span style=\"color: windowtext;\">Vital safety technology \u2014 Crash Detection<\/span><sup style=\"color: windowtext;\">3<\/sup><span style=\"color: windowtext;\"> can detect a severe car crash and call for\u00a0help<\/span><\/p><p><span style=\"color: windowtext; font-family: Symbol;\">\u00b7<\/span>\t<span style=\"color: windowtext;\">iOS\u00a016 offers even more ways to personalise, communicate and share<\/span><sup style=\"color: windowtext;\">6<\/sup><\/p><p><br><\/p><p><img src=\"https:\/\/cdn.hachi.tech\/assets\/images\/product_images\/0194253408260_c4GXOKEpc4aq4DaJJfjs5VZWdee7bI8pNzvksby6.jpg\"><\/p><h3><br><\/h3><h3><span style=\"color: windowtext; font-family: Helvetica, sans-serif; font-size: 10pt;\">Legal<\/span><\/h3><p><sup style=\"color: windowtext;\">1<\/sup><span style=\"color: windowtext;\">The display has rounded corners. When measured as a standard rectangular shape, the screen is 6.68\u00a0inches\u00a0diagonally. Actual viewable area is less.<\/span><\/p><p><sup style=\"color: windowtext;\">2<\/sup><span style=\"color: windowtext;\">Battery life varies by use and configuration; see\u00a0apple.com\/sg\/batteries\u00a0for more information.<\/span><\/p><p><sup style=\"color: windowtext;\">3<\/sup><span style=\"color: windowtext;\">iPhone\u00a014\u00a0Plus can detect a severe car crash and call for help. Requires a mobile network connection or <\/span><\/p><p><span style=\"color: windowtext;\">Wi-Fi\u00a0calling.<\/span><\/p><p><sup style=\"color: windowtext;\">4<\/sup><span style=\"color: windowtext;\">iPhone\u00a014\u00a0Plus is splash, water and dust resistant, and was tested under controlled laboratory conditions with a rating of IP68 under IEC standard 60529 (maximum depth of 6\u00a0metres for up to 30\u00a0minutes). Splash, water and dust resistance are not permanent conditions. Resistance might decrease as a result of normal wear. Do not attempt to charge a wet iPhone; refer to the user guide for cleaning and drying instructions. Liquid damage is not covered under warranty.<\/span><\/p><p><sup style=\"color: windowtext;\">5<\/sup><span style=\"color: windowtext;\">Data plan is required. 5G is available in selected markets and through selected carriers. Speeds vary based on site conditions and carrier. For details on 5G\u00a0support, contact your carrier and see apple.com\/sg\/iphone\/cellular.<\/span><\/p><p><sup style=\"color: windowtext;\">6<\/sup><span style=\"color: windowtext;\">Some features may not be available for all countries or all areas.<\/span><\/p>"
                },
                "INTHEBOX": {
                    "name": "INTHEBOX",
                    "body": "<p><img src=\"data:image\/jpeg;base64,\/9j\/7gAhQWRvYmUAZEAAAAABAwAQAwIDBgAAAAAAAAAAAAAAAP\/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQEBAQEBAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD\/8IAEQgDIAMgAwERAAIRAQMRAf\/EAU8AAQAABgMBAQAAAAAAAAAAAAABAgMEBwgGCQoFCwEBAAICAwEBAAAAAAAAAAAAAAECAwQFBgcICRAAAQEHAQYBCAgEBgEEAwEAAQIAEQMEBQYHCBBAITESCQogMGBBMhM0FlAiQjMUJBU1IzYXNyUmJxgZOaCAkDg6sEMoGhEAAAUDAgMDBwUHCwoQDAQHAQIDBAURBgcAITESCEFRExDwYXGBFBWRoSIyCUCxwdEjFhcgMOHxQlKysyQlNVBgYnKCM3M0dCZDU6NURXW1NmZ2tie3GHgKkqJjg0RklLRVZaV3oMJGN4CQ1JWWR3kSAAECAwIHCQgNCQQIAwkBAAEAAhEhAzEEEEFRYXESBSBAgZGxIrITBjBQ8KHRMnKzYMHhQlJigpLCI3MUNNIzY5N0FTU2B6JDU0Txg6MkpCUWJqBklICQsNNUhLRVZXX\/2gAMAwEBAhEDEQAAAPdVsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgyHlSh7Jpfn+Q9\/cvJwbC1Zfs75ZAAdQ8OzmXkcq9k9lIETwt43uqyKAAOkSrvJl4lYe1ywAAacw8MB96HoCPSLYAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVh+WTD9Gg\/Jhs\/Ueq8Fp62IefyWSz2ry6UIdJB6pz86eXrEq1uluqdcB7D5bhy8oNW\/51TGo57kJamH5c5+hHV4lZdtZ6AZdhp46odvZ6dLOtOHkbh7\/Yflny\/S8l4tYbVnbEZ2l1Ww9J0soyAAAAAAAAAAAAAAAAAAAAAAAAAAA\/PEhvVDJZhiHWbL0znVTLsqhqEc7hzWXTnLjJ7oDc0\/JsPZHV2Ly7T7Py56u+WG2MtBzt7O\/qz8tWr9T8\/JJP1Mz8y42uO+2HlEl+mrLWM\/OHO1GHKznp6XTz+S7M4eUA7Rz3rWQAAAAAAAAAAAAAAAAAAAAAAAAAAAPNFDwoH6+MPyaZetw2dhrJLsPOi2HSTD1rnRVZZnuKhtpZ5e6NTJY\/PcfZ+XPV3yw7cLOsuG7B6H7PyyKv1UD8uI\/UOl+WVDYs9WEOrqHrYu0xPILD3tS\/LAh21HqiPP1Lshh5aDsWPfHYAAAAAAAAAAAAAAAAAAAAAAAAAAANf4eY2Hrys8qlXfLLAcMTS2ZNIodRBz2G0MtszrnPW\/Z5HqtET1lS7A5eRursRN0ZapQz4dmdnl7qzoaZnrhl5CoeguXj6h2OnrPs1Vh4vYW53rncPLxdQ2eO1k25l0vw9O0spyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEyOMcTsWXEZ7+l5L40oggCIIAiCABRiYchi5XzetNYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAImtfgXacS\/LPc8m7GCTitpXNJlwJV81fvcphoYM0mGZMV44LU9aZcN7XWvT17yYLy4FLFeGvNrkx8S7Fqcm+kup7c\/VfSKl4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGrPzt27CP5xetX\/P4uN9r0bzksOe+6cd9baxoSUni3T9\/lVK5b9A4y317yaWalx2S20Mlno5JNPPRwWlwRRwWpaeW215tsbjuzgxv9P9S3r+1\/OYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkq6z\/yV945rw235ePqTpHlX+zvONp89fRN8nd89YPm3Nff3cXF+28f9Hcpdeacx9Xqe3kzvfHW+nlo8dktuLz2nH5bbQmnrbdPBEutFLWy22pe2xLaGCt3Ft9+ovjPOO26AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4J03kNCvx+9\/xv7NwH5N36h+Ic97TxHYjevGOtcv+g7+b\/svZRy+riX6O6pY452Z8Z57gnj3ObBeq8Nb8bkttDNb8TntuNyWvH5aGvsw1q0teaerkt9W9tjW8LXcwcV+6vOtr\/onqIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw35Zzmqn5T+5afewcF+UH+pvhWzvZeE2M3cF70rsfvZ\/Nr2juh5XBxu9oQ5xv63yuhchn\/0vhrTjc9tx2a24nPbcdktONyUcG1LqVo6809fJb6t7fGoVSTTHf2557uB9R9KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGHPJuxa2flt7XjL0bi\/A99b+f+bD6p6DlGJ9Ffz\/2\/wB0Xw36htx6fwcM+KpjtVyRZ9L3Ng\/TeGtONz23HZLbitm143Lacbejr7MurFLWmlrZKGve2xreFOteFfbvQts\/qTogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwp5Lz2u35e+18m9p6\/wBdfl3Yurz0rhPhbWPta8t5\/bzvHC+Z76V6V1x9z47uk8v5v0n+ecvf9R3NiPUeEteMz2\/H5LXitm243Lacbejr7UmrWjr2k1slrrWoY1vCnFcd\/bXnu4X1N0kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYW8m57Wv8AMH2rK3vfWMZdN5DE\/C7tKJzB2PR8cf0Z0zzO\/YnnH0OW0fk8FyXtu+E\/U\/Sr47zuyfrPB2vG5rfj8ltxOzbcbltONtR1tqnqxS17UtbJba9qGNbwp4648+3vPdwfqXpIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwr5Pz2sn5ce25l+iOp8d4PZ0e9k63vx5Vz2N+D2vzZvtfzbWj6O8cz36FraV9H7f3h\/Enqnvg+SO97ce39atuOy0NDJb8TsWvG5rTjrUtXapa0U9a1HWyW+va3xqFFKK47+3fPdwvqXpIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwv5Pzusf5Ve45l+ger8fxTq1yFdtMEY+4Lc8Rvu3VvKp9peZ8s5TU4lxO57rvzx9h9OHjfPbne89VoaWWjoWt+K2bfjstpx2Shq7NPTilrWo6uShgtbUUdaKU1xd9sdB3N+rujAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADD\/lHO4N\/Ln2uhkv932frjJFOs\/H47L18dB5rzFfTvR9B\/TOD7fPDu0+gL5u7l2iet9azF6Jw8mlmo6M0OM2aPH5LTQyUNLPS07UNPJR1b2+GbbEo68Uprr59QdT7AfufzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYd8n53Df5ge01uubvCL2+z3vjL3cx2mC2OeD28AcVtcMuyFjrvJ631vYv1\/gKGpaXSy0dGaPHbNHSvb6WW30bUNTPQ0L0NLJbYJt8C3x3powR9YdJ33+1\/OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhfyjncQfl57RzRlttWeKcTs\/G070sdp715L2\/j81\/QfUuW9q1pqKONDVtT0ctLSmjo7FHSyUtW9tpTR09q34+1vx2S0wWt9a9tE05rwH7j833B+o+lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDflHO4Y\/LX2rmt71MgCAI5sOdfq3pFLHklxxRxTDUvb6mSXQy0uPy2+rlpas0NDJR1M9tx+S34+1tr3tde9tWac1xn9p+ebo\/WvRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgzx3sGJPy69p5ollkiAhLWLPjM2aPpjp3IO46MhQ15k08tHWtJoZ6XHXo62W307UtLLR1Mtrx2W30LW2vktte1rhmlNcVfYnQt3fsrz0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYC8F7Riv8AMz2Pl+HLC8SqwmRJS0uq5n6Vw+V\/oPq8pb4Jk1MtHVtT0NijxuSlp5LbUmlo7FLUtacdmt9C9vrXtde1tVSmuKvsLoe732Z54AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANd\/n\/tWMfzR9h5doZZRIQJYRhUyxsD9g9Cq7NbfDaTWyUNW0unlo8Zmt9DLbcfejobFvo3t+PvQ1cttqWtME0KqU1xf9kdC3a+yPPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrn8\/drxp+ZvsnLdHKxkTCYgU5mas1ItlH6A6pzX1Lg7euaGsoasyaexS469tx+W343Lb8fmtePzUNG1HUyWutNvr3oYLSWrjf7p823Q+r+igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXT587XjP8y\/Z+X8dniQEISpQlJ4n73atDNP1X0ejiy0taJNa1LR2KPH5LfQvb8XsW+hlteOyW+jkoa1rfWtS1di2pMk0xp9vebbqfXfQQAAAAAABOYp4PZ5ptU+\/yWEAAAAAAAAAaq2xcXzalzjzbk49oAAAAAAAAAAAAAAa+eBdpxT+YHtXMdPMpMMUiBRIECerN\/1t0b6vO6lvrzLr5KOlno8dkocfa243ZttDJb8be30stvrTb6mWjr5qEJFcV\/Z3nW732Z54AAAAAAALqHX209iJyZybAAAAAAAAAA1Hth49m1bvHm3Ox7QAAAAAAAAAAAAAA178K7Pin8tvbOZaWeGKQhAoklVMmqyB6\/wOSfc+s2+C0mvnpaF7fQzUOPm243ZttDLbcbajqZbbTmjq7Fvhtb0mVTFf2h51vD9m+eAAAAAAADgZaoyXWadkAAAAAAAAADHqMlJ+VC9kAAAAAAAAAAAAAAMQ+V83gP8AJH3nmOjnlwSiURImkU000wh9HexZ5+xPPZaXpaualoXoaGW24\/LbcdmtuPzW3HWo6d7fUvS1Ni3xTQqlmmNftbzjdf7H8+AAAAAAAHAioZJqsLIAAAAAAAAAGPUZKT8qF7IAAAAAAAAAAAAAAYc8q5zA\/wCRvvfMNHLLr5JQSpkqt4UIIVTMH0p07lPoHG0dTJQ47LR1LW\/HbFtx+S047Jb8fmo6ajp56Orko45oQTTHP3j5huj9WdGAAAAAAAHAioZJqsLIAAAAAAAAAGPUZKT8qF7IAAAAAAAAAAAAAAYb8r5zBH5Ee98x4\/YoYLQIApQoRNCFIqw5f6BxeYPpbqPJvWut1NvFwL5z7nb8bsW3H5LTjsltoZqWpFLS2bfWtJSaNUZpwj778t3A+o+kgAAAAAAD4Jw+GQIX1gAAAAAAAAA+EWNX2pfRkAAAAAAAAAAAAAAMOeWc5gT8hPfOY8Xs0cciBAolGihW0kTNWcH+g8FuZ9a9KzZ7R1jjvnHN8a8l7BZ8JtW2jlteNyW2hlo6kyaWxb4JkxzTw3mjHwT9A\/K9wfqLpIAAAAAAAGNocqPvyAAAAAAAAAFUxJRkGz6sgAAAAAAAAAAAAABhvyvnMDfkB79yzjNmXBciSsU5tJE0YUIS1nrc+nPP\/Ld+rHifqJh6IMVo5o4d86dvxl8d+jWuhnteOvbaN6Oplk0ctvhmGOZNfJG1OCfoH5TuB9RdJAAAAAAAAxnDmR9qQAAAAAAAAAqGIqsky+hIAAAAAAAAAAAAAAYb8r5zAf49\/QPLuK2ZcNqcJCWFKFKEkFXlI\/WTwLrK+l+obgn6CsSsxB+c\/sfyejcnbaGa047Jb6NqGnlk08tvgljmGDJGcfAf0D8q3B+o+kgAAAAAAAY8muQItOAAAAAAAAAAY1VyStEAAAAAAAAAAAAAAGG\/K+cwD+Ov0Fy7idqTEp0iCZIU6xJW0Imdfya\/q14F1E\/VPS7Q9\/1bdkdmOvhj1Dj3ivZrTQy2vHZLfStb6eanp5KOCWOWDLGcfAP0E8p3B+oukgAAAAAAAY4RkRM4AAAAAAAAABjFXJq0QAAAAAAAAAAAAAAYb8r5zAX43\/QXLeH2pMNpFpItSTJFpExhUh0r\/YHmXjs\/UfxazPR3E+0Neh1bcx7+avtFrp5bTjc1vprfSzUtPLTwSwXhS004+AfoH5TuD9R9JAAAAAAAAxorkhM6QAABZIpExXTWJwAAAYuVygtEAAAAAAAAAAAAAAGG\/LOcwB+NX0PzHhdmhXLLWaRIU4S1T1irRSth8Ef7I\/OXWv7l1\/f\/AKTt\/o2ehan3\/iP0v5Pg\/a7TRy2nHZrbQUtHZt9K0NbJT17yUVLY+C\/oV5PuB9RdKAAAAAAAAxjNclRaoAAWpxma\/ERBEEyiJkL455FriQAAxVNcpxaYAAAAAAAAAAAAAAGG\/LOcwD+M\/wBEcw4feoUSwp4YlqpRECaFSJVWOTD8Hdwc347b5z9MdN5X3zUocda00Mtrx2W30LUeN2qOnaTSy0tcoq3xcE\/RHyncD6i6SAAAAAAABixXJy1UAicTmvFFYJnQLcpE6akTZkTlRzpaIAMTq5VWnAAAAAAAAAAAAAABhvyvnMA\/jH9Ect4nepEdeKNYliaNEsTGtorTJprTIrRH3+48bkv6h6Zb8fltdDJbcdloaF6PG55NLLS0bS6+WEZJ74uDfor5BuB9R9JAAAAAAAAxPNcpxaqCJjua\/DVnTA+kfaib9NQ+KfCmPikpUPpmWItMAYimuWotOAAAAAAAAAAAAAADDflfOYB\/GH6H5bw29ThHHFGFPHajTJJNoJEakQKllVOVPqbo9xyWC24\/LQ0bU+Pz2+hkl0ctLRvDHnhBbFwn9GfH9wfqPpIAAAAAAAGIprleLVgY9V4xMViqZAi33kgACzMMTWiTn2TLkWiDDk0zBF5wAAAAAAAAAAAAAAYb8r5zAf4v\/RHLuD3KJCFGJp4bUpzSEIKIY4lpAnlPlnlfqvB8w9a4GjpWpaGxS0bU9PLR0Ly6uzLjU8UTsXDP0i8g3A+o+kgAAAAAAAYbtTLtb1zi6MYzS6TdGVoteJAAAETCE1+SiMsj1tzxIwxNMxxeoAAAAAAAAAAAAAADDXlXOYF\/GD6I5bwe5RhCs2+O8q9JaSEBiiTFEoBVsuN\/Hk76X6bT081PRvJqZKenenpZpdfJT14hCDHw\/wDSTx\/cH6l6SAAAAAAABhaaZhi9yYJmluiJmyL\/AEEgAAACY12tSgRNha3uDCU1zTFqgAAAAAAAAAAAAAAMOeWc3gP8Xvonl\/BbtKk0cdqU5KZImmQhHHEuKKcAJ5VJc19p6\/8AV7JpS6mSTVtT08sNfNT1IlxKePJLanFf0r8a3A+o+kgAAAAAAAYPtTM9bcFljJS+MoxbmKwAAAAA+ejXW9ZIc8icwxbBtqZtreqAAAAAAAAAAAAAADDflfOYF\/F\/6I5dwO7LSaFMtOZopkKUFUcUQrEsJSJUlGX1O06XMfWOEpatoaeZiyS68U9ZJiyUsV1cXGP0z8Z2\/wDqTpIAAAAAAAGCbUzXW2EbV+UiZOxFb1AAAAAADAFq\/HRObH1vgq1M61vVAAAAAAAAAAAAAABhvyvnMDfi79E8v4PckxqMZqS1IkKUJYibXiSFMqExESXc59o69XrkkxTLiQwxJr3kwXp0U6047+nHjO3\/ANSdIAAAAAAAAwDamc621SvjvInMcWyTFgAAAAAB8ZGpd6\/YRs3S+F7Uz5XJWAAAAAAAAAAAAAABhvyvnMC\/i39E8x4Tcp45ki9vOSQpkkJKwwQhTJyIEppff7tofY7RosSGO0uC7FNPGpYpp1p8D9PfF9v\/AKl6SAAAAAAABrzavNDCM0+7E7GVv9dIAAAAAAia02pwy0ZopPFpbB1tWSAAAAAAAAAAAAAAMOeV85gT8W\/onmHA7klZkXoTklKJCEtEmKqoQIgSiXO9j5b6XxNLBka6GFLjS0mmmnWvxP1A8V2\/+pukAAAAAAAAa52pXOIzF0bRUvXSAAAAAABrXaldHyZXUTspW9UAAAAAAAAAAAAAAGHfLObwB+LP0ZzDgNuBTnLSWlRRiUGKJKRLCAAJpTQmPv8Ae+NutrHJimWloY5lraSFClPm\/qX4lt99SdIAAAAAAAA1rtSgfFmtdO11MgAAAAAAA11tWVXjUvpROz9bgAAAAAAAAAAAAAAYc8s5vX\/8WPo7mPA7cE0pvTTJCnWI4zHECBASgRhGSES85nB9bsWrLimTGlrMlUlVLHFp+qvh+331L0gAAAAAAADWy1OPFOayp28pklAAAAAAANc71hFOKTNwbY0yQAAAAAAAAAAAAAABhzyvnNffxX+jeW8JyECSEpJSGOFAgACAIEQQvH2e2aMKSxXlpMKzTi1GkSfq94Rt59TdHAAAAAAAA1wtXgM1roqp3CpkgAAAAAAAa42rcxXhNlY21pkAAAAAAAAAAAAAAAw55Xzmvf4rfR3K+E3xLWJMMKoAgCIIkCUgSgF9y2K42kKoEsKcKOKs36yeD7e\/U\/RwAAAAAAAMGWrgq1fpxF7LcXHlnAAAAAAANYb1va1xFdnms51rcAAAAAAAAAAAAAADDXlXOa8fin9Hcs4LdVQqkJCABMRJiAJSUgAVM8fS5PHCpWJKqcLbArfrd4Nt99UdHAAAAAAAA4wjRnLS7iOUQ3Kpk+gkAAAAAADVO9OIIt5bXUtzWLAAAAAAAAAAAAAAAYY8o53XX8U\/o7lnAbgkIAAAiRBAgAAC73aQmZKqa1OJlw1u\/wBc\/AtwfqrowAAAAAAAFU0qvjxXaLw3gx35xFgAAAAABUNGb47aX2Ibe0v9ZIAAAAAAAAAAAAAAGF\/KOd1x\/FL6O5ZwO4JCUgCcnIgAAAECBHJMLo1ISwlxUuv158E3E+q+igAAAAAAADT++PjxbHJTcWmQAAAAAAYymMHTSylOncilwAAAAAAAAAAAAAABhPybntcPxV+juV8BtwBAjBIVCoAACBKCUgRIkCBAlxxc\/rz4HuT9W9FAAAAAAAAGtlq4umvz5XCN08eT7KQAAAAANX7U4BMcsMnVnMsXAAAAAAAAAAAAAAAGE\/Jewa2\/iv8ARnK+v7aEtUqYzE8ppTE5OASkpAlIkCBEEASwlxxd\/r14LuV9W9DAAAAAAAAFA0yvj41KCOcRO39Mk4AAAAB8BGomSk0PrG11L\/USAAAAAAAAAAAAAAAMJ+Sdi1s\/Fv6K5N1nbJhAJTlW0RlMVCJAlJCAAABAFOEMcX369+Ebk\/VnQAAAAAAAAANS70+OcbRGWfKTnOLgAAAC2OuzJj5HEZei3MIZri4AAAAAAAAAAAAAAAGHPL+a1M\/Ff6N551HkQIEQT2irZEmJiUgQAABAAFKqeaUf1\/8AA92vqTo4AAAAAAAAFuaT3p8aYql2jO1bZwrecAAA+KjR3LT6lY5\/W1SY2erkrgAAAAAAAAAAAAAAAHDuv7fXp+HH0vmDoHLRJARJiJWvE8hEgACBEgSgExAo0fC53Vyb+yHz3tT7x1YAAAAAAAAAY3mNcLU4bL6pfHIIbO0tyZacEx8lGMJjX21fiTGRK2+jDZWLfWSAAAAAAAAAAAAAAAAJzq6\/Lb27L3xB6VPYIAnKhMVbxPIASkCUjCUlgIkSWJpwwF7d1ntB\/af5y+zyOIAAAAAAAAADFkxq\/enxkfdia0r6H0T6CfoFpD56ODSuTn9Z+0bFRb6SQAAAAAAAAAAAAAAAABh\/z\/ltAvyg90zt8+9rjhvGUQTlQmlUmJiEoVSphCAIAgQBMjDHpfCbKfq\/4btf751UAAAAAAAAAAD4aNXb14JNcvVnH0iPpJgcVJEfMPsTO0OO2U1oAAAAAAAAAAAAAAAAAAA4p1vc04+W+78W8E7VR6puXtLTTEZRmIkZiUqTEqYwlJaWEITQq3vYIo81rfc9n65tV9V9Gy16HxAAAAAAAAAAAAA+GjB1o+OizmLeF6WKa8TmJOU4mUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEThUPpHIpWRegAAEx8w+kfIh9aXHYffLOV+AAAAAAAWRdFmW8LIviqfRkLOHHDl8okAD55WPjnIizLknAPmFufbABMY\/hz+UCxL0sy6JwAAAAAAAAAAAAV4eH2jFNnJYY8PW9LreOws63jtXl1MQ72ZdU9XUlLt8PNZV+grd+bhDe2HJbPWKa\/nWpD0MSyjIAAAADy\/1d6EvMfVosdgUNVpcCPbZZsHLwRVbFw9XFnjQq9NcsAnerLxdw9RkusSrGstBYbESzCYwMtGwBgAgdt0upqHdBLyv1ZmN7TXCWrxuAa+Q7aJa7HoBsgAAAAAAAAAAAD6UPzj6s9nbWYxOqI7xZdGB3rw828u0iG\/svTHLxvVdWJan6Itn5xdXonOlCz0JVdJ0sh1ehWzttsAAAAA8y1Xc0eZuG8x0hmSJZohvwZwh1K2erSXJjy9VY4OTy9hh42z0fH57Z7xoeJyHsls8xNXZbLfuXlJq+TZ65IePGXsphCzpOq9qdnmWq0hh1PXe3CrwNnYJLdGr2QXc9kAAAAAAAAAAALmHnJh2US3LOvIxjDrehu9Lcg1WNBIdyVnZPLpuq7bZdQFXc1Z0xQ7prOjmHXZVuHZqjV36WblyAAAAAw5DyyVdr8tQDHUNj5azHpRllyXnqq0\/h6vbug+r75r3D02WePiG8ZrnDo8h2Yy9VdnWJDWuHcvZ1DVWMu5c87tXSpL2MWfQOmCruEl12w5nZiKrck5zLSyHqKunAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALY0jhvRKQAAA+Qaew3alAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH\/2gAIAQIAAQUA\/wDBnPLkx4BzAvHNnsOB8knY8EDyObDl5HUz+HIeUWcG4NxH08eI5h7xwYcG5Bi9nFgXs8lnFn8ByLwxZ5OwHZzZ724txYF7FncDwHMcWBIYl2x5Gw8y556XHkS5g9uIbmQSzyWHL6XDDifWeZY8zxLnEji97Ocx5DkBxIDuYYcdn2Rzdx5Ec2+z9n1EABXIM5g9gx5kuZ+wcWc9hwLm5tzP0x6yAzvq825k8\/X61NyHBjyHIEPLOZ7ci32Rz9Z9oc2+z9n7J5K5BgEs5gx5n2nsOQLAuYc38RwbkfpghuJ2cQwDEFg95e3EtxDOLcSxBfzLOI2AbOLOIYPYgvAOziGc9uLHiC8sQ\/Y4nYWepuLOJYh7PLcSziCAziGH\/gLTNfoUkn58s0sjIVjRT8+Wa3z3Zr\/nuzmN9WcG+e7Of892cxvqzg3z1ZxY33ZwY33Zwb57s5jfVnBvnuzW+e7Nb57s5jftmBpS6LanwhSYiPQ3JOeKNZ05MZOuO9a\/MQLBpaDU8XvhzWKoavx+Mm\/HYyIhRcbRzDodtzENVHoqWVSaOyqZSWXI0oMqVpYKpenMqBTwy0STH8KGMSWSypqAkKnoIZFVgpTRb1rlFXZWo0om4cSHGh+hWe8ozlo0+qVsqFGsxSmlJO3pYpVRIbSlmGag\/Ik2G+RZpothTC0VCyY1OXT7rmpGZXAIZcJ7RYLRYLmiIaJDcxDLSSGUOK0sQxALSk0qXTgLJEzQav6ErWiGjKF3zFz3BZdISJfEOIYd\/SdKplMoErPy8vU5fJuIvkeVk68Z2Wgzk1GjUmSq9XNQgz9JXeFpyseWsKpR2iQw5aQ0ZADRUuMVL2ihjziDivnE4qU5+yCuKqUsO5Bd9nehGRJ+JTLFudUYrNKM1MydOlaZLKRCkZSLTo6qUpCYcWYpSLSvZcZctK0VQg2xcpEaz6TP\/jpGfhGiZCiA9UQcI\/ONzi8ovMllOKl+0r2jsU8CnRDCqGmWaUrHnoRm2MYGKaggxbmlawii3j1oRMLjR\/cTFSAt5b5iYvKsy9ZzA4RoNAyJXLShV7IFcvGHTyIBvb+Zo\/CIvlGaNziuaJ7Ww818FHZxaEShWmBalUz0IzmH4qmUpN0XNKdMTA2Y5GrU2FHmZQxpmZmmzRmCQsSl2zLum4cOKtSpRMwfdIl0yiv4t7n\/ADDM\/eL5R2jc4rReewvYseTO4If0aXwkSHoRnQPxStJNw3JKJjojwOk2\/mTJttS9azhlOuS8NBWullNKg21p\/uCrQV6a8XGHeeHL1sqWo1Sk6rAvb+Ypj71fKO0f2orRPaOz1MeTB7kuCdLgdT\/QjOXDFR\/fJ9PUJqlojGLRIyTDo0YmRpUtKJ02WpCqUamUuPU4kGhS02ZmXmKfM5jtmVsDI94ROu4pg\/xF+zHaPzitE9pWw8ix5bAeGl39v9CM5f2rmIgg1aoBzQ0kqtvHFTr9tx4cJMWtxDDp2ADCOH6XFWmjYprAlb0vtMsmrarlQRa9XmDN3TGL1r5R2jc4vKLzWSAWPI8GPJnvZKg7S7+3ehGceGLK+FOkKnCrNIhEJiSl0X\/Q6eIYgwq9xldMF9ysquUnIsmpFZhwVRo0xPzGer7k74vm3E\/rN\/K5LaO0ccYgDRQyhsV7K\/ZPIsS8p4q0wz0pDg+hGcf7WT8IR49i3MqkRkGHMBMWKkKiKafSY0vGQuDGsvU9XabLRNUeO0wciagrrvKUm6hAlYGMrej0+nL9iI0do\/NYe0RILKZQIMT2V8jyWXJZPtac1q\/qJ6EZxHViyaATUKrSvxDUu8apRlSuS5ZaTkiTZeRpVTTl3SsdX6+FH9ailMCNUKvFtbGS4MZZKmiFyYhLRmi81DhES0RPGIl4iBonJTRebDnptpE9Gu\/0IzgXYtnFf4hzEaUhRhGoEmsqtuWb5cgMmgQgbUtSNW6hT7GtKThQIUGVhEvKzwic1HhF5xSOo8l84rgFuctz4hY81c2HtaXS+mehGcP7W1BTqklXB4Z4bhseA1FrP6FcRcCpQ2L5rPFTROIWWVyUeMVohcIp4L5qJAYrAZKgTphnYqZj0IzxOycvjOpF1TQtw94G96G96G96GVELply2sCsGs2tsUWXwSs8IpcFngo8V8oh+tFP1Yp4K5rIcpTgyfa0xqPzT6EajY0SHYNVJ\/UUxeHvAW6w3W3vAyooZRecWVf8AA3BsUOKhwWHiKOC0kNE5RCyi8xTxillcll5UXlh7WmQg3X6EakCPkeqn\/EXkN1Fupuos8s9+yBMx5KYkZ6BVJFlcVLd1KAaKGipDRQ0YuZZAERTRVPZZZZ4MVpDBSSrTGg\/MvoRqQJFkVUuqqlBLFZLdRbrU4LIJiEgrUWKiWxJWfxVGUoliQAouZTRS0Y8Yh4Ri0U8IpLln6yzwiclqcGT7WmGQhLR6Eakv5IrBdVSST5HNiQGKkgWPW00O6VJKVRFMs8FloheIp4xC0VopaKWUeC+az9ZZeph7WmGcjCf3Gp3LQKNHpdYpdcl90QAV9CWiJSnf9RwfY1YLqsylOZ5fy8lQ6k2fWxXrZJeVHjEVwiFohaKXCKeMbnGPFTKLiouGwc9Maj80bgeUWnyEyUSsrKQ90QQF9aGiqSd\/1DQVx7ErR\/xYKenn5DwxWG6w3WX4irIhTyzwJcIjReUUtGU0Q8YpeYpZR4rLkxC4EuHNk+1pjH+adyHt7sfa37NnV\/TCuF1YB4KU8v2vZ+wqAFKq0Wi1MRoUwhTRDxiHjEL2jHgstFLLZZIEQsvmrYOemGEo17cvt7sfa37Nr\/6YV1Tq11fVKwD1hutvecOssVEs87cXVg1O2FKaIeC4iVKiFo5c0TgIxaI0RoheokPPNhz0uycqqR3L7e7H2t+zZ\/bGvn\/Gir6mx4Z4Z4bqZ524zrH6VdSyQMY4zg3YnO5otMhxC0fnFaMWiFl+0s8fVsfx0t\/su4kuYcTuvVx5nfs1f2yr5\/xoku8h4b3iW95w6y7qU1mYryhkCDU7TvajSFAytKSltVfGmV6xMz8nO06ai8TFLRSGWyua+R5N1lkn6+lx\/wCibjx6hu32xy37NfDGVwF1eUpySpRPWpnlnnY8BipLdbaYMMyOU7mSEw4J4GBLy8qltQFatVFLiFohaKeK2WXMsuCuSi5LI9rS3+ybiQSRy3Vx6hy37Nn9sbiV\/j61vHWWKy3WW6lM87HhitIbSFSpen4KY8QOISAVX1UZirXlE5xWinivnE9lfJTL9lk+1pb\/AGTcRu55b\/msuxlcav8AH1qDutLe9DGIG96XlaixUTt0aVxFUwps5EFxzPZ81a91RDxitG5r5rH1V8lMv2WT7WlsvonoRmz+2NzF1wxCCNj2eG6m6izzs0ZZBg2zkXYdl8VGjUizyFdMVozL5rU4LLEstT9ifa0tfsm+8vovNf8AbK5j\/mBieO0qAbrSxiN1qaFGjwI2n3OdOzVb1ZqFNtyn0bLWJrjqESFEgpzPkiDeU\/E5xWjc4jRCXqJZamUtupTJUSvS5+ybj6vLd5JLcCzmf5fq3\/NZdjK5lf5ifwYkAGISxUo+QVB3Xxl5uak5mr12u3DHKURE4tu+r1i2Y3KJzitFc0Vop4rU5lqLKiAN71TQoh95pbP+B7j6vJd5fF\/BnODOI8r1b\/mz+2N0F1ybFK6ixLm62Ky8knyrErn6FdMdRCoi2irc0RTmiqc0RTRFNEURseGhq\/i6W\/2TcfV5l\/lcC3ssU+T6t\/zYXYxur+ZELAClv2qPHyCoBisBgsFgXhQ6k2xWv123oi2iLaItzRVMstEVxUXkl+xBdE0tkmibj9nz\/A7HFLEOO31b\/mx5xjdX8y7SelhtLKW4qV1HYCQwUCMX1f3U3EW9oi2ixGWpoimiKLiWUsBjEUWhF0XS1+ybj9ncAXs9zeyxHSdh9nf828MYXT\/MuwqAJeT5CwoeSCAaVUY1JqKo0OKmLEcIi2WpzLVxWrqKldIJZ4DIX\/E0sl9E3EcvIf51\/UBxSOKdn2Ry37Nf9srp\/mUsryjxZS\/Jc9nB1k1UTlCiRHlawy1tEWyiyj1FS2DILl6WX\/oW4jkw3B5DEuJ+qVBxb7O\/5rccZXSf8yvZbj5JYjifK4kWdUPwNZWtzLiOZcR7FTRDwUpzOZURkqPVpZd+hbiH9Leo8AeHn08WHFPtIb7G\/wCbCRjG6f5lcAFc\/JISWPDyn8ErUlpWoJnpJa3sSylgMpTFlLKtnU5elkk0HcRyLEPVzUfP8jyWBxb7O\/5s\/tjdZPzICXP4eRxY8EnygXEkutSdKoSojEksVspYBUsqYqAYqJZ7jpY\/YdxHsp4qHMctwPFBP1lBxHFO\/wCbH\/0xuv8AmQKLvJ5lSikKd5Yc+mzQkZ9aw9cRlRCQVsVPbqDdTFRbSv8AsO4p9lPMeyeCdwD+k8Uqe\/7O\/wCaiBjO6\/5j8kucS4KVxf5gh4pk4ZiQK2KmKuBWG943WWUou0sEfL+4j2UsOKDy3BLfZUz3p3\/NZdjK6f5lYeR1OCll\/mqJMe7jqWxWWUpzdYcVlisspYS2lcvt\/cUlkt9hXLcEMX9KuSuH0BmsuxldP8zbeLitLdRB82haoS\/fJWFLYxA73ii3UWKiWUrhpWL7e3FHNDfYVy3BDepfEr57\/mz+2N1Kdc72eA3WAFHqPnpKKVQSXN1M8s9iXNEWANK38v7ij20cx7J4p3BLuljxWovO\/wCbX\/0wuz+ZkrLiov3CXie7ilSQfehjFLdamKiWiL4aVX\/L+4guPJY4KHs7h\/8ArSPrJ5n6AzeXYtuv+Z9zER6Sst1KZ5LPaIsBOlM\/5f3JXEEuXyWdwIDweA4J+gM4f2susOufc4anN7wO96W94XdamXwRpS\/l\/chxRzQTwXz88kPUSSVcGVw+gc5l2Krt4XTvET2dKJH6DuSD9ZPBSeaeKfPJ4JTwZIeol\/0DnV\/9KLxHTdTEs87HsHu3EllctKQUKJua3KYl7HmoA+dcSTzUQG5J+gc7KKcT3oT82v4eQC5gdxPJXEaVFlVI3NDiyS4j6pH1WKSk+bA6APqpHEk\/QWaoJj4pvtHRdflAluO4KaEj3kbS3LKhUPdC5aR9cD6wBDFJT5pDgxPUT9Yk\/Qd2Uj9ftjIkouFP+WD5wnyDzteRFRuTTdTIshi3dASkkMfrh4UwJDFPluYJexL2LiPV9Cak8YTFMulKuoeW9\/kPYbODet4YHg8N1MCx2Yfsap3JU6RS5SiUrdQSkuexIU3UQ3SQ3UCzkt0FuhTdOwDg8liPofJWPaVkm2cn4krlLr07LzdMmgQWeGeGePIezwzw4l7P8y96rWx1UqpPYRw8MeyW78j1BTOUA9zdT2+qW6Q3Szks8BgkqZX1fom6LRtu86ZdWlVUzCquki50xIulu4ARpcuJhpbuAsNLlwt\/tduEN\/tfuEsdMFxBv9sNxN\/tguJv9sFxv\/2wXGx0v3G3+1+5W\/2vXMw0vXMW\/wBrtzsjS1cy1HS7cqVyGkq65o2lpJqksqxcW2bj2FvQ4N1lnob6rfVZwZ6W6mKif\/V28M8M8eae\/Y\/Y8MCCz9yexIDPDPZ42kgM8eU9+wF\/lkuYF\/kkuZ4+gS5wHEvJYcGCmeWezywLPYF7K2KLPeTy4kkcDzfwe3UWBf5xTDmxGzkl7mDHgzmc4A8Gez2PIe0eLAuZ5eS9nl5+sHuZ5YnhyZ5Z7PLBiziwLmeWHFgSx4s9zPO9K9n7R5uLgAWHFuDw3NixcwY8uTOIZxY8jzL3HmWPLmU+cPMEN6uD3N9nk3ENxbkSXMC9vV6uD\/U9yngk8w5vtODFixAYsfa5AOb1ev1PDEksBx9bgxb1cmHLeCHh3EMWAYBiCwDO4EPZxYBzHiAGcGdxcwHE8Q4lnFiHs5gHecIeziwDEFgCznBzAO2OcziwDmIZxDAFncOLcWLDm4vc3S8OJZz2c9nMRwOwcSQzi3SwHFnF\/Szi3SWHD0Oc9neZ5s7\/AN5j\/9oACAEDAAEFAP8A8R1DlZqKf0yohl0erQx+mVBv0yot+mVBv02oN+m1Bv02oN+m1At+m1Bv02oN+mVBv02oN+m1Bv0yoN+mVFv0yoN+mVFoklOwmIIPobSLXmJ+EmkSlOlExKzMn3NeAixLljJ93XW6K8x\/XEsZycQoTEyW9\/MMmLMKbrmW95MMFTDBUd4Mct0xWdEYIUW92ssZeL1TMhLxxP2kmJDIKT6FWtRYU9El5RSlTM+A0Rc2sFMwWiVEQ1\/qcJv1OEwqkMGFUIccRaeChMRKgwiBhwZKnsC4pUCx2Au8iJBKlXPSoc9K+hIBUaPTkyktUZh6rhuBVKXHjR5qJCWuAuiXB+pxFyZREVDQlMwqBAaGYccU6fWlVUgpSsKcAXtDU4guYM8jYWDAvG1wRMVWT\/T6j6EUmEmNVJHoYRwhMWOuMsxvezMKchqnASpKI\/4+mpR1xIpQqoS3SmqTEH3UV\/4mkBob3I9pkcku6tqeW2ZSlUC9ED9X9CLaQF12C9MguWMzT1JJhrk4MWclZAwqogdEOmyypa3iShc3RZWoqlqPK00xfrmTH+HQ+MNB4I4KZHJPt7Q522IHwr0DovoRaQhm4kl0jIRAoXXbkWXjqhQojIhQ4TW1bsWqx59QENSkACIqG3WYhjJcmSH5GF92jkn2mTyBcraOW0+xfQhBfoRbHCuo+DkovSUqSsTls0WdXLWrQ5VZ6YaZh8wuduyUl1C8651U64qZUlzMGJAVJft8P7uH7KfaDJDgHdWxI4+Qr2b2+89CLY\/fE\/CQi0KZUhkzocqdS0WZXEN5z6oKZqbhyqRU1dEGLDmIduzq6tR5MOp0P7tHsj2gyORZ+wc\/IV7N6\/eehFsfvkNPVLQW5NO1dMrPJUrplEvjXZ1fMN\/QqhFpAolKnLJoZKoFhhRnkIEOmpDkoDk8iGTycTtTz8hR+rev3noRbP75JEOiwTLRyCQuSpMzFUepUq5MS+KUtQiwURh+A+pDhw5eHalKiUul1H8vR2R7J5pLIYcSCCGTzHkK9m9IcRXoTbP75AJSipyQmUqBQelJZwS0JTokNSYiKnY0tGWLGq5VR7QkactMJS1VubRMTDDkeYZGxBHSWTyG13BXs3eB+jehFsv\/AFyCSYUCP7totPl5oLoiwf0ZbCjxGhU9aWEsQPcBohgyqZ+tmIkABhzAcOZDJcwZDwoshhsc8ue0QfUvCPDTTfQi2f3yDwhsFKSUzcdLfj4ob8fFcZ1amn6j+GgxKlUIyukKUWDJ5sn2mSw2o5hgwe3rX7F6\/e+hFtfvcIfweflTUv8Ai5RHEcHMGSNkMcGHAMgEn1IDkhgNq\/YvSEkw\/Qi14cRdagAmCQQS8B7PZ7PZP1RU5f8ADz21IIDIDgA87IYLFgHJZII2q9i8x+Q9CLQSlVVgfcvYgFuhugN0JbgNlbge8ldoL9iSyOfrDJAAc8lkgeQr2bz+A9CLP\/c4H3PlqQmIlcJcCIwBLDkyC3InmkPLIDcy5231K9m8z+S9CLO\/c4AfLBD26G6G6OHuy3u+IQAwSkGvS\/u5lukDakMPa9cNiwDgjmGDJQSfdvZaAE3rFI9CbO\/c5X4fzFUljNSMNxJLBgHslkDj60DgA8lkhwDAPZIIDRPu7zhp9xuMtIz04iYlpmUibpGUpCPfRWgRFrVv1ofucr8N5gFxnZYSk5sQNiA4J4lPJA4+sBwZAedkT7u8x+R3FM3MwjDjxo8TdIyVLR7iK0CGtCt+tJQTVJX4fy3M5q9L9UJhzSNnIIBeyXgJDyebJHDZE+7vP4DcXBnD6Wtv96lPhWAZxZxZxZxYJZwZwaYgJmYHSpJSGDD2i0McBshjYkPO2J93eih+F9CLb\/epQflXMBwczmczvJrcv7meHEhkpLHiQAyW9SQ5IZADtsT7u94kQRPQi2\/3qS+Fd9bzNZl\/fyKeVeri5BVpiZjrDyoMlnPY8gyQ4bAHtE+7vf4n0Itv96k\/hfKAewS3SGc0\/cdCpq5apU2aiTlBiRJ2WrdvSsKWiQo6WTwA5lke0NrntFT9S93fivQi2\/3qSD5QB5c3SGCW6QNrmc19XDEpcqXlXNlKUs8GtKVnzMhgyPaLQ+Y2jlF4Qr4+J3F+7vH0Bbf71I\/CAcXM7yntfcaLEuVgXHi8lQFIgol6YOYZAY84YYbOLAvEb7q9\/idxVz3YO6t\/tv8AepH4Vnhns9nluJYpU8Q1MYbX\/LLgXHsHJrZqUOdkU8wyOZaHyGwOBaKB7m9\/idxPPdvtb\/bf71JAmTb3agwh8DDSWENIYAAbckUlUxI7Bsp0GYmKgngwZPI80DgNgS7ZF+6vf4ncTz8y8M8M8eb+1v8Abf71Tg+SMMlQ5bSz2ez2jwYczBua3o9vTkCHEmokWmVOAgKSpraoqpCEnmGTy9Y4BkhnbI33N7\/FbiefllTcSzm4NwYBuIbq8x9rf7b41qm\/B7Xs\/wAlz2mJSXm4cvSpCTMSGiIKzTJWUmR7KWDIYe160jYSwCi0Yn3N7\/E7ipjz8h7c2e5uLcGeGeG4M4s9nMC\/yvtb\/bf71Tvg9h2ubpLugsEObpD+DEAsUvaqSv4iTDiwDgA9uTQ0l4DAMWhhzOaY+Hvf4ncT5JLmc7Y9zAFukM4NwZwZxZ7ObgpgXeT9rf7b\/eqd8EGftTz6Q5wd5D2fsnJb8LNAMA5gCo9IDJDBkIeNkf7i9\/idxPM89hLctnEsB5hxDe03NgfI+1v9t\/vVOd+C8gPftez\/ACAWrcv1IAdsCQkAMAwDyGez2j\/c3v8AE7iraS4MGcSw80Qx4j2gC8bD7W\/23+9U74HaEkMkAeQfKjQRHg9KgUI6WAewDmDIS5jsAJaMP4N8D8zuKtp4nm3NgHecIcTwJ4HYfa3+2\/3qnfBNwYBQKeXkP8uoQUwpoAlglzBkof5CA0Yfwb4+K3FTDkS4cXMkeeHNknYee\/23+9U\/4JgXEHg8+cn4Iiy4DAEslDi5jsShntF+5vj4rcVcxyPEluZ88pieJ4KY89\/tv96pzvwOxKn+d4ELglEQB2wnYkcdkX7q+HfitxUyeWxI3AcuYHJXPf7b\/eqd8DsT5J8zOIcp7c2CC8JA8iJ93fHxe4qZ\/wBXYOXn+RZLK57\/AG3+9U0fkdiA3PyD5mKj3kNKHjgA9nbHEs4uiD+HfPxe4q5n2WfuKufrHM89\/tz95pzvwDOZIcPIPmoyeiIBxCS3SHAOZ2yIP4d8v\/F7ipjybmdwVyYczz3+3P3qmB8iRxQCwDvIf5uYT1Jdtcztix9S+fi9xUx5esc9wVyYc\/Xv9th9apnwTvIeGf5wgEEEHpLBBYQ2KEuCQDEH8O+fi9xVyPL1jnuCuTDmOe\/23+9U3hJbH7gpLl+Sv2L5+L3FXL1bkpgw4Ml\/0BbX73TvgX7koPD2ez2e3EsUnovr4vcTyHJvWOI8+rn6vUn6AtkPrlP+B3Po49DdAboSwADL9i+h+a3LkXbE7geO0ct\/tn98p\/wO5hzPZ7PZ7K9m+\/i9yUOJ58GTz88S4NzPM\/QFsfvtP+B3hXs34\/8AF7koPHq9TAvHnVc\/V6kj6BtZJVX6e\/8ABbwr2b9SpMzuY4HkWBI87y2DiTzAcPoC01mHcVPL5LeFcE3\/ABFLmNzUG5jm3NgfOEv2cmSPoK21dFdpS+qS3iKSIV8rCpvdPZJ2g+Z5MSTsHBgCfoOQmPws9SYgKN4nopgyd5R0xa5uhD25Ny2gkMD5RU3PYODcSQHfQloVpEaQ3ivVOBKQZiPEmo+6kPbls4FuTcG4s8huos8lnbXsA9hwH0JRavHo07Rq9LxZWDEhTMPdC4Cdq8KHDuW4RVYm782KTt4bOLcW47QCWCR9ESNQnKbHkb5QlUvflP6E3pKgfO0k\/wCdZJxvWTb50km+dJJhecm3znJN85yTfOck3znJN86STfOkg3zpIN86SDfOlPaHelNUpd5yHUu+6dCE9fkoWqldqVYVvfSG6Szizizi3SW6QwAH\/mRf\/9oACAEBAAEFAP8AwZ9T1YzDbmmzsV9\/3V7r61vy8L38fMfio9atn6ykR5Gbhd\/vvlaou3Fqa1a9ynXhpe7Evh\/e47qU7lmm\/wAnX93vNDnbTzBibJVs5pxRqY73\/cPg96yOmGmNsDidd\/dw7zWIu9tNQ4UKZ8jUB4g3t5aaNVEvKBU\/2oe\/x3BdZ3c98ruG53vrS9oSs3xM\/euyPO3P4kzvmYwkuzd4g+0+45kL6dgLRDjUOR\/4qe\/53I9RMLR9oRpOmm+6lpA7JGoiNqo7V\/c+m6n3H+\/R4pWiUa2ez\/2fu7zh\/tKdtGw\/GDawYN+aL9YeE9eunHuweJAwx2+sm274vXXlSa\/oQ7veAO4fpT7ofcluTu25r7E\/fmv3VLnTszaMdReS+\/R3OfFBY20i5ftfxaGvbHV06E9c+A+4np0bV94lPKel\/uO97vu43n2j6BlvxZlrWJpX0\/8AjBs\/w74xPlTHmc8X9zvWXWe3xoW1Uavavqu1u9jnvV3x3cr47L+ZMbadO7jmLxiuoisXp2du+pi7ujTmvruAade2\/gS+vF562bkuztUeJawtrvyYQUnvL\/8AUz4P4x\/9+16JtlVodrPHMnlHvpas9WGBtFGDc1+MB1I1q8dDXi3LGyTfXeU7pWovteWZ2i+59ZfdR0zd0TxKETQ\/rBwlWMu3FiD6X8XJp3mrA1zd\/juCyGY+yHp47bc5cfhS\/Cp64bZxho38MJiKtam+7P4qX\/qR8JforwbkeW8UTpDwjkPt2eDjvGvzGJcs9tzsF9tTWB3GO+v2StXGjPwhtQrMv3EfF3yknI9xDt8U2lwNBHv5mYbTJf8AXO0J3ZM1d2vsM93XTt2tO1\/pa7bNlt3YP\/sEeMt\/kzwt+ijB2PtAni59MOHLPlPDEXPWbh7OkaBLzMLu7QoEDv0yFPp0hXe2DpWsPW13Ub00q6ZspYZ7ZcjWdKPfj8U7nu6Mud0jRp31uwtoR0896bNWgzPmrvRvmOp6idIHeX\/6me17pc18atMyZ57EHiJsjWF2Mu6Xgrt0568YDqGuSd1PdinQnizRJ2\/fFmaFsOY\/luxdAtfuXdhvD+adYfh0+4X4ZHtoXHqGzYSSfpfxWGnwZU7ZsldWX9bkvall2nYFq5gXk3th6svCI6fxZ+kHxUv\/AFI+EC\/+FviRf+l7wpd61\/GmmfsxaeMM90HuS9zPts9izt5aH\/CJwpqB3IPF6wI8XuM9tuv0G7u3NcVXVbtuY67ofY777ma+8B4c7QHpj0c+D6zHlmJebd2D\/wCwR4y3+TPDdf8AS74wf\/4u+Fu\/6g27yE\/J0Pvuya4c1UvD5f8AetI\/G6dP\/sa+KWwXdOH+6zo97a3YX1zafNfWSfC79vfNOn2iWRbmA+8v\/wBTPhFqxR6Jruu7NOFrAt3vSagcba8u594r7S7kGxcz9jPW9jDWt29PFq63MR3rJdiGZtTtu9hvEmA9Z\/iOdbPhge5fWcDZqIIP0vqwwDQ9Vel\/theGfypol1tN3d\/Dq5G7h2tDt76S5LQlon7wGgO9e5Zow7Jfa+yJ2q8C90vRtdncC0JdjXtF5Q7TVF1w+Eln74yzpZ8KxXLePZP7Cubu1hqg70XZdtfutWt2eOwTrq7dOtJC1w19yTwsFiakcrf\/AOVTua5YrHbg7bGnnth4LbWR4bzPOpzuVd8\/tKZP7tNA7Wmja7O37oS73PauyP3WMQdovQdeXbc0Tt3kvDqR+4ZnfsNdp3Vx2tat21vDi580L9wyBEEGPjHw2mfbB7oXcK7eenTuW4JuTwjuvWybu7aHhZsY6XcmrWuIvXJp6rOrTRvM+Dw1RzkKX8G3qJiTPbM8OVpZ7feTtXWkbAuufAuWfCA6qKHfmhvwj1u4\/v3vRdrvVj3ObU7UPbks7tgaSO6B4am6dYes\/B1OzLR8Pf8AgKJhrUmo3pZlIhwMiWHNBV42mgfOlot86Wi\/5ztJjedpBvnS0X\/Olot852kwvO0i3zpaLfOlot852k3znaTfOlot86Wi750tJo1+2TLin3\/YlViwVw5mX9DACo5Q1GUO0KjLUjKGRK1Axhi+21xbdwNGZdr4CjD5S0\/t8o6fQ0GxcBzSoWGMZzEL+kOP4TKxJYBYYksBIOJrALHE2Pw0TFVhKZWJsfgf0nsF6sWWI7+ltipb+mNkBhjizoZnsd27OwV49vWgTFraj6pb1cgxoEzL+hWpHLNXtqBbdu0vGtNElChoqWUMfWnK21mjH9yQ6LQTcEh8j1lvkmsNEsarKRM2xOUWLb+RpiFNRJcpJhuboDLS9loeykuKgCznEoBZSSGUl7LSy0Nc1tUC8KHha9bgxJf5BB9CIkaBLQrNnZy9L6M3LSUn3iO9rOaXq7Y+qnOGaMoWlkzIFhVbtn93+7qnflvXrDuSjy8\/OzUxWcsy9NqNtZdp1ZqN42nKKgYurkzOyKofFSeK08Foe0RBf0vYhukhjxZSXBSWWllpDagbehVPHmNLnmLxsL0IyjFXBxtZRjQcUawcrU7BeHLrve68oXxJ0Cr2zKyVNnp22JmbiQY3bBz\/AD+ftNczMzElSaFatZpU5cVq1mpTNCqcSp0ujBVEyZEDREvZY+qscIocSHMscfUscfUQyg4qDLkkVEaNpmKrEfoRn2OuBi62JcfKHcLsCs5hwhCqM1SazTcrzNGtrFGaZitYyn6rDiRezzYlwYx0tuEWBQr5rViCs3lW7\/i01Yl1VAuvmOB7xTLHBfsxWLL5NE5srmvmrnLq6Z3SWVQj6EZ8RLLxnbkKAbc1BW\/UZqj96jtW3Rbd4QK1UaWMSZBm6Zfvbm0BV7U3dmnqj1BC4cOIopRJzkX3CJZEmr+NPqfecf71T3rDK9mKOCua+TL2K9pXNfOH8XpeTICd9CNQiQrGFmhJs6+qNCq8heVhVCk1\/M3ax0X5wrmKu0ZoXxPVLNsScmqjO3hbeEbL1ceIcpNLuCn9+bV\/JVPQt358d5iuOy7qpl3SM+p16xvvV81srlE5K5K5NE2F7K5r5wvitKCeme9CNQXDGVjKJtmpgKVXLQptaRUMMwVRJDDiURaJatBtaT8QFreuqbumm++qS5aWVOxJyZiyEz2CNdFxZmxLPLIvqMXxV818i0QcFcjxDL5MWVzVzhB01pR+O9CNQYfjGy1e5tqrQyiLDHUrOfct08ads+T8miVm8qTkORx53op6qSXcg0jVjHf9V9PdYpl+64MwValw7q8OvP1eJnanTkWeyNEL1L5rZTRGIDiHsWXyZXAq5rHGEPzWlEOnvQjUCCcZUiWWnGlQmYc+mCQiJkjSLhrJmX1FfRkSBDnrW7\/mjq5rto1MuWapcWHkSHLtO12pV2odjvRXcOmvA+Geu6Mill818lNEHFQAJDiscTyLL5qcy+cIumtKk\/Iwa56EZ3LsbWNKQp7Gds1JUsVwSViNGQxiLUavA\/GyGU7FnYdQ1cdjLT9kO4pfw9+ptFR0IdnvTpp4uCxaCqFCwlZs1bdvEvUWWymicWXwKx9ZQZXIsovKuJUWhEfidNcZYzN6EZ6KRjXHICceXNbMGtwfmmr0RUveVuTKfmWitEuSilrsg0WrQ6rZceOE4lp8CNQcaVG6ZrGeCIFAiRFksGLKPEst7RBwUHhQZY4K5HkS5Ki4QT+b0yUqbjZW9CNQJKcZY8I\/p3zaPKQJhM3Y9vzRXja3m\/prb4KcbW61vY0oVQnadjqxaYiGlEvC5BRew5KUx5MsssuBYsvkogBXKI5y+UL4vSgXzfoRnyGImNcdf28SXDa4NwDU+o\/pdZiOBAL18ixLgS9llw5DmqIWUeCmiMsuCiHLaIeMEvm9KsechXF6EaiKlTZLH2PVf6eByg5uAbgz2Kw0Q+8a1KgajQmXyZZ2LLLLkjkovKiymWXmJzWWiHivnB4zWlpb729CNR8zHl7Jx6f9PXkMVljEc3vG94WJUpi1jz\/4arMoPDRBsWGijgS5JZReVFzE8VF5WfrL4lXEwSPxWl0vvn0I1MH\/ACfj0ux8Vks9ns9iQB1F4IfCjRJaLLTMKdljyPAnkWVyPFP2SxPBZcFFyXvZRex5F7QX\/itLcP8Azn6EanFKTZ+PR\/p45nFululiks4vS4MODWNP++kFEgcWUXBl8GV7Ci5KuSjxXxMQssuCy4HkvlBP5rSrTUxq\/wChGptPVaGPS\/H2x2wh7KdsSoBrbqIp1ZivSwDLPFlc4hcIhZRZRYl5UXqiHis8V8l8oJ\/N6WI0wi5twhoVFiTeXLVlZikXFIVhW6awsiXtjHGcfMmQ0TOPcqZArupLftSYPyfjz+33knnsBeKJUDVKSeAPM8AeJiEKVELyoso8CeHNlHj61l6l84JfN6Wir523CRD5228pzkrGx1dC7jujdNYtm3PkqyIuIslrj4+xhftt6jN+1JxkQ7Rx6f8AT7yCxLFQDdfELBaxKh0TKi4Ms8SXM95U4svksuEQuSS5KjwJcksecH4vS0B877hlJS0Y2sKl0eJK16n0+Top57nVf7oNV+W\/Z16v6c4+\/t\/5CjsUXsSAwUH0+eXT5xUSHFT6jzUeD+Ci0TmsvVEUXrUy+JWeCuRaAPzWliXWbo3DKn9tMffB3N+wHnudV\/ug1W5b9ntS0Y3x68Y\/YkvKmC2eyi4KU5iWeyVNZ1Q\/GUY8ATwUoFlMSyjxPBlH6xY81seIIc0H4vSdSqeusbhlT+2mP\/g7m40A89zqv90Gq\/Lfs9l2N8fn\/IJY8tqzxWQylOZ5YKe1m1H8FWl87eoCKgm81ysCGTwUeCj9VTKZRbkyuZ5ENAH5rSaR1bhdNCTc9t0aaqdCuiFV5q4aYeJ3ONbyJ26rfuyPXZWEs1in79noE44x\/wALAPI8dpLgXsriV82BL8taodPOBJzGWQbXzJjaTuODDkJuh3HORJmFGl1xPZiclsTxWWPJXMspzQPiNJgIO4wB\/qrQeW6QPv7B\/a6F+x79nz+29gECwTy2KUxLKLgWUWe3co1jVnS9jWZqEecnOwPqITXLKSpCB1hrwnKd+EicojLYjivmrkdiuJgcZnSd09e4x4iablCiQIsKHukJQTFs2IJBVJgxZak79nsA43sD+QSWexXwJJYqcFKexexDBJbu9XtP1rW8akG0A6ljpj1aq6XgqfVoy5mpRGistjzJJK+TDiymgD81pNA6txuEkX8jindaKopyAOW\/Z74Y3sAOsAsSxDOLHlyB4N6w93extWNZ2tJdbAZVdh9XaZ1Mf7m9DQjB9wSapadWWitEY81H6y+TOfsl\/itJ3t7jcZdkCH7O60r6uRhy37Pb\/wCm9gONghlF5ZZ4EsVF3Nk7O+Zp3qOUNLCrpe0S5iR4cjVaLN1JCZaam4SZeI9ovNfN7hzKzxZ7mJaB8VpNd7zcbmLshQ\/Z8suSF1KRQf1SWeKlBUyZuAoJiQ1+Zpqv9TU+zv2e3f04x+T8hsp7yxJYsXs5gGc0zKyU9Kd1Xt0XnoAylja2L9zLc9h6au4foyvPGWVLRzZjWenDHKyHxDxWeCj9X1EvJ5KUGJaWP5rSb7W43QXZEhex5M5OykhDmrimFJXOTE0UwqnGH6UpQ\/RICmFCrUMKmr5pjUm\/qPOTEKZhxU+VJfVyogvRv2ez043sHjYbK4lilnBjsD3vDPap06mVul2PYdgYxp0tMR4CrIMnKUknio8VlzRDwWeCy5LK5M5pcfmtJygqJuN1l2R4P3e0Ak1O5Uw4ilEKCoaCqNMrJlZiMyqbREk0+01sm3pBaTLX9SmiXRa9xRFUC6LYFrXxSrjQlQUPIl1Oy1D+737Pbv6cY\/ebCUeDcmPNXIlnsFN1BxLEgsFBkKcaFP8A4KpLJBUp7LPUVK6iovKzxLKO2XL5vSd7W43ep2SYP3ewAqNZuGJVIyokKVZKPdARQlpOmVioCFZkotodo2vDMS1bXjJmccWhHTMWXd9JVNXXTZxa6JctoJXL21lGXtS9Z5NSSsLG2Gp2X4f3e\/Z8JGN8fJHyFEeC7YrmrkouZ\/lJUwV9WmTv6hT1rZanMeA5Dmyi5idhcBLH83pN9vcbyLsmwPutl2VyNMzUeMmSLpSkSspJz0\/MU235WSUSSfJqVOp1ZkKjbtz41XNU2RvmDAmKPlujWHeE\/Hm0qChse7MkP7vfs9gnG+PuNhL5MS5lHieSuDevZyYKIYKLBQLPIa1Z0ojKW5ns\/qZZexZReWJcx4mXV+b0nA9e43sp2UZb7lruuP5bpXULZpMvDl7eplHpk\/UZuRkJenQPMJUpCr0tCftaerMBF506qiHky2LCvGTu+hbIp6c1Qvut+z4XY2x+HWEoBzFlEEliXA7S7yEtLzKpOZ60KBL2UvYtThsJJ2S5fOaTeC9xvpXTlSV+4SkqVBqEO8LnoHXcdSp61XRU6ZT0U6X80lSkKuaRiYku2sLTjm9KqU47yHLRUxYTTaunN8H7rfs9f24x9\/ILKBLFlc2PAF+xz2I4HhtD3cWoc0Y0gVcGUsBnnYpT2eyzwlz+a0nF6txv9Tsrynw+UK5Go9rV6F+m0W5lmWkrVpMKUg+cq9IplwUmz5NdRp9ry03f9hYguyLcdsNUVdOdIP3O\/Z7AOOMffyEygCFJcVB7EOKuXLaeTnt0lgniA7ZR5j8POkgMVE7SXMWKmJe0Aj8ZpPDl7jkNTsuSXwtfjKufLVskXNeVnKXdNegwUS8HzuapOJb1TuWZTbOTIBTZ2aYK\/eQqup2eYH3G\/Z7JGOMfAGxFJcxZY4MoHYpLcdhYEvT5H1gZeN+JgEuHWG6mJexLKDi0E\/mdJ\/t7jkhTsvyEaHBk7VrUWQsRXXZ2I8e0WFS6d5647elbtt2QiT144Hv6pJqdhUKbTOSVaV\/r9L8Zffs98ccY\/LrDVsUNihsIb17CniPIAajzHSnidhUz3s9IZRBZR4QT+Z0nhy9xyarpzJk+rfouIrpl\/wABj69x+LuehwRCkPPAkGgwIVtZ2telRajh\/DVcFbsyrK6tQkv8Pv2ev7cWDwsTqYuZTHmdpDOI8twaWimBMFQDFZLdRbqOzqDKU8Qj+Z0ofebjldQh5fzzOmHji8EJj3\/BiJqmbpWH7qV8\/lRMOkZotaF+Gy\/pwmFwrUiRfxGoWAHQN+zwXY6sAvsXhsUWLFuWx3Apbh5Ib1lzSUX3suVAN1Buot1M9lq4Q1fmdKBBVuOaVe4yfnSOldPq38bPFhxUz+TSHbhqHQiAuDFVBzbg6L7mo0YJj5zAcN+zzwxzYfCxn8CWUp4LFuZcNh5uJYN0t0sAwc8Pbg6Ri9EXkxUxWAxiMVEspTmhF8zpQd17jqFQYFZzrHCFTiv\/AOh8OqES7F+35\/Usem3lgHK+Dk+\/uHFi4lXvRTurfs8npxzYx\/yQFsVP2FQDF73eQ4Nx2OcOAZzcm9QJSoRetJbgGKnN1MouENX5nSkXxNx1PoXCs7UBGfRKvF\/DahMUPk8iqL1ef1J\/xKZKI97lTT3NJEvppgxpu1t\/zy\/+nNjqfZQOzqZ+x\/F7PezyW5seG3i8kM9geJL2lYn8N5Z7PYqAZSmhfEaUuMTcdS8nFm8HZwimewnf80iVybbkVdM1Cw1+8hefz77yevuZqECnVu1ZmLaGm7B1Fh0e19\/z51f03sc\/5MBIZ72exU5ioluos97AuIU5uriC9nvZ7PcDy4jbCX0RHhnhnhiQylB0OJ+a0o9XvdxvihC6bF6131o5vqqpq+HbvmkUfOFLiiNIefueKm5NSF+VorxjlKB+DxrY8mJWm7\/n89ONLJV\/k1K26y8kny3lns9njy0xfqGKxjN71lKJaF8VpOV1RtxgLTCjYPpsKhXNiehzdy6frmqqrs082HV4VYovnoQQqJZlbjVCXrVNMxcV1whXsz0KX\/D0jf8AUD\/bKyVvswF4JAbrbqLPLPLJLP8ANPZ7BRc5nBnMeAhH8xpLPVF3K+4QsrU3DiKx1qox3RKdQr30z3DUKfSvPZmuaLaWLqPQZWiWjieSjXbXsWpN5XV0pSN\/1DHpxdZHCywXbX7QyTx8ongVMSxJLAtyYqZ\/HqYnhBV+a0jH+LuWqegzE1jfOMJdz4jypUUfp1+zkOx8l0OfhT8j53M06bqyNkWpRqnNXZMfJWMcS2xAodN+gNQ6Iq8V2V1oszqDnsS9uriCWBGxJAZKn+QS5lEs87Hlx8pRcIHxOkWFHhxNym5KQqcngaNFs+p4rpcnZtfx7TUVClYEvet02YhxERYfm7puu37Ht+3arGp9IxPbNXrs\/NTUtfWRKNTv0qm\/QGoiejU7E9mx1TNnPLPPkAsC\/YkuYFnsS5lEEev1+V63stoPGZ0i1WYqStz1JUOdtOq5nt+avazrsJytZNxQTl22MQZXo1\/27wI8zOzslTJK5rxquovJtyynzze941GZtShYts+Upcr9A6gafEqOIMXzaZ7GnlBXAF4YFzAgseLHzD257FtKB8\/okhxZigbnNycjUpOw5qqaf8jXBAi6bsi3ZITOHLguW251E9ivL1vX3RYcSHGh+XX7iotryGZMg12+I9Gp6Mb2nbsjScV2vZlsViuVuVlZeRlvoHIlFj3Hj7CVQgzeOgXs8MSQz2ew2JOzkz3MS\/yiXMSHAvIYcWJYlrgrctblB0aW5N29g3dMrYxomWbSse71VFqNWq3psueftqu4Pm5y1Leycq0c5ztGrFNu2mT8KDFhTCXO2JSpZqdbo1GRXMpxSi4LgjRolp29J25AlJdVEqVHo1euu46JRZKgSH0FDWqFEuCkHCOoJKlM9n7QosC9gXFKn+SVOYqDFTdbdRZ7AuYKcwWWJJZS+kZbnarddaty35C07d3XK2I7cyzSZi45ilw6DJZX08rhWfa19NHyRSKmiWxhP0poN0ZZoapXPUGCP66QYoVf9fuEmHW1NVrghLmKbb0tR1wK+FQrRsmoXAqkUenUKR+hM34coWbbIo991\/HNTUqJBSIqC3WlutLdSWSsBgtJYKDBfD3gbr4lRYl7PZ4bqDdSW6gxWGC2C2HVFXfWWpCiTemvT\/PY1Ru9y2zbl50Obw7lPFkxDurGVyXGZedq9IjYmp1MjQZ\/MFHWjJt+QlRcn3OlExf2Rq0pNtXJVBV77s6yk2faV9X\/ADVvYspVPUSSPoa8rGtLINKntHFxWjEi491Y01UOU1DJYSWeXpkc7k\/g87hvwueXCXz2xhZ7BTDz+W93nxjDz8D7rPjjCz84QdQBYwNQHT7jUA78Nn18CWziIkxC1AhabR1XVUSulbMt6oxfg\/GuH5berlti2bzkJ\/TXbkvEXjnPVEKk5rlkhWQ1Mil5TnUxrFz1UocnpouWttZ2E8VWEhS1r\/8AVyAVG18lYzviV+cbMaIUwkSFSplWl\/LQhcVchWKLVmAKjL3Bbs5ON84WY0vFgzkpKVWkT8bz8\/UqZSoEOLCjwzVqQKhcNw27aFGtO87Mv2lz1wW7TI9NrNDrMfZU6lTKJTLOyFjzIsBnF22Qq9Hqwnp6RpcjaV4WdkG2WnqhTqXLw4sKPDc9nO2Vqt0S2qNbdzWzelveQlKlNQsr4num4CCktP1SlUmCCCJ+pUyky8OJDiw96loC5mLprlO15B7P\/Zm8PdoE7hvbx7aGRdQGh3Vh2IO8TpD7W\/af7cHdE0pd0zHWo3xQnbdwRljC3do0U6itFV5+Kd7alt4e0D9yLSv3IMH5O8Vb21rFv\/S\/qjwNrMwl3SMId07Wzn7wjdlUPHWTe+\/3ILs0NaZO1VojPbx8SPNfAeHy7OOjvukWvhCysl9gbvx9kvMVkaXNc+gzW5h7uMac9KHd40gavqpUfFbdu2DWMJZrxTqPxJ5vxecNETtDaBUJh6BbqgQT40WRx\/j3vb99DJnh7dRnbw1Qd3nTJizWX4nfvc9mzSD2etN+kq9MoZI0oJ90Di7HOXPFKdwDXH4bua0NY90T5NzVnPSpkTxEU9RO8trD70OhnQ3gPRD4iLQDrbzZNgiR8GlLQJbHXcCThFWhbtg6k+1\/oy7NeDvFMdtTNFwd8rX7g3ubeH4szxJnb10X4E7wveaxJZvbB7TvfjxhVu3xk3xTvbUsLHedddXbg7jXZt09dzHtn9rvtT5U8VH2xcYZj1IdxXR7pV0o4W8Ul228u0LRhq4xbrv0zd4bNWpvudd1zLHhCtDkniHs9aq9Ydh9v0+LO7bQurxY+RcbaiO1ZkfxOXbi0zXR4o3N2I9TXYluDuKaTO2j2zdJniSe35qkzcpKkK3ij\/uXaS\/6e+0FQfEM1ft9aEuzHf2gnEfg6sa4\/pnbewbJTunzuJ+E6sHE9A7UuIbdsXFevnwoONrBpnai04x6vhvSH2gprvUWX22PDjaGdT+hCkSRP4zwqZhp1AaXe9DouvXuuT\/eX0gSfiC7VuulX5j\/ALB9P7xU9a\/b17KWsCd176MVAVrwq60Ruz72ZMEWNrCo9hwu9t2rdC3ZDzRoyzx2+PN+LbolXrfaG7a122xkXt0ouCkX14z\/AFCduPsi99rLWtTA2vLwy1wd03Ddn61PEo9zPsPY+7c2nmm6qO9b3D+3B2\/bH8QxMZy8ItfNExPdmtfWXg\/t96dtKepewNZOnS\/1xl+MznKLRcz+Mg8YfbtiUTEVJmq3PWf4NaFFi497tsvMQe1tqIqlxw\/DzdyHAOkCT7MUhOT8Dwj+NNNeBJHw\/uh2pT9Q8HbjZSh4NDw12GcTU3s19uKVg0rsw67ZeHOeHW78mEcP2V2J9VEWRuXtzeILw3gA9mvw4n\/SzYt1UbSB4vq6a\/QrFtjVZ3v+1jq67XGo3KPdsvzs66s52eh+Flj6b9HUPsxmuXbVvCm65P63X93SO7LpG77Xciw1ild6xMU7xJzP4SZ0k9gBOljR92vdCH\/Gxo3ylZP9TcXdn7tqDtPaTNLHaEpWm\/uSTHhytSmmy\/tKvYbwVpH0N9qjQN\/xi6P9CnZWsfSLkm3\/AA9Gt\/TRD7X\/AGv8BdqrAMCJ7mN2q+0n\/wAY2Q\/lO0G\/4eaEe8euGlUt2bO0B\/xG25Aie5jaKOyhZulXNWDvDU6lNON4aKvDz4C0sY3tzw+3cTxdiLQJoXwp25dMHm9QmAcS6qMJU7w2euvTpE7T3ZPwR2sZrWR4d2YvvVRiTw3eRMnZ67iXYxyJrb15ZF8NxqT1KxMB4KxZphwo3cl8Pti\/Whny1\/DRZx1B5Ft23qBaFu9yvsl5J1Z6xtf\/AGOKdrtp+DvD35NvLVDMFczDxL4WrUdgGBgzsh6pMf2Lqz0K6Se2Z2JrgpHbMx5oC7cPZ\/yhrf8ADp29pz\/QdFOkDscWDpy7U+mvsT6ucRaP+27pB\/49dGWnnw8qcCaP84+HZGaO3h3BNJ\/++\/Rf3PtJuiLQR2W9U8t28MZ6BuwtijIeFO0L3Vezvpq7r9jVPw3XcLzDRsydkfRdkrtsW\/4fDVhkHT7k\/wAOvNZE7XWePDdahbtoep3sF4Zy\/wBq3XX2P8Q64dO1O8PfqS1L5HhQoEvB9DZ2SkqnIUrthdtmh35EiLir8u4Lft67aFY\/bU7deM79UpS1f+8t\/9oACAECAgY\/AP8AwNEUSoxwRxKHhi8qhupDBGKnbuIm1CNu5s8OJRCJ07uCx+NY\/Gp2d\/iscD7aChFGKmh4YwgQpGeCVitmpieAwNqhiUrFIqBtwRQQCkZYIKCIxIjSokqBUrVMqeAaVOz\/AEowhHBnUyrZK2SgVHvyQvDHNR8PCxafDyqHh4WoeGMKBsQgtKh7aEAs+AqQUirJqOAcCbwe2iCoBHwy4BwLgR4UcEVMYCENOCzlUVFGKhiwTUPDw93v3nweHhlQ8MYQQQ0oFCeDhRngiVbFSGAcCbwe2ih4ZUfDGcA4FwI8KK8Mih4eFimeRSs0YBpXhnWPCYqOJRwRxeHhx9+oEeHHgl4ePAIKJUQpqdikpqIw5QpBTtwAQl4Z0IKJUQjHBKxGCIgiFDF4Z1IzUx4cCyDAFZ4camPDjU7FnUwsykolQH\/gF3Ovm2rpSA+HVptPEXRUB2luZ0VAeREUe1twe4WhtZriMUwDKctK\/mS6fPCh\/wBS3SPphfzJdPnhT7SXT54QH\/Ul0j6YR\/7kukvjhT7R3X54Qh2juk\/jhGPaS6S+OFA9pLpH0wv5kunzwp9pLp88L+ZLp88L+Zbp88L+ZLp88L+Zbn+sCjc+0FyqHIK1OPFrR8SbUpuDmOEQRMEZQfYdX7PbAuzdpdqWSewH6m7m09c4Gbh76m0tLYwqPpkAG6bJ7SdtatCneHlop3ZrdRrtXmsIi2mNaGqHOFQiMS5yfS2lt+o6uDPrb7q\/7OgAApbUpn\/7i9E9JOdRr3djnWltS8NJ0kEE5Z41K+0\/196\/KU77S\/X3r8pAU77d9bPebwOVwRrXS4srUrYsvNd1mXVqGHChq7K\/4i8f\/MRjsk\/+ovH5aiNln\/1F4\/LQ\/wCWGH7RePy0f+WGP7RePy1\/D\/8AiK\/5diMLh\/xFf8tRFw\/4iv8Aloj7j\/t6\/wCUiPuBj+0V\/wApRFxP\/qK\/5S\/AuGi8Vx9JOY67XhoItbeKhP8AaiDwqm\/YXay9XSqBDVqn6txiLSzmQOR9N4iFdtj\/ANSLoy6uqSp32mPqHGNtUAlrROdRnNbLXp02xcqdajUa+k9oc1wIIcCIggiRBEwRIj2F3Xsp2ZvAZ2r2ixxNSMPul2EQ+vH3r3Qc2kbW6r6g5zGax2dscv8Auznwc8RNW81CbTa6BJOoy2cSSSSQ7aoqPrwiaFJ2rqfbVp6pGNrPNMnPBVWlcbvd33pp1dS63Z97fHHrVA2oARjJcYwMAmM2he33OoXAQvNzNBvOlHWfSDTDGJGE0ytdL5d30HCIc1tMjooHr6PzKf5KnWox+zp\/koh9O7VAcRp0\/aaCvvN1o1LreGzFSg5zRwtjyEaEy4dqiDScYMvTRCf6YAQIy1AA5trg4RK8CMoIIkQRMESImp2oykoqxQhLEoY1LAQiITwTCfdLxTFbZrvOpnlYfePFoIxq5f0723fnVuz19BOzKzjOm+M7q7IHGIY0eZVgxo1arQz2EuqVHBrGiJJsAFpOZdo+0D6h63aN6fTpAxiy50INYwZNYBgOWDyfOKbtyrKtUDupJ\/u6LTqvrD49V0adI+9aHOEymdpe1HW0ewoeRd7qwmm+\/uYSHVKzxBzbq1wLWtadasdaBa0axpbP2BsyhcrkwQbTu9NtMAWe9Gs4\/GcS44yVUue17nSvV0eIOp16barCM7agI4RMYir525\/prSqU9kUeffdnBznsZSjzrxdIkuDGRjVoku1Wxewloc0Ur1d6mtReJe2PDEmUmElzjBVBsTZ7a11pPLX3itUNOjrDzm04Bz6paZOLQGAy1iQqVDtBsllG71n6lOvTf1t3c42U3khr6L3e91xqOMg6KrXihT+pPnth5p+EM49xX7stf3k3m5jWok2uokwLM\/VkgtyMdDEEYBEIo4AcAQVmJEYsBjYq9KjVLL3QIvNBwJBbVpQc6EJxc0RthrNBXZ3tJCFS9XVjniQhUHNq80eaOsa7VHwYewntbfqT9Woy4VoOyFzC0EZ4mWdXS6sfF4u1JjRkdXcXfOJqAk45LZHZS4c115vFC6NgYQptcy78cTUqaZq47G2bRDLjdqbKFJosaymAxo4hE5SScaqPawljYAnG5xsnlMCQMQCuG1qjWv2beXOY1wMS2oybqb8bHgc4YnNmDIp9KswPpTa4GxzXCDmkZHNJBGQldtuxlP8ACXK+v6nNTJ12AZhTe0fJV8vFI\/Wik4NzEgwK2Ld9k6pa27Uw1sgPNEY5ySScpW3qe1NUD7s+IkQCBFpGcODSMhVEV5l9JutHGdWfHauz14YOZVqOoOztdFvI5vEjFRRkjpXAgiUSLMBRwStVxLXQcarRHM46hjmg6BzK8bNqvLqt02jXZ6LeaQ0ZtbWI0+wntoQZuu7G8dWmFcGuMje7k3i6ldm9tV\/w922hSqv9Fl41nngaXO4E2swh1PWDgRjaZgjMWkEKm65PHWsrMrU3Sk9lhnEEQxGUbVcNiNpnrTeH3m8VDCDqzgWhrAJNY1riSffOMgAERTmXOAGfEONdttq3Mxuj7\/UptI98KYbRjHOaZKrXdx85pC\/dV7u\/X3JkdWNoGYicM0wTOAKbsqhR6i4OI1gMek28gGTGqdFvmtEOJdlqot+\/0\/HqKpC2J5SgiuFcBQ0YSUUcBhjxqk6MSHAjgIXbymTJm1Afntd+T7Ce1o\/R0vXU1s8Cz7\/c4aNaknhzYsLnj+24ELZvYLtVfmUe0N2YKV0rVHBrL3Rb+bpF7jAXmk2DAHQ61gaWkuDgixri34pEuIiSFNzozk1otOjGr72d2FfGVe3l5plgawhwuLHgtdXrERDa2qSKFE8\/WPWPDWtmyESBO2PGTacpNpiU0MaS82ZToGPgQY+hr1MkIniRFKiG6EI2rst+30voKqM5QR0I6VwFDRhOA4DC1A6OVf1B1TL94UuPUqR9hPa4ZadL19NbNdCy\/wBz6VFXggTbWqescnMqUwWRsPKqNy2Z2yvDrgyTad5Yy9NaMjTVDngDENeAsAVS6XvtnVo3Z4g5t0pU7qXDIXsAeBl1XgpxAMXOJJJJLiZlznGbibSSYk2klUSLvUr7SvL206FCm0uq1nuMGsY0TJcc0gqV+\/qH2mrbPDxH7hs8tD2BwHNvF7Ot9ZCThSDtWbS4GITW0f31SvAsqN2hU1wcs26seBXjbPZjalTtB2cotLqt3qsDb\/RpiJc+nqc28sYJuDYVIAu1ICKpX65VA6i4cIOQ5F2W\/b6X0FVOcoLgR0rgK4Fw4DgMMFk00Rycq\/qCcu0aXRq+wntb9nS9fTVw\/bLr4nUlXiJGpU6bkSwTUAwoDUKN4vMC1oJOSU1tn+qO0qQfeW1n3S4AiVINA+81m5HnWbRY4TDdciBKc2nKk3zne0BlhwAWqtTulZ73sALi3n6sbCYCEDOC6t5hUbNrhjGIj2xiKuO19lURS7PdoGvqPpNAFOjemODawYBINqFzawaIBpc8CS7LDGL\/AEvoKpliUMB0qWdDRhOA4MyphsYRHKv6gD\/+hS6NX2E9rPs6frqaulQ+a283Y8ANIqsP0j+m5QCvXaG43Wi+40utADqhZVrGiI1eobqFkGQIHWvZ1jmkNgIOMaLtaiZtOUGYMMURiVcD3wguyPUwtvOtD4f3iprcNls4QVVl2MKx145YxBI4W2Bdoto3+6067Kt2Yx7AWUmltSo0PcAR1YNNkX6gAiAQ2cFUbdodUKj9WHwIyXYaz73+9qpbl1Rd+dwR1Y8C7K0taLje6J4tWKqnOU0rgR0rPBBOItwGFuA4HAumE0AAGI5cS\/qB\/wD6NLo1fYT2sP6On66mr65hg5oYQc4YwhXPaFJ0etpNedJEHDgeHA8CERJbQ7ObC7QV6OwL255dTbqH84IVNR7ml9PrBJ+oRrZiVQoAzY0DxQgpWRW0f6a7TrNp1a9Z15uBcYB9RzQLxdwT794a2tTb74io0RME7Vmw2jRjGQp1WjRcKxtMhHSQusqc6s6QGQZBmyk6Srrs7Y94bV7PbGY+g2q0xZXrucHXiqw2Gm0tbSY73wY5wkQtj6oJo3fXrnMKbebHSS2GlOKGhcCOAZoojAcMkYWRVMHE4cq7b7OqV2Nv1W+NqMZHnOYzXa5wGMBzgCRj4I+wjtXC3UpeupraNE4wz1TE7Yt8eBSLyaZdIRPnMJxB1rTidA5Ua12dEC0HzmnI4YtNhxFaqMTNPZCaa9rnNqMcHNc0lrmOaYtcxwILXNIi0gggzBBVG4duNjna1KmABe6Dm0r2QJDr6bh1VZ2WoOre610TNCpT2Ltt9f4HUU28HWGrq8QOhXrYOxbmNjdn6oLaoZU6y+V2G1lSsNUUabhJ7KQGsJOeREF7KOqKYECRYAPeNy\/GNgEgrzt+\/wBMtv8Af2jq2m1lAHWaSMRqug4C0MDcqK4FwI6EQiMuAiCKGCMcDNI5VtBmtzTs+8EiJhK9MmRZGZgbYH2E9q2\/o6frqavJFjm0\/VsRrUTCqqdC\/se5rJNcCW1GjIHYxmMRmTdavSdmqMLTwuYRxwUrtdCftKnkX4W6\/rKnkRcy7XYRyPf7YQhd6PA93kX921udz3eKMELns27Vr3XcZU6LCW\/K1fHrOAyqjtTtd1dSswg07o0h1NpEwa7hzXkGyk2LY+e42JznGJUkURmXAo40cy0qOMJwQQQGBukcq25t2nQjs6jd61B79ZvNqPvAqNbqk6x1mtJiGkCEyCQD7CO1ZjZTp+upquPi0\/VtU1B7ARnRIpQ0KLdZecUIEwVa4XOhs7raVLrCbzTc8FusGnVDCHOIjF0CICcVQL+zNwdfmtGs9tN2qXYy1lR79VpNgJJGVChdKFOlQ+DTa1jeJoAPDgAxoKOdOwHIgnSR0LgQGNFHA3SOVdvZ2bQp8lX2E9q\/s6frqarj4tP1bFFWq3cbK2t\/c06mrUz0n8yoPmnW+SiGuBGIjGMR0ETUMATiguFOJQRMZIJydgJGDOm6Ryhds9lBrOpfUFcnWOuC176YAZqwLDOL9cEP5uqQdYewjb11vNcMr3rq6dJsCS94e2oWiAIB1GOdFxa2DSIxIBrHNT9WxZlYrFYrFkC1SJHkVwdVfG93X\/d6mUmmB1bj6VMt4jhJOA6FnwlZlpK0lOVs1nwM0jlXaxsf8i4\/8W7y+wm4MbUcKb9qUmuAMNZvV1TqnKIgGBxgK8aKfq2IAleevPXnrzllKiq2yajoXe\/04D7anFzOF7NZg4MJCIhPBDgUTanIBEqGQIaMBRwN0jlXajL+73\/\/AJh9hOx2kW7Wp+prlXnRT9WzuF2v11dC80KjajD8ZhDhxwgcxKuW07qf93vFJtRuYOESPkmLdIwGCMLUciOhaUUdGCaJy4HEnAZpoBnEcq7VVQDq\/cSI5ze3yjlgI+wnY0DP97U\/UV1eckGerYoY1CKtUIqyWRGStUyr9sSq76651NdkbTRqmwZmVAR8oKaJROBxRmnIrhRwgKVuBukcq7ZbXc9\/3inXFADWPV6j3PqFxpx1TUDmwDyNYNOqCATH2EbFnL97U\/UV1exGYFP1bFE27qaJitm3mo+FzrHqKpjLUqwaHH0H6rhkmnNdaDBQFqhgGdHSuFDIgEIqKCOFukcq7W7MbWH3dzOvczUmXCs+mH9ZrSgIt6vVMY64cJtO8Tdtq7SbRvADSWkOMnCLTIG0TVS97Ivgr3Zj9QuAIg6AdCDgDYQeHeoBEoKxNIEyfa3\/ALJOMbWp+prK9HNT9UzBBRjNRwQwkRhFbK2lUfG9BnVVftaXNdH0hqvz6yiiUVoCzrgXAnaIIoIlE4RpHKu0rYSOzneK+O8u8SusvVwo1ahAm9jXGVkyDZiXV3S606VMuiQxoaCYQiQABHPvUE2QXnJoaYmO\/wC6ll3rvbR2gyo5zGgsptFOo3WquiCxhLgwPAPPcxsIOiL2McKfqmKO5jGWDGsy2n2fqug28M66nP8AvKQ1XgaaZBzlmEBO0ooorhR0o4M2Fukcq7Rkf\/rXxn\/5w7yhFHRvdug7\/wC1OqIu1KfrWK+ZPq\/VMWZZt3MrZ22KB+su1Zr4ZWiT26HMLhDOqd4u7ta7VGNew5WuAc08IIwHMmiOAceDgQUsaGXcN0jlXaa8avMFyLIxFpvT3QhbYIxshLGN5nRvdug7\/wC1MLerp+tYr43F9X6pihjViswWTw24W3Cq+N62fU6o5TSdF9EzyDWZ8kBEnA8NcCRLRpU8i4EdCcjoQCKJxYRpC7Y7Rdd2G\/MvLKTakBrik41Huph0Ihhe0OLQYF0zEgQ3kdG926Dv\/tRL3lP1rFfoWjq\/VMUcNqt3V3u1R8Lpf2dQ7IHx1qJ+eNWPxkU7bu3mvGwWPLadMEtN4c0weXOECKLTFkGkF7g6Lg1sHdmezOyLlQoPpl9d7aTGs1W6vVU46oHnnXM5nUiUU7SuFQzo6VBEqOCKAzjlXbaX+epclXeQEJrW3sRkTXZt\/wDaeAidSn61iv0D\/h+qYs25twWTUEZpt\/7D9jb9fLmx0W3kNFK7B7CCIV6rqdNxa4DzHOnJXa99pOzN4ut4dRaapAbVpsqEQcDUpF7QNYEgkgQImtj9muw3Zm+7R23QurGFoZCi2oGjrHOc0kluvF1jQ6PnNtF72\/tXYjq9+rnXeeuoa5kA1raYfBrWNAaxgPNAhMxJqXDaVyq3e\/M86nVaWPGQwcBEHE4RBxFcKCGVBORRwSTdI5V21\/bqXJW3k0I6d7HQhv8A7UehT9axX7\/Vj\/ZMRUYq1Wq3BarcG0tudqruavYbYpp9bRmBfL3Ui6jdXkQPUtY01rxqkF7AylEdYSKF3pU2U7rSYGU6bGhlOmwCDWU6bQGMY0SDWgAZFmMinMut3ZTYTEhjQ0Em0mAEzgu2w77cheO1T29ZQc0hrrqyMOtqPt1KkC0UZ9bAnm6ge0LgXAgnOGEnAzSF21H\/AJ6lyVt5NyAqzexOKCEd\/wDaj7On61i2iPQ9UxDNgkMFqhGWC1Ca2NfaTIXjaO0r9eKhyltUXemD6DKIA0nAQopoNkV2q2henk1XX2qwR96yk40qbRmaxgAGk2lcCOhO0YHYAjgbpHKu2v7dS5Ku8jvcae8Hac\/Ep+tYtpNxgs9WxCclapBSCskjCSgTh\/dI\/PbJ2zeqLp+8r6l5pdN40gwwkIEWq\/bUbRP7h2nUNWlUhzWVnzq0HGxr9eNSmD57HQbEsIB0JydwYDHAEcDdIXbX9upclbeR3uNPeDtRl1KfrWLaRGVnqmIDuN\/7D7Rrhmze0lFrKJMg3aF31nXcRJtvFN1W7ty1HUxhjg7Q7R7QXKjedlUruY0arQ5lao7m0acD759QtDSOcJuBEIrnQ1oThZHIMwsGZO4E7SitKAWZQFmBukcq7bft1Lo1e9I094O1E4fV0\/WsW0\/SZ6pmCR3FqtQgFaqN6u9d9K9Untex7CWvY9hDmPY4Ta5rgHNIsIVG632vTpf1MuVIC+3WQdeQ2Qv91ZLrKdaRr02Auu9YuBaKTqZVXa3aTaV32dspnnVr1UZQpjFJ1Qt1jHE3WdmTNk7A\/qbsS97Ue7VbSbeWsc85GdaKbXnIGkxxRVV94b1dOmIuc\/mtaIR1nOdBrRq86JIEDFUdibDrl3Za5P1g8RAvV4m01gP8KmCWUY+dF1TG1ORTk5QNiJWqFAK1MiZRHKu2s\/8APUuStvKO9x3g7TnIyn61i2o3Oz1TMJORBGe4tWZXe+3K81KF9pO1qdWk91Oox3wmPYWuac7SFSvXaLbl92heGCDXXmvVrlotg01XO1eCCg9oIzq+dltpbbvlejcagcynUr1Xs6ip5o1HPILadQFrQQQ0OaBAAJyKKdPGinZcEFAWqwKkPjDlXbQZL9S5K28j3YxUlO1Ss7zdqI2alP1rFtTM5nqmYc2CySsRhYpndbNvFWpC51z1FXJqVYBrj6FTVdxotPnAkcOPCUVoRUrThpQ+EOVdtcv36lyVd5HT3eSnJQxKIPeXtQRbqU\/WsW1smsz1TEQSiAJYYC3czKzqXhmURYiIwz4xn0rZm0nuBvJp9XVzVKfMf86Af8pFRGC1FQROGl6Q5V21GL79S6NXeR3hA2qDrORfFKBBkdwOHvB2ogInUp+tYtrekz1bNwNyICSBx4ZFDKtpbDqnmVm9dTB+GwQqAaWEOz6qM0cBCKhjKggpKkfjDlXbWUvv1Lo1d5HTvHVPB7q1XWcig6zkUDhHeDtSYw+rp+tYtraWerZgigYqO4KBJxQ3JyQVx2pSM6FUOIytse3hYSIJlWi6NF7Q5pytcIg8RGA5cEESs6JVqpw+EOVdtZ\/52j0au8jp3lA+cFA+cOT3FD3w5MI4UN\/9qID+7p+tYtraWerZgkd1BEZtzDKhKWNMur3xrXR3VmNpYedTPFFvyVn5MGdauPBFSwMPxhyrtn+20ujV3lmjvKItQeLEHCz2kcmAcKG\/+08bNSnm\/vWLavpM9WxQQMZ7qMCSFisRhuSIZ0yi50KF5b1Z9K2mfnSj8ZQK+MiAoqGVStwQaqYxBw5V2ygJ\/faPRq7yOnAM6GVQ7uWwRBxciGUS8mAae8HagiEdSnbZ+dZatq+kz1bEcimN0I2qG6hBa9MatRswchBBB4wrtfW2VWAnM6xw4HArNggLVziiSs2BoBxjlXbIREPvtHo1bd5O04IYkTw7wByIfB9opzco8YwDT3g7UehT9axbWI+Gz1bFMTKhj3IUIz8LN3EWoCNhV6uL3TaddugycOOB4VATUyjBTMSsyz4Ac45V2y\/bKPRq7ydpQ0onMnbxbxJruFFDSe8HaiFupT9axbW9Nnq2KG6kZqJQIx7udiu15B5gdB3oukfDMvIplHEFJTOEaQu2M\/8AN0OhV3k7SETHEnIZzvF2lBElN4e8HacmzUp+tYtrD47PVs3RjYolEyyKEO4HIqDi7ntGo7gkOMQUgpnBapDAInGF2vy\/e6PRq7ycqmhHSmDNvF+hcKGhM0d4O05+JT9axbYHxmerZuo40QDLudS7nzagiPSb5RFWqSg4qyeAzVs4+2u1\/wC10OhV3k8ZlU0LhTdG8XaFmim6E0DEO8Hac\/Ep+tYtsD4zPVs3EULVEGfdGVG+c0gjgTXtEnCPGplStwWqJKzxHKu1wP8A9XQ6FXeThjgnZwjkimaN4u0YAMyPeDtRKPMp+tYtsR+G31bMBzKJM1Hu5pR80+I7i1TUGmcV2vl\/mrv0Ku8mog5CnBNO8XngQGNQGVHT3g7Uw\/w6frmLbP2jfVsREEYEwO8WmMjIogmasKkFbJTKku19sPvV39XU3kDnWaKcMcE4ZDvGy08iGZF2bvD2rMYfV0\/XU1tv7Vvq2b0aceNSCtUyiiF2wEf81d\/VVN5tcDaEHZU5uXeLWpxyo5z3h7V\/Z0\/XU1tz7Vvq2b0IJVk1YoYHLthL\/NXb1T95nKCtBTXi1RFhn3cDEicqAycqAyDvD2uMYfVU\/XU1tv7Vvqmb5IXbMRsvd29U\/ecMslqmwyTmFFptHd3HGZLWNgU7BMqPeHtfARPVU\/XU1tsEf3jfVMQG4nvKGArtuHNh\/vl24upfvOVqDgbeVB4t9tB4WsPNPdQBaUGCwKAsCgbTM94u2Dxa2lSPFXprbpxmow8dGmVBRx7kR3lDOOVdug6ERfLu3gFJ\/l3oWHHYiDYbdKLXWFFrrORQNvc86j78qOMrWPmjxnvH24pNB1\/uesIfEex58TStpOxVKdB40OoU\/bB3YU+6y3F3pC19RjeNwHtrtleP7uptPVH+rptH0t6StWtDSoHzh4wtU2hajv8AQoG3uRMOFRxBGcsaAFnePtDsUA696uVak2Hwn03NaeBxBWxdoOaR1906p0rKt2e5jx81zDC3fOxLq4HqvvDajyJwZSjVcdEGeNbOvlYDX2heq96Bx6r36jQeCnEZY5Ib1iEHNs5FGHOx+4oO85arhJRaYjuGZaosQDTLLl0Id5dtbNudCF32jVdtHZxsaa9l7ugMYBziTqNjY6hlVhDhIgyIIkQQZggyINhl3DNugpKWDOpKxTw3C63Gkf3pth\/3e7yP1d1B1r1enQmGBrSAYHWax0LRHZuxrgzVuV1oU6LBKOpTaGNjCAJgJmEzE497RFi1qZU5O8S1XiKiwrnDiUncasHGrFiVqi6xaoElb3nr7C2i40r21wqXa8NEal3rtB1KjbCWzLajIgPYSIh2q9t6ue07qy5dspkgnVuu0m2C8XeqQGtquhzw6DXOlUFOrEF9x2pc6t2vrbWVGlrpYxG0ZHNJacRKtVqtVu4zqEJYLe5NYATUdYBMk5ABMnMArizaezq1StXeBQuNME3m9ONgc1s6NLG4ug9zcTGxcKu3NvilU7aXum1j9SBpXSgIat1oQlBsAar2ye5rQzmMa5+94i1c8QOXFwrK1SkVzhHlVpCk4K0LzuJSE1FQB70v2R2m2TSvdyJiA8c5jvhU3iD6bpDnMc0wlGBIVSh2b7Q0bxs0mV22lTFZrGicGV2tLhE2DUGdxT6zuwVE0o\/5W\/BrTnax74tzNLQiG9hdstMcV4ouHGVPsTtuH21HyIx7FbbA+2o+RRHYnbf66j5FLsTtv9dR8i\/kjbf66ih\/2Rts\/wCtoo\/9jbbh9tRQ\/wCx9tfrqPkX8kbah9tRX8kbb\/W0VLsTtr9dRX8lba\/W0F\/Jm2v1tFA\/9GbaH+toof8AZm2v1lFQPZDbLRDHVojgTmf9GbZcBj62jA8KBo9iq4H6e\/U2jhAeFTq7Q2js7ZVBwmLpTNa8RGLragaGxs1gXTnqkW1DsDZsdo1BCpeap6y8VMcDUI5rZ+ZTDGGAJaSI77kYLnAFYx415y88Lzgsak3jUz\/7XmPu+PekN+z7xTUDlUkCmwyKayKGPBPcDSoIeGNcKgiYIHwxo93HhjCOlO0eVFQRyq2XhpRyYM6zYCcagLVmwHwyYM6ggPC1OhgIwZ1nRUsMSorNgMsSKOhQFsVm30UNPtL\/AEoZIpuhAnL7SgbEI2+4neGVDIrPDiwFDT5cGt4Wrh9tSt4VISghpTtHlQ0+VTtUMfdB4YwinaPDlUlnR4VNQ8qn7aji8PIs+B3hlQ0eHtqC4fbRj4WIQK8M6EbYrwyo6UDjgUT4WInMhwrwzqItmigRb4e2ivDwxYLF4eRHR5VHHFZ4InSjAcvk30QoqOAKCEVFHBZNTRC4VjWbBFEbixZ+62KayoKEDBSHJ7WHMoQwSVmCCsPiWPxK2BQRPhbFFBEwR0Lj8aBwFR8iJURajJWzRMFFWYIhZvYfNW9yt\/8AfMf\/2gAIAQMCBj8A\/wDhHUKV2qOOZp8incqnEmuqbNrNabCWwjxr8HU4vdX4Kpxe6vwdTi91fg38Xur8G\/iHlX4Opxe6vwb+L3V+Dfxe6vwVTi91fg38Xur8HU4vdX4N\/F7q\/B1OL3V+DqcQ8q\/Bv4vdX4Kpxe6vrLpVA9E+0EWkQcMXsOF9vj+ouGImTnDK2NgyEgx96Cqt4uOzA8sEYvJERG3G4wjHEDiCaaFyaG\/Fpa39p5U7s6H2dMJrKwqOaLAWsIEoS4F+YdH0Ka\/Mn5lNTpOh9mz2gtSpW1XZDTYOKLVOv\/YZ5F+I\/sM8i\/EiPoM8i\/ED9WzyKd4H6tnkX4gfq2eRfnh8xnkUOt\/sM8i\/PD5jPIp1hH0GeRfnR8xnkX50Q9BnkQLalMiOOmPaIgnfe9nMqMjawxIEPgunL4rop952JW6wN86mfOErBGYPxXTOJxMkWuBDgYEG0HIc\/sLqbRv7f+X0DZ8N+JucCIJGOIFhMPvV9hrgRaz3tMZ8Rd8I2CwSET9QAGfCdOPotx6TbiBTXVXPDDONR4pjgEuRRpUhUED5lTXMswdFFlSk8OGKLvKvMdxnyrzHcZ8qEC9p0nyrUqObUYfevAPjRrbPBgLaRMfmE4\/ikwOIgoEGXh482DnCSjgiFI4Y7gVaT9S8gSd9Fw9804xnkQqu2brR1L7SMK7Bj+PngJx98ydrZ+wkBoiSrhcg0dXQYHOsnUdOOWRi4EWGCN2b5rYa2dxmG6GiZzwCNzuRa7akOc8zFIGYDRYXkTJPmytsTq18ruq1TaXEnls0BCpd6jmPFhYS08YgqezNskG8ulSrSBLsTKmKJ966UTIp1NzecCiTYm\/eapa8iIa0azoGwmwNjiBmnOulcuc0RLSNV4GMiZDgMcJgYk1jnc8WH2lSvlIQp1vOzPy\/KEY5xnwwNikp2qR7hSeWxp1B1bxCMQY6pM4CBiDKJ1oWBXy5g81jzD0TNs8ciI5\/YTs+k4RaarZaDH2lXqasPrDE5QwAcQgYcKr36rMMY6odJBf5Aqt6rOJqPJc45zM+RUaBd9e8EgZGttOgRAjjJAV7uTCW3uhDWacbXWOGVpsygprmmDrRmIsPAVs3aX95VpDW0wgTxg8apsIlrCKruvcdXXMSLc3kzBXc3WOrriBxwxxzGfAnastVxgr2CZtAeNIn7Rw2YAhHuFXXsA1vm87lCZXaINqUWn3dMD4vYTs4GwOJ4mlVXfEqcrlfbu3zn0nAaSyA8cAnMd50COH\/AEoV64JaaFShUbOdOoQTCECCCIxGI6FftoFwDXMbSpMETq0mQhrEzLiRnlbNNDjMCa2bQq\/nBSaTwxd9JMqC0FfeaVTUquE4WHgRvFSpr1gJe54TTnHGVf2n\/Bd7aZoG4CbuJWbio3K08i2SctA+LV9hOzRVMKUXR0apxqu1p5upVh\/aVuIcgKrbVuNIuurzrVGgRLHY3AWljrfikkGUFEtnlC1gJ5SqV7vVMt2Yx0Zy60ixrfiR891kJCJK1UYmSi18AhrvkgtofYu9tM0DkQ0IYMyBxdwdoK2EabouN3draYt9r2E3E53dEqt9nV+kqcMbW8gQNhTqlbZ7OtONhNMnTqwHiQezZ7XPFheS+HAZeJYrIe57gkE7nhtFgJe4mDWgWknMjS2Rcm1oH87VjA+hTyZC6EbVFwuzmfBNIQ5Ypl3vtAXS+Ok1wJNJxsAMZsJxRliinUqgg4LaP2LvbTNA5EEMEEI2Ybdy7QVscfoXfR9hNx0u6JVX7Op9JNnODeiFNCJREUGNjEq77EougwtFSr8aPmNOYQLiMZgml03mweVMqnqzRcSAQRAkSIBjMg2wsK12jmmRB5FVu9dxdfLoQATMuYRFsdEC2OOAW0PsXe2maByYBgGA4BuXaCtj\/Yu+j7Cbjpd0SntxltT6SbobyBEwVK6PqltV2r72IGsYN1nawI1szXQECci54IdjGMHGmuOVX\/WyMho1BD21tAbPa43jqxJsdbUhztWE4wjCC7KXLYe0H3a4Xam2rd3BrquuaYiaNV5cHMFSLw+o7WIcIEEmKeTGEuP\/AELan+H1DY6deXtraD4S6t\/jimjMhlQOARUBhE9y7QVsf7F30fYTcdLuiVTBsi7pFVaTh5riOIy4wQnAGao3y9XRjr3TAg4xjKyIsMMURJEjGUFS2zQYS1jdSrmbHmP0CJa44pEyQjJwsKFLWAoxjAWTmZWTx55oMYIMCqVrwwtvd4IcWm1rYQY05yCXEYiQFeGx51QhnGZ8U8AwlBSwDcu0FbKrBhNJtMgnECdUgeL2E3GOV3RKpuxxPSKF5picOdC3MeDxhQfI4shVikECtR0DEEQMwQbQRjBxhOrbMvHUOJ8xwLqfySOc3RzgFA3m7BuXWcfFqxTL3eqn3i9NmCRCm05WtmXEYi6MMQxppNuflPtC0pl1okGhRjEiwvMjD0RLSTk3JwAnATuI4k7QVQMJ9azoewm4wyu6JTRkLukVqu8xF1IgE2i0HgxaQjBjhoPtHyrz6nEPKoa7+IIB1R\/EFA1HcQUOcToCNW8VGUmDG4z4I+0E6hs8ObTNtQycfQFoB+EZ5ALUABJBBDBnwCGA6MICAhJPMcRV0ujnQrOe1wE5hrIE2QkTlj7Cbjpd0Sm6XdI4ItcQV58VYjEzUSE2pUqVtVzofVuAnbOMhmTx9\/r9UTIawjDECQBE6Frvi6plJJPGYncjAcm7mZYH6Ctkn9Cfo+wm46XdEpp+M7pHd16A85w5vpCY8azqAw59wJYJHBPcv0FbNrxOsBq5ptabYyOaECJxj7CbtUY2LaYLnGUhCEeMgSiU0Z3dIohTG5GVVYD6t\/PHDaOAx49wMICnbgOTABuXaDyLZ5\/SD1Y9hNUloJFBxGYxE9Kbpd0jgCtRmrVIYG3gDnUnT9F0jxGB3UDuJBARQWfcO0FXH7UerHsJvJyXc9Jqbpd0j3B9N45jgQdBkqlB\/nscQeDyieCCEMEMaB3GscEMMcSdoKuLcfWg\/wCzHsJvP7Oek1N0u6RWf21NZ1Iq1WyU5lRAVO8gc2oIH0m+UcmCzcDcjCMiERBPlLVK2bdw0arm60Yc6IAEI26s7LIz9hN6l\/lz0mqnpd0j3Gsxo+sbzm6WzhwiIUc25JhhGCMJ4AEBgqeieRbPrFnPB1YxxagMIQ8cc0Me8hUut216ZJFoFhgbU2leqOpULdYCIMowjLPvWLTOIXncicHGQG\/7xk+7npNVPS7pHuMVeKQHMjFvoumOKY4NyUEETgA3L\/RPIrkf0o9WN5OZSvD2tBMgSEXVqrnuDZEmOPesGiJivMTi4QEN\/wBSL2guokAEwJmDBoxnHDICcSZpd0j3Khe2ibDqnQ6zxy4cMVDAMm6GF\/onkVyj\/jD1Y3lYFZ32uUbIu5CqZzu6Rw2bieGtd3ea9pGg4jwGCLHiDwYHSJHCNzHANw\/0TyK5MjzusB4OrAj7nsJuWk9Epml3SOCHcTUaOZVGt8oSd7R4cMSLUApKO4s3D\/RPItnUQ49SWFxGLWAaAYZYGEcnsJuWl3RKp6XdI9ze8D6ykdYaLHeKfBgFzuZH3siLnW6gNgA+EbZ2CGMyv9+vFV7wYMBcSYmOs63JKzKhLCBgCA3D\/RPItm\/Zu+j7CblpPIVS+V0j3ARwFCjfr+xriDEWmBHwRFxBFhAIzp9O6XxjwHEC0EjFAOAJkrzfdqX6lQur6hMY84jEACBAwgMcMip3S73nVotkOa6Gcl0JkmZONCrQqtfSNjmkEeGa3CMuBpCGGaqHFqnkWzYf4Z+j7Cbn8rolU8sXdI7iclJW7incLk+F9rxEfgtENYwyzaGgyJdExDXNc57iS9xiSTEk5STMnOcAL3lzhlMeXA69UKupcBJ4Mw8\/BAyi3W97ZOMNyThipKp6J5Fs37M\/R70wx94Ln8rkKpaXdIqOPuN5p1H6zaVNjW5g6L4f2gODBHASrjSYIN6pp0lw1ieEnCTjwE4ZCeCr6J5Fs37J30d5N3udHeC5aTyFUvldI7mySMEAZYLZqpVe4HrqQMsWqXNhpDNTjGGMVaqd2c4fe6LdUjGWjzXDKISOQidoQwE4DDzvawgnBUHxTyLZn2R+jvJvfe5aXdEqk4ZXdI4DjkjEzUhBWRUBYrcNHadJsX0CSYfBI5+cnVDX5GtpOxnDDFgulG61HMrueIObItFrjoDY5sS4MGbBHDM4KvonkWzPsnfR3k3uVuC3vXctJ6JVKNkXdIo5ENxbgGCpQrNjTcIGzgtiJGcwRlBCe0sP7uceY6cGxjBhJxSOoSZtGqTrtchRutJ1WsfesBceIR8adVq7Pqim0RJADgBn1S6HDBDUMSbAJk4oACZOKCfe702F9qCEPgNth6RtdwDEhgGAAYLJ4avonkWzfsnfR3kO4SwW4YB2CY70XIel0SqXyuke5QCNK80g+kcvltEbDC0SMkTd7lTZEgyaAIiwgWA5wAUWVWBzchAI8apXu73ZjTUEC6A1tYW862LgY2xWPcWRwRwxAVWHwTyLZp\/RO+jvIbqSiVJROCxWLOpFTCiCp295rn8rolUj6XSO7jDDHBArOqrA2Lm85ulto4RFDVsUMOtijuDETVqr+geRbN+zd9HeQ3MAp4JYbFZgkoEKLVnUD3lufyuQqjpd0juRJSChCXcK9EDmxiPRMx5ODDAKQwxIw1vQPItm\/Zu+jvII4YKdqicGfuEQoi1QNqge8lyicbuiVRyxd0juYC3uVG9NE2nVOgzHEZcOCAUBhhuK3onkWzPs3fR3kNxFE90iFEWqVu4HeC5aXdEqjpd0juAQo9yq0XWOEOHEeAotLeeJHgRJM9xEieGAVb0DyLZv2bvo7yG5gLO6xCDsSBFhwjvBctLuiVSyxd0jgClahi7o6oBKoI8Nh8vDgz4J2biKrn4p5Fs77N30d7Z1HuxaUWlQwDvBc4fG6JVGeN3SOCMEChLumtDnMMeCw+JQUgoncTwVvRPIVs77N30d5DDDeAKDlHvFco5T0SqOWLukcJiZ91IIkQn0zY0+LF4tzHDV9E8i2cZx6t30d5BDeZGNDN3iufyuiVROKLuU4YYu7MqZZH2sEFAoT3FT0TyLZ0v7t30d5DehRHeK5aXdEqic7uU4YqXdXtxwlpUTaobiQRKqeieRbO9B30d5BDeYwBHvBc\/lchVGOV3SODMs\/d3AWGahuqnonkWz5e8d9HeQQ3mMJ7wXLSeiVSiPhdIogKOJEQl3droWHxFSG6qQ+CeRXD0HfR3kEMHDvTh7wXP5XRKofK6R3kQbCiDaEIBTXOM1ADhUQJqp6J5Fs\/0HfR3mNODh3iMHCh3guXyuiVQ4ekd562Ubp4zHkWz\/AEH8rd5HAN5DBHvDcvldEq76D0jviCecx5Fs\/wBB\/K3eZUd6nvBcRnd0SrtoPSO9DgM8EgnDMVs70H8rd5wRGA7wJQQ7w3HS7olXbQekd8u0FbP9B\/K3ekcqIxId3OHN3huOl3RKuvonpHfLtBWzfQfyjvKBgJ7xbPa0RcS6XySrsDbA9I75doK2WSCAab4fOG9SO7xRJwSs7xbNe3zgXdEq7k2kHpO3y45itkAwg2k8f2hvSKzrPgzd0zYM5Ue8WzCbOshxghMbjY5zf7RPt75qkWhhPiK2c33wok\/OPub2iLFFRWbukSre8dzvJsZVaToBEfEr1RgObUDgY2h4iJZoGejfN4e0jX1YCMol0oaYEngVam2yixrOGETy+Le0FmUQs\/cJKJwRNvea63mo6NSg0Ua2XU94+wmAgCYWkOCBxGYOIjKDvitVqu\/3e7DWdnqWMYMUY6CCYFVrzVMalR5cdJMd7zwwKkpbmSmpW4Id5W3qkNamRqvYbHtNoOfGDiOURBp1bu41dl5p1KJPvXNtLRmmBNus1Crd6ralLK0x4xaDmMDlG9S4mDRaTIDSbFVNCs1tJoOvVdJjALdUnznZ7BiiSE26XOLdmUySI21HY3ux+iLQCSZmA3vAqSz9xs70i8XG8Op1c1hGQgyIzEJtS\/XEsvI\/vKB1STlLSYeM6EKbdrvB\/SUtYjSYQOlT23djpYR7Sj++LrH0Sv4xdfmlD\/nN1+aV\/Gbt80r+NXb5p8i\/jV2+afIv43dvm+4v41dvm+4v43do+j7i\/jV2+afIv41dvmnyL+MXbiPkX8Yu\/EfIv4vduI+Rfxe7cR8ig\/bF2DdBPIE7U2zd4R+CeSCLX7Va4\/FpEnkUKNCteHiQNR2qyB+KIk6CBpQ++V\/qRYxvNYODGc5ibd+2qxWKzBarP\/GRf\/\/aAAgBAQEGPwD\/APAz5\/ubp7+Anzta2HMh3RiBrdEMe4Ldksg23bEjN27DzEMm7YGfMpl4wBqJQWSEplgMBgEA1CdMnVg0wqa3MnYPyHdmM1MV41lLGnGeSbCSt+6zsZl4+vO503sU6scJjmRBMg+8t0x5gAogZFH6QeKqQgiUKiUpjABjAG\/1S1Hu21kiLsiM6cJbo\/sfqimrNi2jjGsu9vafwFZuUBtCYmPz+JfbZojNzNpRbqQSfAwOmiooU\/hmIHJpB5GO27+MfN2z+NfNViuGzyOfIJu2DpBwQRIsk4aLEOU5REDANQ21iXp76VS4YDx8DmzJl6WynYEjfijZxdN2TMJZcTFEYXba5osjaHs5+6Xr4wK+OSlKb9OPXxONsMN+sDLDrAcvdzJ5jx46xhG2xnuel5aCjWdlJXam7aS8XYbuJI4VGSPzPCrmACgcCkz7lHqdLjILtxl1BJYytw2LrMeWREHttXGdm3cY0jHPbhuRV1IhKTqwAr45QBMAAC8f1UFg3qZDOI33cWMYvLkcONMVnva3wtCYnLjt9mLqaNPRCTeULIWs68VESCVFIUzHOAKF1i3M9k\/FPzKzDjuzMo2aE5HniZz81r8gGNywATUSdRY8XLfDJFP3hsJziirzEEwiFdS\/2bnTA56dm+LXXVLiHpzgJe78PzN33bEJzVs2TL5VnpacaXzHIPj2ud9NLgHuJCpkaFSNTlMqKpURqkVQ5Ux5ufmIUwgU3MPHmAK+3ygAjQBEKjStA7Rp201I9OOH466WlhQGcscWBhTpOZYkiJ2xeoXDs+aDIe+Ji9F7SdXJKDkCKfyD51Msppo3tpRqZETImZr8yyaB+dIihikNuOwDwqIjzco7V\/dUr+pu\/o5yb\/1hRzHY+QrRxjPGtjDwTlmlui9G9suYcrK5fznaFcMPDuxpznMimpUTARM48nORmvX++mSU8M1NygavKalaVDu1iHpHzQTp4Lh2+bt6goOd\/MrEstbd5g0xfaWQpWAGPuJxfku2aqqytstTLmFmfnQ506AY4KF\/VdXPUdjAkCfIuEMCZAyTZRLpjFJq3D3FbUSZ5HlmolJ2wUkI8ygUOmVZIR7DAIadRWNseYFybMR7AkpJw2NOkLJuQZiMizrEallZKJs\/IszIR8UZ2oVEHKyZERVMBANzCAaSuXKGBsXWNbCa5U1pbJHQ7nbH9snMbYEnVyz95xLBkFf3RlyaT6Yc\/wCMoHA3VY9gpW4LB\/MqbkJrEecmdtR55e7mFnpTxAuayr2gYkir8YZ4tIIuY5qusg8MKZ0i\/wBXUzKFA6XMBViCUpwUQP8AQXTMQwCU5VEjCUQHYQHUTFLrq2nZXTt9oY3jjKMzm5k+nfOk\/wCDHol5zlA7D9EeYECKkMJgAG5g3MQNdYnUWV0VlJ4owZkF7ZyzgwFItkCcjFrSxsyNUKqqSN5zrFMhAoKhjAFQ46u3qjW8JfFNmZ8sbpTuhcyTosi8vzI+LrkyK2mmrwvO1PGpNYMGbsDCCqb2UajWigAPRTkZ+9j3V3QmKmWE75RaKmOs0vPBki7xU++KifmOlJSjG2mr9QDCI8rspgESiA6zHiq1HhnCOT+rnFXRVZyrhQwRzS2MdOLZxRdblEyQlBrEovo+435jF5TCBjHEeYa6d2zbcc1iLdtnqJ6WLbgIpiXkZRkJAT7mIiWDQgbJtmjBmmQhQ2ApQDXUTcl02uGXM5Zm60HzDC+DWVzt7UVlGEJgnGSEzke\/LhVj5RS2MaREkcGKardq8kpWWErNo3MAOHDcVskdH3TDdOPWz5qMvY1iXTlGwslRUYc9Sptbtupzc8YtJumYicgv4ZsgqoUKCmQRMGPuqDp+lpGRsC\/UHrZeGuBqhG3rYV4QbkY+7Md39CN3LxOHvC1ZMgorpkVVbuUjJOmqqzVdFZS4+m7B+Lm\/U11C2QVBHKr6WvMLGwjhmUeskJJvbFxXVHR03OXnfjJkukpIxcYii1jPeSIuXybsqzdNg+yN0bdL8pZcs4IZhDRxM7YulZFAiQn90tm\/Ljc3REzDhZIPE5wjVwEoV5eXfWaOoXCkDNWzkXp7tC4pnMfTvfr9mF12JcEZaE9ddtorTsGDplcWPr7C33BImeZpFFdNFYijdB0iq3JZvUXduIYDBUhB4Jh8MJWvbF2S97tH8e1uG6LsSuZaTnoK3FkHxjXeZsDZNE6AJtiG8U5jGHXSt9mrNdMdlWRbFhdPDm1GmXo7Jd0TU7JtOnfGsW1ZSC9pyFlRMQ0Uun4UQy6ZX65GvjG5FD8pAN1X9cGesAZzxNYtm3b1Z5extc2XcT3bZsLfl7ZmyPK41x+0gZC7YiOaSb1hjOTkX6YtBVOkkCJwEqRiGPe\/Th0k4Wh+pbJOM5x3Z2SMpXteL+1sL2vkOMcmjpbH1qRlrx0neGULhgpofcJE6CkYySfonbILOFQMBIQ3U90A4kPZ0+sLyPiYePzt08XfJxdU1XKdoTeUWN127cq7NkU6hAM2IU47nOmSpgtvqV6dpaWcWnKyUha102pdLNtF33jDIcGk0WuLHV\/RLR2\/aMrjiEX6C5Tt112j1k5RdNlVEFiHHWQOhOJ6QMcXnbdhZ4xbhJDKMpl+54a43jTJyGNlnUwFuNbGkGrQzQ96lqgm\/Kmp7uAjStNdNUvZeBrTzwtn27sp2u8a3Zf81YCVshjmFtuXbOWa8JbVyGkRlyTipVAUImCIoEAvNziJenm6rT6crQvDrLzrbl33ZdOF2uTJx1irp\/t2Iv26bXs1S9bpaW0neF5XvfcHb6Msjbka0QXZsXXjPHDdMW\/vLI\/VH0lYTuzEx5n3S53vTfN3pa2T7NYHUpIKxNu39MXLb15ysCiYFCxjp1CruxAU\/HTOYuse5oxLdUde+MMq2dA37YV2xQqAznbXuVglIxbz3dcqbtg7Kir4blo4Im5aOSKIrEIoQxQzn1hW\/j6KypL4fJYJ2tgzc9I2xGTxbzyNa1juRcTkTFTcgyNGtbhO6TAjZQFVEgIYSFMJy5B65ZfH0TY07kPL+OMxO8Yx8\/KTcNGPsas7DZoQBLlfRcRLOkJ38wSHXcCyROid4cE0hKQgD1KQt5dOtqYI\/QHFYsm2Lm2sg3JfKtznyQ\/vhk4bPiz1m2knHBEltUhimRKoKplhAQIBQ5rF6gMyXUwsjE2GJDrkyBkC6pHxFEYqAh7Cy+Xw2rNuVR9LTMvIuEGMexapqunr1ykikQxjAGlHXTN0kYHtHEikuZpbavUDcF83hkG7GiCp0W5JVxYcta9lWrNyqQeKtGsHEyqwU\/JeOsJDGG5sPXnjxHp96rLJtxe8nGO29zHuyw8o2Kxdto+Wu\/FVzP2MRLi\/tt48Q+MQMg2B6zQdIuEFniALqIP8+dRU3JlYOZIts48x3aTZpJ5Iy5fS7VZ62s+xYd47YtDroskDuXz92u3jo1qQVXCpakKaUXwN0RYDhLIiXPvDiCu1fNGbrvZR5vEM2Ru25cep2hb9uOHDQxFDcjMxCiAiQ6hPpatHpy6h8Zx3TNnjIr1GExHcVv3ipe2CMxXQoQ4pWVG3FKMYqfsC\/wCaWKZOIjpIjpnKrJGaoPhenQbLCUwCUxREpiiAgJTANBAQHcBAQ319oz\/2RMw\/8nlNdWgICrzD0YQglBLn5vEDNducggBN+cCianbSurpLlctvGxga3pj9IhcjlizWANkgwXNc\/wCeQXSA25+bQQwLe+++\/wAm935uf6NddOUR0hMZN1iGy+t2\/wDMFhuGx5Nu3gOknG12XrLIzUk\/eB70wttfG6rSMZg+MQ70ZBq0HmVW5RvnqS6i7ySsbFtlFQTUOg2PKXLdFwyyx29s2DYduNzA9ui9roegCDNmjQpSgddc6LVFZZN5F9LPRdiO17XAyy0Qlmqdv3LWUpWEarkSTm5S0sVqW3BW177yj4qSLqURamUAnvJzFqNv2B154GtrBELcsq3gy9QmFrnnLpxlZ0w5cC2Aco2DdbYLvs+2W6xikcyTJ9LfDzmAzlukgCiqeGs24w6Xsb9S3Txk6RJZlx5Bd5TuW1HePcgybZeZspOTLb9p3RFSNjZIgUjBDyiR+QZFAzdYSGcM\/GkcvsLVj8Y5cx1esjj3OOHWNwqXMlZU2fnlbKnoSWdsYuVlrOv+0FUXbJ24aN6PknrMPEM0Oc070idOnTLbvVRcGPGFq2\/kuaeZGuO2nSWb7xWSXY4csSHtOzbuG6JmIjJOKRdmBQFgmZIzHwyKNVObG9xZ8sq1sa5on7Ti5rJGObKuF7dttWDccol76tZzK6H7VkvPvLebrJtnroiYNlHya3gCZHwzm\/qvh3qLt5qRi36nencIV1Jp1Rcq5d6d5osOnIqLlAQF2NnXfACkoI84FjuH0AHX2dJIi6kX1xdfIYbyNkFQpeT3mBwbj6OvTKDdwmIj7okxzWeHbLCegichidhqX3i4bekUMxZvxnfX2gcVGOWhRlQyBFXEwyxiiOiUTh4wjN4ux3DsSkEAWEjw4AACbl19otj+9ZmPaW900tVuuC2GDoBB8vY9z4zl0sgOCmN4XiNI66MYsz+Fzc5V5MC0\/KF036gb4EkspgrGOYeqG7XE02O6LI5UzNJuLLtxQFTp8icwjL5CmpBI5hA5TMhEoCO5Z\/8A7TvTV\/ytkNdTnWnk2xLWyDk3GeTLWwZhhW7YhlPNMYtUbLjMhXjd9vxcog7jW14XI7uZi0TkwT99Zs2B0kDpkcOAVvfqzcWPbUNn\/pwvHFj+18mQkHGRd0zlmXtfkDj67ccXVKMmyC9wWm9j7iB81QdCoLGSZorIGTAyxVPtCLGcSDha1rPzPgq+rfhjqD8PjrgvewLgiLpfIIgIAmvMNrJjRXMFOcW5RHeo6YdVHW31q3ddGZHORr1z646fM+3RY+T0bwvrIMpM3KwvG5sH42xg5yBLMYW5Jwz+IF6BGajxsidwLgEjV6henKbyDcuYpK9sS3vF4siT9NOVmza3stpW1IBiy6oK4pazY1rZ8tbd4EZrt5AqzcGoEETG8PmKOeIp44ASS\/Q3OKXEwAwLRz6Qhst41UaqnbiJmqws3Ek6BMwlH6C5yh9E5gHFrdgxYxyBehC1zAjGsmkckJz5Py4YVDpskUCKKhXlA5gExSFKUBApSgHQq9QiYhB6r0c9OBlHyEVHoPjGVxLaoLD76k2I6AV+X8pQ\/wCUER5q1Gpkjv10DKJOEkXRjCt7k4XbqoIPSprH5BM0UVA4Vp9XUHdvWBgqSyndvSzl3KiWRMYyvuCdzyy91o3JGW9nrHK15IlhrilGydwt7qtyQWOk0kCOAMg9buDJOE7p6UuobqVl8NQuSixD2PPnCxpXDt\/4yu2Fkm0vAXbYmT7ttu6sZW1esG7bAn7ynILNnDRddufxUFlUzZRfdJuYMq5ix\/1MubCvNxOZAv2x8h2qsNlxkxFwtwY5mbDtuBiVm85GTfI8ceI794TbtgKYpUwDydQP\/bt6WP8A3Tp319nN\/wDdzqb\/AOQ1jatnrLcWJaFx9QfUnfOTH7vJM3AR8tc9m48sS8JfHVq47tR\/JN3A25FKFt5zJyQsSoKyT5+PvR1iN2xUukTqusmybbszLOQciX9hbKUzbEMxhD5MgG1lKX7aMtdyMai1aylx2bIQzts1kFEzPDspE6Cip0kkCpYLjpV0Zy1sfKvUfZNuEMBQ9wtuNzBcUjHxxOUAqi0Wl1gJWogUQCu2joOmzV43UoCjZ62QeNleUQMXxGzlNVBTlMACHMUaCFQ311KIIN2yDdLrV6Zkk2qLZBJqVMIjp9AUwapplbiRSoicOWihjGE1RMIioEfGRkf4js4Kmj45kxUXBPxfDBwo1QRUcAQTCIc4moI146wZ0y5UQB\/i69+ozMtzZIgzLOmpLsszFkjkTJErZKjtgs2ftG15K22jGuVUFUVyMnC3hqEPyjp30zXxgDEExgGXhFbSNiZPH9sRdmxMI8bKsEkrZjImMYltV\/FJOPEYPI4Wrxi4IRZBVNUhTh0zY1s+4JCQPjPr3yJ0wFuFycgSNw4\/eS+RsOyfxYSlKRZebtcE1HYUodyTmDcCiEnhMswuhZ\/SnhjHVhWk2UEV4qGvDL0a2yZku9UI45aqyjqPlINs4AoCZwjCpJFGg01jvpwwDemWrbtOx7fi2czNsOkzLDWeyTeKbFElz5JvqQNAKPp27rwlgVdu1XCqoJeIVBHlbpJEKXqT+zQe3BasNf1lM7ryvFFxpdGF29sdSVpTyjiLyRZ0LKsIUjR7eMYlHvn6kakCQS0YZ2qYzl4qI9KmfJ1ZNxcWZunXDuSbnXRapsUFrouqxYWSuRZuzSKVNs3Wm1VzkIUKFKYADbX2jP8A2RMw\/wDJ5TWSbF+ztyw6w9lm1MTsruyFPs83XZgVWYxsvdjCGbQql0WdGyshOIkuddFcWC6ZG5BKCvPzgUBfw+VMsL9TltJCV4tiyR69bvvNGVOx\/lSKhbTya1tmyJ1yionVBF4uNVaAABWupTpC6nei2zOmy68iXvF4Vyf1RtCXczzdaWR2UujCw9o9T8HkF9OOoqxxuZ6kkq4t91FxMQIoulY9ZA53pOmTpgO8eI47w1gub6g5mJRcHSZzOSMlXHPWfHyjxoQ3u79zadl2O6bsVVKih8YdAQA5xEenmft21rZUzp1C4ps3OecssliWri8LsnMpQzK8Ym1DzzxBSTbWbj6AkWcVGRiJ0mKQNTuQR94cuFVcAddGM7LtyybzynkebwP1BtLfimcVGZOdvrRlr1x\/f0zEsEG0ateEQW3JOLfvzpmcybN83IuYwNEqB0t9Uce5vmwLalsudGU+6fPDubgXsayH0XcWI56MeuwefDLmxbC3FFEg3JSD7kvBtlUygJQDXUVj9WKbXZdLKwLoxVNRcuReJsHN9lTjV7PdN\/UVCpLEkGbhG3rgMhKimjzLlEZqBOu3UFUyc\/8AaodTzaSu618e39dshgWSu8ii77NPVNLysk8yj1DyqUgB\/i8TjaXlXSMY65FElrtdOFkViKw5QETGERMIiIiIiIiIjURER3ERHiP9WIvN0eyIrPdJWd7DyE5e+B4y6OPslHVw\/fDYihS+I2aJvLqipBceYExBgAmCpSiH2eXQQ3I0Wa42npfpgwo1QUFIzpl1O57TvC4pGUFYDJN31vNJcWpFy1AI6MSMJRMUQG1sZ23GJMrCsa04HHMFCLfylu0s62YJrarCLEBD8qgnCsyp8Nw9OvtOOkqyUUmEPfVt556Kp8sn4h3RsB5Hva1sk48uaIWIJThKo2C2jU24nKBDt5JyUwAIhrqb6nX6AJSXUFnlnjm3SuWAEXLYfT3BGjjuo6QMmBlY6SyBecwQxEzCmCrLcOcDUn\/+0701\/wDK2Q11gf8AbFbf9BWM9dYH+WYI\/wCnnHuvtlMkWpFBO3Vjy2cWX3bEIZI64S9x2fh3NVxQUaKBAE63vsrGpJ8gAIm5qduoS3evvLVxS62W7QvfOFyfFLscW\/evVTmhJ3BSKeMXt\/N1WspGJPWM7Iy6rViq3duI+KMzZGQTA4l6h8yXD0fYKx1fLnFd82vgVKUmbtuHIF0Z0uC238NjONx9E3deMtIyc40uh82eKuEEDpsG7dV44MRFBQ5czoPVxcvUehi7knbkaiLh0nlfFBHC4iNBEVVQE3t1ihJNBUyjroQtMjUvIYPeTjlHLSPKgIgAK0VECjy1oYQAddBtx2nNRly2+t0gdPjJObhHaUhGC+icb2\/Dy7AztuY6Sb+ImWS7N2gYQVbO0FEVClUIYoXFcRYiVuAbdt+buD4DApIrzs4EHFupQ0PCIOVW7ZaYlCtBQakUUTTMucoGMUBEQxv0pZx6R7pmL+ui35c+Irs6nrHsCz3istBAMwrimyssWDkl5fkHdEw3cPXTONbuk2L1RkumAisKSanUF1d4AyFkrp1uLD9su72jsfZLyEvkDDt\/GbKFK0xJBIXi1XvuFu29naxWMEo2lHdJBRFJRuokYwF6zem0z+ZkOnu2LAxpmKBg3Srhzb2NMp3Jd0\/bEm0tlADC0t\/9JEAyM5etUwKRwvDAuUoG8Ux9dQP\/AG7elj\/3Tp319nN\/93Opv\/kNY2ujz\/Kc6\/8ATzkLXQ\/\/ANqa9v8AoRufWOf+0B1Of9KD7ydVMxMuCRkVEdY3TpNSj93VJuwh463sBSD+TcHNQCMmjBuosdQfolTIJhGgV01kWqiTmPkDldsHzZRNwzetXSPvDZy0dImOg4QXQUKcpiGEolGuunL\/AO4\/WX\/yGzHpp\/lTf+NJrG\/\/AP2Iv3\/puyDq4MxGhnDy0upzEOK8m2cqsU6cLcNxYmYtMZ5JsT4icwkB0mlb0Qo9TASnQaTqRwAAMA6xx1H4D6GOmK6bQv23IiQk4tg0lXc9j+7FWKI3Nju+IxvcSbqAu60JkqzN43XSTqZIFExOkcihnvT\/AJB+zptTNOQrftklwX+HTzaMHeFv42fvFzpxdiXlOTmX7ZQYZBfM0\/fDRyXinatlkDLmTMsmU2EIXGeNJDC+OmOJcfhYuHZiPGIm8U2o5tiOewePZ2K9+kwjJy02DkjN43By4Kg5SOQFDgWo\/aM\/9kTMP\/J5TXVe5m5iJhWzjo0hmqDmYk2MU3WcfppttXwUl367dI6gJkEwgA1ANx1J3dfmZcR2XacK2VeTNzXXkuyoKAimiJBUWcyEpIzaDVsimQBERMavcA66mMt9LKTq7rKytN4mxFiqYiIt43dZZvO2rLtXFLW9bfjSoEkXLe7rxRIhEreCVw8YNGzkCgChQDorzddS7ueg8idJ0d003tdiKajtqjmTDqz2ekW72QKBkEHl329ert4zIqIGcfC3Ri15DAHTkwte5bcDMmAcU2VgfOOLEZVuS7rLunFsGztCPnHcE6VTklrWv6Ai2sxFSKJFmK6Tk6JVhXbOU0unnoVx7d1vXjfeN8iy3UBns0FKtJNnjAGlnS1m45sqekGKzmPa3ZchbmkZZwxUOR0wj2CCqpSkdoiceqfqglHFjY4uedy\/1lTxXjI6E62sC8H8Xa+KYmMYuzNBlLjyjE21GKQLYhwF+tONU0jCJyiPWHnT39K1Z21sWTt\/sviahpOwsbi1byUf0pdIEO\/cKMGUMW7Vmjor6QKRIxRRlpo6Sq7gCKzf2Y3UQ+lLYsfLt4XEt0\/sryFdi+w\/1Pxrt61yNgaTTlgQUgY\/J7qJcqMWQmTIhd7FdFJAy8vzaEBAQEBEBAQEBAQGggIDuAgP9WOobpnuJ0hHRWecOX9i08w5aC\/Rt5\/dsA7joW5RYlOmd2a25s7d8CZTEOYUKFMU1BDB\/VbnDqSwvmi2sIhdtwRFhWlj++oWUe5AlLMl7UtSfNJ3BJKxxS2q8nlZAh\/DKbx0CcqfMIGT1NdWmFeoTEuGSXzjDHts5DtnIFjXpccjOX9YCMvApXe2f2vJs2aTWUsz4SyOQ5PGKeO5h5ucKdOPSMzuFtd6+FLBLC3DdzNgrGM7rvadmJS7L5uJkycnVetmErdU66O3Iuc6xEOQDiJgEdSXS7YOSLSxTcL3K2MMiku29YSbuCDI0x\/KPJFeMNH2+u3kRdPzuSchuYCcpDFESiYDFzTiLJOXbEzFL5VzanlZlN2Dblx2zGxLFLH9q2Z8KeM7lcu3Srs68AZYDpnMQCG332DNnSNY9921jS58qOMcrR963hES07b0SnZOSLXvZ+m9i4NdtKLqSTCCUbomTPRJZQpzAYpRKPVVFZQzTjbNhuoiaxLJxQ2HaNz220gEsdxN5xcs2nG91PnvxBGcRuZAqREdiAirziIKFKS4b\/6BM\/Y0xXj27Ljd3UlgfOUNdyEZieUcujSijTFOSrDSlpQ1tNZVyoMWzfx6byIQIRNN6sBQpfmUeuTqjg+pLOqGKsj2TgG2ARyLfGHcZ3\/ctmy9uWXky+biyXNK3zf7SypOVI+bwLJtFx6blomsYXJykKS9c+5L6ksUZlhbq6eZzC6NvWRZV7QE8hLSl42Pcra4HkrckiuxcMm7e1nCaxCpFVWVcJmLyAQwHxrdlpZLY4T6mMJsLhgrFviegHVzWJedjXO6ZyknjvIsZGOmU+zZtJ5gm+ipVgoqrGqKuimauCOKEsrPmX+pfB13YQta1MrxknirFF9ZpWRl7nv+2VIOMnWljXJbkNY6SjZ8oLp0uoJFhEOflVW5TpkUIYSnIYpyGClQMUQEBoICA0EO3bV5Z56Jc1W104XRkS4XV43hhHI1ry8zhYt9S8gtKTd4Y0uWzXKF44qGQljC\/NGJtJJg2fLqnZe5peGinacT1KfaLYnncfW47SKycyd7dSnUFLWm25BSF7ZFj5GcwNtNpRuhUqRjvWoEAacwlqUXOGsEknbgmbtlml2Zhy9ep2S1\/ZbvZtHkjkJOY+HIoR0DbEA0520HBMigyi2pzDVZ0s6dL6yL1zW91T4XtKzL56gMS5nQx9OWBf8AI3SwZY5b43TXhnE1HSCUOd49NYpuUxEjJ\/lQ+kWtS9McRjLNOPcLL4Du\/LFzyy+QrWue6UrhLkWEtmIYIRidrvWZ2poosGuK4LDRQV0xIYPDMU+Euka+L7trJdz4qXyMrIXraERLQNvSyd65Iui9mCbKLnHDmUQUjWE6m3WMoaiqyZjkApTAUMCY3xrmGwsOSWHMtzuSH8rf9tXLczCaaTNiyVoJxzFrbTpo4Rct1H4qmMocpRLSg1ASmtXpXvzItqZTuOAyLlS+XF32ZDTUDBOEMiXStcLdgjHT6y8im4jwUEqhhMJBqAAJqCYdPerPppzPZOGs43lAW3bOYLJytb8zJYsyYrascEHB361n7UI7uG0L1b2w1bRb5EzF9HSjZs3UErZZJVRx1DuOprPGOcwW3ky3MUW7i21cb3vla6o6wG9hP71eTaScdkaMiom2o6SJcrUjdGLJyiDcwHKQpSBrFvWjd\/VLhbIVpY\/ufNk\/IWHa2Pr+h7mlUsr2rfUG2bsJeYlVYlopGyV2IrqCqmcPAQOkHMcxVARWEBMCSqaglCgCYEzgYQAR2qNNW119POqrCknZNv8AW3cHVYbHLPHuQELscQEzkS4Lz\/NFObcSYwoTRY2b91BcyZW4OC+JuQOQzrB3UHESjYYuVWurF2ULQWZsMlYevgWp2QXJZ0m8bO2TlnJMji1lYl6kvGyjUQBVMFUkFkbj\/wCr\/wBdWBl7PlhUY\/nHJPM64Hve4oqnIkW9rcx0a5oN+uCAgQwEkF0RoPIVMo8gWfnjrRy1bHUte2P5tC6bJwpYFpyNv4Eir1i3ab6GvG+JK6HC13ZZfRskQjxuxcNoyM97RId0i8L9HRlFDCY5zCYxh4iYw1EdqAG\/dtrqd6YbduWIsydz5he9cXRN2TzJ9IwtvPbpjTMkZSTYxghIOmjcR+kVH6dRDsrpNF31t9NDhNIwHIRXEGVzAU4F5eYP84w+ly7abA+60umMjYq5DKLp4QybIOGxQHddq0dXS3QVcED6oConX98GoPqEv\/IlydWnULaKijvHVyXla0RZeL8UyyyHhBc9k4yZPJ1SQvpgm4XSaTMxIvTsgMVVog3cEKtq8um7qStA9341vIWj4FWDwYq7rLuyJMorbmQ8fXIRNZzbN82u6VMo0dEKdJZM6jZ0ku0XXQUeyPTN1rYWn7Q8NRGGnMsROSsP5bjo12c6owUtKYqRuSDm27QDimddsdgm6+uLRMTCGoO++vrPdn5jtq25xKc\/6veB4G4oWxL\/AHqKxHZC5UyXd4s7rmrfcrJgD6MjY9go\/D6Kz0UxOmfDODcKdROE+nLpmxeu1vCdx7M2Pe8nI37kaJbvISzk5JC0nkbBMMeY1t45DQcYjQCyKyjhchxbsvBt\/p\/h5yOvnJE5ccvkrOeV4+LXiC5DyVPCm3IpHNXii0kwtSzLbZsoaHbKKByNmgrGIVZwsJrn6u+lLqNsDplfZLG2L5yJBT1n3m\/k4\/qCth4mKmYMeTFky0UWCfXIjFxcg7KcoLkn2S73nVM8OBMbQ\/URc9lXvnKHtOLisoXtjmKkoKyryuqOTFm6uuEg5ciT6GG4EEU3TpqJSooPFVSoh4IE\/wDwCpzlKYSJFEypwAeRIgAIidQ\/1UyAAVEREAANFVk7vthoQ31azkc4Oben0UWbhwubfuKOuZtdTBwWleZFlNqFoHEQEsUIGAPRXRRNPs6G3LyISSwiFAGolRYqGKFB7QDu46p8fb1CtQ9wm9qDQf8AYvv1T4+3rStPcJqtO\/8Aov06\/p9v3f4hNce7+i+Ot55uG9Bqwmth7h\/mvYdU+Pt6htT3CarXu\/ovj6ND\/P7fbj\/IJrb1\/wA17a\/p5AKhUKx82FQ7\/wCi+GgpPNxrwowmt\/V\/Ne+h\/n9v9EaG\/kE1sPcP817Dr+n2\/wD7BNcO\/wDovh6df0+37K\/yCa2ruFf5r2qGqfHm9e73Car\/ALl6D+f2+\/D+QTW+1f8A4X3ar8fb0\/yCa76f\/C9f0+3p3+4TdN6U3+F+nXMvcrRIv747Gbp80UPdrwI+87bXWDiirJox6vsSk\/clDD6gHQO2qqLxmYeUrxmsk7ZnMA8olI7bHVbnEDbCAGGg\/wBZoFKAmMYQKUpQExjGEaAUpQqImER2AOOgtOz0Au28HDpeLSKwauZxuSZbCAPIaChotVJ9ec9G1o8Kks1iYw\/0Xz5I9UtMGmQr7aWWnILeA3iTEYX1ciPjgZRZkrGICyxbaYOyIkIVMjOWVSH6JlzjUwn+N5LvV2uUaCk+yKhbLNIQASgRtDWKzhWTYhS7AUCbU0YFrmknHMFBFTKWQ1eata\/SLMlEB9VNFA8y4+gAgUSZEv1EaCUCiAmRl0jGASh2iPfx30H89PdhEQ\/5zci1ARCgjX47uIhqgTD2g0\/\/ANm5E7OAbztQ46KVKTWOcR+iU2U8gEGvD\/RLgJ9\/QrsY6ZfImERFVnku\/nBOG4n8G5lOWgca00Hhw0\/QoiJf+cjIQ0qFDCADcQhUQ1U0NcG41GuSMhcQ7afnFSo\/PoQCFuGg7m\/5ychjX2\/nHXfu0NYa4t+P\/OTkOo7AGwhcW2wdghoQCFuIKgACH6Sch7gHCv8AnFUeGg5om4hoFAD9JWQgoAgACG1wBtQA1yhDz4B3fpJyFuHb\/wDqGo6qEPcFQCm+SMhD9HuCtwbaoETcNB7P0kZAH5az410IhFXEAdv\/ADj5B3qH+3492gH4XcYCAiYP+cnII0MYKCP9P7iIaqkxuhIdxqlkq\/ijWta\/02agiOhRLK5LjDFKIJrxmSp5ycgjQQ5m88MqzXKWn1TpiA8B20EjYGSQM7JynTjbsjUrRfKKnDwnQtb3x8gyZJrvER\/2Sh5BHxAATgIaSszNMDI29KnQUdIyazJqR8aPb0FxMpFgvHt6\/raalGriRg\/BeMyAKjuMSTAygNnbRw3eM3rZB4yes10nbJ8ydJlWavGTtA6iDpo5RMBk1CGEpyjUB\/rLjMZWGRZ5f17maMBLHvTMZFo0mfek46HYSBAE0LI3GgydLuZDY0VBtHLogguZvpwnHOEJO6ZFs1jblvNo0Mg4lSom5W1qWYyIJlLesSMVN4TFi3oo5EBXXMosoYwndXC4UJ4Ym5otq7K0Ram5RP4UrMFKqIOwp9Ju0KJkxGiipR4LPFlISMbc5E27wjFgk1dnAA8Ws1cayrYyiRzcomBY5lDAIFLsOiKM7kTAvvCTdys0bW\/KtGQLVEFVnEOk6SIJACpyGFM5SfSpQNJyUJcMZJsFAIPjtW8afwxPwIun7rzoqVGg1Cgm2AR1X4g2EK\/6zjtx\/wDZdf4+19rOO\/8A6TRgOeMdlEKCRxGRZy79mzUpw+XQOmzd3AuU\/pEkrbcLtgKYP3a8aosds4IP7rlMkNOGm8Tep25iuzeFHXY1SFJq4OWgeFMNwKXwVQqHMblKonxMBi\/S0ICFB24CUxRASgJTFEtQMQxRAQENhDcNcNv2NcRDv9uhCm9NvToewwce4dVD263+bv1uGtth1vqoa9W1Pb+DQ\/OHygPo0pbd0sFJKEOuk9b+7rnZTFvyzcedncdpS6IleQFwxyoAdFdExQMIcpwMQxgE2Eb9k0ZG3ps5JKyLjKgVmydFmXotY6eYM0ygjENJ+YOEfOxyVG8XPqJOUSkbvxAggYBKICICAgICAhsICA7gID\/WSu7dmMRozbuHrw5AETkZs0VHTs5CgAiY5G6RhAACoiFNZGyzLbvlpJ1aFuJmH\/EHU0yj5e8naKJwVOzWjbZGGt8hfEHwyoOaAHiGqvcbtYW7Vu3dqMVyCUp2kYgoZk5kWvNQAlZ17VozNxSQIooXcag+6dOndOAneoQse3VvOdlWqc1ZuBGMo1TexEINvqHK1unK7yNcpvBavBFjDILJKu013SpEST7jN2Xb+yXPXi0VkmsleFzScqLWZigFY6EcyMsnExCLmMMciaLJs2SL4JQKUvahPWPfF12jNNzkOlJW\/PycW5E6ShFUjLGaOUveRTVIAh4nPQAp9URAbYwznyZZNrtuF62grFyaRJCLi7sl3ygJMrQyGxR8GLbS82qIIMJYhEUnDxQjd2UDKpOAZzLA5iouSnIsgJjeIzeoiUrpmoBvynMicQEtdxIYK71omgmJzHVOBSFKYwiIm2AKB2jpSFtaCWvB8zcnZPX6j8Y6DK+biJHjBgqii5fTLlmp9BVRIhW6agCTxBMAhpG3rqt09pyj1crNg599CTgXr5URBCMcOFkW72HfuuUQR8cgoLH+gVTmEAFy4QSN7kts\/bFCh0jFEfDeIhSpHDQ24D2hUo7Dp7bEmr4slbYgVqqIjVzFGEASABHcxEBOQxO0ElKfudCHb5\/f1uG+qfIPn3a7qDx0NPb5+rW3yd+t+3Q9wfh8lQ866qHyaqHpr+Ps31w47U05uQpf5xxo4UvBA4CJVF7UcFSjshwxeUonV95t9T39uSoFK\/j0VPrFDVsXA+Mc8o4j\/cppRRMqZ1pmJUPHPngkIJiF+KCgV4UCiIcjktP6yb28J2owWXgxj03aIgVZL4q\/YxawJCOwKKt3hyB\/batlyikDde4m9wXOmiQOU5Hl8XhMOUFFR4nci0O35jD2FAOABq\/b7dNzKRGLseX7k163E4mQeRuKLXdBBRKqA\/QdFf3AgInIb6IgoYaCOrmvm8JJzNXzkS6pa6rolHqgKuZK6rrlF5ebeLqDx5pN6pyhvyIkIQNiAABfUUkYjCy5iHOvKqCBQcTKxlV2sWjuUV3j9m1XMJAECpNwExhAKVi70QTTc2xOHQTaP2ygnBq6eMviLePeonAq7N0ZoBxTEwCmqKRwA1SiGjoe8HbKpqlAjtEaKtjFOU6TxChgo5an5VkRr9FZMpg3AB1iS\/Zldw5l7+xZCT0+6WExTL31aj93ZV4OTthExUDyz6KVfGMUQATriAhsGpp002epw8oDIwCIGI6MxWBA5TBQSmIoICA8QEA0zkWKCKjI7G3kmajgFDs20UuzQMZ5RIqhzkIqdVRQ4FOPiGMYwGHUnKPW5UEkoqcVWFDxUmijRimdVq\/AqgJiUDvU0VERECj4lDAACNNMjPg5l3UYw99A1TCd2dmkDwREf3QriYR9OoMCB9B+DuHcbj9NMOZNIRGv1vBXJT+0DW\/EBp8ldenXz6AfZ9\/Xr15\/Nr5Pb+xrfVfP194BodCHzcfZwDQh2enu0NdqgI+qv4tKxqhE1Epdq9hVU1igdJRKaZLxiiaxDVA6RyPBA4DxAR0EWu4VWcRDuMK7RWMJjtZBSIJDSKZDGET+7qPLZMcgDuAmHv8A6yZQEzCUXU\/aDIwgIF+gtcDNQQEe4RQDWMG9ABMILHKVOwAFOPVMG+41OYR9Y6zBiSIUKlJZZ6fM52Db9TfTWut1CyEtENATKBjqhIrlKkUChUTaTWetjoPI6SIu8ZKAYqrddNUDvGihDAByLtVROkcogBiqEEohUB0tGRNEnRLut\/IlrXAgVu4VjLghWbmODx2bxJwyesXke5ChTpn8JwiAmKYhjF05sRwUzmUY3G1mZmXX5EjLx5EHoQUawapFTSI2YuHrgVlhKUxzeGQocoCIuXa5\/Bb\/AElFVRAxvBbpJ\/lVjgG\/IkkUTm9ADrpotOfJ4Eung8b3nUDFMko3dZTu2SvCEjzIqUVTUJb0qksbmAKCIhx0sgYeXxSGKA9xqDQfn18KdwyE7FtFVTxpVTnQcsCrKiqq3bukynq0OoYTgkcpilMIiXlqOisEohCEiVVkVn6Lcx1lXvu6gKopO3ShSGM2SUKB\/CKBSCcAEeYQDSaKY7JplLWvEQ+\/q0VQ+sNxNwrv\/oiLcTB\/4ulQ7Oc\/H+2HyCHp\/ZDXn5116tfL+xTXt\/H5A279\/IPt+\/rvH8fAPZr0B2fi0yOG3K+aGD0UcJjtrLTKnKRG6EVE06iIJlC6cjoAAV4ByEDb0f1kvAdqCmkFz2cYpynEhgVCbS5OUQAwiPHamsbi2EFG3w\/HYNzgYxwUbiSNKkfnEAE3OmIDUdxrps+h1SNJ2AlxmoB6p9BJvMxb1wdsm4VKAnTZPkxO3WEogJSK837kA1ffW90wWfJTWHLxmZC4s8Y5g2C7u4OnXJkiv73eCkrAsUlnyeK7mmHCkk0k0SKt4p06WTXErNZsvrkTXMgmcwmKksUirVQa0MogYROioAj+6SMJR79RXvzogxMuVSElARRKCLdN6JQZP1xTqJE2T8qZjHMPKUgmrtXURmXLUJKQHSRY0+0cz8+6buGq+crij3aakfh7FaYcjq5STkimRGblGfOzaMTHbJKKul+VGSm5Vo3ZS82sm9fsWZEis4VsggVpDW2zBAoJe6W\/GlBEAJ9AFTKAT6HLotA+uPKWogUDmD9wUREOY9OwKjoGwqsnLgBEAQK4QUV24gJAOJhEADh2aDwUipkOA8pyUEp6bDynLUpwAe0B0G3n2D7NWh3jcbX5m6H49K\/4Q\/8ACHQ+vRvZ94Nefs+fVe7XnvoPP2+T5fIOu301157abU\/122\/jiayqZit4xzTiPvYeKZQElguvIXOmUDFLyAVcVAoFaCFOz+slwUeBrtssB7dvjRBHYduzWLC0CoQmMjUrwAqcTt8mpJqYoCIu5Ll7aD785p6qaPOw0lI2rcqCBmSVxRKSC5nkcAHD4PcUO8A0XdEGJTmL7u5AFCFMIJKpgIgMtcWSOjjGDq5ZblWf3X0\/X\/N9PclOOhqZR\/L2x4almNZM6phE4tkjFUAdziO+oyatDotsqSm45772zluo7Ms\/m2Oj1Sh9B6nZ0Egjb8q6QMH5JF4kKPNuYQ1DvZR2e4JaHZJxUB4MSxt62LOiwSBuWKsGzIkPg9qME0A8MDkFV0ZMOUFCEESC7lZx5GMl2kU5mXi8u8bx0TDQ7FuZy7mp5+7Ok2j4xs3TModRUxUyJl5jV5iFPJWx072u5ykrHquGxrzuGRlLTsIzkhQbieCh473e55pkQK8rh0szBdIAEiJCnrpB+4s7Drxui4KuZmnETkao4KBgMZIHzCZSeMTnKFPGTUMoWlfpb1hsdZNbr4gviYWSYx0fdcynMY6uF4uuAIsYu7XRGrm3ZN2utyopSNWyipgKDlIRDXxJgVRuogcG8jGuAEHUY7qYBQWIah+QTEMBTCFfoiU24b2b6bkbUH1Nm\/4dK\/4Q\/wDCHXt8+3Q+kOz5ND5+dNfsedNemvn6ND6vJ8vk31w7x7aj66768+Gmtf8AXbb+NJv7dZcGlANPFHgAb\/nvkyvD+slcd9rusrhx\/psgbbDrGSY\/ubdx0Po+ihFUp6KBp3WggLyQ227Xzgfm0YqyJTVrQ1A5gr8476MZuWpRHblGm33tAKoABQEK1qPzU304k3aaJUI5o4fOlFhBMgJNETrqFE4APhgcE+Xm3EBHt1b3StbM06j2ExDxWUMxmaLeEeX+OruVsbWMqZMyZz27CxMceXcNxKQFni7EFSmKgUNGTb1AiYCKqg1EAGgmEAruYw8REfbpykzVVcC0RK4cmRQUVK3QOPKVdcSEHwkBMFOcaF9OvBWNyLJ8qiShQqA\/vVCV2EBDYwDsIbDx04sS\/wCXVl7twlKW7YkvNP3p1H1x4uulFyjZErMOXnOrITlny0YvDi5UU5nCDdmJh5+bmsxMfrEudEpg7QEEG4cOwahpUf8Ayh+PD6w6H1+UdB6\/waGnb5OP7Pr9HkHQ+Rt2\/wArbbf+eJrLYdoTpOzb\/fvk4dtvT\/WS4D\/hbZe1K1pMlGlNq1prGhzfRKFsY+OI12AoNYsR34DQNPSDxK9kC91aPF\/v6AvaJg9Hy6jOnm7bOv65pJFS22uRL8tw0UnBY6e3ek1XhWnwl4Ysjc6jZo\/RXfe7CQEUlKJiooAk0qkQ6apCG\/JrJ1BNZE4AZNUlQAQKoQQMFQAQAe\/V3KqU8MsMr4gGry+GKyAGqAb8oF3H0BrqISk\/FqeYtdSLFUT0Nbx8cWKMGZATbCzO35xSp9H61O3VmfpOUQLZ7l5Jtn4ujimwJLHaLlgjyhymAxYwkqKArCAhQm\/AB1ku5s0X5b+Pkk2F23A9lErDQPZ1xSdssY9nE2Gtbloox8Vb7C8oZiduV8RAWnvFFlgEVjKDIGh0itYxaYmVYdsQ\/MLaFO9VPHoCcPrgi3MmWvaIVDXU28TByNutMAwJpQQFT3T4kbLMEWAA4gIJe+e8FdeH+6pzU1Z7RQwiunKRCqwG+sC4x7c7gT9vNzca6OPeYw\/KIjr2jr2U8g+3cfv6ER7NUHv\/AFA68\/l+XX4tNuI\/ypvv6fGJ+HWXBpSs+HqEQvjJtRAajWv9ZLihOfluqzjiXs5SS4GMI\/2JQCo6sF0kAgYmPrQOSm\/KdKFYql39Al0lIoCAoyzRrKoiUa\/42iUrku37pF8moU3cIh36KI1pWg+qgBWmrfzNeGNoC5L+toYn4Tcb0z4pVSwK5nMB8fiW7pKIuU1vrG5mYvUVhREA+sBSgCYKqGWUAoeKqceY6ig7nOYR3ERNqVZqhzIO2blquHIClEHKCjdUQTHY4lIoIgA7VDVsdZNkxqkhIY4h4fDfUcwZJ+ItBt4JZwlinJzopC0RtKbiZQ8Q8dCIotFzx6qpipeIYixDEMdIxxSeMnHMiqmskPIcBKcvO2cpfVMUwb8BDt0qs3TkAXWSTRVAXAJlXIlQUUXCgKGBZFIQ2AQGlNg0KyyoKulijygY4kbtWqQcx1VVD1BuybFHnVVNw47iIAMG6yMwWhMp9SUtbmWbxgJRkoxmMfYOsxFwpYsTc7J6TxomfvuVkF5Zy1UKVVmR2imYoKN1eVnOGIp4JCyVy\/S5jCRsqQqMSRQxvqAs0RQUAOzxKa8\/n1tw183p7\/KYPm15\/t68\/n9NQ0Oh15\/JrjtTs76joPVx7\/bpsPD+VNvaPjE3D16ydEquEkZKRln72PZG8QVnzSNvzJJZBwgfkFE\/uYrl8QomBQCjXlEoCP8AWS8HhS4bYH5JEe4BH5tWK3OAAClgWkBBp9QTQDPl7+3SloSRyt3jRwsrALOD+GgqVceZxFKqDsRJyIAZM3ApwAdKlKU5FUjCVw2VDlXbn\/eqk7qjsYKkMG4Drl7u8Br+3qojx2\/D6NOWwgJgVTMAV4iPLsHt0+dsm8Qs6cxj635aKuaNJMWZe9qSCS6D+z75h1EXKclBvW7lVMqnhKnbeKcORVI50hfXTgW\/i9J9zSzkRNh\/MjaZmsSA9cHOb3fFmYLdLJOELdIACDWOlCP02OyZTIkAEimTl88dKsXBpCY555XOMO+T93L9Lx1oiLtpacIny\/WKCIKB2UHULkIyhesHMsSuylLcn5m2ZG1ulrHE4yMDhpc4N58XFyZeuCDepeMwI5BRs2OBVSNETgVckuotKu7jczkgV5kW+lygkvdkqUORK17fImoqkkwKAiiYrc50WrbnIB1FVFVTLzcsgCE1c3hLi35eQWMUQAM0Q5NvDBWhTAWgCCZS9+vPz4\/qA9uq9\/ybff8AIA02pT2769g\/eHyD57aHanHb7\/s0I1\/Z9VfRpr\/lbYf9XJ+PTxuVRQEDQ+UFjIgdQETLJ39fKRVRSr4RlilOIAagnAphCtBp\/WS8A40A9x2smHeJlJESlKHdzDtrHdKABrAs6gdgUgWYbV9GgOQfBeJborl2MAhuUphDenNw7QHSbK64xxIJNwBNrMNTmRkm6ZR2AHJAo4SCn1T1D0aDwrgQIPHwZdiKK4dtDrtzJlMYvfy76\/pi3jf+fdBWvoEBHQh8UgBr2g5ch81B46P4bq1VjiA0Fd4\/JQadopFqFe0QqGnCKKFlqtnGyyBpx+ZsuUBESlWQURMkqUB3oYtA0LksBh2KWEamfki2bt5XtNzoR6CxxH0m0mxRLP36c3KQsRBx6sLbBQTApSlfuS0WcNkigFSKKcgh2aYzN5ljnkgwIUIi2Y1MnwCBAtOUpwIAJOlyCADQtS1D6Rh4aERGph3Ee3s+bQ+3yCPZ+wHk9GvPvDt7NV2248eHZ6P1HZ7dtCPDuptv9\/bQ\/J+3pp\/lTYaf+fJXU7OIMnSkdFx+QWEjIFI3Bgzcy+RL9Fg2UVM6K6M9fHSMJEyIHJ4ZTHMoWgFH+shwIcoUuuztzCIFD+dv3QgAiAax13BYNnCFApxgWXZ5BIskmqQQEBKoUDcfWAhw0JjxqICPESF5d67jQB1s0EPRUdf4sI+3b5OzVRYlMPpABD076OzbQNrnUQQ95OaYjzOQOkBypiJAROVRU4CYBGghQN9IqJ2bahXpEygs5SiCCmZYPrnQSdqORSTEeACIiHfoG7ZNJs3AKA3aopNkA9HhIETTEfSIa39tK9\/k9uvTQRD5B\/Frz7f29D69AHr\/ABDr5tD3dvqDyefz8dtb+f4dD5+jXpr82+g01\/ypr37D45NZaCpaFuJUA5a1Ct95OH6QCH0Tb8A\/rJclEaAFz2melAETCSTEwEAB2qelPRrHYVqH5gWfv2f0Ez799UEQ2+95j+o4B8ga7A0wkOCaKpSOQDfmaOPyLgvZwTNzesuth5i0qBg4GLxAwegwCA+rVR89te30+3yfJ8\/7evPzrr1eQR86ap+D8OuHbrjTj7fRrz9PHQ+qny8e2vDXn8+g8+OvPz2rpt\/lbb+PT1kZmQI00a9dzDtYxlnRZwj9lkjIqTdRBsCHuC0Cq2UOVRQyoOCOilKUhkxEwf1kMmD9wdFzP3pbUfCoptnjgz2RaKOZVRAVGqCqTNNJm0OoZVwdFDYCc\/OYhTY7H\/gBZ1fX8CZ6AQ1x1uIeft19YPl19YPl1XcR9OjV3KIU4cQEKDpqKhquGQjHuBGlRFuUPd1BoO3iNxLTvEo+QPX5B9X4afJ5Kef7Wh89u3yCOqefs158e\/2a4e38A+Snzfs6\/B59+h+QeHyj7NNP8sa+gf7+mFNXwTf\/ABa6KAPAOXKmQBGgCI1+txAA\/rJtYiKyqKbzJdsNXZEjiQrlqKT9YzZcAAQUbmVSIcSjsIkDu1jzcRD8wbO37\/5iZ7j21HWw0DW4j5+rXDXAfTrh6v2dbj7NAAfKHmOlWBzUSlERBMBpQHjUDKI0qP1lUucnyeT5\/P2eT0fNXyV7tAPp1WvZ5\/P5R9PH2Bt7ND8nya9Abe3XEfxD201Ts3Dh6fn0PEOz0\/t6abf+ltqcdh8dOnfx1eVBEQ9wuqtQEKj+la\/w7gqYvD1b\/wBZNkE3\/KZSt0KhxACsZQwj2AIU7O3WPKbh+YNngAm40+BMtxp26p97t+X9QI92uAequ9Q7+zXnv3enSLlEeVZsqmuiIdiiRwOUP7qlPUOm71GnhO0U3CdKbAqUDCTbtTPUo+kPIOh\/Y9f4NDodvP5dD6tD6h468\/X5O79gOHt8lf2aaEeHz6H73o0Pt3H8Omfd722H\/V09XusAKCQG1zpicxfoeIfKmQT+HzBUvPylrTjT+smxBLSo5VtwgVGgfTYyhdxEaBsI8dY8CuwWFZ3yfAWQa2prf5tcaD6OG\/4dbCHHfz463qO3z8ONKduqCPAdxpvt29+hqPZ29+++2\/br009v7OnMaoaqjBXxUQEQqLR0ImoUOPKk4Awf3QaD1+QePDsp+35POmh2+TX4\/bw17dU3\/BThrz37tUrx89w7tevX7NNb8POmvPv00\/ypt\/Hp6yJNGfyoHjnU1EN4lORUJbyhZTJmRHi8u6hgL4S9xJgzBuk7MbmTaHOmBaGE39ZNhgJuUP0rW6Ij3csfKCUQGoUEDAHr1j7t\/wAwrP3oO4\/AmdeO\/wCppvw7PZt3a419e4\/Lw8nnQA9vZXTNc5uVBY3uToRoBfBdUIVQa1\/vS3Kb0U1yjsICICHq21XXn5016tevjoAr6w9A6APQGqa+UPPfQjrz79U32+TVNt\/m1TzDu30Hr019Dpr\/AB6er9bEkABq6PPuXMQMemfxF22TchJtJZKYFYHKBkCGOgZn4ZklCn8XmKYtB+4CJEpzKHKQtRoHMcwFCo9gVHTVsd+xaLPUfeW7KVPJs5L3U7tyzbOlWzaKfIppPTsznSqoBhT5REArTSJGyqSxl0HK5FWgrKtCg0O2Isiosug1UK55XiZyl5KCUR3qH3LZc9YNwL21MS2dMTWhIv27Rg8Uc23ccw7Qm4sSSDV2kklIIolKdQhSrFKH0DFERHTlIk0mJU1VCEErFmAAUDCBRoZMTDSm++rMseVuRZ1aU30vZKyFJwAs48jRW87YzpY9nQs83cEbA\/art7anXTVREivu6wHKcxPEIBvu+yhKAiYMo24IUGggPuMruBqDQQ7Kb6x5x\/3gWdWu\/wDsCy4j3\/qe3z7N9bbd\/r7fk8vL37VAaD27gPYYB4aYujGAy3he7utwqDlsPhKCPaAnAAN\/da89vMdDvX06r2\/g8gU+XXqDyb7ce7iPr20I+3Qjv5\/f0Ij57fNrvptX27e3Q+jXZ+EKfjAdNaf66ben\/R0\/x6vABA3L8Pu2giaobZbyBSnqA3yfcLQP\/WUPmVKI\/IAaVilZi2jkj5a4WSBHjS3HT5FJG45cxGh13qKr1JJqc4gmmY\/5PgFA20BTyDF37pb8kIIMU49MiZVHcYIrCmwKQpTiZMAMYQHmAACtA+5cf2NYsUpcF1oZoxdfy8Oi4as1CWfak28G4ZsXL9Zs0MjG+OTmSBTxz1+gQ2+l1PzVWodVUxTA+jA5imOIgO7wR3AdWHfc\/bysdazHprydjJzLnfRyyaV7XJnGxLzg4D3VB0q9OtIW3CunQLFILdMqQkOcpzFKP3dZKKkfPPAc5PgCFdw8WpIR0QqlHSzlN3dr1M5fzet9yVEyBXpgMX3w6KNKqgOsef8A2\/s7\/cFjUP1P3+PD0U7degd96dvH5w1v5\/Jr0V8+zW+2nkYc2zlMHjcBH\/Rm4ci5Qr+\/QEB\/udD5+Y+SmhHu\/a1Ud+3Q92+uzj2+e+vX+Lj7NU\/DvX1d2vZ9\/QiI0r2+kdV0Pbx9v7eh4\/h013r\/ACtt7fyxO7bhq7hAKfzdd9aiI8w\/pbv4K0oAENQNw+4b2OmookoWFKJFUVFEVUzfE44OZNVIxFEzUHiUQHRTqQkCqooYDqLKQUQdZQ5tzqKLHZGVUUMYamMIiYw7iNR01WZMGLJVSXjUjqMmbZmc6fvYG8MxmySQmTEShUB2HQ+sfv8A3Jaf\/FOT\/wB2SeSG\/wCMTD+Jcfd7nlCtbktcDB9HdMX6gHrzfR2L37V1j0QrT8wbPAK8afAmVK023DyfNrz7NerQ8adg+sBpX1j5Ka8\/v8Neuvs29Omj5P67RdNalRADplGipBpxA6QiFNJqJGA6ShCqpmDgZNUoHIPtKOh0Pt8gjw7vXrz+XQap7PTvQdU2oGhDt+936APaOqd4D97fQ+rVdNQ7nTb+PT9Pbq834JmBuBLoYisIkABdqZRyE6FAAAQOY\/gk59w2L2\/cN8f7SF\/3TjtJesumX+3cd\/71ofWP3\/uS0\/8AinKf7sk8kN\/xiYfxDj7vWEgiAjdNpEGg0qU8kYpy17jFHWPS8RCwrQARDh\/QLL8PkpwD5+HEfRXQgP7Q9vs1wEePb393d5O6vbv5116ezVR\/Dr8Q+fZqgj7fwaK3Oaq0Yr7qbcREW5wFVqbfjQomJ\/c68\/n8ggAgNK1oNaCPfTX4N6\/i0Pn576Ee7bbt8lfTxD5R+XyD5\/J6NefYPZ6d9DTz\/b8jX0umv8emH4NZInlWLZScZOZOCaS5iCL1vCSGTcjyb2LRU5uVNk6kGqSxy05jKJhvQKfcN8f7SF\/3TjtJesumW\/8As5G+ng70PrH7\/wByWn\/xTlP92SeSF\/4xMP4lxx9P3eqNBGl12jsFKj\/OZuFdgHWPuz\/MKz9grTeBZD21Gnr1XQBttw9NR9Qa8\/V5acP2\/wANNefZru4D6\/V5PP0\/PtpJE5uVGSJ7ketQKCtfEaGHsD8sHLX+z1+PQvXoGFmU5iIoAIkF0Yg0Oc5goYG5DbUDcw13oG8ewbpIIiQyjo5EUyEAifL4KQDyAFBOImEK8eXW46HvoNND6e7z4eSlPT5+odefp8g9\/nTQ+ofI1Hf\/ABlt\/HE1k8AClJ1xwHYf+cDJ+4VETU9f3DN24d2ZiSaZAyM9IiVwdsAOm7nxCoGOmVUR935aCYONezTy0mDRhIox8dFv\/ibx04ZrqnkETqmQFoiksmUiPJQDAcRNXcA0syetG8erHThKC0XUdpqlZCm4LXxkkTFMqJxKPEA46Ee8fuSHuIXqiRo2McRAMioEORcrt8V0Lky5jgYhk\/qgUCiAhvXUo5NHNmnw19IsykK5XW8cGDlZAqpjGTL4ZlgSqIBUArTUM8OANjA4ay4pEqqXmTIqn7sBjchuQ3PXm47cPu9QA4jddo09fxI9OIgG3r1j30WFZ\/Aah\/QDLgPbXVNx\/DUafNXXb5a176d1dCIh8ga+b7\/t4a7w2r94PVx8gemgeseAB6x0SOy1mOzLJuISouULXXerSt38p\/yrdY1sQLeSmGhDiWoCumiAgFQ21aWW8eShblsW9YsZKDuBo2doN3ZUHTiNfFUau0UHzJdpKM1kVE1kyHIcggIaasYmPdv3aDYifICYlQIqUv5QyihRETF8QRHsr3hpV45beKusPOp\/KEAU2LQpCJAehSkKAAUoDsG2jIroqILFpzJKkEhygPbQQ3D0htoO\/hX1hvoPXr2DXQh6vl\/a1Ts4\/teThTbydnH08O70U017wdNv44msnANP6ecj9GlKDkHJ9O0fwfcU8P8AwftwB\/8AZFeGpn\/bpz\/EofcqP+FT\/hhq6Nh\/puf3r\/6+87NQ\/wDteh\/+b7vVEaUC67RrzV5afEjVrQBGlO4NY\/pw\/MO0Kdv+wLLt1TjTt7BDs+95agFeHHzoID5K+nz+bX3u71erXyV9Y\/seSAtLG75NhmjLxZZG35rw0XC2P7JiRSa3FfLRusCiJ7gcPXacfECoQxEXB1HIlN4AFF\/KPnbySlZR0s\/lpaTeOJKXlpBc4qOJCUk3iqz6RfOFDCY6qxznMPEdZc6Z5d5zvrPkE8s2MiYo1PbtxrIxF7MSLKKj9CNuNNq7BMpeMkcdCBEykARqIEKUgCPeIFAKjrgOiNFkfGfn\/KNjEEAO0LUQFZQ9K+GpQQ8P936KV1xCmvva8\/PbQ64e3Q+rX4uH4\/Jv9\/bh6th+\/pt\/lTb+PT1lDlpT4843Co1H8\/8AJ1aiIAHMA9gcPuJ04elUSRmrfivhihElFwdfDEzNX1ARKoKXu7hQCjz8vNXaob6kTqpnTB1KOHKHOHKY6Bk0iEUEo\/SJUxBCg0Hb7lTMYaFKoQwj3ABgER9gauyDdkWSlUJeVVVaAgoqJU366rtmfxkinQEFmy5DbGEQ5qDQQENRjdcgproMkklkxEBEigcwiURKIlGlewfu9UB4DddogO1eMkYOGrAANgCw7PD5IFkFNttdvp8nz+n1ejXHz\/FquhDsr8utvTv6uz0ar28N+39im3p1wH091ONNXLAuVRGPx9jXGlrw7cfqtyv4hxdcson2\/wAukp0TG7xIHdod\/Vv6fX3aw3lV06MjbbK50bXvwCkBYFbAvXlty6DCiZRJM4xqDxOQKJhoVRkUezVUlCqpGAqiKyZiHIqkoUDpKkOQRIYqiZgMAgNBAdcR49\/s0+WOIiYXKhArX6JEjCkQoB2AUpdBr2eQfX+182gr97t329OvP1\/eDyjWlA79\/PfTb\/KW\/DYP78TWUKds84EezccgZO+fb7itKg0H4BK8BoO0mj+DVR4iJhH\/AMIQ+5r5ABH\/ABhgNAHYKxbQd9B\/al+8H3eqIUqF12jTmCoV+JmpUO3fWP8AcR\/zDs8KjuI0gWW4+3yfh7vT6dcQ9gee2uzXr3+bh6Khr8XHW3EQ4fJsPaOtu3u9QV1w8614CO2mN2CblYZXw1Y880ESGAppGz15Oy50vOIAQ5gFi1MIAIiAKBWlQ1\/fPZXiHspqhzAZM5TEUKI0A6ZwEhyDTehyCIaxLcUo\/B\/e+M0FcLX+c3u5F1Ziw27VtAyqqKSh1R+P2avHuhVOACoqZTiICOq92\/ntpRwUBFs7P4hDgGxFTf31E40Cgib6Re8B24ap5R9eh9A0+\/r5PaPf6Q8vf5+zTbtEXLevp\/LEr6t9ZQKIgblnnG4cRAb\/AMniHNXfmCtN\/uKzw7Rt+WH\/AOpo\/i0HrN\/CH7mvctaAIxh\/WB4ttv8A+Lov9qX5wCn3erTcfzrtGgb0GsmYKDTeg11YHAf8w7P32\/8AgLENqbb+T18ONOzs8no8\/k0PaP3x1tx7PT6u\/W48fT29\/q1x4d2\/b97Ve\/59RWdrVYLPrs6X5d\/cdwINCHVdPMM3YVnH34sRJMhzHTs6VasJpTapWqLkewdVKoA1CoCBqgNQqHKNRCg\/JoaKb+gd\/SAiO+r56bJ2RBG3+oS0zSVspKqNk0UspY2bO5WOTKs5OQ4OLis1WQbARMaqqNES0EQDWw7ca+YaXMuUqiYEHmTOUDFUHgUogIbiY9NBw41oHZx4egNef3vIIj3iNNCP3u+v3tbdn7Q+Tv8Aw69lez10+QNNa0r7y32D\/DE+fWUhDcPzgc78QGl\/5OCobBtX5\/uKzv8Ai7L\/AO6iIV+fXtN\/CH9Y5jCBC7\/SOYCF24\/SMIF21T3kiht9kSnVHbvEhRLT26+iRcwB2iQqYev6Z6iHs1smrv8A2SQ+vbn1\/ohR7jJj98om19FQhuGwDvv\/AGI0H9ZvMu1BbQhqeuKREa+umif2hP4Ifd6lRoH512jUdwoHxI\/aXf5NY\/rx\/MO0K7UCvwBlWgdgeTfj57BXXn2aH1\/OHaHcNPIFd\/V39\/tprs8\/w6r7OP3t\/I8jpJgylYuTZPIyViZJum8jZaKkmyrGTi5FosU6LphIsV1EVkzAJTpnEB1IXVaUXLzXSBkGXcu8WX8VJd40xm7enO7XwtkmQKChYWVtwRMSDfujEbzUUVPlUF2i4JppZeILLu\/K14PhEra2Md2\/KXhMm5SGVE67aDbPAYIAQom8VwZFKgfW1YPUrM9JfUDZCWI7qtzJDG5FrHVmGUerbMo2kRRlkrcczzmNayLdM7VcXKKZCorm56BXWPsy2A9QkLJyrZlvX\/bTlu4buiEjbljkZAzBVRqYyJXcQ6VVZuCbCmugchgAwCGipFEfDINTDXY5wrSneQldvToNGHz20Pbt57a8x7fT6NCPy91P2tV13D36qG47cez8FdcQHt4CG\/7Gmv8AlTb+OJrJ9RqPx5zXjQBDIOTwpv20AOG33FZgf8HJf\/dVDQD3ib+EP6oqjxcqIH\/vadBOusPcigWqinrpT06MKCace3AK+O55FXJg7wJXwUf\/ABx14pEHD4aiHvTxXwmwGHtBRwYiXKP9gA63fNWxafUaoLujV4fRWU92QoHtAdVXnJTcaiVMsegX2VBwemvoXBMJG33BRgpT+5O2KA\/Lowx92c40qmWRjUzE9RzMnAHp6QLt3aq4hms6gQoiKkK7Io6EP3QAwdlbOhoG\/wBHmr69CxWWVjJAlQUj5JJRuuQwUAweC5KmqBQEQ3AKdw6AwGLQeBymAyZq8KGDcK+n5f1d4FpTmjbeU48eaLKA\/wAHRB\/sC\/wQ+71TVpS67RHaldpI1ac21aasE1ONi2gNOGwwDLsHgPo8n4ez2eQe35+PbXyUqAh+Hf2jrfQ99fWG1O3eghrzHySUFOxMVPQM01OwmYGejWM1BzLA+52crDybd3GyTUw7+GskctdwCu+nURjCwbFxrEvlPHfRuPbQt2ymcgtQS+LIIW3HRpXxwLsArc9A4U14qCyqKm4c6Sh0zUEKCAmKIVAwDuHb26PCsGjKNaMF13DePjWjaPYpIyK6rpwKLFkkg2S536qhz8pA51FBMNTGER8w7KAGhH07aEeG4eulQ4eoNfJXz79AHpr9\/QensHz4eTf1hvTeg6r6KAPARDv8jT0um38cTWUKV+jPuS0EAClL\/wAndnEQ9I8fuKyQ77cmR+SVQ0HrP\/DN+oAAARERoABxEdHYw4JunZBEjl6aijJkYNjETABo7ckHYQAfDIPGo7aM6VXFddQ3Ko\/dCdUTn\/eIJlAVFjF\/eJgBS\/2OvGVoThRw8Aiq9eAeC3+k1biPANlDD310U5EeTmpyuZJUxDnKNQqiiYqjlQC9wEAO7QGcybgC1HmK1QTbJmL2AB3BlVw27eQNCLl27Nw5ueVXEu3EOVIEQDbu1T3twQR4GRmXhTh6hFQwb+rX82XTLslagJBO5bSSfdQybhJM9B9B66E7NaKudqUS\/kQOMZICmNa\/knJjtFlKhwKqFdFgrzhhYyIAHIynmqjV4kbiB2DuqbggkpUDN1RKFKjr3+y5BW6IigHUt2RXTNLpJdoRUkbw0JOgcElgTWMOxTG0dJuYzZ+2OKL2KdlM3dtXBBooiogqBVkFSDxKYA1UPaAhQQHuEPOv6m6S98JbJvaMacK\/NpP+0L\/BD7vUrUQ\/Oy0Ng47yZg7NWB\/xFtCvd\/QLHhoaeofkr97yercfV8mh\/Dx\/b0Pnt2\/Nqg9nDz7Ng8nopsHn264+jh7Q4cNU9Qh3\/j1sHp4\/OOh9giPZ2fJvqnZ576bHMPKkqItVxEdvDXEClMPoTV5RDu0ID2DQfWA\/L5PQHq4+vVOwPk9fyap3dv7eqfL6\/wBjyCHlaBvs7b1Db\/TiUH1ayf3\/AB1xXuGuQMocO+n3FYwf8Gpofkl0PboPWf8Ahm8oAACIiNAAO0dLRUKsJGCQmSk5dI1BcmAeVVnHKh9VqUdlFQ3UHYogWoiRgzRKosBC\/kA+imkUQ2UeGJQSFENypBQ5w3ESl4mcrqkMctElXrgB8BEdhK1bIpFqqr+9RSLXtGnHXjBzNygH+Nu+Q704DsPgp1M3YlHsAnMp\/Z114jRsDRBT6QyEoKhTLBsIKESHmduQEB4iAB6dAaSkpF8bmqKaByx7egfuKJeIucle84Drm+BMlT8edyLhybhT\/Rlzh82hIrbkOoQdhKLMpdu7mTMQwfLoQQYvYlQRqVaHlHrQxB\/waqjlExf7ES00K9r3QlKpkETFirkSBosYoFqCKEqzA7cxhEKcyyRA346TtfJttDGLrbNkJluUzNyIDTx4eURMKZhE24HbLFP3018Tsp65u23ADxXFuO1iuJtojxMaJdbFmEiEr+RPyuAD6vPTSc7BSAwd4Mi+GjLpJiV0RREaDHXAyDw1X7Ipw5TAcAcIfuB25RUtO8GxYi6WRCiBROB2co1MPKi\/jnH0SPWLmlSnLuUdjAUwCGqhsIbGLxoI8KD2lHsH9Rcwf8H7WH2CwV3p6KaT\/tC\/wQ+71RLUBC67RoIBUf6TNXbibbs7dWCAcC2JZ\/L2cIFiAbBwD0a4cS016fJ8\/n7denv1Su3o7eO+q93yfJ5PXrz8x18gV+YNcd9v29UHjqnf2hxDuEPSGmrgRAT8nhL71EHCFCKV2D61AN7dUD5e7VA7v29ekfP59VHh5\/f1XXfrtHyb6ab\/APpbbs4\/lid3o1lEAERAs+4AKhSlcgZPMIbbD9IeIcfuKww\/4MTg+kaTDfbRf7r+GbyntSIWFNYSF\/OB8mNBZoKl5ixKKgfVdOUxAVxDdNMQJxMNEYaJKT3vkIJjAUPDYIGAKLqBTlM4UAKpEHYA+kIUoAkE\/irKODnBJMh6PZV0A1W5FTcxk2yZzfl3BgHlryl5jiAAkKiZXL4SCVs0SDwmMc3EamAgGESt0Cj9dQwidQ25hMYdFcOeR++ChgVUJVs3N2g1QOAlqH+mHqceymqiIiI8REaj8v6paLmY9pKxjj+\/MX6JV0BN2KJ1oo3XL+5UTMRQo8DBo8zaSr+5rQR5lpG3XBzu7ggW5B5lHEcqH5SbjEChUQp70iUKiCgBXSd+44ftmF3AmRVdMqgIxtzkIXdlLFIIEQkhAOVJ3SvN9FWpfpFNHP8AxrdvS3HCpG66iQpS1tTaX0VUlkREqirBc4ADhCvIqQecg8wFNp7aV0olYXdAmKg8QEwmRfoHKBm75kqNAcMXqQAokoHEB7BAQADBwHv4gIcQGnaHluUu29tWoI9\/+Irh+DSf9oT+CH3eqABURuu0aBsFR+JGoFREA39OrBH\/AICWh2U\/2BYgO24U9uvb+AfJ5+fDW9KjTh6tvl0NddtRH5g+am+qbevyens899DWoV7f2O7W\/pr2V2AA3411vvtSnnw1vx29HHh2jr0enzEdOWBjDRcnvKIVHZREOVYoB2cyYgP9zrbfbj8vDjw1zDrfVA7Pv\/i8nHhtT0+Qe\/8AD6fZqumgdzpt8vjE1lAaUA08uJeG5fz\/AMnAA7CNKiA8d\/uKwArxtedH5JhtovrP\/GG8gLtwIrMSKwx8G2MHMB3pi8yjxQna2jUR8U\/YY3IX91pIK++zcqsfwfGNzqvH6wiq4duh+sdFEVBUUHtEQKHGmlX0idV04WUAVxAwA7k5NyAnSYoG\/cquBAROb6qCJRN2FAQdOgTUlXhA5SlASNIxmn\/e0UibiizakNQA+sc241OYR14LcBMYwgZdwcA8ZyoAfWUENikL+4IH0Sh6aiP6wU5DCUxRAxTFEQMUwcBAQ3AQ06yHYDU3MQTvLxtFmSiEo2L9N3PQbUgcqUoiQBO5bkACrlAVCABwMBmOUsenKpdcazSVfMmxi0uuHbk51Y9coUA8wySARaqD9I5QFE37mkVfdmmAl6W2iZdimUORaUZJiKslbDwB5Tc6glMdtzbpuA5eBxDTSVbmEplCFTeIHASKN3KYcihVUxoZI6ZwEpwEKgPHh5bgLX61qWmb5WrsPvBpP\/Bk\/gh93rb0\/wA67QCo12EZMwBwqPEdWEHGliWf6v6AY7h3aHbs9uuOvxaGv3vV2b6prhx418x3Gmq+dfJQPZ6+8dD37dlOzur2\/qKV4bh6u4R0g6JXmbqlUEAruQBooUadhkxENFOUakOUpyCHaQ4AYo+0B1+HVA9VQ7\/J6dca+nyb+Rr6XbcPZ4xNZRLUBAJ5cQoHAD39k0QAdqCO29PuLHgd9qz\/ALaTTbSf93\/DNoCgIBXiJhoUocRMYw7FKUNxHgAakLmUUAsBEFXi4Ayv0Ugj2hjneSggI8oGkHBDLCP+lgQOzTi5nBQTaiBmsIkuPIm2jUeY\/vavNQExXAorqm2EC\/2oa+LlIoeIYmO0t1sYtDugUOALSahB295lVSgYKh9BECF2oOuQeUzlWh3SocDHCvKiQf8ASUAGgd41Ht\/WynIYSnIIGKYo0EpgGoCA+gdIXfDJihYd2SSbeej0KlQti5nagmSdtky0BtFTilTEAKFScgYobGLpheUSPLZV\/PCIzKKA0bQt1Lh4qbxICfRQaTpSioFKAVyU4B9YNMp5lQlm5JXODtNPZrGXaBPEc8oAAESRmkf5QUA28QFNFEBA1AChg\/dEEAEhg9mw+kPJNB++s21DB3bJviiPyhpL\/Bk\/gh93qbVH867RoA9v85G27NWCIB\/+hLP9n8wsabdgeQR22Henq4+zXnvrbiPrDiA+SgUp+63rT1VHVR8+zyB6\/Tvtqu\/4Qr2U9v6ita8Nu70012egPx6BEw1O0MKPaIikNToiNdxoAiX2eX1egfk12duwV49\/kAA4fh8gh20r6KdumYf+tNx4\/wDlifj1k4eXlAZ1xT0\/5\/5OARpUaVH7ixyHfadw\/wC7Tb5tJ\/3f8YbR2LFQU5a6nRbcjTEGiiKTkgqTDwlDAYoto0DFAf3yoagLIjg8NxPAVN0BKgKMIyFL336u4A8XEiPfy82oqzY36LqeIZN2KexmtvNTlK+EeUakNKOQBAKgFUiqCGiKlTAqTQot2haUAVgLyrr02D8mU3IX0iI\/rsnATSHvUTMslo+QR\/deAsAUWRHiR01VKVVIwUEqhAGurzwbfC4KPokDRqEgOxnLBQCurcuVmYf3RQ8JcDF+qcpihwHVzYzuEQQu23XCsWVU4CB2lxwioqwsilX6fhLrEIIDwMisPYOmZnwCjKRplYmXbqbKN3jRUWzlNQBoPMi4TEOAeSQCv17Itgaeo8iH3g0l\/gyfwQ+71AEAMH52WhUBESgIBJmHcwCAlDVh1oH+YtoV7f8AYFjsG+4B5e8ONfR97XqH2\/iroQ9XDW9fwjuFADXntv5O38fr0Fdu39vXEAp8nHsCvYO2u7avnx3HXf28eIBXu4ap2efH2eQpRGhHJfAN3c\/1kh\/8MKe3Xp7u39ncdefz+Xbj5K9nfr59Nf8AKmwf6sSusnjQAEZxYREDCYBH8\/cmhUdxAo04gH3FjUO+0biH\/wCuNgDSX93\/ABh9fDyAJ2NjRiEcBRAoEGclgTkJER48x0UzoJAI\/vR1cVxc1WLNx+b8OoYAFNNjFHMiu5+jUABR14qpxDiFB1NXYBRFKQdkioApqiCUQxMZrHmJzAH0VwAzge2qo10k3TAATRIVMtO2n1jj6TmETD6R\/XrPyswASmhXze1LqEgbrwEsuPwd2tuAn+GyZzI8KFTXDu1aV8MzcsRkJgWCmDkAQSC4IlEqjByoYDUFV9FGABEaVFDUoyIHgw2RY1O6WBCl8NAssQwMp1JIAHkCrtMqtAoP5WtO3SZ+0Q5TegxPoj6+Ffbp2XtGw7aH\/VpMKj6tI\/4JP+AH3eoICBR\/Oy0Aqb6oVkzAPNsOwgPdqwyl2KFjWiAbDsAQLLbeogNO\/QBvwr7OPk\/D6a+Tj203p2+nybAPyD2fhHXn2eQN6V2AB39HtEdV9PHbt9Pq1207e8a8BHW9B7eHD7\/lASiIGAQEo9oCA1AQ9QhpJcKB4hAE1Ow4fROHsOA+Xbh6eNdb68+3XnSg\/hDyNf8AK2\/8cT8OsngFOUJtQSgUKcvNfmTRMBqh9YTVHiP3FjEvfZ9yD\/8AXWoDorlengNUnLteogAeA0BZwvUw7B+SSHcdg1e2RXIFCQmzzM4jzmMcTu5hydKKSAwjzKGTM6SKWn7zu0KSBwLKSrdnBM1OcSLjIXAf3VRyQCiBjmRamXObu46YN0yAROPYpAUobACypPDLtxqRMDCH6\/PWq8D+T3FEPYkTABRMks5S\/kS5BOAlKo3fESUA3YJdTDJ0QQuuwFfiZUjEH3hKasp4p7+3JyiJiA4aJOCDSoCUQ4hrG+SWZinVtq4YkXKxTUOeIuZEsc4KIhsdBF4RE4h2DvpNUogYqqSS5RDuOUAMPtEA08L+9sC2B\/8ACWlRCnyaQHvRTH\/xQD8H3eoFBGt2WgFA4j\/OZqgHrDbVh0qH+Y1o7DQdvgTLj2DtoB41Du2pWoV8nzejj5Pn7dvm9Ou7b9rbVfR6tcOO2\/eHf5eAB2fsgHoDXb3b\/goAbfqPTStQCvsAO\/SzYf3I+MnXuGhVAD20HVR\/Dw7tV1tr5v2u\/Va11219PzaEfPu014f403\/jifj1k7YQD42qIVpv\/n5kypwp2GH733Fizs5rOucPknme3z6vN4UTgu4hFYdn4ZhKYXk69TiUSgYKCWpHZq+gNWBayIFIE\/csO3OSgAYWsO2UlFSFL+8FQifN3BTWM7TIJBSQLJXO7SKFTgDYqUQyKr2ATmUWMUO0QroDBSqypzbfvE\/ySe\/oAo\/L+vgIDQQEBAQ4gIbgIerWR7YUTK3irqLH3e0RIYBSFrczLwJYhCG2IPvqTjnLwqbbjrKGPTl8d3bqd2QzUhvonIrbztd9FnLXdNUqbFMxfSPp1bj4Dc3vMWjz14gYUSnABDv5i6mS0GiNh2cXjsAqEkVN+7Y2m\/8AgUv4Afd6lKh\/nZZ\/Dj\/ShuFQEKjqww7rGtHbh\/sEy760ENUAdq8BDanp7aV1+Hv+ft1Tsp2aHz+X069HD9nVe\/ycPR7PR7db9m37Hl8\/Pf8AUbV+95hTSSvACiAHpWgkN9Ewd+xR+bWwhQeA9g1CoD7Q1t6eOvPzpoPR29vb+Pyfi17R\/Y02H\/1luH+rEHWTuP8ATJxAOwK33kwfoh2FGv3FiE9aCpbF2o+n6EvHKf8A59W5ElCp7iyFbDAR41Qj13su5D1iDUoaxHD1DlaQs\/Mil+9OdywjiKiG+4gkYA9AauQ5SgZO27at6IAdx5XJ2ysk7L3BQ7woUDu01TpTkbpBQO8xQOP\/AIxvuDFc6SpDTttT9vvBDYqx4mRbvWQiP79JGQOFO7WTIcxQTRnjw02AFChTFuKEQbOFOXgJjLIHr6a6JGqD9OEnJOJOG+wMJJ0ypxCgCVPhrIBgEaMbbspiPoOlCiuYO7i40gA8QQQ\/iifd5hHYAu6z6\/8A90N37asSlafmNaVah\/8AImXoDcNcPPv8g7gHYH4QEN9D6\/Pt18lPl1t5\/L5ADfjXX3vlr97Xnvv37fqPPv8Av64V4fKPp1uFadgUpTt9PHXGldxqAcOO+3YGiCP1kvyRv7n6o+0o+Tt15\/P30184egfJtTf9vTXfg6b\/AC+MStfk1kum9Jg3dX\/f5k2lQDh9xYScDQCqtryZc3ARMCsS4AnqoNdYaacfeMmvxGo8QaW87UCnfQVNW8hxBjjpoJA\/ei7l36hx9okDWYHwU5C3gpHJD2CmwZMGQAHpqmOqd1C\/+CFPwfcGHZXgqxyM8aAft8KUt5cDp+oyjQo+sNIL8Af2Lb6tf3xmElIthEQ7eUDAGr\/a\/uWuQ7lKUoDuHNOODiAe1TWZlwEBKjNRcfzcaC2t+MIJa+jm9mih+9IQvsAoAH3vu84jwC7bPrTu+KCGrEABqAWRaRQ9NINkADvvv5eNf2O3vr5OFaU4041+aoa9Xn2+T2hoPmrvoeP7Ow0AewPw64U4d9BoNahtuNNcPx03+fXCtfZTtp29mtw4Upw3DiAUDt\/Hrbs4bV29HCm46AR9HprQN6D210PqAOO4hwD5RHRiDsCwbB3HJuUdq7iXyDvw4641\/D6NbBrj2U121EOzTb\/Km9a8K+MSmsmAA1\/ncR34gI31kwRDsqG\/s+4sGyoBTwb5uCNOfuK\/t5NYha9wnZ8NYIEeB8mTxajwARtPnD0jXUaA0ABxzBB6P6Skhp8o6yqYa8w5InwGvHaRAoVD1B36N\/bG++P3BjY4fWLlWIAB7Q5oiVAwh7A1aigbiNgmKYd9+W4FeWu39kOsigADyuMlT5C04fTmzkr3VrrLM0egGl8m3GUm+3hs5P4WkACNRECosg20anCo09Vfu8xu0Lus6leH9KiG\/o31Y+9f8ybTCvf\/ADGyrt2aGv4eNeG+uwO7vD267tU8+zQ8O7009Pp\/Ud3b6q8d+\/Q7cfMfl16fbTzrr9gfva2+XgNPWGhHanbQN\/TWmh9FKcRp6g\/BrhsHrqI1+fj8utg39NK07dg7aaKJRHmAeYO6oDUKbaKYo1AwAb1CPZ7BDyb+Y9w92tt\/b9\/Xq4fg37dCPDz4cB02\/wApb1D\/AM8SnHWSw40lS7jsIgN8ZMEKh3h39v3FYsyX6sDlW2Tqj+9TmWsjFc4j2AChi19esHPAGhkMtAUpuzlfWe+IYBEP3xm+2rUVMFAkcYsjEHsP7jNPkzh38wCoFdZpjR2M2yJJrAWuwlde6vSDTuEiwDoR7xEflH7gxS1D6znKKJyh3gzt+SVMNKhXl8QB1FCYKFYWdGoCI7B\/LJd244+oldXNcHFJa87rmiiYdjos5iReAYR\/emTb8e7UdKr1FxPzEjPuDCNRMaRfOpRU1d67r0D0f1ANQvMP532b9Hv\/AJ21ZA8f8y7UHhStYRn2V4a28nyfs+Xs\/Zrwprt7\/wBvu1t6u2lafPSmth7\/AJezfcOGq8fPem2v2g8x8n7Y8dB2bU9Fe4QD0DoN607q14beiugHtD2bce\/Q7+mteFeNK0CuvvbVp6N9GJ2lGoeko8QD1Dr2gPyeXj+PW3Dav3vVpuPZ70ht2j+WJrJY02+KJ0GlOYPz3yWFRCoiAhSnpp9xXuugXmVgT27dIBSo+HAXBHuHAl7jFbqHH1AOrGuhE4CFtZJxxKmMA7e7Syr6AeGNxGhSyBB1gmc+qlIwNzwRlew5yOY2TSTEeAiBVjCHoHWU45QAKE00tm5WocAOnIwjZEThwqPjNDAI94aSU\/fpJH\/8IhRH5\/uDB0IUfoIvruuVUoDubwW8bEJCIV+qHjHAB7xHV+XAsbw29v2mgidQRpyKsIV7IHKA9hgWXIUPSOrjmDKGaP8A8yJZVuf\/AEQZOdQCKQSIH7pZVxK0AONd9W6wKTlLHwSQAXiFTJJNyDw7AEaf1AU5frDd1mgHHcRlqU2oO\/o1ZIDx\/Mq1QGnCoQbOoBsGwCHk8\/V7dtDUfXoB7B\/F+PXtr+Ltpr8HnvTQ77\/f9Gtt+HqHQber5+Ht0AAH4abdnq12CHDt9FdvT82h8xD17146rSu9R7uHp47b67R4ceHERCldxDXbXvHtD5R7ddoeUo9g7D6h7fZqldcQ9m\/dr017A9ld\/RodgD5B+XhqgU7vZ+PTYA\/1y37v9NJ+HWTQN\/8AFUzFEO0DXtkrfsDf0bfcV8WyY3KE9Z9xxpTfvVVYpydsPbWjlMmrrJ4g\/EIqyE55uCdTcsxZrtjOpgIB9IwB8NVLTuHWH8gNuVUlsXpbbtwuUamTY3KwVhVjgYBr4QLijzdnDWLLoKrRpetkOoBwYdimfW+\/Bw1IA1ADCdjJ1px+jpuIDXwwMiPf+TMNK\/3Bg+4FW6ahlW9i2XCQoAIB4beTnFV5ySSL2CoUjhvzDxDYOzV7PEFEwc37coW0woNTGQkpckaY6HL9cUouNVNXgBRqOrFslAqYHuu9LXizAIhzlZ2+mrccgBUw3MCnuqBRHgUDaU5SgBSEaM06fvUUedQApwADnD+oCxq8vLdtmjzdofzuG4V2rX5eGrK7P8yrU3ABABH4Iz4B2V1Qe7iPf8+uziHpClPYOvP1\/f8A1fHzHXZv29ob9tO3QV4V39PCu9eIBrYPx\/i\/VlHtDYfQIfjDXduHHXH5PwU1w27Neju02Hf\/ABlD2fliayiFdyy6QCFKcv8AnpkkQCndTt7fuJJQwcxSKEMcvHmIBgExRAdhAxdqay9iaRSSTaw163RDlQU+m3C37pM4WbHKQ4fSbfCJkKBTYAprJuHnXIpcNkhdFrtUyqCAkmbIkV1odZLn3KK5okgkAexUA7dWNkZnzGkMbXBAXG4ACCZVKLdgWBuEqpgqdMG6TlJQ3Z+T34aaOkTgdN4zbPUhAQGvMmUqtKV41AR\/XyAqbkSAeZZQdgTRL9JVQR7ATTARH0BrLuVzgK6txTVySMVzB4PiNCHND26mkA1MQgoJthKHHfvHWKsdp\/TRtWLG6pvlIAF99cI\/DI0qhhGpgVIm5XL3CcB1ZMIBSC1smz1rgd7gIfELuefyATF4JqIQ0STj9IQV7tMyiUCnWKd0oFajzODiYtR9CQF\/qAvx2uyzR2qA0CYAdhDcNWSNdhsq0xqAdgwjMeA8Pv6r+37dft\/iHXo9Hft82qbefz6D0cP2tesa\/Lx9NNb9nDuAOHCvZoNqevbfupX9a27q8Pk1x340DcduwPbowcQHzDv4a4+XsHfs\/Bpt3+8oD\/qpdZRH\/wCboh2\/ub0yUG3o+44eZAgIxeWLLblWMU+ylx2mt8KfGUKIAALOY5dqaofWAtR3DeZqAEhMzW\/F3yw5kgI1VuWKBO3rtal5fyZxF0wQWMA0MYHNRrWusxYGmi0tybNIv4RNUDJpq2lfLZZ02USAP3Ecu5OQOUdjN\/ZqSsO4DnC4sdTb62ZVNXmBVVFisdsVyAGApuR21AqxO8pgHWw1DsEOAgO4CHoEP1675RmoZOVfsU7XgjEMUqgTV0KfCGpyc3+t0FllREAEQBOod4Wda5hTRakUayckdTfwI6AQ9\/UVV5hAop+OVMTCP7wdT17uCi3NdssCEYZQogDG3GhAbMDiIicxEW0Uh45uwoibV734RMCpXldKraEASmKBLdj\/AA4aF5BNU\/hmimJFfWcR0BCbEIUqZAAKUImUCECnoKUP6gOzVEKXVZw1DYQD4wXgOrHDf\/eRaXtrBstD6Qp+q34a4UEaCAdgh29n6vu9Popxpqm1fRwDs37Q21uNdvQFQEB+Ts1Qez112\/Hrbt41HfiOwD6dAPHhsPZXcd9tAIenbht3j2dmqV9ob+njxpXW1fl9ABWvbrt2+9QOHp023295Q7B\/04vHWVi1EQLOJhvwARvPJIiBe77jY3xGpCeYxNcsfeaYpJgdY1vriWIulOuxwSRYOCORAK18CogNKhauXreL481iaUZXyUyAGUWc2bJptoq92YCQQEyTNuZu\/wCTfdsYaaxd1CwAlVTgFGlt3eZCgitatxLkNHPljFNVUIiaOKYmHZNJzqy80xZgG1MkN2Np3oZPdFtcTZv\/ADDLOBARAAmIsgoHOalVmwBxNpIU1AU5E0zEMAgPiN1AqioA9vL9UfUH69Y2PkB8RjayJr4uMpaGL8Tk0zsreaqUqNUI0qy4lEAEBXKOgtGLOIvLhEIGqZq+6W4wWIpcjsBLXk+IPDlZEHY2ylNijp40iB8GZuUSY5tQEqFVTcyyA\/nNMIgBgOX4RAFVKBuHiLAFa6ZNUEwI2hI9FsmUoUL72ukBCl4bii3KIh3VD+oMgCSZ1Thctom5CF5xEpZctal7Q3+fVkFOUxFCWRaRDpqBQ6ZywTMp0zh2HIaoCHYIeQB9NKdnCu21d9cRD8Xf6R+9qoUDj+P0bCOhqIU39QjxEN9g1t+32e2nk9vzfgpTQb9m\/ZSnb6f1A+zzANv29enuHiHHcKcdbj6A7C9w1Dtpr0ft012\/erv8464U+f0hx8n3q+3Qfs11vr0640H2aa\/5U39X9+L82srmWQVRKe4CiiZQgkBYn54ZFOCiYj9cpiKFEB\/eiH3G9i5VuR3FyrJ3GSbVQoHI4j5Buo0eImINQNzt1jUr201e+DLsISRWseRfwxW7wCmJcNkyrc4MVRKfnKqhL269KBh3ADmMHEusjdMF7CpI24Vq4C11nIjzT+NLoRVUg3bcxhLzumLYfBMIDUj1matKav8A6YcmuDHdxCZmEfLDus8h1BB9aF4xZhrzrtuVFwUSVooRRPv1K4vvaiN82A6NEvUzG5U5iN5SizlGYmERWYyrESLonCuxg3qA6IqmbmTULzEN6O4Q7DFHYQ7B\/XJO7LpeAxg4dNNR0cCio4duF1St2ETHoFEFHUrLvFCN2yRfpHUOHYAiF8Zfu8xWchPOXtwvjHEDhHt1DEbRMclylHxDNEAQbIkIA+KoQCh9bX5yv2xiT1zKJNopmt9MYiIT5xbIqG+kAC3SOdZwfgZc5xrQQ0aQYCLizMdN1rXtQQATJysmLgBuCfTKImKdSUk0wTSMHFJEohsbTdoenvFBXeGDtdrUMqXiOyIABA\/tf6gyrtDw\/ETn7UABVIZQgAaXIFRIUQE1BpqynJwKB3Vk2m6UAleQFHEGyWOBAqNCgdQaB2Brz29WuPn+x+o4cagIiPfriHn3eTzGvCgbcB13+dKB2UDQ7htTz46402H5fnCmvb8tPnp+HQV4fgr2V13\/AKwHp\/Z7q6Aezv8AX6NuzTUO903\/AI4gaywkuCIFjrkKzR8IgkEE07ryCiQFRExgUUFNuAiIUCoj9yWr1AQCRhVtL3W2MioIAPM7st67pEzapCAHP+bci4MiqYfqtnIGHYmrazBj8ovL4xg3XnY5BnQXF02E6Ejy6rXIUgc7p9HcnxFinUTCZNVIoB4mrSzpjE3vl9WQwB2ZkzNVe6bRH+VzNvCUn0nEjG\/SdsSjUTflUgpzhq2s24qMVbJNoMC+JHNzgRW8baSEXL61lybc8xHCJ1o4T7iInQ25y0ayzJb6CpQJJMzAJXMY+L+TXBRAwAqQxFSiVUggBgEOFQENAICBimADFMUQMUxRCoGKYKgICH608k5N42joyObqPJCReKAk0ZNUgqdZdQeAdhShUxzCBSgIiAaYA2TdsMWWG+WNasQsUUlJufMmdtI3vPI15TPUGZzNo5A1QZJqqGD8qYwhH2ikcyVh4yOg8uAiZhBrN3ydIqjNgqUoUdJWkxUAeT6RQfOBEPpJhRC04URb33fTD3c3g18ezLJV\/JuHZhDZtLTJQFJH90UOY3+h7tPBQKnGwhSItigWhHUmQhQAxew6TAg1H\/yglDsH+oV2kSAwnZq27JABdzCDS5Ykp6epJcwj6NY0eAAB4+P7ZKJQ4FOyaGjFS7dpVmJg9n6jz9Hlp8naNfbtTX7f4d\/IHoH278fRvqg9+1e2ggI13pXQ1rX11AK9uvwU+9+r899bfg+T21157\/sb6rx22D5w0HyVppgURoB3zMo+irlMK17gA2snzhiCVCaulk4amp9AyS0xfcgJkx\/dAYr8g+37kexkozRkYuTZuY2UjnJeZs\/jnyJ271muXtScIKCUe4dw3ANK4fnnzhS2n5jzuJbmdG5wfwfjBSJdLnASGmLeVMDV2mbc4ciggJVQ0leMGQ6OFslTZAkGjYoghjW\/5BUy6jAoFqRrbdyOKuI5TYiS4qNh5RBIoqZmsBIzrGFzOknuQbfjQEU7TknqxTGu+KQS\/vVuyThTmdFIFGLo3NskpUv6dsFgSSdSSYSF+WLHiXwbsQAgHcXHbzZMQTJc6aYcztoAAD0A8RP8tzAdu+iXRV0jByumAiBXsa4KPKumKB+VQopq1A6QgAgYB2AahoqyKhVUj\/VUINQr2lHgJTh2gNBD9Y+JTj0GiBxEjVumUV5CSWANm8YxIIKu1RHiOyZOJjAGm0DQ8cxXVFWKtduqCpkSEHkGdn1k6EevyAaiJRDwUjiAJgI1OKJGBEQuWWoyiE1QDlRdmJ4hnznvaRKQi4WH90YCl\/d6jJeSaGk5Z4ZZe0LadCIP7om11BcOrpnthUSjCO1hXOcwfSEwU3EhdPpOWdmf3PPLDJXDNHLRNg3NQgFST3KimgmAItG5dgAoAGwGHTdk0T8Jq1TBJEnEeUNxOc37tVUwiY5u0wj\/AFCviCarC3dSVrypWi5SCoJHbJD4m0AEwARU8RyxISgbiBtt9RrVEgpmty4LttpUgG50yoDMKXXBLIm2EqDy37obnTKIAJaGDs12dnr37+zXn7NUrX2gG\/spSmuIB6OyoU7OO+q1DfsDf8W\/Z2a\/B5PkD0iHCohXv8vZ2dm+3zfrFNuO2\/p24cA0O\/cO3s333Cnz6Gu1Q7a17uPbT8Oq779\/4uGuFe3caU4\/f1Xhq4bkeAqZnblvTk64KgFVhJGxjldEiRa\/3xd2CaZR7DHDUQd6skstKyCnhCgImSBnBMGMEAFUMUorG+LNH3Of90avd9yq21KrGjJJm5LMWldDZMDyFp3I3TMRrJttwMuycFHwXraoFcNzCGxwKIXHgbOsEyG4Eo08LPQsicx4a8rddBRpLQ72hDrs3nIVdm8REF2zggD9BVMxQZ4+vh64uPEl2OF2GOr6lEU3JDJrJnBaxL1KYhmiNxNGhxIYDgCEo2\/LJANVEyLX1ixJ1cWJHZviFwWWyOs+k7FIYfEVlbdKUVHEnaadeYUyczmODYQOiAGKnlTC9yR1q347IV3IgU\/La95HEoG5LlZtAMMdLq05QkkCG5xp46Z9zgS0skRT2wryApQM1kSkNFzKZagV5GPSGPHzDFUAqVZuoahaV5R20RQ5ypFOACVwgYXLQ4CAUNzEqqiHrAQ9OgO3WScEEKgZFQqmwcRoURMHtANUHYfJQpTGHuKAiPza55SUZM9hEqR1gVcqCUaCVNqh4rgx67AHLx0dK2WBUQ+kHxqeIBSFAKgKjSIKfmOanAVzgHbyDoZQ78JGTkDmbJ3LPrqe6mUIUTHbRDdJMziTMiXcGzFISFp9MyfHT69bueqLuFDg4WdLoCZ24OdQUmDNmwQFdQ6ypzlSaM0edRRQ1A5jCI6C7b9ige3k8bJDZuK\/FKcttRaogsxfX24RE6bRZYwg4WahVRVShBAQL9FxJP1\/jV0vykO9kFiinHQjABokmmmUTEYxzUBEEUCfSUNw5jCY2isGXMcTGBZ48VAAcP3VKGcLUqBSgGyaYfRTJsG9RH+oRFSU50zlULUKhzEMBi1DtCoauG031GdjZbOzkbYknBig0azKr1yW1F3Ts9QJ4MhIu7XenMIEQ8SHMYaKAOjEOU6ahDGIokoUSHTVIIlOQ5BoJTkMAgIDuA6p2efz68\/b5Q\/FX5defs+bX39b07fP1U\/U+nbb18NbDv2ejXqpT19tad+vT+zx7ezQb0p7e3fj26HgFewPPbQ+kKa48OHn7deim3ooHZrj5\/s6rUO0R7qB6tWjhS0kSv7mvGXg5GXal5hI1jU3Z3lqRcgomVQzVKWlo80u9AxTFLCQ6xzgBVk+aBtaLUOtHW5EMYdq4VKUq7wGaJSLyLgCgBfeZN2KjlX\/AMoqb7maNpJwvBXNBmUcWhe8YmU0xbTxShjpmJUnxSCdnKHvTJQ3IoAcxBIoBTae4N6nLZYPI64UBYs5c5llbQvhk2OBm0pb8yUE1mMwxU5VkhAUpGPWADUClTAtEOJbNmFCGFwzk4svvWTrEY7mAk\/CNamuiMYojQZKNAxxTLVduQwiInyb09XbE2zcDtQzqWhEjGJZNxPR\/KLpysU2ILmzp5Qw0UVRS8AxxqsgUQE+k8eZ+sVOFfKjVuyuRoR1DP1BESlkrYnW6ngqioJOYq7ByRWgBzU4aB\/iTJK7ZiYQOS2ryUWnoopB5jeExuFiX4uhzVAAB0guUgBTnHjogXBjiQfgWonlrLfNbhZ0KNBMY8csR+mYQCvKdEo07NeCuvdEWco0M3kYiSSFMQ4gIPmQDx246\/IzsiYf3qUeUxhAeyhWhhroxWDO95mhRoRNpItUAKIBUfEBJm25d+Im20ZRwjDW4ByiJzPnQSkqUQrspGRHvawmEf8ATFSBXiOjx1vNT3TMlHw1X89y\/Aoo4gAc54ZgqZsqomf6SZF1nCgiG6YacXXeEqpKy500yOJSVOUokSE3MhGsGyZQbxcYRWnhMmiZSCb6QlMbfSDqGYkaPEPFUJd002J73G+KTwzDakQuCiEQsVCpff1ynd0MbkKkUdzu2njMotwsZV9c8iCjh5JqmMPjGjwcGFaTdHHiscfBKPEw\/V0WPim\/gNwN4ipzm8V08XEKGdPXAgB3C5vYUgbFAA\/qK4teUM2ZyrQXTy2Jxw2M6Ti5Fy2Fq7ZyKCR0l3tuTzUAbyDchyqCQCLImI5QRUKbHWeiu7ZnYcqLaNv2aVFzEScaH8nji3jOIIkQOkcpATYXUUgMJIgAnIe5vyqFOiZcnKRwmCrZchiKtXaRgAxV2btE6jV43MA7KJHOQewdbD5\/s64h6\/Pcdcfv64hqlQD08afP5KgIfe+\/qno7PTwHcdcPP8Gu0Apw241\/Foez1fJ8mvv67OHza4+f49cfTrjod\/P7+tvP9nQ19gBw128dg2\/Y3HRUkSHWVPXkSTIZRQ\/aIETIBjmGncHDR7WsxFG9siLuk4xCGjEV5qKt6TdAUGoXIeKFQ0lNHFQDNbfZGUkXp6Ar7shzrFkb+yIspL5ZusHar1V8u2fObZbSgoGk0nLtpVg4uybI1QTfqNv5HHs26MazEW6J1F\/ud3bN3QjC4oB8JTuIuSSFRIFiAIJu2ixDJuY+QQrVNwgdNZMeBtGkcPzy99WwmcFvzEuZ+m2u6MIUecU4GeVMiwn00gAeQi5mzsRoHMoO4qKXLCy+K8okHkfPEEnFl3SqsHhqHLKImRIxuFIRAOY7lBzzgNAUoOlIaZWtbJduOQUFRnNMGzRwsJgECnO2EHcSVyKZqCugZstUKgJa6F1ZE9eGO1h5jhFLga8LTryUIkkg5dFlo5qmcPqJOlqBwDSSZwsu8EikH+VR058Ce8xfrF+GXGhHrFMIB+5VMFdq6FJ\/jy+kzlDi38KSQMFNjpKMpF2icg02oPDRjEsTIwmCoiCcK9Lw32PUgcPToqMdjO4ygoNAd3g\/bQ8emUTcoqD748dORKXiJSoiYwcA0U143GgRubb4BbKa0fHiAiYPDcSKvLKvgEo0MRMqBBHQQ8Sik\/lkigRKGi\/AAzbmpyqSLrdnEIiO5jLGFc3YUw6Qm3EQq9KQ4izWdEPGWlCAY3IczRV6UFZJ6Uo\/SXAiqpwChQIG2knlxuQuSQTEpyNRTO3t9qcvKIeGxMYVZAxDBsZwIFr\/AKHoobABSlIQpQApSEKFCkIQoAUhChsAAAAAcP6jkhrxg2s0zQFY7BY4nbycQs4KBVnEPKICR5HKqgUPEKUworAFFU1C7acHwllOXtWNcrGOrbLlRq3ieU3KoBRt99GTtiO1PeA5zqosIlRQDG5jVGoj7zbdiXL7uHIYiNtKsivOX\/0hN5ZV9LEIc5dxIDRMAH9yHDQkcYEbmOA0q2cZETTEe0wCrFOgAn90I6qOBhEO0wSN9AIjygOxDW9UArtuOhAcDGIAU3NJX0aocduW3a6H\/mFNsBRLSQvmogPEB\/zeoAl1UuBaj\/ZSN9FCoej83a0H7+v\/ANhAAACoD8Svr6Q9ocv5u1Lr6OAwNX\/5jfYAHdWtu7iABvTX0sApl9PxO+jV34AH5uAIUDW2AyV4byN9AHpH\/e7XfVAwEQQ\/ffEb6ANtuA27zbjw9Gv\/ANgy1AP\/AIhfNK93+96o+vW2BCCO3CRvoACvD61uhXbce7W+BSlH\/bC+BLSvf+b1fq\/PoB\/QOTnr9UH19UDen1vzepw1tgcgCI0oZ9fW241MIBb41AQ0X\/mJKADzANHt8\/Q4iA0+AbgNOzQC+wa6IgJBHmYHvV0uVUQqUopLQzYok41MBttth0p7ngcTI8w+7mdmv0FjpVoUXCLeI5UlqbiAHEvp0CrOxLRtdOocqS9v3DJuVK7AVRS57wgGbcA7TclNCllHLTiKh3ZfEfW1bKrWJj+aokI3+FWOWM+IoEREecrycWSOY30iHABDSKdmQKKMiigdqWfeJNRk0Wyon8ZrFJNG7WPt5iv4g+IkyRSMr\/ox1R3+6\/hl4W7DXOwAhiJoTTFJ4duBi8oizdmAr5gYKBQUFUxAQ0dxYd5XlYionIcjAXZLpgS8oUMkmzljJyLVE3GhHRhL2d2lAjp+xbyQTGqILOH9sv1Uw\/cqFft3bQqwehblGvENAEhil8+HgY0NKQcqUfTRN+Uxij6tVNhW7SHEdzfCY4Br38wOxEfXofCxnIMw7Ak3cSxEO4QId6JqV9GjlZQNlQZhOUEnFwXiHgFII\/SUXY27Fy8gPKAbFKYph7w0U+R8vv1WxyD7zbmNIP8ANiOV5jcwt17jmXkrcjpAgbVKCAm7gDbSQW5Zkd7ykUtJKZE87JHUAwGMsdWQ8RuC6hwqJypFMNOOg5jCPKFCh2FL2FKUNilDuCgf\/wAXIFKUTGMIFKUoCYxjCNAApQAREREdXM+sfJeOr1YWTcEpaV7v7Rvi17kYWVdsGBRm7Vu97ESjtrbVxw4HL7yyenRcI8wcxQ1\/v2sr\/wDzC2+3h\/sp26BVVRJNAUQcg5OskVqLUS84OgdCf3cWnh\/S8Xm8MChWtArr3uIlIuYac5khdxEkylWgKkABOiLqPXcoFWIUwCJBNzAAgNKCH6wVNMhjnONCkIAmMYQARGgBUdgARHuANL\/B5uEmfdTFI6CHmI2WFqY4nAhXQRzpyLYTimYC8\/LzCUacB0BSlExjCBSlKAmMYwjQAKUAERERHRo5jcltv5EpnBDRzC4YZ9IgdoYSOie4NHyzsTNTFEFQAlU6DzUoOvnHuAA3ERHsAA4j2aH\/AD2srYRAf88Lb2EBoID\/ADpxAQ03kGLhtIR7sBM1fx7lvIMXIFOokYG7xmou2WMVRIxRAphEBKIDp02jpmGknTA\/hv2sbLxsg6YH51E+V82Zul12YgqkYn5QpaHKJeO33B73LSkZENOcqXvkvIsotp4p68iIOn67duKxwKIlJzcwgAiAbDpNdBVJwgsmRVBw3VTXbroqFA6ayC6RjpLoqkEBKcgiUwDUBENBEDMQ4TJk\/FLCjLR4TRkuUygKliBc\/EjJikUTgYEqCQOb6u+nFx3dcVvWlbzU5U3M9dU7FW3CoKHKocqakpNO2LEhxIkYaCpWhRHSk5YV5WhfUKioVFaXsq6IK7I1FU4nAiaz6AkJBsiY4pmAAMYKiAhxDQNZS5LbinYpFWBpK3BDRrvwTmOVNYWr56g4BJQyZuUwl5TU2EdHaws\/b807TSFc7SHnYiVeFRKYpDLC1j3jhx4RTHABNy0Cu\/leTc5JxkHCxxPEfzM3IsoeIZEAShzO5OSXasW4fTD66gcdPHOO8g2HkBvHiIP1rFvO2rvIypygPvY27KSPuwFE4VE\/KAVCvHyVoNO+m3y+X5x7gANxER7AAOI9mljQ81DTJW5ypuTQ0vHSxWyhgExCOTRzlyDc6gAIlA\/KJqDStB0+lJR8yi4uLZO5KUlJN23j4yMjWDdR2\/kZGQeKItGLBk1ROqssqciaaZRMYQANQ17Y9vC1MgWTcjU76270sa4oi7bSuFim4XZneQdxwLt\/ESjYjtsokY6KxwKoQxRoICHkM8lZKNiWZTEIZ5LSDOLZgooNE0hdv127fxVB+qXm5jUGgbDpNdBVJwgsmRVBw3VTXbroqFA6ayC6RjpLoqkEBKcgiUwDUBENUDcdUHYfJLXHc03D21bdvxj6auC4rilGMJAQMLGN1HklMTUzJrtY6Ki45okZVdwuoRJJMoiYwBqFu+yrlt687QuWObzFtXbaU1G3Ja9xw7wviM5aAuCHcvIqYjHaf0k126qiZw4D+pMIU5UyGUUOYQKmkkTc6qqhhAiSRA3MYwgUocR0vaVsZWxhct1tTKEc2vb+Q7OmrjQOkNFE1YONmnMoRQg7CUUq12pXQlMAlMURKYpgEDFMUaGKYBoIGKIUEB4D5CuZiWiYZsdQEU3ExKMIluqsJDqeCkvIOGySqvhpmNylETAUBGlNAJTFMUQASnIYpyHKO5TkOQRIchg3AwCIGDcBpr3uXlIyIac5UvfJeRZRTQVTgIkRB1ILt24rHAoiBANzCACIBQB0RVFRNZFUhVEVkVCLILJKFAyayCyZjJLIqkEDFOURKYogICIfdfuxAIIrpromKoZQhDpKIKEWIKiQlVJzoiYAMUQMAjUBAd9f94DT+zTt7qzhGKeLboQzeXqqe2w7XbzaVq5JGybdxgNrS0kClo26iMuB15bnnlhcI+9uHHKmJLB6nM6TXUXAZVvK88z2m8VxjkyEgLVYN7AyDO2jbr1hbUzZk+l7ySKjm53AKrKJuHAHMJSgflD7WP7FTJWZLiz1g7GvSl1OXNh6Tn3LuQLZUpaOMIC4mL23kHz+QWsaHv3GeUW\/xy3mzheLZXIwFVkVEq6wrtbTzWzybkjL2SepvMGRLewpgy3GV33+0x3H2lia3nmTL1+JS0RCWPZKkq3WatF37lNeQWQU91RVSRcKo3NffTHMXU1m7AfwkXk3FGRodlAZIsBzcjVy6tqSkWkZJzUDNWndSUe6NGS8c9csnIN1SGMmskqmS68R2Rb3UZ1VPsfOHza\/r86crAhZ\/F8ErFO1Y6W+F3bclzW+W62EZIs3KJ5NiieGWMiIt3axamDMXXlhS9rkv3EPT\/ZV0XtmKyWdthF5usQtp22rdz22JjH0w\/ZlJPysCkKsUuR2eIlQKYWzxQpDmLYGVretPqbv+Zv091O3WG7asC0jZMxjatqzrmALe+XzKXwe0rHgLscs1V4Uh5Fd27ZE94USQSEB1MZ26eLqlWMJZcieFyrZ+TGDWz74xDMEiQuAiV9Mxfv4UkG+t+r9nMsnruJdtiKci\/ioLpJXVbFkWJ1ZdQNg2DIlj71zxhrE0W9xPGlBwdFeTi5G6bpt2VlYNIhBURfKN2jZ+nRRqdZExFDWh1D9NmQY7JWKr0I7Sj5po2eRknETcWsDWdtO7bclEW01al2wDz8m7YPUk1ilMRQnOiomobHPRR0mZHR6T+ha4sYQl2dXPVvEnMxyZcD+57quiClMAY0eN36c7IPxs+EbvXDWNJGtjEkeSTlCtlAYuvteLCt4zleIsPK2IMfxj9+k3QkpOLsO7s\/WnGSUogzMLJCTkGcSVdyRCiJV1DgT6NNW\/iHpxLJz\/Xl1sTimCOlG0rVAHl4QcjcS7K3riypGxydVhkbfUnmsZAV2UuWTZnEirdu65OnLpQlZxa6b5sno5uG88r3AdwDti7zDk7pqkbuyE2tp1Qq7m04aVkhZMFnAe9OiIncq0OuJSyv+001\/uU811jTnU45zHGOsE5PsK27LLiO\/WVlJOI++468puYNPpv7cuL4k5TexKfgHKKXhpiJRA1ah0zdDmE84ZEyt0adcY2EKuLMhTHvysJG5Wm7yse3pGUZNyN7WQyDjTIFloPEJ+Kj2C8zCOVmbogqc6o\/95D6gb+j557Y+FbgvzKF6srPYt5S530DZnUP1JTs2jb8c9fR7R9MOGceYG6SjhFNRTlATlAaha3VDgSIyBA44u+57xtKKjspQsTb93pSdj3Atbcwq+jIKduSORZrSCBjICV2dQU\/rlIepA602Vmq5ExdDdAcnJseoi+c4w9tWdY0axhZXIEXM3Jb85F3TcHvdvRH6M5Ny4Vdps1k23giKfOcSFkn1v4T65L0wnD3E3tmS6kbewM2Sxai5dKopISIITN0RtyN2SvvKahGzts1lFEzhRpzmKmOP88YNveIyRiHKVvoXPYd7wXvJI+ciFVlmioHaPkGslEy0XINVmb9g7RReR75BVu4TTWTOUP1tgBy83L1e4TEOIUE1r5OTMIUENxIoIe3XQmmQOUhOjbpqIQocClLiK1ClAK77AGsZLCQBUJ03MjlNUdjH6Sr5SMalaVFMoB6tdYeDPtNeoW8caYp6c7pypYXTT02Mr9Z44ZXEXGl\/lsNnZNnL3QktCsbiPAMC3TcCzFsNxTvxApkViR7UxSdO\/VV9hleVxxaEbcYI5+wrnDNzWIs+5bWayEY7+BuJ5aHbJZExzf1vKP2EhFyJHj+HkEWklGuE1f710rdMWX2VxrYvzRgHElu3alaE2pbt0pRMVa3UpeLU0ROpt3x41VCTthqZc4JH52pFE6lA\/OFhdanRf1B5+wF1DWtmOz7csqFuXMp5O4LyCXK9M+lsePIhhbd4RFx2Em3+LuDkWXjHLBBVsuiJ1khDpgyLm+KUg8z39094fvLLMStHJwzhlkO5LEhJa6yOoNJBqSBdrSzpRVViCafuahzJcpeSmhMusm3bpEUWcuFTlTSbtkCGWcuFDnEpCkQQIYwiI0oGuom5sy5jv\/Gv2ZvSRdCcNZmL8fyaTJSRi5aZnoPG8TBwcyk5gEckZQt+2310XRdkkwl3cY3XaRbEqKQonQjusT7FDIfVLavVNhWet+VPi6Mu5nel3ZEt1\/NxcTIuLAXZxFuLyUpbZHQyEtbkv8Rg7ihE3jUyBVfCKpgHJvUZiGbwF1A3dYjEuY8S3NHmhpG1ciwrt5b1yO0Ic6zpeKty63sWMzEt1VFFkYx+gRQwqFNqNzY2vrrLbfZx4+tOesq++lRracCS5rjyHbdh31aD6ej8XrzxY99AqZCUYS5Hiku0WErY6iwJCmZuGDc75xuO\/CPepTHFr5Twxga1LTJNZ7uK07tg4ebYvJ21FZFjD2Q2jBn2zJ47lZBs0+I+I2bncLpiTUR02t4\/N\/TRnK63jWOx9ZnUtZMdZ7DIsvJJHWh7btq6IWcnIhldc2m2XCPYSgsDyipCosjOFzlSGWKYBAQh5opgEBAQEIt4AgIDQQEB19pcRBMqZQzbg0oAAiP0QtrJagBuIj9dYw+3XV+PUtGXvMdPafTvlFbNEZjNZNDIrvHSNtPFbkLYyi7ti0G6k2ZBOyI4VI2UWKBFapmMA291EYPujNOLehqxbuykcJ7qYRjpbOl0ZEc5Cd27LRqVq2CvIxMrcN23UimzhYqDboEOiQFFEUj+8KauaFkbX6l8NNGEDeM3YVyZXsG1Y62MtSllwkxcLnG1qXDBXpNQ0RlG4WEMojEx0suzbO5ESsTOk3R0klLs6junq3coQNhp9aeLMZDE5Yt+Gt68PzmtJZ0tKqEjbcuK6I80csjcaJETldiqKgKFMQhi010h9Ok1bnUBm64MU9NXTfjjL144Gs62bhxrjq\/Y\/Eljkl8djd9zXdbMddt928LkU3zGKM4TRdl9z8YXhVkErOyj0e5Sy0e9uuyz7hN0kdQGILcFnGY+ncU3rYSmR2uT5qbcspXGUsi1kHcEu1Fi6elekdoGIj4J1iXSfqeU6p8r536IunW4859U2Wpey7fk2eS4NzlqThYptji7Xl1RSV5TsXF3DGtSFfIRaIN2ioeOqZFQ+sb3zAWr1MZPmb+to95XBjey7DtI904Pto87OwEQvnKZfXsjZFmzd0mgFH8fGJSTt2WKWQdOgbEXQ8Tqv6gLllMyXb0cFst7bPUPZ1hx7G0epjGk5AT9ozBLZ+BS8sSBj76gpGQiJRv47x1BSLI4GMZy1UOmb7PW5MXWb1dynSfnO48j4+wC0uGCsW5c2p3Ajf16zN7z2XPGvS3bUikJW6wkHCIxSp2qLU5PCbpIlECOMaNofqSyZYTC4nlqvepHG2NYiVwo\/lIp45YT76yXUpdETdWQ7dtty1U94eRMesDpBBVdiR0gCaikD1r5Vy7HrdPd8xtoP8U3JZTJ1dk1md1kGKGcsSAxXbbIE5C5J+54gh3JETeAmyaorOHijdu3XVJkuXlbW6j8RPrEx3eGT7Rt7JNn2Syd56hLGZkkLgtrCc5HX48tS48jN2POsjDuXrQzshDAgqoYpylxp1YYVjL3hsY5XLdJrZjMjw8fA3o2Cz7tmrKlfjMVEy07HNvGl4Fc7cUnawKNzEOIgJuUMe\/YY9M+WJnCeFoCLjZHqku6DcPWqd0v17MRyjf0pdvw17FPLus3E+On8Y1hrXO6Zx01dsqBpA6qLdAzeUU6WMt9Q+OuqS2YUZnG+Ur1vqFlLYmMgQ7cJCORuqAtm1rXe2vFTss2KgD2AdtH0SCwLo+OKXgqZQmvtjbPyZ08XD0fOliSnUF1Gxww7rJeDCQvxCIuCdmUTOHd\/X9ZMg0XhHTxs3O9nwUiziDmSdriZNqGH+to+K1biNa6WdwwpDBYyr4qxmYvkog95FulRkD0o1bA2+K+GA\/yTxQ8LXRnlnDF1wuUsa5Q6mom7cbXhbCyjmNuaJmcFZU+GumaapG7xm+KuJm7hm5TRds3aajddNNZM5C2lgteD6gM1s7DhrHx3fmaMG2XbVy4ahb2jbahY+Zti37lm7tt91fkrbzoh03RYxBQqiqZk2xnBijrEefMF3vD5KxFk\/qjwxdlhXpCe8ps5aNVszMEeuVdk+RayUPMxMi1csZCPeIovI9+3WbOEyLJHIHRPmDqqvt5bcRO9LvT7A4+sW04k905NydNxWFbLfysTY1qpLtQcIQkaqRZ\/JPnDOJjgVRK4cpqOECKWf09XBbnUH0qZJyY8jY3FP8A1nLAjrQtHIsxNrg0goGKuuFnZtjDS8+8EEI8ZIrVk+dqJtkXBnKqSShimKJTFESmKYKCUwDQSiHYICH3S29av8Spr\/vNH+0Ux\/yPzDqwE\/s4L56LrT6Wnl3ZhbWK6y63iD5ch7pHIs6nkKRdnlrSuWOMKd7e+qxwuU3NGQogZIUwTKP2iPV91eZvi+ovrh6j+m3qCjrwuy3Ty761LQgZ+1J+9LuFG4rhYxMved8X1cseyVk5H3COZs2rBBixbkbkMZTK2Y2VnwKeU8g9S1wY\/vO+lI9u4n56xLCxzjkLOs109XIoqS24JacfLpNCCVIzh6uqYBOcR1\/3pi3Onlkpj9hj3od6zH2PrdswBh4+z1CXjbs+VW1o+NIi3hE7cXuaSWjityELHEU5EAIQpQBneNhRNvur8yNnzMcZmebTYMHU3IyFny7W2rCs2elDJKP3MLDY0COcMWCypm6RZNZdMhTOlTH\/AO9MYWwaZvC4Ai+gjrQeIWfbpiMrMhLtteftdVnDRsUxBONQQsi9b2u6JjkSF5Y9v4zVICJlEgR92NLQt0blzRnnODXKk26h417J3xG2zcZLGt6Dn3rpqq4kbehbWZg1bMFTHaogsuYhCmXVE3\/es7SwqR1acNbM3Z2PoW2rdKqmygsVu+q7NeMruZMW6QGMlHwOHn7xiQA2SYFEuxQ2wfafRP0VfZmZB6VclQN8yze5Ms3xPxmQczHuO7rlhb3e5rg465o6IlrlUctl4R02VbnK3jmSLEQ8JAqZeuyyM\/EwxCWlknLGPcg43x5hPNcVl238dXAm0veCvmFXYxfO6s9JrEMoONa\/EDnePEIsqahjGaCc7MKjQHSFA7AqqSvy019tiotz+Ch1F285X8OgqCg1yj1LOFgSAfo+KZJIQLXbmpXbWcvtUvtGEs0yl0Wk3dYr6CcH48xs3yTbmBsaMVp2ERuOblXVxwccnfkZEuXYEIgmqieYuCWkQAgixBA\/2tZYzNbzpXaYKPjg8ajYUYjl5S4SYPUxyYU7LkLrZxpY344IGFypJplBD6YhsIahL7gSvSQV8Y7aXnCEkkCtZFOHuu0Cz8WSQalUWI2fkYSCYLJgc4EUAwAYQCo9Xg\/ZRzvS5DQaWTLJJnonUeikq8c3OeOu8bEUs8Tw8qQsejBA6B0BxTDx+XlA30qRX2nn2vPUNYmeupC1PdVcRY1xgo4krQtGdTjZa3oKXnpI9tWha8RCY3jpl+tb9vwMX4BZWQGScvVHKRvG\/wC9vmMO36IuocREf\/ux1T8dYVTRUTXUaZ26j0XaaJyqnaL\/AKWZR14DoiYmM3WFooVblPQ3hHKenKIDr\/vKOAbiyhF45snPWR3lnNMukfx57ft5S6cy9Sn5o3Qd25k4uNloNSaMzOZv74gEk1OZBNQBVAdXj0v5U6B+kz7R\/wCzKtu0slx8\/cuJcgi9dy+GbxcT9x5BmXUhbjsl8P7QIEvIvFH7yz3krGo1MZ4crYq5bCvToSwrIdOWFo6+sgW1cGC5CflbtNjTLjeQaTN\/RLG7JSaniXPCzCky2k2D5qsk3cNHhDGbNF\/Gbp\/ragxEe5flh+q\/A8jKnQIJiR7B80vi3Wjx0f6qSC87MtGoGEQDxXBA7Q10G3XYc2xu223fSPgWKQmYRQXjI0tbePIW3biiTqJgPhSkBcMQ7YvG5qKtnbZVI5QOQwBBntB83uFvYWEXtn3Y9iVk37CHuS2OkmaUuOKdu2oqIIO4NxdLFq6TOYDIPVvAOAKgJAzHe2OcsHX6pcTuYq387390zXIa2rxCZjyylp2g8y\/j2\/rSfWveT+AG13jFvMJsCvgTaFbLPDJJIEL099QXTp9oFkLqC6cr9vyRs1\/gTLjuTbRkq4g4p5eUzZ8\/iiSue6bRmbUnLMi3jRO5LcThJOEk1EAqQV0TB0b4Pu+YyPj2xuoLpqwMhLzOOrgCz8p2rHDZ3UXfbItu3KdnIhBzKbyFQbOlBQWq2OumJR5tXZ9pd0j9W3UEjnPo9aQt9xaPVsbGHURadxsFbrgIIsHCt7\/sU8dEXOm6miLRaKzZ+3fvyJNvCSUVTco\/Z+dVv2bkv07Ymy9kNlmJn1cNMlMrbC0Z+esW5m+PrZmseNb8ti8FmMJOTNszUkog1UKdqLxFuZZciPPqfjvtMMqdLlx9N03h\/IcA1j8RNceoXMlk+aSiY+zJBU9tWDb04Mc0brvgVAjkUaHATkMIEEv2iXQ9kZw1tPqHt7KNu3chYkmcqVwTbPFX5w4ayo0ZpiIA6dWDdUYzM7QKIrERlUlgJyHES3d1QdRsnPReObRkragU4u1YxrM33eV0XdONYCBtSwrcfSMOS4rhcuHB3KiBXCYN2DRy5UMVFBQ5cUdUeKoi+4LG+aIB1dFlxuTbfRtW+PgLeak4RrJy8E2kphs1ZzZ4o7uPVSdLpu49ZFchuVQNYLMT6Rw6WmvPykKNEz9NGXxWESgWgAAKCNafR7Kbambd6g45jdMfjDFbeUwDad3MUJKBQkrI6aoS+MduYSOkE1Gh1YeYui6bjZHKBvCl0TuiUWQKYnQtneGJHw3VJD59uS2MeXNFeDF3rN2PEWkN8qszyLIWsrKRdoZThbccMTHUMSNfSBioikZ6rzxz+5mhWFyv7AavrjZFSBAGk+8s8jmZb+CURBLwZJVUolqNBDX2lpU01FBHN+DqAQhjiPLa2RhNQCgIjygIV7q6+0OMsgskUej3OpQMokchRMNjyYgUBMUAqIBw19k\/byjl6zxTNdevV+9yM8QUVSQZSUTcF7N7femUIAlI9jrVmLjdNj0EyaiInKAiXbqaxOS0scxXSxi7oyui58JljWUR+a9pyNmY8UnsL3jY0ukCZRuM10JMnDB+gsLmRduB5jLGcHKpecgp\/J5RH7VIjxSgAPgv017cXNsIUHw3AfNq28HM8U2Yhiq4fsxxvuatH4KxWaSV\/wBw9Py2Q5rILlZZBRwpfT2\/ljTYSomF4lKcrhM5VCEMX7R9R+9cOzJ5rvcUhcKmUBEHt39M0i6IiBhEqSa8g9WWEpaF8VU5qVMNXpB2KPRLmM9KBXbPV0gQQGlaCQ3t10\/rt8d2isr1Hus1XHnkZKCjZUuV5V5k+97JUG9U5Bs4JOsEbNiGsUk0XA7ZNigVICcom5v+8u29H+IhC29KY2hoWOFZVRvHxsRcF8wse2QKoY1Pd4qKbIcw\/SMRAgGEeUNfYNR6\/ie6ymb89RDwElDJKmYy1y5VjXyaSpBA6SijN0cpThuURqG4a6ocb2jjazrdsXAeIsSyWFLci4GOassYSNnX9jxnbkhZoptwVhZBiycrIGXRMVZdu5XSVMYi6pT\/APdirDy5NSDDp5uNbODTIrheRctIwkM76q8eWheLh04BQiRDw+K5mQRIoI8zRkutycpTGr1TxF5WVY1q23giwbbnenQkdbcHBJY0yhb92WzC4li8ZoMGTdO3lZl67Rg\/dWBEyOI18q1EvgqGKPRb\/gM3f9PWRtZoPmt62tO3OrG05K3sYXhcipWUI+e5uxHi1XG4MpBUPDUJcV9YhkrVbDUpRlRI2EQOYoGua9r3mGFo2bZdvzN13fdFwLljYS2rat6NdTE5OTEg55G7GOjItkquqqoYpCkIIiNN9dS+dMidOmec\/dM9oZdxfhMuIMqQQ4eYZ2zrJlLk2x7Ytu87cvWSUi4qy42307inHbgxFI6PIioDN2osi3Uyjao\/Zg9B3SP9m+XpOcz0Xb01l55cGTceYPQhCXLBXNZdsrTzVFTLLZv4MtEKSsehKup46SqpDSClB+zVUbuXIqxvWxnxOLqYwnYpoOOp1duk0TpRIqKxzHKQApziPfpTBP5o4\/S6OCdBZrsK6+CQreEJb36DxvcM1fECt+VK9RlB\/OT48BhffFh988UV\/wApq72c8o5cwsN9rnAo2y4dOFVTkPK4CJcF0sUUVDCVm3RumVdLCkQpC+8OVTU5jG19iBYGPbLxNli8rU+zg6Nbn6ccQdR0+6t\/AF4ZAPZ+QLnlE7uWRdsSLOHMxY7BZqkU4KSUtDxrMeepEjWJbXVB0zfZo4fc4qyES7sfZss3qGWs++7fmFIGXZvLPaXVflxzEYWAnDmQkXLAoInVexDRwChTNimDFZslO2D\/ACR+jOwC5DfRT5GVint9J2lEJ3c7i5Vumk3lI11PlcKIOUylTcJGKoUAKYPulNxyeJ4fN9Dm5a8xDE+tQaU5q6+0w6Tv+tsW\/A+0Xj3Uea\/v0LGt0MQCvEXjFC5Utv8ASJKjfBzhd3OJSvIov8moAF5+YLG6SP0rfpq\/My7sl3X+kL8zvzCGTHIt5yV3CxG2vj9zA1NEjIeAKgPDguJecCpgPIGTsZ\/FfgX6SMc3zj7477p8Q+Cfnra8pbXxj4f4zf3\/AOF\/E\/H8DxE\/F8Pl5i1qEr0thmoM+BJ5jufLYXuWwhxuVqFyW7aVv\/m4W3j3ReJ1AZfmr43vQvBFT3jl5C8lR67vtApvNsfleF647avS1prAMpixOKjLRi73um1Lifs5W7XN2zTa9WCbS2jsFUDRTEjhJ0JjV5aGyg9+yu+1cy90T4TzPIKubswrJ2vMXeFtNjJiizbWzd0RdkWrJr220cKs4eTcM2txMo0iDZSSceECo9XXStZGV7mu\/NnWti68MdZn6t75tho9uFQ9wQtwxEGa3bDRmBLHWlbLm5XckqwWlnMhMSrtdy9fqGMiCFndKH6Wf04\/mnfuRL5G\/vzM\/R\/8QG\/rmPcQxg23+cF0A2NGCbwxWB2YqwjzARMPoB9pLdGTctRnU3jj7SKXuA19Yhm8ZHsqIta0bru\/K9x3HaD2ZQvCddXShKxeU1WBnJE49RMWoLplKY4FTvzE32e\/2z+Zum7pLyZPy0xKYjuPHJ7mu2y0ps5GsiNqXhB3PEII3I5ikUyOJmLRt18+UTIo5MdUoqjI4Vws\/nr2uS97iLe+Zsz3o3YIXtla9CNTM2jl42jgM1gLSt1qoqlDw6Si5GRV11lVnDxy6dLorcvN4SqanLWnN4ZwNy13pWmuti\/A6g\/04B1i5Hib\/wDhAY0\/R+XHXwq6sk3MaL98G7rpPdIvRyH4JlhIyAvufMCdFeQn+82zdxER\/wA0rc3ERqI\/0ZxER0p9rIOZYQ0MpjD9HI9MA4fYjG8w4nLi8Zgb+G5\/h41cF+KeF8B5+b8j4tN9OWxCkRIuxdsSFSTIRNAjpoq0L4SJAKmRNAqv0SFACgBeUKBrqVgP+sUPUKPUTetjXgLwcYBjMbRGyo25Y73EyIXhd5Zw0oFxgbxQFqCQNwDkMJxNpFbl5vCVTU5a05vDOBuWu9K019pXkjIuaEOoawPtJhu6NvbEz3Gx7FQsu0b4vTJ9z3BbJ7mb3hOK3MVeKyatHkckbR6pDN\/HDc5SJ3XjTCv2wOfcY9DGQ5wX+R8N4\/tmZtDKd62yukhHSNsvboiL3RsWHvCXtVuSHd3bHRbRy7RIVVZkpylRD7QzAORMnOM7dOHXs3tm3UsXt7KPYsnhWybEm74lcfsYi8Xdy3Yvd94WMS5o5WPm3DVqoEpCJvDoiZUxCzfRlhL7bq\/rJ6D7lRuOHdYuf9P8a8viCsu9nUk9u+zIObY3a2NHw84rLOAeto2QiY54dy5MLVIrlZM9j9LGByTLq1LXdy1yXHdlzKND3TkPIVzqouLqvi4ixqDWLaOpFRui3bNGqRG7GPat25OYE+Yf1vJfTtne0Wl94jy3bLq1b1tl2ss0M5ZLKJOmMlFyLYSvIW4rflWyD+MftzFcMXzdJZIwHIA6uKxugf7anN2C8AXfLSMlJY8nIq\/ImWYkklTJrquFcZ39CWlM3GuwApXcsxjoB0\/WEyinKY21+ZKYZEu3qJ6ospsXENfHUHfkY2hXjW238yncsva9jW6m\/m3cOyuW40EZCbkJCSk5aZet01F1wIQiRby63\/s6utbI32efUHkN\/Lz9\/wAbaMXMyNiXHdl0P0ZK8p6JkbSue07otxlekoiMhLQzr4xDOpRUzlNuiYRKOO+oX7V\/7RHKH2gT\/Fsi0kbVxI8iJyJsJ2MbIx00wiLgmLtuWdeIWY4mI1FeSiISNhwlzoIlduFEiGTPbXX1ijr5ubpEybZuMbJx\/aR7IxGe5LptmRtIb5Qd3TCXsjkO2lY9adib6cszIJtAFNAyhRUOClCWzbnWh9t71e9RWH4GcZTj3Gri0nDL4i4aqj\/KYxxdOSrutWIuFuioYWUo5hpFZgtRRJPnABDGPTzhC1kLKxLiC04+zLFtlBy4emYxLHxFVXUhIvDqPZedmZBdZ7IvlzGcPXzhVZUwnOI6\/Ftpr1l9NnUFfHQv1houEJicyPjuMeyNr3xdUdFhDR17Po+37isy7bHyAtFESZyEtByiKcq0RAHjRdU51jWXeX2sP2pGbOtmyMfu1DQ+H4c17QrCYYqpgDiNdXreN4TDiz4+aBEreVUgoppMPWCqyBZFET+IFvWfacLF2zadowMPa1qWzBskY2Dtu2bej28RAwELHNikbR8TDxbRJu3RTKBE0kwAA21jb7Qjo96z5box6r7Bs6BsZ3PHsRW9IWXZ24hcsZFXNEPY+biZKEm1LXul5CyjF2hKRMvGqEKdFIyZxV6ZM0o9U19YD+0V6bsbY5s9TrLx7bpCBlO4bBjCuy3VdFmxUxbMpATRL7XfSURJRMk1eRraVdMliO2xkUkcadWv2qf2gd9\/aGXfhR5FvsWYxe2apaGNGj23ZNnOW6F1JSczLEkLXZ3C1JJO4ONj4xvMyDZueSWdopnbqPSHOPO9avmx1KB9Ez5ss3Mry7APhitzcu1aU21c7XAn20+ccGtLzlSzF2NMQYluTHje53zVV8MS5uJK2c5R5Jl3DtZBVFuquBjJJnMBeUDCGusLHedPtdeoDqttbqp6SMk9McRCZatq8ZqCxNcWQXMYdHMUfBXJmK5oybmLeYsVmqbVJNgusk8UAzoC0KEZ0j9bUX1E9YOBrOzbOXPIZ36XsX2Zb2VMC3lft03VeNnZhJbt8X8vAWzDwMlJHttd65eu2D5SYK1dIJt3hgJPur++3jzj1wYUtvFU+96W\/s3nSdxY1RQzo4t14XDcRljGRr4uV7FWXi6+pBB8sxVLE28zUYgui4O2KDRzafSnljIT7pnks6dVU\/1Y2hd81jt1eMu7x4hIMI+1X8hYrq4bKfsUcgFilpOPWUcpc0aq2cAQ6a5QGA6Ofz0F18D6TmXS5+kr4ECIuvdMTfot\/Pz81gkFASFT\/H\/h3vZqf3nxh+vrqE+ysybnSVzRY\/ULcd\/3FLZUt6xEcbzVpubuhLIaQC0LbL65rzavZCy7ksNpKpHcOzIuz\/kVEwIA83Vl0BZN+0vTyh0sZpwlceJcH2ejg5zHtMGTtzXyyvKWyAjBvLzcOnST8EXhVIRrMJMSOZNVREUgDWCukP8ASKOYP0KNrxb\/AKRBtgLI\/Ob87b8uS9+YLYCYuH4SEb+cPugB74v4vg+JUOblD7TjpO\/635brD7R2SgJAb+\/QieGLh4YCauWZEilt\/pHkD30aS\/OLwTGK8igT8HmAoc23QP0D\/wDXF\/NoehzIF630GWf0HfFRyb+eU5c00EYnZn6R2QWiMSFxeCCxpCRBUEuYSAJvo596QRv8MVBnKy4O0ByGNtjeIWwELcltXEL41sFmLfNLleBbvgCmD1uJAX5uf6NB6ROjHrtiepzOmMsO3fcVr2Z1l9LeL7HbXHgvJdwy923HB3Be1l33f3w1pYV8Rt5OoJ3FLupNpNpsjJGO2fGYLpXQren252VvtRpiDxi9tboT6UHcjeVrWpibKE4zQgrVyzkKwJG7rlk49bEVuuHK8c1uIsekw8MW6CLlZRFuHRTYOVbWl7IvgLMvW839pXAzWjp+Fh8jZOvG+bSTm45wBXMZJvrVnGbpVqsUi7bxwTVIRQpihbDLKEtP4nzXjhm+jsW9QNix0bKXHb8LKvEX0jZt423KGbx2QLBVkkSv0GSy7V5GSJPeI921Mq5BdphDqg+3BzTkvpSil2RUsbIQWTbhkJuIiHKC8dEysRfmVJK1XPIRsUqfxUZ1q1VAqhUDcgF0h9mNZ8ZPYsxRb0zHZAsXJLP3C7clRecIty8eGzVeziYSbsMiXLdKkm8bTrdwDZu5iXijFn7iik093uHpa6xftd8wZ46f7VsWQtbpyw7BWA9tOxbLumJjRZYhvXL5l70dXXmK1MOvEWz6Msx9IjHHdMWgC7Ii3BI3TJ9m2260RgXnTdni+c4pZyVwOhLFvFa8nGS3CdtLY7HIjNOISiz5EADOfia\/jlZ\/UJ4o8inTZ0+favZkw\/8AZ3zb1m8fdIl627duSIOxkzLtpOat60XKOQ7fY3RYa9zlXk4+DliJR7U6pE3Cbs6Zl1MWfZY4Ny9J4HszGuV7ezFI5gueyUMp3fkm8mjG8yXdPXvGMbhsZN1cV6TN5ndGcJOiIsG7VFmgkDdJIhOknHT7Ml6YX6k+ifHmP7Ewf1bY2iQa3GgFkQFrxTn84rUSmo106gpOatNtNxxGks0k7eliFWZvAAzpNziid+1t+1GyR134ZwhOtJ6z+niJsH9HlqXW\/YpCVFe+5o8245hflRI1k3SDFadexyzhsSTQBY5xRbNGzZk0aoINWbJkgm1ZMmbVIiDVmzaolKk2aNW6ZU00ygBSEKABsH9Z0hFSjFlKRMvHvYmXipNm2kYuVipJuo0kIyTjnqS7KQj3zVUyayKxDpqEMIGKIaNk2G6A+j+NvoVSuE55rgLHhTtXRDkUSeMo00IeHZO0FUinTUSbkOQ5QEBAQDRlFDCc5hqYw\/IAAAUApShsABQADYNv1iYtW7bfgrsta4o9eJuK17oh464Lcn4p0XkdRc3By7Z5GSse5IIgdFdI5DAO4aHKOPuhXpOs\/IZHyEozu2EwbYbeVipRq4I6aycGKkQq1g5Fq5TKoks0TRUTOUBKICAaMc5hMcwiYxjCImMI8RER3Ef\/AOcv\/9k=\"><\/p>"
                },
                "VIDEO": {
                    "name": "VIDEO",
                    "body": "<iframe width=\"1200\" height=\"768\" src=\"https:\/\/www.youtube.com\/embed\/i1Azb8wwrRA\" title=\"iPhone 14 PDP Video 16x9  SG EN\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen><\/iframe>"
                }
            }
        },




    },
});

