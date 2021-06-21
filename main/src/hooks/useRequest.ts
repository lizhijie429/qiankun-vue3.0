/*
 * @Author: lizhijie429
 * @Date: 2021-06-21 08:56:03
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-21 09:11:35
 * @Description:
 */
import { ref } from "vue";
import { http } from "../utils/http";

/*
使用axios发送异步ajax请求
*/
export function getResources<T>(url: string) {
  const result = ref<T | null>(null);
  const loading = ref(true);
  const errorMsg = ref(null);
  http
    .get(url)
    .then((response) => {
      loading.value = false;
      result.value = response.data;
    })
    .catch((e) => {
      loading.value = false;
      errorMsg.value = e.message || "未知错误";
    });

  return {
    loading,
    result,
    errorMsg,
  };
}

interface Data {}

export function postResources<T>(url: string, data: Data) {}
