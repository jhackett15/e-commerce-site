import {createSelector } from 'reselect'
import memoize from 'lodash.memoize';
//import collectionItem from '../../Components/collection-item/collection-item';

const COLLECTION_ID_MAP ={
    id: {
    hats: 1 ,
    sneakers: 2 ,
    jackets: 3 ,
    womens: 4 ,
    mens: 5
}
}
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

 //find collection.id from above and match the url param of our collection id map
 export const selectCollection = memoize((collectionUrlParam) =>
 createSelector(
   [selectCollections],
   collections =>
   collections.find( 
       collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
 
 )
 )
);
            
  
  