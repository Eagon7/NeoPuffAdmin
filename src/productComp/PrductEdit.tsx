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
      <NumberInput source="discount" label="折扣" />
      {/* // 0: 正常, 1: 禁用, 2: 删除, 3: 新品 jjj*/}
      <SelectInput
        source="state"
        label="状态"
        choices={[
          { id: 0, name: "正常" },
          { id: 1, name: "禁用" },
          { id: 2, name: "删除" },
          { id: 3, name: "新品" },
        ]}
      />
      <TextInput source="state" label="状态" />
      <ArrayInput source="specs" label="规格">
        <SimpleFormIterator>
          {/* 规格项 */}
          <TextInput source="label" label="规格项名" />
          <TextInput source="value" label="规格项值" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
