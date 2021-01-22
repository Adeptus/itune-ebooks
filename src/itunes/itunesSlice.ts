import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from '../store';

export type Ebook = {
  trackId: number;
  artworkUrl100: string;
  trackName: string;
  artistName: string;
  formattedPrice: string;
  averageUserRating: number | undefined;
  userRatingCount: number | undefined;
};

type ItunesState = {
  ebooks: Ebook[];
  favoriteEbooks: Ebook[];
};

export const itunesSlice = createSlice({
  name: 'itunes',
  initialState: {
    ebooks: [],
    favoriteEbooks: []
  } as ItunesState,
  reducers: {
    fetchEbooks(state, action: PayloadAction<string>) {},
    setEbooks(state, action: PayloadAction<Ebook[]>) {
      state.ebooks = action.payload;//.sort((a, b) => (a.averageUserRating > b.averageUserRating) ? -1 : 1);
    },
    fetchFavoriteEbooks(state, action: PayloadAction) {
      state.ebooks = state.favoriteEbooks;
    },
    addToFavorite(state, action: PayloadAction<Ebook>) {
      state.favoriteEbooks.push(action.payload);
    },
  },
});

export const { fetchEbooks, setEbooks, addToFavorite, fetchFavoriteEbooks } = itunesSlice.actions;

export const selectEbooks = (state: StoreState) => state.itunes.ebooks;
export const selectFavoriteEbooks = (state: StoreState) => state.itunes.favoriteEbooks;

