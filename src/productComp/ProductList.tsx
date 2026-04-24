import {
  List,
  TextInput,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
} from "react-admin";

const productFilters = [
  <TextInput source="title" alwaysOn label="商品名" key="title" />,
];

export const ProductList = () => (
  <List filters={productFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" label="商品名" />
      <NumberField source="price" />
      <TextField source="status" />
      <EditButton />
    </Datagrid>
  </List>
);
