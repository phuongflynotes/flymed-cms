/**
|--------------------------------------------------
| All the interfaces!!
|--------------------------------------------------
*/
export interface IRisk {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: { medium: string; original: string }
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string
}

export interface IState {
  risks: Array<IRisk>
  favourites: Array<IRisk>
}

export interface IAction {
  type: string
  payload: Array<IRisk> | any
}

export type Dispatch = React.Dispatch<IAction>

export type FavAction = (
  state: IState,
  dispatch: Dispatch,
  episode: IRisk
) => IAction


export interface IRiskProps {
  risks: Array<IRisk>
  store: { state: IState; dispatch: Dispatch }
  toggleFavAction: FavAction
  favourites: Array<IRisk>
}

export interface IProps {
  risks: Array<IRisk>
  store: { state: IState; dispatch: Dispatch }
  toggleFavAction: FavAction
  favourites: Array<IRisk>

}