// @flow

declare module "shopify-type" {
  /**
   * Type for product images
   *
   * https://help.shopify.com/api/reference/product_image
   */
  declare export type ShopifyImage = {
    created_at: string,
    src: string,
    height: number,
    weight: number
  };

  declare export type ShopifyOptionsList =
    | [string]
    | [string, string]
    | [string, string, string];
}

declare module "shopify-type/collection" {
  /**
   * A Collection could be either a `CustomCollection`, or a `SmartCollection`
   *
   * https://help.shopify.com/api/reference/customcollection
   */
  declare type Collection = {
    id: number,
    handle: string,
    title: string,
    image: ?ShopifyImage,

    body_html: string,
    disjunctive: boolean,
    products: string[],
    rules: any[],
    sort_order: string,
    template_suffix: ?string,

    updated_at: string,
    published_at: string,
    published_scope: string
  };
}

declare module "shopify-type/page" {
  /**
   * Describes the values for a Shopify page
   * https://help.shopify.com/api/reference/page
   */
  declare type Page = {
    id: number,
    body_html: string,
    created_at: Date,
    updated_at: Date,
    published_at: Date,
    handle: string,
    title: string
  };

  declare module.exports: Page;
}

declare module "shopify-type/variant" {
  /**
   * Describes a Variant for a Product
   * https://help.shopify.com/api/reference/product_variant
   */
  declare type Variant = {
    id: number,
    name: string,
    title: string,

    avilable: boolean,
    barcode: string,
    featured_image: string,

    inventory_management: ?boolean,
    inventory_policy: string,
    inventory_quantity: number,
    requires_shipping: boolean,

    option1: ?string,
    option2: ?string,
    option3: ?string,
    options: Array<string>,

    compare_at_price: number,
    price: number,

    sku: ?string,
    taxable: boolean,
    title: string,
    weight: number
  };

  declare module.exports: Variant;
}

declare module "shopify-type/product" {
  /**
   * Describes the values for a Product. Contains an object
   * mapped by the variant's ID
   *
   * https://help.shopify.com/api/reference/product
   */
  declare type Product = {
    id: number,

    available: boolean,

    compare_at_price: number,
    compare_at_price_min: number,
    compare_at_price_max: number,
    compare_at_price_varies: boolean,

    content: string,
    created_at: Date,
    description: string,
    featured_image: string,
    handle: string,

    images: Array<string>,

    options: string[],
    optionMap: { [optionName: string]: string },

    price: number,
    price_min: number,
    price_max: number,
    price_varies: boolean,

    published_at: Date,

    tags: string[],
    title: string,
    type: string,

    variants: { [variantId: string]: Variant },
    vendor: string
  };

  declare module.exports: Product;
}

declare module "shopify-type/cart" {
  /**
   * This type describes an individual line item in the Shopify
   * cart response.
   */
  declare type CartItem = {
    discounted_price: number,
    discounts: any[],
    gift_card: boolean,
    grams: number,
    handle: number,
    id: number,
    image: string,
    key: string,

    line_price: number,
    original_line_price: number,
    price: number,

    product_description: string,
    product_id: number,
    product_title: string,
    product_type: string,
    properties: null,
    quantity: 1,

    requires_shipping: boolean,
    sku: string,
    title: string,
    total_discount: number,
    url: string,
    variant_id: number,
    variant_options: [string] | [string, string] | [string, string, string],

    variant_title: string,
    vendor: string
  };

  /**
   * This object defines the result of a Shopify cart
   *
   * https://help.shopify.com/themes/development/getting-started/using-ajax-api#get-cart
   */
  declare type Cart = {
    attributes: Object,
    item_count: number,
    items: CartItem[],
    note: string,
    original_total_price: number,
    requires_shipping: boolean,
    token: string,
    total_discount: number,
    total_price: number,
    total_weight: number
  };

  declare module.exports: {
    Cart: Cart,
    CartItem: CartItem
  };
}
