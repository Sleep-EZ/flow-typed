// @flow

const Variant = require("shopify-type/variant");

const variant: Variant = {
  id: 300000000,
  product_id: 10000000,
  title: "Small",
  price: 15.0,
  compare_at_price: 25.0,

  sku: "S",
  position: 1,

  inventory_policy: "deny",
  inventory_management: null,
  inventory_quantity: 1,
  old_inventory_quantity: 1,
  fulfillment_service: "manual",

  option1: "Small",
  option2: null,
  option3: null,

  created_at: Date.now(),
  updated_at: Date.now(),

  taxable: true,
  barcode: null,
  grams: 0,
  image_id: null,
  weight: 0,
  weight_unit: "lb",
  requires_shipping: true
};

const invalidVariant: Variant = {
  asd: 123
};
