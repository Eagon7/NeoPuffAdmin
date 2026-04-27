// src/productComp/ProductEdit.tsx
import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

export const ProductEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" label="商品名" />
      <NumberInput source="price" label="价格" />
      <TextInput source="description" label="描述" />
      <TextInput source="srcUrl" label="封面图" />
      <ArrayInput source="gallery" label="图片列表">
        <SimpleFormIterator>
          <TextInput source="" label="图片URL" />
        </SimpleFormIterator>
      </ArrayInput>
      <NumberInput source="rating" label="评分" />
      <NumberInput source="discount.amount" label="折扣金额" />
      <NumberInput source="discount.percentage" label="折扣百分比" />
      {/* // state 0下架 1上架 2新品 3畅销 */}
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
      <br /> <br />
      <ArrayInput source="specs" label="规格">
        <SimpleFormIterator>
          {/* 规格项 */}
          <TextInput source="label" label="规格项名" />
          <TextInput source="value" label="规格项值" />
        </SimpleFormIterator>
      </ArrayInput>
      <p>口味</p>
      <ArrayInput source="flavor" label="口味">
        <SimpleFormIterator>
          <TextInput source="label" label="口味项名" />
          <TextInput source="value" label="口味项值" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
