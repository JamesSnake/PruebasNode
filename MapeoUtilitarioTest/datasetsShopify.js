module.exports={
	datasetEvent:{
      "name": "Event",
      "fields": [
        {
          "field": "id",
          "displayName": "id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "subject_id",
          "displayName": "subject_id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "created_at",
          "displayName": "created_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "subject_type",
          "displayName": "subject_type",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "verb",
          "displayName": "verb",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "body",
          "displayName": "body",
          "autocomplete": false,
          "type": "string",
          "default": ""
        },
        {
          "field": "message",
          "displayName": "message",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "author",
          "displayName": "author",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "description",
          "displayName": "description",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "path",
          "displayName": "path",
          "autocomplete": false,
          "type": "string"
        }
      ],
      "primaryKey": "id",
      "description": "Shopify Event"
    },
    datasetEventId:{ id: '6ccce8d4-e7e9-47e5-9cfa-44f1a954608e' },
    datasetCustomCollection:{
  "name": "CustomCollection",
  "fields": [
    {
      "field": "id",
      "displayName": "id",
      "autocomplete": false,
      "type": "integer",
      "default": 0
    },
    {
      "field": "handle",
      "displayName": "handle",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "title",
      "displayName": "title",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "updated_at",
      "displayName": "updated_at",
      "autocomplete": false,
      "type": "datetime"
    },
    {
      "field": "body_html",
      "displayName": "body_html",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "published_at",
      "displayName": "published_at",
      "autocomplete": false,
      "type": "datetime"
    },
    {
      "field": "sort_order",
      "displayName": "sort_order",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "template_suffix",
      "displayName": "template_suffix",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "published_scope",
      "displayName": "published_scope",
      "autocomplete": false,
      "type": "string"
    }
  ],
  "primaryKey": "id",
  "description": "Shopify Custom Collection"
},
datasetCustomCollectionId:{ id: 'ee69b1f7-d237-4e8b-8d79-e5fe25fbcf05' },
datasetComment:{
  "name": "Comment",
  "fields": [
    {
      "field": "id",
      "displayName": "id",
      "autocomplete": false,
      "type": "integer",
      "default": 0
    },
    {
      "field": "body",
      "displayName": "body",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "body_html",
      "displayName": "body_html",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "author",
      "displayName": "author",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "email",
      "displayName": "email",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "status",
      "displayName": "status",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "article_id",
      "displayName": "article_id",
      "autocomplete": false,
      "type": "integer",
      "default": 0
    },
    {
      "field": "blog_id",
      "displayName": "blog_id",
      "autocomplete": false,
      "type": "integer",
      "default": 0
    },
    {
      "field": "created_at",
      "displayName": "created_at",
      "autocomplete": false,
      "type": "datetime"
    },
    {
      "field": "updated_at",
      "displayName": "updated_at",
      "autocomplete": false,
      "type": "datetime"
    },
    {
      "field": "ip",
      "displayName": "ip",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "user_agent",
      "displayName": "user_agent",
      "autocomplete": false,
      "type": "string"
    },
    {
      "field": "published_at",
      "displayName": "published_at",
      "autocomplete": false,
      "type": "string"
    }
  ],
  "primaryKey": "id",
  "description": "Shopify Comment"
},
datasetCommentId:{ id: 'f4d57eeb-5126-4250-b680-96a81fb0ea82' },
datasetProduct:{
      "name": "Product",
      "fields": [
        {
          "field": "id",
          "displayName": "id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "title",
          "displayName": "title",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "body_html",
          "displayName": "body_html",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "vendor",
          "displayName": "vendor",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "product_type",
          "displayName": "product_type",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "created_at",
          "displayName": "created_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "handle",
          "displayName": "handle",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "updated_at",
          "displayName": "updated_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "published_at",
          "displayName": "published_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "template_suffix",
          "displayName": "template_suffix",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "published_scope",
          "displayName": "published_scope",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "tags",
          "displayName": "tags",
          "autocomplete": false,
          "type": "string"
        }
      ],
      "primaryKey": "id",
      "description": "Shopify Product"
    },
    datasetProductId:{ id: '30aa6e4f-35eb-45cf-b1b4-9443944a4ed9' },
    datasetProductVariant:{
      "name": "ProductVariant",
      "fields": [
        {
          "field": "id",
          "displayName": "id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "product_id",
          "displayName": "product_id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "title",
          "displayName": "title",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "price",
          "displayName": "price",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "sku",
          "displayName": "sku",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "position",
          "displayName": "position",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "grams",
          "displayName": "grams",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "inventory_policy",
          "displayName": "inventory_policy",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "compare_at_price",
          "displayName": "compare_at_price",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "fulfillment_service",
          "displayName": "fulfillment_service",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "inventory_management",
          "displayName": "inventory_management",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "option1",
          "displayName": "option1",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "option2",
          "displayName": "option2",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "option3",
          "displayName": "option3",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "created_at",
          "displayName": "created_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "updated_at",
          "displayName": "updated_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "taxable",
          "displayName": "taxable",
          "autocomplete": false,
          "type": "boolean",
          "default": false
        },
        {
          "field": "barcode",
          "displayName": "barcode",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "image_id",
          "displayName": "image_id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "inventory_quantity",
          "displayName": "inventory_quantity",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "weight",
          "displayName": "weight",
          "autocomplete": false,
          "type": "double",
          "default": 0
        },
        {
          "field": "weight_unit",
          "displayName": "weight_unit",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "old_inventory_quantity",
          "displayName": "old_inventory_quantity",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "requires_shipping",
          "displayName": "requires_shipping",
          "autocomplete": false,
          "type": "boolean",
          "default": false
        }
      ],
      "primaryKey": "id",
      "description": "Shopify Product Variants"
    },
    datasetProductVariantId:{ id: 'b05f9b7c-13c6-46ae-98c9-36623b601251' },
    datasetProductOption:{
      "name": "ProductOption",
      "fields": [
        {
          "field": "id",
          "displayName": "id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "product_id",
          "displayName": "product_id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "name",
          "displayName": "name",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "position",
          "displayName": "position",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        }
      ],
      "primaryKey": "id",
      "description": "Shopify Product Option"
    },
    datasetProductOptionId:{ id: '6937fd46-f4ea-4f3b-9758-2206068e330c' },
    datasetProductImages:{
      "name": "ProductImages",
      "fields": [
        {
          "field": "id",
          "displayName": "id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "product_id",
          "displayName": "product_id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "position",
          "displayName": "position",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "created_at",
          "displayName": "created_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "updated_at",
          "displayName": "updated_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "src",
          "displayName": "src",
          "autocomplete": false,
          "type": "string"
        }
      ],
      "primaryKey": "id",
      "description": "Shopify Product Images"
    },
    datasetProductImagesId:{ id: 'ad1ac1f0-3902-4033-95ea-a59b13814d1e' },
    datasetSmartCollection:{
      "name": "SmartCollection",
      "fields": [
        {
          "field": "id",
          "displayName": "id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "handle",
          "displayName": "handle",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "title",
          "displayName": "title",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "updated_at",
          "displayName": "updated_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "body_html",
          "displayName": "body_html",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "published_at",
          "displayName": "published_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "sort_order",
          "displayName": "sort_order",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "template_suffix",
          "displayName": "template_suffix",
          "autocomplete": false,
          "type": "string",
          "default": ""
        },
        {
          "field": "published_scope",
          "displayName": "published_scope",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "disjunctive",
          "displayName": "disjunctive",
          "autocomplete": false,
          "type": "boolean",
          "default": false
        }
      ],
      "primaryKey": "id",
      "description": "Shopify Smart Collections"
    },
    datasetSmartCollectionId:[],
    datasetCustomer:{
      "name": "Customer",
      "fields": [
        {
          "field": "id",
          "displayName": "id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "email",
          "displayName": "email",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "accepts_marketing",
          "displayName": "accepts_marketing",
          "autocomplete": false,
          "type": "boolean",
          "default": false
        },
        {
          "field": "created_at",
          "displayName": "created_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "updated_at",
          "displayName": "updated_at",
          "autocomplete": false,
          "type": "datetime"
        },
        {
          "field": "first_name",
          "displayName": "first_name",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "last_name",
          "displayName": "last_name",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "orders_count",
          "displayName": "orders_count",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "state",
          "displayName": "state",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "total_spent",
          "displayName": "total_spent",
          "autocomplete": false,
          "type": "decimal"
        },
        {
          "field": "last_order_id",
          "displayName": "last_order_id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "note",
          "displayName": "note",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "verified_email",
          "displayName": "verified_email",
          "autocomplete": false,
          "type": "boolean",
          "default": false
        },
        {
          "field": "multipass_identifier",
          "displayName": "multipass_identifier",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "tax_exempt",
          "displayName": "tax_exempt",
          "autocomplete": false,
          "type": "boolean",
          "default": false
        },
        {
          "field": "phone",
          "displayName": "phone",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "tags",
          "displayName": "tags",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "last_order_name",
          "displayName": "last_order_name",
          "autocomplete": false,
          "type": "string"
        }
      ],
      "primaryKey": "id",
      "description": "Shopify Customers"
    },
    datasetCustomerId:[],
    datasetCustomerAddress:{
      "name": "CustomerAddress",
      "fields": [
        {
          "field": "id",
          "displayName": "id",
          "autocomplete": false,
          "type": "integer",
          "default": 0
        },
        {
          "field": "first_name",
          "displayName": "first_name",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "last_name",
          "displayName": "last_name",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "company",
          "displayName": "company",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "address1",
          "displayName": "address1",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "address2",
          "displayName": "address2",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "city",
          "displayName": "city",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "province",
          "displayName": "province",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "country",
          "displayName": "country",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "zip",
          "displayName": "zip",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "phone",
          "displayName": "phone",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "name",
          "displayName": "name",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "province_code",
          "displayName": "province_code",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "country_code",
          "displayName": "country_code",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "country_name",
          "displayName": "country_name",
          "autocomplete": false,
          "type": "string"
        },
        {
          "field": "default",
          "displayName": "default",
          "autocomplete": false,
          "type": "boolean",
          "default": false
        }
      ],
      "primaryKey": "id",
      "description": "Shopify Customer Address"
    },
    datasetCustomerAddressId:[],
    
};