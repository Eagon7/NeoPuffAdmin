// src/productComp/ProductEdit.tsx
import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ProductEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" label="商品名" />
      <NumberInput source="price" />
      <SelectInput
        source="status"
        choices={[
          { id: "available", name: "Available" },
          { id: "out_of_stock", name: "Out of Stock" },
        ]}
        label="Status"
      />
    </SimpleForm>
  </Edit>
);
