import {PostAPI} from './postTypes';
import { api, PageAPI, PageParams } from '@api'

async function getList(params?:PageParams): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('user/post',{
    params,
  })
  return response.data;
}

export const postApi = {
  getList,
};
