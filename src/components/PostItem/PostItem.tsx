import React from 'react';
import {Post} from '@domain';
import {Box} from '@components';
import { PostHeader } from './Components/PostHeader';
import { PostImage } from './Components/PostImage';
import { PostActions } from './Components/PostActions';
import { PostBottom } from './Components/PostBottom';


interface Props {
  post: Post;
}
export function PostItem({post}: Props) {
  return (
    <Box paddingHorizontal='s24' mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
      />
    </Box>
  );
}