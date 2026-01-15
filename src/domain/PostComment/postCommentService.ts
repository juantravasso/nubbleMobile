import { apiAdapter } from '@api';
import { Page } from '@types';
import { PostComment } from './postCommentTypes';
import { PostCommentApi } from './postCommentApi';
import { postCommentAdapter } from './postCommentAdapter';

const PER_PAGE = 10;

async function getList (
  post_id:number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentAPI = await PostCommentApi.getList(post_id,{
    page,
    per_page: PER_PAGE,
  });

  return {
    data: postCommentAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentAPI.meta),
  };
}

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await PostCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
}

async function remove(postCommentId: number): Promise<string> {
  const response = await PostCommentApi.remove(postCommentId);
  return response.message;
}

function isAllowToDelete(
  postComment: PostComment,
  userId: number | null,
  postAuthorId: number,
): boolean{
  if(postComment.author.id === userId) {
    return true;
  }
  if(postAuthorId === userId) {
    return true;
  }
  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};
