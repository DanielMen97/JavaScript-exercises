export enum RegionsFiltersType {
    All = 'All',
    Americas = 'Americas',
    Europe = 'Europe',
    Oceania = 'Oceania',
    Asia = 'Asia',
    Africa = 'Africa'
  }

  export interface FiltersI {
    region: RegionsFiltersType,
    search: string
  }

  export const filtersDefault: FiltersI = {
    region: RegionsFiltersType.All,
    search: ''
  }