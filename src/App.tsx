import React from "react";
import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { ProductList } from "./productComp/ProductList"; // 假设你已经有了这个组件
import { ProductEdit } from "./productComp/PrductEdit";
import { ProductCreate } from "./productComp/ProductCreate";

export const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="product"
        list={ProductList}
        edit={ProductEdit}
        create={ProductCreate}
      />
      <Resource name="users" />
      {/* 你可以根据需要继续添加更多的资源 */}
    </Admin>
  );
};
