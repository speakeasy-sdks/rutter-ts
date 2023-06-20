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
    categoryId: 5311.04,
    description: "nihil",
    images: [
      {
        src: "aspernatur",
      },
    ],
    name: "Miss Ana McGlynn",
    status: CreateProductBodyProductStatus.Draft,
    tags: [
      "voluptatem",
    ],
    variants: [
      {
        id: "6400313b-3e50-444f-a5fe-72dc4077d0cc",
        images: [
          {
            src: "tenetur",
          },
        ],
        inventory: {
          locationId: "non",
          totalCount: 351.07,
        },
        optionValues: [
          {
            name: "Mrs. Amos Ryan",
            value: "eveniet",
          },
          {
            name: "Clifford Stark",
            value: "quasi",
          },
          {
            name: "Dr. Matt Turcotte",
            value: "veniam",
          },
        ],
        price: 6831.92,
        sku: "itaque",
        weight: {
          unit: CreateProductBodyProductVariantsWeightUnit.Gal,
          value: 9475.61,
        },
      },
      {
        id: "2acab58b-991c-4926-9db5-89461e7421cb",
        images: [
          {
            src: "commodi",
          },
          {
            src: "possimus",
          },
          {
            src: "provident",
          },
          {
            src: "veniam",
          },
        ],
        inventory: {
          locationId: "sit",
          totalCount: 1460.04,
        },
        optionValues: [
          {
            name: "Leigh Ondricka",
            value: "perferendis",
          },
          {
            name: "Hector Mayer",
            value: "fuga",
          },
          {
            name: "Carlos Wunsch DVM",
            value: "quos",
          },
          {
            name: "Miss Jon Bailey I",
            value: "occaecati",
          },
        ],
        price: 988.46,
        sku: "veritatis",
        weight: {
          unit: CreateProductBodyProductVariantsWeightUnit.Oz,
          value: 439.28,
        },
      },
      {
        id: "8207888e-c661-483b-be96-59eb40ec16fa",
        images: [
          {
            src: "nihil",
          },
          {
            src: "nostrum",
          },
          {
            src: "rerum",
          },
          {
            src: "perferendis",
          },
        ],
        inventory: {
          locationId: "nam",
          totalCount: 3530.41,
        },
        optionValues: [
          {
            name: "Alberta Gleason",
            value: "consectetur",
          },
        ],
        price: 4430.98,
        sku: "eligendi",
        weight: {
          unit: CreateProductBodyProductVariantsWeightUnit.Lb,
          value: 6338.25,
        },
      },
    ],
  },
}, "af4452c4-842c-49b2-ad32-dafe81a88f44").then((res: CreateProductResponse) => {
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
    id: "44573fec-d473-453f-a3c8-209379aa69cd",
    images: [
      {
        src: "asperiores",
      },
      {
        src: "nam",
      },
    ],
    inventory: {
      locationId: "cumque",
      totalCount: 9596.59,
    },
    optionValues: [
      {
        name: "Ms. Marcos Nicolas",
        value: "odio",
      },
      {
        name: "Martin Daugherty",
        value: "omnis",
      },
    ],
    price: 3384.37,
    sku: "quos",
    weight: {
      unit: CreateVariantBodyVariantWeightUnit.Lb,
      value: 3064.27,
    },
  },
}, "e6861adb-55f9-4e5d-b51c-9fe8f7502bfd", "c3450841-f176-4445-a379-f3fb27e21f86").then((res: CreateVariantResponse) => {
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

sdk.products.deleteProduct("2657b36f-c6b9-4f58-bce5-25c67641a831", "2e5047b4-c21c-4cb4-a3ab-cdc91faabdd8").then((res: DeleteProductResponse) => {
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

sdk.products.deleteVariant("8e71f6c4-8252-4d77-b1e7-fd074009ef8d", "consequuntur", "natus").then((res: DeleteVariantResponse) => {
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

sdk.products.getProduct("de1dd709-7b5d-4a08-857f-a6c78a216e19", "bafeca61-9149-4814-8b64-ff8ae170ef03", ForceFetch.False).then((res: GetProductResponse) => {
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

sdk.products.listCategories("5f37e4aa-8685-4559-a673-2aa5dcb6682c", ForceFetch.False, "in").then((res: ListCategoriesResponse) => {
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
  accessToken: "0f8cfd5f-b6e9-41b9-a9f7-4846e2c3309d",
  createdAtMax: 745764,
  createdAtMin: 15205,
  cursor: "ullam",
  forceFetch: ForceFetch.True,
  limit: 434382,
  name: "Kirk Von",
  status: Status.Draft,
  updatedAtMax: 682756,
  updatedAtMin: 5938,
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
    description: "sit",
    name: "Lana Hauck",
    status: UpdateProductBodyProductStatus.Active,
  },
}, "c11a25a8-bf92-4f97-828a-d9a9f8bf8221", "125359d9-8387-4f7a-b9cd-72cd2484da21").then((res: UpdateProductResponse) => {
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
    id: "729f2ac4-1ef5-4725-b116-9ac1e41d8a23",
    images: [
      {
        src: "consequuntur",
      },
      {
        src: "neque",
      },
      {
        src: "saepe",
      },
      {
        src: "amet",
      },
    ],
    inventory: {
      locationId: "labore",
      totalCount: 9984.45,
    },
    optionValues: [
      {
        name: "Edmond O'Conner",
        value: "sunt",
      },
    ],
    price: 5980.66,
    sku: "quam",
    weight: {
      unit: UpdateVariantBodyVariantWeightUnit.Gal,
      value: 4343.45,
    },
  },
}, "de922151-fe17-4120-9985-3e9f543d8544", "dolor", "perspiciatis").then((res: UpdateVariantResponse) => {
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

