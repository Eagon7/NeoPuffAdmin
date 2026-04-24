import { fetchUtils } from "react-admin";

// 你的 API 地址
const apiUrl = "http://117.72.147.29:7881";

// 创建 HTTP 客户端实例
const httpClient = fetchUtils.fetchJson;

// 定义 dataProvider 类型
export const dataProvider = {
  // 获取列表数据
  getList: (resource: string, params: any) => {
    const { page, perPage } = params;
    const url = `${apiUrl}/${resource}?skip=${(page - 1) * perPage}&take=${perPage}`;

    return httpClient(url).then(({ json }) => {
      return {
        data: json, // 返回数据
        total: parseInt(json.length), // 数据总数
      };
    });
  },

  // 获取单个数据
  getOne: (resource: string, params: { id: string }) => {
    const url = `${apiUrl}/${resource}/${params.id}`;

    return httpClient(url).then(({ json }) => ({
      data: json,
    }));
  },

  // 创建数据
  create: (resource: string, params: { data: any }) => {
    const url = `${apiUrl}/${resource}`;
    const { data } = params;

    return httpClient(url, {
      method: "POST",
      body: JSON.stringify(data),
    }).then(({ json }) => ({
      data: json, // 返回的数据应该包含 id 字段，React-Admin 才能正常更新
    }));
  },

  // 更新数据
  update: (resource: string, params: { id: string; data: any }) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { data } = params;

    return httpClient(url, {
      method: "PUT",
      body: JSON.stringify(data),
    }).then(({ json }) => ({
      data: { id: params.id, ...json }, // 返回的数据格式必须有 id 字段
    }));
  },

  // 删除数据
  delete: (resource: string, params: { id: string }) => {
    const url = `${apiUrl}/${resource}/${params.id}`;

    return httpClient(url, {
      method: "DELETE",
    }).then(() => ({
      data: { id: params.id }, // 删除成功后返回删除的 id
    }));
  },

  // 新增：批量获取数据
  getMany: (resource: string, params: { ids: string[] }) => {
    const url = `${apiUrl}/${resource}?ids=${params.ids.join(",")}`;

    return httpClient(url).then(({ json }) => ({
      data: json,
    }));
  },

  // 新增：获取与当前资源相关的数据
  getManyReference: (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}?filter=${JSON.stringify(params.filter)}&sort=${JSON.stringify(params.sort)}&range=${JSON.stringify(params.range)}`;

    return httpClient(url).then(({ json }) => ({
      data: json,
      total: json.length, // 根据实际情况返回总数
    }));
  },

  // 新增：批量更新数据
  updateMany: (resource: string, params: { ids: string[]; data: any }) => {
    const url = `${apiUrl}/${resource}/bulk-update`;

    return httpClient(url, {
      method: "PUT",
      body: JSON.stringify({ ids: params.ids, data: params.data }),
    }).then(({ json }) => ({
      data: json,
    }));
  },

  // 新增：批量删除数据
  deleteMany: (resource: string, params: { ids: string[] }) => {
    const url = `${apiUrl}/${resource}/bulk-delete`;

    return httpClient(url, {
      method: "DELETE",
      body: JSON.stringify({ ids: params.ids }),
    }).then(() => ({
      data: params.ids.map((id) => ({ id })),
    }));
  },
};
