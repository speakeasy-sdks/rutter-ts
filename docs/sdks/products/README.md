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
    categoryId: 4426.68,
    description: "eos",
    images: [
      {
        src: "cumque",
      },
      {
        src: "ut",
      },
      {
        src: "quae",
      },
      {
        src: "nihil",
      },
    ],
    name: "Krystal Abshire",
    status: CreateProductBodyProductStatus.Archived,
    tags: [
      "non",
      "accusantium",
      "corrupti",
      "itaque",
    ],
    variants: [
      {
        id: "c15ceb4d-6e1e-4ae0-b75a-edf2acab58b9",
        images: [
          {
            src: "et",
          },
          {
            src: "quisquam",
          },
          {
            src: "unde",
          },
        ],
        inventory: {
          locationId: "sed",
          totalCount: 3815.22,
        },
        optionValues: [
          {
            name: "Archie Haley",
            value: "eius",
          },
          {
            name: "Joyce Terry",
            value: "fugit",
          },
          {
            name: "Kara Rohan",
            value: "possimus",
          },
          {
            name: "Jerome Balistreri",
            value: "consequatur",
          },
        ],
        price: 8776.19,
        sku: "id",
        weight: {
          unit: CreateProductBodyProductVariantsWeightUnit.Lb,
          value: 1876.12,
        },
      },
      {
        id: "0b69f7ac-2f72-4f88-9009-049116082078",
        images: [
          {
            src: "laudantium",
          },
          {
            src: "voluptates",
          },
          {
            src: "minus",
          },
        ],
        inventory: {
          locationId: "autem",
          totalCount: 4235.5,
        },
        optionValues: [
          {
            name: "Vincent Robel",
            value: "perspiciatis",
          },
        ],
        price: 3800.34,
        sku: "ullam",
        weight: {
          unit: CreateProductBodyProductVariantsWeightUnit.Lb,
          value: 8927.12,
        },
      },
      {
        id: "b40ec16f-af75-4b0b-932a-4da37cbaaf44",
        images: [
          {
            src: "quia",
          },
          {
            src: "quod",
          },
        ],
        inventory: {
          locationId: "quaerat",
          totalCount: 5321.63,
        },
        optionValues: [
          {
            name: "Sheri McGlynn",
            value: "est",
          },
          {
            name: "Dale Christiansen",
            value: "sapiente",
          },
        ],
        price: 8968.11,
        sku: "voluptatum",
        weight: {
          unit: CreateProductBodyProductVariantsWeightUnit.Kg,
          value: 6493.73,
        },
      },
      {
        id: "88f44445-73fe-4cd4-b353-f63c8209379a",
        images: [
          {
            src: "ex",
          },
          {
            src: "occaecati",
          },
          {
            src: "optio",
          },
        ],
        inventory: {
          locationId: "at",
          totalCount: 3210.07,
        },
        optionValues: [
          {
            name: "Benny Williamson",
            value: "repellendus",
          },
          {
            name: "Willie Leffler",
            value: "totam",
          },
          {
            name: "Ruby Pfeffer",
            value: "quis",
          },
          {
            name: "Nick Haag",
            value: "praesentium",
          },
        ],
        price: 4331.94,
        sku: "vitae",
        weight: {
          unit: CreateProductBodyProductVariantsWeightUnit.Lb,
          value: 8187.39,
        },
      },
    ],
  },
}, "b55f9e5d-751c-49fe-8f75-02bfdc345084").then((res: CreateProductResponse) => {
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
    id: "1f176445-6379-4f3f-b27e-21f862657b36",
    images: [
      {
        src: "maxime",
      },
      {
        src: "vel",
      },
      {
        src: "distinctio",
      },
      {
        src: "cupiditate",
      },
    ],
    inventory: {
      locationId: "hic",
      totalCount: 3392.21,
    },
    optionValues: [
      {
        name: "Jody Turner",
        value: "nostrum",
      },
      {
        name: "Marc Koepp",
        value: "architecto",
      },
      {
        name: "Mr. Jimmie Frami",
        value: "veniam",
      },
    ],
    price: 618.44,
    sku: "dolore",
    weight: {
      unit: CreateVariantBodyVariantWeightUnit.Oz,
      value: 7303.7,
    },
  },
}, "4c21ccb4-23ab-4cdc-91fa-abdd88e71f6c", "48252d77-71e7-4fd0-b400-9ef8d29de1dd").then((res: CreateVariantResponse) => {
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

sdk.products.deleteProduct("7097b5da-08c5-47fa-ac78-a216e19bafec", "a6191498-140b-464f-b8ae-170ef03b5f37").then((res: DeleteProductResponse) => {
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

sdk.products.deleteVariant("e4aa8685-5596-4673-aaa5-dcb6682cb70f", "blanditiis", "minus").then((res: DeleteVariantResponse) => {
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

sdk.products.getProduct("fd5fb6e9-1b9a-49f7-8846-e2c3309db053", "6d9e75ca-006f-4539-ac11-a25a8bf92f97", ForceFetch.True).then((res: GetProductResponse) => {
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

sdk.products.listCategories("28ad9a9f-8bf8-4221-9253-59d98387f7a7", ForceFetch.False, "maxime").then((res: ListCategoriesResponse) => {
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
  accessToken: "d72cd248-4da2-4172-9f2a-c41ef5725f11",
  createdAtMax: 432597,
  createdAtMin: 572996,
  cursor: "id",
  forceFetch: ForceFetch.False,
  limit: 94487,
  name: "Tom Brown",
  status: Status.Inactive,
  updatedAtMax: 132517,
  updatedAtMin: 206373,
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
    description: "impedit",
    name: "Gladys Turner",
    status: UpdateProductBodyProductStatus.Unknown,
  },
}, "2dfa4a19-7f6d-4e92-a151-fe1712099853", "e9f543d8-5443-49ee-a244-60443bc15418").then((res: UpdateProductResponse) => {
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
    id: "8c2f56e8-5da7-4832-aabd-617c3b0d51a4",
    images: [
      {
        src: "quidem",
      },
      {
        src: "doloribus",
      },
    ],
    inventory: {
      locationId: "sit",
      totalCount: 1013.18,
    },
    optionValues: [
      {
        name: "Ismael Lockman III",
        value: "temporibus",
      },
      {
        name: "Rosemary Abshire",
        value: "libero",
      },
      {
        name: "Archie Stroman",
        value: "vitae",
      },
    ],
    price: 9637.49,
    sku: "delectus",
    weight: {
      unit: UpdateVariantBodyVariantWeightUnit.G,
      value: 8701.87,
    },
  },
}, "4e2ae4fb-5cb3-45d1-b638-f1edb78359ec", "impedit", "minima").then((res: UpdateVariantResponse) => {
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

