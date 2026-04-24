// src/productComp/ProductCreate.tsx
import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

// export type Product = {
//   description?: string;
//   videoUrl?: string;
//   type?: "video" | "image";
//   id: number;
//   title: string;
//   srcUrl: string;
//   gallery?: string[];
//   price: number;
//   discount: Discount;
//   rating: number;
// };
export const ProductCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="商品名" />
      <NumberInput source="price" />
      <TextInput source="description" label="描述" />
      <TextInput source="videoUrl" label="视频URL" />
      <SelectInput
        source="type"
        defaultValue="image"
        choices={[
          { id: "video", name: "Video" },
          { id: "image", name: "Image" },
        ]}
        label="类型"
      />
      <TextInput source="srcUrl" label="源URL" />
      <TextInput source="gallery" label="图片" />
      <NumberInput source="rating" label="评分" />
      <NumberInput source="discount" label="折扣" />
      <NumberInput source="price" label="价格" />
    </SimpleForm>
  </Create>
);
