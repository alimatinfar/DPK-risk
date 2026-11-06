export type SetZustandStoreType<StoreType> = {
  (partial: (StoreType | Partial<StoreType> | ((state: StoreType) => (StoreType | Partial<StoreType>))), replace?: (false | undefined)): unknown
  (state: (StoreType | ((state: StoreType) => StoreType)), replace: true): unknown
}
