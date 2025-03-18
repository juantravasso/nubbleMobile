import React from 'react';
import { PostItem, Screen} from '@components';
import { AppTabScreenProps } from '@routes';
import { Post, usePostList } from '@domain';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle, RefreshControl } from 'react-native';
import { HomeHeader } from './components/HomeHeader';
import { HomeEmpty } from './components/HomeEmpty';
import {useScrollToTop} from '@react-navigation/native';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const {error, loading, postList, refresh, fetchNextPage} = usePostList ();

  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post ={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshing={loading}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        contentContainerStyle={{flex:postList.length === 0 ? 1 : undefined}}
        ListHeaderComponent={<HomeHeader/>}
        ListEmptyComponent={
        <HomeEmpty refetch={refresh} error={error} loading={loading}/>}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};