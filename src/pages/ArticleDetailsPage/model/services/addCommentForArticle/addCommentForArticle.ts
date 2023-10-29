import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import {
  fetchCommentsByArticleId,
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
  >(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
      const {
        dispatch, extra, rejectWithValue, getState,
      } = thunkApi;

      const userData = getUserAuthData(getState());
      const article = getArticleDetailsData(getState());

      if (!userData || !article || !text) {
        return rejectWithValue('no data');
      }

      try {
        const response = await extra.api.post<Comment>('/comments', {
          articleId: article.id,
          userId: userData.id,
          text,
        });

        if (!response.data) {
          throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));
        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
