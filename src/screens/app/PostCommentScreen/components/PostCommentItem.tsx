import React from 'react';
import {Alert, Pressable} from 'react-native';
import {PostComment, postCommentService, usePostCommentRemove} from '@domain';
import {Box, ProfileAvatar, Text} from '@components';
import {useToastService} from '@services';

interface Props {
  postComment: PostComment;
  userId: number | null;
  postAuthorId: number;
  postId: number;
}
export function PostCommentItem({
  postId,
  postComment,
  userId,
  postAuthorId,
}: Props) {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove(postId, {
    onSuccess: () => {
      showToast({message: 'Cometário deletado'});
    },
  });

  const isAllowToDelete =
  userId !== null &&
  postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }
  return (
    <Pressable
      testID="post-comment-id"
      disabled={!isAllowToDelete}
      onLongPress={confirmRemove}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}