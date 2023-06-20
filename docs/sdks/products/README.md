# products

### Available Operations

* [createProduct](#createproduct)
* [createVariant](#createvariant)
* [deleteProduct](#deleteproduct)
* [deleteVariant](#deletevariant)
* [getProduct](#getproduct)
* [listCategories](#listcategories)
* [listProducts](#listproducts)
* [updateProduct](#updateproduct)
* [updateVariant](#updatevariant)

## createProduct

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateProductResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateProductBodyProductStatus, CreateProductBodyProductVariantsWeightUnit } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.products.createProduct({
  product: {
    categoryId: 5645.97,
    description: "dolore",
    images: [
      {
        src: "accusantium",
      },
    ],
    name: "Ramon Franecki",
    status: CreateProductBodyProductStatus.Unknown,
    tags: [
      "vitae",
      "iusto",
      "atque",
    ],
    variants: [
      {
        id: "7b01afdd-7886-4241-89eb-44873f5033f1",
        images: [
          {
            src: "possimus",
          },
          {
            src: "tempore",
          },
          {
            src: "asperiores",
          },
        ],
        inventory: {
          locationId: "quasi",
          totalCount: 1597.29,
        },
        optionValues: [
          {
            name: "Mrs. Darrel Grant",
            value: "itaque",
          },
          {
            name: "Damon Mueller",
            value: "voluptate",
          },
        ],
        price: 9354.93,
        sku: "minima",
        weight: {
          unit: CreateProductBodyProductVariantsWeightUnit.Kg,
          value: 1383.06,
        },
      },
    ],
  },
}, "4a6a0e12-3b78-447e-859e-1f67f3c4cce4").then((res: CreateProductResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `createProductBody`                                                  | [shared.CreateProductBody](../../models/shared/createproductbody.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `accessToken`                                                        | *string*                                                             | :heavy_check_mark:                                                   | The access token of the connection.                                  |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateProductResponse](../../models/operations/createproductresponse.md)>**


## createVariant

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateVariantResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateVariantBodyVariantWeightUnit, VariantResponseVariantWeightUnit } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.products.createVariant({
  variant: {
    id: "b6d7696f-f3c5-4747-9013-57e44f51f8b0",
    images: [
      {
        src: "tempora",
      },
      {
        src: "quo",
      },
      {
        src: "dolor",
      },
    ],
    inventory: {
      locationId: "sunt",
      totalCount: 6050.89,
    },
    optionValues: [
      {
        name: "Samuel Mann",
        value: "odit",
      },
      {
        name: "Ana Hagenes",
        value: "tenetur",
      },
    ],
    price: 5685.6,
    sku: "modi",
    weight: {
      unit: CreateVariantBodyVariantWeightUnit.Oz,
      value: 4724.29,
    },
  },
}, "4c2d5cc4-9722-433e-a6bd-8fe5d00b979e", "f2038732-0590-4ccc-9096-400313b3e504").then((res: CreateVariantResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `createVariantBody`                                                  | [shared.CreateVariantBody](../../models/shared/createvariantbody.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `accessToken`                                                        | *string*                                                             | :heavy_check_mark:                                                   | The access token of the connection.                                  |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The Rutter generated unique ID of the object.                        |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateVariantResponse](../../models/operations/createvariantresponse.md)>**


## deleteProduct

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { DeleteProductResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.products.deleteProduct("4f65fe72-dc40-477d-8cc3-f408efc15ceb", "4d6e1eae-0f75-4aed-b2ac-ab58b991c926").then((res: DeleteProductResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accessToken`                                                | *string*                                                     | :heavy_check_mark:                                           | The access token of the connection.                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The Rutter generated unique ID of the object.                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteProductResponse](../../models/operations/deleteproductresponse.md)>**


## deleteVariant

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { DeleteVariantResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.products.deleteVariant("ddb58946-1e74-421c-be6d-9502f0ea930b", "voluptas", "sint").then((res: DeleteVariantResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accessToken`                                                | *string*                                                     | :heavy_check_mark:                                           | The access token of the connection.                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The Rutter generated unique ID of the variant.               |
| `variantId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The Rutter generated unique ID of the variant.               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteVariantResponse](../../models/operations/deletevariantresponse.md)>**


## getProduct

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetProductResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform, ProductVariantsWeightUnit } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.products.getProduct("f7ac2f72-f885-4009-8491-1608207888ec", "66183bfe-9659-4eb4-8ec1-6faf75b0b532", ForceFetch.False).then((res: GetProductResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetProductResponse](../../models/operations/getproductresponse.md)>**


## listCategories

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListCategoriesResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.products.listCategories("4da37cba-af44-452c-8842-c9b2ad32dafe", ForceFetch.False, "quasi").then((res: ListCategoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListCategoriesResponse](../../models/operations/listcategoriesresponse.md)>**


## listProducts

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListProductsResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform, ProductVariantsWeightUnit, Status } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.products.listProducts({
  accessToken: "a88f4444-573f-4ecd-8735-3f63c8209379",
  createdAtMax: 646321,
  createdAtMin: 662184,
  cursor: "ex",
  forceFetch: ForceFetch.False,
  limit: 759822,
  name: "Tommy Zemlak",
  status: Status.Draft,
  updatedAtMax: 465092,
  updatedAtMin: 579242,
}).then((res: ListProductsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListProductsRequest](../../models/operations/listproductsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListProductsResponse](../../models/operations/listproductsresponse.md)>**


## updateProduct

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { UpdateProductResponse } from "rutter-api/dist/sdk/models/operations";
import { ProductVariantsWeightUnit, UpdateProductBodyProductStatus } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.products.updateProduct({
  product: {
    description: "repellendus",
    name: "Willie Leffler",
    status: UpdateProductBodyProductStatus.Inactive,
  },
}, "22bf9589-4e68-461a-9b55-f9e5d751c9fe", "8f7502bf-dc34-4508-81f1-764456379f3f").then((res: UpdateProductResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `updateProductBody`                                                  | [shared.UpdateProductBody](../../models/shared/updateproductbody.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `accessToken`                                                        | *string*                                                             | :heavy_check_mark:                                                   | The access token of the connection.                                  |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The Rutter generated unique ID of the object.                        |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.UpdateProductResponse](../../models/operations/updateproductresponse.md)>**


## updateVariant

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { UpdateVariantResponse } from "rutter-api/dist/sdk/models/operations";
import { UpdateVariantBodyVariantWeightUnit, VariantResponseVariantWeightUnit } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.products.updateVariant({
  variant: {
    id: "b27e21f8-6265-47b3-afc6-b9f587ce525c",
    images: [
      {
        src: "quam",
      },
      {
        src: "ea",
      },
    ],
    inventory: {
      locationId: "numquam",
      totalCount: 1032.53,
    },
    optionValues: [
      {
        name: "Lee Boyer",
        value: "veniam",
      },
      {
        name: "Joanne Kirlin",
        value: "cumque",
      },
      {
        name: "Heather Sawayn",
        value: "numquam",
      },
    ],
    price: 1459.48,
    sku: "amet",
    weight: {
      unit: UpdateVariantBodyVariantWeightUnit.Lb,
      value: 7057.53,
    },
  },
}, "cdc91faa-bdd8-48e7-9f6c-48252d7771e7", "hic", "at").then((res: UpdateVariantResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `updateVariantBody`                                                  | [shared.UpdateVariantBody](../../models/shared/updatevariantbody.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `accessToken`                                                        | *string*                                                             | :heavy_check_mark:                                                   | The access token of the connection.                                  |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The Rutter generated unique ID of the variant.                       |
| `variantId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The Rutter generated unique ID of the variant.                       |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.UpdateVariantResponse](../../models/operations/updatevariantresponse.md)>**

