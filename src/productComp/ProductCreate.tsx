// src/productComp/ProductCreate.tsx
import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
// title: string;
// description ?: string;
// videoUrl ?: string;
// srcUrl: string;
// gallery ?: string[];
// price: number;
// discount: Discount;
// rating: number;
export const ProductCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="商品名" />
      <NumberInput source="price" label="价格" />
      <TextInput source="description" label="描述" />
      <TextInput source="srcUrl" label="封面图" />
      {/* 这是数组类型，内容不是对象 只是字符串*/}
      <ArrayInput source="gallery" label="图片列表">
        <SimpleFormIterator>
          <TextInput source="" label="图片URL" />
        </SimpleFormIterator>
      </ArrayInput>
      <NumberInput source="rating" label="评分" />
      <NumberInput source="discount.amount" label="折扣金额" />
      <NumberInput source="discount.percentage" label="折扣百分比" />
      <SelectInput
        source="state"
        label="状态"
        choices={[
          { id: 0, name: "下架" },
          { id: 1, name: "上架" },
          { id: 2, name: "新品" },
          { id: 3, name: "畅销" },
        ]}
      />
      <ArrayInput source="specs" label="规格">
        <SimpleFormIterator>
          {/* 规格项 */}
          <TextInput source="name" label="规格项名" />
          <TextInput source="value" label="规格项值" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
