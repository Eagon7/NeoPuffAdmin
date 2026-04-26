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
      <TextField source="description" label="描述" />
      <TextField source="price" label="价格" />
      <TextField source="srcUrl" label="封面图" />
      <TextField source="gallery" label="图片列表" />
      <TextField source="rating" label="评分" />
      <TextField source="discount" label="折扣" />

      <EditButton />
    </Datagrid>
  </List>
);
